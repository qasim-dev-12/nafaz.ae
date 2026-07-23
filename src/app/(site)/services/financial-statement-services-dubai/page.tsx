import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Financial Statement Preparation Services in Dubai | IFRS Reporting | Nafaz",
  description:
    "Looking for professional financial statement preparation services in Dubai? Nafaz prepares IFRS-compliant Profit & Loss Statements, Balance Sheets, Cash Flow Statements, management reports, and QuickBooks financial reports for businesses across the UAE.",
  keywords: [
    "Financial Statement Services Dubai",
    "Financial Statements Dubai",
    "Profit and Loss Statement Dubai",
    "Balance Sheet Preparation Dubai",
    "Cash Flow Statement Dubai",
    "IFRS Financial Reporting Dubai",
    "Financial Reporting Services Dubai",
    "QuickBooks Financial Reports",
    "Management Reporting Dubai",
    "Business Financial Statements UAE",
    "Accounting Reports Dubai",
    "Financial Reporting UAE",
  ],
};

const heroChecklist = ["IFRS-Compliant Reports", "Profit & Loss Statements", "Balance Sheet Preparation", "QuickBooks Financial Reports"];
const heroStats = [
  { label: "500+", description: "Businesses Supported" },
  { label: "100%", description: "Accurate Financial Reporting" },
  { label: "IFRS", description: "Reporting Standards" },
  { label: "24 Hours", description: "Quick Turnaround" },
];
const whyChooseUs = [
  { title: "IFRS-Compliant Reporting", description: "Financial statements prepared in accordance with International Financial Reporting Standards (IFRS)." },
  { title: "Accurate Financial Data", description: "Reports prepared from properly reconciled accounting records for maximum accuracy." },
  { title: "Fixed Pricing", description: "Transparent pricing with no hidden charges." },
  { title: "QuickBooks Specialists", description: "Financial statements generated and reviewed using QuickBooks Online for accurate, real-time reporting." },
  { title: "Management Insights", description: "Reports designed to help business owners understand profitability, cash flow, and financial performance." },
  { title: "Confidential Financial Handling", description: "Your financial information is managed securely with complete confidentiality." },
];
const services = [
  { badge: "P&L", title: "Profit & Loss Statement", description: "Measure business performance by tracking revenue, expenses, and net profit.", includes: ["Revenue Analysis", "Expense Breakdown", "Net Profit Reporting"] },
  { badge: "Balance Sheet", title: "Balance Sheet", description: "Understand your company's financial position through a detailed summary of assets, liabilities, and equity.", includes: ["Assets", "Liabilities", "Owner's Equity"] },
  { badge: "Cash Flow", title: "Cash Flow Statement", description: "Monitor how cash moves through your business to improve liquidity and financial planning.", includes: ["Operating Activities", "Investing Activities", "Financing Activities"] },
  { badge: "Management", title: "Management Reports", description: "Customized reports that help business owners make informed strategic decisions.", includes: ["KPI Reporting", "Budget vs Actual", "Business Performance Analysis"] },
  { badge: "Review", title: "Financial Statement Review", description: "Review and validate existing financial statements for accuracy and compliance.", includes: ["Error Detection", "Reconciliation Review", "Financial Analysis"] },
  { badge: "QuickBooks", title: "QuickBooks Financial Reporting", description: "Generate accurate financial statements directly from QuickBooks Online with customized reporting.", includes: ["Report Customization", "Dashboard Reporting", "Financial Analytics"] },
];
const industries = [
  { title: "Startups", description: "Professional financial reports for investors, banks, and business planning." },
  { title: "SMEs", description: "Monthly and annual financial statements that support business growth." },
  { title: "Trading Companies", description: "Detailed inventory, revenue, and profitability reporting." },
  { title: "Retail & Ecommerce", description: "Financial reporting tailored to online and retail businesses." },
  { title: "Professional Services", description: "Financial statements for consultants, agencies, and service providers." },
  { title: "Manufacturing", description: "Cost analysis and financial reporting for production businesses." },
];
const comparison = [
  { area: "Accuracy", inHouse: "Depends on Internal Resources", accountant: "Prepared by Experienced Accountants" },
  { area: "Compliance", inHouse: "Risk of Errors", accountant: "IFRS-Compliant Reporting" },
  { area: "Reporting Speed", inHouse: "Time-Consuming", accountant: "Fast Turnaround" },
  { area: "Business Insights", inHouse: "Standard Reports", accountant: "Actionable Financial Analysis" },
  { area: "Software", inHouse: "Manual Preparation", accountant: "QuickBooks-Based Reporting" },
  { area: "Cost", inHouse: "Higher Overheads", accountant: "Affordable Fixed Pricing" },
];
const process = [
  { step: "01", title: "Free Consultation", description: "Understand your reporting requirements and business objectives." },
  { step: "02", title: "Financial Records Review", description: "Review accounting records, reconciliations, and supporting documents." },
  { step: "03", title: "Data Verification", description: "Validate financial information to ensure accuracy and completeness." },
  { step: "04", title: "Financial Statement Preparation", description: "Prepare Profit & Loss Statements, Balance Sheets, Cash Flow Statements, and supporting reports." },
  { step: "05", title: "Management Review", description: "Review the reports with you and explain key financial insights." },
  { step: "06", title: "Ongoing Reporting Support", description: "Provide monthly, quarterly, or annual financial reporting as your business grows." },
];
const localAreas = [
  { title: "Dubai Mainland", description: "Financial reporting for startups, SMEs, trading companies, and professional firms." },
  { title: "Dubai Free Zones", description: "Financial statements for businesses operating in DMCC, IFZA, DAFZA, Dubai South, JAFZA, DIFC, and other free zones." },
  { title: "Across the UAE", description: "Remote financial statement preparation and reporting for businesses throughout the Emirates." },
];
const faqs = [
  { question: "What are financial statements?", answer: "Financial statements are reports that summarize a company's financial performance and position, including the Profit & Loss Statement, Balance Sheet, and Cash Flow Statement." },
  { question: "Why are financial statements important?", answer: "They help business owners understand profitability, monitor cash flow, comply with regulations, apply for financing, and make informed business decisions." },
  { question: "How often should financial statements be prepared?", answer: "Most businesses prepare financial statements monthly for internal management, while annual statements are commonly used for compliance, audits, and tax purposes." },
  { question: "Are your financial statements IFRS compliant?", answer: "Yes. We prepare financial statements in accordance with applicable International Financial Reporting Standards (IFRS)." },
  { question: "Can you prepare financial statements using QuickBooks?", answer: "Absolutely. Nafaz specializes in preparing customized financial reports using QuickBooks Online." },
  { question: "Can you prepare reports for banks or investors?", answer: "Yes. We prepare professional financial statements suitable for banks, investors, management, and regulatory requirements." },
  { question: "How do I get started?", answer: "Book a free consultation, and our accounting professionals will discuss your reporting requirements and prepare the appropriate financial statements." },
];
const usefulLinks = [
  { text: "Accounting Services in Dubai", href: "/services/premier-accounting-services-in-dubai" },
  { text: "Bookkeeping Services", href: "/services/bookkeeping-firm-dubai" },
  { text: "QuickBooks Accounting Services", href: "/services#quickbooks" },
  { text: "VAT Registration & Filing", href: "/services#vat" },
  { text: "Corporate Tax Services", href: "/services#corporate-tax" },
  { text: "Payroll (WPS) Services", href: "/services/payroll-services-dubai" },
  { text: "Business Advisory", href: "/services#advisory" },
  { text: "Audit Support", href: "/services#audit" },
  { text: "CFO Services", href: "/services#cfo" },
  { text: "Management Reporting", href: "/services#reporting" },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">
              Professional Financial Statement Services in Dubai
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Financial Statement Preparation Services in Dubai
            </h1>
            <p className="text-white/70 text-lg my-7">
              Make informed business decisions with accurate and professionally prepared financial statements.
              Nafaz helps businesses prepare IFRS-compliant financial reports, including Profit &amp; Loss
              Statements, Balance Sheets, Cash Flow Statements, and management reports to support compliance,
              financing, and business growth.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">
                Book Free Consultation
              </Link>
              <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">
                Speak With Our Experts
              </Link>
            </div>
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
            <div className="col-span-2 aspect-video rounded-md border-2 border-dashed border-grey/30 flex items-center justify-center text-grey/50 text-sm">
              Image placeholder
            </div>
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
            ABOUT FINANCIAL STATEMENTS
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            What Are Financial Statements?
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Financial statements provide a complete overview of your business's financial performance and
            position. They summarize your income, expenses, assets, liabilities, equity, and cash flow, helping
            business owners, investors, banks, and stakeholders make informed financial decisions while ensuring
            compliance with UAE accounting standards.
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
            Why Businesses Trust Nafaz for Financial Reporting
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Accurate financial statements are essential for business growth, tax compliance, audits, and securing
            funding. Our experienced accountants prepare reliable reports that give you complete visibility into
            your business performance.
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
            Financial Statement Services in Dubai
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Professional financial reporting solutions tailored to startups, SMEs, and established businesses.
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
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span
            className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            WHO WE SERVE
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Financial Reporting for Every Business
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            We prepare financial statements for businesses across multiple industries.
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
            Why Outsource Financial Statement Preparation?
          </h2>
          <div
            className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Feature</span>
              <span>In-House Preparation</span>
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
            Our Financial Reporting Process
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
            Financial Statement Services Across Dubai
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Nafaz supports businesses across Dubai with professional financial reporting services.
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
              Financial Statement FAQs
            </h2>
          </div>
          <FAQAccordion items={faqs} />
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
            Clear Financial Reports. Smarter Business Decisions.
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Gain complete visibility into your business with professionally prepared financial statements that
            support compliance, financing, and sustainable growth.
          </p>
          <div
            className="flex flex-wrap gap-4 justify-center mt-8"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">
              Book Your Free Consultation Today
            </Link>
            <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">
              WhatsApp Us
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
            Turn Financial Data Into Business Insights
          </h2>
          <p
            className="text-white/80 text-lg mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Partner with Nafaz for accurate, timely, and IFRS-compliant financial statements that help you make
            confident business decisions.
          </p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Link href="/contact" className="inline-block bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
