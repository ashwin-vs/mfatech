import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "200+", label: "Clients Served" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "50+", label: "Experts on Team" },
]

const values = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        title: "Innovation First",
        description: "We stay ahead of the curve by continuously evolving our solutions with the latest enterprise technologies.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: "Trusted Partnership",
        description: "We build long-term relationships grounded in transparency, accountability, and measurable results.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
        title: "People-Centered",
        description: "Our team of certified experts is dedicated to understanding your unique needs and delivering tailored solutions.",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
        ),
        title: "Results Driven",
        description: "Every engagement is measured by business impact — not just deliverables. We succeed when you succeed.",
    },
]

const faqs = [
    {
        q: "What industries does MFATech serve?",
        a: "MFATech serves a wide range of industries including manufacturing, distribution, healthcare, financial services, retail, and public sector. Our enterprise solutions are adaptable to any organization's unique operational requirements.",
    },
    {
        q: "How long does a typical JD Edwards implementation take?",
        a: "Implementation timelines vary based on scope and complexity. A standard JD Edwards implementation typically ranges from 3 to 12 months. We begin every engagement with a detailed discovery phase to provide an accurate timeline and resource plan.",
    },
    {
        q: "Do you offer post-implementation support?",
        a: "Yes. We provide comprehensive managed IT services and ongoing support after every implementation. Our support tiers range from basic helpdesk coverage to fully managed enterprise services with dedicated account managers.",
    },
    {
        q: "Can MFATech integrate ServiceNow with our existing systems?",
        a: "Absolutely. Our ServiceNow team specializes in enterprise integrations — connecting ServiceNow with ERP systems, HRMS platforms, monitoring tools, and custom applications via REST APIs and MID Servers.",
    },
    {
        q: "What Microsoft Power Platform services do you provide?",
        a: "We design and build custom Power Apps, automate business workflows using Power Automate, create data-driven dashboards with Power BI, and develop intelligent virtual agents with Power Virtual Agents.",
    },
    {
        q: "How do I get started with MFATech?",
        a: "Simply reach out via our contact form or call us directly. We'll schedule a complimentary discovery call to understand your needs and propose the right solution. No commitment required for the initial consultation.",
    },
]

