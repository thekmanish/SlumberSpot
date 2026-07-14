import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const destinations = ["Jaipur", "Udaipur", "Goa", "Manali", "Kerala", "Delhi", "Rishikesh", "Pondicherry"];

const stays = [
  { name: "The Amber Room", place: "Jaipur, Rajasthan", price: "₹4,200", rating: "4.8", gradient: "from-[#E8785A] to-[#F2A65A]" },
  { name: "Sea & Salt", place: "Goa", price: "₹6,800", rating: "4.9", gradient: "from-[#1E2350] to-[#4A5A8F]" },
  { name: "Pine Hollow", place: "Manali, Himachal", price: "₹3,500", rating: "4.7", gradient: "from-[#2E4A3F] to-[#6B9080]" },
];

const features = [
  { room: "101", title: "Verified stays", copy: "Every listing is inspected in person — the photos match the room, down to the lamp on the nightstand." },
  { room: "204", title: "Flexible checkout", copy: "Plans change. Most stays let you cancel or shift dates without hunting through fine print." },
  { room: "318", title: "Local picks", copy: "Curated by people who've actually stayed there — not a listing that pays for placement." },
];

export default function Home() {
  return (
    <div className={`${fraunces.variable} ${inter.variable} bg-[#FBF6EC]`} style={{ fontFamily: "var(--font-body)" }}>
      <style>{`
        @keyframes drift { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-16px, -22px); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.25; } 50% { opacity: 0.85; } }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .glow-drift { animation: drift 14s ease-in-out infinite; }
        .star { animation: twinkle 3.5s ease-in-out infinite; }
        .marquee-track { animation: marquee 32s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .glow-drift, .star, .marquee-track { animation: none; }
        }
      `}</style>



    <section className="relative overflow-hidden bg-gradient-to-b from-[#0D0F22] via-[#1E2350] to-[#3A3568] pb-40 pt-10 md:pt-16">
      <header className="relative z-20 max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 pt-7">
        <span className="text-[22px] tracking-tight text-[#FBF6EC]" style={{ fontFamily: "var(--font-display)" }}>
          Slumberspot
        </span>
        <nav className="hidden md:flex items-center gap-9 text-[14px] text-[#D8D6EC]">
          <a href="#stays" className="hover:text-[#FBF6EC] transition-colors">Stays</a>
          <a href="#why" className="hover:text-[#FBF6EC] transition-colors">Why us</a>
          <a href="#" className="hover:text-[#FBF6EC] transition-colors">List your property</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="/login" className="text-[14px] text-[#FBF6EC]/90 hover:text-[#FBF6EC] transition-colors hidden sm:block">
            Log in
          </a>
          <a href="/signup" className="text-[14px] font-medium bg-[#F2A65A] text-[#12142B] px-4 py-2 rounded-full hover:bg-[#FBF6EC] transition-colors">
            Sign up
          </a>
        </div>
      </header>

        <div aria-hidden className="absolute inset-0 pointer-events-none">
          {[
            { top: "12%", left: "8%", size: 3, delay: "0s" },
            { top: "22%", left: "88%", size: 2, delay: "0.6s" },
            { top: "38%", left: "22%", size: 2, delay: "1.2s" },
            { top: "15%", left: "60%", size: 3, delay: "1.8s" },
            { top: "48%", left: "78%", size: 2, delay: "0.3s" },
            { top: "8%", left: "40%", size: 2, delay: "2.1s" },
            { top: "55%", left: "12%", size: 2, delay: "1.5s" },
          ].map((s, i) => (
            <span key={i} className="star absolute rounded-full bg-[#FBF6EC]" style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }} />
          ))}
          <div className="glow-drift absolute -top-24 right-[10%] w-[420px] h-[420px] rounded-full bg-[#F2A65A]/20 blur-[110px]" />
          <div className="glow-drift absolute top-40 left-[5%] w-[320px] h-[320px] rounded-full bg-[#E8785A]/15 blur-[100px]" style={{ animationDelay: "3s" }} />
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-6 mt-16 md:mt-20">
          <span className="inline-block text-[12px] tracking-[0.18em] uppercase text-[#F2A65A] mb-6">
            Real rooms. Real reviews. Zero surprises.
          </span>
          <h1 className="text-[42px] leading-[1.08] sm:text-[58px] md:text-[72px] text-[#FBF6EC] mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Find your spot<br />
            <span className="italic text-[#F2A65A]">to slumber.</span>
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#C7C5E0] max-w-lg mx-auto">
            Search boutique stays and trusted chains in one place — see the exact room before you ever book it.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 mt-12 md:mt-14">
          <div className="absolute inset-x-6 -bottom-6 h-16 bg-[#F2A65A]/25 blur-3xl rounded-full" aria-hidden />
          <div className="relative bg-[#FBF6EC] rounded-[22px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] pt-5 overflow-hidden">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-[#0D0F22] rounded-b-full" aria-hidden />
              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr_0.9fr_0.7fr_110px] gap-px bg-[#E7E2D3] rounded-[18px] overflow-hidden mx-1.5 mb-1.5">
                <label className="bg-[#FBF6EC] px-5 py-4 flex flex-col min-w-0">
                  <span className="text-[11px] uppercase tracking-wide text-[#8B8878] mb-1">Destination</span>
                  <input type="text" placeholder="Jaipur, Rajasthan" className="w-full min-w-0 text-[14px] text-[#12142B] placeholder:text-[#B3B0A0] outline-none bg-transparent" />
                </label>
                <label className="bg-[#FBF6EC] px-5 py-4 flex flex-col min-w-0">
                  <span className="text-[11px] uppercase tracking-wide text-[#8B8878] mb-1">Check-in</span>
                  <input type="date" className="w-full min-w-0 text-[14px] text-[#12142B] outline-none bg-transparent" />
                </label>
                <label className="bg-[#FBF6EC] px-5 py-4 flex flex-col min-w-0">
                  <span className="text-[11px] uppercase tracking-wide text-[#8B8878] mb-1">Check-out</span>
                  <input type="date" className="w-full min-w-0 text-[14px] text-[#12142B] outline-none bg-transparent" />
                </label>
                <label className="bg-[#FBF6EC] px-5 py-4 flex flex-col min-w-0">
                  <span className="text-[11px] uppercase tracking-wide text-[#8B8878] mb-1">Guests</span>
                  <input type="number" min={1} defaultValue={2} className="w-full min-w-0 text-[14px] text-[#12142B] outline-none bg-transparent" />
                </label>
                <button className="bg-[#12142B] text-[#FBF6EC] flex items-center justify-center gap-2 text-[14px] font-medium hover:bg-[#1E2350] transition-colors">
                  Search
                </button>
              </div>
          </div>
        </div>
      </section>

      <div className="bg-[#12142B] py-4 overflow-hidden">
        <div className="marquee-track flex gap-10 whitespace-nowrap w-max">
          {[...destinations, ...destinations].map((d, i) => (
            <span key={i} className="text-[13px] tracking-wide text-[#8280A3] flex items-center gap-10">
              {d}<span className="text-[#F2A65A]">•</span>
            </span>
          ))}
        </div>
      </div>

      <section id="stays" className="max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[12px] tracking-[0.18em] uppercase text-[#B9773F] mb-3 block">Handpicked</span>
            <h2 className="text-[32px] md:text-[42px] text-[#12142B]" style={{ fontFamily: "var(--font-display)" }}>Stays worth the trip</h2>
          </div>
          <a href="#" className="hidden sm:block text-[14px] text-[#12142B] underline underline-offset-4 decoration-[#F2A65A]">View all stays</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stays.map((s) => (
            <div key={s.name} className="group cursor-pointer">
              <div className={`relative h-64 rounded-2xl bg-gradient-to-br ${s.gradient} overflow-hidden mb-4`}>
                <div className="absolute top-4 right-4 bg-[#FBF6EC]/90 rounded-full px-3 py-1 text-[12px] font-medium text-[#12142B] flex items-center gap-1">★ {s.rating}</div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[17px] text-[#12142B]" style={{ fontFamily: "var(--font-display)" }}>{s.name}</h3>
                  <p className="text-[13px] text-[#8B8878]">{s.place}</p>
                </div>
                <p className="text-[14px] text-[#12142B]">{s.price}<span className="text-[#8B8878]"> /night</span></p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="bg-[#12142B] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <span className="text-[12px] tracking-[0.18em] uppercase text-[#F2A65A] mb-3 block">Why Slumberspot</span>
          <h2 className="text-[32px] md:text-[42px] text-[#FBF6EC] mb-14 max-w-xl" style={{ fontFamily: "var(--font-display)" }}>
            Booking a room shouldn't feel like a gamble.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2A2C4E]">
            {features.map((f) => (
              <div key={f.room} className="bg-[#12142B] p-8">
                <span className="text-[13px] text-[#8280A3] border border-[#3A3D66] rounded px-2 py-0.5 inline-block mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Room {f.room}
                </span>
                <h3 className="text-[19px] text-[#FBF6EC] mb-3" style={{ fontFamily: "var(--font-display)" }}>{f.title}</h3>
                <p className="text-[14px] text-[#A9A9C7] leading-relaxed">{f.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-[24px] md:text-[30px] leading-[1.4] text-[#12142B] mb-6" style={{ fontFamily: "var(--font-display)" }}>
          "I booked The Amber Room off a whim — walked in and it was the photo, down to the <span className="italic text-[#B9773F]">lamp on the nightstand.</span>"
        </p>
        <p className="text-[14px] text-[#8B8878]">Priya M. — Jaipur</p>
      </section>

      <section className="bg-gradient-to-b from-[#1E2350] to-[#0D0F22] py-24 text-center px-6">
        <h2 className="text-[32px] md:text-[46px] text-[#FBF6EC] mb-8 max-w-xl mx-auto" style={{ fontFamily: "var(--font-display)" }}>
          Your next good night's sleep is a search away.
        </h2>
        <a href="/signup" className="inline-block bg-[#F2A65A] text-[#12142B] text-[14px] font-medium px-7 py-3.5 rounded-full hover:bg-[#FBF6EC] transition-colors">
          Start exploring
        </a>
      </section>

      <footer className="bg-[#0D0F22] py-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[15px] text-[#FBF6EC]" style={{ fontFamily: "var(--font-display)" }}>Slumberspot</span>
          <p className="text-[13px] text-[#6E6C93]">© {new Date().getFullYear()} Slumberspot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}