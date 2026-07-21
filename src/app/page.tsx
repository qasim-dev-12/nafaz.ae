import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress';
import Services from '@/components/Home/Services';
import Portfolio from '@/components/SharedComponent/portfollio'
import Testimonial from '@/components/SharedComponent/Testimonial'
import Blog from '@/components/SharedComponent/Blog'
import Contactform from '@/components/Home/Contact';
export const metadata: Metadata = {
  title: "Tax Consultants in Dubai | [Your Tax Consultancy]",
  description: "FTA-registered tax agents helping Dubai SMEs with VAT, Corporate Tax and full UAE compliance. Free consultation available.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Progresswork isColorMode={false} />
      <Services />
      <Portfolio />
      <Testimonial />
      <Blog />
      <Contactform />
    </main>
  )
}
