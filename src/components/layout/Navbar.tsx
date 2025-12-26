"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Our Work", href: "/programs", hasDropdown: true, id: "programs" },
        { label: "Impact", href: "/impact" },
        { label: "Get Involved", href: "/get-involved", hasDropdown: true, id: "get-involved" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "h-[65px] bg-white shadow-md py-0"
                        : "h-[85px] bg-white/95 backdrop-blur-sm py-0"
                )}
            >
                <div className="container mx-auto px-4 h-full flex items-center justify-between shadow-none">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        {/* Replace with Image component when logo file is available */}
                        <div className={cn(
                            "font-heading font-extrabold text-primary-orange leading-tight transition-all duration-300",
                            isScrolled ? "text-2xl" : "text-3xl"
                        )}>
                            HPWF
                        </div>
                        <span className={cn(
                            "hidden sm:block font-medium text-gray-800 transition-all duration-300",
                            isScrolled ? "text-sm" : "text-base"
                        )}>
                            | Hira Prasad Welfare Foundation
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.id!)}
                                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary-orange py-2",
                                        pathname === item.href ? "text-primary-orange" : "text-gray-700"
                                    )}
                                >
                                    {item.label}
                                    {item.hasDropdown && (
                                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary-orange" />
                                    )}
                                </Link>

                                {/* Dropdowns */}
                                {item.id === "programs" && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                                        <MegaMenu isOpen={activeDropdown === "programs"} onClose={() => setActiveDropdown(null)} />
                                    </div>
                                )}

                                {item.id === "get-involved" && activeDropdown === "get-involved" && (
                                    <div className="absolute top-full right-0 pt-2 w-48 animate-fade-in">
                                        <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                                            <Link href="/donate" className="block px-4 py-2 hover:bg-orange-50 hover:text-primary-orange text-sm font-medium text-gray-700 transition" onClick={() => setActiveDropdown(null)}>Donate</Link>
                                            <Link href="/get-involved#volunteer" className="block px-4 py-2 hover:bg-orange-50 hover:text-primary-orange text-sm font-medium text-gray-700 transition" onClick={() => setActiveDropdown(null)}>Volunteer</Link>
                                            <Link href="/get-involved#partner" className="block px-4 py-2 hover:bg-orange-50 hover:text-primary-orange text-sm font-medium text-gray-700 transition" onClick={() => setActiveDropdown(null)}>Partner with Us</Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <Link href="/donate" className="hidden lg:block">
                            <Button
                                className={cn(
                                    "bg-gradient-to-r from-primary-orange to-primary-red hover:shadow-lg text-white font-semibold transition-all duration-300",
                                    isScrolled ? "px-6 py-2.5 text-sm" : "px-8 py-3 text-base"
                                )}
                            >
                                Donate Now
                            </Button>
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-gray-800"
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open menu"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </>
    );
}
