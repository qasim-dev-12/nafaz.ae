import React from 'react'
import { Icon } from '@iconify/react'

const coreServices = [
  { icon: 'solar:chart-2-bold-duotone', title: 'Accounting & Financial Reporting', description: 'Accurate financial records, management reports, and meaningful business insights.' },
  { icon: 'solar:notebook-bold-duotone', title: 'Bookkeeping Services', description: 'Organized bookkeeping that keeps your financial records current, accurate, and audit-ready.' },
  { icon: 'solar:document-text-bold-duotone', title: 'VAT Registration & Return Filing', description: 'Complete VAT registration, return preparation, filing, and ongoing compliance support.' },
  { icon: 'solar:buildings-2-bold-duotone', title: 'Corporate Tax Services', description: 'Corporate Tax registration, tax return filing, advisory, and compliance management.' },
  { icon: 'solar:wallet-money-bold-duotone', title: 'Payroll & WPS Management', description: 'End-to-end payroll processing, WPS compliance, gratuity calculations, and employee payroll administration.' },
  { icon: 'solar:clipboard-list-bold-duotone', title: 'Financial Statement Preparation', description: 'Professionally prepared financial statements to support business reporting, lenders, and regulatory requirements.' },
  { icon: 'solar:medal-ribbon-bold-duotone', title: 'Tax Residency Certificate (TRC)', description: 'Assistance with eligibility assessment, documentation, and Ministry of Finance applications.' },
  { icon: 'solar:transfer-horizontal-bold-duotone', title: 'Transfer Pricing Advisory', description: 'Documentation, benchmarking studies, and related-party transaction compliance under UAE Corporate Tax regulations.' },
  { icon: 'solar:box-bold-duotone', title: 'Excise Tax Services', description: 'Registration, return filing, compliance reviews, and advisory for businesses dealing with excise goods.' },
  { icon: 'solar:shield-check-bold-duotone', title: 'Tax Audit & Assurance', description: 'Tax compliance reviews, documentation assessments, and Federal Tax Authority (FTA) audit support.' },
];

const storyCards = [
  { icon: 'solar:book-bookmark-bold-duotone', title: 'Our Story', description: "Nafaz was established with a simple vision—to provide businesses across the UAE with reliable accounting and tax services backed by professional expertise and personalized support. We understand that every business is unique, which is why we take the time to understand our clients' goals before recommending practical financial solutions. Over the years, we have built lasting relationships with businesses across multiple industries by delivering dependable advice, responsive service, and a strong commitment to regulatory compliance." },
  { icon: 'solar:target-bold-duotone', title: 'Our Mission', description: 'Our mission is to simplify financial management for businesses by delivering accurate accounting, proactive tax compliance, and trusted advisory services that enable confident decision-making and sustainable business growth.' },
  { icon: 'solar:star-bold-duotone', title: 'What Makes Nafaz Different?', description: "Unlike traditional accounting firms that focus only on compliance, Nafaz works as an extension of your business. We combine technical expertise with practical business advice to help clients improve financial visibility, strengthen internal processes, and confidently navigate the UAE's evolving regulatory environment. We are committed to building long-term partnerships based on trust, responsiveness, and measurable value." },
];

const whyChooseUs = [
  'Experienced Accounting & Tax Professionals',
  'Personalized Financial Solutions',
  'Transparent Pricing',
  'Timely Financial Reporting',
  'VAT & Corporate Tax Expertise',
  'Business Compliance Specialists',
  'Dedicated Client Support',
  'Long-Term Strategic Partnership',
];

const About = () => {
  return (
    <section className="bg-white dark:bg-darkmode py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex gap-2 items-center justify-center" data-aos="fade-up" data-aos-duration="1000">
          <span className="w-3 h-3 rounded-full bg-success"></span>
          <span className="font-medium text-midnight_text text-sm dark:text-white/50">About nafaz</span>
        </div>
        <h2 className="sm:text-4xl text-[28px] leading-tight font-bold text-midnight_text text-center pt-7 pb-6 md:w-4/6 w-full m-auto dark:text-white" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          Welcome to Nafaz Accounting & Tax Consultancy
        </h2>
        <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto text-center leading-relaxed">
          At Nafaz, we believe accounting is more than balancing books—it's about empowering businesses with
          financial clarity, regulatory confidence, and strategic insights. We provide comprehensive
          accounting, bookkeeping, tax, payroll, and business compliance services for startups, SMEs, and
          established companies across the UAE.
        </p>
        <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto text-center mt-4 leading-relaxed">
          Our experienced team works closely with business owners to simplify complex financial processes,
          maintain compliance with UAE regulations, and deliver accurate financial information that supports
          better business decisions. Whether you're launching a new company, managing a growing enterprise, or
          expanding your operations, Nafaz is committed to becoming your trusted financial partner.
        </p>

        <h3 className="text-midnight_text dark:text-white text-2xl font-bold text-center mt-16 mb-10">
          Our Core Services Include
        </h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {coreServices.map((item, index) => (
            <div
              key={item.title}
              className="bg-section dark:bg-darklight rounded-md p-6 text-left hover:shadow-service transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={`${(index % 3) * 150}`}
              data-aos-duration="1000">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon icon={item.icon} width="26" height="26" className="text-primary" />
              </div>
              <h4 className="text-midnight_text dark:text-white font-bold mb-2">{item.title}</h4>
              <p className="text-grey dark:text-white/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-16">
          {storyCards.map((item, index) => (
            <div
              key={item.title}
              className="bg-section dark:bg-darklight rounded-md shadow-service p-8 text-left"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
              data-aos-duration="1000">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <Icon icon={item.icon} width="30" height="30" className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-3">{item.title}</h3>
              <p className="text-grey dark:text-white/50 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-midnight_text dark:text-white text-2xl font-bold text-center mt-16 mb-8">
          Why Businesses Choose Nafaz
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-3">
          {whyChooseUs.map((item) => (
            <span
              key={item}
              className="bg-section dark:bg-darklight text-midnight_text dark:text-white text-sm font-medium rounded-full px-4 py-3 text-center flex items-center justify-center gap-2">
              <Icon icon="solar:check-circle-bold" width="16" height="16" className="text-primary shrink-0" />
              {item}
            </span>
          ))}
        </div>

        <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto text-center mt-14 leading-relaxed">
          Whether you're a startup, SME, or an established enterprise, Nafaz provides dependable financial
          expertise that allows you to focus on growing your business while we take care of your accounting
          and compliance responsibilities.
        </p>
      </div>
    </section>
  )
}

export default About
