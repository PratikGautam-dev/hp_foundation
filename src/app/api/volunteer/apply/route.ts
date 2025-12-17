import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const volunteerSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\+91[6-9]\d{9}$/, "Invalid phone number"),
    age: z.number().min(16, "Must be at least 16 years old").max(100, "Invalid age"),
    availability: z.string().min(1, "Please select availability"),
    skills: z.string().min(3, "Please describe your skills"),
    experience: z.string().optional(),
    motivation: z.string().min(10, "Please share your motivation (at least 10 characters)"),
    programInterest: z.string().min(1, "Please select a program"),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const validatedData = volunteerSchema.parse(body);

        const volunteer = await prisma.volunteerApplication.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                phone: validatedData.phone,
                age: validatedData.age,
                availability: validatedData.availability,
                skills: validatedData.skills,
                experience: validatedData.experience || '',
                motivation: validatedData.motivation,
                programInterest: validatedData.programInterest,
                status: 'pending',
            },
        });

        console.log('✅ Volunteer application created:', volunteer.id);

        return NextResponse.json(
            {
                success: true,
                message: 'Application received successfully',
                applicationId: volunteer.id,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('❌ Volunteer application error:', error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Validation failed',
                    errors: error.issues,
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: false,
                message: 'Failed to submit application. Please try again.',
            },
            { status: 500 }
        );
    }
}
