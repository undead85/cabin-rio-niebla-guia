import { ArrowLeft } from "@phosphor-icons/react";
import LocaleToggle from "@/components/ui/LocaleToggle";
import { useLocale } from "@/components/useLocale";
import { guides } from "@/content/guide";

interface SubHeaderProps {
  title: string;
  onBack: () => void;
}

export default function SubHeader({ title, onBack }: SubHeaderProps) {
  const locale = useLocale();
  const { ui } = guides[locale];

  return (
    <div className="sticky top-0 z-[5] flex items-center gap-[14px] bg-primary p-[18px] text-cream">
      <button
        type="button"
        onClick={onBack}
        aria-label={ui.backLabel}
        className="grid h-[38px] w-[38px] flex-none cursor-pointer appearance-none place-items-center rounded-[11px] border-none bg-cream/10 text-cream"
      >
        <ArrowLeft size={22} />
      </button>
      <h2 className="text-[17px] font-bold tracking-[0.02em]">{title}</h2>
      <div className="ml-auto">
        <LocaleToggle />
      </div>
    </div>
  );
}
