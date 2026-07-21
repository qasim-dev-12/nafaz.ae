"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion = ({ items }: { items: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-section dark:bg-darklight rounded-md shadow-service overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="w-full text-left flex justify-between items-center px-8 py-6 font-bold text-midnight_text dark:text-white"
            >
              {item.question}
              <span className="text-primary">{isOpen ? "▾" : "▸"}</span>
            </button>
            {isOpen && (
              <p className="px-8 pb-6 text-grey dark:text-white/50">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
