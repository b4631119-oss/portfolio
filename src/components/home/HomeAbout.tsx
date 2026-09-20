import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { getDictionary } from "@/i18n";

const d = getDictionary();

export function HomeAbout() {
  return (
    <section className="mt-24 md:mt-32" id="about" aria-labelledby="about-heading">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <Reveal>
          <h2 id="about-heading" className="font-mono text-xs tracking-widest text-muted uppercase mb-6">
            {d.home.aboutTitle}
          </h2>
          <div className="mt-6 space-y-4 text-lg text-muted max-w-2xl leading-relaxed">
            <p>
              {d.home.aboutIntro}
            </p>
            <p>
              {d.home.aboutDetails}
            </p>
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg" className="font-bold font-mono text-sm tracking-wider">
              <Link href="/about">{d.buttons.details}</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
