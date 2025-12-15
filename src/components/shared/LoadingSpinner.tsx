import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}

export default function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: "w-4 h-4",
        md: "w-8 h-8",
        lg: "w-12 h-12",
        xl: "w-16 h-16",
    };

    return (
        <div className="flex justify-center items-center" aria-label="Loading">
            <Loader2
                className={cn(
                    "animate-spin text-primary-orange",
                    sizeClasses[size],
                    className
                )}
            />
        </div>
    );
}
