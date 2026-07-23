import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Accounting Services in Sharjah | QuickBooks, VAT & Corporate Tax | Nafaz",
  description:
    "Looking for professional accounting services in Sharjah? Nafaz provides bookkeeping, QuickBooks accounting, VAT, Corporate Tax, payroll, financial reporting, and business advisory services for mainland businesses and free zone companies across Sharjah.",
  keywords: [
    "Accounting Services Sharjah",
    "Accountants Sharjah",
    "Bookkeeping Services Sharjah",
    "QuickBooks Sharjah",
    "QuickBooks Accounting Sharjah",
    "Corporate Tax Sharjah",
    "VAT Services Sharjah",
    "Payroll Services Sharjah",
    "Accounting Firm Sharjah",
    "Financial Reporting Sharjah",
    "SAIF Zone Accounting",
    "Hamriyah Free Zone Accounting",
  ],
};

const heroChecklist = ["Bookkeeping Services", "QuickBooks Experts", "FTA Registered Tax Agents", "Corporate Tax Specialists"];
const heroStats = [
  { label: "500+", description: "Businesses Supported" },
  { label: "99%", description: "Client Satisfaction" },
  { label: "VAT", description: "FTA Compliant" },
  { label: "CT", description: "Corporate Tax Specialists" },
];
const whyChooseUs = [
  { title: "Dedicated Account Manager", description: "Receive personalized accounting support from professionals who understand your business." },
  { title: "Fast Response", description: "Our accounting team provides timely assistance for bookkeeping, VAT, payroll, and tax matters." },
  { title: "Fixed Monthly Pricing", description: "Affordable accounting packages with transparent pricing and no hidden costs." },
  { title: "Free Zone Expertise", description: "Specialized accounting services for SAIF Zone, Hamriyah Free Zone, Shams, and other Sharjah free zones." },
  { title: "QuickBooks Specialists", description: "Professional QuickBooks Online setup, bookkeeping, migration, reporting, and ongoing support." },
  { title: "Business Growth Insights", description: "Actionable financial reports that help improve profitability and cash flow." },
];
const services = [
  { badge: "Bookkeeping", title: "Bookkeeping Services Sharjah", description: "Maintain accurate books through professional bookkeeping, reconciliations, expense tracking, and monthly reporting.", includes: ["Bank Reconciliation", "General Ledger", "Monthly Financial Reports"] },
  { badge: "Reporting", title: "Financial Reporting", description: "Prepare accurate monthly, quarterly, and annual financial statements to monitor business performance.", includes: ["Profit & Loss Statements", "Balance Sheet", "Cash Flow Reports"] },
  { badge: "Corporate Tax", title: "Corporate Tax Services Sharjah", description: "Complete Corporate Tax registration, planning, compliance, advisory, and return filing services.", includes: ["Corporate Tax Registration", "Tax Planning", "Return Filing"] },
  { badge: "VAT", title: "VAT Services Sharjah", description: "Professional VAT registration, filing, advisory, VAT health checks, and FTA compliance support.", includes: ["VAT Registration", "VAT Return Filing", "VAT Advisory"] },
  { badge: "Payroll", title: "Payroll Services", description: "Payroll processing, WPS compliance, employee salary management, gratuity calculations, and payroll reporting.", includes: ["WPS Processing", "Payroll Management", "Salary Reports"] },
  { badge: "QuickBooks", title: "QuickBooks Accounting", description: "Cloud accounting powered by QuickBooks Online with setup, migration, bookkeeping, financial reporting, and staff training.", includes: ["QuickBooks Setup", "Data Migration", "Cloud Bookkeeping"] },
];
const industries = [
  { title: "Manufacturing", description: "Factories, industrial companies, and production businesses." },
  { title: "Trading & Import/Export", description: "Wholesale distributors, import/export companies, and trading businesses." },
  { title: "Free Zone Companies", description: "Businesses operating in SAIF Zone, Hamriyah Free Zone, and Shams." },
  { title: "Education", description: "Schools, universities, training institutes, and educational organizations." },
  { title: "Logistics", description: "Transport companies, warehousing businesses, freight forwarding, and supply chain providers." },
  { title: "Retail", description: "Retail stores, supermarkets, showrooms, and e-commerce businesses." },
];
const comparison = [
  { area: "Bookkeeping", inHouse: "Manual", accountant: "✔ QuickBooks Cloud Accounting" },
  { area: "Financial Reports", inHouse: "Basic", accountant: "✔ Real-Time Business Insights" },
  { area: "Tax Compliance", inHouse: "Limited", accountant: "✔ VAT & Corporate Tax Specialists" },
  { area: "Communication", inHouse: "Delayed", accountant: "✔ Dedicated Account Manager" },
  { area: "Pricing", inHouse: "Variable", accountant: "✔ Transparent Monthly Packages" },
  { area: "Scalability", inHouse: "Limited", accountant: "✔ Flexible Business Solutions" },
];
const process = [
  { step: "01", title: "Free Consultation", description: "Understand your business, industry, and accounting requirements." },
  { step: "02", title: "Business Assessment", description: "Evaluate current accounting records and compliance status." },
  { step: "03", title: "QuickBooks Setup", description: "Configure QuickBooks Online or migrate existing financial data." },
  { step: "04", title: "Bookkeeping", description: "Manage day-to-day accounting, reconciliations, payroll, and tax compliance." },
  { step: "05", title: "Reporting", description: "Provide detailed monthly financial reports and business insights." },
  { step: "06", title: "Business Advisory", description: "Support business growth with strategic financial recommendations." },
];
const localAreas = [
  { title: "Hamriyah Free Zone", description: "Accounting and tax services for industrial, logistics, and trading businesses." },
  { title: "Industrial Area & Al Sajaa", description: "Professional bookkeeping and accounting support for manufacturing companies." },
  { title: "Al Majaz, Al Nahda & Mainland", description: "Accounting services for consultants, retail businesses, service companies, and SMEs." },
];
const faqs = [
  { question: "How much do accounting services cost in Sharjah?", answer: "Our pricing depends on business size, transaction volume, and service requirements. We offer flexible monthly accounting packages." },
  { question: "Do you work with businesses in Sharjah Free Zones?", answer: "Yes. We support companies operating in SAIF Zone, Hamriyah Free Zone, Shams, and other Sharjah Free Zones." },
  { question: "Can I use QuickBooks for my business?", answer: "Absolutely. Nafaz specializes in QuickBooks Online setup, migration, bookkeeping, reporting, and staff training." },
  { question: "Do you provide VAT registration?", answer: "Yes. We assist with VAT registration, return filing, advisory, and Federal Tax Authority compliance." },
  { question: "Do you offer Corporate Tax services?", answer: "Yes. We provide complete Corporate Tax registration, planning, compliance, and return filing services." },
  { question: "How do I get started?", answer: "Book a free consultation, and our accounting experts will recommend the most suitable solution for your business." },
];
const usefulLinks = [
  { text: "Accounting Services in Dubai", href: "/services/premier-accounting-services-in-dubai" },
  { text: "Accounting Services in Abu Dhabi", href: "/services/accounting-services-in-abu-dhabi" },
  { text: "Professional Bookkeeping Services", href: "/services/bookkeeping-firm-dubai" },
  { text: "VAT Registration & Filing", href: "/services#vat" },
  { text: "Corporate Tax Services", href: "/services#corporate-tax" },
  { text: "Payroll Management", href: "/services/payroll-services-dubai" },
  { text: "QuickBooks Accounting Services", href: "/services#quickbooks" },
  { text: "Financial Reporting", href: "/services/financial-statement-services-dubai" },
  { text: "Business Advisory", href: "/services#advisory" },
  { text: "Audit Support Services", href: "/services#audit" },
];

