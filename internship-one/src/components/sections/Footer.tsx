// Common Footer 

// Imported icons from react-icons

import { FaDatabase } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

/**
 * Footer component that is common to the entire layout of the website.
 ** @returns {JSX.Element} Rendered JSX element for the header.
 */

// Footer Component

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-12">
      {/* Main container */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-5 border-b border-solid border-gray-800 pb-44">
        {/* Company Information */}
        <div className="mb-8 md:mb-0">
          <span className="flex gap-2 justify-start items-center">
            <FaDatabase className="text-white mb-5" />
            <h2 className="text-xl font-bold mb-4">Nextbase</h2>
          </span>
          <address className="not-italic">
            Acme Inc., 123 Acme Street, London, UK, SW1A 1AA
          </address>
        </div>

        {/* Links and Resources */}
        <div className="flex items-center md:items-start gap-2 space-y-8 md:space-y-0 md:space-x-16 flex-col md:flex-row">
          {/* Resources Section */}
          <div className="flex items-center md:items-start gap-5 space-y-8 md:space-y-0 md:space-x-16">
            <div>
              <h3 className="font-semibold mb-4">RESOURCES</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">NextBase</a>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="font-semibold mb-4">FOLLOW US</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">GitHub</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Twitter</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col items-start w-full">
            <h3 className="font-semibold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 pt-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
          <p className="text-sm mb-4 md:mb-0">© 2023 <a href="#" className="hover:underline">April Creative Finance Limited</a> | All Rights Reserved.</p>
          <div className="flex space-x-4">
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
          </div>
        </div>
      </div>
    </footer>
  );
}
