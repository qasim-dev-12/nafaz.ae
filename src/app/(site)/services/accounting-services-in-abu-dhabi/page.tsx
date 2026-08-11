import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Accounting Services in Abu Dhabi | Bookkeeping, QuickBooks & Corporate Tax | Nafaz",
  description:
    "Looking for professional accounting services in Abu Dhabi? Nafaz provides bookkeeping, QuickBooks accounting, VAT, Corporate Tax, payroll, financial reporting, and business advisory services for startups, SMEs, and enterprises across Abu Dhabi.",
  keywords: [
    "Accounting Services Abu Dhabi",
    "Accountants Abu Dhabi",
    "Bookkeeping Services Abu Dhabi",
    "QuickBooks Abu Dhabi",
    "QuickBooks Accounting Abu Dhabi",
    "Corporate Tax Abu Dhabi",
    "VAT Services Abu Dhabi",
    "Payroll Services Abu Dhabi",
    "Accounting Firm Abu Dhabi",
    "Financial Reporting Abu Dhabi",
    "Business Advisory Abu Dhabi",
    "Outsourced Accounting Abu Dhabi",
  ],
};

const heroChecklist = [
  "Accounting Services",
  "Bookkeeping Services",
  "QuickBooks Experts",
  "FTA Registered Tax Agents",
];

const heroStats = [
  { label: "500+", description: "Businesses Supported" },
  { label: "99%", description: "Client Satisfaction" },
  { label: "VAT", description: "FTA Compliant Services" },
  { label: "CT", description: "Corporate Tax Specialists" },
];

const whyChooseUs = [
  { title: "Dedicated Account Manager", description: "Receive personalized support from an accountant who understands your business operations and financial objectives." },
  { title: "Fast Response", description: "Quick responses from experienced accounting professionals whenever your business requires assistance." },
  { title: "Fixed Monthly Pricing", description: "Transparent pricing with no hidden charges, making budgeting simple and predictable." },
  { title: "Corporate Tax Specialists", description: "Professional guidance for Corporate Tax registration, compliance, planning, and return filing." },
  { title: "QuickBooks Specialists", description: "Certified QuickBooks Online setup, migration, bookkeeping, financial reporting, and ongoing support." },
  { title: "Business Growth Insights", description: "Monthly financial reports and expert advice that help improve profitability and cash flow." },
];

const services = [
  { badge: "Bookkeeping", title: "Bookkeeping Services Abu Dhabi", description: "Professional bookkeeping, bank reconciliation, ledger maintenance, expense tracking, and monthly financial reporting.", includes: ["Bank Reconciliation", "General Ledger", "Monthly Reports"] },
  { badge: "Reporting", title: "Accounting & Financial Reporting", description: "Prepare accurate monthly, quarterly, and annual financial reports that support informed business decisions.", includes: ["Profit & Loss Statements", "Balance Sheet", "Cash Flow Reports"] },
  { badge: "Corporate Tax", title: "Corporate Tax Services Abu Dhabi", description: "Complete UAE Corporate Tax registration, advisory, planning, compliance, and return filing services.", includes: ["Corporate Tax Registration", "Tax Planning", "Return Filing"] },
  { badge: "VAT", title: "VAT Services Abu Dhabi", description: "Comprehensive VAT registration, filing, health checks, advisory, and Federal Tax Authority compliance.", includes: ["VAT Registration", "VAT Filing", "VAT Advisory"] },
  { badge: "Payroll", title: "Payroll Services", description: "Accurate payroll processing, WPS support, gratuity calculations, employee records, and salary management.", includes: ["WPS Processing", "Salary Calculation", "Payroll Reports"] },
  { badge: "QuickBooks", title: "QuickBooks Accounting", description: "Cloud accounting solutions using QuickBooks Online, including setup, migration, automation, bookkeeping, reporting, and support.", includes: ["QuickBooks Setup", "Data Migration", "Cloud Bookkeeping"] },
];

const industries = [
  { title: "Contracting", description: "Construction companies, contractors, and engineering firms." },
  { title: "Real Estate", description: "Property developers, brokers, leasing companies, and facility management." },
  { title: "Healthcare", description: "Medical centers, clinics, pharmacies, and healthcare providers." },
  { title: "Restaurants & Cafés", description: "Restaurants, cafés, catering businesses, and food service companies." },
  { title: "E-commerce", description: "Online retailers, Amazon sellers, Shopify businesses, and digital stores." },
  { title: "Professional Services", description: "Consultants, law firms, IT companies, architects, and marketing agencies." },
];

const comparison = [
  { area: "Account Management", inHouse: "General Support", accountant: "Dedicated Account Manager" },
  { area: "Accounting Software", inHouse: "Traditional Systems", accountant: "QuickBooks Cloud Accounting" },
  { area: "Reporting", inHouse: "Periodic", accountant: "Real-Time Financial Reports" },
  { area: "Tax Support", inHouse: "Basic", accountant: "VAT & Corporate Tax Specialists" },
  { area: "Communication", inHouse: "Delayed", accountant: "Fast Response" },
  { area: "Pricing", inHouse: "Variable", accountant: "Transparent Monthly Packages" },
];

