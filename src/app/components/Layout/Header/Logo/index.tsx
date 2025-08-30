import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-3'>
      {/* Farm logo */}
      <div className='relative w-12 h-12'>
        <Image
          src='/images/Logo/logo.png'
          alt='FINCA DEL DRAGON Logo'
          fill
          className='object-contain'
          sizes='48px'
        />
      </div>
      <div className='flex flex-col'>
        <p className='text-primary text-xl font-bold leading-tight'>Finca del</p>
        <p className='text-dragon-dark text-lg font-semibold leading-tight -mt-1'>Dragon</p>
      </div>
    </Link>
  )
}

export default Logo
