import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = { title: "Accounting Services in Sharjah | Venus" };

const heroChecklist = ["UAE Accounting Experts", "Free Zone Specialists", "FTA Compliance Support", "Cloud Accounting Experts"];
const heroStats = [
  { label: "AED 190k", description: "Monthly revenue tracked" },
  { label: "100%", description: "Books updated" },
  { label: "VAT", description: "Records reviewed" },
  { label: "CT", description: "Tax ready accounts" },
];
const whyChooseUs = [
  { title: "Dedicated Accountant", description: "One consistent account manager who knows your business and deadlines." },
  { title: "Fast Response", description: "Timely support for bookkeeping, VAT, corporate tax and payroll questions." },
  { title: "Fixed Monthly Pricing", description: "Transparent packages based on transaction volume and reporting needs." },
  { title: "Free Zone Expertise", description: "Experience with Hamriyah, SAIF Zone, Shams and mainland Sharjah entities." },
  { title: "Cloud Accounting", description: "Xero and cloud systems for faster access to financial information." },
  { title: "Growth Insights", description: "Understand profitability, receivables, cash flow and performance." },
];
const services = [
  { badge: "Bookkeeping", title: "Bookkeeping Services Sharjah", description: "We record sales, purchases, expenses, bank movements and reconciliations." },
  { badge: "Reporting", title: "Financial Reporting", description: "Monthly reports covering profit, cash flow, balance sheet and performance." },
  { badge: "Corporate Tax", title: "Corporate Tax Services Sharjah", description: "Tax-ready accounts, taxable income review and supporting schedules." },
  { badge: "VAT", title: "VAT Services Sharjah", description: "VAT registration, return preparation, reconciliation and FTA-ready records." },
  { badge: "Payroll", title: "Payroll Services", description: "Payroll records, salary journals, leave balances and gratuity calculations." },
  { badge: "Cloud Accounting", title: "Xero & QuickBooks Accounting", description: "Cloud setup, migration, cleanup and reporting dashboards." },
];
const industries = [
  { title: "Manufacturing", description: "Costing, raw materials, WIP and production overhead tracking." },
  { title: "Trading & Import-Export", description: "Customs, supplier ledgers, multi-currency and margin control." },
  { title: "Free Zone Companies", description: "Hamriyah, SAIF Zone and Shams entity accounting and compliance." },
  { title: "Education", description: "Fee collection, payroll and grant/subsidy reporting." },
  { title: "Logistics", description: "Fleet costs, fuel, contracts and cash flow visibility." },
  { title: "Retail", description: "POS reconciliation, inventory and margin reporting." },
];
const comparison = [
  { area: "Cost", inHouse: "Salary, visa and benefits", accountant: "Fixed monthly accounting fee" },
  { area: "Expertise", inHouse: "One person", accountant: "Accounting, VAT, corporate tax and advisory team" },
  { area: "Reporting", inHouse: "Often delayed", accountant: "Monthly reports and cloud dashboards" },
  { area: "Compliance", inHouse: "Depends on individual experience", accountant: "FTA and UAE tax-focused process" },
  { area: "Scalability", inHouse: "Harder to scale", accountant: "Flexible support as business grows" },
];
const process = [
  { step: "01", title: "Free Consultation", description: "We review your business activity and accounting needs." },
  { step: "02", title: "Business Assessment", description: "We review records, bank accounts and tax status." },
  { step: "03", title: "System Setup", description: "We configure Xero, QuickBooks or your preferred workflow." },
  { step: "04", title: "Bookkeeping", description: "We record transactions and reconcile accounts monthly." },
  { step: "05", title: "Reporting", description: "You receive useful reports for decision-making." },
  { step: "06", title: "Advisory", description: "We support tax readiness, cash flow and growth decisions." },
];
const localAreas = [
  { title: "Hamriyah & SAIF Zone", description: "Accounting support for free zone trading and industrial companies." },
  { title: "Industrial Area & Al Sajaa", description: "Manufacturing, warehousing and logistics accounting." },
  { title: "Al Majaz, Al Nahda & Mainland", description: "Bookkeeping, VAT, payroll and reporting for SMEs." },
];
const faqs = [
  { question: "How do you handle manufacturing cost accounting?", answer: "We track raw material purchases, work-in-progress and production overhead separately, so your cost of goods sold reflects actual factory output, not just invoiced sales." },
  { question: "How much do accounting services cost in Sharjah?", answer: "Pricing depends on order volume, whether you import raw materials in multiple currencies, and how many free zone or mainland entities need consolidating." },
  { question: "Do Hamriyah or SAIF Zone companies need accounting?", answer: "Yes, both free zones require proper accounting records for license renewal, and many activities carry VAT and Corporate Tax obligations regardless of free zone status." },
  { question: "Can you handle import/export and customs documentation?", answer: "Yes, we reconcile customs declarations, freight costs and supplier terms into your landed cost and inventory records." },
  { question: "What software do you use?", answer: "We primarily work with Xero and QuickBooks, configured for multi-currency trading and inventory tracking." },
  { question: "How do I start?", answer: "Book a free consultation and we will review your production, import and free zone structure before recommending a setup." },
];
const usefulLinks = [
  { text: "Premier Accounting Services in Dubai", href: "/services/premier-accounting-services-in-dubai" },
  { text: "Accounting Services in Abu Dhabi", href: "/services/accounting-services-in-abu-dhabi" },
  { text: "Bookkeeping Firm in Dubai", href: "/services/bookkeeping-firm-dubai" },
  { text: "VAT Registration and Returns", href: "/services#vat" },
  { text: "Federal Tax Authority", href: "https://tax.gov.ae" },
];

const Page = () => {
  return (
    <>
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">ACCOUNTING SERVICES SHARJAH</span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">Accounting Services in Sharjah</h1>
            <p className="text-white/70 text-lg my-7">Built for Sharjah's industrial and free zone economy — production costing, import/export bookkeeping, VAT and corporate tax accounting for Hamriyah, SAIF Zone and mainland manufacturers.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">What makes Sharjah accounting different?</h2>
          <p className="text-grey dark:text-white/50 text-lg mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Sharjah's economy leans manufacturing, trading and free zone industrial activity, so accounting needs to track landed costs, production overhead and multi-currency supplier ledgers alongside standard VAT and Corporate Tax compliance.</p>
        </div>
      </section>

      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">WHY CHOOSE US</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why businesses in Sharjah choose The Accountant</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Accounting discipline, UAE tax knowledge, cloud reporting and practical financial advisory for Sharjah businesses.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Comprehensive accounting services in Sharjah</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Designed for Sharjah startups, SMEs, trading companies, free zone entities and growing UAE businesses.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Industries we serve in Sharjah</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">We structure accounting based on your industry, VAT treatment and reporting requirements.</p>
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
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why outsource accounting in Sharjah?</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Access accounting, VAT, corporate tax and reporting expertise without building a full internal finance department.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Our accounting process</h2>
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
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">LOCAL SEO</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Accounting support across Sharjah</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">We support businesses across Hamriyah, SAIF Zone, Industrial Area, Al Majaz, Al Nahda and Mainland Sharjah.</p>
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
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">Accounting Services Sharjah FAQs</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-midnight_text dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">Looking For Reliable Accounting Services In Sharjah?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">From factory floor to free zone filing, get accounting that understands Sharjah's manufacturing and trading economy — not a generic city template.</p>
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