const process = [
  { step: "01", title: "Free Consultation", description: "Discuss your business goals and accounting requirements." },
  { step: "02", title: "Business Assessment", description: "Review your financial records and identify opportunities for improvement." },
  { step: "03", title: "QuickBooks Setup", description: "Implement or migrate your accounting system into QuickBooks Online." },
  { step: "04", title: "Bookkeeping", description: "Manage daily accounting transactions and maintain accurate financial records." },
  { step: "05", title: "Reporting", description: "Receive detailed financial reports every month." },
  { step: "06", title: "Advisory", description: "Strategic financial advice that supports business growth and profitability." },
];

const localAreas = [
  { title: "ADGM (Abu Dhabi Global Market)", description: "Professional accounting and tax compliance for financial institutions and businesses." },
  { title: "Musaffah", description: "Reliable bookkeeping and accounting services for manufacturing, logistics, and industrial businesses." },
  { title: "Al Reem Island", description: "Accounting support for startups, consultants, and growing businesses." },
];

const faqs = [
  { question: "How much do accounting services cost in Abu Dhabi?", answer: "Pricing depends on your business size, transaction volume, and required services. Nafaz offers flexible monthly accounting packages." },
  { question: "Is bookkeeping mandatory in Abu Dhabi?", answer: "Yes. Businesses operating in Abu Dhabi are required to maintain proper accounting records under UAE regulations." },
  { question: "Do you provide Corporate Tax services?", answer: "Yes. We provide registration, tax planning, compliance, advisory, and return filing." },
  { question: "Can you support businesses located in Free Zones?", answer: "Absolutely. We work with Mainland companies as well as Free Zone businesses across Abu Dhabi." },
  { question: "What accounting software do you use?", answer: "We specialize in QuickBooks Online and also support businesses using other leading accounting platforms when required." },
  { question: "Do you offer outsourced accounting?", answer: "Yes. Many businesses outsource their accounting department to Nafaz for professional and cost-effective financial management." },
  { question: "How do I get started?", answer: "Simply book a free consultation, and our accounting experts will recommend the right solution for your business." },
];

const usefulLinks = [
  { text: "Accounting Services Dubai", href: "/services/premier-accounting-services-in-dubai" },
  { text: "Professional Bookkeeping Services", href: "/services/bookkeeping-firm-dubai" },
  { text: "Corporate Tax Services UAE", href: "/services/corporate-tax-registration-filing-dubai" },
  { text: "VAT Registration & Filing", href: "/services/vat-registration-return-filing-dubai" },
  { text: "Payroll Services", href: "/services/payroll-services-dubai" },
  { text: "QuickBooks Accounting Services", href: "/services#quickbooks" },
  { text: "Financial Reporting", href: "/services/financial-statement-services-dubai" },
  { text: "Audit Support", href: "/services/tax-audit-assurance-services-dubai" },
  { text: "Business Advisory", href: "/services#advisory" },
  { text: "Business Setup Services", href: "/services#business-setup" },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">
              Trusted Accounting Services in Abu Dhabi
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Accounting Services in Abu Dhabi
            </h1>
            <p className="text-white/70 text-lg my-7">
              Keep your business financially organized and fully compliant with expert accounting
              solutions from Nafaz. We provide professional bookkeeping, VAT, Corporate Tax,
              payroll, QuickBooks accounting, financial reporting, and business advisory services
              for startups, SMEs, and established businesses across Abu Dhabi.
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
                src="/images/services-images/02-Accounting Services in Abu Dhabi.png"
                alt="Accounting Services in Abu Dhabi"
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

      {/* Short answer */}
      <section className="bg-white dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <span
            className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            ABOUT ACCOUNTING
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            What Are Accounting Services in Abu Dhabi?
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Professional accounting services help businesses maintain accurate financial records,
            comply with UAE regulations, manage VAT and Corporate Tax obligations, and make
            informed financial decisions. At Nafaz, we provide reliable accounting solutions that
            simplify financial management while supporting long-term business growth in Abu Dhabi.
          </p>
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
            Why Businesses in Abu Dhabi Choose Nafaz
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Businesses trust Nafaz because we combine experienced accountants, modern QuickBooks
            cloud accounting, and proactive compliance support to deliver financial clarity and
            peace of mind.
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
            Comprehensive Accounting Services in Abu Dhabi
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Our accounting solutions are tailored to businesses of every size, helping you stay
            compliant while improving operational efficiency and financial performance.
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
            INDUSTRIES
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Industries We Serve in Abu Dhabi
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            We provide specialized accounting services across a wide range of industries, ensuring
            compliance and financial efficiency for every business.
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
            WHY NAFAZ
          </span>
          <h2
            className="text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Why Choose Nafaz for Accounting Services?
          </h2>
          <div
            className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Feature</span>
              <span>Traditional Firms</span>
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
            Our Accounting Process
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            A simple process designed for accuracy, compliance and clear reporting.
          </p>
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


      {/* Local SEO */}
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
            Accounting Support Across Abu Dhabi
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Nafaz proudly provides accounting services throughout Abu Dhabi, supporting businesses
            across Mainland, Free Zones, and industrial areas.
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
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2">
              FAQ
            </span>
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">
              Accounting Services in Abu Dhabi FAQs
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
            Related Accounting & Tax Services
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
            Ready to Get Compliant?
          </h2>
          <p
            className="text-white/80 text-lg mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Focus on growing your business while Nafaz manages your accounting, taxes, and compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
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
    </>
  );
};

export default Page;
