import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = {
  title: "Transfer Pricing Services in Dubai | UAE Transfer Pricing Consultants | Nafaz",
  description:
    "Looking for Transfer Pricing services in Dubai? Nafaz provides Transfer Pricing advisory, Local File and Master File preparation, benchmarking studies, related-party transaction reviews, OECD-compliant documentation, and UAE Corporate Tax compliance support for businesses across the UAE.",
  keywords: [
    "Transfer Pricing Dubai",
    "UAE Transfer Pricing",
    "Transfer Pricing Services Dubai",
    "Transfer Pricing Consultant UAE",
    "OECD Transfer Pricing UAE",
    "Local File UAE",
    "Master File UAE",
    "Related Party Transactions UAE",
    "Benchmarking Study Dubai",
    "Arm's Length Principle UAE",
    "Corporate Tax Transfer Pricing",
    "Transfer Pricing Documentation UAE",
  ],
};

const heroChecklist = [
  "OECD-Aligned Documentation",
  "Related Party Transactions",
  "Benchmarking Studies",
  "UAE Corporate Tax Compliance",
];
const heroStats = [
  { title: "Transfer Pricing", value: "100%", description: "Compliance Focus" },
  { title: "Documentation", value: "OECD", description: "Aligned Standards" },
  { title: "Businesses Assisted", value: "500+", description: "Across UAE" },
  { title: "UAE Experience", value: "10+", description: "Years" },
];
const bottomStats = [
  { title: "Corporate Tax Experts", description: "Transfer Pricing Specialists" },
  { title: "OECD Framework", description: "International Best Practices" },
  { title: "Cross-Border Expertise", description: "Regional & Global Support" },
  { title: "Dedicated Advisory", description: "Professional Tax Guidance" },
];
const whyChooseUs = [
  "Transfer Pricing Advisory",
  "Related Party Transaction Review",
  "Benchmarking Analysis",
  "Local File Preparation",
  "Master File Preparation",
  "Arm's Length Pricing Assessment",
  "Corporate Tax Compliance",
  "Ongoing Transfer Pricing Support",
];
const services = [
  { title: "Transfer Pricing Assessment", description: "Assess whether your business is subject to UAE Transfer Pricing regulations.", learnMore: true },
  { title: "Related Party Transaction Review", description: "Review transactions between related entities and connected persons." },
  { title: "Arm's Length Pricing Analysis", description: "Determine whether pricing complies with the arm's length principle." },
  { title: "Local File Preparation", description: "Prepare Local File documentation in accordance with UAE Corporate Tax requirements." },
  { title: "Master File Preparation", description: "Prepare Master File documentation for multinational business groups where applicable." },
  { title: "Benchmarking Studies", description: "Conduct benchmarking analysis using comparable market data to support transfer pricing policies." },
  { title: "Transfer Pricing Policy Development", description: "Develop practical transfer pricing policies that align with your business operations." },
  { title: "Functional Analysis", description: "Evaluate functions performed, assets employed, and risks assumed by related entities." },
  { title: "Documentation Review", description: "Review existing transfer pricing documentation and identify compliance gaps." },
  { title: "Transfer Pricing Advisory", description: "Provide ongoing guidance for cross-border transactions and business restructuring." },
  { title: "FTA Audit Support", description: "Professional support during Transfer Pricing reviews and Federal Tax Authority audits." },
  { title: "Annual Compliance Support", description: "Continuous monitoring of transfer pricing obligations under UAE Corporate Tax." },
];
const tpBenefits = [
  "OECD-Compliant Documentation",
  "Arm's Length Pricing",
  "Benchmarking Support",
  "Related Party Analysis",
  "Reduced Tax Risk",
  "FTA Audit Readiness",
  "Cross-Border Tax Support",
  "Ongoing Advisory",
];
const whyChooseNafazCard = [
  "Transfer Pricing Specialists",
  "Transparent Pricing",
  "Practical Business Advice",
  "Continuous Compliance Support",
];
const process = [
  { step: "01", title: "Business Consultation", description: "Understand your group structure and related-party transactions." },
  { step: "02", title: "Risk Assessment", description: "Identify Transfer Pricing obligations under UAE Corporate Tax." },
  { step: "03", title: "Functional Analysis", description: "Review functions, assets, risks, and commercial arrangements." },
  { step: "04", title: "Benchmarking Study", description: "Perform market comparisons and pricing analysis." },
  { step: "05", title: "Documentation Preparation", description: "Prepare Local File, Master File, and supporting documentation." },
  { step: "06", title: "Ongoing Compliance", description: "Provide continuous advisory and annual Transfer Pricing support." },
];
const industries = [
  "Multinational Groups",
  "Holding Companies",
  "Manufacturing",
  "Trading & Distribution",
  "Technology Companies",
  "Professional Services",
  "Healthcare",
  "Regional Business Groups",
];
const documentationBenefits = [
  "Local File Preparation",
  "Master File Preparation",
  "Functional Analysis",
  "Benchmarking Studies",
  "Related Party Review",
  "Arm's Length Assessment",
  "FTA Audit Support",
  "Ongoing Compliance",
];
const whatYoullReceive = [
  "Transfer Pricing Assessment",
  "Benchmarking Study",
  "Local File",
  "Master File",
  "Professional Advisory",
];
const comparison = [
  { area: "Technical Expertise", inHouse: "Limited Internal Knowledge", outsourced: "Dedicated Specialists" },
  { area: "OECD Knowledge", inHouse: "Requires Continuous Training", outsourced: "Up-to-Date Standards" },
  { area: "Benchmarking Access", inHouse: "Limited Data Availability", outsourced: "Professional Research" },
  { area: "Documentation", inHouse: "Time-Consuming", outsourced: "Comprehensive" },
  { area: "Audit Readiness", inHouse: "Higher Compliance Risk", outsourced: "Strong Documentation" },
  { area: "Cost", inHouse: "Higher Internal Resources", outsourced: "Predictable Professional Fees" },
];
const consultantFeatures = [
  { title: "Dedicated Specialists", description: "Experienced professionals for complex Transfer Pricing matters." },
  { title: "Practical Documentation", description: "Documentation aligned with UAE Corporate Tax requirements." },
  { title: "International Standards", description: "Advice based on OECD Transfer Pricing Guidelines." },
  { title: "Ongoing Advisory", description: "Continuous support as regulations evolve." },
];
const whatYoullReceiveApproach = [
  "Transfer Pricing Assessment",
  "Documentation Preparation",
  "Benchmarking Analysis",
  "Audit Support",
  "Ongoing Advisory",
];
const faqs = [
  { question: "What is Transfer Pricing?", answer: "Transfer Pricing refers to the pricing of transactions between related parties or connected persons. UAE Corporate Tax regulations require eligible businesses to follow the arm's length principle and maintain supporting documentation where applicable." },
  { question: "Who needs Transfer Pricing documentation?", answer: "Documentation requirements depend on factors such as business structure, transaction types, and the applicable UAE Corporate Tax regulations. We assess your obligations based on your specific circumstances." },
  { question: "What is the arm's length principle?", answer: "The arm's length principle requires related-party transactions to be priced as if they were conducted between independent parties under similar market conditions." },
  { question: "What is a Local File?", answer: "A Local File contains detailed information about related-party transactions undertaken by the UAE entity, together with supporting analysis and documentation where required." },
  { question: "What is a Master File?", answer: "A Master File provides an overview of a multinational group's global business operations, transfer pricing policies, and organizational structure, where applicable." },
  { question: "Can you assist during FTA audits?", answer: "Yes. We help businesses prepare documentation, respond to information requests, and provide professional support during FTA reviews." },
  { question: "Do you provide benchmarking studies?", answer: "Yes. We perform benchmarking studies to support arm's length pricing using appropriate market comparisons and accepted methodologies." },
];

