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
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            
            {/* Farm Logo & Description */}
            <div className='lg:col-span-1'>
              <Logo />
              <p className='text-sm font-medium text-gray-700 my-5'>
                Premium dragon fruit grown sustainably in the fertile valleys of Ecuador. 
                Experience the exotic taste of our organic pitaya.
              </p>

            </div>

            {/* Navigation Links */}
            <div className='lg:col-span-2'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                {footerlink.map((product, i) => (
                  <div key={i} className='group relative'>
                    <p className='text-primary text-lg font-bold mb-4'>
                      {product.section}
                    </p>
                    <ul className='space-y-2'>
                      {product.links.map((item, i) => (
                        <li key={i}>
                          <Link
                            href={item.href}
                            className='text-gray-600 hover:text-primary text-sm font-medium transition-colors duration-300'>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className='lg:col-span-1 mb-3'>
              <h3 className='text-primary text-lg font-bold mb-6'>Contact Us</h3>
              <div className='space-y-12'>
                <div className='mb-6'>
                  <Link href='tel:+593255550123' className='group'>
                    <div className='flex items-start gap-3'>
                      <div className='w-10 h-10 bg-dragon-green/10 rounded-lg flex items-center justify-center group-hover:bg-dragon-green/20 transition-colors duration-300'>
                        <Icon
                          icon='mdi:phone'
                          className='text-dragon-green text-lg'
                        />
                      </div>
                      <div>
                        <p className='text-xs text-gray-600 font-medium'>Phone</p>
                        <p className='text-sm text-gray-800 group-hover:text-primary font-medium'>
                          +593 (2) 555-0123
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                
                <div className='mb-6'>
                  <Link href='mailto:info@fincadeldragon.com' className='group'>
                    <div className='flex items-start gap-3'>
                      <div className='w-10 h-10 bg-dragon-green/10 rounded-lg flex items-center justify-center group-hover:bg-dragon-green/20 transition-colors duration-300'>
                        <Icon
                          icon='mdi:email'
                          className='text-dragon-green text-lg'
                        />
                      </div>
                      <div>
                        <p className='text-xs text-gray-600 font-medium'>Email</p>
                        <p className='text-sm text-gray-800 group-hover:text-primary font-medium'>
                          info@fincadeldragon.com
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className='mb-0'>
                  <div className='flex items-start gap-3'>
                    <div className='w-10 h-10 bg-dragon-green/10 rounded-lg flex items-center justify-center'>
                      <Icon
                        icon='mdi:map-marker'
                        className='text-dragon-green text-lg'
                      />
                    </div>
                    <div>
                      <p className='text-xs text-gray-600 font-medium'>Location</p>
                      <p className='text-sm text-gray-800'>
                        Ecuador, South America
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-grey/15 py-5 flex flex-col sm:flex-row justify-between sm:items-center gap-5'>
          <p className='text-sm text-black/70'>
            @2025 - FINCA DEL DRAGON. All Rights Reserved. Premium Dragon Fruit from Ecuador.
          </p>

          <div className=''>
            <span className='text-sm text-black/70 px-5 border-r border-grey/15'>
              Privacy policy
            </span>
            <span className='text-sm text-black/70 px-5'>
              Terms & conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
