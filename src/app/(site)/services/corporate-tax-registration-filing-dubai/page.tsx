import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Corporate Tax Registration & Filing Services in Dubai | UAE Corporate Tax Consultants | Nafaz",
  description:
    "Need Corporate Tax registration or Corporate Tax return filing in Dubai? Nafaz provides UAE Corporate Tax registration, return filing, tax planning, compliance reviews, FTA support, QuickBooks integration, and ongoing Corporate Tax advisory services for businesses across the UAE.",
  keywords: [
    "Corporate Tax Registration Dubai",
    "Corporate Tax Filing Dubai",
    "UAE Corporate Tax Consultants",
    "Corporate Tax Services Dubai",
    "Corporate Tax Return Filing UAE",
    "Corporate Tax Registration UAE",
    "Corporate Tax Advisory Dubai",
    "FTA Corporate Tax Registration",
    "Corporate Tax Compliance UAE",
    "QuickBooks Corporate Tax",
    "Tax Planning Dubai",
    "Corporate Tax Consultant UAE",
  ],
};

const heroChecklist = [
  "Corporate Tax Registration",
  "Corporate Tax Return Filing",
  "FTA Compliance Support",
  "Tax Planning & Advisory",
];
const heroStats = [
  { title: "Corporate Tax", value: "100%", description: "FTA Compliance" },
  { title: "Tax Filing", value: "On-Time", description: "Return Submission" },
  { title: "Businesses Supported", value: "500+", description: "Across UAE" },
  { title: "UAE Experience", value: "10+", description: "Years" },
];
const bottomStats = [
  { title: "Corporate Tax Experts", description: "Specialist Advisory" },
  { title: "FTA Compliance", description: "Professional Support" },
  { title: "500+", description: "Businesses Assisted" },
  { title: "Fast Response", description: "Dedicated Tax Team" },
];
const whyChooseUs = [
  "Corporate Tax Registration",
  "Corporate Tax Return Filing",
  "Tax Residency Assessment",
  "Tax Planning",
  "Qualifying Free Zone Guidance",
  "FTA Compliance Support",
  "Financial Statement Review",
  "Ongoing Tax Advisory",
];
const services = [
  { title: "Corporate Tax Registration", description: "Register your business with the Federal Tax Authority under the UAE Corporate Tax regime.", learnMore: true },
  { title: "Corporate Tax Return Filing", description: "Prepare and submit Corporate Tax returns accurately and on time." },
  { title: "Corporate Tax Assessment", description: "Determine your business's Corporate Tax obligations and filing requirements." },
  { title: "Tax Planning & Advisory", description: "Develop practical tax strategies while maintaining full regulatory compliance." },
  { title: "Taxable Income Calculation", description: "Calculate taxable income using compliant accounting records and applicable adjustments." },
  { title: "Qualifying Free Zone Support", description: "Advisory for qualifying free zone businesses and available tax incentives under UAE regulations." },
  { title: "Corporate Tax Health Check", description: "Review financial records and identify potential tax risks before filing." },
  { title: "Financial Statement Review", description: "Ensure financial statements are properly prepared before Corporate Tax submission." },
  { title: "Corporate Tax Audit Support", description: "Professional assistance during FTA tax reviews, audits, and information requests." },
  { title: "QuickBooks Corporate Tax Setup", description: "Configure QuickBooks Online to support Corporate Tax reporting and compliance." },
  { title: "Corporate Tax Training", description: "Train finance teams on UAE Corporate Tax requirements and reporting obligations." },
  { title: "Ongoing Corporate Tax Compliance", description: "Continuous monitoring of Corporate Tax responsibilities and filing deadlines." },
];
const taxBenefits = [
  "Proper Tax Registration",
  "Accurate Tax Calculations",
  "Regulatory Compliance",
  "Reduced Tax Risks",
  "Professional Documentation",
  "Financial Statement Alignment",
  "Audit Preparedness",
  "Ongoing Tax Support",
];
const whyChooseNafazCard = [
  "Experienced Tax Professionals",
  "Transparent Pricing",
  "Accurate Filing",
  "Continuous Compliance Support",
];
const process = [
  { step: "01", title: "Business Assessment", description: "Review your legal structure, financial records, and Corporate Tax obligations." },
  { step: "02", title: "Corporate Tax Registration", description: "Complete FTA registration with accurate documentation." },
  { step: "03", title: "Financial Review", description: "Review accounting records and financial statements." },
  { step: "04", title: "Tax Calculation", description: "Determine taxable income and applicable tax liability." },
  { step: "05", title: "Return Filing", description: "Prepare and submit Corporate Tax returns within required deadlines." },
  { step: "06", title: "Ongoing Compliance", description: "Provide year-round Corporate Tax advisory and compliance support." },
];
const industries = [
  "Trading & Distribution",
  "Construction",
  "Manufacturing",
  "Professional Services",
  "Healthcare",
  "Technology Companies",
  "Retail & Ecommerce",
  "Free Zone Businesses",
];
const recordBenefits = [
  "Accurate Accounting Records",
  "Financial Statement Review",
  "Taxable Income Verification",
  "Supporting Documentation",
  "Compliance Monitoring",
  "Audit Readiness",
  "Tax Planning Support",
  "Long-Term Compliance",
];
const whatYoullReceive = [
  "Corporate Tax Registration",
  "Tax Return Preparation",
  "Tax Liability Review",
  "Compliance Assessment",
  "Ongoing Tax Advisory",
];
const comparison = [
  { area: "Tax Expertise", inHouse: "Limited Internal Knowledge", accountant: "Dedicated Corporate Tax Specialists" },
  { area: "Regulatory Updates", inHouse: "Requires Ongoing Research", accountant: "Continuously Monitored" },
  { area: "Filing Accuracy", inHouse: "Depends on Experience", accountant: "High" },
  { area: "Compliance Risk", inHouse: "Higher", accountant: "Lower" },
  { area: "Time Investment", inHouse: "Significant", accountant: "Minimal" },
  { area: "Cost", inHouse: "Higher Internal Costs", accountant: "Predictable Service Fees" },
];
const consultantFeatures = [
  { title: "Dedicated Tax Specialists", description: "Professional Corporate Tax support tailored to your business." },
  { title: "Proactive Compliance", description: "Identify and resolve tax issues before filing." },
  { title: "Accurate Tax Reporting", description: "Reliable calculations backed by accurate financial records." },
  { title: "Continuous Advisory", description: "Year-round support as tax regulations evolve." },
];
const whatYouReceive = [
  "Corporate Tax Registration",
  "Corporate Tax Filing",
  "Tax Planning",
  "Compliance Review",
  "Ongoing Advisory",
];
const faqs = [
  { question: "Who needs to register for UAE Corporate Tax?", answer: "Most businesses and certain other taxable persons operating in the UAE are required to register for Corporate Tax. The exact obligation depends on factors such as business activity, legal structure, and applicable UAE regulations." },
  { question: "What is the Corporate Tax filing deadline?", answer: "The filing deadline depends on your tax period and the timeline assigned by the Federal Tax Authority (FTA). We help ensure returns are prepared and submitted on time." },
  { question: "Do Free Zone companies need Corporate Tax registration?", answer: "Many Free Zone entities are required to register for Corporate Tax, even where they may qualify for specific tax benefits. Eligibility depends on the applicable rules and business activities." },
  { question: "Can you calculate taxable income?", answer: "Yes. We prepare Corporate Tax computations using your financial records while applying the relevant UAE Corporate Tax rules." },
  { question: "Can you prepare Corporate Tax returns using QuickBooks?", answer: "Yes. We specialize in QuickBooks-based accounting and use accurate financial data to prepare Corporate Tax returns." },
  { question: "Do you provide Corporate Tax planning?", answer: "Yes. We help businesses understand their tax position, identify compliance obligations, and implement practical tax planning strategies within the UAE Corporate Tax framework." },
  { question: "Do you assist during FTA tax audits?", answer: "Yes. We support businesses during FTA reviews and audits by helping prepare documentation and responding to information requests." },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4 text-center overflow-hidden">
        <div className="container mx-auto max-w-4xl" data-aos="zoom-in" data-aos-duration="1000">
          <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">
            CORPORATE TAX • UAE TAX COMPLIANCE • FTA SUPPORT
          </span>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Corporate Tax Registration & Filing Services in Dubai
          </h1>
          <p className="text-white/70 text-lg my-7 max-w-2xl mx-auto">
            Stay compliant with the UAE Corporate Tax regulations through professional registration, tax return
            filing, compliance reviews, and advisory services. Nafaz helps businesses navigate Corporate Tax
            obligations with confidence while minimizing compliance risks and ensuring accurate reporting.
          </p>
        </div>
        <div className="container mx-auto max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroChecklist.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-md p-4 flex flex-col items-center gap-2 text-center"
              data-aos="flip-up"
              data-aos-delay={`${index * 150}`}
              data-aos-duration="800"
            >
              <Icon icon="ic:round-check-circle" className="text-yellow-400 text-2xl" />
              <span className="text-white text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div
          className="container mx-auto max-w-5xl mt-14 aspect-[21/9] rounded-xl overflow-hidden relative"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <Image
            src="/images/hero/hero-image.png"
            alt="Corporate Tax Registration & Filing Services in Dubai"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {heroStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-6 text-center shadow-service"
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
              data-aos-duration="800"
            >
              <p className="text-grey text-xs font-semibold uppercase tracking-wide">{stat.title}</p>
              <h3 className="text-2xl font-bold text-midnight_text mt-2">{stat.value}</h3>
              <p className="text-grey text-sm mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
        <div
          className="flex flex-wrap gap-4 justify-center mt-10"
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

      {/* Why Nafaz / About Corporate Tax compliance */}
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
            More Than Tax Filing. Complete Corporate Tax Compliance.
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Corporate Tax compliance involves more than submitting an annual return. Nafaz helps businesses
            understand their obligations, determine tax residency, prepare accurate financial information,
            calculate taxable income, and file Corporate Tax returns in accordance with UAE regulations.
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
            Corporate Tax Services in Dubai
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
          <div className="flex flex-wrap gap-4 justify-center mt-8">
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

            {/* Benefits + Why Choose Nafaz card */}
      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 grid-cols-1 gap-12 items-start">
          <div data-aos="fade-right" data-aos-duration="1000">
            <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2">
              BENEFITS
            </span>
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">
              Why Dubai Businesses Need Professional Corporate Tax Support
            </h2>
            <p className="text-grey dark:text-white/50 text-lg mt-6">
              Corporate Tax introduces new compliance responsibilities for businesses in the UAE. Professional
              guidance helps reduce errors, improve reporting accuracy, and ensure timely compliance.
            </p>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-8">
              {taxBenefits.map((item, index) => (
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
              Our experienced Corporate Tax specialists help businesses comply with UAE Corporate Tax regulations
              through practical advice, accurate reporting, and dedicated support.
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
            How Our Corporate Tax Process Works
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
            Industries We Support Across Dubai & UAE
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

      {/* Financial Records + What You'll Receive card */}
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
            Outsourced Corporate Tax Services vs Internal Tax Management
          </h2>
          <div
            className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Decision Factor</span>
              <span>Outsourced Corporate Tax Services</span>
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
              Corporate Tax Consultants Focused on Compliance & Business Growth
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
              Corporate Tax Registration & Filing FAQs
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
            Stay Corporate Tax Compliant With Confidence
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Whether you need Corporate Tax registration, return filing, tax planning, or ongoing compliance
            support, Nafaz provides practical solutions that help your business meet UAE Corporate Tax
            requirements while staying focused on growth.
          </p>
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
    </>
  );
};

export default Page;
