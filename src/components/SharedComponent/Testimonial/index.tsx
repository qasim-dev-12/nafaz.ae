import React from 'react'
import Image from 'next/image'

const testimonials = [
  {
    quote: 'Nafaz simplified our accounting processes and helped us stay fully compliant with VAT and Corporate Tax regulations. Their responsiveness and professionalism have made them an invaluable partner.',
    name: 'Managing Director',
    role: 'Trading Company',
  },
  {
    quote: 'Their bookkeeping and payroll services have saved us significant time every month. We always receive accurate reports and excellent support.',
    name: 'Founder',
    role: 'Technology Startup',
  },
  {
    quote: 'The team guided us through Corporate Tax registration and ongoing compliance with complete transparency. We highly recommend Nafaz.',
    name: 'Finance Manager',
    role: 'Manufacturing Business',
  },
]

const Testimonial = () => {
  return (
    <section
      className='scroll-mt-24 bg-section dark:bg-darklight border-none'
      id='testimonials'>
      <div className='container mx-auto max-w-6xl px-4'>
        <Image
          src='/images/testimonial/vector-smart.png'
          alt='logo'
          width={150}
          height={0}
          quality={100}
          className='w_f w-94! h-52! m-auto'
        />
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pb-14 dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          What Our Clients Say
        </h2>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-7 pb-20'>
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className='bg-white dark:bg-darkmode rounded-md shadow-service p-8 flex flex-col justify-between'
              data-aos='fade-up'
              data-aos-delay={`${index * 200}`}
              data-aos-duration='1000'>
              <p className='font-medium text-base text-midnight_text dark:text-white'>
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className='pt-6'>
                <strong className='text-lg font-bold text-midnight_text dark:text-primary'>
                  {item.name}
                </strong>
                <p className='text-base text-gray dark:text-white/50'>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
