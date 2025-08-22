'use client'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id='home-section' className='relative bg-cream'>
      {/* Farm field background pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='w-full h-full' style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23228B22' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className='container relative z-10 py-20 lg:py-32'>
        {/* Mobile Layout - Logo, Text, Image stacked vertically */}
        <div className='lg:hidden flex flex-col items-center text-center space-y-8'>
          {/* Logo First - Mobile */}
          <div className='relative w-64 h-64 bg-white rounded-lg shadow-xl p-4'>
            <Image
              src='/images/Logo/logo.png'
              alt='FINCA DEL DRAGON Logo'
              fill
              className='object-contain rounded-md'
              sizes='256px'
            />
          </div>
          
          {/* Text Second - Mobile */}
          <div className='max-w-sm'>
            <p className='text-lg text-gray-700 leading-relaxed'>
              Premium dragon fruit grown on the equator in Ecuador's perfect climate.
            </p>
          </div>
          
          {/* Image Third - Mobile - Centered and properly sized */}
          <div className='w-full max-w-sm mx-auto'>
            <div className='relative bg-white rounded-lg shadow-xl overflow-hidden border-4 border-white'>
              <div className='aspect-[4/3] relative'>
                <Image
                  src='/images/hero/hero-1.jpg'
                  alt='FINCA DEL DRAGON - Dragon Fruit Farm in Ecuador'
                  fill
                  className='object-contain p-2'
                  sizes='100vw'
                />
              </div>
            </div>
          </div>
          
          {/* Buttons - Mobile */}
          <div className='flex flex-col gap-4 items-center w-full max-w-sm'>
            <Link href='/#about' className='w-full'>
              <button className='w-full text-lg font-medium rounded-md text-white py-3 px-8 bg-primary hover:bg-dragon-dark border-2 border-primary hover:border-dragon-dark transition-all duration-300 shadow-md'>
                See our farm
              </button>
            </Link>
            <Link href='/#contact' className='w-full'>
              <button className='w-full text-lg border-2 border-dragon-green rounded-md font-medium py-3 px-8 text-dragon-green hover:text-white hover:bg-dragon-green transition-all duration-300'>
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className='hidden lg:grid lg:grid-cols-2 gap-12 items-center'>
          <div className='text-center lg:text-left'>
            <div className='flex flex-col items-center lg:items-start mb-8'>
              <div className='relative w-80 h-80 bg-white rounded-lg shadow-xl p-4 mb-6'>
                <Image
                  src='/images/Logo/logo.png'
                  alt='FINCA DEL DRAGON Logo'
                  fill
                  className='object-contain rounded-md'
                  sizes='320px'
                />
              </div>
              <div className='max-w-80'>
                <p className='text-lg text-gray-700 mb-8 leading-relaxed'>
                  Premium dragon fruit grown on the equator in Ecuador's perfect climate.
                </p>
              </div>
            </div>
            <div className='flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start'>
              <Link href='/#about'>
                <button className='text-lg font-medium rounded-md text-white py-3 px-8 bg-primary hover:bg-dragon-dark border-2 border-primary hover:border-dragon-dark transition-all duration-300 shadow-md'>
                  See our farm
                </button>
              </Link>
              <Link href='/#contact'>
                <button className='text-lg border-2 border-dragon-green rounded-md font-medium py-3 px-8 text-dragon-green hover:text-white hover:bg-dragon-green transition-all duration-300'>
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          
          <div className='relative flex items-center justify-end p-4 pr-0'>
            {/* Main farm image - big size, shifted left */}
            <div className='relative bg-white rounded-lg shadow-xl overflow-hidden border-4 border-white w-full max-w-3xl transform scale-115 -translate-x-16'>
              <div className='aspect-[4/3] relative'>
                <Image
                  src='/images/hero/hero-1.jpg'
                  alt='FINCA DEL DRAGON - Dragon Fruit Farm in Ecuador'
                  fill
                  className='object-cover rotate-90 scale-140'
                  sizes='60vw'
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Farm stats */}
        <div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div className='text-center bg-white p-6 rounded-lg shadow-sm'>
            <div className='text-3xl font-bold text-primary mb-1'>50+</div>
            <p className='text-gray-600 text-sm'>Acres Cultivated</p>
          </div>
          <div className='text-center bg-white p-6 rounded-lg shadow-sm'>
            <div className='text-3xl font-bold text-primary mb-1'>10+</div>
            <p className='text-gray-600 text-sm'>Years Experience</p>
          </div>
          <div className='text-center bg-white p-6 rounded-lg shadow-sm'>
            <div className='text-3xl font-bold text-primary mb-1'>100%</div>
            <p className='text-gray-600 text-sm'>Organic Methods</p>
          </div>
          <div className='text-center bg-white p-6 rounded-lg shadow-sm'>
            <div className='text-3xl font-bold text-primary mb-1'>1000+</div>
            <p className='text-gray-600 text-sm'>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
