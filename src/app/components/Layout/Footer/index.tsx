'use client'

import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Logo from '../Header/Logo'
import { FooterLinkType } from '@/app/types/footerlink'

const Footer: FC = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        SetFooterlink(data.FooterLinkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer className='pt-8'>
      <div className='container'>
        {/* Main Footer Content with Tan Background */}
        <div className='bg-cream rounded-lg p-8 border-l-4 border-dragon-green mb-8'>
          <div className='flex flex-col lg:flex-row items-center gap-8'>
            
            {/* Farm Logo */}
            <div className='flex justify-center lg:justify-start w-full lg:w-auto'>
              <Logo />
            </div>

            {/* Contact Information - Stacked on Mobile, Horizontal on Desktop */}
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-12 lg:flex-1 lg:justify-between w-full lg:w-auto'>
              <Link href='tel:+593255550123' className='group'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-dragon-green/10 rounded-lg flex items-center justify-center group-hover:bg-dragon-green/20 transition-colors duration-300 flex-shrink-0'>
                    <Icon
                      icon='mdi:phone'
                      className='text-dragon-green text-lg'
                    />
                  </div>
                  <div className='min-w-0'>
                    <p className='text-xs text-gray-600 font-medium'>Phone</p>
                    <p className='text-sm text-gray-800 group-hover:text-primary font-medium whitespace-nowrap'>
                      +593 (2) 555-0123
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href='mailto:info@fincadeldragon.com' className='group'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-dragon-green/10 rounded-lg flex items-center justify-center group-hover:bg-dragon-green/20 transition-colors duration-300 flex-shrink-0'>
                    <Icon
                      icon='mdi:email'
                      className='text-dragon-green text-lg'
                    />
                  </div>
                  <div className='min-w-0'>
                    <p className='text-xs text-gray-600 font-medium'>Email</p>
                    <p className='text-sm text-gray-800 group-hover:text-primary font-medium break-all'>
                      info@fincadeldragon.com
                    </p>
                  </div>
                </div>
              </Link>

              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-dragon-green/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                  <Icon
                    icon='mdi:map-marker'
                    className='text-dragon-green text-lg'
                  />
                </div>
                <div className='min-w-0'>
                  <p className='text-xs text-gray-600 font-medium'>Location</p>
                  <p className='text-sm text-gray-800 whitespace-nowrap'>
                    Ecuador, South America
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-grey/15 py-5'>
          <p className='text-sm text-black/70 text-center'>
            @2025 - FINCA DEL DRAGON. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
