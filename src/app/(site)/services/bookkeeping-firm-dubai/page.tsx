import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Bookkeeping Firm in Dubai | QuickBooks Bookkeeping Services | Nafaz",
  description:
    "Looking for a professional bookkeeping firm in Dubai? Nafaz provides expert bookkeeping services, QuickBooks bookkeeping, bank reconciliation, VAT-ready records, monthly financial reporting, and outsourced bookkeeping solutions for startups, SMEs, and growing businesses across Dubai.",
  keywords: [
    "Bookkeeping Firm Dubai",
    "Bookkeeping Services Dubai",
    "Outsourced Bookkeeping Dubai",
    "QuickBooks Bookkeeping Dubai",
    "Professional Bookkeeper Dubai",
    "Bank Reconciliation Services Dubai",
    "VAT Bookkeeping Dubai",
    "Monthly Bookkeeping Dubai",
    "SME Bookkeeping Dubai",
    "Financial Record Management Dubai",
    "Cloud Bookkeeping Dubai",
    "Bookkeeping Company Dubai",
  ],
};

const heroChecklist = ["Daily, Weekly & Monthly Bookkeeping", "QuickBooks Bookkeeping", "FTA Compliance", "Monthly Financial Reports"];
const heroStats = [
  { label: "500+", description: "Businesses Supported" },
  { label: "100%", description: "Confidential & Secure" },
  { label: "24 Hours", description: "Quick Response" },
  { label: "SMEs", description: "Trusted by Growing Businesses" },
];
const whyChooseUs = [
  { title: "Dedicated Bookkeeper", description: "A dedicated professional who understands your business and maintains accurate financial records." },
  { title: "Reliable Bookkeeping", description: "Consistent recording of income, expenses, invoices, payments, and bank transactions." },
  { title: "Fixed Monthly Pricing", description: "Transparent bookkeeping packages with predictable monthly costs." },
  { title: "FTA Compliance Focus", description: "Maintain VAT-ready books that comply with UAE accounting and tax regulations." },
  { title: "QuickBooks Specialists", description: "Professional QuickBooks bookkeeping, reconciliation, reporting, and ongoing support." },
  { title: "Clean Financial Records", description: "Organized books that simplify accounting, audits, and financial reporting." },
];
const services = [
  { badge: "Bookkeeping", title: "Daily Bookkeeping", description: "Record daily financial transactions accurately to keep your books updated.", includes: ["Sales & Purchase Entries", "Expense Recording", "Cash Transactions"] },
  { badge: "Reconciliation", title: "Bank Reconciliation", description: "Match bank statements with accounting records to ensure complete financial accuracy.", includes: ["Bank Reconciliation", "Credit Card Reconciliation", "Cash Reconciliation"] },
  { badge: "Payables", title: "Accounts Payable & Receivable", description: "Track supplier payments, customer invoices, outstanding balances, and collections.", includes: ["Supplier Management", "Customer Invoicing", "Outstanding Receivables"] },
  { badge: "Reporting", title: "Monthly Financial Reporting", description: "Receive clear monthly reports that provide visibility into your business performance.", includes: ["Profit & Loss Statement", "Balance Sheet", "Cash Flow Report"] },
  { badge: "VAT", title: "VAT-Ready Bookkeeping", description: "Maintain bookkeeping records that are fully prepared for VAT filing and FTA compliance.", includes: ["VAT Transaction Recording", "VAT Reconciliation", "VAT Documentation"] },
  { badge: "QuickBooks", title: "QuickBooks Bookkeeping", description: "Professional bookkeeping using QuickBooks Online for automated and cloud-based financial management.", includes: ["QuickBooks Setup", "Monthly Bookkeeping", "Financial Dashboard"] },
];
const industries = [
  { title: "Startups & SMEs", description: "Affordable bookkeeping solutions designed for growing businesses." },
  { title: "Trading Companies", description: "Wholesale, import/export, distribution, and retail businesses." },
  { title: "Consultants & Agencies", description: "Marketing agencies, consultants, legal firms, and professional service providers." },
  { title: "Restaurants & Cafés", description: "Restaurants, coffee shops, food businesses, and hospitality companies." },
  { title: "Retail Businesses", description: "Retail stores, supermarkets, and showroom businesses." },
  { title: "Free Zone Companies", description: "Bookkeeping services for businesses operating in Dubai free zones." },
];
const comparison = [
  { area: "Cost", inHouse: "Full-time salary & benefits", accountant: "Affordable monthly packages" },
  { area: "Expertise", inHouse: "Limited experience", accountant: "Experienced bookkeeping specialists" },
  { area: "Technology", inHouse: "Manual processes", accountant: "QuickBooks cloud bookkeeping" },
  { area: "Compliance", inHouse: "Basic knowledge", accountant: "VAT-ready financial records" },
  { area: "Reporting", inHouse: "Basic reports", accountant: "Detailed monthly financial reports" },
  { area: "Scalability", inHouse: "Difficult to expand", accountant: "Flexible solutions as your business grows" },
];
const process = [
  { step: "01", title: "Free Consultation", description: "Understand your bookkeeping requirements and business operations." },
  { step: "02", title: "Records Review", description: "Review invoices, receipts, bank statements, and existing accounting records." },
  { step: "03", title: "QuickBooks Setup", description: "Configure or optimize your QuickBooks Online account for efficient bookkeeping." },
  { step: "04", title: "Bookkeeping", description: "Record daily transactions, reconcile accounts, and maintain accurate books." },
  { step: "05", title: "Monthly Reporting", description: "Deliver organized financial statements and management reports." },
  { step: "06", title: "Continuous Support", description: "Provide ongoing bookkeeping assistance as your business grows." },
];
const localAreas = [
  { title: "Dubai Mainland", description: "Bookkeeping services for trading companies, consultants, restaurants, and SMEs." },
  { title: "Dubai Free Zones", description: "Accounting support for businesses operating in DMCC, IFZA, Meydan, DAFZA, Dubai South, JAFZA, and other free zones." },
  { title: "Across the UAE", description: "Remote bookkeeping services using QuickBooks Online for businesses across all Emirates." },
];
const faqs = [
  { question: "What does a bookkeeping firm do?", answer: "A bookkeeping firm records financial transactions, reconciles bank accounts, manages invoices, prepares financial reports, and maintains accurate accounting records for businesses." },
  { question: "How much does bookkeeping cost in Dubai?", answer: "The cost depends on transaction volume, business size, and service requirements. Nafaz offers flexible monthly bookkeeping packages tailored to your business." },
  { question: "Is bookkeeping mandatory in the UAE?", answer: "Yes. Businesses are required to maintain proper accounting records under UAE regulations for tax compliance and financial reporting." },
  { question: "How often should bookkeeping be updated?", answer: "We recommend daily or weekly bookkeeping to ensure accurate financial records and timely reporting." },
  { question: "Do you use QuickBooks?", answer: "Yes. Nafaz specializes in QuickBooks Online bookkeeping, setup, migration, reconciliation, and financial reporting." },
  { question: "How do I get started?", answer: "Book a free consultation, and our bookkeeping specialists will assess your business and recommend the most suitable bookkeeping solution." },
];
const usefulLinks = [
  { text: "Accounting & Bookkeeping Services", href: "/services/accurate-affordable-bookkeeping-dubai" },
  { text: "Premier Accounting Services in Dubai", href: "/services/premier-accounting-services-in-dubai" },
  { text: "VAT Registration & Return Filing", href: "/services#vat" },
  { text: "Corporate Tax Services", href: "/services#corporate-tax" },
  { text: "QuickBooks Accounting Services", href: "/services#quickbooks" },
  { text: "Financial Reporting", href: "/services/financial-statement-services-dubai" },
  { text: "Payroll Services", href: "/services/payroll-services-dubai" },
  { text: "Business Advisory", href: "/services#advisory" },
  { text: "Audit Support", href: "/services#audit" },
  { text: "CFO Services", href: "/services#cfo" },
];

