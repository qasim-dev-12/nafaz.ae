import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Tax Services",
    href: "/services",
    submenu: [
      { label: "VAT Registration & Returns", href: "/services#vat" },
      { label: "Corporate Tax Registration & Filing", href: "/services#corporate-tax" },
      { label: "Tax Residency Certificates", href: "/services#trc" },
      { label: "Transfer Pricing", href: "/services#transfer-pricing" },
      { label: "Excise Tax", href: "/services#excise-tax" },
      { label: "Tax Audit & Assurance", href: "/services#audit" },
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
      { label: "Bookkeeping", href: "/services#bookkeeping" },
      { label: "Payroll (WPS)", href: "/services#payroll" },
      { label: "Financial Statements", href: "/services#financial-statements" },
      { label: "Xero Cloud Accounting", href: "/services#xero" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
