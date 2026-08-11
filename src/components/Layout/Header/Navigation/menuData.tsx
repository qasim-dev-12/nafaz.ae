import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Tax Services",
    href: "/services",
    submenu: [
      { label: "VAT Registration & Returns", href: "/services/vat-registration-return-filing-dubai" },
      { label: "Corporate Tax Registration & Filing", href: "/services/corporate-tax-registration-filing-dubai" },
      { label: "Tax Residency Certificates", href: "/services/tax-residency-certificate-services-dubai" },
      { label: "Transfer Pricing", href: "/services/transfer-pricing-services-dubai" },
      { label: "Excise Tax", href: "/services/excise-tax-services-dubai" },
      { label: "Tax Audit & Assurance", href: "/services/tax-audit-assurance-services-dubai" },
    ],
  },
  {
    label: "Accounting Services",
    href: "/services",
    submenu: [
      { label: "Premier Accounting Services", href: "/services/premier-accounting-services-in-dubai" },
      { label: "Accounting Services in Abu Dhabi", href: "/services/accounting-services-in-abu-dhabi" },
      { label: "Accounting Services in Sharjah", href: "/services/accounting-services-in-sharjah" },
      { label: "Amazon Accounting Dubai", href: "/services/amazon-accounting-dubai" },
      { label: "Ecommerce Accounting", href: "/services/ecommerce-accounting-dubai" },
      { label: "Bookkeeping Firm in Dubai", href: "/services/bookkeeping-firm-dubai" },
      { label: "Accurate and Affordable Bookkeeping", href: "/services/accurate-affordable-bookkeeping-dubai" },
      { label: "Payroll (WPS)", href: "/services/payroll-services-dubai" },
      { label: "Financial Statements", href: "/services/financial-statement-services-dubai" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
