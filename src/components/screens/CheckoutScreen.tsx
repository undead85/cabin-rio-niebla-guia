import { CheckCircle } from "@phosphor-icons/react";
import SubHeader from "@/components/ui/SubHeader";
import { CHECKOUT_TIME } from "@/content/site";
import type { CheckoutContent } from "@/content/types";

interface CheckoutScreenProps {
  content: CheckoutContent;
  onBack: () => void;
}

export default function CheckoutScreen({ content, onBack }: CheckoutScreenProps) {
  return (
    <div>
      <SubHeader title={content.title} onBack={onBack} />
      <div className="px-5 pt-6 pb-10">
        <div className="mb-5 flex items-center justify-between rounded-[16px] bg-primary px-5 py-[18px] text-cream">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-accent-light zh:tracking-[0.12em]">
            {content.checkoutLabel}
          </span>
          <span className="text-[20px] font-bold">{CHECKOUT_TIME}</span>
        </div>
        <ul>
          {content.steps.map((s) => (
            <li
              key={s}
              className="flex items-start gap-[13px] border-b border-primary/9 py-[14px]"
            >
              <CheckCircle size={21} className="mt-px flex-none text-accent" />
              <div className="text-[14px] leading-[1.5] font-medium text-foreground">{s}</div>
            </li>
          ))}
        </ul>
        <p className="mx-1.5 mt-6 text-center font-serif text-[17px] leading-[1.5] font-medium italic text-subtle zh:not-italic">
          {content.farewell}
        </p>
      </div>
    </div>
  );
}
