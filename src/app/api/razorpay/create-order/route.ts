import { NextResponse } from 'next/server';
import { razorpay } from '@/lib/razorpay';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const createOrderSchema = z.object({
    amount: z.number().min(1), // Amount in INR
    cause: z.string(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    pan: z.string().optional(),
    isAnonymous: z.boolean().optional(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = createOrderSchema.parse(body);

        const options = {
            amount: validatedData.amount * 100, // Razorpay expects amount in paise
            currency: 'INR',
            receipt: `rcpt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        // Create a pending donation record in the database
        await prisma.donation.create({
            data: {
                amount: validatedData.amount,
                cause: validatedData.cause,
                name: validatedData.name,
                email: validatedData.email,
                phone: validatedData.phone,
                pan: validatedData.pan,
                isAnonymous: validatedData.isAnonymous || false,
                transactionId: order.id, // Use Razorpay Order ID as transaction ID initially
                paymentStatus: 'pending',
                paymentMethod: 'razorpay',
                paymentGateway: 'razorpay',
                donationType: 'one-time',
                currency: 'INR',
            },
        });

        return NextResponse.json({
            order_id: order.id,
            amount: order.amount,
            currency: order.currency,
            key_id: process.env.RAZORPAY_KEY_ID, // Send key_id to frontend
        });
    } catch (error) {
        console.error('Razorpay Order Creation Error:', error);
        return NextResponse.json(
            { error: 'Error creating order' },
            { status: 500 }
        );
    }
}
