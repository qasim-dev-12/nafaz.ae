import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = { title: "Amazon Accounting Services in Dubai | Venus" };

const heroChecklist = ["Amazon Seller Experts", "A2X & Xero Integration", "VAT on Marketplace Sales", "FBA Inventory Accounting"];
const heroStats = [
  { label: "500+", description: "Settlements reconciled monthly" },
  { label: "100%", description: "Books updated" },
  { label: "VAT", description: "Cross-border sales reviewed" },
  { label: "SKU", description: "Level profitability" },
];
const whyChooseUs = [
  { title: "Marketplace Specialists", description: "We understand Amazon settlement reports, fees, refunds and reserves." },
  { title: "Fast Response", description: "Timely support for settlement, VAT and inventory questions." },
  { title: "Fixed Monthly Pricing", description: "Transparent packages based on order volume and marketplaces." },
  { title: "Multi-Currency Accounting", description: "Accurate books across AED, USD, GBP and EUR marketplace payouts." },
  { title: "Cloud Accounting", description: "Xero and A2X integration for automated, accurate bookkeeping." },
  { title: "Profitability Insights", description: "See true profit per SKU after fees, ads, refunds and COGS." },
];
const services = [
  { badge: "Reconciliation", title: "Amazon Settlement Reconciliation", description: "We match every settlement report to bank deposits, fees, refunds and reserves." },
  { badge: "Inventory", title: "FBA Inventory & COGS Accounting", description: "We track inventory movement, landed cost and cost of goods sold accurately." },
  { badge: "VAT", title: "VAT on Marketplace Sales", description: "We handle VAT on UAE and cross-border Amazon sales and FTA-ready records." },
  { badge: "Integration", title: "Xero & A2X Setup", description: "We connect Amazon, A2X and Xero for automated daily bookkeeping." },
  { badge: "Reporting", title: "Profitability by SKU", description: "Monthly reports showing true margin after fees, ads and returns." },
  { badge: "Payroll", title: "Payroll Services", description: "Payroll records, salary journals and staff cost reports for your team." },
];
const industries = [
  { title: "FBA Sellers", description: "Inventory, storage fees, reserves and settlement accounting." },
  { title: "FBM & Hybrid Sellers", description: "Shipping costs, supplier ledgers and margin tracking." },
  { title: "Private Label Brands", description: "COGS, ad spend and profitability by product line." },
  { title: "Multi-Marketplace Sellers", description: "Amazon.ae, Amazon.com, Amazon.co.uk consolidated reporting." },
  { title: "Wholesale & Arbitrage", description: "Supplier costs, inventory turnover and cash flow control." },
  { title: "Agencies & Aggregators", description: "Multi-account bookkeeping and consolidated financials." },
];
const comparison = [
  { area: "Cost", inHouse: "Salary, visa and benefits", accountant: "Fixed monthly accounting fee" },
  { area: "Expertise", inHouse: "General bookkeeper", accountant: "Amazon settlement and VAT specialists" },
  { area: "Reporting", inHouse: "Often delayed", accountant: "Monthly reports and cloud dashboards" },
  { area: "Reconciliation", inHouse: "Manual and error-prone", accountant: "Automated via A2X and Xero" },
  { area: "Scalability", inHouse: "Harder to scale", accountant: "Flexible support as order volume grows" },
];
const process = [
  { step: "01", title: "Free Consultation", description: "We review your Amazon accounts and current bookkeeping." },
  { step: "02", title: "Account Assessment", description: "We review settlement reports, inventory and VAT status." },
  { step: "03", title: "System Setup", description: "We connect Amazon, A2X and Xero for automated syncing." },
  { step: "04", title: "Bookkeeping", description: "We reconcile settlements and record transactions monthly." },
  { step: "05", title: "Reporting", description: "You receive profitability and cash flow reports." },
  { step: "06", title: "Advisory", description: "We support VAT, tax readiness and growth decisions." },
];
const localAreas = [
  { title: "Dubai Mainland & Free Zones", description: "Accounting for Amazon sellers registered across UAE free zones." },
  { title: "DMCC & Meydan Sellers", description: "Ecommerce-focused entities selling on Amazon.ae and abroad." },
  { title: "Cross-Border Sellers", description: "UAE-based sellers on Amazon US, UK and EU marketplaces." },
];
const faqs = [
  { question: "What is Amazon accounting?", answer: "Amazon accounting reconciles settlement reports, tracks FBA inventory and COGS, and reports true profitability after fees and refunds." },
  { question: "Do I need VAT on Amazon sales?", answer: "Yes, UAE and cross-border Amazon sales may carry VAT obligations depending on marketplace and fulfillment location." },
  { question: "What is A2X and why do I need it?", answer: "A2X automatically summarizes Amazon settlements into Xero, replacing manual spreadsheet reconciliation." },
  { question: "Can you handle multiple marketplaces?", answer: "Yes, we consolidate Amazon.ae, Amazon.com, Amazon.co.uk and other marketplace accounts into one reporting view." },
  { question: "How much does Amazon accounting cost?", answer: "Pricing depends on order volume, number of marketplaces and reconciliation complexity." },
  { question: "How do I start?", answer: "Book a free consultation and we will review your Amazon accounts and bookkeeping setup." },
];
const usefulLinks = [
  { text: "Ecommerce Accounting", href: "/services/ecommerce-accounting-dubai" },
  { text: "Premier Accounting Services in Dubai", href: "/services/premier-accounting-services-in-dubai" },
  { text: "VAT Registration and Returns", href: "/services#vat" },
  { text: "Xero Accountant Dubai", href: "/services#xero" },
  { text: "Federal Tax Authority", href: "https://tax.gov.ae" },
];

