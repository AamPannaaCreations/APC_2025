
'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { featuredPosts } from '@/data/featuredPost';


const FeatureSection: React.FC = () => {

  
  return (
    <section className="py-16 px-4">
      <div className="mx-auto">


        {/* Section Header */}
        <div className="text-center mb-12 font-bricolage ">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {`Founder's Journey`}
          </h2>
        </div>

        {/* Features Container */}
        <div className="flex flex-wrap justify-center gap-6">
          {featuredPosts.map((feature) => (
            <div
              key={feature.id}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
            >
              <Link 
                href={feature.link || '#'} 
                target={feature.link?.startsWith('http') ? '_blank' : '_self'}
                rel={feature.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group-hover:scale-[1.02]">
                  {/* Image Container */}
                  <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={feature.img}
                      alt={feature.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg 
                          className="w-8 h-8" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-800 mb-2 uppercase tracking-wide group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    {feature.description && (
                      <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {/* {feature.description} */}
                      </p>
                    )}
                    
                    {/* Link Indicator */}
                    <div className="mt-3 flex items-center text-xs text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Click to view</span>
                      <svg 
                        className="w-3 h-3 ml-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional items will automatically wrap and center */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            More features coming soon...
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;