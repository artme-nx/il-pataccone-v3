import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";

const IMG = {
  hero: "https://images.unsplash.com/photo-1781457589316-0f42ad81dfb1",
  storyArch: "https://images.unsplash.com/photo-1672596468079-2a257c139ede",
  stoneAlcove: "https://images.unsplash.com/photo-1782177262179-06d443bab340",
  stoneWindow: "https://images.unsplash.com/photo-1777408575531-934a7dc5cc91",
  lights: "https://images.unsplash.com/photo-1765933431810-8152aa9f8264",
  marina: "https://images.unsplash.com/photo-1758706336889-cfd252afdee4",
  octopus: "https://images.unsplash.com/photo-1782174177422-5c7e56fbdd56",
  diningRoom: "https://images.unsplash.com/photo-1758243488328-148e39e5e6b1",
  pasticada: "https://images.unsplash.com/photo-1769773183948-d24e3c5a2b82",
  mussels: "https://images.unsplash.com/photo-1710775694428-5f6e66ae6a4c",
  risotto: "https://images.unsplash.com/photo-1584813913372-be62cea35dcd",
  grilledFish: "https://images.unsplash.com/photo-1761950190821-970680100a22",
  rozata: "https://images.unsplash.com/photo-1695649920693-58e7aec67ae2",
};

function img(url: string, w: number, q = 80) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const MENU = [
  {
    cat: "Za početak",
    image: IMG.mussels,
    dishes: [
      { name: "Dagnje na buzaru", desc: "S bijelim vinom, češnjakom i domaćim kruhom za umakanje." },
      { name: "Hobotnica salata", desc: "S krumpirom, crvenim lukom i našim maslinovim uljem." },
      { name: "Domaća pjat", desc: "Pršut, sir iz zaleđa i masline, uz kruh iz naše peći." },
      { name: "Škampi na žaru", desc: "S češnjakom, peršinom i kapljicom limuna." },
    ],
  },
  {
    cat: "Iz mora",
    image: IMG.risotto,
    dishes: [
      { name: "Crni rižot", desc: "Bojan sipinim crnilom, bogat svježim plodovima mora." },
      { name: "Tjestenina sa škampima", desc: "Na buzaru, s rajčicom, bijelim vinom i domaćim tijestom." },
      { name: "Brudet od bijele ribe", desc: "Polako kuhan, servira se uz palentu." },
      { name: "Rižot od škampa", desc: "Kremast, s naznakom konjaka i svježim peršinom." },
    ],
  },
  {
    cat: "S gradela i ispod peke",
    image: IMG.grilledFish,
    dishes: [
      { name: "Riba s gradela", desc: "Ulov dana, samo sol, ulje i grana ružmarina." },
      { name: "Janjetina ispod peke", desc: "Sočna, s krumpirom — naručuje se dan ranije." },
      { name: "Pašticada s njokima", desc: "Govedina polako pirjana u vinu i suhim šljivama, domaći njoki." },
      { name: "Miješano meso s gradela", desc: "Izbor domaćeg mesa, sezonsko povrće, umak po želji." },
    ],
  },
  {
    cat: "Za kraj",
    image: IMG.rozata,
    dishes: [
      { name: "Rožata", desc: "Stari zadarski recept, kora limuna i karamel kuhan polako." },
      { name: "Palačinke s orasima", desc: "Domaći pekmez, čokolada i mljeveni orasi." },
      { name: "Kolač dana", desc: "Mijenja se prema raspoloženju naše kuhinje." },
    ],
  },
];

