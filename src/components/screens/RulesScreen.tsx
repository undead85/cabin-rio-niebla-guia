import SubHeader from "@/components/ui/SubHeader";
import type { RulesContent } from "@/content/types";

interface RulesScreenProps {
  content: RulesContent;
  onBack: () => void;
}

export default function RulesScreen({ content, onBack }: RulesScreenProps) {
  return (
    <div>
      <SubHeader title={content.title} onBack={onBack} />
      <div className="px-5 pt-6 pb-10">
        <div>
          {content.sections.map((section) => (
            <div key={section.title}>
              <h3 className="mt-6 mb-2 text-[11px] font-semibold tracking-[0.3em] text-accent zh:tracking-[0.16em]">
                {section.title.toUpperCase()}
              </h3>
              <ul>
                {section.items.map((r) => (
                  <li
                    key={r.title}
                    className="flex items-start gap-[13px] border-b border-primary/9 py-[15px]"
                  >
                    <r.icon size={21} className="mt-px flex-none text-accent" />
                    <div>
                      <div className="text-[14px] font-semibold text-primary">{r.title}</div>
                      {r.note ? (
                        <div className="mt-0.5 text-[12.5px] leading-[1.5] text-muted-foreground">
                          {r.note}
                        </div>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mx-1.5 mt-6 text-center font-serif text-[16px] leading-[1.5] font-medium italic text-subtle zh:not-italic">
          {content.farewell}
        </p>
      </div>
    </div>
  );
}
