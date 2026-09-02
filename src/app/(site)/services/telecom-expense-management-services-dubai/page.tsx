import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Telecom Expense Management Services in Dubai | Bill Audit & Cost Optimization | Nafaz",
  description:
    "Looking for telecom expense management services in Dubai? Nafaz audits corporate telecom bills, reviews Etisalat and du contracts, eliminates billing errors, and cuts telecom costs for businesses across the UAE.",
  keywords: [
    "Telecom Expense Management Dubai",
    "Telecom Bill Audit Dubai",
    "Etisalat Bill Audit UAE",
    "du Bill Audit UAE",
    "Corporate Telecom Cost Optimization",
    "Telecom Contract Review Dubai",
    "TEM Services UAE",
    "Business Telecom Cost Reduction Dubai",
    "Telecom Invoice Reconciliation Dubai",
    "Telecom Vendor Management UAE",
  ],
};

const heroChecklist = ["Telecom Bill Audits", "Vendor Contract Review", "Cost Optimization", "Etisalat & du Billing Support"];
const heroStats = [
  { label: "500+", description: "Businesses Supported" },
  { label: "30%", description: "Avg. Telecom Cost Savings" },
  { label: "100%", description: "Billing Accuracy" },
  { label: "24 Hours", description: "Quick Support Response" },
];
const whyChooseUs = [
  { title: "Telecom Billing Specialists", description: "In-depth knowledge of Etisalat and du corporate billing structures, plans, and charges." },
  { title: "Proven Cost Savings", description: "Identify overcharges, unused lines, and outdated plans to reduce your monthly telecom spend." },
  { title: "Fixed Transparent Pricing", description: "Clear engagement fees with no hidden costs, often paid for by the savings we uncover." },
  { title: "Vendor-Neutral Advice", description: "Independent recommendations focused on your business needs, not carrier commissions." },
  { title: "Detailed Audit Reports", description: "Line-by-line invoice reviews with clear findings, savings summaries, and action plans." },
  { title: "Ongoing Bill Monitoring", description: "Continuous tracking of telecom invoices to catch billing errors before they add up." },
];
const services = [
  { badge: "Audit", title: "Telecom Bill Audits", description: "Comprehensive review of mobile, landline, and internet invoices to identify errors and overcharges.", includes: ["Invoice Line-Item Review", "Overcharge Detection", "Historical Bill Analysis"] },
  { badge: "Contracts", title: "Vendor Contract Review", description: "Review and benchmark Etisalat and du contracts to ensure competitive rates and terms.", includes: ["Contract Benchmarking", "Renewal Negotiation Support", "Rate Plan Comparison"] },
  { badge: "Optimization", title: "Cost Optimization", description: "Right-size plans, remove unused lines, and consolidate services to lower monthly telecom spend.", includes: ["Plan Right-Sizing", "Unused Line Removal", "Service Consolidation"] },
  { badge: "Inventory", title: "Telecom Asset Inventory", description: "Build a complete inventory of active lines, devices, and services across your organization.", includes: ["Line Inventory Tracking", "Device Mapping", "Department Cost Allocation"] },
  { badge: "Disputes", title: "Billing Dispute Resolution", description: "Manage disputes with carriers on your behalf to recover overcharges and correct billing errors.", includes: ["Dispute Filing", "Carrier Follow-Up", "Credit Recovery"] },
  { badge: "Reporting", title: "Telecom Spend Reporting", description: "Monthly reporting on telecom costs, savings achieved, and budget forecasts for management.", includes: ["Monthly Spend Reports", "Savings Tracking", "Budget Forecasting"] },
];
const industries = [
  { title: "Retail", description: "Multi-location telecom and connectivity cost management for retail chains." },
  { title: "Hospitality", description: "Telecom expense oversight for hotels, restaurants, and tourism businesses." },
  { title: "Construction", description: "Bill audits and line management for site offices and field teams." },
  { title: "Healthcare", description: "Telecom cost control for clinics, hospitals, and healthcare providers." },
  { title: "Professional Services", description: "Telecom expense management for consultancies, agencies, and law firms." },
  { title: "Logistics", description: "Fleet and warehouse connectivity cost management across the UAE." },
];
const comparison = [
  { area: "Monthly Cost", inHouse: "Staff Time & Overhead", accountant: "Fixed, Often Self-Funded by Savings" },
  { area: "Billing Expertise", inHouse: "Limited Carrier Knowledge", accountant: "Dedicated Telecom Specialists" },
  { area: "Bill Accuracy", inHouse: "Manual, Error-Prone Reviews", accountant: "Systematic Line-Item Audits" },
  { area: "Contract Leverage", inHouse: "Limited Negotiation Power", accountant: "Benchmarked Market Rates" },
  { area: "Savings Identified", inHouse: "Rarely Tracked", accountant: "Reported & Verified Monthly" },
  { area: "Time Investment", inHouse: "Ongoing Internal Effort", accountant: "Fully Managed for You" },
];
const process = [
  { step: "01", title: "Free Consultation", description: "Understand your current telecom setup, carriers, and monthly spend." },
  { step: "02", title: "Bill Collection", description: "Gather recent invoices and contracts from Etisalat, du, and other providers." },
  { step: "03", title: "Line-Item Audit", description: "Review every charge for accuracy, unused services, and billing errors." },
  { step: "04", title: "Contract Benchmarking", description: "Compare your rates and terms against current market offers." },
  { step: "05", title: "Savings Implementation", description: "Action plan takes effect: disputes filed, plans right-sized, contracts renegotiated." },
  { step: "06", title: "Ongoing Monitoring", description: "Monthly bill checks and reporting to keep telecom costs under control." },
];
const localAreas = [
  { title: "Dubai Mainland", description: "Telecom expense management for SMEs and large enterprises." },
  { title: "Dubai Free Zones", description: "Bill audits and contract reviews for businesses in DMCC, DIFC, IFZA, DAFZA, Dubai South, JAFZA, and other free zones." },
  { title: "Across the UAE", description: "Remote telecom expense management for businesses across all Emirates." },
];
const faqs = [
  { question: "What is telecom expense management?", answer: "Telecom expense management (TEM) is the process of auditing, tracking, and optimizing a business's telecom bills, contracts, and services to reduce costs and eliminate billing errors." },
  { question: "Which carriers do you work with?", answer: "We review bills and contracts from Etisalat, du, and other UAE telecom and internet providers." },
  { question: "How much can businesses typically save?", answer: "Savings vary by business, but clients typically see meaningful reductions once unused lines, outdated plans, and billing errors are identified and corrected." },
  { question: "Do you handle billing disputes with carriers?", answer: "Yes. We manage the dispute process with your telecom providers to recover overcharges and correct billing errors on your behalf." },
  { question: "Will this disrupt our current services?", answer: "No. Our audits and optimizations are designed to run alongside your existing telecom services without any service interruption." },
  { question: "How often do you review our telecom bills?", answer: "We offer both one-time audits and ongoing monthly monitoring, depending on your business needs." },
  { question: "How do I get started?", answer: "Book a free consultation, and our team will review your current telecom setup and identify potential savings." },
];
const usefulLinks = [
  { text: "Accounting Services in Dubai", href: "/services/premier-accounting-services-in-dubai" },
  { text: "Bookkeeping Services", href: "/services/bookkeeping-firm-dubai" },
  { text: "Payroll (WPS) Services", href: "/services/payroll-services-dubai" },
  { text: "Financial Statement Services", href: "/services/financial-statement-services-dubai" },
  { text: "VAT Registration & Filing", href: "/services/vat-registration-return-filing-dubai" },
  { text: "Corporate Tax Services", href: "/services/corporate-tax-registration-filing-dubai" },
  { text: "Business Advisory", href: "/services#advisory" },
  { text: "Audit Support", href: "/services/tax-audit-assurance-services-dubai" },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">
              Professional Telecom Expense Management Services in Dubai
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Telecom Expense Management Services in Dubai
            </h1>
            <p className="text-white/70 text-lg my-7">
              Take control of your business telecom spend with Nafaz's Telecom Expense Management services. We
              audit mobile, landline, and internet invoices, review carrier contracts, eliminate billing errors,
              and identify real savings across Etisalat, du, and other providers for businesses in Dubai.
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
                src="/images/services-images/09-Financial Statement Preparation Services in Dubai.png"
                alt="Telecom Expense Management Services in Dubai"
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

      {/* About */}
      <section className="bg-white dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <span
            className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            ABOUT TELECOM EXPENSE MANAGEMENT
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            What Is Telecom Expense Management?
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Telecom Expense Management (TEM) is the process of auditing, tracking, and optimizing a business's
            telecom invoices, contracts, and usage. It covers mobile lines, landlines, and internet services,
            helping businesses catch billing errors, remove unused services, and negotiate better rates with
            carriers like Etisalat and du — reducing telecom costs without disrupting day-to-day operations.
          </p>
        </div>
      </section>

      {/* Why Nafaz */}
      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span
            className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            WHY NAFAZ
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Why Businesses Choose Nafaz for Telecom Expense Management
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Telecom bills are often overlooked, leading to overcharges and wasted spend. Nafaz helps businesses
            audit, optimize, and manage telecom costs so nothing slips through the cracks.
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
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-3">{item.title}</h3>
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
            OUR SERVICES
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Telecom Expense Management Services in Dubai
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Complete telecom cost management solutions that keep your business connected without overpaying.
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
                <h3 className="text-2xl font-bold text-midnight_text dark:text-white mt-6">{service.title}</h3>
                <p className="text-grey dark:text-white/50 mt-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.includes.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="bg-white dark:bg-darkmode text-midnight_text dark:text-white text-sm font-medium rounded-full px-4 py-2"
                    >
                      ✔ {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
                  <div
            className="flex flex-wrap gap-4 justify-center mt-8"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
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

            {/* Industries */}
      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span
            className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            INDUSTRIES WE SERVE
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Telecom Cost Solutions for Every Industry
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            We provide telecom expense management for businesses across various industries throughout Dubai.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-12">
            {industries.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-darkmode rounded-md shadow-service p-8 text-left"
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-3">{item.title}</h3>
                <p className="text-grey dark:text-white/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Comparison */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span
            className="bg-white/10 text-yellow-400 font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            WHY OUTSOURCE
          </span>
          <h2
            className="text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Why Outsource Telecom Expense Management?
          </h2>
          <div
            className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Feature</span>
              <span>In-House</span>
              <span>Nafaz</span>
            </div>
            {comparison.map((row, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 px-8 py-6 border-b border-white/10 min-w-[600px]">
                <span className="text-white/50">{row.area}</span>
                <span className="text-white font-semibold">{row.inHouse}</span>
                <span className="text-white font-semibold">{row.accountant}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Process */}
      <section className="bg-white dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span
            className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            OUR PROCESS
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Our Telecom Expense Management Process
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-12">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-section dark:bg-darklight rounded-md shadow-service p-8 text-left"
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-6">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-3">{item.title}</h3>
                <p className="text-grey dark:text-white/50 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Service areas */}
      <section className="bg-section dark:bg-darklight py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <span
            className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            SERVICE AREAS
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Telecom Expense Management Services Across Dubai
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Nafaz supports businesses throughout Dubai with reliable telecom bill audits and cost management.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-12">
            {localAreas.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-darkmode rounded-md shadow-service p-8 text-left"
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-3">{item.title}</h3>
                <p className="text-grey dark:text-white/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
            <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2">
              FAQ
            </span>
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">
              Telecom Expense Management FAQs
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>


      {/* CTA */}
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
            Related Services
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {usefulLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="bg-white dark:bg-darkmode text-midnight_text dark:text-white font-semibold rounded-full px-6 py-3 shadow-service"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-primary py-16 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2
            className="text-white text-3xl md:text-4xl font-bold leading-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Stop Overpaying for Telecom Services.
          </h2>
          <p
            className="text-white/80 text-lg mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Partner with Nafaz for telecom expense management that audits your bills, fixes billing errors, and
            cuts unnecessary telecom costs across your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
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
    </>
  );
};

export default Page;
