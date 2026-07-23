import React from 'react'

const reasons = [
  { title: 'Compliance First', description: 'Helping businesses meet evolving UAE regulatory requirements.' },
  { title: 'Experienced Professionals', description: 'Qualified accountants and tax specialists with practical industry experience.' },
  { title: 'Fast Turnaround', description: 'Responsive service and timely financial reporting.' },
  { title: 'Tailored Solutions', description: 'Customized services designed around your business needs.' },
  { title: 'Transparent Communication', description: 'Clear advice without unnecessary complexity.' },
  { title: 'Long-Term Partnership', description: 'Supporting your business beyond compliance.' },
]

const WhyChooseUs = () => {
  return (
    <section className='bg-section dark:bg-darklight' id='why-choose-us'>
      <div className='container mx-auto max-w-6xl px-4'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
            Why choose us
          </span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-16 md:w-4/6 w-full m-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Why Businesses Across the UAE Choose Nafaz
        </h2>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7'>
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className='bg-white dark:bg-darkmode rounded-md shadow-service p-8 text-left'
              data-aos='fade-up'
              data-aos-delay={`${(index % 3) * 200}`}
              data-aos-duration='1000'>
              <h3 className='text-xl font-bold text-midnight_text dark:text-white mb-3'>
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

export default WhyChooseUs
