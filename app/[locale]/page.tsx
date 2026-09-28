import Image from "next/image";
import Link from "next/link";
import { Mark } from "@/components/Logo";
import { getCopy } from "@/lib/copy";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const c = getCopy(locale);

  return (
    <main>
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 px-5 pt-28 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(217,184,114,.14),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(50,70,100,.16),transparent_28%)]" />
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 py-24 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="max-w-3xl fade-up">
            <div className="mb-7 flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">
              <span className="h-px w-16 bg-[#d9b872]/70" />
              <span>{c.hero.eyebrow}</span>
            </div>
            <h1 className="display-font max-w-3xl text-6xl leading-[.92] text-[#f4ede1] sm:text-7xl lg:text-[7.5rem]">{c.hero.title}</h1>
            <p className="mt-10 max-w-xl text-base leading-8 text-white/60 sm:text-lg">{c.hero.body}</p>
            <Link href={`/${locale}#story`} className="mt-10 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-white/70 hover:text-white">
              <span className="h-8 w-px bg-[#d9b872]/70" />
              {c.hero.cue}
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-xl">
            <div className="absolute -inset-16 rounded-full bg-[#d9b872]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/70 shadow-2xl shadow-black/60">
              <Image src="/images/siavura-mark.jpg" alt="SIAVURA symbol" width={512} height={305} className="h-auto w-full object-cover opacity-90" priority />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/30 to-transparent p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-[#d9b872]">SIAVURA</div>
                    <div className="text-sm text-white/55">From perception to action.</div>
                  </div>
                  <Mark small />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="border-b border-white/10 px-5 py-28 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">{c.intro.kicker}</div>
          <h2 className="display-font mt-6 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">{c.intro.title}</h2>
          <div className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/55">{c.intro.body}</div>
        </div>
      </section>

      <section className="bg-[#070707]">
        {c.stages.map((stage, index) => (
          <article key={stage.number} className="grid min-h-[86vh] border-b border-white/10 lg:grid-cols-2">
            <div className={`relative min-h-[52vh] overflow-hidden ${index % 2 ? "lg:order-2" : ""}`}>
              <Image src={stage.image} alt={stage.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-90 transition duration-1000 hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/15" />
              <div className="absolute left-6 top-6 text-[10px] uppercase tracking-[0.3em] text-white/55 lg:left-10 lg:top-10">{stage.number}</div>
            </div>
            <div className={`flex items-center px-7 py-16 sm:px-12 lg:px-20 ${index % 2 ? "lg:order-1" : ""}`}>
              <div className="max-w-xl">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">
                  <span>{stage.number}</span>
                  <span className="h-px w-14 bg-[#d9b872]/60" />
                </div>
                <h3 className="display-font mt-5 text-5xl text-white sm:text-6xl">{stage.title}</h3>
                <p className="mt-4 text-lg leading-8 text-[#ead5a7]">{stage.subtitle}</p>
                <p className="mt-8 max-w-lg text-base leading-8 text-white/55">{stage.body}</p>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="relative overflow-hidden border-b border-white/10 px-5 py-28 lg:px-8 lg:py-40">
        <div className="absolute inset-0 opacity-25"><Image src="/images/siavura-triptych.jpg" alt="" fill sizes="100vw" className="object-cover" /></div>
        <div className="absolute inset-0 bg-[#050505]/85" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">{c.reveal.kicker}</div>
          <h2 className="display-font mt-7 text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">{c.reveal.title}</h2>
          <div className="hairline reveal-line mx-auto mt-10 max-w-lg" />
          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-white/55">{c.reveal.body}</p>
          <p className="display-font mt-10 text-2xl italic text-[#ead5a7]">“{c.reveal.quote}”</p>
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
            {c.solutions.items.map(([title, body]) => (
              <div key={title} className="bg-[#080808] p-8 transition hover:bg-[#0d0d0d]">
                <div className="mb-10 text-[10px] uppercase tracking-[0.28em] text-[#d9b872]">{title}</div>
                <p className="max-w-xs text-sm leading-7 text-white/55">{body}</p>
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
          <div className="mt-10"><Link href={`/${locale}/projects`} className="text-[11px] uppercase tracking-[0.25em] text-[#ead5a7] hover:text-white">{c.projects.view} →</Link></div>
        </div>
      </section>

      <section id="about" className="border-b border-white/10 px-5 py-28 lg:px-8 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#d9b872]">{c.about.kicker}</div>
          <div>
            <h2 className="display-font max-w-3xl text-4xl leading-tight text-white sm:text-5xl">{c.about.title}</h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/55">{c.about.body}</p>
            <Link href={`/${locale}/about`} className="mt-10 inline-flex text-[11px] uppercase tracking-[0.25em] text-[#ead5a7] hover:text-white">{c.about.button} →</Link>
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
            <Link href={`/${locale}/contact`} className="mt-6 inline-flex text-[11px] uppercase tracking-[0.25em] text-white/55 hover:text-white">{c.contact.button} →</Link>
          </div>
        </div>
      </section>
    </main>
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
