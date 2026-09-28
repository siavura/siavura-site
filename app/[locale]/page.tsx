import Image from "next/image";
import Link from "next/link";
import { Mark } from "@/components/Logo";
import { getCopy } from "@/lib/copy";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = getCopy(locale);

  return (
    <main>
      <section id="home" className="relative flex min-h-[92svh] items-end overflow-hidden border-b border-white/10 px-5 pb-14 pt-28 lg:min-h-screen lg:px-8 lg:pb-16">
        <div className="hero-radiance absolute inset-0" />
        <div className="grid-bg absolute inset-0 opacity-40" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:gap-20">
          <div className="max-w-4xl fade-up">
            <div className="mb-7 flex items-center gap-4 text-[10px] uppercase tracking-[0.32em] text-[#d9b872]">
              <span className="h-px w-14 bg-[#d9b872]/70" />
              <span>{c.hero.eyebrow}</span>
            </div>

            <div className="mb-7 flex items-center gap-5 text-[#ead5a7]">
              <Mark />
              <div className="h-px w-20 bg-gradient-to-r from-[#d9b872]/60 to-transparent" />
            </div>

            <h1 className="display-font max-w-4xl text-[3.7rem] leading-[.9] text-[#f4ede1] sm:text-6xl lg:text-[8rem]">
              SIAVURA
              <span className="mt-5 block text-[0.22em] font-sans font-light uppercase tracking-[0.42em] text-[#ead5a7]/80 sm:mt-7">
                Intelligence in Action.
              </span>
            </h1>

            <p className="mt-9 max-w-xl text-base leading-8 text-white/58 sm:text-lg">{c.hero.body}</p>

            <Link
              href={`/${locale}#story`}
              className="mt-9 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-white/70 transition hover:text-white"
            >
              <span className="h-8 w-px bg-[#d9b872]/70" />
              {c.hero.cue}
              <span className="text-[#d9b872]">↓</span>
            </Link>
          </div>

          <div className="relative flex w-full items-end lg:pb-2">
            <div className="ml-auto max-w-sm text-right">
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/25">{locale === "it" ? "Tre fasi" : "Three stages"}</div>
              <div className="mt-5 h-px w-full bg-gradient-to-l from-[#d9b872]/50 to-transparent" />
              <p className="mt-5 text-sm leading-7 text-white/35">
                {locale === "it"
                  ? "Percezione. Comprensione. Trasformazione. Una direzione: l'azione."
                  : "Perception. Understanding. Transformation. One direction: action."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="relative overflow-hidden border-b border-white/10 px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.45fr_1.55fr] lg:items-end">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">{c.intro.kicker}</div>
              <div className="mt-7 h-px w-20 bg-[#d9b872]/70" />
            </div>
            <div className="max-w-4xl">
              <h2 className="display-font text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">{c.intro.title}</h2>
              <p className="mt-8 max-w-3xl text-base leading-8 text-white/55 sm:text-lg">{c.intro.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="story-track bg-[#070707]" aria-label={locale === "it" ? "Percorso SIAVURA" : "SIAVURA process"}>
        {c.stages.map((stage, index) => (
          <article key={`${stage.number}-${index}`} className="stage-panel relative scroll-mt-20 border-b border-white/10">
            <div className={`mx-auto grid min-h-[132svh] max-w-[1800px] items-start lg:grid-cols-[1.15fr_.85fr] ${index % 2 ? "lg:grid-cols-[.85fr_1.15fr]" : ""}`}>
              <div className={`stage-visual-wrap relative min-h-[68svh] overflow-hidden lg:sticky lg:top-[72px] lg:h-[calc(100svh-72px)] lg:min-h-0 ${index % 2 ? "lg:order-2" : ""}`}>
                <div className="stage-glow absolute inset-0" />
                <div className="absolute inset-0 bg-[#050505]" />
                <Image
                  src={stage.image}
                  alt={stage.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="stage-image object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/5" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,transparent_28%,rgba(0,0,0,.18)_54%,rgba(0,0,0,.62)_100%)]" />

                <div className="absolute left-6 top-7 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/55 lg:left-10 lg:top-10">
                  <span>{stage.number}</span>
                  <span className="h-px w-16 bg-[#d9b872]/60" />
                  <span>SIAVURA</span>
                </div>

                <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 -rotate-90 origin-left items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-white/30 lg:flex">
                  <span>01</span><span className={`h-px w-10 ${index >= 0 ? "bg-[#d9b872]/40" : "bg-white/10"}`} /><span>02</span><span className="h-px w-10 bg-white/10" /><span>03</span>
                </div>

                <div className="absolute bottom-7 left-6 right-6 flex items-end justify-between lg:bottom-10 lg:left-10 lg:right-10">
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.26em] text-white/35">{locale === "it" ? "Sistema / Fase" : "System / Stage"}</div>
                    <div className="mt-2 text-sm text-white/65">{stage.subtitle}</div>
                  </div>
                  <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 text-[#ead5a7]/80 backdrop-blur-sm sm:flex">
                    <span className="text-sm">↗</span>
                  </div>
                </div>
              </div>

              <div className={`relative flex min-h-[42svh] items-center px-7 py-20 sm:px-12 lg:min-h-screen lg:px-20 lg:py-24 ${index % 2 ? "lg:order-1" : ""}`}>
                <div className="stage-number-ghost absolute right-6 top-10 select-none lg:right-12 lg:top-14" aria-hidden="true">
                  {stage.number}
                </div>
                <div className="relative max-w-xl">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">
                    <span>{stage.number}</span>
                    <span className="h-px w-14 bg-[#d9b872]/60" />
                    <span className="text-white/30">{c.hero.eyebrow}</span>
                  </div>
                  <h3 className="display-font mt-6 text-5xl leading-[.96] text-white sm:text-6xl lg:text-7xl">{stage.title}</h3>
                  <p className="mt-6 max-w-lg text-xl leading-9 text-[#ead5a7]">{stage.subtitle}</p>
                  <p className="mt-9 max-w-lg text-base leading-8 text-white/55">{stage.body}</p>

                  <div className="mt-14 grid grid-cols-[auto_1fr] gap-5 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.26em] text-white/30">
                    <span>{locale === "it" ? "Principio" : "Principle"}</span>
                    <span>{index === 0 ? (locale === "it" ? "Osservare prima di costruire" : "Observe before building") : index === 1 ? (locale === "it" ? "Dare significato all'informazione" : "Give information meaning") : (locale === "it" ? "Portare l'intuizione nell'esecuzione" : "Bring insight into execution")}</span>
                  </div>

                  <div className="mt-12 flex items-center gap-4 text-[10px] uppercase tracking-[0.26em] text-white/30">
                    <span className="h-px w-10 bg-[#d9b872]/50" />
                    <span>{index < 2 ? (locale === "it" ? "Continua" : "Continue") : (locale === "it" ? "Verso l'azione" : "Toward action")}</span>
                    <span className="text-[#d9b872]/70">↓</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

<section id="signature" className="border-b border-white/10 px-5 py-28 lg:px-8 lg:py-36">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">{c.reveal.kicker}</div>
        <h2 className="display-font mt-6 max-w-3xl text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">{c.reveal.title}</h2>
      </div>
      <p className="max-w-md text-base leading-8 text-white/45">{c.reveal.body}</p>
    </div>

    <div className="signature-gallery mt-16">
      <figure className="signature-feature group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black">
        <div className="signature-feature-media relative overflow-hidden bg-black">
          <Image
            src="/images/signature-triptych-clean.jpg"
            alt={locale === "it" ? "Le tre forme visive di SIAVURA" : "The three visual forms of SIAVURA"}
            width={1785}
            height={500}
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="signature-feature-image h-auto w-full transition duration-[1600ms] ease-out group-hover:scale-[1.008]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
        </div>

        <figcaption className="grid border-t border-white/10 lg:grid-cols-3">
          {(locale === "it"
            ? [
                ["01", "PERCEZIONE", "Vedere ciò che altri non vedono."],
                ["02", "COMPRENSIONE", "Dare significato alla realtà."],
                ["03", "TRASFORMAZIONE", "Dalla conoscenza all'azione."],
              ]
            : [
                ["01", "PERCEPTION", "See what others overlook."],
                ["02", "UNDERSTANDING", "Turn complexity into clarity."],
                ["03", "TRANSFORMATION", "Turn understanding into action."],
              ]
          ).map(([number, title, subtitle], index) => (
            <div key={number} className={`px-6 py-6 sm:px-8 ${index > 0 ? "border-t border-white/10 lg:border-l lg:border-t-0" : ""}`}>
              <div className="text-[9px] uppercase tracking-[0.28em] text-[#d9b872]">{number}</div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-white/80">{title}</div>
              <div className="mt-2 text-sm leading-6 text-white/40">{subtitle}</div>
            </div>
          ))}
        </figcaption>
      </figure>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <SignaturePanel
          src="/images/signature-perception-clean.jpg"
          width={1300}
          height={760}
          alt={locale === "it" ? "Forma visiva della percezione di SIAVURA" : "SIAVURA visual form of perception"}
          label="01"
          title={locale === "it" ? "Percezione" : "Perception"}
          body={locale === "it"
            ? "Vedere prima di costruire. Osservare ciò che resta nascosto nella complessità."
            : "See before building. Notice what remains hidden inside complexity."}
        />
        <SignaturePanel
          src="/images/signature-understanding-clean.jpg"
          width={1354}
          height={640}
          alt={locale === "it" ? "Forma visiva della comprensione di SIAVURA" : "SIAVURA visual form of understanding"}
          label="02"
          title={locale === "it" ? "Comprensione" : "Understanding"}
          body={locale === "it"
            ? "Dare significato all'informazione e connettere ciò che sembra separato."
            : "Give information meaning and connect what appears to be separate."}
        />
        <SignaturePanel
          src="/images/signature-transformation-clean.jpg"
          width={1250}
          height={760}
          alt={locale === "it" ? "Forma visiva della trasformazione di SIAVURA" : "SIAVURA visual form of transformation"}
          label="03"
          title={locale === "it" ? "Trasformazione" : "Transformation"}
          body={locale === "it"
            ? "Portare la comprensione nell'azione e trasformarla in sistemi concreti."
            : "Turn understanding into action and transform it into practical systems."}
        />
      </div>

      <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-[0_36px_100px_rgba(0,0,0,.38)]">
        <div className="relative overflow-hidden bg-black">
          <Image
            src="/images/signature-manifesto-clean.jpg"
            alt={locale === "it" ? "Marchio SIAVURA" : "SIAVURA mark"}
            width={1507}
            height={460}
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="h-auto w-full transition duration-[1600ms] ease-out hover:scale-[1.005]"
          />
        </div>

        <div className="grid gap-6 border-t border-white/10 px-7 py-7 sm:px-10 sm:py-9 lg:grid-cols-[.28fr_1fr] lg:items-start">
          <div className="text-[9px] uppercase tracking-[0.28em] text-white/30">{locale === "it" ? "Firma" : "Signature"}</div>
          <div>
            <p className="max-w-4xl text-base leading-8 text-white/55">
              {locale === "it"
                ? "Un simbolo che unisce percezione, comprensione e trasformazione in una sola direzione: l'azione."
                : "A symbol that brings perception, understanding and transformation into a single direction: action."}
            </p>
            <p className="display-font mt-7 text-2xl italic text-[#ead5a7]">“{c.reveal.quote}”</p>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-10 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[.28fr_1fr]">
      <div className="text-[9px] uppercase tracking-[0.28em] text-white/30">{locale === "it" ? "Origine" : "Origin"}</div>
      <div className="max-w-4xl">
        <p className="text-base leading-8 text-white/55">
          {locale === "it"
            ? "SIAVURA è un nome moderno costruito attorno a una visione antica. Prende ispirazione da Sia, concetto dell'antico Egitto associato alla percezione e alla comprensione, e da Hu, associato alla parola creativa e all'atto di dare forma attraverso l'espressione. Non è una traduzione letterale dell'antico egizio: è una reinterpretazione moderna dell'idea di percepire, comprendere e trasformare."
            : "SIAVURA is a modern name built around an ancient idea. It draws inspiration from Sia, an ancient Egyptian concept associated with perception and understanding, and Hu, associated with creative utterance and the act of giving form through expression. It is not a literal Ancient Egyptian translation: it is a modern reinterpretation of the idea to perceive, understand and transform."}
        </p>
        <p className="display-font mt-7 text-2xl italic text-[#ead5a7]">
          {locale === "it" ? "Da percezione ad azione." : "From perception to action."}
        </p>
      </div>
    </div>

    <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1fr_auto] lg:items-center">
      <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.28em] text-white/25">
        <span>{locale === "it" ? "Tre forme. Un simbolo." : "Three forms. One symbol."}</span>
        <span className="h-px w-12 bg-[#d9b872]/35" />
      </div>
      <p className="max-w-xl text-right text-sm leading-7 text-white/35">
        {locale === "it"
          ? "Le immagini non spiegano il simbolo. Lo fanno riconoscere."
          : "The images do not explain the symbol. They let you recognize it."}
      </p>
    </div>
  </div>
</section>

      <section id="solutions" className="border-b border-white/10 px-5 py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">{c.solutions.kicker}</div>
            <h2 className="display-font mt-6 text-4xl leading-tight text-white sm:text-5xl">{c.solutions.title}</h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/55">{c.solutions.body}</p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {c.solutions.items.map(([title, body], index) => (
              <div key={title} className="group bg-[#080808] p-8 transition hover:bg-[#0d0d0d] sm:p-9">
                <div className="flex items-start justify-between gap-8">
                  <div className="text-[10px] uppercase tracking-[0.28em] text-[#d9b872]">{title}</div>
                  <span className="text-[10px] text-white/20">0{index + 1}</span>
                </div>
                <p className="mt-12 max-w-xs text-sm leading-7 text-white/55">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-white/10 px-5 py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">{c.projects.kicker}</div>
            <h2 className="display-font mt-6 text-4xl text-white sm:text-5xl">{c.projects.title}</h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/55">{c.projects.body}</p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <ProjectCard href={`/${locale}/projects/cmi`} data={c.projects.cmi} />
            <ProjectCard href={`/${locale}/projects`} data={c.projects.expense} />
            <ProjectCard href={`/${locale}/projects`} data={c.projects.future} />
          </div>
          <div className="mt-10">
            <Link href={`/${locale}/projects`} className="text-[11px] uppercase tracking-[0.25em] text-[#ead5a7] hover:text-white">
              {c.projects.view} →
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10 px-5 py-28 lg:px-8 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">{c.about.kicker}</div>
          <div>
            <h2 className="display-font max-w-3xl text-4xl leading-tight text-white sm:text-5xl">{c.about.title}</h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55">{c.about.body}</p>
            <Link href={`/${locale}/about`} className="mt-10 inline-flex text-[11px] uppercase tracking-[0.25em] text-[#ead5a7] hover:text-white">
              {c.about.button} →
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-28 lg:px-8 lg:py-36">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">{c.contact.kicker}</div>
            <h2 className="display-font mt-6 max-w-3xl text-5xl leading-tight text-white sm:text-6xl">{c.contact.title}</h2>
            <p className="mt-5 text-lg text-white/55">{c.contact.body}</p>
          </div>
          <div className="text-left lg:text-right">
            <a href={`mailto:${c.contact.email}`} className="block text-2xl text-[#ead5a7] hover:text-white">{c.contact.email}</a>
            <Link href={`/${locale}/contact`} className="mt-6 inline-flex text-[11px] uppercase tracking-[0.25em] text-white/55 hover:text-white">
              {c.contact.button} →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SignaturePanel({
  src,
  width,
  height,
  alt,
  label,
  title,
  body,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  title: string;
  body: string;
}) {
  return (
    <article className="signature-panel group overflow-hidden rounded-[1.75rem] border border-white/10 bg-black">
      <div className="relative overflow-hidden bg-black">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 1024px) 100vw, 600px"
          className="h-auto w-full transition duration-[1500ms] ease-out group-hover:scale-[1.012]"
        />
        <div className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.28em] text-white/45 lg:left-7 lg:top-7">{label}</div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 sm:px-7 sm:py-7">
        <div className="flex items-baseline justify-between gap-6">
          <h3 className="display-font text-3xl leading-none text-white sm:text-4xl">{title}</h3>
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#d9b872]/60">SIAVURA</span>
        </div>
        <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">{body}</p>
      </div>
    </article>
  );
}

function ProjectCard({ href, data }: { href: string; data: { label: string; title: string; body: string } }) {
  return (
    <Link href={href} className="group rounded-3xl border border-white/10 bg-white/[.02] p-8 transition hover:border-[#d9b872]/30 hover:bg-white/[.04]">
      <div className="text-[10px] uppercase tracking-[0.26em] text-[#d9b872]">{data.label}</div>
      <h3 className="mt-12 text-2xl text-white">{data.title}</h3>
      <p className="mt-5 text-sm leading-7 text-white/50">{data.body}</p>
      <div className="mt-10 text-sm text-white/35 transition group-hover:text-[#ead5a7]">View →</div>
    </Link>
  );
}
