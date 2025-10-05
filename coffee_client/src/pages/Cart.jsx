import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

import fallbackImg from '../assets/more/1.png'

export default function Cart({ embedded = false, banner = false }){
  const [coffees, setCoffees] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    fetch('http://localhost:5000/coffee')
      .then(res => res.json())
      .then(data => setCoffees(data || []))
      .catch(err => console.error(err))
      .finally(()=>setLoading(false))
  },[])

  const inner = (
    <>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl" style={{ fontFamily: 'Rancho, cursive', color: '#3b1f1f' }}>Your Cart</h2>
          <p className="text-sm text-gray-600">Review items in your cart and proceed to checkout.</p>
        </div>
        <div>
          <Link to="/" className="btn btn-outline">Continue Shopping</Link>
        </div>
      </div>

      {loading ? (
        <div>Loading items...</div>
      ) : !coffees.length ? (
        <div className="text-center py-12 text-gray-500">No items in cart yet.</div>
      ) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-4 lg:gap-6">
          {coffees.map(c => (
            <div key={c._id} className="card bg-[#fbf9f6] shadow-sm rounded-none md:rounded-lg w-full">
              <figure className="p-0 sm:p-6">
                <Link to={`/product/${c._id}`}>
                  <img src={c.photo || fallbackImg} alt={c.name} className="w-full h-44 sm:h-44 md:h-44 object-contain rounded-md" />
                </Link>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg" style={{ fontFamily: 'Rancho, cursive' }}>{c.name}</h2>
                <p className="text-sm text-gray-600 line-clamp-3">{c.details || 'Tasty coffee made with love.'}</p>
                <div className="card-actions justify-between items-center mt-2">
                  <div>
                    <div className="text-lg font-semibold text-[#2d1f16]">{c.price || '—'}</div>
                    <div className="text-xs text-gray-500">Chef: {c.chef || c.supplier || '—'}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="btn btn-ghost text-[#3b1f1f]">Remove</button>
                    <Link to={`/product/${c._id}`} className="btn px-3 py-2" style={{ backgroundColor: '#d4b48a', borderColor: '#2d1f16' }}>Buy</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )

  if (embedded) {
    if (banner) {
      // When embedded in another page (Home.jsx) the parent controls the 12/16 width.
      // Render only the banner header and the product grid so it fits exactly inside the parent's .content-12.
      return (
        <>
          <div className="py-8 text-center">
            <div className="text-sm text-gray-500 mb-1">--- Sip & Savor ---</div>
            <h2 className="mx-auto text-4xl" style={{ fontFamily: 'Rancho, cursive', color: '#3b1f1f', letterSpacing: '1px' }}>Our Popular Products</h2>
            <div className="mt-4">
              <Link to="/add" className="inline-block px-4 py-2 text-sm rounded-md" style={{ backgroundColor: '#d4b48a', border: '2px solid #2d1f16' }}>Add Coffee</Link>
            </div>
          </div>

          {loading ? (
            <div>Loading items...</div>
          ) : !coffees.length ? (
            <div className="text-center py-12 text-gray-500">No items in cart yet.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coffees.map(c => (
                <div key={c._id} className="card bg-[#fbf9f6] shadow-sm rounded-lg overflow-hidden h-full w-full">
                  <figure className="p-0 m-0">
                    <Link to={`/product/${c._id}`}>
                      <img src={c.photo || fallbackImg} alt={c.name} className="w-full h-44 object-cover" />
                    </Link>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title" style={{ fontFamily: 'Rancho, cursive' }}>{c.name}</h2>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">{c.details || 'Tasty coffee made with love.'}</p>

                    <div className="flex items-center justify-between mt-6">
                      <div>
                        <div className="text-lg font-semibold text-[#2d1f16]">{c.price || '—'}</div>
                        <div className="text-xs text-gray-500">Chef: {c.chef || c.supplier || '—'}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="btn btn-ghost text-[#3b1f1f]">WishList</button>
                        <Link to={`/product/${c._id}`} className="btn px-3 py-2" style={{ backgroundColor: '#d4b48a', borderColor: '#2d1f16' }}>Buy</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )
    }

    return inner
  }

  return (
    <div className="min-h-screen">
      {/* Popular products banner with decorative cups */}
  <section className="w-full relative bg-[var(--page-bg)]">
        <svg className="hidden md:block absolute left-0 top-0 h-96 w-48 opacity-10 pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#bfbfbf" strokeWidth="2">
            <path d="M20 180 C40 120, 80 100, 100 80 C120 60, 160 60, 180 40" />
          </g>
        </svg>
        <svg className="hidden md:block absolute right-0 bottom-0 h-96 w-48 opacity-10 pointer-events-none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#bfbfbf" strokeWidth="2">
            <path d="M180 20 C160 80, 120 100, 100 120 C80 140, 40 140, 20 160" />
          </g>
        </svg>

        <div className="py-8">
          <div className="grid-16">
            <div className="content-12 mx-auto w-full text-center">
              <div className="text-sm text-gray-500 mb-1">--- Sip & Savor ---</div>
              <h2 className="mx-auto text-4xl" style={{ fontFamily: 'Rancho, cursive', color: '#3b1f1f', letterSpacing: '1px' }}>Our Popular Products</h2>
              <div className="mt-4">
                <Link to="/add" className="inline-block px-4 py-2 text-sm rounded-md" style={{ backgroundColor: '#d4b48a', border: '2px solid #2d1f16' }}>Add Coffee</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12">
        <div className="grid-16">
      <div className="content-12 mx-auto w-full">
            {/* Product list as horizontal cards */}
            {loading ? (
              <div>Loading items...</div>
            ) : !coffees.length ? (
              <div className="text-center py-12 text-gray-500">No products yet.</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between justify-items-stretch">
                {coffees.map(c => (
                  <div key={c._id} className="bg-[#fbf9f6] rounded-lg shadow-sm overflow-hidden">
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-12 md:col-span-3 p-6 flex items-center justify-center">
                        <Link to={`/product/${c._id}`}>
                          <img src={c.photo || fallbackImg} alt={c.name} className="w-40 h-40 object-contain" />
                        </Link>
                      </div>
                      <div className="col-span-12 md:col-span-7 p-6">
                        <div className="text-sm text-gray-600">Name:</div>
                        <div className="text-xl font-semibold" style={{ fontFamily: 'Raleway, sans-serif' }}>{c.name}</div>
                        <div className="mt-3 text-sm text-gray-600">Chef: <span className="text-gray-800">{c.chef || c.supplier || '—'}</span></div>
                        <div className="mt-2 text-sm text-gray-600">Price: <span className="text-gray-800 font-semibold">{c.price || '—'}</span></div>
                      </div>
                      <div className="col-span-12 md:col-span-2 p-4 flex md:flex-col items-center justify-end gap-3">
                        <Link to={`/product/${c._id}`} title="View" className="w-10 h-10 rounded-md bg-[#e9dcc9] flex items-center justify-center text-[#3b1f1f] hover:scale-105 transition-transform"><AiOutlineEye /></Link>
                        <Link to={`/update?id=${c._id}`} className="w-10 h-10 rounded-md bg-[#2d1f16] text-white flex items-center justify-center hover:scale-105 transition-transform"><AiOutlineEdit /></Link>
                        <button onClick={()=>{ if(confirm('Delete this coffee?')) fetch(`http://localhost:5000/coffee/${c._id}`,{method:'DELETE'}).then(()=>window.location.reload()) }} className="w-10 h-10 rounded-md bg-red-500 text-white flex items-center justify-center hover:scale-105 transition-transform"><AiOutlineDelete /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
