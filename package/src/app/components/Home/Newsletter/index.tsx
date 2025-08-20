'use client'
import { Icon } from '@iconify/react'
import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className='bg-forest py-20'>
      <div className='container'>
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='grid md:grid-cols-2 gap-0'>
            <div className='p-8 lg:p-12'>
              <span className='inline-block px-4 py-2 bg-primary text-white rounded-md text-sm font-medium mb-4'>
                📧 Stay Connected
              </span>
              <h2 className='text-3xl font-bold text-primary mb-4'>
                Get Farm-Fresh Updates
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                Join our family newsletter to receive updates about harvest seasons, 
                new varieties, and special offers directly from our farm in Ecuador.
              </p>

              <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-forest text-gray-700'
                    placeholder='Enter your email address'
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='w-full bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-dragon-dark transition duration-300 shadow-sm'>
                  Subscribe to Farm Updates
                </button>
              </form>

              {isSubmitted && (
                <div className='mt-4 p-3 bg-green-50 border border-green-200 rounded-md'>
                  <p className='text-green-800 flex items-center gap-2'>
                    <Icon icon='mdi:check-circle' className='text-green-600' />
                    ¡Gracias! Welcome to the FINCA DEL DRAGON family! 🌱
                  </p>
                </div>
              )}

              <p className='text-xs text-gray-500 mt-4'>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            
            <div className='bg-cream p-8 lg:p-12 flex items-center justify-center'>
              <div className='text-center'>
                <div className='text-8xl mb-6'>📮</div>
                <h3 className='text-xl font-bold text-primary mb-3'>What You'll Receive:</h3>
                <ul className='text-gray-700 space-y-2 text-left'>
                  <li className='flex items-center gap-2'>
                    <span className='text-forest'>✓</span> Harvest season updates
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-forest'>✓</span> Farm family stories
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-forest'>✓</span> Special bulk pricing
                  </li>
                  <li className='flex items-center gap-2'>
                    <span className='text-forest'>✓</span> Dragon fruit recipes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
