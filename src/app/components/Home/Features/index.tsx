'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const Features = () => {
  const farmFeatures = [
    {
      icon: '🌱',
      heading: 'Header Text Here',
      subheading: 'Description here'
    },
    {
      icon: '🇪🇨',
      heading: 'Ecuador Grown',
      subheading: 'Located in the perfect climate of Ecuador, our farm benefits from ideal growing conditions that produce exceptional dragon fruit.'
    },
    {
      icon: '🐉',
      heading: 'Premium Quality',
      subheading: 'Each dragon fruit is carefully selected and harvested at peak ripeness to guarantee the finest taste and nutritional value.'
    },
    {
      icon: '🌍',
      heading: 'Header Text Here',
      subheading: 'Description here'
    }
  ]

      return (
    <section id='about' className='relative py-20'>
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
        {/* Farm Story Section */}
        <div className='grid lg:grid-cols-2 gap-12 items-center bg-cream rounded-lg p-8 lg:p-12 border-l-4 border-dragon-green mb-16'>
            <div className='order-2 lg:order-1'>
              <h3 className='text-3xl font-bold text-primary mb-6'>Homegrown from South America</h3>
              <div className='space-y-4 text-gray-700'>
                <p className='leading-relaxed text-lg'>
                  <strong>Grown right on the equator</strong> - our dragon fruit thrives in Ecuador's 
                  perfect climate where the sun shines year-round and the rich volcanic soil creates 
                  the ideal growing conditions.
                </p>
                <p className='leading-relaxed'>
                  From our soil to your home, we cultivate each dragon fruit with traditional South 
                  American farming wisdom that has been perfected over generations. The equatorial 
                  location gives our fruit its exceptional sweetness and vibrant color.
                </p>
                <p className='leading-relaxed'>
                  Every dragon fruit that leaves our farm carries the authentic taste of Ecuador - 
                  sun-ripened, naturally sweet, and packed with the nutrients that only equatorial 
                  growing can provide.
                </p>
              </div>
            </div>
            <div className='order-1 lg:order-2'>
              <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                <div className='aspect-[4/3] relative'>
                  <Image
                    src='/images/Features/ecuador-pushpin.jpg'
                    alt='FINCA DEL DRAGON - Equatorial Dragon Fruit Farm in Ecuador'
                    fill
                    className='object-cover'
                    sizes='(max-width: 768px) 100vw, 50vw'
                  />
                </div>
              </div>
            </div>
          </div>

        <div className='text-center mb-16'>
          <div className='bg-cream rounded-lg p-6 border-l-4 border-dragon-green inline-block'>
            <h2 className='text-4xl font-bold text-primary mb-0'>
              Our Farm
            </h2>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
            {farmFeatures.map((feature, i) => {
              const imageFiles = ['gallery-1.jpeg', 'gallery-2.jpeg', 'gallery-3.jpg', 'gallery-4.jpg']
              return (
                <div
                  key={i}
                  className='bg-cream rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 border-l-4 border-dragon-green'>
                  {/* Large farm image */}
                  <div className='aspect-[4/3] relative'>
                    <Image
                      src={`/images/Features/${imageFiles[i]}`}
                      alt={`${feature.heading} - FINCA DEL DRAGON`}
                      fill
                      className='object-cover'
                      sizes='(max-width: 768px) 100vw, 50vw'
                    />
                  </div>
                  {/* Text content underneath */}
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-primary mb-3'>
                      {feature.heading}
                    </h3>
                    <p className='text-gray-600 leading-relaxed'>
                      {feature.subheading}
                    </p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}

export default Features
