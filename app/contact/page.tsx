import { FaFacebook, FaInstagram, FaMailBulk } from 'react-icons/fa';
import Link from 'next/link'
// This page is to be implemented in OR section
export default function Contact() {
  return (
    <div className="min-h-[80vh] mt-5">
      <div className="max-w-md mx-auto bg-white p-8 shadow-lg rounded-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:scale-x-105 transition-all ease-in-out focus:border-blue-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Or Contact Options */}
      <p className="text-center my-5">or contact us through</p>
      <div className="flex items-center justify-center gap-9 mb-5">
        <Link href="/" target="_blank" className="text-gray-500 hover:text-gray-400 hover:scale-110 transition-all ease-in-out duration-400">
                <FaInstagram size={32}  />
        </Link>
        <Link href="/" target="_blank" className="text-gray-500 hover:text-gray-400 hover:scale-110 transition-all ease-in-out duration-400">
                <FaFacebook size={32} />
        </Link>
        <Link href="/" target="_blank" className="text-gray-500 hover:text-gray-400 hover:scale-110 transition-all ease-in-out duration-400">
                <FaMailBulk size={32} />
        </Link>
      </div>
    </div>
  )
}
