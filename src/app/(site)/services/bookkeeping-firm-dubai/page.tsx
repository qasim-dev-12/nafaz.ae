import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = { title: "Bookkeeping Firm in Dubai | Venus" };

const heroChecklist = ["Daily, Weekly or Monthly Bookkeeping", "FTA Compliance Support", "Cloud Accounting Experts", "Dedicated Bookkeeper"];
const heroStats = [
  { label: "500+", description: "Businesses booked monthly" },
  { label: "100%", description: "Books reconciled" },
  { label: "24h", description: "Average response time" },
  { label: "SME", description: "Focused packages" },
];
const whyChooseUs = [
  { title: "Dedicated Bookkeeper", description: "One consistent bookkeeper who knows your business and deadlines." },
  { title: "Flexible Cadence", description: "Daily, weekly or monthly bookkeeping based on your transaction volume." },
  { title: "Fixed Monthly Pricing", description: "Transparent packages based on transactions and reporting needs." },
  { title: "FTA Compliance Focus", description: "Books maintained with VAT and corporate tax documentation in mind." },
  { title: "Cloud Accounting", description: "Xero and QuickBooks for real-time visibility into your books." },
  { title: "Clean Handover", description: "Organized records ready for your auditor or tax filing at year end." },
];
const services = [
  { badge: "Bookkeeping", title: "Daily Bookkeeping", description: "We record sales, purchases, expenses and bank movements as they happen." },
  { badge: "Reconciliation", title: "Bank Reconciliation", description: "We match every transaction to bank statements and flag discrepancies." },
  { badge: "Payables", title: "Accounts Payable & Receivable", description: "We track supplier bills and customer invoices to keep cash flow clear." },
  { badge: "Reporting", title: "Monthly Financial Reporting", description: "Profit and loss, balance sheet and cash flow reports every month." },
  { badge: "VAT", title: "VAT-Ready Bookkeeping", description: "Books structured to support VAT registration, filing and review." },
  { badge: "Payroll", title: "Payroll Bookkeeping", description: "Salary journals, WPS records and staff cost tracking." },
];
const industries = [
  { title: "Startups & SMEs", description: "Affordable bookkeeping to keep records clean from day one." },
  { title: "Trading Companies", description: "Supplier ledgers, import costs and inventory bookkeeping." },
  { title: "Consultants & Agencies", description: "Retainers, expenses and profitability tracking." },
  { title: "Restaurants & Retail", description: "Daily sales, POS reconciliation and supplier bookkeeping." },
  { title: "Real Estate", description: "Rental income, service charges and expense tracking." },
  { title: "Free Zone Companies", description: "Bookkeeping aligned to free zone reporting requirements." },
];
const comparison = [
  { area: "Cost", inHouse: "Salary, visa and benefits", accountant: "Fixed monthly bookkeeping fee" },
  { area: "Consistency", inHouse: "Depends on one hire", accountant: "Backed by a full bookkeeping team" },
  { area: "Reporting", inHouse: "Often delayed", accountant: "Monthly reports and cloud dashboards" },
  { area: "Compliance", inHouse: "Depends on individual experience", accountant: "FTA-focused bookkeeping process" },
  { area: "Scalability", inHouse: "Harder to scale", accountant: "Flexible support as transactions grow" },
];
const process = [
  { step: "01", title: "Free Consultation", description: "We review your current books and bookkeeping needs." },
  { step: "02", title: "Records Review", description: "We review bank statements, invoices and existing ledgers." },
  { step: "03", title: "System Setup", description: "We configure Xero, QuickBooks or your preferred workflow." },
  { step: "04", title: "Bookkeeping", description: "We record transactions and reconcile accounts on your cadence." },
  { step: "05", title: "Reporting", description: "You receive clear monthly reports for decision-making." },
  { step: "06", title: "Handover", description: "Clean, organized books ready for tax filing or audit." },
];
const localAreas = [
  { title: "Dubai Mainland", description: "Bookkeeping for mainland-licensed SMEs and trading companies." },
  { title: "Dubai Free Zones", description: "DMCC, IFZA, Meydan and JAFZA bookkeeping support." },
  { title: "UAE-Wide", description: "Remote bookkeeping support for businesses across the UAE." },
];
const faqs = [
  { question: "What does a bookkeeping firm do?", answer: "A bookkeeping firm records daily transactions, reconciles bank accounts, tracks payables and receivables, and prepares reports for VAT, tax and decision-making." },
  { question: "How much does bookkeeping cost in Dubai?", answer: "Costs depend on transaction volume, number of bank accounts, payroll size and reporting frequency." },
  { question: "Is bookkeeping mandatory in the UAE?", answer: "Yes, UAE law requires businesses to maintain accounting records that support VAT, corporate tax and audit obligations." },
  { question: "How often should bookkeeping be done?", answer: "Most SMEs benefit from weekly or monthly bookkeeping, while high-volume businesses may need daily bookkeeping." },
  { question: "What software do you use?", answer: "We primarily work with Xero and QuickBooks for cloud bookkeeping." },
  { question: "How do I start?", answer: "Book a free consultation and we will review your records and recommend a bookkeeping cadence." },
];
const usefulLinks = [
  { text: "Accurate and Affordable Bookkeeping in Dubai", href: "/services/accurate-affordable-bookkeeping-dubai" },
  { text: "Premier Accounting Services in Dubai", href: "/services/premier-accounting-services-in-dubai" },
  { text: "VAT Registration and Returns", href: "/services#vat" },
  { text: "Xero Accountant Dubai", href: "/services#xero" },
  { text: "Federal Tax Authority", href: "https://tax.gov.ae" },
];

