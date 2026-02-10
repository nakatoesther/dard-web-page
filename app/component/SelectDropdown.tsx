"use client";
import React, { useState, useRef } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';

const SelectDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Use our custom hook to close menu on outside click
  useClickOutside(menuRef, () => setIsOpen(false));

  const menuItems = [
    "Profiling & Analytics",
    "Field Force Management",
    "SME Zone",
    "Fertilizer Optimization",
    "Market Linkages",
    "Financial Linkages",
    "AZ Bundle Insurance",
    "Advisory Services"
  ];

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      {/* The Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-[#2D6A4F] font-medium hover:opacity-80 transition-opacity"
      >
        Services
        <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* The Menu Content */}
      {isOpen && (
        <div className="absolute left-0 mt-3 w-72 bg-white rounded-2xl shadow-2xl ring-1 ring-black/5 z-50 overflow-hidden animate-in fade-in zoom-in duration-150">
          <div className="py-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block px-6 py-4 text-[16px] text-gray-800 hover:bg-gray-50 hover:text-[#2D6A4F] transition-colors border-b border-gray-50 last:border-none"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;