import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Premier Accounting Services in Dubai | Venus",
};

const trustTicker = [
  "Corporate Tax Support",
  "Fixed Monthly Packages",
  "Cloud Reporting",
  "FTA Approved Tax Agency",
];

const whyChooseUs = [
  {
    title: "Dedicated Accountant",
    description:
      "A consistent point of contact who understands your business, documents, deadlines, and reporting needs.",
  },
  {
    title: "FTA Compliance Focus",
    description:
      "Books maintained with VAT, corporate tax, audit readiness, and FTA documentation requirements in mind.",
  },
  {
    title: "Xero Cloud Accounting",
    description:
      "Real-time reporting, clean dashboards, better visibility, and less manual work for owners.",
  },
  {
    title: "Fixed Monthly Pricing",
    description:
      "Transparent monthly packages based on transactions, VAT status, payroll, and reporting complexity.",
  },
  {
    title: "Fast Response",
    description:
      "Practical support for bookkeeping, VAT, corporate tax, payroll, and financial reporting questions.",
  },
  {
    title: "Business Advisory",
    description:
      "We help you understand profitability, margins, receivables, cash flow, and growth risks.",
  },
];

const services = [
  {
    badge: "Bookkeeping",
    title: "Bookkeeping Services Dubai",
    description:
      "We record sales, purchases, expenses, bank movements, accounts payable, accounts receivable, and monthly reconciliations.",
    points: ["Bank reconciliation", "Sales and purchase ledgers", "Monthly close and review"],
  },
  {
    badge: "VAT",
    title: "VAT Services Dubai",
    description:
      "We support VAT registration, VAT return preparation, input VAT review, output VAT review, and FTA-ready documentation.",
    points: ["VAT registration and returns", "VAT filing UAE", "VAT health checks"],
  },
  {
    badge: "Corporate Tax",
    title: "Corporate Tax Services UAE",
    description:
      "We help businesses maintain corporate tax-ready accounts, review taxable income, and prepare supporting schedules for filing.",
    points: ["Corporate tax services UAE", "Tax computation support", "FTA filing readiness"],
  },
  {
    badge: "Cloud",
    title: "Xero Accountant Dubai",
    description:
      "We set up, migrate, clean, and manage Xero accounting systems for UAE businesses that need faster reporting.",
    points: ["Xero accountant Dubai", "Chart of accounts setup", "Cloud reporting dashboard"],
  },
];

const comparison = [
  { old: ["Manual spreadsheets", "Slow"], neu: ["Xero cloud accounting", "Modern"] },
  { old: ["Reactive tax support", "Risky"], neu: ["VAT & corporate tax ready", "Compliant"] },
  { old: ["Delayed reports", "Late"], neu: ["Monthly reporting", "Clear"] },
  { old: ["Generic advice", "Basic"], neu: ["Business advisory", "Strategic"] },
  { old: ["Unclear pricing", "Variable"], neu: ["Fixed monthly packages", "Transparent"] },
];

const journey = [
  { step: "01", title: "Discovery", description: "We understand your activity, current accounts, tax status, and goals." },
  { step: "02", title: "Review", description: "We review bank statements, invoices, ledgers, and VAT filings." },
  { step: "03", title: "Setup", description: "We configure Xero, chart of accounts, workflows, and reporting." },
  { step: "04", title: "Manage", description: "We record transactions, reconcile banks, and review expenses." },
  { step: "05", title: "Grow", description: "You receive monthly reports, insights, and ongoing advisory." },
];

const trustStats = [
  { label: "FTA", description: "Compliance-focused accounting support" },
  { label: "Xero", description: "Cloud accounting setup and reporting" },
  { label: "500+", description: "Businesses supported across the UAE" },
  { label: "SME", description: "Accounting packages for growing companies" },
];

const caseStudies = [
  {
    title: "Trading Company",
    problem: "Messy supplier ledgers and delayed VAT records.",
    solution: "Monthly bookkeeping, reconciliation, and VAT review.",
    result: "Faster VAT preparation",
  },
  {
    title: "Technology Startup",
    problem: "No investor-ready reporting or cloud accounting.",
    solution: "Xero setup, payroll journals, and dashboards.",
    result: "Better funding visibility",
  },
  {
    title: "Professional Firm",
    problem: "Weak receivables control and unclear margins.",
    solution: "Revenue tracking and CFO reporting.",
    result: "Stronger cash flow",
  },
];