const Page = () => {
  return (
    <>
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">AMAZON ACCOUNTING DUBAI</span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">Amazon Accounting Services in Dubai</h1>
            <p className="text-white/70 text-lg my-7">Settlement reconciliation, FBA inventory accounting, VAT on marketplace sales and profitability reporting for UAE Amazon sellers.</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Book Free Consultation</Link>
              <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">Speak With an Accountant</Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {heroChecklist.map((item, index) => (
                <span key={index} className="bg-white/10 text-white text-sm font-medium rounded-full px-4 py-3">✓ {item}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            {heroStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-md p-6 text-center shadow-service">
                <h3 className="text-2xl font-bold text-midnight_text">{stat.label}</h3>
                <p className="text-grey text-sm mt-2">{stat.description}</p>
              </div>
            ))}
            <div className="col-span-2 aspect-video rounded-md border-2 border-dashed border-grey/30 flex items-center justify-center text-grey/50 text-sm">Image placeholder</div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">SHORT ANSWER</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">What is Amazon accounting?</h2>
          <p className="text-grey dark:text-white/50 text-lg mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Amazon accounting reconciles settlement reports, tracks FBA inventory and cost of goods sold, handles VAT on marketplace sales, and reports true profitability per SKU.</p>
        </div>
      </section>

      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">WHY CHOOSE US</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why Amazon sellers choose The Accountant</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Marketplace accounting discipline, UAE tax knowledge and automated cloud reporting for Amazon sellers.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Amazon accounting services in Dubai</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Built for FBA, FBM and hybrid Amazon sellers operating across UAE and international marketplaces.</p>
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
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">SELLER TYPES</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Amazon sellers we support</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">We structure accounting based on your fulfillment model, marketplaces and product catalog.</p>
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
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why outsource Amazon accounting?</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Access marketplace accounting, VAT and reporting expertise without building an internal finance team.</p>
          <div className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Area</span><span>In-House Accountant</span><span>The Accountant LLC</span>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Our Amazon accounting process</h2>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Amazon seller accounting across the UAE</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">We support Amazon sellers registered in Dubai and across UAE free zones and mainland.</p>
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
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">Amazon Accounting FAQs</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-midnight_text dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">Stop Guessing Your Real Amazon Profit</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Let us reconcile your settlement reports, sync A2X to Xero, and show you margin by SKU after fees, ads and refunds — not just top-line sales.</p>
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
