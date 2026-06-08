import React from 'react'
import "../App.css"
import Cards from "./Cards"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <div className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/business-people-meeting.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />

        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "180px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-8 md:px-16 lg:px-24 max-w-xl sm:max-w-2xl lg:max-w-7xl">

          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 text-[0.6rem] sm:text-[0.65rem] font-bold tracking-[0.25em] uppercase
            text-yellow-400 border border-yellow-400/30 px-3 sm:px-4 py-1.5 rounded-sm mb-6 sm:mb-8"
            style={{ animation: "fadeUp 0.6s ease 0.1s both" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Enterprise Technology Partner
          </span>

          {/* Heading */}
          <h1
            className="font-extrabold text-white leading-tight tracking-tight mb-5 sm:mb-6
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{
              animation: "fadeUp 0.7s ease 0.2s both",
              fontFamily:
                "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
            }}
          >
            Powering Your Digital<br />
            <span className="text-yellow-400">Transformation.</span>
          </h1>

          {/* Divider */}
          <div
            className="w-12 sm:w-16 h-[2px] bg-yellow-400 mb-5 sm:mb-6"
            style={{ animation: "fadeUp 0.7s ease 0.3s both" }}
          />

          {/* Description */}
          <p
            className="text-white/50 text-sm sm:text-base md:text-lg max-w-md leading-relaxed mb-8 sm:mb-10"
            style={{ animation: "fadeUp 0.7s ease 0.4s both" }}
          >
            MFATech delivers end-to-end enterprise solutions — from JDE and ServiceNow implementations to Power Apps development, managed services, and expert technology training.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            style={{ animation: "fadeUp 0.7s ease 0.5s both" }}
          >

            <Link
              to="/contact"
              className="text-center text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.14em] uppercase
              bg-yellow-400 text-black px-6 sm:px-7 py-3 rounded-sm
              hover:bg-yellow-300 transition-all duration-200 hover:-translate-y-px"
            >
              Get Started
            </Link>

            <Link
              to="/aboutus"
              className="text-center text-[0.7rem] sm:text-[0.75rem] font-bold tracking-[0.14em] uppercase
              border border-white/20 text-white/70 px-6 sm:px-7 py-3 rounded-sm
              hover:border-white/50 hover:text-white transition-all duration-200"
            >
              Learn More
            </Link>
          </div>

        </div>

        {/* Right Image Grid */}
        <div className="hidden lg:grid absolute right-20 bottom-24 grid-cols-2 gap-6 text-white">

          <div>
            <h3 className="text-3xl font-bold text-yellow-400">15+</h3>
            <p className="text-white/60 text-sm">Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-400">200+</h3>
            <p className="text-white/60 text-sm">Projects Delivered</p>
          </div>

        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black to-transparent" />

      </div>


      {/* ABOUT SECTION */}
      <section className="bg-black text-white py-24 px-6 sm:px-10 lg:px-24">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">
            About <span className="text-yellow-400">Us</span>
          </h2>

          <div className="w-16 h-[2px] bg-yellow-400 mx-auto mt-4"></div>

          <p className="mt-6 text-white/60 leading-relaxed">
            MFATech is a trusted enterprise technology partner delivering powerful
            digital transformation solutions. Our expertise spans JD Edwards,
            ServiceNow, Microsoft Power Platform, and enterprise managed services,
            helping organizations streamline operations and innovate faster.
          </p>
        </div>


        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-16">

          {/* Left Image */}
          <div className="relative">
            {/* <img src="/Handshake.jpg" alt="MFATech team" /> */}

            <img
              src="Meeting2.jpg"
              alt="Team collaboration"
              className="rounded-lg shadow-2xl "
            />
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black px-6 py-4 rounded-lg shadow-xl">
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm font-medium">Years Experience</p>
            </div>
          </div>


          {/* Right Content */}
          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold text-yellow-400">
                Enterprise Expertise
              </h3>
              <p className="text-white/60 mt-2">
                We specialize in delivering scalable enterprise solutions including
                JD Edwards consulting, ServiceNow implementation, and custom Power
                Platform applications.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-yellow-400">
                Digital Transformation
              </h3>
              <p className="text-white/60 mt-2">
                Our team helps businesses modernize their technology stack,
                automate workflows, and improve operational efficiency with
                cutting-edge solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-yellow-400">
                Trusted Technology Partner
              </h3>
              <p className="text-white/60 mt-2">
                From consulting to implementation and managed services, MFATech
                supports organizations at every stage of their digital journey.
              </p>
            </div>

          </div>

        </div>

      </section>

      <section>
        <Cards />
      </section>

    </>
  )
}

export default Home

