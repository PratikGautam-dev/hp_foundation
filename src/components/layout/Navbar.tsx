import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="w-full h-16 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                <div className="text-2xl font-bold text-primary-orange">HPWF</div>
                <div className="hidden md:flex gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/programs">Our Work</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <Button>Donate</Button>
            </div>
        </nav>
    );
}
