import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Ecommerce Accounting Services in Dubai | QuickBooks, VAT & Inventory Accounting | Nafaz",
  description:
    "Looking for ecommerce accounting services in Dubai? Nafaz provides bookkeeping, QuickBooks integration, inventory accounting, payment gateway reconciliation, VAT compliance, COGS tracking, and financial reporting for Shopify, WooCommerce, Amazon, and ecommerce businesses across the UAE.",
  keywords: [
    "Ecommerce Accounting Dubai",
    "Ecommerce Bookkeeping Dubai",
    "Shopify Accountant Dubai",
    "WooCommerce Accounting UAE",
    "QuickBooks Ecommerce Dubai",
    "Inventory Accounting Dubai",
    "Payment Gateway Reconciliation",
    "VAT for Ecommerce UAE",
    "COGS Accounting Dubai",
    "Online Business Accountant Dubai",
    "Ecommerce Financial Reporting",
    "Ecommerce Accounting UAE",
  ],
};

const heroChecklist = ["Multi-Channel Accounting", "QuickBooks Experts", "VAT Compliance", "Inventory Accounting"];
const heroStats = [
  { label: "10+", description: "Years of Ecommerce Experience" },
  { label: "99%", description: "Client Satisfaction" },
  { label: "VAT", description: "FTA Compliant" },
  { label: "COGS", description: "Inventory & Cost Tracking" },
];
const whyChooseUs = [
  { title: "Multi-Channel Accounting", description: "Manage sales from Shopify, WooCommerce, Amazon, Noon, Magento, and other ecommerce platforms within one accounting system." },
  { title: "Fast Response", description: "Receive timely assistance for bookkeeping, VAT, inventory accounting, and financial reporting." },
  { title: "Fixed Monthly Pricing", description: "Transparent pricing designed for startups, growing ecommerce brands, and established online retailers." },
  { title: "Payment Gateway Reconciliation", description: "Accurately reconcile payments from Stripe, PayPal, Amazon Pay, Telr, PayTabs, and other payment gateways." },
  { title: "QuickBooks Specialists", description: "Professional QuickBooks Online implementation, bookkeeping, automation, and ongoing support." },
  { title: "Business Growth Insights", description: "Understand revenue trends, profit margins, inventory performance, and customer acquisition costs with detailed financial reports." },
];
const services = [
  { badge: "Bookkeeping", title: "Ecommerce Bookkeeping", description: "Professional bookkeeping with accurate transaction recording, expense categorization, bank reconciliation, and monthly financial reports.", includes: ["Daily Bookkeeping", "Bank Reconciliation", "Financial Statements"] },
  { badge: "Reconciliation", title: "Payment Gateway Reconciliation", description: "Reconcile online payments, refunds, chargebacks, and processing fees from multiple payment providers.", includes: ["Stripe Reconciliation", "PayPal Reconciliation", "Payment Gateway Reporting"] },
  { badge: "Inventory", title: "Inventory & COGS Accounting", description: "Track inventory purchases, stock movements, Cost of Goods Sold (COGS), and inventory valuation.", includes: ["Inventory Tracking", "COGS Calculation", "Stock Valuation"] },
  { badge: "VAT", title: "VAT for Ecommerce Businesses", description: "Professional VAT registration, return filing, VAT health checks, and compliance for online businesses.", includes: ["VAT Registration", "VAT Return Filing", "VAT Advisory"] },
  { badge: "Reporting", title: "Profitability Reporting", description: "Monthly financial reports showing revenue, gross profit, net profit, operating expenses, and key business metrics.", includes: ["Profit Analysis", "Expense Analysis", "KPI Dashboard"] },
  { badge: "QuickBooks", title: "QuickBooks Integration", description: "Connect your ecommerce platforms with QuickBooks Online to automate bookkeeping and generate real-time financial reports.", includes: ["QuickBooks Setup", "Platform Integration", "Automated Accounting"] },
];
const industries = [
  { title: "Fashion & Apparel", description: "Online clothing brands, footwear retailers, and fashion accessories." },
  { title: "Beauty & Personal Care", description: "Cosmetics, skincare, wellness products, and personal care brands." },
  { title: "Electronics", description: "Consumer electronics, gadgets, accessories, and technology retailers." },
  { title: "Home & Furniture", description: "Furniture stores, home décor brands, and lifestyle retailers." },
  { title: "Food & Grocery", description: "Online grocery stores, specialty food businesses, and meal delivery companies." },
  { title: "D2C Brands", description: "Direct-to-consumer brands selling through their own websites and multiple marketplaces." },
];
const comparison = [
  { area: "Ecommerce Expertise", inHouse: "Limited", accountant: "✔ Dedicated Ecommerce Specialists" },
  { area: "Multi-Channel Support", inHouse: "Manual", accountant: "✔ Unified Accounting System" },
  { area: "Inventory Tracking", inHouse: "Time-Consuming", accountant: "✔ Accurate Inventory & COGS" },
  { area: "Financial Reporting", inHouse: "Basic", accountant: "✔ Real-Time Business Insights" },
  { area: "QuickBooks Integration", inHouse: "Limited", accountant: "✔ Certified QuickBooks Experts" },
  { area: "Business Scalability", inHouse: "Challenging", accountant: "✔ Flexible Solutions That Grow With You" },
];
const process = [
  { step: "01", title: "Free Consultation", description: "Understand your ecommerce business model, sales channels, and financial goals." },
  { step: "02", title: "Business Assessment", description: "Review your accounting processes, inventory management, and payment systems." },
  { step: "03", title: "QuickBooks Setup", description: "Configure QuickBooks Online and integrate it with your ecommerce platforms." },
  { step: "04", title: "Bookkeeping", description: "Manage sales transactions, inventory, VAT, payment reconciliations, and expenses." },
  { step: "05", title: "Reporting", description: "Deliver monthly financial statements, profitability reports, and performance dashboards." },
  { step: "06", title: "Business Advisory", description: "Provide financial insights that improve cash flow, profitability, and long-term growth." },
];
const localAreas = [
  { title: "Dubai Mainland & Free Zones", description: "Accounting services for ecommerce startups and established online retailers." },
  { title: "UAE Free Zones", description: "Professional accounting support for businesses operating from IFZA, Meydan, DMCC, SHAMS, SAIF Zone, and other free zones." },
  { title: "International Ecommerce Sellers", description: "Accounting solutions for businesses selling across the GCC and global ecommerce marketplaces." },
];
const faqs = [
  { question: "What is ecommerce accounting?", answer: "Ecommerce accounting involves managing sales, expenses, inventory, VAT, payment gateways, and financial reporting for online businesses." },
  { question: "Do you support Shopify businesses?", answer: "Yes. We work with Shopify, WooCommerce, Magento, BigCommerce, and other ecommerce platforms." },
  { question: "Can you integrate my store with QuickBooks?", answer: "Absolutely. We specialize in QuickBooks Online integration for ecommerce businesses, enabling automated bookkeeping and real-time financial reporting." },
  { question: "Which payment gateways do you support?", answer: "We support accounting for Stripe, PayPal, Amazon Pay, PayTabs, Telr, Checkout.com, and other popular payment providers." },
  { question: "How much do ecommerce accounting services cost?", answer: "Pricing depends on transaction volume, sales channels, inventory size, and accounting requirements. We offer flexible monthly packages." },
  { question: "How do I get started?", answer: "Book a free consultation, and our ecommerce accounting specialists will recommend the best solution for your business." },
];
const usefulLinks = [
  { text: "Amazon Accounting Services", href: "/services/amazon-accounting-dubai" },
  { text: "Professional Bookkeeping Services", href: "/services/bookkeeping-firm-dubai" },
  { text: "QuickBooks Accounting Services", href: "/services#quickbooks" },
  { text: "VAT Registration & Filing", href: "/services#vat" },
  { text: "Corporate Tax Services", href: "/services#corporate-tax" },
  { text: "Inventory Accounting", href: "/services#inventory" },
  { text: "Financial Reporting", href: "/services/financial-statement-services-dubai" },
  { text: "Payroll Services", href: "/services/payroll-services-dubai" },
  { text: "Business Advisory", href: "/services#advisory" },
  { text: "Accounting Services in Dubai", href: "/services/premier-accounting-services-in-dubai" },
];

