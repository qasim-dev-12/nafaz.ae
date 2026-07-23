import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Accurate & Affordable Bookkeeping in Dubai | QuickBooks Bookkeeping | Nafaz",
  description:
    "Looking for affordable bookkeeping services in Dubai? Nafaz offers accurate QuickBooks bookkeeping, bank reconciliation, VAT-ready records, monthly financial reporting, and outsourced bookkeeping packages starting from affordable monthly plans for startups and SMEs.",
  keywords: [
    "Affordable Bookkeeping Dubai",
    "Bookkeeping Services Dubai",
    "Cheap Bookkeeping Dubai",
    "Outsourced Bookkeeping Dubai",
    "QuickBooks Bookkeeping Dubai",
    "Bookkeeping Packages Dubai",
    "SME Bookkeeping Dubai",
    "Startup Bookkeeping Dubai",
    "VAT Bookkeeping Dubai",
    "Monthly Bookkeeping Services Dubai",
    "Professional Bookkeeper Dubai",
    "Cloud Bookkeeping Dubai",
  ],
};

const heroChecklist = ["Error-Free Bookkeeping", "Bank Reconciliation", "FTA Compliance Support", "QuickBooks Included"];
const heroStats = [
  { label: "From AED 499/mo", description: "Affordable Monthly Packages" },
  { label: "100%", description: "Data Confidentiality" },
  { label: "0", description: "Hidden Fees" },
  { label: "24 Hours", description: "Average Response Time" },
];
const whyChooseUs = [
  { title: "Accuracy First", description: "Every transaction is carefully recorded and reviewed to ensure your books remain accurate and up to date." },
  { title: "No Hidden Fees", description: "Transparent monthly pricing with no surprise charges or long-term commitments." },
  { title: "Affordable for SMEs", description: "Flexible bookkeeping packages designed specifically for startups, freelancers, and growing businesses." },
  { title: "FTA Compliance Focus", description: "Bookkeeping maintained according to UAE accounting standards and VAT requirements." },
  { title: "QuickBooks Included", description: "We manage your bookkeeping using QuickBooks Online, providing secure cloud access and real-time financial information." },
  { title: "Dedicated Bookkeeper", description: "Work with an experienced bookkeeping professional who understands your business." },
];
const pricingTiers = [
  { name: "Starter Package", price: "AED 499 / Month", description: "Ideal for startups and small businesses with lower monthly transaction volumes.", points: ["Up to 50 Monthly Transactions", "Bank Reconciliation", "Monthly Bookkeeping", "Basic Financial Reports", "VAT-Ready Records"] },
  { name: "Growth Package", price: "AED 999 / Month", description: "Designed for growing businesses requiring more detailed bookkeeping and reporting.", points: ["Up to 200 Monthly Transactions", "Advanced Bank Reconciliation", "Monthly Financial Reports", "QuickBooks Management", "VAT Compliance Support"] },
  { name: "Custom Package", price: "Custom Pricing", description: "Tailored bookkeeping solutions for businesses with high transaction volumes or multiple business entities.", points: ["Unlimited Transactions", "Dedicated Bookkeeper", "Advanced Reporting", "Payroll Support", "Full VAT Support"] },
];
const industries = [
  { title: "Startups", description: "Cost-effective bookkeeping that supports business growth from day one." },
  { title: "Freelancers & Consultants", description: "Professional bookkeeping without the cost of an in-house finance team." },
  { title: "Trading Companies", description: "Bookkeeping for wholesalers, import/export companies, and distributors." },
  { title: "Retail & F&B", description: "Bookkeeping solutions for restaurants, cafés, supermarkets, and retail stores." },
  { title: "Free Zone Companies", description: "Affordable bookkeeping for businesses operating in UAE free zones." },
  { title: "Growing SMEs", description: "Scalable bookkeeping solutions that grow with your business." },
];
const comparison = [
  { area: "Monthly Cost", inHouse: "Salary + Benefits", accountant: "Affordable Fixed Packages" },
  { area: "Recruitment", inHouse: "Time-Consuming", accountant: "Ready-to-Start Team" },
  { area: "Experience", inHouse: "Limited to One Person", accountant: "Experienced Bookkeeping Specialists" },
  { area: "Software", inHouse: "Additional Cost", accountant: "QuickBooks Included" },
  { area: "Reporting", inHouse: "Basic", accountant: "Monthly Financial Reports" },
  { area: "Scalability", inHouse: "Difficult", accountant: "Flexible Services That Grow With You" },
];
const process = [
  { step: "01", title: "Free Consultation", description: "Understand your bookkeeping requirements and recommend the right package." },
  { step: "02", title: "Package Selection", description: "Choose the bookkeeping plan that best suits your business." },
  { step: "03", title: "QuickBooks Setup", description: "Configure or optimize your QuickBooks Online account." },
  { step: "04", title: "Bookkeeping", description: "Record transactions, reconcile accounts, and organize financial records." },
  { step: "05", title: "Monthly Reporting", description: "Receive detailed financial reports every month." },
  { step: "06", title: "Review & Support", description: "Regular reviews with ongoing bookkeeping support as your business grows." },
];
const faqs = [
  { question: "What makes bookkeeping affordable?", answer: "Outsourcing bookkeeping eliminates the cost of hiring a full-time employee while giving you access to experienced professionals and modern accounting technology." },
  { question: "How much do bookkeeping services cost in Dubai?", answer: "Our bookkeeping packages start from AED 499 per month, with pricing based on transaction volume and business requirements." },
  { question: "Are there any hidden fees?", answer: "No. Our pricing is completely transparent with no hidden charges." },
  { question: "Can I upgrade my package later?", answer: "Yes. As your business grows, you can easily upgrade to a higher bookkeeping package." },
  { question: "Is bookkeeping mandatory in the UAE?", answer: "Yes. UAE businesses are required to maintain accurate accounting records for VAT, Corporate Tax, and regulatory compliance." },
  { question: "Do you use QuickBooks?", answer: "Yes. Nafaz specializes in QuickBooks Online bookkeeping, setup, migration, reconciliation, and financial reporting." },
  { question: "How do I get started?", answer: "Book a free consultation, and our bookkeeping specialists will recommend the most suitable package for your business." },
];
const usefulLinks = [
  { text: "Bookkeeping Firm in Dubai", href: "/services/bookkeeping-firm-dubai" },
  { text: "Premier Accounting Services in Dubai", href: "/services/premier-accounting-services-in-dubai" },
  { text: "Accounting Services in Dubai", href: "/services/premier-accounting-services-in-dubai" },
  { text: "VAT Registration & Return Filing", href: "/services/vat-registration-return-filing-dubai" },
  { text: "Corporate Tax Services", href: "/services/corporate-tax-registration-filing-dubai" },
  { text: "QuickBooks Accounting Services", href: "/services#quickbooks" },
  { text: "Payroll Services", href: "/services/payroll-services-dubai" },
  { text: "Financial Reporting", href: "/services/financial-statement-services-dubai" },
  { text: "Business Advisory", href: "/services#advisory" },
  { text: "CFO Services", href: "/services#cfo" },
];

