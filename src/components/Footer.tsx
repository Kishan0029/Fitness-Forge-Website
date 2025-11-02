import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[var(--gym-red)] p-3 rounded-lg">
                <div className="relative w-12 h-12">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1762113469157.png?width=8000&height=8000&resize=contain"
                    alt="Fitness Forge Logo"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-wider">FITNESS FORGE</span>
                <span className="text-xs text-[var(--gym-grey)]">BUILD YOUR LEGACY</span>
              </div>
            </div>
            <p className="text-[var(--gym-grey)] text-sm">
              Forge Your Strength. Build Your Legacy. Join us and transform your life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[var(--gym-red)]">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[var(--gym-grey)] hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-[var(--gym-grey)] hover:text-white transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[var(--gym-grey)] hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-[var(--gym-grey)] hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[var(--gym-red)]">CONTACT US</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[var(--gym-red)] flex-shrink-0 mt-0.5" />
                <span className="text-[var(--gym-grey)] text-sm">
                  Dwarka Nagar, Godse Nagar, Belagavi, Karnataka 590006
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[var(--gym-red)]" />
                <span className="text-[var(--gym-grey)] text-sm">8722584343</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[var(--gym-red)]" />
                <span className="text-[var(--gym-grey)] text-sm">info@fitnessforge.com</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[var(--gym-red)]">GYM HOURS</h3>
            <ul className="space-y-2 mb-6">
              <li className="text-[var(--gym-grey)] text-sm">Mon - Fri: 5:00 AM - 11:00 PM</li>
              <li className="text-[var(--gym-grey)] text-sm">Saturday: 6:00 AM - 10:00 PM</li>
              <li className="text-[var(--gym-grey)] text-sm">Sunday: 7:00 AM - 9:00 PM</li>
            </ul>
            <h3 className="text-lg font-bold mb-4 text-[var(--gym-red)]">FOLLOW US</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--gym-grey)]/20 p-2 rounded-lg hover:bg-[var(--gym-red)] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--gym-grey)]/20 p-2 rounded-lg hover:bg-[var(--gym-red)] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--gym-grey)]/20 p-2 rounded-lg hover:bg-[var(--gym-red)] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--gym-grey)]/20 mt-8 pt-8 text-center">
          <p className="text-[var(--gym-grey)] text-sm">
            © {new Date().getFullYear()} Fitness Forge Gym. All rights reserved. Forge Your Strength. Build Your Legacy.
          </p>
        </div>
      </div>
    </footer>
  );
}