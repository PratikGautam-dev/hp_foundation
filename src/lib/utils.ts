import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(amount);
}

export function formatPhone(phone: string): string {
    // Removes all non-numeric characters
    const cleanPhone = phone.replace(/[^\d]/g, "");

    // Checks if it starts with 91 and has 12 digits, or just 10 digits
    if (cleanPhone.length === 12 && cleanPhone.startsWith("91")) {
        return `+${cleanPhone}`;
    } else if (cleanPhone.length === 10) {
        return `+91${cleanPhone}`;
    }
    return phone; // Return original if validation fails, or handle error
}

export function validatePhone(phone: string): boolean {
    const phoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
    return phoneRegex.test(phone);
}

export function validatePAN(pan: string): boolean {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
}

export function formatDate(date: Date | string | number): string {
    return new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));
}
