"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Palette,
  Drama,
  Home,
  BookOpen,
  Menu,
  Wrench,
  FileText,
  FlaskConical,
  Calculator,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Navigation() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/art", label: "Art", icon: Palette },
    { href: "/drama-puppetry", label: "Drama & Puppetry", icon: Drama },
    { href: "/movement-music", label: "Movement & Music", icon: Sparkles },
    {
      href: "/language-literacy",
      label: "Language & Literacy",
      icon: BookOpen,
    },
    {
      href: "/science",
      label: "Science",
      icon: FlaskConical,
    },
    {
      href: "/engineering",
      label: "Engineering",
      icon: Wrench,
    },
    {
      href: "/technologies",
      label: "Technologies",
      icon: FlaskConical,
    },
    {
      href: "/mathematics-numeracy",
      label: "Mathematics & Numeracy",
      icon: Calculator,
    },
    {
      href: "/humanities-social-sciences",
      label: "Humanities & Social Sciences",
      icon: FileText,
    },
    {
      href: "/integrated-curriculum",
      label: "Integrated Curriculum",
      icon: Sparkles,
    },
  ];

  const NavLink = ({
    item,
    onClick = () => {},
  }: {
    item: (typeof navItems)[0];
    onClick?: () => void;
  }) => {
    const Icon = item.icon;
    const isActive = pathname === item.href;

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={onClick}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
          isActive
            ? "bg-purple-100 text-purple-700"
            : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
        }`}
      >
        <Icon className="h-5 w-5" />
        <span className="font-medium">{item.label}</span>
      </Link>
    );
  };

  return (
    <nav className="bg-white shadow-lg border-b-4 border-gradient-to-r from-yellow-300 to-pink-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-800">
                Facilitating Creativity
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Show first 3, rest in hamburger */}
          <div className="hidden md:flex space-x-4 items-center">
            {navItems.slice(0, 3).map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
            <div className="relative group">
              <button
                className="flex items-center px-3 py-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors border border-transparent group-hover:border-purple-200 focus:outline-none"
                onClick={() => setIsOpen((open) => !open)}
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6 mr-1" />
                <span className="font-medium">More</span>
              </button>
              {/* Dropdown for remaining menu items */}
              {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-purple-100 z-50 animate-fade-in">
                  <div className="flex flex-col py-2">
                    {navItems.slice(3).map((item) => (
                      <NavLink
                        key={item.href}
                        item={item}
                        onClick={() => setIsOpen(false)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <NavLink item={item} onClick={() => setIsOpen(false)} />
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          )}

          {/* Fallback for when isMobile is undefined (SSR) */}
          {isMobile === undefined && (
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