function FAQItem({ faq }) {
    const [open, setOpen] = useState(false)
    return (
        <div
            className={`border rounded-sm overflow-hidden transition-all duration-300 ${open ? 'border-yellow-400/40 bg-[#131313]' : 'border-white/08 bg-[#0f0f0f]'}`}
            style={{ borderColor: open ? 'rgba(250,204,21,0.35)' : 'rgba(255,255,255,0.08)' }}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
            >
                <span className={`font-display font-bold text-[0.92rem] leading-snug transition-colors duration-200 ${open ? 'text-yellow-400' : 'text-white'}`}>
                    {faq.q}
                </span>
                <span
                    className="shrink-0 w-7 h-7 flex items-center justify-center rounded-sm border transition-all duration-300"
                    style={{
                        borderColor: open ? 'rgba(250,204,21,0.4)' : 'rgba(255,255,255,0.12)',
                        background: open ? 'rgba(250,204,21,0.08)' : 'transparent',
                        transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
                        color: open ? '#facc15' : 'rgba(255,255,255,0.4)',
                    }}
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </span>
            </button>
            <div
                className="overflow-hidden transition-all duration-400"
                style={{ maxHeight: open ? '300px' : '0', opacity: open ? 1 : 0, transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease' }}
            >
                <p className="px-6 pb-5 text-white/55 text-sm leading-[1.85] font-light border-t border-white/[0.06] pt-4">
                    {faq.a}
                </p>
            </div>
        </div>
    )
}

function AboutUs() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
                .font-display { font-family: 'Syne', sans-serif; }
                .font-body    { font-family: 'DM Sans', sans-serif; }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(22px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes lineGrow {
                    from { width: 0; }
                    to   { width: 3.5rem; }
                }

                .img-frame {
                    position: relative; border-radius: 4px;
                    overflow: hidden; border: 1px solid rgba(255,255,255,0.08);
                }
                .img-frame::after {
                    content: ''; position: absolute; inset: 0;
                    background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%);
                }
                .img-frame img {
                    width: 100%; height: 100%; object-fit: cover; display: block;
                    transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
                }
                .img-frame:hover img { transform: scale(1.04); }
                .corner { position: absolute; width: 18px; height: 18px; z-index: 2; }
                .corner-tl { top: 12px; left: 12px; border-top: 2px solid rgba(250,204,21,0.6); border-left: 2px solid rgba(250,204,21,0.6); }
                .corner-br { bottom: 12px; right: 12px; border-bottom: 2px solid rgba(250,204,21,0.6); border-right: 2px solid rgba(250,204,21,0.6); }

                .value-card {
                    display: flex; gap: 1rem; padding: 1.4rem;
                    background: #111; border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 4px; transition: border-color 0.3s, transform 0.3s, background 0.3s;
                }
                .value-card:hover { border-color: rgba(250,204,21,0.35); background: #161616; transform: translateY(-3px); }
                .value-icon {
                    width: 2.4rem; height: 2.4rem;
                    background: rgba(250,204,21,0.08); border: 1px solid rgba(250,204,21,0.18);
                    border-radius: 4px; display: flex; align-items: center; justify-content: center;
                    color: #facc15; flex-shrink: 0; transition: background 0.3s;
                }
                .value-card:hover .value-icon { background: rgba(250,204,21,0.15); }

                .stat-card {
                    background: #111; border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 4px; padding: 1.5rem; text-align: center;
                    transition: border-color 0.3s, transform 0.3s;
                }
                .stat-card:hover { border-color: rgba(250,204,21,0.3); transform: translateY(-3px); }

                .mission-card {
                    background: #111; border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 4px; padding: 2rem;
                    transition: border-color 0.3s, transform 0.3s;
                    position: relative; overflow: hidden;
                }
                .mission-card::before {
                    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
                    background: linear-gradient(to right, #facc15, transparent);
                    transform: scaleX(0); transform-origin: left;
                    transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
                }
                .mission-card:hover { border-color: rgba(250,204,21,0.35); transform: translateY(-4px); }
                .mission-card:hover::before { transform: scaleX(1); }
            `}</style>

            <div className="bg-[#0a0a0a] text-white font-body min-h-screen">

                {/* ── HERO BANNER ── */}
                <div className="relative pt-32 pb-24 px-6 sm:px-10 lg:px-24 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/Handshake.jpg')" }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                    <div className="relative z-10 max-w-2xl" style={{ animation: "fadeUp 0.6s ease both" }}>
                        <div className="flex items-center gap-2.5 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                            <span className="font-display text-[0.62rem] font-bold tracking-[0.28em] uppercase text-yellow-400">Our Story</span>
                        </div>
                        <h1 className="font-display font-extrabold text-white leading-tight mb-5"
                            style={{
                                fontSize: "clamp(2.4rem, 6vw, 4rem)", fontFamily:
                                    "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                            }}>
                            We Are <span className="text-yellow-400">MFATech</span>
                        </h1>
                        <div className="h-[2px] bg-yellow-400 rounded-full mb-1"
                            style={{ animation: "lineGrow 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s both", width: "3.5rem" }} />
                        <p className="text-white/65 leading-[1.85] font-light text-justify"
                            style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)", maxWidth: "46ch" }}>
                            We are a technology solutions provider specializing in enterprise platforms including JD Edwards EnterpriseOne, ServiceNow, and Microsoft technologies. Our mission is to help organizations transform their business processes through modern digital solutions, expert implementation, and industry-focused training programs.                        </p>
                    </div>
                </div>

                {/* ── STATS ── */}
                <div className="px-6 sm:px-10 lg:px-24 pb-16 border-b border-white/[0.07]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {stats.map((s, i) => (
                            <div key={i} className="stat-card" style={{ animation: `fadeUp 0.5s ease ${i * 0.08}s both` }}>
                                <p className="font-display font-extrabold text-yellow-400 mb-1"
                                    style={{
                                        fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontFamily:
                                            "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                                    }}>{s.value}</p>
                                <p className="font-display text-[0.6rem] font-bold tracking-[0.18em] uppercase text-white/40">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── WHO WE ARE ── */}
                <div className="px-6 sm:px-10 lg:px-24 py-24">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        <div className="img-frame" style={{ height: "420px", animation: "fadeUp 0.6s ease 0.1s both" }}>
                            <div className="corner corner-tl" />
                            <div className="corner corner-br" />
                            <img src="/Handshake.jpg" alt="MFATech team" />
                        </div>
                        <div style={{ animation: "fadeUp 0.6s ease 0.25s both" }}>
                            <div className="flex items-center gap-2.5 mb-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                <span className="font-display text-[0.62rem] font-bold tracking-[0.28em] uppercase text-yellow-400">Who We Are</span>
                            </div>
                            <h2 className="font-display font-extrabold text-white leading-tight mb-5"
                                style={{
                                    fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontFamily:
                                        "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                                }}>
                                Simplifying Enterprise Technology for<br /><span className="text-yellow-400">Real Business Impact</span>
                            </h2>
                            <div className="h-[2px] bg-yellow-400 rounded-full mb-6"
                                style={{ animation: "lineGrow 0.6s cubic-bezier(0.16,1,0.3,1) 0.3s both", width: "3.5rem" }} />
                            <p className="text-white/55 text-sm leading-[1.9] font-light mb-4">
                               Our expertise spans leading enterprise platforms including JD Edwards EnterpriseOne, ServiceNow, and the 
                               Microsoft Power Platform, along with comprehensive managed IT services. This allows us to provide our 
                               clients with a single trusted partner capable of supporting their entire technology ecosystem—from implementation and 
                               integration to training, optimization, and ongoing support.
                            </p>
                            {/* <p className="text-white/45 text-sm leading-[1.9] font-light mb-8">
                                Our expertise spans JD Edwards ERP, ServiceNow ITSM, Microsoft Power Platform,
                                and managed IT services — giving clients a single trusted partner across their
                                entire technology landscape.
                            </p> */}
                            <Link to="/services"
                                className="font-display text-[0.68rem] font-bold tracking-[0.18em] uppercase
                                    bg-yellow-400 text-black px-7 py-3.5 rounded-sm inline-block
                                    hover:bg-yellow-300 transition-all duration-200 hover:-translate-y-px">
                                Our Services →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ── MISSION & VISION ── */}
                <div className="px-6 sm:px-10 lg:px-24 py-20 bg-[#080808] border-y border-white/[0.07]">
                    <div className="mb-12" style={{ animation: "fadeUp 0.5s ease both" }}>
                        <div className="flex items-center gap-2.5 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                            <span className="font-display text-[0.62rem] font-bold tracking-[0.28em] uppercase text-yellow-400">Purpose & Direction</span>
                        </div>
                        <h2 className="font-display font-extrabold text-white leading-tight"
                            style={{
                                fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontFamily:
                                    "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                            }}>
                            Our Mission <span className="text-yellow-400">&</span> Vision.
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Mission */}
                        <div className="mission-card" style={{ animation: "fadeUp 0.55s ease 0.1s both" }}>
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-sm bg-yellow-400/10 border border-yellow-400/25
                                    flex items-center justify-center text-yellow-400 shrink-0">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-display text-[0.6rem] font-bold tracking-[0.2em] uppercase text-yellow-400/70 mb-0.5">Our Mission</p>
                                    <h3 className="font-display font-bold text-white text-lg">What We Do Every Day</h3>
                                </div>
                            </div>
                            <p className="text-white/65 text-md leading-[1.9] font-light mb-5">
                                To empower organizations with reliable, scalable, and innovative enterprise technology solutions that simplify complex systems, optimize business processes, and accelerate digital transformation.Through expert implementation, consulting, and training services, 
                                we help maximize the value of your enterprise platforms while ensuring long-term operational efficiency and growth.
                            </p>
                            <ul className="flex flex-col gap-2.5">
                                {["Delivering end-to-end ERP and enterprise technology solutions", "Implementing and optimizing platforms such as JD Edwards EnterpriseOne, ServiceNow, and Microsoft Power Platform", "Simplifying complex enterprise technology environments"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-white/50 text-sm font-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/60 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Vision */}
                        <div className="mission-card" style={{ animation: "fadeUp 0.55s ease 0.2s both" }}>
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-sm bg-yellow-400/10 border border-yellow-400/25
                                    flex items-center justify-center text-yellow-400 shrink-0">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-display text-[0.6rem] font-bold tracking-[0.2em] uppercase text-yellow-400/70 mb-0.5">Our Vision</p>
                                    <h3 className="font-display font-bold text-white text-lg">Where We're Headed</h3>
                                </div>
                            </div>
                            <p className="text-white/65 text-md leading-[1.9] font-light mb-5">
                               To become a globally trusted enterprise technology partner, helping organizations leverage modern digital 
                               platforms to solve complex business challenges, build resilient systems, and achieve sustainable growth by delivering expertise in enterprise solutions such as JD Edwards EnterpriseOne, 
                               ServiceNow, and the Microsoft Power Platform, we aim to transform how businesses adopt and maximize technology.
                            </p>
                            <ul className="flex flex-col gap-2.5">
                                {["Becoming a trusted leader in enterprise digital transformation", "Delivering innovative and impactful technology solutions", "Building future-ready systems that evolve with business needs"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-white/50 text-sm font-light">
                                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/60 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ── CORE VALUES ── */}
                <div className="px-6 sm:px-10 lg:px-24 py-24">
                    <div className="mb-12" style={{ animation: "fadeUp 0.5s ease both" }}>
                        <div className="flex items-center gap-2.5 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                            <span className="font-display text-[0.62rem] font-bold tracking-[0.28em] uppercase text-yellow-400">What Drives Us</span>
                        </div>
                        <h2 className="font-display font-extrabold text-white leading-tight"
                            style={{
                                fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontFamily:
                                    "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                            }}>
                            Our Core <span className="text-yellow-400">Values.</span>
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {values.map((v, i) => (
                            <div key={i} className="value-card" style={{ animation: `fadeUp 0.5s ease ${0.1 + i * 0.09}s both` }}>
                                <div className="value-icon">{v.icon}</div>
                                <div>
                                    <h3 className="font-display font-bold text-white text-[0.95rem] mb-2">{v.title}</h3>
                                    <p className="text-white/50 text-sm leading-[1.8] font-light">{v.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── FAQ ── */}
                <div className="px-6 sm:px-10 lg:px-24 py-20 bg-[#080808] border-t border-white/[0.07]">
                    <div className="grid lg:grid-cols-3 gap-14 items-start">

                        {/* Left label */}
                        <div className="lg:col-span-1" style={{ animation: "fadeUp 0.5s ease both" }}>
                            <div className="flex items-center gap-2.5 mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                <span className="font-display text-[0.62rem] font-bold tracking-[0.28em] uppercase text-yellow-400">FAQ</span>
                            </div>
                            <h2 className="font-display font-extrabold text-white leading-tight mb-5"
                                style={{
                                    fontSize: "clamp(1.8rem, 3vw, 4rem)", fontFamily:
                                        "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                                }}>
                                Common<br /><span className="text-yellow-400">Questions.</span>
                            </h2>
                            <div className="h-[2px] bg-yellow-400 rounded-full mb-6"
                                style={{ animation: "lineGrow 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s both", width: "3.5rem" }} />
                            <p className="text-white/45 text-sm leading-[1.85] font-light mb-8">
                                Can't find what you're looking for? Reach out to our team directly.
                            </p>
                            <Link to="/contact"
                                className="font-display text-[0.68rem] font-bold tracking-[0.18em] uppercase
                                    border border-white/15 text-white/55 px-6 py-3 rounded-sm inline-block
                                    hover:border-yellow-400/40 hover:text-white transition-all duration-200">
                                Contact Us →
                            </Link>
                        </div>

                        {/* FAQ accordion */}
                        <div className="lg:col-span-2 flex flex-col gap-3" style={{ animation: "fadeUp 0.55s ease 0.15s both" }}>
                            {faqs.map((faq, i) => (
                                <FAQItem key={i} faq={faq} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── CTA BANNER ── */}
                {/* <div className="px-6 sm:px-10 lg:px-24 py-20 border-t border-white/[0.07]">
                    <div className="bg-[#111] border border-white/10 rounded-sm p-10 sm:p-14
                        flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
                        style={{ animation: "fadeUp 0.5s ease both" }}>
                        <div>
                            <h3 className="font-display font-extrabold text-white mb-2"
                                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}>
                                Ready to Work With Us?
                            </h3>
                            <p className="text-white/45 text-sm font-light max-w-sm leading-relaxed">
                                Let's explore how MFATech can help your organization transform and grow.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 shrink-0">
                            <a href="#"
                                className="font-display text-[0.68rem] font-bold tracking-[0.18em] uppercase
                                    bg-yellow-400 text-black px-7 py-3.5 rounded-sm
                                    hover:bg-yellow-300 transition-all duration-200 hover:-translate-y-px">
                                Get in Touch
                            </a>
                            <a href="#"
                                className="font-display text-[0.68rem] font-bold tracking-[0.18em] uppercase
                                    border border-white/15 text-white/55 px-7 py-3.5 rounded-sm
                                    hover:border-yellow-400/40 hover:text-white transition-all duration-200">
                                View Services →
                            </a>
                        </div>
                    </div>
                </div> */}

            </div>
        </>
    )
}

export default AboutUs