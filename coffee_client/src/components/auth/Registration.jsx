import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

export default function Registration(){
	const { register, loginWithGoogle } = useContext(AuthContext)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [photo, setPhoto] = useState('')
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	const handleSubmit = (e) =>{
		e.preventDefault()
		setLoading(true)
		register(email, password, name, photo)
			.then(res => res.user)
			.then(user => {
				fetch('https://byten-beans-1.onrender.com/users',{ 
					method:'POST',
					headers:{'content-type':'application/json'},
					body: JSON.stringify({name: user.displayName, email: user.email})
				})
				.then(()=>{
					navigate('/')
				})
			})
			.catch(err => alert(err.message))
			.finally(()=>setLoading(false))
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-[var(--page-bg)] py-12">
			<div className="w-full max-w-3xl mx-auto px-6">
				<div className="flex justify-center">
					<div className="w-full max-w-2xl">
						<form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
								<div className="flex flex-col justify-center">
									<h1 className="text-4xl mb-2" style={{ fontFamily: 'Rancho, cursive', color: '#2b2b2b' }}>Join Byte & Beans</h1>
									<p className="text-gray-700 max-w-md mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
										Create your account to add coffees, manage inventory and more.
									</p>
								</div>

								<div>
									<h2 className="text-2xl mb-4" style={{ fontFamily: 'Rancho, cursive', color: '#2b2b2b' }}>Create account</h2>
									<p className="text-sm text-gray-600 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>Sign up with your email and a password.</p>

									<label className="label">
										<span className="label-text">Full name</span>
									</label>
									<input value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name" className="input input-bordered w-full mb-3" required />

									<label className="label">
										<span className="label-text">Photo URL (optional)</span>
									</label>
									<input value={photo} onChange={e=>setPhoto(e.target.value)} placeholder="https://example.com/me.jpg" className="input input-bordered w-full mb-3" />

									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="you@company.com" className="input input-bordered w-full mb-3" required />

									<label className="label">
										<span className="label-text">Password</span>
									</label>
									<input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Create a password" className="input input-bordered w-full mb-4" required />

									<button disabled={loading} className={`w-full py-3 rounded text-base ${loading ? 'opacity-60 cursor-not-allowed' : ''}`} style={{ backgroundColor: '#d4b48a', border: '2px solid #2d1f16', fontFamily: 'Rancho, cursive' }}>{loading ? 'Creating...' : 'Create account'}</button>

									<div className="flex items-center my-4">
										<div className="flex-1 h-px bg-gray-200" />
										<div className="px-3 text-sm text-gray-400">or</div>
										<div className="flex-1 h-px bg-gray-200" />
									</div>

									<button type="button" onClick={()=>loginWithGoogle().then(()=>navigate('/'))} className="w-full py-2 rounded border btn-google interactive-transition">
										<svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" className="inline-block">
											<path fill="#4285f4" d="M533.5 278.4c0-18.5-1.5-37.1-4.7-54.7H272.1v103.5h147.1c-6.3 34.6-25.9 63.9-55.3 83.4v69.2h89.3c52.3-48.2 82.3-119.2 82.3-201.4z"/>
											<path fill="#34a853" d="M272.1 544.3c74.6 0 137.3-24.6 183-66.8l-89.3-69.2c-24.9 16.8-56.9 26.8-93.8 26.8-72 0-133-48.6-154.8-113.9H25.8v71.5C71.7 490.1 165.6 544.3 272.1 544.3z"/>
											<path fill="#fbbc05" d="M117.3 324.9c-11.9-35.7-11.9-74 0-109.7V144.0H25.8c-39.7 78.3-39.7 170.1 0 248.4l91.5-67.5z"/>
											<path fill="#ea4335" d="M272.1 107.7c39.7-.6 77.6 14.2 106.6 40.8l80-80C409.4 24.3 344.3 0 272.1 0 165.6 0 71.7 54.2 25.8 144l91.5 71.1c21.8-65.3 82.8-113.4 154.8-107.4z"/>
										</svg>
										<span>Continue with Google</span>
									</button>

									<p className="mt-4 text-center text-gray-600 text-sm">Already registered? <Link to="/login" className="text-[#2b6cb0]">Sign in</Link></p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
