import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Amazon Accounting Services in Dubai | QuickBooks, FBA & VAT Experts | Nafaz",
  description:
    "Looking for Amazon accounting services in Dubai? Nafaz provides Amazon FBA and FBM bookkeeping, QuickBooks integration, inventory accounting, COGS tracking, VAT compliance, profitability reporting, and financial management for Amazon sellers across the UAE.",
  keywords: [
    "Amazon Accounting Dubai",
    "Amazon Bookkeeping Dubai",
    "Amazon FBA Accounting UAE",
    "Amazon Seller Accountant Dubai",
    "Amazon VAT Services UAE",
    "Inventory Accounting Dubai",
    "COGS Accounting UAE",
    "QuickBooks Amazon Integration",
    "Ecommerce Accounting Dubai",
    "Amazon Financial Reporting",
    "Amazon Business Accounting UAE",
    "QuickBooks Accounting Dubai",
  ],
};

const heroChecklist = ["Amazon Bookkeeping", "QuickBooks Experts", "VAT Compliance", "Inventory Accounting"];
const heroStats = [
  { label: "500+", description: "Businesses Supported" },
  { label: "99%", description: "Client Satisfaction" },
  { label: "VAT", description: "FTA Compliant" },
  { label: "SKU", description: "Inventory Tracking Specialists" },
];
const whyChooseUs = [
  { title: "Amazon Marketplace Specialists", description: "Dedicated accounting solutions designed specifically for Amazon FBA, FBM, and multi-channel sellers." },
  { title: "Fast Response", description: "Receive prompt support for bookkeeping, VAT, inventory reconciliation, and financial reporting." },
  { title: "Fixed Monthly Pricing", description: "Affordable accounting packages with transparent pricing and no hidden charges." },
  { title: "Multi-Channel Accounting", description: "Manage Amazon, Noon, Shopify, WooCommerce, and other sales channels from one accounting system." },
  { title: "QuickBooks Specialists", description: "Professional QuickBooks setup, Amazon integration, bookkeeping, automation, and reporting." },
  { title: "Profitability Insights", description: "Know exactly how much profit you earn after Amazon fees, advertising costs, shipping, and taxes." },
];
const services = [
  { badge: "Reconciliation", title: "Amazon Sales Reconciliation", description: "Accurately reconcile Amazon settlements, sales, refunds, reimbursements, and marketplace fees.", includes: ["Settlement Reports", "Refund Reconciliation", "Amazon Fee Tracking"] },
  { badge: "Inventory", title: "Inventory & COGS Accounting", description: "Track inventory purchases, stock movements, Cost of Goods Sold (COGS), and inventory valuation.", includes: ["Inventory Tracking", "COGS Calculation", "Stock Valuation"] },
  { badge: "VAT", title: "VAT for Amazon Sellers", description: "Stay compliant with UAE VAT regulations through accurate VAT calculations, filings, and advisory services.", includes: ["VAT Registration", "VAT Return Filing", "VAT Health Check"] },
  { badge: "QuickBooks", title: "QuickBooks for Amazon", description: "Integrate Amazon sales with QuickBooks Online for automated bookkeeping, real-time reporting, and simplified financial management.", includes: ["QuickBooks Setup", "Amazon Integration", "Automated Bookkeeping"] },
  { badge: "Reporting", title: "Profitability Reporting", description: "Understand your true profit by analyzing Amazon fees, advertising spend, shipping costs, and operating expenses.", includes: ["Gross Profit Reports", "Net Profit Analysis", "KPI Dashboard"] },
  { badge: "Payroll", title: "Payroll Services", description: "Payroll processing for Amazon businesses with employees, warehouse teams, and administrative staff.", includes: ["Payroll Management", "WPS Compliance", "Salary Reports"] },
];
const industries = [
  { title: "Amazon FBA Sellers", description: "Accounting solutions for Fulfilled by Amazon businesses." },
  { title: "Amazon FBM Sellers", description: "Bookkeeping and financial reporting for merchant fulfilled businesses." },
  { title: "Private Label Brands", description: "Accounting support for growing private label businesses selling on Amazon." },
  { title: "Multi-Marketplace Sellers", description: "Accounting for businesses selling on Amazon, Noon, Shopify, WooCommerce, and other platforms." },
  { title: "Wholesale & Distribution", description: "Accounting for wholesale suppliers selling through Amazon and B2B channels." },
  { title: "Agencies & Aggregators", description: "Financial reporting and accounting support for Amazon agencies and brand aggregators." },
];
const comparison = [
  { area: "Marketplace Experience", inHouse: "Limited", accountant: "✔ Amazon Specialists" },
  { area: "Settlement Reconciliation", inHouse: "Manual", accountant: "✔ Automated Process" },
  { area: "Inventory Accounting", inHouse: "Complex", accountant: "✔ Accurate COGS Tracking" },
  { area: "Reporting", inHouse: "Basic", accountant: "✔ Real-Time Profitability Reports" },
  { area: "QuickBooks Integration", inHouse: "Limited", accountant: "✔ Certified QuickBooks Experts" },
  { area: "Cost", inHouse: "High", accountant: "✔ Affordable Monthly Packages" },
];
const process = [
  { step: "01", title: "Free Consultation", description: "Understand your Amazon business model, sales channels, and accounting requirements." },
  { step: "02", title: "Business Assessment", description: "Review Amazon reports, settlement statements, inventory records, and accounting systems." },
  { step: "03", title: "QuickBooks Integration", description: "Configure QuickBooks Online and connect your Amazon business for streamlined bookkeeping." },
  { step: "04", title: "Bookkeeping", description: "Record sales, fees, inventory movements, expenses, VAT, and reconciliations." },
  { step: "05", title: "Reporting", description: "Receive monthly profitability reports, inventory reports, and financial statements." },
  { step: "06", title: "Business Advisory", description: "Strategic financial advice to improve margins, cash flow, and business growth." },
];
const localAreas = [
  { title: "Dubai Mainland & Free Zones", description: "Accounting solutions for Amazon sellers based in Dubai." },
  { title: "UAE Free Zones", description: "Professional accounting for businesses operating from IFZA, Meydan, DMCC, SHAMS, SAIF Zone, and other free zones." },
  { title: "Cross-Border Sellers", description: "Accounting support for businesses selling across the GCC, Middle East, Europe, and international Amazon marketplaces." },
];
const faqs = [
  { question: "What is Amazon accounting?", answer: "Amazon accounting involves recording sales, marketplace fees, advertising expenses, inventory costs, VAT, and profitability to maintain accurate financial records." },
  { question: "Do I need accounting if I sell only on Amazon?", answer: "Yes. Accurate bookkeeping helps monitor profitability, remain VAT compliant, and support business growth." },
  { question: "Can you integrate Amazon with QuickBooks?", answer: "Yes. Nafaz specializes in integrating Amazon sales with QuickBooks Online for automated accounting and financial reporting." },
  { question: "Do you calculate Cost of Goods Sold (COGS)?", answer: "Absolutely. We manage inventory accounting, stock valuation, and COGS calculations to ensure accurate profit reporting." },
  { question: "How much do Amazon accounting services cost?", answer: "Pricing depends on transaction volume, number of SKUs, and business requirements. We offer flexible monthly packages." },
  { question: "How do I get started?", answer: "Book a free consultation, and we'll assess your Amazon business and recommend the most suitable accounting solution." },
];
const usefulLinks = [
  { text: "Ecommerce Accounting", href: "/services/ecommerce-accounting-dubai" },
  { text: "QuickBooks Accounting Services", href: "/services#quickbooks" },
  { text: "Professional Bookkeeping Services", href: "/services/bookkeeping-firm-dubai" },
  { text: "VAT Registration & Filing", href: "/services#vat" },
  { text: "Corporate Tax Services", href: "/services#corporate-tax" },
  { text: "Inventory Accounting", href: "/services#inventory" },
  { text: "Payroll Management", href: "/services/payroll-services-dubai" },
  { text: "Financial Reporting", href: "/services/financial-statement-services-dubai" },
  { text: "Business Advisory", href: "/services#advisory" },
  { text: "Accounting Services in Dubai", href: "/services/premier-accounting-services-in-dubai" },
];

