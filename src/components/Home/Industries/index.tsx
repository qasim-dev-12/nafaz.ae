import React from 'react'

const industries = [
  'Trading & Distribution',
  'Construction',
  'Healthcare',
  'Manufacturing',
  'Retail',
  'E-commerce',
  'Hospitality',
  'Professional Services',
  'Technology',
  'Logistics',
  'Real Estate',
  'Free Zone Companies',
]

const Industries = () => {
  return (
    <section className='bg-white dark:bg-darkmode' id='industries'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            Industries we serve
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pt-7 pb-14 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Supporting Businesses Across Every Major Industry
        </h2>
        <div className='grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-4'>
          {industries.map((item, index) => (
            <span
              key={item}
              className='bg-section dark:bg-darklight text-midnight_text dark:text-white text-sm font-medium rounded-full px-4 py-3 text-center'
              data-aos='fade-up'
              data-aos-delay={`${(index % 4) * 150}`}
              data-aos-duration='1000'>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
