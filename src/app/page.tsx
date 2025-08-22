import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Features from '@/app/components/Home/Features'
import { Metadata } from 'next'
import ContactForm from './components/Contact/Form'

export const metadata: Metadata = {
  title: 'FINCA DEL DRAGON - Premium Dragon Fruit Farm',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ContactForm />
    </main>
  )
}
