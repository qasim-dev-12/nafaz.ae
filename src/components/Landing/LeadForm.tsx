'use client'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const services = [
  'VAT Registration & Filing',
  'Corporate Tax',
  'Bookkeeping & Accounting',
  'Payroll & WPS',
  'Tax Residency Certificate',
  'Transfer Pricing',
  'Excise Tax',
  'Not sure yet',
]

const LeadForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
      toast.success('Thanks! Our team will call you back shortly.')
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' })
    } catch {
      toast.error('Something went wrong. Please try again or WhatsApp us.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full text-base px-4 py-2.5 rounded-lg border border-border dark:border-dark_border dark:bg-darkmode dark:text-white transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0'

  if (submitted) {
    return (
      <div className='text-center py-10'>
        <span className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 text-success text-3xl mb-4'>
          ✓
        </span>
        <h3 className='text-2xl font-bold text-midnight_text dark:text-white mb-2'>
          Request received!
        </h3>
        <p className='text-grey dark:text-white/70'>
          One of our specialists will call you back within 24 hours. In a hurry? WhatsApp us
          anytime.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className='mt-6 text-primary font-medium hover:text-blue-700'>
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <label htmlFor='name' className='pb-2 inline-block text-sm font-medium text-midnight_text dark:text-white'>
          Full Name*
        </label>
        <input
          id='name'
          className={inputClass}
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder='Your name'
          required
        />
      </div>
      <div className='grid sm:grid-cols-2 gap-4'>
        <div>
          <label htmlFor='email' className='pb-2 inline-block text-sm font-medium text-midnight_text dark:text-white'>
            Email*
          </label>
          <input
            id='email'
            className={inputClass}
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='you@company.com'
            required
          />
        </div>
        <div>
          <label htmlFor='phone' className='pb-2 inline-block text-sm font-medium text-midnight_text dark:text-white'>
            Phone / WhatsApp*
          </label>
          <input
            id='phone'
            className={inputClass}
            type='tel'
            name='phone'
            value={form.phone}
            onChange={handleChange}
            placeholder='+971 5X XXX XXXX'
            required
          />
        </div>
      </div>
      <div className='grid sm:grid-cols-2 gap-4'>
        <div>
          <label htmlFor='company' className='pb-2 inline-block text-sm font-medium text-midnight_text dark:text-white'>
            Company Name
          </label>
          <input
            id='company'
            className={inputClass}
            type='text'
            name='company'
            value={form.company}
            onChange={handleChange}
            placeholder='Optional'
          />
        </div>
        <div>
          <label htmlFor='service' className='pb-2 inline-block text-sm font-medium text-midnight_text dark:text-white'>
            Service Needed*
          </label>
          <select
            id='service'
            className={inputClass}
            name='service'
            value={form.service}
            onChange={handleChange}
            required>
            <option value=''>Choose a service</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor='message' className='pb-2 inline-block text-sm font-medium text-midnight_text dark:text-white'>
          Tell us about your business
        </label>
        <textarea
          id='message'
          className={inputClass}
          name='message'
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder='Optional details about your business or current challenge'
        />
      </div>
      <button
        type='submit'
        disabled={submitting}
        className='w-full bg-primary rounded-lg text-white py-3.5 px-8 font-semibold hover:bg-blue-700 disabled:opacity-60 transition duration-300'>
        {submitting ? 'Sending...' : 'Get My Free Consultation'}
      </button>
      <p className='text-xs text-grey dark:text-white/50 text-center'>
        By submitting, you agree to be contacted by Nafaz regarding your enquiry. No spam, ever.
      </p>
    </form>
  )
}

export default LeadForm
