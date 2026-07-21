import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = { title: "Ecommerce Accounting Services in Dubai | Venus" };

const heroChecklist = ["Multi-Channel Experts", "Shopify & Noon Support", "VAT on Online Sales", "Cloud Accounting Experts"];
const heroStats = [
  { label: "10+", description: "Sales channels supported" },
  { label: "100%", description: "Books updated" },
  { label: "VAT", description: "Online sales reviewed" },
  { label: "COGS", description: "Accurate per product" },
];
const whyChooseUs = [
  { title: "Multi-Channel Specialists", description: "We reconcile Shopify, Noon, Amazon, Instagram and payment gateway sales." },
  { title: "Fast Response", description: "Timely support for bookkeeping, VAT and inventory questions." },
  { title: "Fixed Monthly Pricing", description: "Transparent packages based on order volume and channels." },
  { title: "Payment Gateway Reconciliation", description: "Stripe, PayTabs, Telr and COD reconciled to bank deposits." },
  { title: "Cloud Accounting", description: "Xero integrations for automated, accurate daily bookkeeping." },
  { title: "Growth Insights", description: "Understand margin, returns, ad spend and channel profitability." },
];
const services = [
  { badge: "Bookkeeping", title: "Ecommerce Bookkeeping", description: "We record sales, refunds, shipping costs and supplier payments across channels." },
  { badge: "Reconciliation", title: "Payment Gateway Reconciliation", description: "We match gateway payouts and COD collections to bank and orders." },
  { badge: "Inventory", title: "Inventory & COGS Accounting", description: "We track stock movement and true cost of goods sold per product." },
  { badge: "VAT", title: "VAT on Online Sales", description: "We handle VAT registration, returns and FTA-ready documentation." },
  { badge: "Reporting", title: "Channel Profitability Reporting", description: "Monthly reports comparing margin across Shopify, Noon and marketplaces." },
  { badge: "Cloud Accounting", title: "Xero Integration", description: "We connect your store, gateway and courier data into Xero." },
];
const industries = [
  { title: "Fashion & Apparel", description: "SKU-level margin, returns and seasonal inventory tracking." },
  { title: "Beauty & Personal Care", description: "Subscription revenue, bundles and marketplace fee tracking." },
  { title: "Electronics", description: "Warranty costs, supplier terms and high-value inventory control." },
  { title: "Home & Furniture", description: "Shipping costs, damages and delivery reconciliation." },
  { title: "Food & FMCG", description: "Perishable inventory, batch costing and repeat order tracking." },
  { title: "D2C Brands", description: "Ad spend, customer acquisition cost and profitability reporting." },
];
const comparison = [
  { area: "Cost", inHouse: "Salary, visa and benefits", accountant: "Fixed monthly accounting fee" },
  { area: "Expertise", inHouse: "General bookkeeper", accountant: "Multi-channel ecommerce specialists" },
  { area: "Reporting", inHouse: "Often delayed", accountant: "Monthly reports and cloud dashboards" },
  { area: "Reconciliation", inHouse: "Manual and error-prone", accountant: "Automated gateway and channel matching" },
  { area: "Scalability", inHouse: "Harder to scale", accountant: "Flexible support as order volume grows" },
];
const process = [
  { step: "01", title: "Free Consultation", description: "We review your sales channels and current bookkeeping." },
  { step: "02", title: "Channel Assessment", description: "We review orders, payment gateways and VAT status." },
  { step: "03", title: "System Setup", description: "We connect your store, gateways and couriers to Xero." },
  { step: "04", title: "Bookkeeping", description: "We reconcile sales and record transactions monthly." },
  { step: "05", title: "Reporting", description: "You receive channel profitability and cash flow reports." },
  { step: "06", title: "Advisory", description: "We support VAT, tax readiness and growth decisions." },
];
const localAreas = [
  { title: "Dubai Free Zones", description: "Accounting for ecommerce entities in DMCC, Meydan and IFZA." },
  { title: "Mainland Dubai", description: "Bookkeeping and VAT for mainland-licensed online stores." },
  { title: "UAE-Wide Sellers", description: "Support for online stores shipping across all seven emirates." },
];
const faqs = [
  { question: "What is ecommerce accounting?", answer: "Ecommerce accounting reconciles sales across channels and payment gateways, tracks inventory and COGS, and reports true profitability." },
  { question: "Do online stores need VAT registration?", answer: "Yes, once taxable turnover crosses the mandatory threshold, online stores must register for VAT." },
  { question: "Can you handle multiple sales channels?", answer: "Yes, we consolidate Shopify, Noon, Amazon, Instagram and marketplace sales into one reporting view." },
  { question: "What about payment gateway fees?", answer: "We reconcile Stripe, PayTabs, Telr and COD payouts and account for gateway fees accurately." },
  { question: "How much does ecommerce accounting cost?", answer: "Pricing depends on order volume, number of channels and reconciliation complexity." },
  { question: "How do I start?", answer: "Book a free consultation and we will review your sales channels and bookkeeping setup." },
];
const usefulLinks = [
  { text: "Amazon Accounting Dubai", href: "/services/amazon-accounting-dubai" },
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
            <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">ECOMMERCE ACCOUNTING DUBAI</span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">Ecommerce Accounting Services in Dubai</h1>
            <p className="text-white/70 text-lg my-7">Multi-channel bookkeeping, payment gateway reconciliation, inventory accounting and VAT support for UAE online stores.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">What is ecommerce accounting?</h2>
          <p className="text-grey dark:text-white/50 text-lg mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Ecommerce accounting reconciles sales across channels and payment gateways, tracks inventory and cost of goods sold, handles VAT, and reports true profitability by channel and product.</p>
        </div>
      </section>

      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">WHY CHOOSE US</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why online stores choose The Accountant</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Multi-channel accounting discipline, UAE tax knowledge and automated cloud reporting for ecommerce brands.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Ecommerce accounting services in Dubai</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Built for Shopify, Noon, WooCommerce and marketplace sellers operating across the UAE.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Ecommerce niches we serve</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">We structure accounting based on your product type, order volume and channel mix.</p>
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
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why outsource ecommerce accounting?</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Access multi-channel accounting, VAT and reporting expertise without building an internal finance team.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Our ecommerce accounting process</h2>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Ecommerce accounting across the UAE</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">We support online stores registered in Dubai free zones, mainland and shipping across the UAE.</p>
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
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">Ecommerce Accounting FAQs</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-midnight_text dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">One Set of Books for Every Sales Channel</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Stop reconciling Shopify, Noon and gateway payouts by hand — we consolidate every channel into one accurate, VAT-ready set of books.</p>
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
