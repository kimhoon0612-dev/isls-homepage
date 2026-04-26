"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { ChevronDown, Menu, X, UserCircle2, ArrowRight } from "lucide-react";

const menuItems = [
  {
    title: "About ISLS",
    href: "/about/greetings",
    subItems: [
      { name: "Greetings", href: "/about/greetings" },
      { name: "Council", href: "/about/council" },
      { name: "ISLS Member-at-Large", href: "/about/member-at-large" },
      { name: "ISLS Study Group Board", href: "/about/study-group-board" },
      { name: "Endorsement", href: "/about/endorsement" },
      { name: "ISLS Bid Manual", href: "/about/bid-manual" },
      { name: "Contact us", href: "/about/contact" },
    ],
  },
  {
    title: "Membership",
    href: "/membership/about",
    subItems: [
      { name: "About ISLS Membership", href: "/membership/about" },
      { name: "Join or Renew", href: "/membership/join" },
      { name: "My ISLS Membership", href: "/membership/mypage" },
      { name: "VOD / E-Learning", href: "/membership/vod" },
      { name: "ISLS Members list", href: "/membership/members" },
      { name: "By-laws", href: "/membership/bylaws" },
      { name: "Journal", href: "/membership/journal" },
    ],
  },
  {
    title: "Events",
    href: "/events/congress",
    subItems: [
      { name: "ISLS Congress", href: "/events/congress" },
      { name: "Single Topic Symposia", href: "/events/symposia" },
      { name: "ISLS Webinars", href: "/events/webinars" },
    ],
  },
  {
    title: "Donation",
    href: "/donation/why",
    subItems: [
      { name: "Why donation", href: "/donation/why" },
      { name: "Donation Wall", href: "/donation/wall" },
      { name: "Make a donation", href: "/donation/make" },
    ],
  },
  {
    title: "Committee",
    href: "/committee",
    subItems: [
      { name: "Introduction of the ISLS Committees", href: "/committee" }
    ]
  },
  {
    title: "Study Group",
    href: "/study-group/about",
    subItems: [
      { name: "About ISLS Study Group Platform", href: "/study-group/about" },
      { name: "Study Group Leaders", href: "/study-group/leaders" },
    ],
  },
  {
    title: "Fellowship",
    href: "/fellowship",
    subItems: [
      { name: "ISLS Paolo Muiesan Fellowship Program", href: "/fellowship" }
    ]
  },
  {
    title: "Relevant Meetings",
    href: "/relevant-meetings",
    subItems: [
      { name: "Relevant Meetings", href: "/relevant-meetings" }
    ]
  },
  {
    title: "Notice",
    href: "/notice",
    subItems: [
      { name: "Notice Board", href: "/notice" },
      { name: "E-Newsletter", href: "/notice/newsletter" },
    ]
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setExpandedMenu(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setExpandedMenu(null);
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header className="fixed top-0 w-full z-[500] bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center" onClick={closeMobile}>
                <img
                  src="https://www.isls-liversurgeon.org/images/header_logo.png"
                  alt="ISLS Logo"
                  className="h-10 lg:h-12 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 xl:space-x-3 flex-1 justify-center">
              {menuItems.map((menu) => (
                <div key={menu.title} className="relative group">
                  <Link
                    href={menu.href}
                    className={`flex items-center font-medium py-6 px-2 text-[13px] xl:text-sm transition-colors whitespace-nowrap border-b-2 ${
                      pathname?.startsWith("/" + menu.href.split("/")[1])
                        ? "text-primary border-primary"
                        : "text-gray-700 border-transparent hover:text-primary hover:border-primary"
                    }`}
                  >
                    {menu.title}
                    {menu.subItems.length > 0 && <ChevronDown className="ml-1 w-3 h-3" />}
                  </Link>

                  {menu.subItems.length > 0 && (
                    <div className="absolute top-full left-0 w-60 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-b-md overflow-hidden">
                      <div className="py-2">
                        {menu.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-2.5 text-sm transition-colors ${
                              pathname === subItem.href
                                ? "bg-red-50 text-primary font-semibold"
                                : "text-gray-600 hover:bg-red-50 hover:text-primary"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right buttons */}
            <div className="flex items-center gap-2">
              {session ? (
                <>
                  <Link href="/membership/mypage" className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-sans font-medium text-gray-700 hover:text-primary transition-colors">
                    My Page
                  </Link>
                  <button onClick={() => signOut()} className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-sans font-medium text-gray-500 hover:text-gray-900 transition-colors">
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-sans font-medium text-gray-700 hover:text-primary transition-colors">
                    Sign In
                  </Link>
                  <Link href="/join" className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-sans font-bold uppercase tracking-widest text-white bg-primary hover:bg-primary-dark transition-all">
                    Create Account
                  </Link>
                </>
              )}

              {/* Hamburger button */}
              <button
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
                className="lg:hidden inline-flex items-center justify-center p-2 text-gray-700 hover:text-primary transition-colors rounded-md"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===== MOBILE DRAWER OVERLAY ===== */}
      <div
        aria-hidden="true"
        onClick={closeMobile}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          zIndex: 998,
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(85vw, 360px)",
          backgroundColor: "#ffffff",
          zIndex: 999,
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          display: "flex",
          flexDirection: "column",
          boxShadow: "-8px 0 30px rgba(0,0,0,0.15)",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer Header */}
        <div style={{ padding: "16px 20px", display: "flex", justifyContent: "flex-end", alignItems: "center", flexShrink: 0 }}>
          <button
            type="button"
            onClick={closeMobile}
            aria-label="Close menu"
            style={{ background: "none", border: "none", cursor: "pointer", color: "#333", padding: "8px", display: "flex", alignItems: "center", borderRadius: "50%", backgroundColor: "#f5f5f5" }}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* User Profile Area */}
        <div style={{ padding: "0 24px 24px", borderBottom: "1px solid #f0f0f0" }}>
          {session ? (
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "24px", backgroundColor: "#fde8e8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <UserCircle2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#111" }}>{session.user?.name}</p>
                <p style={{ margin: 0, fontSize: "13px", color: "#666" }}>{session.user?.email}</p>
              </div>
            </div>
          ) : (
            <div>
              <p style={{ margin: "0 0 16px 0", fontSize: "18px", fontWeight: 700, color: "#111" }}>Welcome to ISLS</p>
              <div style={{ display: "flex", gap: "12px" }}>
                <Link
                  href="/login"
                  onClick={closeMobile}
                  style={{ flex: 1, textAlign: "center", padding: "12px 0", backgroundColor: "#f5f5f5", color: "#111", fontSize: "14px", fontWeight: 600, borderRadius: "6px", textDecoration: "none" }}
                >
                  Sign In
                </Link>
                <Link
                  href="/join"
                  onClick={closeMobile}
                  style={{ flex: 1, textAlign: "center", padding: "12px 0", backgroundColor: "#990000", color: "#fff", fontSize: "14px", fontWeight: 600, borderRadius: "6px", textDecoration: "none" }}
                >
                  Join
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Items */}
        <nav style={{ flex: 1, padding: "12px 0" }}>
          {menuItems.map((menu) => (
            <div key={menu.title}>
              {menu.subItems.length > 0 ? (
                <>
                  <button
                    type="button"
                    onClick={() => setExpandedMenu(expandedMenu === menu.title ? null : menu.title)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 24px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: expandedMenu === menu.title ? "#990000" : "#111111",
                      transition: "color 0.2s",
                    }}
                  >
                    <span>{menu.title}</span>
                    <ChevronDown
                      style={{
                        width: 20,
                        height: 20,
                        color: expandedMenu === menu.title ? "#990000" : "#ccc",
                        transform: expandedMenu === menu.title ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    />
                  </button>
                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: expandedMenu === menu.title ? "1000px" : "0",
                      transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      backgroundColor: "#fafafa",
                    }}
                  >
                    {menu.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={closeMobile}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "14px 24px 14px 40px",
                          fontSize: "15px",
                          color: pathname === sub.href ? "#990000" : "#555555",
                          fontWeight: pathname === sub.href ? 700 : 500,
                          textDecoration: "none",
                          borderBottom: "1px solid #f0f0f0",
                        }}
                      >
                        {pathname === sub.href && <ArrowRight className="w-4 h-4 mr-2 text-primary" />}
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={menu.href}
                  onClick={closeMobile}
                  style={{
                    display: "block",
                    padding: "16px 24px",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: pathname?.startsWith("/" + menu.href.split("/")[1]) ? "#990000" : "#111111",
                    textDecoration: "none",
                  }}
                >
                  {menu.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        {/* Mobile footer */}
        <div style={{ padding: "24px", borderTop: "1px solid #eee", backgroundColor: "#fafafa", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: "12px", color: "#999" }}>© ISLS. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

