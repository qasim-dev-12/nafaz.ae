import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Tax Residency Certificate Services in Dubai | UAE TRC Consultants | Nafaz",
  description:
    "Apply for a UAE Tax Residency Certificate with confidence. Nafaz provides eligibility assessments, Ministry of Finance application support, document preparation, DTAA guidance, and end-to-end Tax Residency Certificate services for individuals and businesses across the UAE.",
  keywords: [
    "Tax Residency Certificate Dubai",
    "UAE Tax Residency Certificate",
    "TRC Dubai",
    "Tax Residency Certificate UAE",
    "Ministry of Finance TRC",
    "UAE TRC Consultant",
    "Double Taxation Avoidance Agreement UAE",
    "DTAA UAE",
    "Corporate Tax Residency Certificate",
    "Individual Tax Residency UAE",
    "International Tax Consultant Dubai",
    "TRC Application UAE",
  ],
};

const heroChecklist = [
  "Tax Residency Certificate",
  "MoF Application Support",
  "DTAA Guidance",
  "Document Preparation",
];
const heroStats = [
  { title: "TRC Applications", value: "100%", description: "Document Accuracy" },
  { title: "MoF Support", value: "End-to-End", description: "Application Assistance" },
  { title: "Businesses Assisted", value: "500+", description: "Across UAE" },
  { title: "UAE Experience", value: "10+", description: "Years" },
];
const bottomStats = [
  { title: "International Tax Support", description: "Professional Guidance" },
  { title: "UAE Tax Experts", description: "Experienced Consultants" },
  { title: "Individuals & Businesses", description: "Complete Assistance" },
  { title: "Fast Response", description: "Dedicated Support Team" },
];
const whyChooseUs = [
  "Eligibility Assessment",
  "Document Preparation",
  "Ministry of Finance Application",
  "DTAA Guidance",
  "Professional Consultation",
  "Application Review",
  "Ongoing Support",
  "Dedicated Tax Specialists",
];
const services = [
  { title: "TRC Eligibility Assessment", description: "Review your residency status and determine eligibility before applying.", learnMore: true },
  { title: "Individual Tax Residency Certificates", description: "Professional support for individuals applying for a UAE Tax Residency Certificate." },
  { title: "Corporate Tax Residency Certificates", description: "Assistance for companies seeking a Tax Residency Certificate for international tax purposes." },
  { title: "Ministry of Finance Application", description: "Preparation and submission support for MoF applications." },
  { title: "Supporting Document Review", description: "Review required documents before submission to reduce processing delays." },
  { title: "DTAA Advisory", description: "Guidance on Double Taxation Avoidance Agreements and their practical application." },
  { title: "International Tax Consultation", description: "Advice for businesses and individuals with international tax considerations." },
  { title: "Application Follow-Up", description: "Monitor application progress and assist with additional document requests." },
  { title: "Renewal Assistance", description: "Support for certificate renewal when required." },
  { title: "Compliance Documentation", description: "Organize supporting records required for successful applications." },
  { title: "Business Residency Advisory", description: "Advice for companies with cross-border operations." },
  { title: "Ongoing International Tax Support", description: "Continuous support for businesses with international tax obligations." },
];
const trcBenefits = [
  "Accurate Applications",
  "Complete Documentation",
  "Reduced Processing Delays",
  "Professional Review",
  "International Tax Guidance",
  "DTAA Support",
  "Dedicated Consultant",
  "End-to-End Assistance",
];
const whyChooseNafazCard = [
  "Experienced Consultants",
  "Transparent Pricing",
  "Complete Documentation Support",
  "Ongoing Assistance",
];
const process = [
  { step: "01", title: "Initial Consultation", description: "Understand your residency status and objectives." },
  { step: "02", title: "Eligibility Review", description: "Assess qualification requirements for the certificate." },
  { step: "03", title: "Document Collection", description: "Prepare and organize all required supporting documents." },
  { step: "04", title: "Application Preparation", description: "Complete the Ministry of Finance application accurately." },
  { step: "05", title: "Submission Support", description: "Guide you through the submission process and application follow-up." },
  { step: "06", title: "Certificate Assistance", description: "Support you until the application process is completed." },
];
const whoWeSupport = [
  "Individuals",
  "Mainland Companies",
  "Free Zone Businesses",
  "Holding Companies",
  "International Investors",
  "Professional Service Firms",
  "Trading Companies",
  "Multinational Businesses",
];
const documentationBenefits = [
  "Eligibility Review",
  "Document Verification",
  "Professional Guidance",
  "MoF Application Support",
  "DTAA Assistance",
  "Complete File Preparation",
  "Compliance Review",
  "Application Follow-Up",
];
const whatYoullReceive = [
  "Eligibility Assessment",
  "Document Checklist",
  "Application Review",
  "Submission Guidance",
  "Dedicated Consultant",
];
const comparison = [
  { area: "Eligibility Review", nafaz: "Professional Assessment", self: "Self Evaluation" },
  { area: "Documentation", nafaz: "Complete Review", self: "Applicant Responsibility" },
  { area: "Application Accuracy", nafaz: "High", self: "Depends on Experience" },
  { area: "Processing Delays", nafaz: "Reduced", self: "Higher Risk" },
  { area: "Professional Support", nafaz: "Dedicated Consultant", self: "None" },
  { area: "Time Required", nafaz: "Significantly Reduced", self: "Higher" },
];
const consultantFeatures = [
  { title: "Dedicated Consultant", description: "Personalized support throughout the application process." },
  { title: "Complete Documentation", description: "Every required document reviewed before submission." },
  { title: "Professional Guidance", description: "Expert advice on UAE tax residency requirements." },
  { title: "Ongoing Support", description: "Assistance from consultation through completion." },
];
const whatYouReceive = [
  "Eligibility Assessment",
  "MoF Application Support",
  "Documentation Review",
  "DTAA Guidance",
  "Dedicated Consultant",
];
const faqs = [
  { question: "What is a Tax Residency Certificate?", answer: "A Tax Residency Certificate (TRC) is an official document issued by the UAE Ministry of Finance that may be used to demonstrate UAE tax residency, subject to applicable laws and treaty requirements." },
  { question: "Who can apply for a Tax Residency Certificate?", answer: "Eligibility depends on factors such as residency status, legal structure, and applicable UAE regulations. We assess your situation before proceeding with the application." },
  { question: "Why is a Tax Residency Certificate important?", answer: "A TRC may help eligible individuals and businesses claim benefits under applicable Double Taxation Avoidance Agreements (DTAA) and support international tax compliance." },
  { question: "How long does the application process take?", answer: "Processing times vary depending on document completeness and Ministry of Finance processing timelines." },
  { question: "Can businesses apply for a TRC?", answer: "Yes. Eligible UAE companies may apply for a Tax Residency Certificate, subject to the relevant requirements." },
  { question: "Do you help prepare supporting documents?", answer: "Yes. We review, organize, and verify the required documentation before submission." },
  { question: "Can you assist international businesses?", answer: "Absolutely. We assist companies with cross-border operations and international tax residency requirements." },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4 text-center overflow-hidden">
        <div className="container mx-auto max-w-4xl" data-aos="zoom-in" data-aos-duration="1000">
          <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">
            TAX RESIDENCY • INTERNATIONAL TAX • MoF SUPPORT
          </span>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Tax Residency Certificate Services in Dubai
          </h1>
          <p className="text-white/70 text-lg my-7 max-w-2xl mx-auto">
            Obtain your UAE Tax Residency Certificate (TRC) with confidence. Nafaz assists individuals and
            businesses with eligibility assessments, document preparation, Ministry of Finance (MoF)
            applications, and end-to-end support to help you benefit from Double Taxation Avoidance
            Agreements (DTAA).
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
            alt="Tax Residency Certificate Services in Dubai"
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

      {/* Why Nafaz / About TRC support */}
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
            More Than an Application. Complete Tax Residency Certificate Support.
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Obtaining a UAE Tax Residency Certificate requires more than submitting an application. Nafaz helps
            determine eligibility, prepares the required documentation, reviews supporting records, and manages
            the application process with the Ministry of Finance to help you complete the process efficiently.
          </p>
          <h3
            className="text-midnight_text dark:text-white text-xl font-bold mt-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Why Clients Choose Nafaz
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
            Tax Residency Certificate Services in Dubai
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
              Why Businesses & Individuals Need Professional TRC Support
            </h2>
            <p className="text-grey dark:text-white/50 text-lg mt-6">
              Proper preparation helps reduce delays, improve application accuracy, and ensure all required
              documentation is submitted correctly.
            </p>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-8">
              {trcBenefits.map((item, index) => (
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
              Our specialists understand UAE tax residency requirements and help clients navigate the
              application process with confidence.
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
            How Our Tax Residency Certificate Process Works
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


      {/* Who We Support */}
      <section className="bg-section dark:bg-darklight py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <span
            className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            WHO WE SUPPORT
          </span>
          <h2
            className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Who We Support Across Dubai & UAE
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mt-12">
            {whoWeSupport.map((item, index) => (
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

      {/* Documentation + What You'll Receive card */}
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
            Professional TRC Assistance vs Applying Independently
          </h2>
          <div
            className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Decision Factor</span>
              <span>Nafaz Assistance</span>
              <span>Self-Application</span>
            </div>
            {comparison.map((row, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 px-8 py-6 border-b border-white/10 min-w-[600px]">
                <span className="text-white/50">{row.area}</span>
                <span className="text-white font-semibold">{row.nafaz}</span>
                <span className="text-white font-semibold">{row.self}</span>
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
              International Tax Specialists Focused on Your Success
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
              Tax Residency Certificate FAQs
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
            Need a UAE Tax Residency Certificate?
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Let Nafaz manage the application process while you focus on your business. Our specialists provide
            complete support from eligibility assessment through document preparation and Ministry of Finance
            application assistance.
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
