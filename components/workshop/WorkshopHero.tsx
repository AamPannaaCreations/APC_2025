import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export default function WorkshopHero() {
  return (
    <section className='bg-gray-50 py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* Left Content */}
          <div>
            <Badge variant="secondary" className='mb-6'>
              <span className='w-2 h-2 bg-red-500 rounded-full mr-2'></span>
              New Sessions Added
            </Badge>
            
            <h1 className='text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
              Master your craft with live workshops.
            </h1>
            
            <p className='text-xl text-gray-600 mb-8 max-w-xl'>
              Join expert-led interactive sessions to master social media strategies, personal branding, and creative toolkits.
            </p>
            
            <div className='flex flex-wrap gap-4'>
              <button className='bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors'>
                View Schedule
              </button>
              <button className='bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-lg border-2 border-gray-200 transition-colors'>
                Browse Instructors
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className='relative'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
              <Image
                src='/images/workshop-hero.jpg'
                alt='Workshop session'
                width={600}
                height={400}
                className='w-full h-auto'
                priority
              />
              {/* Overlay Card */}
              <div className='absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg'>
                <h3 className='font-bold text-gray-900 mb-1'>
                  Live Session: Branding 101
                </h3>
                <p className='text-sm text-gray-600'>
                  Coming up this weekend
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}