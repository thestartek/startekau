import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="shadow-black shadow-2xl md:p-5 p-3 flex items-center justify-center">
      <div className="container max-w-[1080px] flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left mb-4 md:mb-3">
          <p className="text-3xl font-semibold text-center">Startek AU</p>
          <p className="mt-4 text-gray-500 text-center">&copy; {new Date().getFullYear()} Startek</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <p className="text-gray-400 mb-2">Subscribe to Our Newsletter:</p>
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 border-2 mb-2 rounded-md"
            />
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md ml-2 hover:bg-blue-600 transition-all ease-in-out duration-500">
              Subscribe
            </button>
        </div>
        <div className="mt-4 md:mt-0">
            <p className="text-gray-400 mb-2 md:text-left text-center">Follow Us:</p>
            <div className="flex space-x-4 pb-4">
              <Link href="https://www.facebook.com/starteknp" className="text-gray-500 hover:text-gray-400 transition-all ease-in-out duration-400">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://twitter.com/starteknp" target="_blank" className="text-gray-500 hover:text-gray-400 transition-all ease-in-out duration-400">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://www.instagram.com/starteknp/" target="_blank" className="text-gray-500 hover:text-gray-400 transition-all ease-in-out duration-400">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://www.youtube.com/channel/UCZ9yNb94w_SFsz7rQ1LGkyw" target="_blank" className="text-gray-500 hover:text-gray-400 transition-all ease-in-out duration-400">
                <FaYoutube size={24} />
              </Link>
            </div>
              <Link href="/policy" target="_blank" className="text-gray-400 text-xl py-4 md:text-left text-center footer">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
