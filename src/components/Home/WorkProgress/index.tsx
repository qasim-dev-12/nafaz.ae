'use client'
import React from 'react'
import Image from 'next/image'

const whyClientsTrustNafaz = [
  'Dedicated Accounting Professionals',
  'Transparent Pricing',
  'Timely Reporting',
  'FTA Compliance Support',
  'Business-Focused Advice',
  'Personalized Service',
]

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  return (
    <section
      className={`scroll-mt-25 ${
        isColorMode
          ? 'dark:bg-darklight bg-section'
          : 'dark:bg-darkmode bg-white'
      }`}
      id='about'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='grid md:grid-cols-12 items-center gap-7'>
          <div className='md:col-span-6'>
            <Image
              src='/images/work-progress/nafaz-business-partnership.png'
              alt='Nafaz long-term business partnership'
              width={375}
              height={0}
              quality={100}
              style={{ width: '100%', height: 'auto' }}
              className='md:block hidden rounded-xl'
            />
          </div>
          <div
            className='md:col-span-6'
            data-aos='fade-left'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                Why nafaz
              </span>
            </div>
            <h2 className='pt-9 pb-8 text-midnight_text font-bold dark:text-white text-4xl'>
              More Than Accountants. Your Long-Term Business Partner.
            </h2>
            <p className='text-gray dark:text-white/70 text-base font-semibold'>
              At Nafaz, we believe accounting should do more than keep your books balanced. It should help you
              make better business decisions, remain compliant with UAE regulations, and create a strong
              financial foundation for growth. Our experienced professionals work closely with startups, SMEs,
              entrepreneurs, and established companies, delivering tailored accounting and tax solutions backed
              by responsive support and practical advice.
            </p>

            <h3 className='pt-10 pb-4 text-midnight_text dark:text-white text-lg font-bold'>
              Why Clients Trust Nafaz
            </h3>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
              {whyClientsTrustNafaz.map((item, index) => (
                <div
                  key={index}
                  className='text-sm font-medium text-grey dark:text-white/70'
                  data-aos='fade-up'
                  data-aos-delay={`${(index % 3) * 150}`}
                  data-aos-duration='1000'>
                  ✔ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork
