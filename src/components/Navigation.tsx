"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const navLinks = [
    { 
      href: "/about", 
      label: "About",
      submenu: [
        { href: "/about/about-the-journal", label: "About the Journal" },
        { href: "/about/disclaimer", label: "Disclaimer" },
        { href: "/about/submission", label: "Submission" },
       ]
    },
    { 
      href: "/editorial", 
      label: "Editorial Board",
      submenu: null
    },
    { 
      href: "/current", 
      label: "Current Issue",
      submenu: null
    },
    { 
      href: "/archives", 
      label: "Archives",
      submenu: null
    },
    { 
      href: "/authors", 
      label: "For Authors",
      submenu: [
        { href: "/authors/author-guidelines", label: "Author Guidelines" },
        { href: "/authors/publication-ethics", label: "Publication Ethics" },
        { href: "/authors/copyright", label: "Copyright Form" }
      ]
    },
    { 
      href: "/policies", 
      label: "Policies",
      submenu: [
        { href: "/policies/anti-plagiarism-policy", label: "Anti-Plagiarism Policy" },
        { href: "/policies/advertisements-policy", label: "Advertisements Policy" },
        { href: "/policies/open-access-policy", label: "Open Access Policy" },
      ]
    },
    { 
      href: "/reviewers", 
      label: "For Reviewers",
      submenu: [
        { href: "/reviewers/editorial-peer-review-process", label: "Editorial Peer Review Process" },
              ]
    },
    { 
      href: "/contact", 
      label: "Contact",
      submenu: null
    },
  ];

  const handleDropdownEnter = (href: string) => {
    if (navLinks.find(l => l.href === href)?.submenu) {
      setIsAnimating(true);
      setActiveDropdown(href);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <nav className="w-full bg-white border-b border-[#E6DDCF] px-4 md:px-8 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section - Larger */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-12 h-12 relative">
            <Image
              src="/photos/logo1.png"
              alt="JHSSI Journal Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-base font-bold text-[#3F2A1D] tracking-wider">
              JHSSI
            </span>
            <span className="font-serif text-sm text-[#6B4A2E]">
              Journal
            </span>
          </div>
        </div>

        {/* Navigation Links with Dropdowns */}
        <div className="flex items-center mx-auto">
          {navLinks.map((link, index) => (
            <div 
              key={link.href}
              className="relative"
              onMouseEnter={() => handleDropdownEnter(link.href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center">
                <Link
                  href={link.href}
                  className="px-5 py-2.5 text-[#4A4036] text-sm font-medium hover:text-[#6B4A2E] transition-colors whitespace-nowrap flex items-center gap-1.5 group"
                >
                  {link.label}
                  {link.submenu && (
                    <svg 
                      className={`w-2 h-3 transition-transform duration-300 ${activeDropdown === link.href ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {index < navLinks.length - 1 && (
                  <div className="h-5 w-px bg-[#E6DDCF]"></div>
                )}
              </div>

              {/* Scroll-like Dropdown */}
              {link.submenu && activeDropdown === link.href && (
                <div className="absolute top-full left-0 z-50 pt-2">
                  <div className="overflow-hidden">
                    {/* Scroll opening animation container */}
                    <div 
                      className={`
                        bg-white rounded-lg border border-[#E6DDCF] shadow-xl
                        ${isAnimating ? 'animate-[scrollOpen_0.4s_ease-out]' : ''}
                      `}
                      style={{
                        animationFillMode: 'forwards'
                      }}
                    >
                      {/* Top scroll gradient */}
                      <div className="h-3 bg-gradient-to-b from-[#F6F1E8] via-[#F6F1E8] to-transparent"></div>
                      
                      {/* Dropdown items */}
                      <div className="py-1">
                        {link.submenu.map((subItem, idx) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-6 py-3 text-sm text-[#4A4036] hover:text-[#6B4A2E] hover:bg-[#F6F1E8] transition-all duration-200 border-l-2 border-transparent hover:border-[#C8A45D] group/item"
                            style={{
                              animationDelay: `${idx * 0.05}s`,
                              animationFillMode: 'backwards'
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-[#C8A45D] rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                              <span>{subItem.label}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* Bottom scroll gradient */}
                      <div className="h-3 bg-gradient-to-t from-[#F6F1E8] via-[#F6F1E8] to-transparent"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Login/Register Buttons */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="h-6 w-px bg-[#E6DDCF]"></div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-6 py-2.5 bg-[#6B4A2E] text-white text-sm font-medium rounded-full hover:bg-[#5A3D26] transition-colors whitespace-nowrap shadow-sm hover:shadow-md"
            >
              Login
            </Link>
            
          </div>
        </div>

      </div>
    </nav>
  );
}