import React, { useState } from 'react';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const AddCoffee = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const chefValue = form.chef?.value || form.supplier?.value || '';
        const newCoffee = {
            name: form.name.value,
            quantity: form.quantity.value,
            supplier: form.supplier.value || chefValue,
            taste: form.taste.value,
            category: form.category.value,
            price: form.price?.value,
            chef: form.chef?.value,
            details: form.details.value,
            photo: form.photo.value,
        };
   
   
    setLoading(true);

        // sending data to the server
        fetch('https://byten-beans-1.onrender.com/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(newCoffee)
        })
        .then(res => {
            if (!res.ok) {
                return res.text().then(text => {
                    throw new Error(`HTTP ${res.status} ${res.statusText}: ${text}`);
                });
            }
            // safe to parse JSON
            return res.json().catch(() => ({ message: 'No JSON in response' }));
        })
        .then(data => {
            console.log('Server response:', data);
            
            if (data.insertedId || data.insertId || data.insertdId || data._id) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            } else {
                // if server returned success status but no id, still notify (show any message)
                Swal.fire({
                    title: 'Success',
                    text: data.message || 'Request completed',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }
            // reset form after success and stop loading
            try { form.reset(); } catch { /* ignore */ }
            setLoading(false);
        })
        .catch(err => {
            console.error('Fetch error:', err);
            setLoading(false);
            Swal.fire({
                title: 'Error',
                text: String(err.message || err),
                icon: 'error',
                confirmButtonText: 'OK'
            });
        })
    };

    return (
        <div className="min-h-screen bg-[#f3efe9] py-14">
            <div className="max-w-5xl mx-auto px-6">
                <header className="text-center">
                    <h2
                        className="text-4xl md:text-5xl text-[#2b2b2b]"
                        style={{ fontFamily: 'Rancho, cursive' }}
                    >
                        Add New Coffee
                    </h2>
                    <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of
                        using Lorem Ipsum is that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here.
                    </p>
                </header>

                <main className="mt-10">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white/70 backdrop-blur-sm p-8 md:p-10 rounded-lg shadow-md"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="label">
                                    <span className="label-text text-sm font-medium">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter coffee name"
                                    className="input input-bordered w-full bg-white placeholder-gray-400"
                                    required
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text text-sm font-medium">Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    name="quantity"
                                    placeholder="Enter coffee stock amount"
                                    className="input input-bordered w-full bg-white placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text text-sm font-medium">Supplier</span>
                                </label>
                                <input
                                    type="text"
                                    name="supplier"
                                    placeholder="Enter coffee supplier (or leave blank and use Chef Name below)"
                                    className="input input-bordered w-full bg-white placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-sm font-medium">Chef Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="chef"
                                    placeholder="Enter chef name"
                                    className="input input-bordered w-full bg-white placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text text-sm font-medium">Taste</span>
                                </label>
                                <input
                                    type="text"
                                    name="taste"
                                    placeholder="Enter coffee taste"
                                    className="input input-bordered w-full bg-white placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text text-sm font-medium">Category</span>
                                </label>
                                <input
                                    type="text"
                                    name="category"
                                    placeholder="Enter coffee category"
                                    className="input input-bordered w-full bg-white placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text text-sm font-medium">Price</span>
                                </label>
                                <input
                                    type="text"
                                    name="price"
                                    placeholder="Enter price (e.g. 890 Taka)"
                                    className="input input-bordered w-full bg-white placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text text-sm font-medium">Chef Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="chef"
                                    placeholder="Enter chef name"
                                    className="input input-bordered w-full bg-white placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <label className="label">
                                    <span className="label-text text-sm font-medium">Details</span>
                                </label>
                                <textarea
                                    name="details"
                                    placeholder="Enter coffee details"
                                    className="textarea textarea-bordered w-full bg-white placeholder-gray-400 h-28"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="label">
                                    <span className="label-text text-sm font-medium">Photo</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Enter photo URL"
                                    className="input input-bordered w-full bg-white placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div className="mt-8 md:mt-10">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full md:w-full py-3 rounded-md text-center text-base ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                                style={{
                                    backgroundColor: '#d4b48a',
                                    border: '2px solid #2d1f16',
                                    fontFamily: 'Rancho, cursive',
                                }}
                            >
                                {loading ? 'Adding...' : 'Add Coffee'}
                            </button>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default AddCoffee;