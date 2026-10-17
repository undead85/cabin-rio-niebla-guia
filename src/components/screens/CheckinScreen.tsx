import { Car } from "@phosphor-icons/react";
import SubHeader from "@/components/ui/SubHeader";
import { CHECKIN_TIME, CHECKOUT_TIME } from "@/content/site";
import type { CheckinContent } from "@/content/types";

interface CheckinScreenProps {
  content: CheckinContent;
  onBack: () => void;
}

export default function CheckinScreen({ content, onBack }: CheckinScreenProps) {
  return (
    <div>
      <SubHeader title={content.title} onBack={onBack} />
      <div className="px-5 pt-6 pb-10">
        <div className="mb-5 flex gap-[11px]">
          <div className="flex-1 rounded-[16px] border border-primary/8 bg-surface p-[18px] text-center">
            <div className="mb-[7px] text-[9px] font-semibold tracking-[0.24em] text-accent zh:tracking-[0.14em]">
              {content.arrivalLabel}
            </div>
            <div className="text-[22px] font-bold">{CHECKIN_TIME}</div>
          </div>
          <div className="flex-1 rounded-[16px] border border-primary/8 bg-surface p-[18px] text-center">
            <div className="mb-[7px] text-[9px] font-semibold tracking-[0.24em] text-accent zh:tracking-[0.14em]">
              {content.departureLabel}
            </div>
            <div className="text-[22px] font-bold">{CHECKOUT_TIME}</div>
          </div>
        </div>
        <div className="mb-[14px] text-[11px] font-semibold tracking-[0.3em] text-accent zh:tracking-[0.16em]">
          {content.stepsLabel}
        </div>
        <ol className="flex flex-col gap-3">
          {content.steps.map((step, i) => (
            <li
              key={step}
              className="flex gap-[14px] rounded-[14px] border border-primary/8 bg-surface p-4"
            >
              <div className="grid h-[26px] w-[26px] flex-none place-items-center rounded-full bg-primary text-[12px] font-bold text-white">
                {i + 1}
              </div>
              <div className="text-[14px] leading-[1.5] text-foreground">{step}</div>
            </li>
          ))}
        </ol>
        <div className="mt-[18px] flex items-center gap-3 rounded-[14px] bg-muted px-4 py-[15px]">
          <Car size={22} className="flex-none text-primary" />
          <div className="text-[13px] leading-[1.4] font-medium text-foreground">
            {content.parkingNote}
          </div>
        </div>
      </div>
    </div>
  );
}
