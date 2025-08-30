'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    business_name: '',
    phone_number: '',
    business_email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [showThanks, setShowThanks] = useState(false)
  const [showError, setShowError] = useState(false)
  const [loader, setLoader] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = 'JconJl2oyPBkyGYPf' // Hardcoded for testing
    console.log('EmailJS Public Key:', publicKey)
    emailjs.init(publicKey)
  }, [])

  useEffect(() => {
    const requiredFields = ['user_name', 'business_name', 'business_email', 'message']
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
      user_name: '',
      business_name: '',
      phone_number: '',
      business_email: '',
      message: '',
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoader(true)
    setShowError(false)
    setShowThanks(false)

    try {
      const serviceId = 'finca_del_dragon' // Hardcoded for testing
      const templateId = 'finca_del_dragon_contact' // Hardcoded for testing
      const publicKey = 'JconJl2oyPBkyGYPf' // Hardcoded for testing
      
      console.log('EmailJS Config:', { serviceId, templateId, publicKey })
      
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        e.target,
        publicKey
      )

      console.log('EmailJS Result:', result)
      
      if (result.status === 200) {
        console.log('✅ Email sent successfully!')
        setSubmitted(true)
        setShowThanks(true)
        reset()
        
        setTimeout(() => {
          setShowThanks(false)
        }, 5000)
      } else {
        console.error('❌ EmailJS returned non-200 status:', result.status)
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setShowError(true)
      
      setTimeout(() => {
        setShowError(false)
      }, 5000)
    } finally {
      setLoader(false)
    }
  }

  return (
    <section id='contact' className='relative py-20'>
      {/* Mobile background image */}
      <div 
        className='absolute inset-0 bg-center bg-fixed'
        style={{
          backgroundImage: 'url(/images/mobile-background.jpeg)',
          backgroundSize: '130%', // 30% zoom (130% size)
          backgroundRepeat: 'repeat', // Tile the image to fill the space
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
            <form onSubmit={handleSubmit} className='space-y-4' style={{ pointerEvents: showThanks || showError ? 'none' : 'auto' }}>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label htmlFor='user_name' className='block text-gray-700 font-medium mb-2'>
                    Your Name *
                  </label>
                  <input
                    id='user_name'
                    type='text'
                    name='user_name'
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder='Your full name'
                    className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-dragon-green focus:outline-none transition-colors'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='business_name' className='block text-gray-700 font-medium mb-2'>
                    Business Name *
                  </label>
                  <input
                    id='business_name'
                    type='text'
                    name='business_name'
                    value={formData.business_name}
                    onChange={handleChange}
                    placeholder='Your business name'
                    className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-dragon-green focus:outline-none transition-colors'
                    required
                  />
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <label htmlFor='business_email' className='block text-gray-700 font-medium mb-2'>
                    Business Email *
                  </label>
                  <input
                    id='business_email'
                    type='email'
                    name='business_email'
                    value={formData.business_email}
                    onChange={handleChange}
                    placeholder='your@email.com'
                    className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-dragon-green focus:outline-none transition-colors'
                    required
                  />
                </div>
                <div>
                  <label htmlFor='phone_number' className='block text-gray-700 font-medium mb-2'>
                    Phone Number
                  </label>
                  <input
                    id='phone_number'
                    type='tel'
                    name='phone_number'
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder=''
                    className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-dragon-green focus:outline-none transition-colors'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='message' className='block text-gray-700 font-medium mb-2'>
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder='Tell us about your inquiry...'
                  className='w-full px-4 py-3 rounded-md border border-gray-300 focus:border-dragon-green focus:outline-none transition-colors resize-none'
                  required></textarea>
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
              <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                <div className='bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center'>
                  <div className='flex items-center justify-center mb-4'>
                    <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center'>
                      <Icon icon='mdi:check-circle' className='text-3xl text-green-600' />
                    </div>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>Message Sent Successfully!</h3>
                  <p className='text-gray-600 mb-6'>Thank you! We will contact you soon.</p>
                  <button
                    onClick={() => {
                      setShowThanks(false)
                      setSubmitted(false)
                    }}
                    className='w-full bg-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-dragon-dark transition-colors'
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}

            {showError && (
              <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                <div className='bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center'>
                  <div className='flex items-center justify-center mb-4'>
                    <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center'>
                      <Icon icon='mdi:alert-circle' className='text-3xl text-red-600' />
                    </div>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>Error Sending Message</h3>
                  <p className='text-gray-600 mb-6'>Sorry, there was an error sending your message. Please try again.</p>
                  <button
                    onClick={() => setShowError(false)}
                    className='w-full bg-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-dragon-dark transition-colors'
                  >
                    Try Again
                  </button>
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
