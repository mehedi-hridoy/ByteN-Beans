import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

const UpdateCoffee = () => {
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')
    const navigate = useNavigate()
    const [coffee, setCoffee] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        if (!id) return
        fetch(`http://localhost:5000/coffee/${id}`)
            .then(res => res.json())
            .then(data => setCoffee(data))
            .catch(err => console.error(err))
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!id) return
        const form = e.target
        const updated = {
            name: form.name.value,
            quantity: form.quantity.value,
            supplier: form.supplier.value,
            chef: form.chef?.value || form.supplier.value,
            price: form.price?.value || '',
            taste: form.taste.value,
            category: form.category.value,
            details: form.details.value,
            photo: form.photo.value,
        }
        setLoading(true)
        fetch(`http://localhost:5000/coffee/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updated)
        })
        .then(res => res.json())
        .then(data => {
            setLoading(false)
            if (data.modifiedCount) {
                navigate('/admin')
            }
        })
        .catch(err => { setLoading(false); console.error(err) })
    }

    if (!coffee) return <div className="p-8">Loading coffee...</div>

    return (
        <div className="min-h-screen py-10">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-2xl mb-4">Update Coffee</h2>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label"><span className="label-text">Name</span></label>
                            <input name="name" defaultValue={coffee.name} className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label"><span className="label-text">Quantity</span></label>
                            <input name="quantity" defaultValue={coffee.quantity} className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label"><span className="label-text">Supplier</span></label>
                                        <input name="supplier" defaultValue={coffee.supplier} className="input input-bordered w-full" />
                        </div>
                                    <div>
                                        <label className="label"><span className="label-text">Chef Name</span></label>
                                        <input name="chef" defaultValue={coffee.chef || coffee.supplier} className="input input-bordered w-full" />
                                    </div>
                        <div>
                            <label className="label"><span className="label-text">Taste</span></label>
                            <input name="taste" defaultValue={coffee.taste} className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label"><span className="label-text">Price</span></label>
                            <input name="price" defaultValue={coffee.price} className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label"><span className="label-text">Category</span></label>
                            <input name="category" defaultValue={coffee.category} className="input input-bordered w-full" />
                        </div>
                        <div>
                            <label className="label"><span className="label-text">Photo URL</span></label>
                            <input name="photo" defaultValue={coffee.photo} className="input input-bordered w-full" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="label"><span className="label-text">Details</span></label>
                            <textarea name="details" defaultValue={coffee.details} className="textarea textarea-bordered w-full h-28" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <button type="submit" disabled={loading} className="px-4 py-2 rounded" style={{ backgroundColor: '#d4b48a', border: '2px solid #2d1f16' }}>{loading ? 'Saving...' : 'Save'}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateCoffee;