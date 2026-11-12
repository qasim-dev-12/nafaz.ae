import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import LeadForm from '@/components/Landing/LeadForm'

export const metadata: Metadata = {
  title: 'Free Accounting & Tax Consultation in Dubai | Nafaz',
  description:
    'Get a free consultation from Nafaz on VAT, Corporate Tax, bookkeeping, payroll and business compliance in the UAE. Trusted by 500+ businesses. Request a callback today.',
  keywords: [
    'Free Accounting Consultation Dubai',
    'VAT Consultant UAE',
    'Corporate Tax Consultation Dubai',
    'Bookkeeping Consultation UAE',
    'Nafaz Accounting',
  ],
}

const stats = [
  { value: '500+', label: 'Businesses Supported' },
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'Compliance Focus' },
  { value: 'UAE Wide', label: 'Dubai • Abu Dhabi • Sharjah' },
]

const benefits = [
  {
    icon: 'ic:baseline-shield',
    title: 'Avoid Fines & Penalties',
    description: 'Stay ahead of VAT, Corporate Tax and FTA deadlines with proactive compliance support.',
  },
  {
    icon: 'ic:baseline-savings',
    title: 'Transparent Pricing',
    description: 'No hidden fees. Know exactly what you pay before any engagement begins.',
  },
  {
    icon: 'ic:baseline-groups',
    title: 'Dedicated Specialists',
    description: 'Work with experienced accountants who understand UAE tax law and your industry.',
  },
  {
    icon: 'ic:baseline-schedule',
    title: 'Fast Turnaround',
    description: 'Get a callback within 24 hours and clear next steps for your business.',
  },
]

const services = [
  'VAT Registration & Filing',
  'Corporate Tax',
  'Bookkeeping & Accounting',
  'Payroll & WPS',
  'Tax Residency Certificate',
  'Transfer Pricing',
  'Excise Tax',
  'Financial Statements',
]

const steps = [
  { title: 'Share Your Details', description: 'Fill in the quick form with your business needs.' },
  { title: 'Get a Callback', description: 'A Nafaz specialist calls you within 24 hours.' },
  { title: 'Free Consultation', description: 'Discuss your requirements and receive a tailored plan.' },
]

export default function FreeConsultationPage() {
  return (
    <main>
      {/* Hero */}
      <section className='relative md:pt-20 pt-28 bg-white dark:bg-darklight overflow-hidden'>
        <div className='container mx-auto max-w-6xl px-4 grid md:grid-cols-12 gap-10 relative z-10'>
          <div className='md:col-span-7 col-span-12 flex flex-col items-start justify-center space-y-5'>
            <div className='flex gap-2 items-center'>
              <span className='w-3 h-3 rounded-full bg-success'></span>
              <span className='font-medium text-midnight_text text-sm dark:text-white/50'>
                UAE Accounting • Tax • Business Compliance
              </span>
            </div>
            <h1 className='text-midnight_text font-bold dark:text-white text-4xl md:text-5xl md:leading-[1.15]'>
              Get a Free Accounting &amp; Tax Consultation for Your UAE Business
            </h1>
            <p className='text-grey dark:text-white/70 text-lg font-medium'>
              Talk to a Nafaz specialist about VAT, Corporate Tax, bookkeeping, payroll and
              compliance — no obligation, no hidden fees. We&apos;ll call you back within 24
              hours.
            </p>
            <ul className='grid grid-cols-2 gap-x-6 gap-y-2'>
              {['FTA-Registered Experts', 'Clear, Fixed Pricing', 'Startups to Enterprises', 'All 7 Emirates'].map(
                (item) => (
                  <li key={item} className='text-grey dark:text-white/70 text-sm font-medium'>
                    ✔ {item}
                  </li>
                )
              )}
            </ul>
            <a
              href='https://wa.me/971559549922'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 py-3 bg-[#25D366] text-white rounded-md hover:bg-[#1ebe57] transition duration-300 px-8'>
              <Icon icon='ic:baseline-whatsapp' className='text-xl' />
              Prefer WhatsApp? Chat Now
            </a>
          </div>

          <div className='md:col-span-5 col-span-12' id='lead-form'>
            <div className='bg-white dark:bg-darkmode rounded-xl shadow-deatail_shadow border border-border dark:border-dark_border p-6 md:p-8'>
              <h2 className='text-2xl font-bold text-midnight_text dark:text-white mb-1'>
                Request Your Free Consultation
              </h2>
              <p className='text-grey dark:text-white/70 text-sm mb-6'>
                Fill in the form below and our team will reach out shortly.
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className='pt-0 md:pt-6 pb-10'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='bg-section dark:bg-darkmode rounded-xl shadow-service px-4 md:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4'>
            {stats.map((item) => (
              <div key={item.label} className='text-center'>
                <p className='text-xl md:text-2xl font-bold text-primary'>{item.value}</p>
                <p className='text-xs md:text-sm text-grey dark:text-white/50'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className='dark:bg-darkmode'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='text-center max-w-2xl mx-auto mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-4'>
              Why Businesses Choose Nafaz
            </h2>
            <p className='text-grey dark:text-white/70'>
              Reliable, compliant and transparent accounting support so you can focus on growing
              your business.
            </p>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {benefits.map((item) => (
              <div
                key={item.title}
                className='bg-white dark:bg-darklight border border-border dark:border-dark_border rounded-xl p-6 shadow-service'>
                <div className='w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4'>
                  <Icon icon={item.icon} className='text-2xl' />
                </div>
                <h3 className='text-lg font-bold text-midnight_text dark:text-white mb-2'>{item.title}</h3>
                <p className='text-sm text-grey dark:text-white/70'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id='services' className='dark:bg-darklight'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='text-center max-w-2xl mx-auto mb-10'>
            <h2 className='text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-4'>
              What We Can Help You With
            </h2>
            <p className='text-grey dark:text-white/70'>
              Not sure what you need? Mention it in the form — our specialists will guide you.
            </p>
          </div>
          <div className='flex flex-wrap justify-center gap-3'>
            {services.map((service) => (
              <span
                key={service}
                className='px-5 py-2.5 rounded-full border border-border dark:border-dark_border text-midnight_text dark:text-white text-sm font-medium bg-white dark:bg-darkmode'>
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className='dark:bg-darkmode'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='text-center max-w-2xl mx-auto mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-4'>
              How It Works
            </h2>
          </div>
          <div className='grid sm:grid-cols-3 gap-8'>
            {steps.map((step, index) => (
              <div key={step.title} className='text-center'>
                <div className='w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-primary text-white text-xl font-bold mb-4'>
                  {index + 1}
                </div>
                <h3 className='text-lg font-bold text-midnight_text dark:text-white mb-2'>{step.title}</h3>
                <p className='text-sm text-grey dark:text-white/70'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className='dark:bg-darklight'>
        <div className='container mx-auto max-w-6xl px-4'>
          <div className='bg-primary rounded-xl px-6 md:px-14 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left'>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold text-white mb-2'>
                Ready to simplify your accounting and tax compliance?
              </h2>
              <p className='text-white/80'>Get your free consultation today — no obligation.</p>
            </div>
            <div className='flex gap-4 flex-wrap justify-center'>
              <a
                href='#lead-form'
                className='py-3 px-8 bg-white text-primary rounded-md font-semibold hover:bg-section transition duration-300'>
                Get Free Consultation
              </a>
              <a
                href='https://wa.me/971559549922'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 py-3 px-8 bg-[#25D366] text-white rounded-md hover:bg-[#1ebe57] transition duration-300'>
                <Icon icon='ic:baseline-whatsapp' className='text-xl' />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