const Page = () => {
  return (
    <>
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">Amazon Accounting Specialists in Dubai</span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">Amazon Accounting Services in Dubai</h1>
            <p className="text-white/70 text-lg my-7">Grow your Amazon business with confidence while Nafaz manages your accounting, bookkeeping, inventory reconciliation, VAT compliance, and financial reporting. We help Amazon FBA, FBM, private label, and multi-marketplace sellers maintain accurate financial records and maximize profitability.</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Book Free Consultation</Link>
              <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">Speak With Our Amazon Accountant</Link>
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
          <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">AMAZON ACCOUNTING</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">What is Amazon Accounting?</h2>
          <p className="text-grey dark:text-white/50 text-lg mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Amazon accounting involves tracking marketplace sales, inventory movements, Amazon fees, shipping costs, advertising expenses, VAT obligations, and overall business profitability. Professional accounting ensures every transaction is accurately recorded, giving Amazon sellers a clear picture of their financial performance while maintaining compliance with UAE regulations.</p>
        </div>
      </section>

      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">WHY NAFAZ</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why Amazon Sellers Choose Nafaz</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Selling on Amazon requires specialized accounting beyond traditional bookkeeping. Nafaz helps sellers understand their true profitability through accurate financial reporting, inventory accounting, and QuickBooks integration.</p>
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
          <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">OUR SERVICES</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Amazon Accounting Services in Dubai</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Professional accounting solutions designed specifically for Amazon businesses operating in the UAE and GCC.</p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-7 mt-12">
            {services.map((service, index) => (
              <div key={index} className="bg-section dark:bg-darklight rounded-md shadow-service p-10 text-left" data-aos="fade-up" data-aos-delay={`${index * 200}`} data-aos-duration="1000" data-aos-offset="300">
                <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-5 py-2">{service.badge}</span>
                <h3 className="text-2xl font-bold text-midnight_text dark:text-white mt-6">{service.title}</h3>
                <p className="text-grey dark:text-white/50 mt-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.includes.map((item, itemIndex) => (
                    <span key={itemIndex} className="bg-white dark:bg-darkmode text-midnight_text dark:text-white text-sm font-medium rounded-full px-4 py-2">✔ {item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-section dark:bg-darklight py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">WHO WE SERVE</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Amazon Sellers We Support</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Our accounting services are designed for every Amazon business model.</p>
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
          <span className="bg-white/10 text-yellow-400 font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">WHY OUTSOURCE</span>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why Outsource Amazon Accounting?</h2>
          <div className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Feature</span><span>In-House Accounting</span><span>Nafaz</span>
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
          <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">OUR PROCESS</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Our Amazon Accounting Process</h2>
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
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">SERVICE AREAS</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Amazon Seller Accounting Across the UAE</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Whether you sell locally or internationally, Nafaz supports Amazon sellers throughout the UAE.</p>
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
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Know exactly how much your Amazon business earns with professional accounting, inventory management, QuickBooks integration, and financial reporting from Nafaz.</p>
          <div className="flex flex-wrap gap-4 justify-center mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Book Your Free Consultation Today</Link>
            <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">WhatsApp Us</Link>
          </div>
        </div>
      </section>

      <section className="bg-section dark:bg-darklight py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">USEFUL LINKS</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6 mb-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Related Services</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {usefulLinks.map((link, index) => (
              <Link key={index} href={link.href} className="bg-white dark:bg-darkmode text-midnight_text dark:text-white font-semibold rounded-full px-6 py-3 shadow-service">{link.text}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">Ready to Scale Your Amazon Business?</h2>
          <p className="text-white/80 text-lg mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Focus on growing your sales while Nafaz manages your accounting, VAT, inventory tracking, and financial reporting.</p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Link href="/contact" className="inline-block bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Book Your Free Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
