'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const requiredFields = ['businessName', 'email']
    const isValid = requiredFields.every(field => formData[field as keyof typeof formData].trim() !== '')
    setIsFormValid(isValid)
  }, [formData])

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const reset = () => {
    setFormData({
      businessName: '',
      email: '',
      phoneNumber: '',
      message: '',
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoader(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setShowThanks(true)
      setLoader(false)
      reset()

      setTimeout(() => {
        setShowThanks(false)
      }, 5000)
    }, 1000)
  }

  return (
    <section id='contact' className='relative py-20'>
      {/* Background image with responsive sizing */}
      <div 
        className='absolute inset-0 bg-center bg-fixed'
        style={{
          backgroundImage: 'url(/images/background.jpeg)',
          backgroundSize: 'contain', // Show full image on mobile
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}>
      </div>
      {/* Desktop background overlay for cover effect */}
      <div 
        className='absolute inset-0 hidden md:block bg-center bg-fixed'
        style={{
          backgroundImage: 'url(/images/background.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
      </div>
      {/* Dark overlay for readability */}
      <div className='absolute inset-0 bg-black/30'></div>
      <div className='container relative z-10'>
        <div className='text-center mb-16'>
          <div className='bg-cream rounded-lg p-6 border-l-4 border-dragon-green inline-block'>
            <h2 className='text-4xl font-bold text-primary mb-0'>
              Contact Us
            </h2>
          </div>
        </div>

                            <div className='container'>
                      {/* Contact Form */}
                      <div className='bg-cream rounded-lg p-8 border-l-4 border-dragon-green'>
            <h3 className='text-2xl font-bold text-primary mb-6'>Send us a Message</h3>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label htmlFor='businessName' className='block text-gray-700 font-medium mb-2'>
                    Business Name *
                  </label>
                  <input
                    id='businessName'
                    type='text'
                    name='businessName'
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder='Your business name'
                    className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-dragon-green focus:outline-none transition-colors'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='email' className='block text-gray-700 font-medium mb-2'>
                    Email Address *
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='your@email.com'
                    className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-dragon-green focus:outline-none transition-colors'
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor='phoneNumber' className='block text-gray-700 font-medium mb-2'>
                  Phone Number
                </label>
                <input
                  id='phoneNumber'
                  type='tel'
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder=''
                  className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-dragon-green focus:outline-none transition-colors'
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-gray-700 font-medium mb-2'>
                  Tell us about what you do
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder='Describe your business'
                  className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-dragon-green focus:outline-none transition-colors resize-none'></textarea>
              </div>

              <button
                type='submit'
                disabled={!isFormValid || loader}
                className={`w-full py-4 px-8 rounded-md font-semibold text-lg transition-all duration-300 ${
                  !isFormValid || loader
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-dragon-dark shadow-sm'
                }`}>
                {loader ? (
                  <div className='flex items-center justify-center gap-2'>
                    <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

            {showThanks && (
              <div className='mt-4 p-4 bg-green-50 border border-green-200 rounded-md'>
                <div className='flex items-center gap-3 text-green-800'>
                  <Icon icon='mdi:check-circle' className='text-xl' />
                  <p className='font-medium'>Thank you! We'll get back to you soon about your dragon fruit inquiry.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
