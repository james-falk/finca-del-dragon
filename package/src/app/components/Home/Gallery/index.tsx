'use client'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Link from 'next/link'
import { useState } from 'react'
import { Icon } from '@iconify/react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const dragonFruitGallery = [
    {
      id: 1,
      title: 'Dragon Fruit Harvest',
      description: 'Fresh picked at sunrise when the fruit is sweetest',
      emoji: '🌅',
      category: 'Harvest'
    },
    {
      id: 2,
      title: 'Our Cactus Fields',
      description: 'Rows of dragon fruit cacti stretching across the valley',
      emoji: '🌵',
      category: 'Farm'
    },
    {
      id: 3,
      title: 'Organic Certification',
      description: 'Proudly certified organic since 2015',
      emoji: '📜',
      category: 'Quality'
    },
    {
      id: 4,
      title: 'Hand Selection',
      description: 'Every fruit is carefully selected by our farm team',
      emoji: '👥',
      category: 'Process'
    },
    {
      id: 5,
      title: 'Farm to Market',
      description: 'Fresh from our fields to local markets',
      emoji: '🚜',
      category: 'Distribution'
    },
    {
      id: 6,
      title: 'Ecuador Landscape',
      description: 'The beautiful Andes provide perfect growing conditions',
      emoji: '🏔️',
      category: 'Location'
    }
  ]

  return (
    <section id='gallery' className='bg-cream py-20'>
      <div className='container'>
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-2 bg-primary text-white rounded-md text-sm font-medium mb-4'>
            📸 Farm Gallery
          </span>
          <h2 className='text-4xl font-bold text-primary mb-6'>See Our Farm in Action</h2>
          <p className='text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed'>
            From sunrise harvest to the final selection, witness the care and dedication 
            that goes into every dragon fruit from FINCA DEL DRAGON.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          {dragonFruitGallery.map((item) => (
            <div
              key={item.id}
              className='group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300'
              onClick={() => setSelectedImage(item.id.toString())}>
              <div className='aspect-[4/3] bg-gradient-to-b from-dragon-green/10 to-primary/10 flex items-center justify-center p-8 group-hover:from-dragon-green/20 group-hover:to-primary/20 transition-all duration-300'>
                <div className='text-center'>
                  <div className='text-6xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                    {item.emoji}
                  </div>
                  <span className='inline-block px-3 py-1 bg-dragon-green text-white text-xs rounded-full mb-2'>
                    {item.category}
                  </span>
                </div>
              </div>
              <div className='p-4'>
                <h3 className='font-bold text-primary mb-2'>
                  {item.title}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Farm Testimonial */}
        <div className='bg-white rounded-lg p-8 border-l-4 border-dragon-green shadow-sm'>
          <div className='grid md:grid-cols-3 gap-8 items-center'>
            <div className='text-center'>
              <div className='text-6xl mb-2'>🌾</div>
              <p className='text-sm text-gray-600'>Farm Fresh Quality</p>
            </div>
            <div className='md:col-span-2'>
              <blockquote className='text-lg text-gray-700 italic mb-4'>
                "We've been buying dragon fruit from FINCA DEL DRAGON for 3 years. 
                The quality is consistently exceptional, and you can taste the difference 
                that comes from truly organic, family-grown produce."
              </blockquote>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-dragon-green rounded-full flex items-center justify-center text-white font-bold'>
                  M
                </div>
                <div>
                  <p className='font-medium text-primary'>Maria Rodriguez</p>
                  <p className='text-sm text-gray-600'>Local Market Owner, Quito</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className='fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-50 px-4'
            onClick={() => setSelectedImage(null)}>
            <div
              className='relative mx-auto w-full max-w-4xl rounded-3xl overflow-hidden'
              onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className='absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300'>
                <Icon
                  icon='material-symbols:close-rounded'
                  width={24}
                  height={24}
                  className='text-white'
                />
              </button>
              <div className='aspect-video bg-gradient-to-br from-primary to-fiery p-12'>
                <div className='w-full h-full bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30'>
                  <div className='text-center text-white'>
                    <div className='text-9xl mb-6'>🐉</div>
                    <h3 className='text-3xl font-bold mb-4'>Dragon Fruit Gallery</h3>
                    <p className='text-white/90 text-xl'>Premium Quality from Ecuador</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
