import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('sign up')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // Add form submission logic here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Welcome to Prescripto
          </h1>
          <p className="text-gray-600">
            {state === 'sign up' 
              ? 'Create an account to get started' 
              : 'Login to your account'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-white p-8 rounded-lg shadow-md">
          {state === 'sign up' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
          >
            {state === 'sign up' ? 'Create Account' : 'Login'}
          </button>
        </form>

        <div className="text-center">
          <button
            onClick={() => setState(state === 'sign up' ? 'login' : 'sign up')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            {state === 'sign up' 
              ? 'Already have an account? Login' 
              : 'Need an account? Sign Up'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login