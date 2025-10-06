import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'

export default function AdminProducts(){
  const [coffees, setCoffees] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchCoffees = () => {
    setLoading(true)
    fetch('https://byten-beans-1.onrender.com/coffee')
      .then(res => res.json())
      .then(data => setCoffees(data || []))
      .catch(err => console.error(err))
      .finally(()=>setLoading(false))
  }

  useEffect(()=>{ fetchCoffees() }, [])

  const handleDelete = (id) => {
    if (!confirm('Delete this coffee?')) return
    fetch(`https://byten-beans-1.onrender.com/coffee/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(res => {
        if (res.deletedCount) {
          setCoffees(prev => prev.filter(c => c._id !== id))
        }
      })
      .catch(err => console.error(err))
  }

  return (
    <div className="min-h-screen py-12 bg-[var(--page-bg)]">
      {/*  products banner */}
      <section className="w-full relative bg-white mb-8">
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

      <div className="grid-16">
        <div className="content-12 mx-auto w-full py-6">
          {loading ? <div>Loading...</div> : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coffees.map(coffee => (
                <div key={coffee._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 md:col-span-3 p-6 flex items-center justify-center">
                      <Link to={`/product/${coffee._id}`}>
                        <img src={coffee.photo} alt={coffee.name} className="w-40 h-40 object-contain" />
                      </Link>
                    </div>
                    <div className="col-span-12 md:col-span-7 p-6">
                      <div className="text-sm text-gray-600">Name:</div>
                      <div className="text-xl font-semibold" style={{ fontFamily: 'Raleway, sans-serif' }}>{coffee.name}</div>
                      <div className="mt-3 text-sm text-gray-600">Chef: <span className="text-gray-800">{coffee.chef || coffee.supplier || '—'}</span></div>
                      <div className="mt-2 text-sm text-gray-600">Price: <span className="text-gray-800 font-semibold">{coffee.price || '—'}</span></div>
                    </div>
                    <div className="col-span-12 md:col-span-2 p-4 flex md:flex-col items-center justify-end gap-3">
                      <Link to={`/product/${coffee._id}`} title="View" className="w-10 h-10 rounded-md bg-[#e9dcc9] flex items-center justify-center text-[#3b1f1f] hover:scale-105 transition-transform"><AiOutlineEye /></Link>
                      <Link to={`/update?id=${coffee._id}`} className="w-10 h-10 rounded-md bg-[#2d1f16] text-white flex items-center justify-center hover:scale-105 transition-transform"><AiOutlineEdit /></Link>
                      <button onClick={()=>handleDelete(coffee._id)} className="w-10 h-10 rounded-md bg-[#ef4444] text-white flex items-center justify-center hover:scale-105 transition-transform"><AiOutlineDelete /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
