import Link from "next/link";
import { Droplets } from "lucide-react";

import { footerLinks, socialLinks, siteConfig } from "@/lib/site-data";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-8 bg-[#020617] border-t border-[#1e293b]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo - данные из siteConfig */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1e88e5]">
              <Image src={"/icon.svg"} alt="Logo" width={32} height={32} />
            </div>
            <span className="text-sm font-semibold text-white">
              {siteConfig.name.toUpperCase()} © {siteConfig.year}
            </span>
          </div>

          {/* Links - данные из footerLinks */}
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-[#94a3b8]">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social - данные из socialLinks */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                aria-label={social.label}
                className="text-[#94a3b8] hover:text-white transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
