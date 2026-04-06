import logoImg from "./assets/logo.gif";
import prionActiveImg from "./assets/prion-active.webp";
import prionImg from "./assets/prion-idle.webp";
import rhubarbActiveImg from "./assets/rhubarb-active.webp";
import rhubarbImg from "./assets/rhubarb-idle.webp";

const videos = [
  {
    subject: "x-wing engine",
    link: "https://youtube.com/watch?v=-LsMkHOUSmA",
    uploadedAt: "2026-04-05",
  },
  {
    subject: "spider",
    link: "https://youtube.com/watch?v=d35XrcDUnMs",
    uploadedAt: "2026-03-29",
  },
  {
    subject: "crate",
    link: "https://youtube.com/watch?v=d35XrcDUnMs",
    uploadedAt: "2026-03-22",
  },
  {
    subject: "chainsaw",
    link: "https://youtube.com/watch?v=C90rg6Wx9hA",
    uploadedAt: "2026-03-15",
  },
  {
    subject: "small rock panel",
    link: "https://youtube.com/watch?v=c9mzwBxUtDo",
    uploadedAt: "2026-03-08",
  },
  {
    subject: "goblet(s)",
    link: "https://youtube.com/watch?v=DHCt3osW8ms",
    uploadedAt: "2026-03-01",
  },
  {
    subject: "8x8 lattice plate",
    link: "https://youtube.com/watch?v=xYeW4oiY_bw",
    uploadedAt: "2026-02-23",
  },
];

function App() {
  return (
    <>
      <section className="relative min-h-dvh md:grid not-md:justify-center items-center grid-cols-[1fr_auto_1fr] max-w-5xl mx-auto flex p-4">
        <a
          href="https://instagram.com/basedprion"
          target="_blank"
          className="ml-auto -rotate-3 max-h-96 h-auto w-auto hover:-rotate-1 transition-all group ease-out not-md:absolute not-md:scale-50 not-md:bottom-4 not-md:left-0 not-md:-translate-x-1/4"
        >
          <img src={prionImg} alt="Idle Prion Character" className="group-hover:hidden" />
          <img src={prionActiveImg} alt="Active Prion Character" className="not-group-hover:hidden" />
        </a>
        <a
          href="https://youtube.com/@disturbingthepiecepod"
          target="_blank"
          className="z-10 not-md:-translate-y-1/3 not-md:scale-80"
        >
          <img
            src={logoImg}
            className="max-w-xl max-h-[50dvh] w-auto h-auto active:scale-98 hover:scale-102 transition-all overflow-visible ease-out"
            alt="Disturbing the Piece logo"
          />
        </a>
        <a
          href="https://instagram.com/rhubarb_motel"
          target="_blank"
          className="-rotate-3 max-h-96 h-auto w-auto hover:-rotate-1 transition-all group ease-out not-md:absolute not-md:scale-50 not-md:bottom-4 not-md:right-0 not-md:translate-x-1/4"
        >
          <img src={rhubarbImg} alt="Idle Rhubarb Motel Character" className="group-hover:hidden" />
          <img src={rhubarbActiveImg} alt="Active Rhubarb Motel Character" className="not-group-hover:hidden" />
        </a>
      </section>
      <section className="flex gap-4 justify-center flex-wrap max-w-5xl p-4 mx-auto">
        {videos.map((v) => (
          <a className="bg-black px-2 py-1 rounded-full text-neutral-100" href={v.link} target="_blank">
            {v.subject}
          </a>
        ))}
      </section>
    </>
  );
}

export default App;
