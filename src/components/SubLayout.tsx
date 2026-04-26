"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SubLayoutProps {
  title: string;
  menuTitle: string;
  children: React.ReactNode;
  menuItems: { name: string; href: string }[];
  currentPath: string;
}

const headerImageMap: Record<string, string> = {
  about: "https://www.isls-liversurgeon.org/images/sub_img06.jpg",
  membership: "https://www.isls-liversurgeon.org/images/sub_img01.jpg",
  events: "https://www.isls-liversurgeon.org/images/sub_img02.jpg",
  donation: "https://www.isls-liversurgeon.org/images/sub_img01.jpg",
  committee: "https://www.isls-liversurgeon.org/images/sub_img05.jpg",
  "study-group": "https://www.isls-liversurgeon.org/images/sub_img06.jpg",
  fellowship: "https://www.isls-liversurgeon.org/images/sub_img02.jpg",
  "relevant-meetings": "https://www.isls-liversurgeon.org/images/sub_img05.jpg",
  notice: "https://www.isls-liversurgeon.org/images/sub_img03.jpg",
};

export default function SubLayout({ title, menuTitle, children, menuItems, currentPath }: SubLayoutProps) {
  const category = currentPath.split("/")[1] || "";
  const headerImageUrl = headerImageMap[category] || "https://www.isls-liversurgeon.org/images/sub_img01.jpg";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeItem = menuItems.find((item) => item.href === currentPath);

  return (
    <div className="flex flex-col w-full bg-[#fcfcfc]">
      {/* Subpage Header Banner */}
      <section
        className="relative w-full h-[220px] sm:h-[300px] flex items-center justify-center overflow-hidden bg-primary-dark bg-cover bg-center"
        style={{ backgroundImage: `url('${headerImageUrl}')` }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 text-center px-4">
          <p className="text-xs font-sans font-bold tracking-[0.3em] uppercase text-white/60 mb-3">ISLS</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-wide">
            {title}
          </h1>
        </div>
      </section>

      {/* Mobile sub-menu (Horizontal Scroll Tabs) */}
      <div className="lg:hidden bg-white border-b border-gray-200 shadow-sm sticky top-[80px] z-[400]">
        <div className="flex overflow-x-auto hide-scrollbar scroll-smooth">
          {menuItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap px-5 py-3.5 text-sm font-sans font-medium border-b-2 transition-colors flex-shrink-0 ${
                  isActive
                    ? "text-primary border-primary bg-red-50/30"
                    : "text-gray-500 border-transparent hover:text-gray-800"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-16 w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Desktop LNB */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden sticky top-28">
            <div className="bg-primary px-6 py-5">
              <h2 className="font-serif text-xl text-white font-bold">{menuTitle}</h2>
            </div>
            <ul className="flex flex-col divide-y divide-gray-50">
              {menuItems.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-6 py-4 font-sans text-sm transition-colors border-l-4 ${
                        isActive
                          ? "border-l-primary bg-red-50 text-primary font-bold"
                          : "border-l-transparent text-gray-600 hover:bg-red-50 hover:text-primary hover:border-l-primary/40"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 bg-white border border-gray-100 p-6 sm:p-8 md:p-12 shadow-sm rounded-lg min-h-[400px]">
          {children}
        </div>
      </section>
    </div>
  );
}
