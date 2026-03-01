'use client'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section id="hero" className='relative md:pt-20 pt-14 bg-white dark:bg-darklight bg-cover'>
      <div className='container mx-auto max-w-6xl px-4 grid grid-cols-12 gap-4 relative z-10'>
        
        <div className='md:col-span-6 col-span-12 space-y-4 flex flex-col items-start justify-center'>
          
          <div className='flex gap-2 items-center'>
            <span className='w-3 h-3 rounded-full bg-blue-600'></span>
            <span className='font-medium text-gray-600 text-sm'>
              Lamesse Mobile
            </span>
          </div>

          <h1 className='text-gray-900 font-bold text-4xl md:text-5xl md:leading-[1.15]'>
            Les meilleurs smartphones. <br />
            <span className='text-blue-600'>Au meilleur prix.</span>
          </h1>

          <p className='text-gray-600 text-lg font-medium'>
            Découvrez notre sélection de smartphones et tablettes
            performants, fiables et garantis.
          </p>

          <Link
           href="/#products" 
            className='py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 px-8'>
            Voir la boutique
          </Link>

        </div>

        <div className="md:col-span-6 col-span-12 relative">
          <Image
            src="/images/hero/image-3.png"
            alt="Smartphones"
            width={500}
            height={400}
            quality={100}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

      </div>
    </section>
  )
}

export default Hero