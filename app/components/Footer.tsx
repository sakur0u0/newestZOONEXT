import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex justify-center space-x-6">
          <a
            href="#"
            className="transition-colors hover:text-yellow-100"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="transition-colors hover:text-yellow-100"
            aria-label="Twitter"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="transition-colors hover:text-yellow-100"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        <div className="text-center text-sm text-gray-400">
          <p>© 2024 ZOO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}