import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-3">
          <p className="text-3xl font-semibold">Your Footer Content</p>
          <p className="mt-4 text-gray-500">&copy; {new Date().getFullYear()} Startek</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <a href="/about" className="hover:underline text-gray-300">About</a>
          <a href="/services" className="hover:underline text-gray-300">Services</a>
          <a href="/contact" className="hover:underline text-gray-300">Contact</a>
          <div>
            <p className="text-gray-300 mb-2">Subscribe to Our Newsletter:</p>
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 border-2 mb-2 rounded-md"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md ml-2 hover:bg-blue-600">
              Subscribe
            </button>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-300 mb-2">Follow Us:</p>
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white">
                <FaFacebook size={24} />
              </Link>
              <Link href="/" className="text-gray-300 hover:text-white">
                <FaTwitter size={24} />
              </Link>
              <Link href="/" className="text-gray-300 hover:text-white">
                <FaInstagram size={24} />
              </Link>
              <Link href="/" className="text-gray-300 hover:text-white">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
