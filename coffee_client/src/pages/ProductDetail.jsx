import React, { useEffect, useState } from 'react'
import fallbackImg from '../assets/more/1.png'
import { Link, useParams } from 'react-router-dom'

export default function ProductDetail(){
  const { id } = useParams()
  const [coffee, setCoffee] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if (!id) return
    setLoading(true)
    fetch(`https://byten-beans-1.onrender.com/coffee/${id}`)
      .then(res => res.json())
      .then(data => setCoffee(data))
      .catch(err => console.error(err))
      .finally(()=>setLoading(false))
  },[id])

  if (loading) return <div className="p-8">Loading...</div>
  if (!coffee) return <div className="p-8">Product not found</div>

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-sm text-[#3b1f1f]">← Back to home</Link>
        </div>

        <div className="bg-[#f6f4f2] rounded-lg p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center justify-center">
              <img src={coffee.photo || fallbackImg} alt={coffee.name} className="w-64 md:w-80 lg:w-96 object-contain" />
            </div>

            <div className="px-4">
              <h3 className="text-3xl mb-4" style={{ fontFamily: 'Rancho, cursive', color: '#3b1f1f' }}>Niceties</h3>

              <div className="space-y-3 text-gray-800">
                <div><strong>Name:</strong> <span className="text-gray-600">{coffee.name}</span></div>
                <div><strong>Chef:</strong> <span className="text-gray-600">{coffee.chef || coffee.supplier || '—'}</span></div>
                <div><strong>Supplier:</strong> <span className="text-gray-600">{coffee.supplier || '—'}</span></div>
                <div><strong>Taste:</strong> <span className="text-gray-600">{coffee.taste || '—'}</span></div>
                <div><strong>Category:</strong> <span className="text-gray-600">{coffee.category || '—'}</span></div>
                <div><strong>Details:</strong> <span className="text-gray-600">{coffee.details || '—'}</span></div>
              </div>

              <div className="mt-8">
                <button className="px-6 py-3" style={{ backgroundColor: '#d4b48a', border: '2px solid #2d1f16', borderRadius: '6px', fontFamily: 'Rancho, cursive' }}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
