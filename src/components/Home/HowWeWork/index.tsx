import React from 'react'

const steps = [
  { number: '01', title: 'Book a Consultation', description: 'Tell us about your business and accounting needs.' },
  { number: '02', title: 'Business Assessment', description: 'Review your current financial processes and compliance requirements.' },
  { number: '03', title: 'Customized Solution', description: 'Develop a service plan tailored to your business.' },
  { number: '04', title: 'Implementation', description: 'Our experts manage accounting, taxation, and reporting.' },
  { number: '05', title: 'Ongoing Support', description: 'Continuous advice, compliance monitoring, and financial guidance.' },
]

const HowWeWork = () => {
  return (
    <section className='bg-section dark:bg-darklight' id='how-we-work'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            How we work
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pt-7 pb-16 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          A Simple Process Designed Around Your Business
        </h2>
        <div className='grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-7'>
          {steps.map((item, index) => (
            <div
              key={item.number}
              className='bg-white dark:bg-darkmode rounded-md shadow-service p-7 text-left'
              data-aos='fade-up'
              data-aos-delay={`${index * 150}`}
              data-aos-duration='1000'>
              <span className='text-3xl font-bold text-primary'>{item.number}</span>
              <h3 className='text-lg font-bold text-midnight_text dark:text-white mt-4 mb-2'>
                {item.title}
              </h3>
              <p className='text-grey dark:text-white/50 text-sm'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWork
