import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Accounting Services in Abu Dhabi | Venus",
};

const heroChecklist = [
  "UAE Accounting Experts",
  "Corporate Tax Specialists",
  "FTA Compliance Support",
  "Cloud Accounting Experts",
  "Dedicated Account Managers",
];

const heroStats = [
  { label: "AED 312k", description: "Monthly revenue tracked" },
  { label: "100%", description: "Books updated" },
  { label: "VAT", description: "Records reviewed" },
  { label: "CT", description: "Tax ready accounts" },
];

const whyChooseUs = [
  { title: "Dedicated Accountant", description: "A consistent account manager who understands your company, records and deadlines." },
  { title: "Fast Response", description: "Timely support for bookkeeping, VAT, corporate tax, payroll and reporting questions." },
  { title: "Fixed Monthly Pricing", description: "Transparent packages based on transaction volume and reporting needs." },
  { title: "Corporate Tax Expertise", description: "Accounts maintained with UAE Corporate Tax filing and documentation in mind." },
  { title: "Cloud Accounting", description: "Xero and cloud systems for faster access to financial information." },
  { title: "Growth Insights", description: "Understand profitability, receivables, cash flow and business performance." },
];

const services = [
  { badge: "Bookkeeping", title: "Bookkeeping Services Abu Dhabi", description: "We record sales, purchases, expenses, bank movements, accounts payable, accounts receivable and reconciliations." },
  { badge: "Reporting", title: "Accounting & Financial Reporting", description: "We prepare management reports covering profit, cash flow, balance sheet, receivables, payables and performance." },
  { badge: "Corporate Tax", title: "Corporate Tax Services Abu Dhabi", description: "We help maintain corporate tax-ready accounts, review taxable income and prepare supporting schedules.", link: { text: "Learn about corporate tax services", href: "/services/premier-accounting-services-in-dubai" } },
  { badge: "VAT", title: "VAT Services Abu Dhabi", description: "We support VAT registration, VAT return preparation, VAT reconciliation and FTA-ready records.", link: { text: "View VAT services", href: "/services#vat" } },
  { badge: "Payroll", title: "Payroll Services", description: "We help maintain payroll records, salary journals, leave balances, gratuity calculations and staff cost reports." },
  { badge: "Cloud Accounting", title: "Xero & QuickBooks Accounting", description: "We support cloud accounting setup, migration, cleanup and reporting dashboards.", link: { text: "Explore Xero accounting", href: "/services#xero" } },
];

const industries = [
  { title: "Construction", description: "Project costing, subcontractors, progress billing and cash flow control." },
  { title: "Real Estate", description: "Rental income, service charges, property expenses and VAT review." },
  { title: "Healthcare", description: "Clinic accounting, payroll, supplier expenses and compliance reporting." },
  { title: "Restaurants & Retail", description: "POS reconciliation, supplier control, inventory and margin reporting." },
  { title: "E-commerce", description: "Shopify, Amazon, Noon, payment gateways, refunds and VAT records." },
  { title: "Professional Services", description: "Consultants, agencies, IT firms, retainers and profitability reporting." },
];

const comparison = [
  { area: "Cost", inHouse: "Salary, visa and benefits", accountant: "Fixed monthly accounting fee" },
  { area: "Expertise", inHouse: "One person", accountant: "Accounting, VAT, corporate tax and advisory team" },
  { area: "Reporting", inHouse: "Often delayed", accountant: "Monthly reports and cloud dashboards" },
  { area: "Compliance", inHouse: "Depends on individual experience", accountant: "FTA and UAE tax-focused accounting process" },
  { area: "Scalability", inHouse: "Harder to scale", accountant: "Flexible support as business grows" },
];

const process = [
  { step: "01", title: "Free Consultation", description: "We review your business activity and accounting needs." },
  { step: "02", title: "Business Assessment", description: "We review records, bank accounts, invoices and tax status." },
  { step: "03", title: "System Setup", description: "We configure Xero, QuickBooks or your preferred workflow." },
  { step: "04", title: "Bookkeeping", description: "We record transactions and reconcile accounts monthly." },
  { step: "05", title: "Reporting", description: "You receive useful reports for decision-making." },
  { step: "06", title: "Advisory", description: "We support tax readiness, cash flow and growth decisions." },
];

const localAreas = [
  { title: "ADGM & Al Maryah Island", description: "Accounting support for professional firms, financial businesses and ADGM companies." },
  { title: "Mussafah & Industrial Areas", description: "Support for trading, logistics, manufacturing, warehouse and industrial businesses." },
  { title: "Al Reem, Yas & Mainland Abu Dhabi", description: "Bookkeeping, VAT, payroll and reporting for SMEs and growing companies." },
];

const faqs = [
  { question: "How is ADGM company accounting different?", answer: "ADGM entities follow ADGM Commercial Licensing rules alongside UAE Corporate Tax and VAT, so books need to satisfy both the regulator's annual filing and FTA requirements — we structure records to cover both from day one." },
  { question: "How much do accounting services cost in Abu Dhabi?", answer: "Pricing scales with transaction volume, whether you're ADGM or mainland, payroll headcount and how many bank accounts and entities need consolidating." },
  { question: "Do free zone companies in Abu Dhabi need audited accounts?", answer: "Many ADGM and free zone licenses require an annual audit, which depends on properly reconciled monthly books — we prepare your accounts audit-ready throughout the year, not just at renewal." },
  { question: "Can you support government tender or bank financing reporting?", answer: "Yes, we prepare the financial statements and management reports banks and government tenders typically request, including trend reporting and cash flow forecasts." },
  { question: "What software do you use?", answer: "We primarily work with Xero and QuickBooks, integrated with your bank feeds for real-time Abu Dhabi entity reporting." },
  { question: "Do ADGM companies need accounting?", answer: "Yes, ADGM entities must maintain proper accounting records in line with ADGM Commercial Licensing Regulations and UAE tax law." },
  { question: "Can you help with VAT across ADGM and mainland entities?", answer: "Yes, we consolidate VAT across mixed ADGM/mainland structures and handle registration, returns and FTA-ready documentation for each entity." },
  { question: "How do I start?", answer: "Book a free consultation and we will map your entity structure — ADGM, free zone or mainland — before recommending an accounting setup." },
];

const usefulLinks = [
  { text: "The Accountant LLC", href: "/about" },
  { text: "Accounts Outsourcing Dubai", href: "/services" },
  { text: "Corporate Tax Services UAE", href: "/services#corporate-tax" },
  { text: "VAT Registration and Returns", href: "/services#vat" },
  { text: "VAT Filing UAE", href: "/services#vat" },
  { text: "Xero Accountant Dubai", href: "/services#xero" },
  { text: "ADGM Accounting Services", href: "/services/accounting-services-in-abu-dhabi" },
  { text: "Federal Tax Authority", href: "https://tax.gov.ae" },
  { text: "UAE Ministry of Finance", href: "https://mof.gov.ae" },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">
              ACCOUNTING SERVICES ABU DHABI
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Accounting Services in Abu Dhabi
            </h1>
            <p className="text-white/70 text-lg my-7">
              From ADGM-regulated entities to mainland trading companies, we keep Abu Dhabi
              businesses compliant with UAE Corporate Tax and VAT while giving you clear,
              government-grade financial reporting to support funding and licensing renewals.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">
                Book Free Consultation
              </Link>
              <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">
                Speak With an Accountant
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

      {/* Short answer */}
      <section className="bg-white dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <span
            className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            SHORT ANSWER
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            What are accounting services in Abu Dhabi?
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
In Abu Dhabi, accounting covers everything from ADGM entity bookkeeping to mainland
            trading records — accurate books, management reporting, Corporate Tax and VAT
            compliance, payroll and cash flow visibility for capital-intensive, growth-focused businesses.
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
            Why businesses in Abu Dhabi choose The Accountant
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            The Accountant LLC combines accounting discipline, UAE tax knowledge, cloud reporting
            and practical financial advisory for Abu Dhabi businesses.
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
            SERVICES
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Comprehensive accounting services in Abu Dhabi
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Our accounting services are designed for Abu Dhabi startups, SMEs, trading companies,
            professional firms, ADGM entities, mainland companies and growing UAE businesses.
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
                <p className="text-grey dark:text-white/50 mt-4">
                  {service.description}{" "}
                  {service.link && (
                    <Link href={service.link.href} className="text-primary font-semibold">
                      {service.link.text}.
                    </Link>
                  )}
                </p>
              </div>
            ))}
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
            Industries we serve in Abu Dhabi
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            We structure accounting based on your industry, VAT treatment, cost structure and
            reporting requirements.
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
            COMPARISON
          </span>
          <h2
            className="text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Why outsource accounting in Abu Dhabi?
          </h2>
          <p
            className="text-white/60 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Outsourcing gives Abu Dhabi businesses access to accounting, VAT, corporate tax,
            payroll and reporting expertise without building a full internal finance department.
          </p>
          <div
            className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Area</span>
              <span>In-House Accountant</span>
              <span>The Accountant LLC</span>
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
            PROCESS
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Our accounting process
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
            LOCAL SEO
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Accounting support across Abu Dhabi
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            The Accountant supports businesses across Al Reem Island, Al Maryah Island, Khalifa
            City, Mussafah, Yas Island, Masdar City, Al Raha, ADGM and Mainland Abu Dhabi with
            bookkeeping, VAT, corporate tax, payroll and financial reporting.
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
              Accounting Services Abu Dhabi FAQs
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
            Looking For Reliable Accounting Services In Abu Dhabi?
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Whether you're an ADGM entity, a mainland company, or splitting operations across both,
            get accounting built around Abu Dhabi's regulatory structure — not a generic UAE template.
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
            Related accounting and tax services
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
    </>
  );
};

export default Page;
