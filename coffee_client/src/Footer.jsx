import React from 'react'
import logo from './assets/more/logo1.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer(){
  return (
  <footer className="-mt-6 bg-[var(--page-bg)] py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-10" />
            <h3 className="text-2xl" style={{ fontFamily: 'Rancho, cursive' }}>Byte & Beans</h3>
          </div>
          <p className="mt-4 text-gray-700 max-w-lg">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>

          <div className="mt-6 flex items-center gap-4">
            <a href="#" className="p-3 rounded-full bg-[#e9dcc9] text-[#3b1f1f]" aria-label="facebook"><FaFacebookF /></a>
            <a href="#" className="p-3 rounded-full bg-[#e9dcc9] text-[#3b1f1f]" aria-label="twitter"><FaTwitter /></a>
            <a href="#" className="p-3 rounded-full bg-[#e9dcc9] text-[#3b1f1f]" aria-label="instagram"><FaInstagram /></a>
            <a href="#" className="p-3 rounded-full bg-[#e9dcc9] text-[#3b1f1f]" aria-label="linkedin"><FaLinkedinIn /></a>
          </div>

          <h4 className="mt-8 text-xl" style={{ fontFamily: 'Rancho, cursive' }}>Get in Touch</h4>
          <ul className="mt-4 text-gray-700 space-y-3">
            <li>📞 +88 015** *** 333</li>
            <li>✉️ mehedi.hridoy101@gmail.com</li>
            <li>📍 H Block, Mirpur 2, Dhaka</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl mb-4" style={{ fontFamily: 'Rancho, cursive' }}>Connect with Us</h3>
          <form className="space-y-4">
            <input placeholder="Name" className="w-full p-3 border rounded bg-white" />
            <input placeholder="Email" className="w-full p-3 border rounded bg-white" />
            <textarea placeholder="Message" className="w-full p-3 border rounded bg-white h-32" />
            <button className="mt-2 px-6 py-2 rounded-full border-2 border-[#3b1f1f]">Send Message</button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-gray-700 bg-[var(--page-bg)]">
        <div>© {new Date().getFullYear()} Byte & Beans | All Rights Reserved</div>
        <div className="text-sm mt-1">Developed by Mehedi Hasan Hridoy</div>
      </div>
    </footer>
  )
}
