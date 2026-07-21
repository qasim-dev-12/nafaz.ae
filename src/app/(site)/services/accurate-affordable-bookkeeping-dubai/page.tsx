import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import FAQAccordion from "@/components/SharedComponent/FAQAccordion";

export const metadata: Metadata = { title: "Accurate and Affordable Bookkeeping in Dubai | Venus" };

const heroChecklist = ["Error-Free Books", "No Hidden Fees", "FTA Compliance Support", "Cloud Accounting Included"];
const heroStats = [
  { label: "AED 499", description: "Starting monthly package" },
  { label: "100%", description: "Books reconciled" },
  { label: "0", description: "Setup fees" },
  { label: "24h", description: "Average response time" },
];
const whyChooseUs = [
  { title: "Accuracy First", description: "Every transaction is reviewed and reconciled before your books are closed." },
  { title: "No Hidden Fees", description: "One fixed monthly fee covers bookkeeping, reconciliation and reporting." },
  { title: "Affordable for SMEs", description: "Packages sized for startups and small businesses, not enterprise budgets." },
  { title: "FTA Compliance Focus", description: "Books maintained with VAT and corporate tax documentation in mind." },
  { title: "Cloud Accounting Included", description: "Xero access included at no extra cost in every package." },
  { title: "Dedicated Bookkeeper", description: "One point of contact who knows your business and deadlines." },
];
const pricingTiers = [
  { name: "Starter", price: "AED 499/mo", description: "For new businesses with low transaction volume.", points: ["Up to 50 transactions/month", "Monthly bank reconciliation", "Basic P&L report"] },
  { name: "Growth", price: "AED 999/mo", description: "For growing SMEs with regular activity.", points: ["Up to 200 transactions/month", "Weekly reconciliation", "Full monthly reporting pack"] },
  { name: "Pro", price: "Custom", description: "For high-volume or multi-entity businesses.", points: ["Unlimited transactions", "Dedicated bookkeeper", "VAT & payroll included"] },
];
const industries = [
  { title: "Startups", description: "Affordable bookkeeping to keep records clean from day one." },
  { title: "Freelancers & Consultants", description: "Simple, low-cost bookkeeping for small transaction volumes." },
  { title: "Trading Companies", description: "Accurate supplier ledgers and inventory bookkeeping." },
  { title: "Retail & F&B", description: "Daily sales reconciliation at an affordable fixed fee." },
  { title: "Free Zone Companies", description: "Cost-effective bookkeeping aligned to free zone requirements." },
  { title: "Growing SMEs", description: "Packages that scale as your transaction volume grows." },
];
const comparison = [
  { area: "Cost", inHouse: "Salary, visa and benefits", accountant: "Fixed affordable monthly fee" },
  { area: "Accuracy", inHouse: "Depends on one hire", accountant: "Reviewed and reconciled by a team" },
  { area: "Reporting", inHouse: "Often delayed", accountant: "Monthly reports included" },
  { area: "Software Cost", inHouse: "Paid separately", accountant: "Xero access included" },
  { area: "Scalability", inHouse: "Harder to scale", accountant: "Upgrade package as you grow" },
];
const process = [
  { step: "01", title: "Free Consultation", description: "We review your transaction volume and bookkeeping needs." },
  { step: "02", title: "Package Selection", description: "We recommend the most affordable fit for your business." },
  { step: "03", title: "System Setup", description: "We set up Xero and connect your bank feeds." },
  { step: "04", title: "Bookkeeping", description: "We record and reconcile transactions on your schedule." },
  { step: "05", title: "Reporting", description: "You receive clear, accurate monthly reports." },
  { step: "06", title: "Review", description: "We check in regularly to keep pricing fair as you grow." },
];
const faqs = [
  { question: "What makes bookkeeping accurate?", answer: "Accuracy comes from consistent reconciliation, reviewed entries and a dedicated bookkeeper checking every transaction before books are closed." },
  { question: "How affordable is bookkeeping in Dubai?", answer: "Our packages start at a fixed low monthly fee with no hidden costs, scaled to your transaction volume." },
  { question: "Are there any hidden fees?", answer: "No, our pricing is fixed and transparent. Xero access and monthly reporting are included in every package." },
  { question: "Can I upgrade my package later?", answer: "Yes, you can move between Starter, Growth and Pro packages as your transaction volume changes." },
  { question: "Is bookkeeping mandatory in the UAE?", answer: "Yes — and skipping it doesn't save money long-term, since messy books lead to rushed, expensive clean-up work before VAT deadlines or audits." },
  { question: "How do I start?", answer: "Book a free consultation and we will recommend the most affordable, accurate package for your business." },
];
const usefulLinks = [
  { text: "Bookkeeping Firm in Dubai", href: "/services/bookkeeping-firm-dubai" },
  { text: "Premier Accounting Services in Dubai", href: "/services/premier-accounting-services-in-dubai" },
  { text: "VAT Registration and Returns", href: "/services#vat" },
  { text: "Xero Accountant Dubai", href: "/services#xero" },
  { text: "Federal Tax Authority", href: "https://tax.gov.ae" },
];

const Page = () => {
  return (
    <>
      <section className="bg-midnight_text dark:bg-darkmode text-center md:py-28 py-20 md:pt-44 pt-36 px-4">
        <h1 className="text-white md:text-[52px] text-4xl font-bold leading-tight max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
          Accurate and Affordable Bookkeeping in Dubai
        </h1>
        <p className="text-white/70 md:text-xl text-lg max-w-2xl mx-auto my-7" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          Fixed, transparent pricing and error-free books for startups and SMEs. No hidden fees, no surprises.
        </p>
        <div className="flex flex-wrap gap-4 justify-center" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
          <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Get a Free Quote</Link>
          <Link href="/contact" className="border border-white/40 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10">Speak With a Bookkeeper</Link>
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
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">WHY CHOOSE US</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Accurate books, without the enterprise price tag.</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Bookkeeping discipline and transparent pricing built for startups and SMEs.</p>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Simple, fixed bookkeeping packages</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Pick a package that fits your transaction volume. Upgrade anytime as you grow.</p>
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
          <span className="bg-white dark:bg-darkmode text-primary font-semibold rounded-full px-6 py-2" data-aos="fade-up" data-aos-duration="1000">INDUSTRIES</span>
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Businesses we support</h2>
          <p className="text-grey dark:text-white/50 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Affordable bookkeeping structured to your industry and transaction volume.</p>
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
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Why outsource bookkeeping?</h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">Get accurate, affordable bookkeeping without the cost of an in-house hire.</p>
          <div className="bg-white/5 rounded-md mt-12 text-left overflow-x-auto" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="grid grid-cols-3 gap-4 px-8 py-6 font-bold text-white border-b border-white/10 min-w-[600px]">
              <span>Area</span><span>In-House Bookkeeper</span><span>The Accountant LLC</span>
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
          <h2 className="text-midnight_text dark:text-white text-3xl md:text-4xl font-bold leading-tight mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">How we get you started</h2>
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
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000">Ready For Accurate, Affordable Bookkeeping?</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mt-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Get a fixed monthly quote with no hidden fees and clean, reconciled books every month.</p>
          <div className="flex flex-wrap gap-4 justify-center mt-8" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <Link href="/contact" className="bg-yellow-400 font-semibold text-midnight_text px-8 py-4 rounded-full hover:opacity-90">Get a Free Quote Today</Link>
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
