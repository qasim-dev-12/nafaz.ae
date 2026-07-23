import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "VAT Registration & Return Filing Services in Dubai | FTA VAT Consultants | Nafaz",
  description:
    "Need VAT registration or VAT return filing in Dubai? Nafaz provides FTA-compliant VAT registration, VAT return preparation, VAT advisory, VAT health checks, audit support, QuickBooks VAT setup, and ongoing tax compliance services across the UAE.",
  keywords: [
    "VAT Registration Dubai",
    "VAT Return Filing Dubai",
    "VAT Consultants Dubai",
    "VAT Services Dubai",
    "FTA VAT Registration",
    "VAT Return UAE",
    "UAE VAT Consultant",
    "VAT Compliance Dubai",
    "VAT Filing Services UAE",
    "QuickBooks VAT Setup",
    "VAT Health Check Dubai",
    "VAT Audit Support UAE",
  ],
};

const heroChecklist = [
  "FTA Registered Tax Experts",
  "VAT Registration Support",
  "VAT Return Filing",
  "VAT Compliance Advisory",
];
const heroStats = [
  { title: "VAT Registration", value: "100%", description: "FTA Compliant" },
  { title: "VAT Returns", value: "On-Time", description: "Accurate Filing" },
  { title: "Businesses Supported", value: "500+", description: "Across UAE" },
  { title: "UAE Experience", value: "10+", description: "Years" },
];
const bottomStats = [
  { title: "FTA Registered", description: "Professional VAT Specialists" },
  { title: "VAT Experts", description: "Industry Experience" },
  { title: "500+", description: "Businesses Assisted" },
  { title: "Fast Response", description: "Dedicated Support Team" },
];
const whyChooseUs = [
  "VAT Registration Assistance",
  "VAT Return Preparation",
  "Input & Output VAT Review",
  "VAT Health Checks",
  "FTA Compliance Support",
  "Penalty Reduction Guidance",
  "VAT Record Maintenance",
  "Professional Tax Advice",
];
const services = [
  { title: "VAT Registration", description: "Register your business with the Federal Tax Authority quickly and accurately.", learnMore: true },
  { title: "VAT Return Filing", description: "Prepare and submit accurate VAT returns before FTA deadlines.", learnMore: true },
  { title: "VAT Deregistration", description: "Professional assistance when your business qualifies for VAT deregistration." },
  { title: "VAT Health Check", description: "Review accounting records and identify VAT compliance risks before filing." },
  { title: "VAT Advisory", description: "Expert guidance on VAT treatment for local and international transactions." },
  { title: "VAT Record Review", description: "Review invoices, purchases, expenses, and tax invoices for compliance." },
  { title: "VAT Refund Assistance", description: "Support for submitting VAT refund applications wherever applicable." },
  { title: "VAT Audit Support", description: "Professional assistance during FTA VAT audits and information requests." },
  { title: "VAT Penalty Review", description: "Review existing VAT penalties and identify opportunities for reconsideration where applicable." },
  { title: "QuickBooks VAT Setup", description: "Configure QuickBooks Online for accurate VAT recording and reporting." },
  { title: "VAT Training", description: "Train your finance team on UAE VAT compliance and reporting requirements." },
  { title: "Ongoing VAT Compliance", description: "Monthly VAT review and ongoing compliance support for businesses." },
];
const vatBenefits = [
  "Correct VAT Registration",
  "Accurate Return Filing",
  "Proper VAT Documentation",
  "Reduced Compliance Risks",
  "Better Cash Flow Planning",
  "VAT Recovery Optimization",
  "FTA Audit Readiness",
  "Peace of Mind",
];
const whyChooseNafazCard = [
  "Dedicated VAT Consultants",
  "Transparent Pricing",
  "Timely Filing",
  "Ongoing Support",
];
const process = [
  { step: "01", title: "Business Review", description: "Understand your business activities and VAT obligations." },
  { step: "02", title: "VAT Registration", description: "Prepare documentation and complete FTA registration." },
  { step: "03", title: "Accounting Review", description: "Review bookkeeping and VAT transactions." },
  { step: "04", title: "VAT Return Preparation", description: "Calculate VAT liability accurately." },
  { step: "05", title: "Return Submission", description: "Submit VAT returns before deadlines." },
  { step: "06", title: "Ongoing Compliance", description: "Continuous VAT support and advisory." },
];
const industries = [
  "Construction",
  "Trading & Distribution",
  "Manufacturing",
  "Restaurants & Hospitality",
  "Healthcare",
  "Professional Services",
  "Real Estate",
  "Retail & Ecommerce",
];
const recordBenefits = [
  "VAT Ready Accounting",
  "Input Tax Verification",
  "Output Tax Accuracy",
  "Proper Tax Invoices",
  "VAT Reconciliation",
  "Supporting Documentation",
  "Digital Record Keeping",
  "Audit Preparedness",
];
const whatYoullReceive = [
  "VAT Registration Certificate Assistance",
  "VAT Return Preparation",
  "Filing Confirmation",
  "Compliance Review",
  "Professional VAT Support",
];
const comparison = [
  { area: "VAT Expertise", inHouse: "Limited Internal Knowledge", accountant: "Dedicated VAT Specialists" },
  { area: "FTA Updates", inHouse: "Requires Continuous Learning", accountant: "Always Current" },
  { area: "Filing Accuracy", inHouse: "Depends on Experience", accountant: "High" },
  { area: "Compliance Risk", inHouse: "Higher", accountant: "Lower" },
  { area: "Time Required", inHouse: "Significant", accountant: "Minimal" },
  { area: "Cost", inHouse: "Higher Staffing Costs", accountant: "Predictable Monthly Fees" },
];
const consultantFeatures = [
  { title: "Dedicated VAT Specialists", description: "Personalized support throughout your VAT journey." },
  { title: "Proactive Compliance", description: "Identify issues before they become penalties." },
  { title: "Accurate Filing", description: "Every VAT return reviewed before submission." },
  { title: "Ongoing Advisory", description: "Professional VAT guidance throughout the year." },
];
const whatYouReceive = [
  "VAT Registration",
  "VAT Returns",
  "VAT Health Check",
  "VAT Advisory",
  "FTA Compliance",
  "Ongoing Support",
];
const faqs = [
  { question: "Who needs VAT registration in the UAE?", answer: "Businesses that meet the mandatory registration threshold under UAE VAT regulations are required to register. Voluntary registration may also be available depending on turnover and eligibility." },
  { question: "How long does VAT registration take?", answer: "Processing time varies depending on document completeness and FTA processing timelines." },
  { question: "How often are VAT returns filed?", answer: "Most businesses file VAT returns quarterly, while some may have different filing frequencies assigned by the FTA." },
  { question: "Can you help with late VAT returns?", answer: "Yes. We assist businesses in preparing overdue VAT returns and provide guidance on addressing compliance issues." },
  { question: "Do you support FTA VAT audits?", answer: "Yes. We provide professional assistance during VAT audits, including documentation review and communication support." },
  { question: "Can you prepare VAT returns from QuickBooks?", answer: "Absolutely. Nafaz specializes in QuickBooks-based VAT accounting and return preparation." },
  { question: "Do you provide VAT advisory?", answer: "Yes. We advise businesses on VAT treatment, compliance obligations, and transaction-specific tax matters." },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">
              VAT • TAX COMPLIANCE • FTA REGISTERED
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              VAT Registration & Return Filing Services in Dubai
            </h1>
            <p className="text-white/70 text-lg my-7">
              Professional VAT registration and return filing services for startups, SMEs, free zone companies, and
              mainland businesses across Dubai. Nafaz helps businesses register for VAT, prepare accurate VAT
              returns, remain FTA compliant, and avoid unnecessary penalties.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">
                Book Free VAT Consultation
              </Link>
              <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">
                Call Our VAT Specialists
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
                <p className="text-grey text-xs font-semibold uppercase tracking-wide">{stat.title}</p>
                <h3 className="text-2xl font-bold text-midnight_text mt-2">{stat.value}</h3>
                <p className="text-grey text-sm mt-1">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Statistics */}
      <section className="bg-white dark:bg-darkmode py-12 px-4 border-b border-grey/10 dark:border-white/10">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-4 grid-cols-2 gap-8 text-center">
          {bottomStats.map((stat, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={`${index * 200}`} data-aos-duration="1000">
              <h3 className="text-xl font-bold text-midnight_text dark:text-white">{stat.title}</h3>
              <p className="text-grey dark:text-white/50 text-sm mt-2">{stat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Nafaz / About VAT compliance */}
      <section className="bg-section dark:bg-darklight py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
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
            More Than VAT Filing. Complete VAT Compliance for Your Business.
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            VAT compliance goes beyond submitting returns. Our specialists help businesses register correctly,
            maintain proper VAT records, review transactions, identify eligible input tax, prepare VAT returns, and
            represent businesses before the Federal Tax Authority whenever required.
          </p>
          <h3
            className="text-midnight_text dark:text-white text-xl font-bold mt-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Why Businesses Choose Nafaz
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-3 mt-6">
            {whyChooseUs.map((item, index) => (
              <span
                key={index}
                className="bg-white dark:bg-darkmode text-midnight_text dark:text-white text-sm font-medium rounded-full px-4 py-3"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
                data-aos-duration="1000"
              >
                ✔ {item}
              </span>
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
            VAT Services for Businesses in Dubai
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-section dark:bg-darklight rounded-md shadow-service p-8 text-left"
                data-aos="fade-up"
                data-aos-delay={`${(index % 3) * 200}`}
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                <h3 className="text-xl font-bold text-midnight_text dark:text-white mb-3">{service.title}</h3>
                <p className="text-grey dark:text-white/50">{service.description}</p>
                {service.learnMore && (
                  <Link href="/contact" className="inline-block text-primary font-semibold mt-4 hover:underline">
                    Learn More →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Why Choose Nafaz card */}
      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 grid-cols-1 gap-12 items-start">
          <div data-aos="fade-right" data-aos-duration="1000">
            <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2">
              BENEFITS
            </span>
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">
              Why Dubai Businesses Need Professional VAT Support
            </h2>
            <p className="text-grey dark:text-white/50 text-lg mt-6">
              Managing VAT correctly protects your business from costly errors, penalties, and compliance issues.
            </p>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-8">
              {vatBenefits.map((item, index) => (
                <span
                  key={index}
                  className="bg-white dark:bg-darkmode text-midnight_text dark:text-white text-sm font-medium rounded-md px-4 py-3"
                >
                  ✔ {item}
                </span>
              ))}
            </div>
          </div>
          <div
            className="bg-white dark:bg-darkmode rounded-md shadow-service p-10"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-4">Why Choose Nafaz?</h3>
            <p className="text-grey dark:text-white/50 mb-6">
              Our VAT specialists understand UAE tax regulations and help businesses remain fully compliant while
              reducing administrative burden.
            </p>
            <div className="flex flex-col gap-3">
              {whyChooseNafazCard.map((item, index) => (
                <span key={index} className="text-midnight_text dark:text-white font-medium">
                  ✔ {item}
                </span>
              ))}
            </div>
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
            How Our VAT Process Works
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-12">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-section dark:bg-darklight rounded-md shadow-service p-8 text-left"
                data-aos="fade-up"
                data-aos-delay={`${(index % 3) * 200}`}
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

      {/* Industries */}
      <section className="bg-section dark:bg-darklight py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
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
            Industries We Serve Across Dubai & UAE
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-12">
            {industries.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-darkmode rounded-md shadow-service p-6"
                data-aos="fade-up"
                data-aos-delay={`${(index % 4) * 150}`}
                data-aos-duration="1000"
                data-aos-offset="300"
              >
                <h3 className="text-lg font-bold text-midnight_text dark:text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VAT Records + What You'll Receive card */}
      <section className="bg-white dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 grid-cols-1 gap-12 items-start">
          <div data-aos="fade-right" data-aos-duration="1000">
            <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2">
              VAT RECORDS
            </span>
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">
              VAT Records That Keep Your Business Compliant
            </h2>
            <p className="text-grey dark:text-white/50 text-lg mt-6">
              Proper record keeping is essential for VAT compliance. Nafaz helps businesses organize tax invoices,
              purchase records, sales records, import documentation, and supporting evidence required by the
              Federal Tax Authority.
            </p>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-8">
              {recordBenefits.map((item, index) => (
                <span
                  key={index}
                  className="bg-section dark:bg-darklight text-midnight_text dark:text-white text-sm font-medium rounded-md px-4 py-3"
                >
                  ✔ {item}
                </span>
              ))}
            </div>
          </div>
          <div
            className="bg-section dark:bg-darklight rounded-md shadow-service p-10"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-6">What You'll Receive</h3>
            <div className="flex flex-col gap-3 mb-8">
              {whatYoullReceive.map((item, index) => (
                <span key={index} className="text-midnight_text dark:text-white font-medium">
                  ✔ {item}
                </span>
              ))}
            </div>
            <Link href="/contact" className="inline-block bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">
              Book Free VAT Review
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
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
            Outsourced VAT Services vs Internal Tax Management
          </h2>
          <div
            className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Decision Factor</span>
              <span>Outsourced VAT Services</span>
              <span>Internal Management</span>
            </div>
            {comparison.map((row, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 px-8 py-6 border-b border-white/10 min-w-[600px]">
                <span className="text-white/50">{row.area}</span>
                <span className="text-white font-semibold">{row.accountant}</span>
                <span className="text-white font-semibold">{row.inHouse}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultants + What You Receive card */}
      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 grid-cols-1 gap-12 items-start">
          <div data-aos="fade-right" data-aos-duration="1000">
            <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2">
              OUR APPROACH
            </span>
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">
              VAT Consultants Focused on Compliance, Not Just Filing
            </h2>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
              {consultantFeatures.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-darkmode rounded-md shadow-service p-6"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 150}`}
                  data-aos-duration="1000"
                >
                  <h3 className="text-lg font-bold text-midnight_text dark:text-white mb-2">{item.title}</h3>
                  <p className="text-grey dark:text-white/50 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="bg-white dark:bg-darkmode rounded-md shadow-service p-10"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-6">What You Receive</h3>
            <div className="flex flex-col gap-3 mb-8">
              {whatYouReceive.map((item, index) => (
                <span key={index} className="text-midnight_text dark:text-white font-medium">
                  ✔ {item}
                </span>
              ))}
            </div>
            <Link href="/contact" className="inline-block bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">
              Schedule Free Consultation
            </Link>
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
              VAT Registration & Returns FAQs
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
            Ready for Stress-Free VAT Compliance?
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Partner with Nafaz for professional VAT registration, return filing, compliance support, and expert tax
            guidance that keeps your business compliant with UAE regulations.
          </p>
          <div
            className="flex flex-wrap gap-4 justify-center mt-8"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">
              Book Free VAT Consultation
            </Link>
            <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">
              Call Our VAT Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