const Page = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight_text dark:bg-darkmode py-20 md:pt-44 pt-36 px-4">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
            <span className="inline-block bg-yellow-400 text-midnight_text font-semibold rounded-full px-6 py-2 mb-6">
              TRANSFER PRICING • UAE CORPORATE TAX • OECD COMPLIANCE
            </span>
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Transfer Pricing Services in Dubai
            </h1>
            <p className="text-white/70 text-lg my-7">
              Ensure your related-party transactions comply with UAE Corporate Tax regulations through
              professional Transfer Pricing advisory, documentation, benchmarking studies, and compliance
              support. Nafaz helps businesses meet Federal Tax Authority (FTA) requirements while reducing
              transfer pricing risks.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">
                Book Free Transfer Pricing Consultation
              </Link>
              <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">
                Speak With Our Tax Specialists
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

      {/* Why Nafaz / About Transfer Pricing compliance */}
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
            More Than Documentation. Complete Transfer Pricing Compliance.
          </h2>
          <p
            className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Transfer Pricing is more than preparing reports—it requires understanding related-party
            transactions, selecting the appropriate pricing methodology, preparing compliant documentation,
            and maintaining evidence that supports arm's length pricing under UAE Corporate Tax regulations.
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
            Transfer Pricing Services in Dubai
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
              Why Businesses Need Professional Transfer Pricing Support
            </h2>
            <p className="text-grey dark:text-white/50 text-lg mt-6">
              Transfer Pricing compliance has become an important component of UAE Corporate Tax. Proper
              documentation helps reduce compliance risks and supports pricing decisions during tax reviews.
            </p>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-8">
              {tpBenefits.map((item, index) => (
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
              Our Transfer Pricing specialists help businesses develop practical documentation and pricing
              policies that align with UAE regulations and international standards.
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
            How Our Transfer Pricing Process Works
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

      {/* Documentation + What You'll Receive card */}
      <section className="bg-white dark:bg-darkmode py-20 px-4">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 grid-cols-1 gap-12 items-start">
          <div data-aos="fade-right" data-aos-duration="1000">
            <span className="bg-section dark:bg-darklight text-primary font-semibold rounded-full px-6 py-2">
              DOCUMENTATION
            </span>
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">
              Transfer Pricing Documentation That Supports Compliance
            </h2>
            <p className="text-grey dark:text-white/50 text-lg mt-6">
              Strong documentation helps businesses demonstrate that related-party transactions comply with
              the arm's length principle while meeting UAE Corporate Tax documentation requirements.
            </p>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-8">
              {documentationBenefits.map((item, index) => (
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
              Book Free Transfer Pricing Review
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
            Outsourced Transfer Pricing vs Internal Tax Management
          </h2>
          <div
            className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Decision Factor</span>
              <span>Outsourced Transfer Pricing</span>
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
            <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2">
              OUR APPROACH
            </span>
            <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6">
              Transfer Pricing Specialists Focused on Compliance
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
            <h3 className="text-2xl font-bold text-midnight_text dark:text-white mb-6">What You'll Receive</h3>
            <div className="flex flex-col gap-3 mb-8">
              {whatYoullReceiveApproach.map((item, index) => (
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
              Transfer Pricing FAQs
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
            Strengthen Your Transfer Pricing Compliance
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto mt-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Protect your business with professionally prepared Transfer Pricing documentation, benchmarking
            studies, and ongoing advisory services. Nafaz helps you meet UAE Corporate Tax requirements with
            confidence.
          </p>
          <div
            className="flex flex-wrap gap-4 justify-center mt-8"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">
              Book Free Transfer Pricing Consultation
            </Link>
            <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">
              Speak With Our Specialists
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
