"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, CalendarDays, Users, UserCircle2 } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      label: "Events",
      href: "/events/congress",
      icon: CalendarDays,
      isActive: pathname?.startsWith("/events"),
    },
    {
      label: "Membership",
      href: "/membership/join",
      icon: Users,
      isActive: pathname?.startsWith("/membership") && !pathname?.startsWith("/membership/mypage"),
    },
    {
      label: "My ISLS",
      href: "/membership/mypage",
      icon: UserCircle2,
      isActive: pathname?.startsWith("/membership/mypage") || pathname?.startsWith("/login"),
    },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[490] bg-white border-t border-gray-200 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <nav className="flex justify-around items-center h-[68px]">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all ${
                item.isActive ? "text-primary" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <div className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                item.isActive ? "bg-red-50" : "bg-transparent"
              }`}>
                <Icon
                  className={`w-5 h-5 transition-transform ${item.isActive ? "scale-110" : "scale-100"}`}
                  strokeWidth={item.isActive ? 2.5 : 2}
                />
              </div>
              <span className={`text-[10px] font-sans font-bold tracking-wide ${item.isActive ? "text-primary" : "text-gray-500"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
