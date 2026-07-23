import React from 'react'
import FAQAccordion from '@/components/SharedComponent/FAQAccordion'

const faqItems = [
  { question: 'What accounting services do you provide?', answer: 'We offer accounting, bookkeeping, VAT, Corporate Tax, payroll, financial reporting, Tax Residency Certificate support, Transfer Pricing, Excise Tax, and tax compliance services.' },
  { question: 'Do you support startups?', answer: 'Yes. We work with startups, SMEs, and established businesses across the UAE.' },
  { question: 'Can you handle VAT and Corporate Tax?', answer: 'Absolutely. We assist with registration, return filing, compliance reviews, and ongoing advisory.' },
  { question: 'Do you provide payroll services?', answer: 'Yes. Our payroll services include salary processing, WPS compliance, gratuity calculations, and employee payroll management.' },
  { question: 'Which industries do you specialize in?', answer: 'We support businesses across trading, construction, healthcare, manufacturing, retail, technology, hospitality, logistics, professional services, and more.' },
  { question: 'Can you support Free Zone companies?', answer: 'Yes. We provide accounting and tax services for both Mainland and Free Zone businesses throughout the UAE.' },
]

const FAQ = () => {
  return (
    <section className='bg-white dark:bg-darkmode' id='faq'>
      <div className='container mx-auto max-w-4xl px-4'>
        <div
          className='flex gap-2 items-center justify-center'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          <span className='w-3 h-3 rounded-full bg-success'></span>
          <span className='font-medium text-midnight_text text-sm dark:text-white/50'>Faq</span>
        </div>
        <h2
          className='sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pt-7 pb-14 w-full m-auto dark:text-white'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'>
          Frequently Asked Questions
        </h2>
        <div data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  )
}

export default FAQ
