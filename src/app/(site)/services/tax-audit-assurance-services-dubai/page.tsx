import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Tax Audit & Assurance Services in Dubai | FTA Tax Compliance | Nafaz",
  description:
    "Looking for Tax Audit & Assurance services in Dubai? Nafaz provides VAT reviews, Corporate Tax compliance assessments, Excise Tax reviews, FTA audit support, tax risk assessments, documentation reviews, and ongoing tax assurance services for businesses across the UAE.",
  keywords: [
    "Tax Audit Dubai",
    "Tax Audit Services Dubai",
    "Tax Assurance Services UAE",
    "FTA Audit Support Dubai",
    "VAT Audit Support UAE",
    "Corporate Tax Compliance Dubai",
    "Tax Risk Assessment UAE",
    "Tax Compliance Review Dubai",
    "Excise Tax Audit UAE",
    "Tax Consultants Dubai",
    "UAE Tax Compliance Services",
    "Tax Advisory Dubai",
  ],
};

const heroChecklist = ["Tax Audit Support", "VAT & Corporate Tax Reviews", "FTA Compliance", "Tax Risk Assessment"];
const heroStats = [
  { title: "Tax Reviews", value: "100%", description: "Compliance Focus" },
  { title: "FTA Support", value: "Professional", description: "Audit Assistance" },
  { title: "Businesses Assisted", value: "500+", description: "Across UAE" },
  { title: "UAE Experience", value: "10+", description: "Years" },
];
const bottomStats = [
  { title: "Tax Compliance", description: "Professional Guidance" },
  { title: "FTA Audit Support", description: "Dedicated Specialists" },
  { title: "Risk Assessment", description: "Proactive Reviews" },
  { title: "Fast Response", description: "Expert Assistance" },
];
const whyChooseUs = [
  "Tax Compliance Reviews",
  "VAT Audit Support",
  "Corporate Tax Review",
  "Excise Tax Compliance",
  "Tax Risk Assessment",
  "Documentation Review",
  "FTA Audit Assistance",
  "Ongoing Tax Advisory",
];
const services = [
  { title: "Tax Compliance Review", description: "Review your tax records to identify compliance gaps and reporting risks.", learnMore: true },
  { title: "VAT Audit Support", description: "Professional assistance during VAT audits conducted by the Federal Tax Authority." },
  { title: "Corporate Tax Compliance Review", description: "Assess Corporate Tax records, calculations, and supporting documentation before filing or review." },
  { title: "Excise Tax Review", description: "Evaluate Excise Tax records, filings, and compliance processes where applicable." },
  { title: "Tax Risk Assessment", description: "Identify potential compliance risks and recommend practical corrective actions." },
  { title: "Documentation Verification", description: "Review invoices, tax records, financial documentation, and supporting evidence." },
  { title: "Internal Tax Review", description: "Perform an independent review of internal tax procedures and controls." },
  { title: "FTA Audit Preparation", description: "Prepare your business with organized documentation and audit-ready records." },
  { title: "Tax Health Check", description: "Evaluate your current tax position and identify opportunities for improvement." },
  { title: "Compliance Advisory", description: "Provide ongoing advice on UAE tax regulations and compliance obligations." },
  { title: "Tax Process Improvement", description: "Recommend process improvements to strengthen tax governance and reporting accuracy." },
  { title: "Ongoing Tax Assurance", description: "Continuous support to help maintain long-term tax compliance." },
];
const taxBenefits = [
  "Early Risk Detection",
  "Improved Compliance",
  "Stronger Documentation",
  "Audit Readiness",
  "Reduced Penalty Risk",
  "Professional Tax Guidance",
  "Better Internal Controls",
  "Greater Confidence",
];
const whyChooseNafazCard = ["Experienced Tax Professionals", "Transparent Pricing", "Detailed Compliance Reviews", "Ongoing Support"];
const process = [
  { step: "01", title: "Initial Consultation", description: "Understand your business, industry, and tax obligations." },
  { step: "02", title: "Document Review", description: "Assess financial records, tax filings, invoices, and supporting documentation." },
  { step: "03", title: "Compliance Assessment", description: "Review VAT, Corporate Tax, and Excise Tax compliance against applicable UAE regulations." },
  { step: "04", title: "Risk Identification", description: "Identify potential tax exposures and areas requiring improvement." },
  { step: "05", title: "Recommendations", description: "Provide a detailed report with practical compliance recommendations." },
  { step: "06", title: "Ongoing Support", description: "Assist with implementation, FTA audits, and continuous tax compliance." },
];
const industries = [
  "Trading & Distribution",
  "Construction",
  "Manufacturing",
  "Healthcare",
  "Retail & Ecommerce",
  "Professional Services",
  "Hospitality",
  "Free Zone Companies",
];
const documentationBenefits = [
  "Tax Record Review",
  "VAT Documentation",
  "Corporate Tax Review",
  "Excise Tax Records",
  "Supporting Evidence",
  "Compliance Monitoring",
  "Audit Preparation",
  "Professional Recommendations",
];
const whatYoullReceive = ["Tax Compliance Assessment", "Risk Review Report", "Audit Readiness Review", "Professional Recommendations", "Ongoing Support"];
const comparison = [
  { area: "Independent Assessment", inHouse: "Limited", outsourced: "Yes" },
  { area: "Regulatory Knowledge", inHouse: "Internal Team", outsourced: "Tax Specialists" },
  { area: "Risk Identification", inHouse: "May Overlook Issues", outsourced: "Comprehensive" },
  { area: "Documentation Review", inHouse: "Varies by Experience", outsourced: "Detailed" },
  { area: "Audit Readiness", inHouse: "Moderate", outsourced: "High" },
  { area: "Ongoing Support", inHouse: "Internal Resources", outsourced: "Continuous" },
];
const consultantFeatures = [
  { title: "Dedicated Tax Professionals", description: "Experienced specialists supporting your business throughout the review process." },
  { title: "Proactive Risk Assessment", description: "Identify compliance issues before they become regulatory concerns." },
  { title: "Practical Recommendations", description: "Clear, actionable advice to strengthen your tax processes." },
  { title: "Ongoing Compliance Support", description: "Continuous guidance to help your business remain compliant throughout the year." },
];
const whatYoullReceiveApproach = ["Tax Review", "Compliance Assessment", "Audit Preparation", "Risk Recommendations", "Dedicated Consultant"];
const faqs = [
  { question: "What is a Tax Audit & Assurance service?", answer: "Tax Audit & Assurance services involve reviewing tax records, assessing compliance with UAE tax regulations, identifying potential risks, and helping businesses prepare for Federal Tax Authority (FTA) audits." },
  { question: "Do you conduct statutory financial audits?", answer: "No. This service focuses on tax compliance reviews and assurance. If your business requires a statutory financial audit, we can advise you on the appropriate next steps and coordinate with licensed audit firms where required." },
  { question: "Can you help during an FTA audit?", answer: "Yes. We assist businesses in preparing documentation, reviewing tax records, responding to information requests, and supporting them throughout the audit process." },
  { question: "Which taxes do you review?", answer: "We review VAT, Corporate Tax, and Excise Tax compliance based on your business activities and applicable UAE regulations." },
  { question: "How often should businesses perform a tax review?", answer: "Many businesses benefit from conducting periodic tax reviews, especially before filing tax returns, during periods of growth, or when preparing for regulatory inspections." },
  { question: "Can you identify tax compliance risks?", answer: "Yes. Our review process identifies potential compliance issues, documentation gaps, and reporting risks, along with practical recommendations to address them." },
  { question: "Is my business information kept confidential?", answer: "Absolutely. All financial and tax information shared with Nafaz is handled with strict confidentiality and professional care." },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4 text-center overflow-hidden">
        <div className="container mx-auto max-w-4xl" data-aos="zoom-in" data-aos-duration="1000">
          <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">
            TAX AUDIT • TAX ASSURANCE • FTA COMPLIANCE
          </span>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Tax Audit & Assurance Services in Dubai
          </h1>
          <p className="text-white/70 text-lg my-7 max-w-2xl mx-auto">
            Prepare your business for tax compliance with professional Tax Audit & Assurance services from
            Nafaz. We help businesses review tax records, identify compliance risks, strengthen
            documentation, and provide expert support during Federal Tax Authority (FTA) audits, helping you
            meet UAE tax obligations with confidence.
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
            alt="Tax Audit & Assurance Services in Dubai"
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

      {/* Why Nafaz */}
      <section className="bg-section dark:bg-darklight py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">
            WHY NAFAZ
          </span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            More Than an Audit. Complete Tax Assurance for Your Business.
          </h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            Tax assurance is about identifying potential compliance issues before they become costly problems.
            Nafaz reviews your tax records, assesses VAT, Corporate Tax, and Excise Tax compliance, verifies
            supporting documentation, and helps your business prepare for FTA audits with confidence.
          </p>
          <h3 className="text-midnight_text dark:text-white text-xl font-bold mt-10" data-aos="fade-up" data-aos-duration="1000">
            Why Businesses Choose Nafaz
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-3 mt-6">
            {whyChooseUs.map((item, index) => (
              <span key={index} className="bg-white dark:bg-darkmode text-midnight_text dark:text-white text-sm font-medium rounded-full px-4 py-3" data-aos="fade-up" data-aos-delay={`${index * 100}`} data-aos-duration="1000">
                ✔ {item}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* Services */}
      <section className="bg-white dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">
            OUR SERVICES
          </span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Tax Audit & Assurance Services in Dubai
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-12">
            {services.map((service, index) => (
              <div key={index} className="bg-section dark:bg-darklight rounded-md shadow-service p-8 text-left" data-aos="fade-up" data-aos-delay={`${(index % 3) * 200}`} data-aos-duration="1000" data-aos-offset="300">
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
            <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2">BENEFITS</span>
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">
              Why Businesses Need Professional Tax Audit Support
            </h2>
            <p className="text-grey dark:text-white/50 text-lg mt-6">
              Regular tax reviews help reduce compliance risks, improve reporting accuracy, and prepare your
              business for regulatory inspections.
            </p>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-8">
              {taxBenefits.map((item, index) => (
                <span key={index} className="bg-white dark:bg-darkmode text-midnight_text dark:text-white text-sm font-medium rounded-md px-4 py-3">
                  ✔ {item}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-darkmode rounded-md shadow-service p-10" data-aos="fade-left" data-aos-duration="1000">
            <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-4">Why Choose Nafaz?</h3>
            <p className="text-grey dark:text-white/50 mb-6">
              Our experienced tax specialists conduct detailed compliance reviews and provide practical
              recommendations to strengthen your business's tax position.
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
          <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">
            OUR PROCESS
          </span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            How Our Tax Audit Process Works
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-12">
            {process.map((item, index) => (
              <div key={index} className="bg-section dark:bg-darklight rounded-md shadow-service p-8 text-left" data-aos="fade-up" data-aos-delay={`${(index % 3) * 200}`} data-aos-duration="1000" data-aos-offset="300">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold mb-6">{item.step}</span>
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
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">
            INDUSTRIES
          </span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Industries We Support Across Dubai & UAE
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-12">
            {industries.map((item, index) => (
              <div key={index} className="bg-white dark:bg-darkmode rounded-md shadow-service p-6" data-aos="fade-up" data-aos-delay={`${(index % 4) * 150}`} data-aos-duration="1000" data-aos-offset="300">
                <h3 className="text-lg font-bold text-midnight_text dark:text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation + What You'll Receive card */}
            {/* Comparison */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <span className="bg-white/10 text-yellow-400 font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">
            COMPARISON
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Professional Tax Assurance vs Internal Tax Reviews
          </h2>
          <div className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Decision Factor</span>
              <span>Professional Tax Assurance</span>
              <span>Internal Review</span>
            </div>
            {comparison.map((row, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 px-8 py-6 border-b border-white/10 min-w-[600px]">
                <span className="text-white/50">{row.area}</span>
                <span className="text-white font-semibold">{row.outsourced}</span>
                <span className="text-white font-semibold">{row.inHouse}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultants + What You'll Receive card */}
      <section className="bg-section dark:bg-darklight py-20 px-4">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 grid-cols-1 gap-12 items-start">
          <div data-aos="fade-right" data-aos-duration="1000">
            <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2">OUR APPROACH</span>
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">
              Tax Specialists Focused on Compliance & Risk Management
            </h2>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
              {consultantFeatures.map((item, index) => (
                <div key={index} className="bg-white dark:bg-darkmode rounded-md shadow-service p-6" data-aos="fade-up" data-aos-delay={`${index * 150}`} data-aos-duration="1000">
                  <h3 className="text-lg font-bold text-midnight_text dark:text-white mb-2">{item.title}</h3>
                  <p className="text-grey dark:text-white/50 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-darkmode rounded-md shadow-service p-10" data-aos="fade-left" data-aos-duration="1000">
            <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-6">What You'll Receive</h3>
            <div className="flex flex-col gap-3 mb-8">
              {whatYoullReceiveApproach.map((item, index) => (
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
            <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2">FAQ</span>
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">
              Tax Audit & Assurance FAQs
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>


      {/* CTA */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">
            Be Ready Before the FTA Comes Calling
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Strengthen your tax compliance with professional Tax Audit & Assurance services from Nafaz. We'll
            help you identify risks early, improve documentation, and prepare your business for VAT, Corporate
            Tax, and Excise Tax reviews with confidence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
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
