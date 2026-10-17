import { ChatCircleDots, WhatsappLogo } from "@phosphor-icons/react";
import SubHeader from "@/components/ui/SubHeader";
import { WHATSAPP_URL } from "@/content/site";
import type { ContactContent } from "@/content/types";

interface ContactScreenProps {
  content: ContactContent;
  onBack: () => void;
}

export default function ContactScreen({ content, onBack }: ContactScreenProps) {
  return (
    <div>
      <SubHeader title={content.title} onBack={onBack} />
      <div className="px-5 pt-[30px] pb-10 text-center">
        <div className="mx-auto mb-[18px] grid h-[72px] w-[72px] place-items-center rounded-full bg-primary text-accent-light">
          <ChatCircleDots size={34} />
        </div>
        <div className="font-serif text-[26px] font-medium text-primary">{content.name}</div>
        <div className="mt-1 text-[10px] font-semibold tracking-[0.3em] text-accent zh:tracking-[0.16em]">
          {content.role}
        </div>
        <p className="mx-auto mt-[18px] mb-[26px] max-w-[280px] text-[14px] leading-[1.6] text-subtle">
          {content.message}
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-[10px] rounded-[14px] bg-accent p-4 text-[13px] font-bold tracking-[0.06em] text-white"
        >
          <WhatsappLogo size={20} />
          {content.cta}
        </a>
      </div>
    </div>
  );
}
