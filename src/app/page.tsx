import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import Industries from '@/components/Home/Industries';
import HowWeWork from '@/components/Home/HowWeWork';
import About from '@/components/Home/About';
import Testimonial from '@/components/SharedComponent/Testimonial'
import FAQ from '@/components/Home/FAQ';
import Contactform from '@/components/Home/Contact';
export const metadata: Metadata = {
  title: "Accounting & Tax Consultants in Dubai | Bookkeeping, VAT & Corporate Tax | Nafaz",
  description: "Nafaz provides professional accounting, bookkeeping, VAT, Corporate Tax, payroll, Tax Residency Certificate, Transfer Pricing, Excise Tax, and business compliance services in Dubai and across the UAE. Trusted by startups, SMEs, and growing businesses.",
  keywords: [
    "Accounting Services Dubai",
    "Accounting Firm Dubai",
    "Tax Consultants Dubai",
    "Bookkeeping Services Dubai",
    "VAT Consultants UAE",
    "Corporate Tax Consultants Dubai",
    "Payroll Services Dubai",
    "Business Compliance UAE",
    "Accounting Company Dubai",
    "Financial Consultants Dubai",
    "Tax Services UAE",
    "Accounting & Tax Services Dubai",
  ],
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter
        isColorMode={false}
        badge='Numbers that reflect our commitment'
        title='Numbers That Reflect Our Commitment'
      />
      <Progresswork isColorMode={false} />
      <Services />
      <WhyChooseUs />
      <Industries />
      <HowWeWork />
      <About />
      <Testimonial />
      <FAQ />
      <Contactform />
    </main>
  )
}