const Page = () => {
  return (
    <>
      <section className="bg-midnight_text dark:bg-darkmode text-center md:py-28 py-20 md:pt-44 pt-36 px-4">
        <h1 className="text-white md:text-[52px] text-4xl font-bold leading-tight max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
          Bookkeeping Firm in Dubai
        </h1>
        <p className="text-white/70 md:text-xl text-lg max-w-2xl mx-auto my-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          The Accountant LLC keeps your books accurate, reconciled and VAT-ready with a dedicated bookkeeper and monthly reporting.
        </p>
        <div className="flex flex-wrap gap-4 justify-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Book Free Consultation</Link>
          <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">Speak With a Bookkeeper</Link>
        </div>
        <div className="max-w-2xl mx-auto mt-12 aspect-video rounded-md border-2 border-dashed border-white/20 flex items-center justify-center text-white/30 text-sm" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
          Image placeholder
        </div>
      </section>

      <section className="bg-midnight_text dark:bg-darkmode py-6 overflow-hidden">
        <div className="flex flex-wrap gap-4 justify-center">
          {heroChecklist.map((item, index) => (
            <span key={index} className="bg-white text-midnight_text font-semibold rounded-full px-6 py-3 whitespace-nowrap">✓ {item}</span>
          ))}
        </div>
      </section>

      <section className="bg-white dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-4 grid-cols-2 gap-7">
          {heroStats.map((stat, index) => (
            <div key={index} className="bg-section dark:bg-darklight rounded-md shadow-service p-6" data-aos="fade-up" data-aos-delay={`${index * 200}`} data-aos-duration="1000" data-aos-offset="300">
              <h3 className="text-2xl font-bold text-midnight_text dark:text-white">{stat.label}</h3>
              <p className="text-grey dark:text-white/50 text-sm mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">WHY CHOOSE US</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Not just data entry. A real bookkeeping partner.</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Bookkeeping discipline, UAE tax knowledge and cloud reporting for Dubai businesses.</p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-12">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white dark:bg-darkmode rounded-md shadow-service p-8 text-left" data-aos="fade-up" data-aos-delay={`${index * 200}`} data-aos-duration="1000" data-aos-offset="300">
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-grey/30 dark:border-white/20 flex items-center justify-center text-grey/50 dark:text-white/30 text-xs mb-4">Icon</div>
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-3">{item.title}</h3>
                <p className="text-grey dark:text-white/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">SERVICES</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Bookkeeping services in Dubai</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Built for startups, SMEs, trading companies and free zone businesses across Dubai.</p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mt-12">
            {services.map((service, index) => (
              <div key={index} className="bg-section dark:bg-darklight rounded-md shadow-service p-10 text-left" data-aos="fade-up" data-aos-delay={`${index * 200}`} data-aos-duration="1000" data-aos-offset="300">
                <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-5 py-2">{service.badge}</span>
                <h3 className="text-2xl font-bold text-midnight_text dark:text-white mt-6">{service.title}</h3>
                <p className="text-grey dark:text-white/50 mt-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section dark:bg-darklight py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">INDUSTRIES</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Industries we serve</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">We structure bookkeeping based on your industry and transaction volume.</p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-12">
            {industries.map((item, index) => (
              <div key={index} className="bg-white dark:bg-darkmode rounded-md shadow-service p-8 text-left" data-aos="fade-up" data-aos-delay={`${index * 200}`} data-aos-duration="1000" data-aos-offset="300">
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-3">{item.title}</h3>
                <p className="text-grey dark:text-white/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight_text dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="bg-white/10 text-yellow-400 font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">COMPARISON</span>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why outsource bookkeeping?</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Access bookkeeping, VAT and reporting expertise without hiring an in-house bookkeeper.</p>
          <div className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Area</span><span>In-House Bookkeeper</span><span>The Accountant LLC</span>
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

      <section className="bg-white dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">PROCESS</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Our bookkeeping process</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">A simple process designed for accuracy, compliance and clear reporting.</p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-12">
            {process.map((item, index) => (
              <div key={index} className="bg-section dark:bg-darklight rounded-md shadow-service p-8 text-left" data-aos="fade-up" data-aos-delay={`${index * 200}`} data-aos-duration="1000" data-aos-offset="300">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-6">{item.step}</span>
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-3">{item.title}</h3>
                <p className="text-grey dark:text-white/50 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section dark:bg-darklight py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">COVERAGE</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Bookkeeping support across Dubai</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">We support mainland and free zone businesses across Dubai and the wider UAE.</p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-12">
            {localAreas.map((item, index) => (
              <div key={index} className="bg-white dark:bg-darkmode rounded-md shadow-service p-8 text-left" data-aos="fade-up" data-aos-delay={`${index * 200}`} data-aos-duration="1000" data-aos-offset="300">
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-3">{item.title}</h3>
                <p className="text-grey dark:text-white/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
            <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2">FAQ</span>
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">Bookkeeping Firm Dubai FAQs</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-midnight_text dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">Ready For Clean, Reconciled Books?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Get a dedicated bookkeeper, monthly reporting and VAT-ready records from a trusted Dubai bookkeeping firm.</p>
          <div className="flex flex-wrap gap-4 justify-center mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Book Your Free Consultation Today</Link>
            <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">WhatsApp Us</Link>
          </div>
        </div>
      </section>

      <section className="bg-section dark:bg-darklight py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">USEFUL LINKS</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6 mb-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Related accounting and tax services</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {usefulLinks.map((link, index) => (
              <Link key={index} href={link.href} className="bg-white dark:bg-darkmode text-midnight_text dark:text-white font-semibold rounded-full px-6 py-3 shadow-service">{link.text}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
