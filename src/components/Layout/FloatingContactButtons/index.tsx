'use client'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'

const FloatingContactButtons = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full flex justify-around gap-2.5 z-[2147483647] shadow-[0_-3px_12px_rgba(0,0,0,0.2)] bg-white dark:bg-darkmode px-3 py-2.5">
      <Link
        href="https://wa.me/9714XXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="animate-wobble-left flex-1 flex items-center justify-center gap-2 rounded-lg py-3 px-2.5 text-sm font-bold text-white bg-[#25D366] shadow-[0_6px_18px_rgba(0,0,0,0.22)]">
        <Icon icon="ic:baseline-whatsapp" className="text-xl" />
        WhatsApp
      </Link>
      <Link
        href="tel:+9714XXXXXXX"
        className="animate-wobble-left flex-1 flex items-center justify-center gap-2 rounded-lg py-3 px-2.5 text-sm font-bold text-white bg-primary shadow-[0_6px_18px_rgba(0,0,0,0.22)]">
        <Icon icon="ic:baseline-call" className="text-xl" />
        Call Us
      </Link>
    </div>
  )
}

export default FloatingContactButtons
