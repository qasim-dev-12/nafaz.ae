import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Excise Tax Services in Dubai | Excise Tax Registration & Filing | Nafaz",
  description:
    "Need Excise Tax services in Dubai? Nafaz provides Excise Tax registration, return filing, compliance reviews, product classification guidance, FTA audit support, and ongoing advisory services for manufacturers, importers, distributors, and businesses dealing with excise goods across the UAE.",
  keywords: [
    "Excise Tax Dubai",
    "Excise Tax Services Dubai",
    "Excise Tax Registration UAE",
    "Excise Tax Return Filing Dubai",
    "Excise Tax Consultant UAE",
    "UAE Excise Tax Compliance",
    "FTA Excise Tax",
    "Excise Tax Advisory Dubai",
    "Excise Goods UAE",
    "Excise Tax Audit Support",
    "Excise Tax Registration Dubai",
    "UAE Excise Tax Services",
  ],
};

const heroChecklist = ["Excise Tax Registration", "Excise Tax Return Filing", "FTA Compliance Support", "Excise Tax Advisory"];
const heroStats = [
  { title: "Excise Tax", value: "100%", description: "FTA Compliance" },
  { title: "Return Filing", value: "On-Time", description: "Accurate Submission" },
  { title: "Businesses Supported", value: "500+", description: "Across UAE" },
  { title: "UAE Experience", value: "10+", description: "Years" },
];
const bottomStats = [
  { title: "Excise Tax Specialists", description: "Industry Expertise" },
  { title: "FTA Compliance", description: "Professional Support" },
  { title: "Manufacturers & Importers", description: "Dedicated Solutions" },
  { title: "Fast Response", description: "Expert Assistance" },
];
const whyChooseUs = [
  "Excise Tax Registration",
  "Excise Tax Return Filing",
  "Product Classification Guidance",
  "Record Keeping Support",
  "Warehouse Compliance",
  "FTA Compliance Review",
  "Excise Tax Advisory",
  "Ongoing Compliance Support",
];
const services = [
  { title: "Excise Tax Registration", description: "Register your business with the Federal Tax Authority for Excise Tax.", learnMore: true },
  { title: "Excise Tax Return Filing", description: "Prepare and submit accurate Excise Tax returns within the required deadlines." },
  { title: "Excise Goods Assessment", description: "Determine whether your products fall under UAE Excise Tax regulations." },
  { title: "Product Classification Advisory", description: "Professional guidance on the classification of excise goods under UAE legislation." },
  { title: "Excise Tax Compliance Review", description: "Review current processes and records to identify compliance gaps." },
  { title: "Warehouse & Stock Management Support", description: "Guidance on maintaining records for designated zones and taxable stock movements." },
  { title: "Excise Tax Health Check", description: "Identify compliance risks before filing returns." },
  { title: "Excise Record Maintenance", description: "Maintain proper records of purchases, imports, production, storage, and sales." },
  { title: "FTA Audit Support", description: "Professional assistance during Federal Tax Authority reviews and audits." },
  { title: "Excise Tax Advisory", description: "Advice on tax obligations, business transactions, and regulatory updates." },
  { title: "Staff Training", description: "Training for finance and operations teams on Excise Tax compliance requirements." },
  { title: "Ongoing Excise Compliance", description: "Continuous monitoring and support for businesses dealing with excise goods." },
];
const excBenefits = [
  "Proper Tax Registration",
  "Accurate Tax Calculations",
  "Product Classification Support",
  "Regulatory Compliance",
  "Record Keeping Guidance",
  "Audit Readiness",
  "Reduced Compliance Risk",
  "Continuous Advisory",
];
const whyChooseNafazCard = ["Experienced Tax Professionals", "Transparent Pricing", "Accurate Filing", "Ongoing Compliance Support"];
const process = [
  { step: "01", title: "Business Assessment", description: "Understand your products, business activities, and Excise Tax obligations." },
  { step: "02", title: "Registration", description: "Complete Excise Tax registration with the Federal Tax Authority." },
  { step: "03", title: "Product & Record Review", description: "Assess taxable goods, stock records, and supporting documentation." },
  { step: "04", title: "Tax Calculation", description: "Calculate Excise Tax liabilities accurately based on applicable regulations." },
  { step: "05", title: "Return Filing", description: "Prepare and submit Excise Tax returns before statutory deadlines." },
  { step: "06", title: "Ongoing Compliance", description: "Provide continuous advisory, reporting support, and regulatory updates." },
];
const industries = [
  "Tobacco Manufacturers & Importers",
  "Electronic Smoking Device Businesses",
  "Beverage Manufacturers",
  "Food & Beverage Companies",
  "Wholesale & Distribution",
  "Retail Businesses",
  "Warehousing & Logistics",
  "Free Zone Companies",
];
const documentationBenefits = [
  "Excise Tax Registration Support",
  "Product Classification",
  "Inventory Record Review",
  "Tax Calculations",
  "Documentation Management",
  "FTA Compliance Monitoring",
  "Audit Preparation",
  "Ongoing Advisory",
];
const whatYoullReceive = ["Excise Tax Registration", "Return Preparation", "Compliance Review", "Advisory Support", "Dedicated Tax Consultant"];
const comparison = [
  { area: "Regulatory Knowledge", inHouse: "Limited Internal Expertise", outsourced: "Dedicated Excise Tax Specialists" },
  { area: "Compliance Updates", inHouse: "Requires Ongoing Research", outsourced: "Continuously Monitored" },
  { area: "Filing Accuracy", inHouse: "Depends on Experience", outsourced: "High" },
  { area: "Documentation", inHouse: "Internal Responsibility", outsourced: "Professionally Managed" },
  { area: "Audit Readiness", inHouse: "Higher Compliance Risk", outsourced: "Strong" },
  { area: "Cost", inHouse: "Higher Internal Costs", outsourced: "Predictable Service Fees" },
];
const consultantFeatures = [
  { title: "Dedicated Consultants", description: "Professional support tailored to businesses dealing with excise goods." },
  { title: "Proactive Compliance", description: "Identify and resolve compliance issues before filing deadlines." },
  { title: "Accurate Tax Reporting", description: "Reliable calculations backed by complete supporting documentation." },
  { title: "Continuous Advisory", description: "Year-round guidance on changing regulations and compliance obligations." },
];
const whatYoullReceiveApproach = ["Excise Tax Registration", "Return Filing", "Compliance Review", "Audit Support", "Ongoing Advisory"];
const faqs = [
  { question: "What is Excise Tax?", answer: "Excise Tax is an indirect tax imposed in the UAE on specific goods considered harmful to human health or the environment, as defined under applicable UAE legislation." },
  { question: "Who needs to register for Excise Tax?", answer: "Businesses involved in manufacturing, importing, stockpiling, releasing, or operating designated zones for excise goods may be required to register, depending on their activities and obligations under UAE regulations." },
  { question: "Which products are subject to Excise Tax?", answer: "The scope of Excise Tax depends on current UAE legislation and may include categories such as tobacco products, electronic smoking devices and liquids, energy drinks, carbonated drinks, and certain sweetened beverages." },
  { question: "How often are Excise Tax returns filed?", answer: "Return filing obligations depend on the applicable UAE Excise Tax regulations and the taxpayer's registration status." },
  { question: "Can you assist during FTA Excise Tax audits?", answer: "Yes. We provide professional support during FTA reviews and audits, including documentation preparation and responses to information requests." },
  { question: "Do you provide Excise Tax advisory?", answer: "Yes. We advise businesses on registration, compliance obligations, product classification, record keeping, and reporting requirements." },
  { question: "Can you help with late Excise Tax filings?", answer: "Yes. We assist businesses in preparing overdue returns and provide guidance on addressing compliance issues." },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4 text-center overflow-hidden">
        <div className="container mx-auto max-w-4xl" data-aos="zoom-in" data-aos-duration="1000">
          <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">
            EXCISE TAX • FTA COMPLIANCE • UAE TAX SERVICES
          </span>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Excise Tax Services in Dubai
          </h1>
          <p className="text-white/70 text-lg my-7 max-w-2xl mx-auto">
            Stay compliant with UAE Excise Tax regulations through professional registration, return filing,
            compliance reviews, and advisory services. Nafaz helps manufacturers, importers, stockpilers,
            warehouse keepers, and distributors meet Federal Tax Authority (FTA) requirements while reducing
            compliance risks.
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
            alt="Excise Tax Services in Dubai"
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
            More Than Excise Tax Filing. Complete Excise Tax Compliance.
          </h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            Excise Tax compliance involves proper registration, identifying taxable goods, maintaining accurate
            records, calculating tax liabilities, filing returns on time, and complying with Federal Tax
            Authority regulations. Nafaz provides complete Excise Tax support to help businesses remain
            compliant while minimizing operational risks.
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
            Excise Tax Services in Dubai
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
              Why Businesses Need Professional Excise Tax Support
            </h2>
            <p className="text-grey dark:text-white/50 text-lg mt-6">
              Excise Tax regulations require businesses to maintain detailed records and comply with strict
              reporting obligations. Professional guidance helps reduce errors, improve compliance, and avoid
              unnecessary penalties.
            </p>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-8">
              {excBenefits.map((item, index) => (
                <span key={index} className="bg-white dark:bg-darkmode text-midnight_text dark:text-white text-sm font-medium rounded-md px-4 py-3">
                  ✔ {item}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-darkmode rounded-md shadow-service p-10" data-aos="fade-left" data-aos-duration="1000">
            <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-4">Why Choose Nafaz?</h3>
            <p className="text-grey dark:text-white/50 mb-6">
              Our Excise Tax specialists help businesses manage registration, reporting, and compliance while
              ensuring adherence to UAE Excise Tax regulations.
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
            How Our Excise Tax Process Works
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
            Outsourced Excise Tax Services vs Internal Management
          </h2>
          <div className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Decision Factor</span>
              <span>Outsourced Excise Tax Services</span>
              <span>Internal Management</span>
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
              Excise Tax Specialists Focused on Compliance
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
              Excise Tax FAQs
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>


      {/* CTA */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">
            Stay Excise Tax Compliant With Confidence
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Whether you need Excise Tax registration, return filing, compliance reviews, or ongoing advisory
            support, Nafaz helps your business meet UAE Excise Tax requirements while minimizing compliance
            risks.
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
