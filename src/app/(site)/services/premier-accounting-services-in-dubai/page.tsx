import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Premier Accounting Services in Dubai | QuickBooks Experts | Nafaz",
  description:
    "Looking for professional accounting services in Dubai? Nafaz specializes in QuickBooks accounting, bookkeeping, VAT, Corporate Tax, payroll, financial reporting, and business advisory services for startups, SMEs, and enterprises across Dubai.",
  keywords: [
    "Premier Accounting Services Dubai",
    "QuickBooks Experts Dubai",
    "QuickBooks Accounting Dubai",
    "QuickBooks Bookkeeping Dubai",
    "Accounting Services Dubai",
    "Accounting Firm Dubai",
    "Bookkeeping Services Dubai",
    "VAT Services Dubai",
    "Corporate Tax Dubai",
    "QuickBooks Online Dubai",
    "Payroll Services Dubai",
    "Business Advisory Dubai",
  ],
};

const heroChecklist = [
  "Corporate Tax Support",
  "Fixed Monthly Packages",
  "QuickBooks Experts",
  "FTA Registered Tax Agents",
];

const heroStats = [
  { label: "500+", description: "Businesses Supported" },
  { label: "99%", description: "Client Satisfaction" },
  { label: "QuickBooks", description: "Certified Experts" },
  { label: "24 Hours", description: "Quick Response Time" },
];

const whyChooseUs = [
  {
    title: "Dedicated Account Manager",
    description:
      "A dedicated accounting professional who understands your business and provides continuous support.",
  },
  {
    title: "FTA Compliance Experts",
    description:
      "Complete VAT and Corporate Tax compliance with proactive professional guidance.",
  },
  {
    title: "QuickBooks Specialists",
    description:
      "Certified expertise in QuickBooks Online implementation, migration, bookkeeping, reporting, and training.",
  },
  {
    title: "Fixed Monthly Pricing",
    description:
      "Transparent pricing with no hidden fees.",
  },
  {
    title: "Fast Response",
    description:
      "Responsive accounting support whenever your business needs assistance.",
  },
  {
    title: "Business Advisory",
    description:
      "Financial insights designed to improve profitability, cash flow, and long-term growth.",
  },
];

const services = [
  {
    badge: "Bookkeeping",
    title: "Bookkeeping Services Dubai",
    description:
      "Maintain accurate financial records with professional bookkeeping, bank reconciliation, expense tracking, ledger management, and monthly reporting.",
    points: ["Bank reconciliation", "General Ledger Maintenance", " Monthly Financial Reports"],
  },
  {
    badge: "VAT",
    title: "VAT Services Dubai",
    description:
      "Complete VAT solutions including registration, filing, advisory, VAT health checks, and FTA support.",
    points: ["VAT registration and returns", "VAT Return filing", "VAT health checks"],
  },
  {
    badge: "Corporate Tax",
    title: "Corporate Tax Services Dubai",
    description:
      "Professional Corporate Tax registration, advisory, tax planning, return filing, and compliance support.",
    points: ["Corporate Tax Registration", "Tax Planning", "Corporate Tax Return Filing"],
  },
  {
    badge: "Cloud",
    title: "QuickBooks Accounting Services",
    description:
      "Leverage the power of QuickBooks Online with professional setup, migration, bookkeeping, automation, reporting, and ongoing support from certified experts.",
    points: ["QuickBooks Setup & Configuration", "QuickBooks Migration", "Monthly Bookkeeping"," Financial Dashboard Reporting","Staff Training & Support"],
  },
];

const comparison = [
  { old: "Manual bookkeeping", neu: "QuickBooks Cloud Accounting" },
  { old: "Generic accounting support", neu: "Dedicated Account Manager" },
  { old: "Limited reporting", neu: "Real-Time Financial Dashboard" },
  { old: "Slow communication", neu: "Fast Response Times" },
  { old: "Compliance only", neu: "Compliance + Business Growth" },
  { old: "Hidden fees", neu: "Transparent Fixed Pricing" },
];