const Page = () => {
  return (
    <>
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">Ecommerce Accounting Experts in Dubai</span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">Ecommerce Accounting Services in Dubai</h1>
            <p className="text-white/70 text-lg my-7">Simplify your ecommerce finances with professional accounting solutions from Nafaz. We help online businesses manage bookkeeping, QuickBooks accounting, inventory tracking, payment gateway reconciliation, VAT compliance, and financial reporting so you can focus on growing your sales.</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Book Free Consultation</Link>
              <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">Speak With Our Ecommerce Accountant</Link>
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
          <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">ABOUT ECOMMERCE ACCOUNTING</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">What Is Ecommerce Accounting?</h2>
          <p className="text-grey dark:text-white/50 text-lg mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Ecommerce accounting involves managing the financial activities of online businesses, including sales tracking, inventory valuation, payment gateway reconciliation, VAT compliance, Cost of Goods Sold (COGS), and profitability reporting. Accurate accounting helps online sellers understand their business performance and make informed decisions for sustainable growth.</p>
        </div>
      </section>

      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">WHY NAFAZ</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why Online Businesses Choose Nafaz</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Managing an ecommerce business involves multiple sales channels, payment gateways, and inventory movements. Nafaz provides specialized accounting solutions that simplify financial management while keeping your business compliant.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Ecommerce Accounting Services in Dubai</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Comprehensive accounting solutions tailored for ecommerce businesses selling online across the UAE and internationally.</p>
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
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">INDUSTRIES WE SERVE</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Ecommerce Businesses We Support</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">We work with online businesses across a wide range of industries.</p>
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
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why Outsource Ecommerce Accounting?</h2>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Our Ecommerce Accounting Process</h2>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Ecommerce Accounting Across the UAE</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Whether your business sells locally or globally, Nafaz provides ecommerce accounting solutions across the UAE.</p>
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
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Whether you sell through Shopify, WooCommerce, Amazon, Noon, or multiple marketplaces, Nafaz keeps your finances organized with accurate bookkeeping, QuickBooks integration, and detailed financial reporting.</p>
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
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">Ready to Scale Your Ecommerce Business?</h2>
          <p className="text-white/80 text-lg mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Let Nafaz manage your accounting while you focus on increasing sales and growing your online brand.</p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Link href="/contact" className="inline-block bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Book Your Free Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
