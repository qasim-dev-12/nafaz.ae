import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Payroll (WPS) Services in Dubai | WPS Payroll Management | Nafaz",
  description:
    "Looking for payroll services in Dubai? Nafaz provides professional Payroll and WPS services, salary processing, gratuity calculations, leave salary management, MOHRE compliance, QuickBooks integration, and payroll reporting for businesses across the UAE.",
  keywords: [
    "Payroll Services Dubai",
    "WPS Services Dubai",
    "WPS Payroll Dubai",
    "Payroll Management Dubai",
    "Salary Processing Dubai",
    "Wage Protection System UAE",
    "Payroll Company Dubai",
    "Payroll Outsourcing Dubai",
    "Gratuity Calculation UAE",
    "Leave Salary Calculation Dubai",
    "QuickBooks Payroll Dubai",
    "MOHRE Payroll Compliance",
  ],
};

const heroChecklist = ["WPS Salary Processing", "MOHRE Compliance", "Payroll Management", "Gratuity Calculations"];
const heroStats = [
  { label: "500+", description: "Businesses Supported" },
  { label: "100%", description: "WPS Compliant" },
  { label: "99%", description: "Payroll Accuracy" },
  { label: "24 Hours", description: "Quick Payroll Support" },
];
const whyChooseUs = [
  { title: "WPS Specialists", description: "Complete payroll processing that complies with UAE Wage Protection System requirements." },
  { title: "Accurate Salary Processing", description: "Timely calculation of salaries, allowances, overtime, deductions, commissions, and bonuses." },
  { title: "Fixed Monthly Pricing", description: "Transparent payroll packages with predictable monthly costs." },
  { title: "UAE Labour Law Compliance", description: "Payroll prepared in accordance with UAE Labour Law and MOHRE requirements." },
  { title: "QuickBooks Integration", description: "Payroll records integrated with QuickBooks Online for seamless accounting and financial reporting." },
  { title: "Confidential Payroll Management", description: "Secure handling of employee payroll information with complete confidentiality." },
];
const services = [
  { badge: "Payroll", title: "Payroll Processing", description: "Accurate monthly salary processing for businesses of all sizes.", includes: ["Salary Calculation", "Overtime Calculation", "Allowances & Deductions"] },
  { badge: "WPS", title: "WPS Salary File Preparation", description: "Preparation and verification of WPS files for salary transfer through approved UAE banking channels.", includes: ["WPS File Generation", "Salary Verification", "Bank Upload Support"] },
  { badge: "Leave Pay", title: "Leave Salary Management", description: "Calculate annual leave salaries according to UAE Labour Law.", includes: ["Annual Leave Pay", "Leave Encashment", "Leave Balance Tracking"] },
  { badge: "Gratuity", title: "End-of-Service Gratuity", description: "Accurate gratuity calculations based on UAE Labour Law.", includes: ["Gratuity Calculation", "Final Settlement", "Employee Exit Reports"] },
  { badge: "Reporting", title: "Payroll Reports", description: "Detailed payroll reports for management and accounting purposes.", includes: ["Payroll Summary", "Employee Reports", "Cost Analysis"] },
  { badge: "QuickBooks", title: "QuickBooks Payroll Integration", description: "Synchronize payroll information with QuickBooks Online for accurate financial reporting.", includes: ["Payroll Journal Entries", "Expense Allocation", "Payroll Reconciliation"] },
];
const industries = [
  { title: "Construction", description: "Payroll management for large workforce operations." },
  { title: "Retail", description: "Salary processing for retail stores and shopping outlets." },
  { title: "Hospitality", description: "Payroll solutions for hotels, restaurants, cafés, and tourism businesses." },
  { title: "Healthcare", description: "Payroll management for clinics, hospitals, and healthcare providers." },
  { title: "Professional Services", description: "Payroll support for consultants, agencies, legal firms, and IT companies." },
  { title: "Manufacturing", description: "Payroll solutions for factories, warehouses, and industrial businesses." },
];
const comparison = [
  { area: "Monthly Cost", inHouse: "Full-Time Payroll Staff", accountant: "Affordable Monthly Service" },
  { area: "WPS Knowledge", inHouse: "Internal Training Required", accountant: "Experienced Payroll Specialists" },
  { area: "Compliance", inHouse: "Higher Risk of Errors", accountant: "UAE Labour Law Compliant" },
  { area: "Payroll Accuracy", inHouse: "Manual Processing", accountant: "Automated & Verified" },
  { area: "Confidentiality", inHouse: "Internal Access", accountant: "Secure Payroll Management" },
  { area: "Scalability", inHouse: "Limited Resources", accountant: "Flexible Payroll Solutions" },
];
const process = [
  { step: "01", title: "Free Consultation", description: "Understand your payroll requirements and employee structure." },
  { step: "02", title: "Employee Data Collection", description: "Review salary structures, allowances, deductions, and employee records." },
  { step: "03", title: "Payroll Setup", description: "Configure payroll system, WPS requirements, and QuickBooks integration." },
  { step: "04", title: "Monthly Payroll Processing", description: "Calculate salaries, overtime, leave, bonuses, deductions, and gratuity." },
  { step: "05", title: "WPS File Preparation", description: "Generate payroll files ready for salary transfer." },
  { step: "06", title: "Reports & Ongoing Support", description: "Monthly payroll reports and continuous payroll assistance." },
];
const localAreas = [
  { title: "Dubai Mainland", description: "Payroll management for SMEs and large enterprises." },
  { title: "Dubai Free Zones", description: "Payroll solutions for businesses operating in DMCC, DIFC, IFZA, DAFZA, Dubai South, JAFZA, and other free zones." },
  { title: "Across the UAE", description: "Remote payroll management for businesses across all Emirates." },
];
const faqs = [
  { question: "What is WPS?", answer: "The Wage Protection System (WPS) is an electronic salary transfer system introduced by the UAE Ministry of Human Resources and Emiratisation (MOHRE) to ensure employees are paid accurately and on time." },
  { question: "Is WPS mandatory in the UAE?", answer: "Yes. Most private sector businesses registered with MOHRE are required to pay employees through the Wage Protection System, subject to applicable regulations." },
  { question: "Can you calculate gratuity?", answer: "Yes. We calculate end-of-service gratuity, leave salary, final settlements, and employee benefits in accordance with UAE Labour Law." },
  { question: "Do you prepare WPS salary files?", answer: "Yes. We prepare, verify, and support WPS salary file submissions." },
  { question: "Can payroll integrate with QuickBooks?", answer: "Absolutely. Nafaz integrates payroll with QuickBooks Online for accurate accounting and financial reporting." },
  { question: "How much do payroll services cost?", answer: "Pricing depends on the number of employees and payroll complexity. We offer flexible monthly payroll packages for businesses of all sizes." },
  { question: "How do I get started?", answer: "Book a free consultation, and our payroll specialists will recommend the most suitable payroll solution for your business." },
];
const usefulLinks = [
  { text: "Accounting Services in Dubai", href: "/services/premier-accounting-services-in-dubai" },
  { text: "Bookkeeping Services", href: "/services/bookkeeping-firm-dubai" },
  { text: "QuickBooks Accounting Services", href: "/services#quickbooks" },
  { text: "VAT Registration & Filing", href: "/services/vat-registration-return-filing-dubai" },
  { text: "Corporate Tax Services", href: "/services/corporate-tax-registration-filing-dubai" },
  { text: "Financial Reporting", href: "/services#reporting" },
  { text: "Business Advisory", href: "/services#advisory" },
  { text: "CFO Services", href: "/services#cfo" },
  { text: "Audit Support", href: "/services/tax-audit-assurance-services-dubai" },
  { text: "HR & Payroll Compliance", href: "/services#payroll" },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">
              Professional Payroll (WPS) Services in Dubai
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Payroll (WPS) Services in Dubai
            </h1>
            <p className="text-white/70 text-lg my-7">
              Simplify payroll management with Nafaz's professional Payroll and Wage Protection System (WPS)
              services. We accurately process employee salaries, ensure UAE Labour Law compliance, manage WPS
              submissions, calculate leave salaries and gratuity, and deliver secure payroll solutions for
              businesses across Dubai.
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
                src="/images/services-images/08-Payroll (WPS) Services in Dubai.png"
                alt="Payroll (WPS) Services in Dubai"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="col-span-full flex flex-wrap gap-4 justify-center mt-4">
            <Link href="https://wa.me/9714XXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#1ebe57] animate-wobble-left">
                <Icon icon="ic:baseline-whatsapp" className="text-xl" />
                WhatsApp Us
              </Link>
              <Link href="tel:+9714XXXXXXX" className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 animate-wobble-left">
                <Icon icon="ic:baseline-call" className="text-xl" />
                Call Us
              </Link>
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
            ABOUT PAYROLL
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            What Are Payroll (WPS) Services?
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Payroll services involve calculating employee salaries, allowances, overtime, deductions, leave pay,
            end-of-service benefits, and ensuring salaries are processed through the UAE Wage Protection System
            (WPS). Professional payroll management reduces errors, ensures legal compliance, and gives employees
            confidence that they will be paid accurately and on time.
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
            Why Businesses Choose Nafaz for Payroll Services
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Managing payroll requires accuracy, confidentiality, and compliance with UAE regulations. Nafaz helps
            businesses simplify payroll processing while ensuring every salary payment is accurate and compliant.
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
            Payroll (WPS) Services in Dubai
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Comprehensive payroll solutions that simplify employee salary management while ensuring complete
            compliance.
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
            <Link href="https://wa.me/9714XXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#1ebe57] animate-wobble-left">
              <Icon icon="ic:baseline-whatsapp" className="text-xl" />
              WhatsApp Us
            </Link>
            <Link href="tel:+9714XXXXXXX" className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 animate-wobble-left">
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
            INDUSTRIES WE SERVE
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Payroll Solutions for Every Industry
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            We provide payroll services for businesses across various industries throughout Dubai.
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
            Why Outsource Payroll?
          </h2>
          <div
            className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Feature</span>
              <span>In-House Payroll</span>
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
            Our Payroll Process
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
            Payroll Services Across Dubai
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Nafaz supports businesses throughout Dubai with reliable payroll and WPS services.
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
              Payroll (WPS) Services FAQs
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
            Accurate Payroll. Happy Employees.
          </h2>
          <p
            className="text-white/80 text-lg mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Partner with Nafaz for reliable payroll and WPS services that ensure timely salary processing and
            full UAE compliance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Link href="https://wa.me/9714XXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#1ebe57] animate-wobble-left">
              <Icon icon="ic:baseline-whatsapp" className="text-xl" />
              WhatsApp Us
            </Link>
            <Link href="tel:+9714XXXXXXX" className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 animate-wobble-left">
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
