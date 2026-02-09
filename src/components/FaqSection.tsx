import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "Can I customize the design of a home?", answer: "Absolutely! We offer full customization options for every home, from floor plans to interior finishes. Our design team works closely with you to bring your vision to life." },
  { question: "What is the process for purchasing a home?", answer: "Our purchasing process is streamlined and transparent. It begins with a consultation, followed by property selection, design customization, and finally closing. We guide you every step of the way." },
  { question: "Do you offer fully custom-built homes?", answer: "Yes, we specialize in fully custom-built homes tailored to your exact specifications. From architectural design to material selection, every detail is crafted to your preferences." },
  { question: "How long does it take to complete a home?", answer: "Typically, our homes take 8-14 months to complete, depending on the complexity of the design and customization requirements. We provide detailed timelines during the planning phase." },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 bg-secondary">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Faq</p>
          <h2 className="section-heading mb-4">You asked, We Answered</h2>
          <p className="section-subheading">
            Still got questions? Feel free to reach out to our incredible support team, 7 days a week.
          </p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-sm font-medium text-foreground">{faq.question}</span>
                {openIndex === i ? (
                  <Minus size={18} className="text-muted-foreground flex-shrink-0" />
                ) : (
                  <Plus size={18} className="text-muted-foreground flex-shrink-0" />
                )}
              </button>
              {openIndex === i && (
                <div className="pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
