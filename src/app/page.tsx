"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);       // NAVBAR

  return (
    <main className="bg-[#F4EFEA] text-[#1F3A3A] overflow-x-hidden">

      {/* NAVBAR */}
      {/*<header className="max-w-7xl mx-auto px-10 py-8 flex justify-between items-center">*/}
      {/* NAVBAR */}
<header className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex justify-between items-center relative">

  {/* LOGO */}
  <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
    Dr. Maya Reynolds, PsyD
  </h1>

  {/* DESKTOP NAV */}
  <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
    <a className="hover:opacity-60 cursor-pointer">Home</a>
    <a className="hover:opacity-60 cursor-pointer">About</a>
    <a className="hover:opacity-60 cursor-pointer">Services</a>
    <a className="hover:opacity-60 cursor-pointer">Contact</a>
  </nav>

  {/* MOBILE HAMBURGER BUTTON */}
  <button
    className="md:hidden text-3xl z-50"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle Menu"
  >
    {menuOpen ? "✕" : "☰"}
  </button>

  {/* BACKDROP (outside click close) */}
  {menuOpen && (
    <div
      className="fixed inset-0 bg-black/20 md:hidden"
      onClick={() => setMenuOpen(false)}
    />
  )}

  {/* MOBILE MENU */}
  {menuOpen && (
    <div className="absolute top-full left-0 w-full bg-[#F4EFEA] border-t border-[#ddd] md:hidden z-50">
      <nav className="flex flex-col items-center py-6 gap-6 text-sm uppercase tracking-widest">
        <a onClick={() => setMenuOpen(false)}>Home</a>
        <a onClick={() => setMenuOpen(false)}>About</a>
        <a onClick={() => setMenuOpen(false)}>Services</a>
        <a onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
    </div>
  )}

</header>



      {/* HERO */}
      {/*<section className="max-w-7xl mx-auto px-10 py-24 grid md:grid-cols-2 gap-16 items-center">*/}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        <div>
          {/*<h2 className="text-5xl md:text-6xl font-serif leading-tight mb-6">*/}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-tight mb-6">

              Anxiety, Trauma & Burnout Therapy <br />
            <span className="italic font-light">in Santa Monica, CA</span>
          </h2>

          <p className="text-lg text-[#4A4F4F] mb-8 max-w-xl">
            Compassionate therapy for high-achieving adults feeling overwhelmed,
            anxious, or emotionally exhausted. In-person sessions in Santa Monica
            and secure telehealth across California.
          </p>

          <button className="border border-[#1F3A3A] px-10 py-4 text-sm uppercase tracking-widest
            hover:bg-[#1F3A3A] hover:text-white transition">
            Schedule a Free Consultation →
          </button>
        </div>

        {/*<div className="relative w-[320px] md:w-[420px] h-[450px] md:h-[550px] mx-auto rounded-t-full overflow-hidden border-[10px] border-[#E6DED6]">*/}
        {/*hero image */}
          <div className="relative h-[300px] sm:h-[380px] md:h-[460px] rounded-3xl overflow-hidden group shadow-lg">

  
              {/* Image 1 (default) */}
              <Image
                src="/office2.jpeg"
                alt="Therapy office interior"
                fill
                className="object-cover transition-opacity duration-500 group-hover:opacity-0"
              />

              {/* Image 2 (hover) */}
              <Image
                src="/office1.jpeg"
                alt="Counseling space seating"
                fill
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

            </div>
      </section>

      {/* ABOUT */}
      {/*<section className="bg-[#F9F8F4] px-10 py-24">*/}
      <section className="bg-[#F9F8F4] px-6 md:px-10 py-16 md:py-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/*<h3 className="text-4xl md:text-5xl font-serif mb-8">*/}
            <h3 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8">

              You can feel grounded again.
            </h3>
            <p className="text-xl [#4A4F4F] mb-6 leading-relaxed">
              I’m Dr. Maya Reynolds, a licensed clinical psychologist based in
              Santa Monica. I work with thoughtful, high-achieving adults who feel
              anxious, burned out, or stuck in overthinking.
            </p>
            <p className="text-xl [#4A4F4F] leading-relaxed">
              Therapy is a space to slow down, understand what’s happening beneath
              the surface, and develop more sustainable ways of living and working.
            </p>
            <br></br>
            <button className="border border-[#1F3A3A] px-10 py-4 text-sm uppercase tracking-widest
                hover:bg-[#1F3A3A] hover:text-white transition">
                get in touch →
              </button>
          </div>
          <div className="relative w-[260px] sm:w-[320px] md:w-[420px] h-[380px] sm:h-[450px] md:h-[650px] mx-auto rounded-t-full overflow-hidden border-[8px] md:border-[10px] border-[#E6DED6]">

          <Image
            src="/profile.jpg.png"
            alt="Dr. Maya Reynolds"
            fill
            className="object-cover"
            priority
          />
        </div>
          {/*office image div */}
          
        </div>
      </section>

      {/* SERVICES */}
      {/*<section className="px-10 py-24 max-w-7xl mx-auto">*/}
      <section className="px-6 md:px-10 py-16 md:py-24 max-w-7xl mx-auto">

        <h3 className="text-4xl md:text-5xl font-serif text-center mb-16">
          Areas of Focus
        </h3>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Anxiety & Panic Therapy",
              text: "Anxiety and trauma can leave you feeling constantly on edge, disconnected, or overwhelmed. I work with adults who are struggling with chronic anxiety, past trauma, and emotional dysregulation, using a trauma-informed approach that prioritizes safety, trust, and nervous system regulation. Together, we’ll help you feel more grounded, present, and in control.",
              img: "/service-anxitey2.jpg",
            },
            {
              title: "Trauma & EMDR Therapy",
              text: "Past experiences—whether a single traumatic event or long-standing patterns from earlier life—can continue to affect how you feel, relate to others, and experience safety in your body. My trauma-informed approach integrates EMDR, mindfulness, and body-oriented techniques, with careful pacing and an emphasis on safety, stabilization, and nervous system regulation.",
              img: "/service-trauma.jpg",
            },
            {
              title: "Burnout & High-Pressure Stress",
              text: "Many high-achieving professionals, entrepreneurs, and creatives come to therapy feeling exhausted, disconnected, or emotionally numb after years of pushing through stress. Therapy offers space to slow down, reconnect with yourself, and develop more sustainable ways of living and working—without constant pressure or self-criticism.",
              img: "/service-burnout.jpg",
            },
          ].map((s, i) => (
            <div key={i}>
              <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden mb-6">
                <Image src={s.img} alt={s.title} fill className="relative h-[420px] rounded-xl overflow-hidden"  />
              </div>
              <h4 className="text-2xl font-serif mb-3">{s.title}</h4>
              <p className="text-[#4A4F4F]">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* supportsection */}
      <section className="bg-[#F9F8F4] ">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          
          {/* IMAGE */}
          {/*<div className="relative h-[620px] rounded-xl overflow-hidden">*/}
          <div className="relative h-[360px] sm:h-[480px] md:h-[620px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 top-8 rounded-2xl overflow-hidden">
            <Image
              src="/support.jpg"
              alt="You don’t have to do this alone"
              fill
              className="object-cover object-[50%_20%]"
            />
            </div>
            </div>
          {/* CONTENT */}
        {/*<div className="flex items-center px-8 md:px-14 py-16">*/}
        <div className="flex items-center px-6 sm:px-8 md:px-14 py-12 md:py-16">

          <div className=" text-xl max-w-md">
            <h2 className="text-4xl font-serif text-[#1F3A3A] mb-6">
              You don’t have to do this alone.
            </h2>

            <p className="text-[#2F4F4F] mb-6 leading-relaxed">
              If you’re experiencing any of the following, support is available:
            </p>

            <ul className="space-y-3 text-[#2F4F4F]">
              <li>• Persistent anxiety or overthinking</li>
              <li>• Emotional exhaustion or burnout</li>
              <li>• Difficulty focusing or making decisions</li>
              <li>• Feeling disconnected or overwhelmed</li>
            </ul>

            <p className="mt-6 text-[#2F4F4F] leading-relaxed">
              Therapy offers a space to slow down, feel understood, and begin creating
              steadier, more sustainable change.
            </p>
            <br></br>
            <button className="border border-[#1F3A3A] px-10 py-4 text-sm uppercase tracking-widest
                hover:bg-[#1F3A3A] hover:text-white transition">
                work with me →
              </button>
          </div>
        </div>

      </div>
</section>


      {/* FAQ */}
      {/*<section className="bg-[#1F3A3A] text-white px-10 py-24">*/}
      <section className="bg-[#1F3A3A] text-white px-6 md:px-10 py-16 md:py-24">

        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-serif mb-12">“Clients usually ask me…”</h3>

          {[
            {
              q: "Do you offer in-person and online therapy?",
              a: "Yes. I offer in-person therapy sessions from my Santa Monica office, as well as secure online therapy for clients located anywhere in California.",
            },
            {
              q: "What types of issues do you specialize in?",
              a: "I specialize in anxiety, panic, trauma, burnout, perfectionism, and high internal pressure. Many of my clients are high-achieving professionals who feel emotionally exhausted or disconnected despite appearing “fine” externally.",
            },
            {
              q: "What is your therapy approach like?",
              a: "My approach is trauma-informed, collaborative, and paced with care. I integrate CBT, EMDR, mindfulness, and body-based techniques to address both emotional and physical patterns of stress.",
            },
            
            {
              q: "Is trauma therapy right for me?",
              a: "Trauma therapy isn’t only for major events. Many people carry long-standing patterns shaped by earlier experiences, chronic stress, or relationships. We move at a pace that feels safe and supportive for you.",
            },
            {
              q: "How do I get started?",
              a: "You can begin by scheduling a free consultation. This allows us to talk about what you’re looking for and see if working together feels like a good fit.",
            },
          ].map((item, i) => (
            <div key={i} className="border-b py-6">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between text-left"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-serif">{item.q}</span>
                <span className="text-3xl ">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <p className="mt-4 text-lg md:text-xl text-white">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#F7F3EE] py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1F3A3A] mb-4">
              Our Office
            </h2>
            
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/*<div className="relative h-[460px] rounded-3xl overflow-hidden group shadow-lg">*/}
            <div className="relative h-[300px] sm:h-[380px] md:h-[460px] rounded-3xl overflow-hidden group shadow-lg">

  
              {/* Image 1 (default) */}
              <Image
                src="/office1.jpeg"
                alt="Therapy office interior"
                fill
                className="object-cover transition-opacity duration-500 group-hover:opacity-0"
              />

              {/* Image 2 (hover) */}
              <Image
                src="/office2.jpeg"
                alt="Counseling space seating"
                fill
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

            </div>
            <div className=" text-xl [#3A4F4F] space-y-6">
              <p className=" max-w-xl mx-auto">
               My Santa Monica office is a quiet, private space designed to feel calm and grounding 
               from the moment you arrive. The environment is intentionally uncluttered, 
               filled with natural light, and created to support a sense of safety and ease—especially 
               for clients working through anxiety or trauma.
            </p>
              <p className="text- leading-relaxed">
                Located at 123th Street 45 W, Santa Monica, CA 90401, the office offers a peaceful setting for in-person therapy, 
                while I also provide secure telehealth sessions for clients across California.
              </p>

              <p className="leading-relaxed">
                In-person & online therapy available.
              </p>

              <div className=" text-xl pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex gap-2 items-start">📍 Santa Monica, CA</div>
                <div className="flex gap-2 items-start">🪑 In-person & Telehealth</div>
                <div className="flex gap-2 items-start">🔒 Private & Confidential</div>
              </div>
            </div>
            </div>
</div>
</section>







      {/* CTA */}
      {/*<section className="bg-[#1F3A3A] text-white px-10 py-24 text-center">*/}
      <section className="bg-[#1F3A3A] text-white px-6 md:px-10 py-16 md:py-24 text-center">

        <h3 className="text-4xl md:text-5xl font-serif mb-6">
          Ready to begin therapy?
        </h3>
        <p className="max-w-xl mx-auto mb-10 opacity-90">
          In-person sessions in Santa Monica and online across California.
        </p>
        {/*<button className="border border-white px-10 py-4 uppercase tracking-widest
          hover:bg-white hover:text-[#1F3A3A] transition">*/}
        <button className="border border-white px-10 py-4 uppercase tracking-widest
hover:bg-white hover:text-[#1F3A3A] transition cta-btn">
  Book a Consultation →
</button>

      </section>
        {/* addresh */}
      {/*<section className="bg-[#F4EFEA] text-[#1F3A3A] px-8 md:px-20 py-20">*/}
      <section className="bg-[#F4EFEA] text-[#1F3A3A] px-6 md:px-20 py-16 md:py-20">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
    
    {/* 1. Left: Business Identity & Contact */}
    <div className="flex flex-col space-y-6">
      <div>
        <h2 className="text-4xl font-serif tracking-tight">Dr. Maya Reynolds, PhD</h2>
        <p className="text-lg mt-2 opacity-90">Licensed Clinical Psychologist</p>
      </div>
      
      <div className="text-base space-y-4 leading-relaxed">
        <div>
          <p>Santa Monica, CA</p>
          <p>In-person & Telehealth Sessions Available</p>
        </div>
        
        <div>
          <a href="mailto:hello@drmayareynolds.com" className="block underline hover:opacity-80 transition-opacity">
            hello@drmayareynolds.com
          </a>
          <p>(310) 555-4821</p>
        </div>
      </div>
    </div>

    {/* 2. Middle: Hours (Lilac style spacing) */}
    <div className="flex flex-col md:items-center">
      <div className="text-left md:text-left"> {/* Keeping it left aligned like the template */}
        <h4 className="text-3xl font-serif mb-8">Hours</h4>
        <div className="space-y-6 text-base">
          <div>
            <p className="opacity-100">Monday – Thursday</p>
            <p className="">10am – 6pm</p>
          </div>
          <div>
            <p className="opacity-100">Friday</p>
            <p className="">10am – 3pm</p>
          </div>
          <p className="italic text-sm opacity-100 pt-2">
            Evening sessions available by request.
          </p>
        </div>
      </div>
    </div>

    {/* 3. Right: Navigation (Find/Explore) */}
    <div className="flex flex-col md:items-end">
      <div className="text-left md:text-right">
        <h4 className="text-3xl font-serif mb-8">Find</h4>
        <ul className="space-y-3 text-lg">
          <li><a href="/" className="underline hover:text-gray-300 transition-colors">Home</a></li>
          <li><a href="/contact" className="underline hover:text-gray-300 transition-colors">Contact</a></li>
          <li><a href="/about" className="underline hover:text-gray-300 transition-colors">About</a></li>
          <li><a href="/services" className="underline hover:text-gray-300 transition-colors">Blog</a></li>
        </ul>
      </div>
    </div>

  </div>
</section>
      

      {/* FOOTER */}
      {/*<footer className="bg-[#F9F8F4] text-[#1F3A3A] px-10 py-16 border-t border-gray-100">*/}
      <footer className="bg-[#F9F8F4] text-[#1F3A3A] px-6 md:px-10 py-12 md:py-16 border-t border-gray-100">

  <div className=" ] max-w-7xl mx-auto flex flex-col items-center font-semibold space-y-6">
    
    {/* Line 1: Legal Links */}
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base text-[#4A4F4F]">
      <a href="/privacy" className="underline hover:text-black transition-colors">Privacy & Cookies Policy</a>
      <a href="/estimate" className="underline hover:text-black transition-colors">Good Faith Estimate</a>
      <a href="/terms" className="underline hover:text-black transition-colors">Website Terms & Conditions</a>
      <a href="/disclaimer" className="underline hover:text-black transition-colors">Disclaimer</a>
    </div>

    {/* Line 2: Credits */}
    <div className="text-base text-[#4A4F4F] opacity-100">
      Website Template Credits: <a href="#" className="underline hover:text-black">Lilac-Template</a>
    </div>

    {/* Line 3: Copyright */}
    <div className="pt-4 text-base text-[#4A4F4F] font-medium tracking-wide">
      All Rights Reserved © 2026 Dr. Maya Reynolds, PsyD · Santa Monica, CA
    </div>

  </div>
</footer>

    </main>
  );
}
