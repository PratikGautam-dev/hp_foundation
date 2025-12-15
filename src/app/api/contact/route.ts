
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    subject: z.string().min(5),
    message: z.string().min(10),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // 1. Validate Input
        const validatedData = contactSchema.parse(body);

        // 2. Create Database Record
        const contact = await prisma.contactForm.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                phone: validatedData.phone,
                subject: validatedData.subject,
                message: validatedData.message,
                status: 'new',
            },
        });

        // 3. Send Email Notification (Mock implementation for now)
        // In a real app, you would use Resend, SendGrid, etc.
        console.log(`New contact form submission from ${validatedData.name}: ${validatedData.subject}`);

        return NextResponse.json({
            success: true,
            data: {
                id: contact.id,
                message: "Your message has been received."
            }
        });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ success: false, error: "Invalid data", details: (error as z.ZodError).errors }, { status: 400 });
        }
        console.error('Contact API Error:', error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}