const Page = () => {
  return (
    <>
      <section className="bg-midnight_text dark:bg-darkmode text-center md:py-28 py-20 md:pt-44 pt-36 px-4">
        <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6" data-aos="fade-up" data-aos-duration="1000">Professional Bookkeeping Services in Dubai</span>
        <h1 className="text-white md:text-[52px] text-4xl font-bold leading-tight max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
          Bookkeeping Firm in Dubai
        </h1>
        <p className="text-white/70 md:text-xl text-lg max-w-2xl mx-auto my-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          Keep your financial records accurate, organized, and compliant with professional bookkeeping services from Nafaz. We help startups, SMEs, and growing businesses maintain clean books through expert bookkeeping, QuickBooks management, bank reconciliation, VAT-ready records, and monthly financial reporting.
        </p>
        <div className="flex flex-wrap gap-4 justify-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Book Free Consultation</Link>
          <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">Speak With Our Bookkeeper</Link>
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

      <section className="bg-white dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">WHY BOOKKEEPING</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Not Just Data Entry. A Real Bookkeeping Partner.</h2>
          <p className="text-grey dark:text-white/50 text-lg mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Bookkeeping is more than recording transactions—it's about maintaining accurate financial records that help your business stay compliant, understand cash flow, and make confident financial decisions. Nafaz ensures your books are always organized, up to date, and ready for tax and audit requirements.</p>
        </div>
      </section>

      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">WHY NAFAZ</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why Businesses Choose Nafaz for Bookkeeping</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Our bookkeeping specialists combine accounting expertise with modern cloud technology to deliver reliable financial records and ongoing support.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Bookkeeping Services in Dubai</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Our bookkeeping solutions help businesses stay financially organized while ensuring compliance with UAE regulations.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Industries We Support</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">We provide bookkeeping services for businesses across a wide range of industries in Dubai.</p>
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
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why Outsource Your Bookkeeping?</h2>
          <div className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Feature</span><span>In-House Bookkeeper</span><span>Nafaz</span>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Our Bookkeeping Process</h2>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Bookkeeping Support Across Dubai</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Nafaz provides professional bookkeeping services to businesses throughout Dubai and surrounding areas.</p>
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
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">Ready for Clean, Accurate Books?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Let Nafaz manage your bookkeeping while you focus on growing your business. Our experienced bookkeepers ensure your records remain accurate, organized, and fully compliant.</p>
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
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">Ready to Get Your Books in Order?</h2>
          <p className="text-white/80 text-lg mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Partner with Nafaz for reliable bookkeeping services that keep your business organized, compliant, and ready for growth.</p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Link href="/contact" className="inline-block bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Book Your Free Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