const Page = () => {
  return (
    <>
      <section className="bg-midnight_text dark:bg-darkmode text-center md:py-28 py-20 md:pt-44 pt-36 px-4">
        <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6" data-aos="fade-up" data-aos-duration="1000">Affordable Bookkeeping Services in Dubai</span>
        <h1 className="text-white md:text-[52px] text-4xl font-bold leading-tight max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
          Accurate and Affordable Bookkeeping in Dubai
        </h1>
        <p className="text-white/70 md:text-xl text-lg max-w-2xl mx-auto my-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          Professional bookkeeping doesn't have to be expensive. Nafaz provides reliable, affordable bookkeeping services designed for startups, SMEs, and growing businesses across Dubai. Keep your financial records organized, VAT-ready, and fully compliant with expert QuickBooks bookkeeping at transparent monthly prices.
        </p>
        <div className="flex flex-wrap gap-4 justify-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Get a Free Quote</Link>
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

      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">WHY NAFAZ</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Accurate Books Without the Enterprise Price Tag</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Every business deserves professional bookkeeping regardless of its size. Our affordable bookkeeping services help startups and SMEs maintain accurate financial records without hiring a full-time bookkeeper, giving you more time to focus on growing your business.</p>
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
          <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">PRICING</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Simple, Fixed Bookkeeping Packages</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Choose the bookkeeping package that best fits your business size and transaction volume.</p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-12">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="bg-section dark:bg-darklight rounded-md shadow-service p-10 text-left" data-aos="fade-up" data-aos-delay={`${index * 200}`} data-aos-duration="1000" data-aos-offset="300">
                <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-5 py-2">{tier.name}</span>
                <h3 className="text-2xl font-bold text-midnight_text dark:text-white mt-6">{tier.price}</h3>
                <p className="text-grey dark:text-white/50 mt-2">{tier.description}</p>
                <ul className="mt-6 space-y-3">
                  {tier.points.map((point, i) => (
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

      <section className="bg-section dark:bg-darklight py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">INDUSTRIES WE SERVE</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Businesses We Support</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Affordable bookkeeping solutions designed for businesses across every industry.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">How We Get You Started</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">A simple process designed for accuracy, transparency and fair pricing.</p>
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

      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
            <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2">FAQ</span>
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">Affordable Bookkeeping FAQs</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-midnight_text dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">Ready for Accurate, Affordable Bookkeeping?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Enjoy reliable bookkeeping at a predictable monthly cost. Nafaz helps startups and SMEs maintain accurate financial records, stay VAT compliant, and make informed business decisions without the expense of an in-house bookkeeping team.</p>
          <div className="flex flex-wrap gap-4 justify-center mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Get Your Free Quote Today</Link>
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
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">Ready to Get Compliant Without Overspending?</h2>
          <p className="text-white/80 text-lg mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Partner with Nafaz for affordable bookkeeping solutions that keep your business organized, compliant, and financially healthy.</p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Link href="/contact" className="inline-block bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Book a Free Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
