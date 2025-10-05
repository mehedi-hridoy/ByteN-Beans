import React, { useState } from 'react'
const aboutHeroUrl = new URL('../assets/more/6.jpeg', import.meta.url).href

function FaqItem({ q, a }){
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button onClick={()=>setOpen(v=>!v)} className="w-full px-5 py-4 flex items-center justify-between bg-white">
        <div className="text-left">
          <div className="text-sm text-gray-500">Q</div>
          <div className="text-lg font-semibold" style={{ fontFamily: 'Raleway, sans-serif' }}>{q}</div>
        </div>
        <div className="text-2xl text-gray-400">{open ? '−' : '+'}</div>
      </button>
      {open && (
        <div className="px-5 py-4 bg-[var(--page-bg)] text-sm text-gray-700">
          {a}
        </div>
      )}
    </div>
  )
}

export default function About(){
  return (
    <div className="py-16">
      <div className="grid-16">
        <div className="content-12 mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm text-gray-500">Our Story</p>
              <h1 className="text-4xl mt-2" style={{ fontFamily: 'Rancho, cursive', color: '#3b1f1f' }}>The story behind our brand</h1>
              <p className="mt-4 text-gray-700 text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Founded in 2020 by a group of coffee enthusiasts, Byte & Beans started with a mission to bring authentic, high-quality coffee experiences to everyone. From sourcing sustainable beans to perfecting brewing methods, our team ensures every cup brings warmth and satisfaction.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold" style={{ fontFamily: 'Rancho, cursive' }}>Our Mission</h3>
                  <p className="text-sm text-gray-600 mt-2">Deliver exceptional coffee, sustainably sourced and expertly brewed.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold" style={{ fontFamily: 'Rancho, cursive' }}>Our Values</h3>
                  <p className="text-sm text-gray-600 mt-2">Sustainability, quality, and community.</p>
                </div>
              </div>
            </div>

            <div>
              <img
                src={aboutHeroUrl}
                alt="about-hero"
                className="w-full rounded-lg shadow-md object-cover h-80"
                loading="lazy"
                decoding="async"
                onError={(e)=>{ e.currentTarget.src = '/vite.svg' }}
              />
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl" style={{ fontFamily: 'Rancho, cursive', color: '#3b1f1f' }}>FAQ</h2>
            <p className="text-sm text-gray-500 mt-2">Have questions? Click a question to reveal the answer.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <FaqItem q={'What types of coffee do you offer?'} a={'We offer a wide range including Espresso, Cappuccino, Latte, Mocha, Cold Brew, and more — available in both hot and cold variations.'} />
              <FaqItem q={'Are your coffee beans locally sourced?'} a={'Yes! We partner with local and international farms that focus on sustainable and organic coffee bean production.'} />
              <FaqItem q={'Do you offer decaf options?'} a={'Absolutely. We have both regular and decaf options for most of our popular blends.'} />
              <FaqItem q={'Can I customize my coffee order?'} a={'Yes, you can choose milk type, sugar level, and additional flavors like caramel, hazelnut, or vanilla.'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
