"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";

export default function CongressPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    try {
      const lastDismissed = localStorage.getItem("isls_popup_dismissed_v2");
      if (!lastDismissed) {
        // Delay popup by 1.5s so navbar loads first and user can interact
        const timer = setTimeout(() => setIsOpen(true), 1500);
        return () => clearTimeout(timer);
      } else {
        const dismissDate = new Date(lastDismissed).getTime();
        const now = Date.now();
        const hours24 = 24 * 60 * 60 * 1000;
        if (now - dismissDate > hours24) {
          const timer = setTimeout(() => setIsOpen(true), 1500);
          return () => clearTimeout(timer);
        }
      }
    } catch {
      // localStorage may not be available in some environments
    }
  }, []);

  const handleClose = () => setIsOpen(false);

  const handleDismiss24Hours = () => {
    try {
      localStorage.setItem("isls_popup_dismissed_v2", new Date().toISOString());
    } catch {}
    setIsOpen(false);
  };

  return (
    <>
      {/* CTA Button — always visible in hero */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="bg-primary hover:bg-primary-light text-white px-8 py-4 font-sans font-medium text-sm tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(139,0,0,0.4)] hover:shadow-[0_0_30px_rgba(139,0,0,0.6)] flex items-center group"
      >
        ISLS 2026 Congress{" "}
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Popup Modal — z-index BELOW Navbar (z-[500]) so navbar stays clickable */}
      {hasMounted && isOpen &&
        createPortal(
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) handleClose();
            }}
            style={{
              position: "fixed",
              inset: 0,
              // z-index 400 = below navbar (z-500) so hamburger remains tappable
              zIndex: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.7)",
              padding: 16,
              // Push popup content below navbar height (80px)
              paddingTop: 96,
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                maxWidth: 896,
                width: "100%",
                borderRadius: 8,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                maxHeight: "calc(100vh - 120px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: "14px 20px",
                  backgroundColor: "#990000",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 16, margin: 0 }}>
                  ISLS Announcements
                </h3>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close popup"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "rgba(255,255,255,0.9)",
                    padding: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 4,
                    minWidth: 44,
                    minHeight: 44,
                  }}
                >
                  <X style={{ width: 20, height: 20 }} />
                </button>
              </div>

              {/* Body */}
              <div
                style={{
                  padding: "20px 24px",
                  overflowY: "auto",
                  backgroundColor: "#f9fafb",
                  flex: 1,
                  WebkitOverflowScrolling: "touch",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: 16,
                  }}
                >
                  <Link href="/notice" onClick={handleClose} style={{ display: "block", textDecoration: "none" }}>
                    <div style={{ overflow: "hidden", backgroundColor: "#fff", borderRadius: 4, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                      <img
                        src="https://www.isls-liversurgeon.org/images/2025/pop_2025111001.jpg"
                        alt="ISLS Congress Notice"
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                  </Link>
                  <Link href="/donation/why" onClick={handleClose} style={{ display: "block", textDecoration: "none" }}>
                    <div style={{ overflow: "hidden", backgroundColor: "#fff", borderRadius: 4, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                      <img
                        src="https://www.isls-liversurgeon.org/images/2025/pop_2025111002.jpg"
                        alt="ISLS Donation Notice"
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div
                style={{
                  padding: "12px 20px",
                  backgroundColor: "#fff",
                  borderTop: "1px solid #eeeeee",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                  flexShrink: 0,
                  flexWrap: "wrap",
                }}
              >
                <button
                  type="button"
                  onClick={handleDismiss24Hours}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#aaa",
                    fontSize: 12,
                    textDecoration: "underline",
                    padding: "8px 0",
                    minHeight: 44,
                  }}
                >
                  Close this pop-up for next 24 hours
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  style={{
                    padding: "10px 24px",
                    backgroundColor: "#111111",
                    color: "#ffffff",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    minHeight: 44,
                    minWidth: 80,
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
