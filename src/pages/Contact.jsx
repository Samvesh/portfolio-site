import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Page, PageHeader } from "../components/Page.jsx";
import TiltCard from "../components/TiltCard.jsx";
import { contact } from "../data/portfolio.js";

const contactItems = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: Mail },
  { label: "GitHub", value: contact.github, href: contact.github, icon: Github },
  { label: "LinkedIn", value: contact.linkedinLabel, href: contact.linkedin, icon: Linkedin },
  { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "Location", value: contact.location, icon: MapPin },
];

export default function Contact() {
  return (
    <Page>
      <PageHeader eyebrow="Contact" title="channel_open: true">
        <p>
          Direct contact details from the resume and provided portfolio brief. The LinkedIn text stays
          clean, while the click target opens the updated full profile link.
        </p>
      </PageHeader>

      <section className="grid gap-5 md:grid-cols-2">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          const content = (
            <TiltCard delay={index * 0.04} className={index === 0 ? "panel-hot h-full p-7" : "h-full p-7"}>
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-cyan-100/20 bg-cyan-100/10 text-cyan-100">
                  <Icon size={22} />
                </div>
                <div className="min-w-0">
                  <p className="mono text-sm font-bold uppercase tracking-[0.22em] text-[#00D4FF]">{item.label}</p>
                  <p className="mono mt-3 break-words text-lg font-bold text-cyan-50">{item.value}</p>
                </div>
              </div>
            </TiltCard>
          );

          if (!item.href) return <div key={item.label}>{content}</div>;

          return (
            <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {content}
            </a>
          );
        })}
      </section>
    </Page>
  );
}