const Page = () => {
  return (
    <>
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">Professional Accounting Services in Sharjah</span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">Accounting Services in Sharjah</h1>
            <p className="text-white/70 text-lg my-7">Simplify your business finances with professional accounting services from Nafaz. We provide expert bookkeeping, QuickBooks accounting, VAT, Corporate Tax, payroll, financial reporting, and business advisory services for startups, SMEs, and established businesses throughout Sharjah.</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Book Free Consultation</Link>
              <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">Speak With Our Accountant</Link>
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
          <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">ABOUT ACCOUNTING</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">What Makes Sharjah Accounting Different?</h2>
          <p className="text-grey dark:text-white/50 text-lg mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Sharjah is home to a diverse business landscape that includes mainland companies, manufacturing businesses, trading firms, educational institutions, and multiple free zones. Professional accounting services help businesses maintain accurate financial records, meet UAE compliance requirements, and make confident financial decisions.</p>
        </div>
      </section>

      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">WHY NAFAZ</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why Businesses in Sharjah Choose Nafaz</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Businesses across Sharjah trust Nafaz for accurate accounting, transparent pricing, QuickBooks expertise, and responsive financial support that keeps them compliant and focused on growth.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Comprehensive Accounting Services in Sharjah</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Our accounting solutions are designed to simplify compliance while supporting sustainable business growth for organizations of every size.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Industries We Support in Sharjah</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">We understand the accounting requirements of businesses operating across Sharjah's growing economy.</p>
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
          <span className="bg-white/10 text-yellow-400 font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">WHY NAFAZ</span>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why Outsource Accounting in Sharjah?</h2>
          <div className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Feature</span><span>Traditional Accounting</span><span>Nafaz</span>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Our Accounting Process</h2>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Accounting Support Across Sharjah</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Nafaz proudly serves businesses across Sharjah Mainland and Free Zones with reliable accounting and compliance solutions.</p>
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
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">Accounting Services in Sharjah FAQs</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="bg-midnight_text dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">Looking for Reliable Accounting Services in Sharjah?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Whether you're a startup, SME, manufacturer, retailer, or free zone company, Nafaz provides reliable accounting solutions that help your business remain compliant and financially organized.</p>
          <div className="flex flex-wrap gap-4 justify-center mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Book Your Free Consultation</Link>
            <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">WhatsApp Us</Link>
          </div>
        </div>
      </section>

      <section className="bg-section dark:bg-darklight py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">USEFUL LINKS</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6 mb-12" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Related Accounting & Tax Services</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {usefulLinks.map((link, index) => (
              <Link key={index} href={link.href} className="bg-white dark:bg-darkmode text-midnight_text dark:text-white font-semibold rounded-full px-6 py-3 shadow-service">{link.text}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">Ready to Get Compliant?</h2>
          <p className="text-white/80 text-lg mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Let Nafaz manage your accounting while you focus on growing your business with confidence.</p>
          <div className="mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Link href="/contact" className="inline-block bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Book Your Free Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
