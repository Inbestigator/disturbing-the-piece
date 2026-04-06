import logoImg from "./assets/logo.gif";
import prionActiveImg from "./assets/prion-active.webp";
import prionImg from "./assets/prion-idle.webp";
import rhubarbActiveImg from "./assets/rhubarb-active.webp";
import rhubarbImg from "./assets/rhubarb-idle.webp";

const videos = [
  { subject: "x-wing engine", id: "-LsMkHOUSmA" },
  { subject: "spider", id: "nr_Trlnskhc" },
  { subject: "crate", id: "d35XrcDUnMs" },
  { subject: "chainsaw", id: "C90rg6Wx9hA" },
  { subject: "small rock panel", id: "c9mzwBxUtDo" },
  { subject: "goblet(s)", id: "DHCt3osW8ms" },
  { subject: "8x8 lattice plate", id: "xYeW4oiY_bw" },
];

function App() {
  return (
    <>
      <section className="relative min-h-screen lg:grid not-lg:justify-center items-center grid-cols-[1fr_1fr_1fr] max-w-5xl mx-auto flex p-4 overflow-hidden">
        <a
          href="https://instagram.com/basedprion"
          target="_blank"
          className="ml-auto -rotate-3 hover:-rotate-1 transition-all group ease-out not-lg:absolute not-lg:scale-50 not-lg:bottom-4 not-lg:left-0 not-lg:-translate-x-1/4 not-lg:translate-y-1/4"
        >
          <img src={prionImg} alt="Idle Prion Character" className="group-hover:hidden" fetchPriority="high" />
          <img src={prionActiveImg} alt="Active Prion Character" className="not-group-hover:hidden" />
        </a>
        <a
          href="https://youtube.com/@disturbingthepiecepod"
          target="_blank"
          className="z-10 not-lg:-translate-y-1/3 not-lg:scale-80"
        >
          <img
            src={logoImg}
            className="max-w-xl not-lg:sm:aspect-video object-[0_65%] object-cover overflow-hidden max-h-[50vh] active:scale-98 hover:scale-102 transition-all ease-out"
            alt="Disturbing the Piece logo"
            fetchPriority="high"
          />
        </a>
        <a
          href="https://instagram.com/rhubarb_motel"
          target="_blank"
          className="rotate-3 hover:rotate-1 transition-all group ease-out not-lg:absolute not-lg:scale-50 not-lg:bottom-4 not-lg:right-0 not-lg:translate-x-1/4 not-lg:translate-y-1/4"
        >
          <img
            src={rhubarbImg}
            alt="Idle Rhubarb Motel Character"
            className="group-hover:hidden"
            fetchPriority="high"
          />
          <img src={rhubarbActiveImg} alt="Active Rhubarb Motel Character" className="not-group-hover:hidden" />
        </a>
      </section>
      <section className="flex gap-4 justify-center flex-wrap p-4">
        {videos.map((v) => (
          <a href={`https://youtube.com/watch?v=${v.id}`} target="_blank">
            <img
              src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
              alt={`Thumbnail displaying the ${v.subject} piece`}
              className="aspect-video object-cover shadow-sm rounded-xl border border-black/10 max-w-xs"
            />
          </a>
        ))}
      </section>
    </>
  );
}

export default App;
