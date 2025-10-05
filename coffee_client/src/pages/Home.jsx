import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import AuthContext from '../components/context/AuthContext'
import Cart from './Cart'
import hero from '../assets/more/6.jpeg'
import icon1 from '../assets/icons/1.png'
import icon2 from '../assets/icons/2.png'
import icon3 from '../assets/icons/3.png'
import icon4 from '../assets/icons/4.png'
import g9 from '../assets/cups/Rectangle 9.png'
import g10 from '../assets/cups/Rectangle 10.png'
import g11 from '../assets/cups/Rectangle 11.png'
import g12 from '../assets/cups/Rectangle 12.png'
import g13 from '../assets/cups/Rectangle 13.png'
import g14 from '../assets/cups/Rectangle 14.png'
import g15 from '../assets/cups/Rectangle 15.png'
import g16 from '../assets/cups/Rectangle 16.png'

export default function Home(){
  useContext(AuthContext)

  return (
    <div>
     
      <section className="relative">
        <div className="h-[72vh] md:h-[80vh]">
          
          <img src={hero} alt="hero" className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }} />
          <div className="absolute inset-0 bg-black opacity-60" style={{ zIndex: 1 }} />

          <div className="relative max-w-7xl mx-auto h-full flex items-center justify-center px-6" style={{ zIndex: 2 }}>
            <div className="w-full max-w-2xl text-center text-white">
              <h1
                className="font-bold leading-tight mx-auto"
                style={{
                  fontFamily: 'Rancho, cursive',
                  fontSize: 'clamp(28px, 5.5vw, 56px)'
                }}
              >
                Would you like a Cup of Delicious Coffee?
              </h1>
              <p className="mt-4 text-sm md:text-base text-gray-200 mx-auto" style={{ maxWidth: '44rem' }}>
                It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
              </p>
              <div className="mt-6">
                <button className="bg-[#d4b48a] text-[#2d1f16] px-4 py-2 rounded font-medium shadow interactive-transition hover:bg-transparent hover:text-white hover:border hover:border-white">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-[var(--page-bg)]">
        <div className="grid-16">
          <div className="content-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              <div className="text-center p-6">
                <img src={icon1} alt="aroma" className="mx-auto h-12 w-12" />
                <h3 className="mt-4 text-xl" style={{ fontFamily: 'Rancho, cursive' }}>Awesome Aroma</h3>
                <p className="text-sm text-gray-600 mt-2">You will definitely be a fan of the design & aroma of your coffee</p>
              </div>

              <div className="text-center p-6">
                <img src={icon2} alt="quality" className="mx-auto h-12 w-12" />
                <h3 className="mt-4 text-xl" style={{ fontFamily: 'Rancho, cursive' }}>High Quality</h3>
                <p className="text-sm text-gray-600 mt-2">We served the coffee to you maintaining the best quality</p>
              </div>

              <div className="text-center p-6">
                <img src={icon3} alt="pure" className="mx-auto h-12 w-12" />
                <h3 className="mt-4 text-xl" style={{ fontFamily: 'Rancho, cursive' }}>Pure Grades</h3>
                <p className="text-sm text-gray-600 mt-2">The coffee is made of the green coffee beans which you will love</p>
              </div>

              <div className="text-center p-6">
                <img src={icon4} alt="roast" className="mx-auto h-12 w-12" />
                <h3 className="mt-4 text-xl" style={{ fontFamily: 'Rancho, cursive' }}>Proper Roasting</h3>
                <p className="text-sm text-gray-600 mt-2">Your coffee is brewed by first roasting the green coffee beans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop embedded from Cart component  */}
      <section className="py-12 bg-[var(--page-bg)]">
        <div className="grid-16">
          <div className="content-12 mx-auto w-full px-0 sm:px-6">
            <Cart embedded={true} banner={true} />
          </div>
        </div>
      </section>

      {/* Instagram gallery section */}
      <section className="py-12 bg-white">
        <div className="grid-16">
          <div className="content-12">
            <div className="text-center mb-8">
              <p className="text-sm text-gray-500">Follow Us Now</p>
              <h3 className="text-4xl" style={{ fontFamily: 'Rancho, cursive', color: '#3b1f1f', letterSpacing: '1px' }}>Follow on Instagram</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {[g9,g10,g11,g12,g13,g14,g15,g16].map((img, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                  <img src={img} alt={`gallery-${idx}`} className="w-full h-56 lg:h-48 object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