const journey = [
  { step: "01", title: "Discovery", description: "Understand your business, financial structure, and accounting requirements." },
  { step: "02", title: "Assessment", description: "Review current bookkeeping, accounting systems, and compliance status." },
  { step: "03", title: "QuickBooks Setup", description: "Configure QuickBooks Online, migrate data if required, and establish an efficient accounting workflow." },
  { step: "04", title: "Ongoing Accounting", description: "Manage bookkeeping, payroll, VAT, Corporate Tax, reconciliations, and monthly compliance." },
  { step: "05", title: "Financial Growth", description: "Provide detailed reports and business insights that support smarter financial decisions." },
];

const trustStats = [
  { label: "FTA", description: "Fully compliant with UAE Federal Tax Authority regulations." },
  { label: "QuickBooks", description: "Cloud-based accounting specialists." },
  { label: "500+", description: "Businesses supported across multiple industries." },
  { label: "SMEs & Enterprises", description: "Scalable accounting solutions for every stage of business." },
];

const caseStudies = [
  {
    title: "Retail Businesses",
    description:
      "Improve inventory control, profitability, and cash flow through accurate bookkeeping and QuickBooks reporting.",
    result: "Real-Time Financial Visibility",
  },
  {
    title: "Technology Companies",
    description:
      "Access cloud-based financial reports from anywhere while automating accounting processes.",
    result: "Scalable Financial Management",
  },
  {
    title: "Professional Services",
    description:
      "Simplify compliance while improving profitability through strategic accounting and business advisory.",
    result: "Smarter Business Growth",
  },
];

const faqs = [
  {
    question: "Are you QuickBooks experts?",
    answer:
      "Yes. Nafaz specializes in QuickBooks Online implementation, migration, bookkeeping, reporting, staff training, and ongoing support for businesses across Dubai.",
  },
  {
    question: "Can you migrate my existing accounting system to QuickBooks?",
    answer:
      "Absolutely. We securely migrate financial data from spreadsheets or other accounting software to QuickBooks Online with minimal disruption.",
  },
  {
    question: "Do you provide QuickBooks training?",
    answer:
      "Yes. We offer personalized QuickBooks training to help business owners and finance teams efficiently manage their accounting.",
  },
  {
    question: "Do you provide VAT registration?",
    answer: "Yes. We assist with VAT registration, filing, advisory, and FTA compliance.",
  },
  {
    question: "Can you manage Corporate Tax together with QuickBooks accounting?",
    answer:
      "Yes. We provide complete accounting, VAT, and UAE Corporate Tax services integrated with QuickBooks.",
  },
  {
    question: "Do you offer outsourced accounting?",
    answer:
      "Yes. Many businesses outsource their complete finance function to Nafaz while using QuickBooks for real-time financial management.",
  },
];

