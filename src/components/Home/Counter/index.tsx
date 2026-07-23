import React from 'react'
import { count, counterTagline } from '@/app/api/data'
import Image from 'next/image'

const Counter = ({
  isColorMode,
  badge,
  title,
}: {
  isColorMode: Boolean
  badge?: string
  title?: string
}) => {
  return (
    <section
      className={` ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}>
      <div className='container mx-auto max-w-6xl px-4'>
        {title && (
          <div className='text-center pb-12'>
            {badge && (
              <div className='flex gap-2 items-center justify-center pb-4'>
                <span className='w-3 h-3 rounded-full bg-success'></span>
                <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                  {badge}
                </span>
              </div>
            )}
            <h2 className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text dark:text-white'>
              {title}
            </h2>
          </div>
        )}
        <div className='flex flex-wrap items-center md:justify-between justify-center md:gap-0 gap-9'>
          {count.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center gap-[0.875rem]'
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'>
              <Image
                src={item.icon}
                alt='icon'
                width={30}
                height={30}
                unoptimized
              />
              <span className='text-5xl font-semibold text-midnight_text dark:text-white'>
                {item.value}
              </span>
              <p className='text-base text-grey text-center max-w-[17.8125rem] w-full dark:text-white/50'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {title && (
          <div
            className='text-center pt-12 border-t border-border dark:border-dark_border mt-12'
            data-aos='fade-up'
            data-aos-duration='1000'>
            <p className='text-lg font-bold text-midnight_text dark:text-white'>
              {counterTagline.label}
            </p>
            <p className='text-sm text-grey dark:text-white/50 mt-1'>
              {counterTagline.description}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Counter
