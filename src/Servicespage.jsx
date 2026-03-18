import React, { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { servicesRegistry, defaultService } from './Servicesdata'
import SectionRenderer from './Sectionrenderer'

const categories = Object.keys(servicesRegistry) // ["Training", "Implementation"]

export default function ServicesPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [activeCategory, setActiveCategory] = useState(categories[0])
    const [activeService, setActiveService] = useState(defaultService)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    // Sync from URL on load
    useEffect(() => {
        const id = searchParams.get('service')
        if (id) {
            for (const cat of categories) {
                const found = servicesRegistry[cat].find(s => s.id === id)
                if (found) {
                    setActiveCategory(cat)
                    setActiveService(found)
                    break
                }
            }
        }
    }, [searchParams])

    const handleCategoryClick = (cat) => {
        setActiveCategory(cat)
        // Auto-select first service of the category
        const first = servicesRegistry[cat][0]
        setActiveService(first)
        setSearchParams({ service: first.id })
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleServiceClick = (service) => {
        setActiveService(service)
        setSearchParams({ service: service.id })
        setMobileSidebarOpen(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
                .font-display { font-family:  'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'; }
                .font-body    { 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'; }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
                .content-fade { animation: fadeIn 0.35s ease both; }
            `}</style>

            <div className="bg-[#0a0a0a] text-white font-body min-h-screen flex flex-col">

                {/* ── TOP BAR ── */}
                <div className="pt-16 border-b border-white/[0.07]">
                    <div className="px-6 sm:px-10 lg:px-24 py-8 flex items-end justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2.5 mb-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                <span className="font-display text-[0.6rem] font-bold tracking-[0.28em] uppercase text-yellow-400">
                                    What We Offer
                                </span>
                            </div>
                            <h1 className="font-display font-extrabold text-white"
                                style={{
                                    fontSize: "clamp(1.6rem, 3.5vw, 3rem)", fontFamily:
                                        "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                                }}>
                                Our <span className="text-yellow-400">Services</span>
                            </h1>
                        </div>
                        {/* Mobile browse button */}
                        <button
                            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                            className="lg:hidden flex items-center gap-2 font-display text-[0.65rem] font-bold tracking-[0.15em] uppercase
                                border border-white/15 text-white/55 px-4 py-2 rounded-sm
                                hover:border-yellow-400/40 hover:text-white transition-all duration-200"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                            </svg>
                            Browse
                        </button>
                    </div>
                </div>

                {/* ── BODY ── */}
                <div className="flex flex-1">

                    {/* ── SIDEBAR ── */}
                    <aside className={`
                        lg:w-64 shrink-0 border-r border-white/[0.07] bg-[#080808]
                        lg:block lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] overflow-y-auto
                        ${mobileSidebarOpen ? 'block' : 'hidden'}
                    `}>
                        <div className="p-5 flex flex-col gap-5">

                            {categories.map(cat => (
                                <div key={cat}>
                                    {/* ── Category Tab ── */}
                                    <button
                                        onClick={() => handleCategoryClick(cat)}
                                        className="w-full flex items-center justify-between px-4 py-3 rounded-sm mb-2 transition-all duration-200"
                                        style={{
                                            background: activeCategory === cat ? "rgba(250,204,21,0.08)" : "rgba(255,255,255,0.02)",
                                            border: `1px solid ${activeCategory === cat ? "rgba(250,204,21,0.3)" : "rgba(255,255,255,0.08)"}`,
                                        }}
                                    >
                                        <span className="font-display font-bold text-sm tracking-wide"
                                            style={{ color: activeCategory === cat ? "#facc15" : "rgba(255,255,255,0.5)",  fontFamily:
                "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif", }}>
                                            {cat}
                                        </span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            className="w-3.5 h-3.5 transition-transform duration-200"
                                            style={{
                                                color: activeCategory === cat ? "#facc15" : "rgba(255,255,255,0.3)",
                                                transform: activeCategory === cat ? "rotate(90deg)" : "rotate(0deg)"
                                            }}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>

                                    {/* ── Sub-items (visible when category is active) ── */}
                                    <div className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ${activeCategory === cat ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        {servicesRegistry[cat].map(service => (
                                            <button
                                                key={service.id}
                                                onClick={() => handleServiceClick(service)}
                                                className="group flex items-center justify-between w-full px-4 py-2.5 rounded-sm text-left transition-all duration-200"
                                                style={{
                                                    background: activeService.id === service.id ? "rgba(250,204,21,0.06)" : "transparent",
                                                    border: `1px solid ${activeService.id === service.id ? "rgba(250,204,21,0.2)" : "transparent"}`,
                                                }}
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <span
                                                        className="w-1 h-1 rounded-full shrink-0 transition-colors duration-200"
                                                        style={{ background: activeService.id === service.id ? "#facc15" : "rgba(255,255,255,0.25)" }}
                                                    />
                                                    <span className="text-sm font-light transition-colors duration-200"
                                                        style={{ color: activeService.id === service.id ? "#fff" : "rgba(255,255,255,0.45)" }}>
                                                        {service.label}
                                                    </span>
                                                </div>
                                                <span className="text-yellow-400 text-xs transition-opacity duration-200"
                                                    style={{ opacity: activeService.id === service.id ? 1 : 0 }}>
                                                    →
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Sidebar CTA */}
                            <div className="mt-2 p-4 rounded-sm" style={{ border: "1px solid rgba(250,204,21,0.15)", background: "rgba(250,204,21,0.03)" }}>
                                <p className="font-display font-bold text-white text-[0.8rem] mb-1">Not sure where to start?</p>
                                <p className="text-white/35 text-xs font-light leading-relaxed mb-3">
                                    Talk to our team and we'll guide you to the right service.
                                </p>
                                <Link to="/contact"
                                    className="font-display text-[0.6rem] font-bold tracking-[0.15em] uppercase
                                        bg-yellow-400 text-black px-4 py-2 rounded-sm inline-block
                                        hover:bg-yellow-300 transition-all duration-200">
                                    Contact Us
                                </Link>
                            </div>

                        </div>
                    </aside>

                    {/* ── CONTENT ── */}
                    <main key={activeService.id} className="flex-1 min-w-0 content-fade">
                        <SectionRenderer sections={activeService.sections} />
                    </main>

                </div>
            </div>
        </>
    )
}