const GALLERY = [
  { src: IMG.stoneAlcove, alt: "Kamena niša s vinovom lozom u dvorištu konobe", tall: true },
  { src: IMG.stoneWindow, alt: "Pogled kroz kameni prozor na zelenu terasu" },
  { src: IMG.lights, alt: "Svjetla obješena preko starog kamenog svoda" },
  { src: IMG.marina, alt: "Male barke usidrene u tihoj uvali", wide: true },
  { src: IMG.octopus, alt: "Hobotnica na žaru s maslinovim uljem" },
  { src: IMG.diningRoom, alt: "Topla konobska soba s drvenim gredama" },
  { src: IMG.pasticada, alt: "Pašticada s umakom na tanjuru", wide: true },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            id="heroImg"
            src={img(IMG.hero, 1900)}
            alt="Kamena terasa konobe Il Pataccone u sumrak, obasjana toplim svjetlom"
            className="h-full w-full object-cover scale-[1.14] will-change-transform"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-vignette)" }} />
          <div className="absolute inset-0" style={{ background: "var(--hero-glow)" }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
          <span className="text-label reveal block mb-5" style={{ color: "var(--patina)" }}>
            Konoba · Sv. Filip i Jakov
          </span>
          <h1
            className="font-display reveal max-w-[17ch]"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)", color: "var(--foreground)" }}
          >
            Stari kamen, <em className="italic" style={{ color: "var(--patina)" }}>tiha</em> večer, dobar stol.
          </h1>
          <p className="reveal mt-6 max-w-[44ch] text-[1.05rem]" style={{ color: "var(--stone-300, #D9C89E)" }}>
            Obiteljska konoba iz 1960-ih, obnovljena uz kamenu terasu i svjetlo svijeća. Riba iz mora, domaći recepti i večeri koje se ne žuri.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#lokacija"
              className="rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--patina)", color: "var(--background)" }}
            >
              Rezervirajte stol
            </a>
            <a
              href="#jelovnik"
              className="border-b pb-1 text-[0.9rem] transition-colors hover:text-[var(--patina)]"
              style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}
            >
              Pogledaj jelovnik →
            </a>
          </div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <div className="border-b" style={{ background: "var(--card)", borderColor: "var(--surface-line)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-14 px-6 py-8 text-center">
          <div>
            <div className="font-display text-4xl" data-count="5" data-dec="1" style={{ color: "var(--foreground)" }}>
              5.0
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>★ TripAdvisor ocjena</div>
          </div>
          <div>
            <div className="font-display text-4xl" style={{ color: "var(--foreground)" }}>1960.</div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Konoba od te godine</div>
          </div>
          <div>
            <div className="font-display text-4xl" style={{ color: "var(--foreground)" }}>Mali</div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Broj stolova, pažljivo dočekan svaki</div>
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section id="vrt" className="py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-label reveal block mb-6" style={{ color: "var(--patina)" }}>Naš manifest</span>
          <p className="font-display reveal text-[clamp(1.6rem,3.2vw,2.5rem)] leading-snug" style={{ color: "var(--foreground)" }}>
            Ne tražimo gomilu ni vrevu velikih restorana —{" "}
            <em className="italic" style={{ color: "var(--patina)" }}>tražimo pravi stol, pravu ribu i večer koja traje dugo.</em>
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="jelovnik" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--patina)" }}>Jelovnik</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Dalmacija, <em className="italic" style={{ color: "var(--patina)" }}>s mora i ognjišta</em>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {MENU.map((group, i) => (
              <div
                key={group.cat}
                className={`reveal grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
                style={{ background: "var(--card)" }}
              >
                <div className="min-h-[280px] md:min-h-[360px] overflow-hidden">
                  <img src={img(group.image, 900)} alt={group.cat} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center p-9 md:p-12">
                  <div className="text-label mb-4" style={{ color: "var(--patina)" }}>{group.cat}</div>
                  <div className="flex flex-col">
                    {group.dishes.map((d) => (
                      <div key={d.name} className="border-b py-4 last:border-none" style={{ borderColor: "var(--surface-line)" }}>
                        <div className="font-display text-xl" style={{ color: "var(--foreground)" }}>{d.name}</div>
                        <div className="mt-1 text-[0.92rem]" style={{ color: "var(--muted-foreground)" }}>{d.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="reveal mt-10 text-center font-display italic text-lg" style={{ color: "var(--muted-foreground)" }}>
            Jelovnik se mijenja prema onome što more i vrt daju toga dana. Za alergije, pitajte nas — rado.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section id="prica" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="reveal h-[420px] md:h-[540px] overflow-hidden rounded-2xl">
            <img src={img(IMG.storyArch, 1000)} alt="Kameni luk uokviruje toplu konobsku sobu" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-label reveal block mb-5" style={{ color: "var(--patina)" }}>Naša priča</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-6" style={{ color: "var(--foreground)" }}>
              Ime staro kao <em className="italic" style={{ color: "var(--patina)" }}>kovanica</em>
            </h2>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Konoba stoji u Sv. Filipu i Jakovu još od 1960-ih — obiteljski posao koji smo nedavno obnovili, ali dušu smo ostavili netaknutu: kamen, drvo i miris mora pred vratima.
            </p>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Ime smo posudili iz starog jadranskog govora — pataccone, stara kovanica s pomalo nestašnim prizvukom. Baš takvi smo: skromni izvana, darežljivi za stolom.
            </p>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Ribu biramo svakog jutra, tijesto mijesimo istog dana, a večeri katkad prati i živa svirka. Mali smo namjerno — svaki se stol dočeka kao jedini te večeri.
            </p>
            <p className="reveal font-display italic text-lg" style={{ color: "var(--patina)" }}>
              — obitelj Il Pataccone, Sv. Filip i Jakov
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="ambijent" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--patina)" }}>Ambijent</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Kamen, svjetlo i <em className="italic" style={{ color: "var(--patina)" }}>tišina mora</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`reveal overflow-hidden rounded-xl ${g.tall ? "row-span-2 h-[220px] md:h-full" : "h-[220px]"} ${
                  g.wide ? "col-span-2" : ""
                }`}
              >
                <img src={img(g.src, 700)} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="lokacija" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 overflow-hidden rounded-2xl md:grid-cols-2" style={{ background: "var(--background)" }}>
          <div className="p-9 md:p-14">
            <span className="text-label reveal block mb-5" style={{ color: "var(--patina)" }}>Posjetite nas</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-8" style={{ color: "var(--foreground)" }}>
              Tu smo, uz <em className="italic" style={{ color: "var(--patina)" }}>rivijeru</em>
            </h2>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--patina)" }}>Adresa</div>
              <p style={{ color: "var(--muted-foreground)" }}>Put Primorja 55A, 23207 Sv. Filip i Jakov</p>
            </div>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--patina)" }}>Rezervacije</div>
              <p style={{ color: "var(--muted-foreground)" }}>Stol rezervirajte pozivom — mali smo, mjesta je ograničeno.</p>
              <a href="tel:+385958110675" className="font-display text-2xl mt-1 inline-block" style={{ color: "var(--patina)" }}>
                +385 95 811 0675
              </a>
            </div>

            <div className="reveal mb-8">
              <div className="text-label mb-2" style={{ color: "var(--patina)" }}>Radno vrijeme</div>
              <p style={{ color: "var(--muted-foreground)" }}>
                Sezonski, ručak i večera. Za točno radno vrijeme i veće grupe, javite nam se telefonom.
              </p>
            </div>

            <a
              href="tel:+385958110675"
              className="reveal inline-block rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium"
              style={{ background: "var(--patina)", color: "var(--background)" }}
            >
              Nazovite za rezervaciju
            </a>
          </div>
          <div className="reveal min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=Put+Primorja+55A,+23207+Sveti+Filip+i+Jakov&output=embed"
              loading="lazy"
              title="Il Pataccone — Sv. Filip i Jakov"
              className="h-full w-full min-h-[360px] border-0 grayscale-[20%]"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-9" style={{ background: "var(--ink-900, #1F1912)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-3">
            <div>
              <div className="font-display text-2xl mb-4" style={{ color: "var(--foreground)" }}>
                Il <span style={{ color: "var(--patina)" }}>Pataccone</span>
              </div>
              <p className="max-w-[34ch] text-sm" style={{ color: "var(--muted-foreground)" }}>
                Obiteljska konoba u Sv. Filipu i Jakovu, od 1960-ih. Kamena terasa, riba iz mora i večeri koje se ne žuri.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--patina)" }}>Izbornik</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <a href="#jelovnik" className="hover:text-[var(--patina)]">Jelovnik</a>
                <a href="#prica" className="hover:text-[var(--patina)]">Naša priča</a>
                <a href="#ambijent" className="hover:text-[var(--patina)]">Ambijent</a>
                <a href="#lokacija" className="hover:text-[var(--patina)]">Lokacija</a>
              </div>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "var(--patina)" }}>Kontakt</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--muted-foreground)" }}>
                <a href="tel:+385958110675" className="font-display text-lg" style={{ color: "var(--foreground)" }}>+385 95 811 0675</a>
                <p>Put Primorja 55A, Sv. Filip i Jakov</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between gap-3 border-t pt-6 text-xs"
            style={{ borderColor: "var(--surface-line)", color: "var(--muted-foreground)" }}
          >
            <span>© 2026 Konoba Il Pataccone · Sv. Filip i Jakov</span>
            <span>5.0 ★ TripAdvisor · skriveni dragulj rivijere</span>
          </div>
        </div>
      </footer>
    </>
  );
}
