import { profile } from "@/constants/profile";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Icon } from "@/components/ui/Icon";

export function Contact() {
  const email = profile.social.find((item) => item.icon === "email");

  return (
    <Section
      id="contact"
      eyebrow="05 · Contact"
      title="Let's build something reliable together."
      description="Open to senior backend roles, technical leadership and freelance engagements. Remote-friendly, currently based in Bangkok."
    >
      <div className="overflow-hidden rounded-3xl border border-border bg-surface">
        <div className="grid gap-10 p-8 md:grid-cols-5 md:p-10">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
              Best way to reach me
            </p>
            {email ? (
              <a
                href={email.href}
                className="mt-3 inline-flex items-center gap-3 text-2xl font-semibold text-text-strong transition-colors hover:text-accent md:text-3xl"
              >
                <Icon name="email" size={22} />
                {email.value}
              </a>
            ) : null}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text">
              I usually reply within 24 hours. Feel free to share project
              details, role specifics or just say hi.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-text-muted">
              Elsewhere
            </p>
            <div className="mt-4">
              <SocialLinks items={profile.social} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
