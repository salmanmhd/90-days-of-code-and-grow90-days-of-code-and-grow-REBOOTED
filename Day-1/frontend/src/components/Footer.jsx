function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-8 md:grid-cols-3">
        {/* Section 1: About */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-gray-200">About Us</h2>
          <p>
            Paytm provides seamless payment solutions for individuals and
            businesses. We prioritize speed, security, and simplicity for all
            users.
          </p>
        </div>

        {/* Section 2: Links */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-gray-200">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="transition-colors hover:text-[#0CBA74]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="transition-colors hover:text-[#0CBA74]"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="transition-colors hover:text-[#0CBA74]"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors hover:text-[#0CBA74]"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-gray-200">
            Contact Us
          </h2>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:support@paytm.com"
                className="text-[#0CBA74] hover:underline"
              >
                support@paytm.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+123456789"
                className="text-[#0CBA74] hover:underline"
              >
                +1 234 567 890
              </a>
            </li>
            <li>Address: 123 Payment Lane, Tech City</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Paytm. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
