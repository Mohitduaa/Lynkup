import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6">
        {/* Contact Us Section */}
        <h2 className="text-lg lg:text-xl font-bold mb-4">Contact Us</h2>
        <ul className="space-y-2">
          <li>
            <strong>Social Media:</strong>{" "}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Link
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:example@example.com"
              className="text-blue-400 hover:underline"
            >
              example@example.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890" className="text-blue-400 hover:underline"
>
              +123 456 7890
            </a>
          </li>
        </ul>

        <hr className="my-4 border-gray-700" />

        <div className="text-center text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