const usefulLinks = [
  "The Accountant LLC",
  "Professional Accounting Services Dubai",
  "Accounts Outsourcing Dubai",
  "Corporate Tax Services UAE",
  "VAT Registration and Returns Dubai",
  "VAT Filing UAE",
  "Xero Accountant Dubai",
  "ADGM Accounting Services",
  "Federal Tax Authority",
  "UAE Ministry of Finance",
  "Xero UAE",
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">
              Premier Accounting Partner in Dubai
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Premier Accounting Services in Dubai
            </h1>
            <p className="text-white/70 text-lg my-7">
              Focus on growing your business while Nafaz takes care of your finances. We provide
              professional accounting, bookkeeping, VAT, corporate tax, payroll, financial
              reporting, and QuickBooks-powered cloud accounting solutions tailored to startups,
              SMEs, and established businesses across Dubai.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {heroChecklist.map((item, index) => (
                <span key={index} className="bg-white/10 text-white text-sm font-medium rounded-full px-4 py-3">
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
          <div
            className="grid grid-cols-2 gap-4"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {heroStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-md p-6 text-center shadow-service">
                <h3 className="text-2xl font-bold text-midnight_text">{stat.label}</h3>
                <p className="text-grey text-sm mt-2">{stat.description}</p>
              </div>
            ))}
            <div className="col-span-2 aspect-video rounded-md overflow-hidden relative">
              <Image
                src="/images/services-images/01-Premier Accounting Services in Dubai.png"
                alt="Premier Accounting Services in Dubai"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-full flex flex-wrap gap-4 justify-center mt-4">
            <Link href="https://wa.me/971559549922" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#1ebe57] animate-wobble-left">
              <Icon icon="ic:baseline-whatsapp" className="text-xl" />
              WhatsApp Us
            </Link>
            <Link href="tel:+971559549922" className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 animate-wobble-left">
              <Icon icon="ic:baseline-call" className="text-xl" />
              Call Us
            </Link>
          </div>
        </div>
      </section>

      {/* Problem / Before-After */}
      <section className="bg-white dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Most businesses do not have an accounting problem. They have a visibility problem.
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Without accurate financial records, businesses struggle to monitor cash flow, understand profitability, meet compliance requirements, and make informed decisions. Nafaz transforms financial data into meaningful insights through professional accounting and QuickBooks cloud solutions.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mt-12">
            <div
              className="bg-red-50 dark:bg-darklight rounded-md p-10 text-left"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <span className="inline-block bg-white text-red-600 font-semibold rounded-full px-5 py-2 mb-6">
                Before: Financial Chaos
              </span>
              <h3 className="text-2xl font-bold text-midnight_text dark:text-white">
                Messy books, tax stress, and late decisions.
              </h3>
              <ul className="mt-6 space-y-3">
                {[
                  "Unorganized bookkeeping",
                  "Delayed financial reports",
                  "VAT filing concerns",
                  "Cash flow uncertainty",
                  "Compliance risks",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-midnight_text dark:text-white">
                    <span className="text-red-600">✕</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bg-green-50 dark:bg-darklight rounded-md p-10 text-left"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <span className="inline-block bg-white text-success font-semibold rounded-full px-5 py-2 mb-6">
                After: The Accountant System
              </span>
              <h3 className="text-2xl font-bold text-midnight_text dark:text-white">
                Clean books, monthly reporting, and confidence.
              </h3>
              <h4 className="text-lg font-bold text-midnight_text dark:text-white mt-6">
                Financial Clarity with Nafaz
              </h4>
              <ul className="mt-6 space-y-3">
                {[
                  "Organized bookkeeping",
                  "Real-time QuickBooks reports",
                  "Timely VAT & Corporate Tax compliance",
                  "Improved financial planning",
                  "Better business decisions",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-midnight_text dark:text-white">
                    <span className="text-success">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span
            className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            WHY CHOOSE US
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
           More Than Accountants. Your Trusted Financial Partner.
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
          We help businesses across Dubai stay compliant, improve financial visibility, and make smarter business decisions with experienced accountants and QuickBooks-certified expertise.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-12">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-darkmode rounded-md shadow-service p-8 text-left"
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-grey/30 dark:border-white/20 flex items-center justify-center text-grey/50 dark:text-white/30 text-xs mb-4">
                  Icon
                </div>
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-grey dark:text-white/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Services */}
      <section className="bg-white dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span
            className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            SERVICES
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Premium Accounting Services Built for Dubai Businesses
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
           Whether you're a startup, SME, or established enterprise, our accounting services simplify financial management while ensuring complete compliance.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-section dark:bg-darklight rounded-md shadow-service p-10 text-left"
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-5 py-2">
                  {service.badge}
                </span>
                <h3 className="text-2xl font-bold text-midnight_text dark:text-white mt-6">
                  {service.title}
                </h3>
                <p className="text-grey dark:text-white/50 mt-4">{service.description}</p>
                <ul className="mt-6 space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-midnight_text dark:text-white font-medium">
                      <span className="text-primary">✔</span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
                  <div
            className="flex flex-wrap gap-4 justify-center mt-8"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <Link
              href="https://wa.me/971559549922"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#1ebe57] animate-wobble-left"
            >
              <Icon icon="ic:baseline-whatsapp" className="text-xl" />
              WhatsApp Us
            </Link>
            <Link
              href="tel:+971559549922"
              className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 animate-wobble-left"
            >
              <Icon icon="ic:baseline-call" className="text-xl" />
              Call Us
            </Link>
          </div>
        </div>
      </section>

            {/* Comparison */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2
            className="text-white text-3xl md:text-4xl font-bold leading-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Typical accounting firm vs Nafaz.
          </h2>
          <p
            className="text-white/60 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            This is where the experience changes from slow, manual, and reactive to structured,
            cloud-powered, and growth-focused.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mt-12">
            <div
              className="bg-white/5 rounded-md p-10 text-left"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h3 className="text-white text-2xl font-bold mb-6">Traditional Accounting Firm</h3>
              {comparison.map((row, index) => (
                <div key={index} className="border-b border-white/10 py-4">
                  <span className="text-white/70">{row.old}</span>
                </div>
              ))}
            </div>
            <div
              className="bg-white/10 rounded-md p-10 text-left"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h3 className="text-white text-2xl font-bold mb-6">Nafaz</h3>
              {comparison.map((row, index) => (
                <div key={index} className="border-b border-white/10 py-4">
                  <span className="text-white font-bold">✔ {row.neu}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Journey */}
      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            A Financial Journey Designed for Clarity
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            From discovery to reporting, every step is designed to make your accounting
            structured, compliant, and useful.
          </p>
          <div className="grid md:grid-cols-5 grid-cols-1 gap-7 mt-12">
            {journey.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-darkmode rounded-md shadow-service p-8 text-left"
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-6">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-grey dark:text-white/50 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Trust wall */}
      <section className="bg-white dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span
            className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            TRUSTED BY BUSINESSES
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Built for Dubai Compliance and QuickBooks-Powered Growth
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Businesses trust Nafaz because we combine accounting expertise with modern
            QuickBooks cloud technology.
          </p>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-7 mt-12">
            {trustStats.map((item, index) => (
              <div
                key={index}
                className="bg-section dark:bg-darklight rounded-md shadow-service p-8"
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                <h3 className="text-3xl font-bold text-midnight_text dark:text-white mb-3">
                  {item.label}
                </h3>
                <p className="text-grey dark:text-white/50 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span
            className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            CLIENT RESULTS
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6 mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Real Business Challenges. Better Financial Outcomes.
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7">
            {caseStudies.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-darkmode rounded-md shadow-service p-8"
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-grey dark:text-white/50 mb-6">{item.description}</p>
                <p className="bg-green-50 dark:bg-white/5 text-success font-bold rounded-md p-4">
                  <span className="text-midnight_text dark:text-white">Result: </span>
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <span
            className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            FAQ
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6 mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Premier Accounting Services in Dubai FAQs
          </h2>
          <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2
            className="text-white text-3xl md:text-4xl font-bold leading-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Ready to Build a Stronger Financial Future?
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Partner with Nafaz for professional accounting, bookkeeping, QuickBooks cloud
            accounting, VAT, and Corporate Tax services that keep your business compliant while
            supporting long-term growth.
          </p>
          <div
            className="flex flex-wrap gap-4 justify-center mt-8"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <Link
              href="https://wa.me/971559549922"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#1ebe57] animate-wobble-left"
            >
              <Icon icon="ic:baseline-whatsapp" className="text-xl" />
              WhatsApp Us
            </Link>
            <Link
              href="tel:+971559549922"
              className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 animate-wobble-left"
            >
              <Icon icon="ic:baseline-call" className="text-xl" />
              Call Us
            </Link>
          </div>
        </div>
      </section>

      {/* Useful links */}
      <section className="bg-section dark:bg-darklight py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <span
            className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            USEFUL LINKS
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6 mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Related Accounting & Tax Services
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {usefulLinks.map((link, index) => (
              <span
                key={index}
                className="bg-white dark:bg-darkmode text-midnight_text dark:text-white font-semibold rounded-full px-6 py-3 shadow-service"
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