const faqs = [
  {
    question: "How much do accounting services cost in Dubai?",
    answer:
      "Accounting costs depend on transaction volume, VAT status, payroll size, number of bank accounts, reporting frequency, and business complexity.",
  },
  {
    question: "Is bookkeeping mandatory in the UAE?",
    answer:
      "Yes. UAE law requires businesses to maintain accounting records that support VAT, corporate tax, and audit obligations.",
  },
  {
    question: "Do SMEs need accounting services?",
    answer:
      "Most SMEs benefit from professional bookkeeping to stay VAT and corporate tax compliant while getting clear visibility into cash flow.",
  },
  {
    question: "What accounting software do you use?",
    answer: "We primarily set up, migrate, and manage businesses on Xero cloud accounting.",
  },
  {
    question: "Can you manage VAT and corporate tax?",
    answer:
      "Yes, we handle VAT registration, VAT returns, and corporate tax-ready bookkeeping and filing support.",
  },
  {
    question: "Do free zone companies need accounting?",
    answer:
      "Yes, free zone companies must maintain accounting records and may have VAT and corporate tax obligations depending on activity.",
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
      <section className="bg-midnight_text dark:bg-darkmode text-center md:py-28 py-20 md:pt-44 pt-36 px-4">
        <h1
          className="text-white md:text-[52px] text-4xl font-bold leading-tight max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Premier Accounting Services in Dubai
        </h1>
        <p
          className="text-white/70 md:text-xl text-lg max-w-2xl mx-auto my-7"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          The Accountant LLC helps UAE businesses maintain accurate books, prepare VAT records,
          stay corporate tax ready, process payroll, and make sharper decisions through Xero
          cloud accounting and monthly financial reporting.
        </p>
        <div
          className="flex flex-wrap gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <Link
            href="/contact"
            className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90"
          >
            Book Free Consultation
          </Link>
          <Link
            href="/contact"
            className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10"
          >
            Speak With an Accountant
          </Link>
        </div>
        <div
          className="max-w-2xl mx-auto mt-12 aspect-video rounded-md border-2 border-dashed border-white/20 flex items-center justify-center text-white/30 text-sm"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          Image placeholder
        </div>
      </section>

      {/* Trust ticker */}
      <section className="bg-midnight_text dark:bg-darkmode py-6 overflow-hidden">
        <div className="flex flex-wrap gap-4 justify-center">
          {trustTicker.map((item, index) => (
            <span
              key={index}
              className="bg-white text-midnight_text font-semibold rounded-full px-6 py-3 whitespace-nowrap"
            >
              ✓ {item}
            </span>
          ))}
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
            When records are delayed, VAT is unclear, receivables are messy, and reports arrive
            too late, owners make decisions without financial confidence.
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
            Not just accountants. Your UAE compliance partner.
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            The Accountant LLC combines bookkeeping discipline, UAE tax knowledge, cloud
            reporting, and practical business advisory.
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
            Premium accounting services built for UAE businesses.
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Our accounting services support startups, SMEs, trading companies, ecommerce
            businesses, consultants, free zone companies, mainland companies, and international
            businesses entering the UAE.
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
            Typical accounting firm vs The Accountant.
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
              <h3 className="text-white text-2xl font-bold mb-6">Typical Accounting Firm</h3>
              {comparison.map((row, index) => (
                <div key={index} className="flex justify-between border-b border-white/10 py-4">
                  <span className="text-white/70">{row.old[0]}</span>
                  <span className="text-white font-bold">{row.old[1]}</span>
                </div>
              ))}
            </div>
            <div
              className="bg-white/10 rounded-md p-10 text-left"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h3 className="text-white text-2xl font-bold mb-6">The Accountant LLC</h3>
              {comparison.map((row, index) => (
                <div key={index} className="flex justify-between border-b border-white/10 py-4">
                  <span className="text-white/70">{row.neu[0]}</span>
                  <span className="text-white font-bold">{row.neu[1]}</span>
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
            A finance journey designed for clarity.
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
            TRUST WALL
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Built for UAE compliance and business growth.
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            The Accountant LLC supports UAE businesses with accounting, VAT, corporate tax,
            payroll, reporting, and cloud systems.
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
        <div className="container mx-auto max-w-6xl">
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight text-center mb-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Real business problems. Cleaner financial outcomes.
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
                <p className="text-grey dark:text-white/50 mb-4">
                  <span className="font-bold text-midnight_text dark:text-white">Problem: </span>
                  {item.problem}
                </p>
                <p className="text-grey dark:text-white/50 mb-6">
                  <span className="font-bold text-midnight_text dark:text-white">Solution: </span>
                  {item.solution}
                </p>
                <p className="bg-green-50 dark:bg-white/5 text-success font-bold rounded-md p-4">
                  Result: {item.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-4xl" data-aos="fade-up" data-aos-duration="1000">
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
            Ready To Build A Stronger Financial Future?
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Get accurate books, timely reports, VAT-ready records, corporate tax support, payroll
            assistance, and Xero cloud accounting from UAE accounting specialists.
          </p>
          <div
            className="flex flex-wrap gap-4 justify-center mt-8"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <Link
              href="/contact"
              className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90"
            >
              Book Your Free Consultation
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10"
            >
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
