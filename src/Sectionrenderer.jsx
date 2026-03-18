import React from 'react'

function HeroSection({ data }) {
    return (
        <div className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-yellow-400/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="relative z-10 max-w-2xl" style={{ animation: "fadeUp 0.6s ease both", }}>
                <div className="flex items-center gap-2.5 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    <span className="font-display text-[0.6rem] font-bold tracking-[0.28em] uppercase text-yellow-400">MFATech Services</span>
                </div>
                <h1 className="font-display font-extrabold text-white leading-tight mb-4"
                    style={{
                        fontSize: "clamp(2rem, 4.5vw, 4rem)", fontFamily:
                            "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                    }}>
                    {data.title}
                </h1>
                <div className="h-[2px] bg-yellow-400 rounded-full mb-5" style={{ width: "3rem", }} />
                <p className="text-yellow-400/75 font-display font-bold text-sm tracking-wide mb-4">{data.subtitle}</p>
                <p className="text-white/55 leading-[1.85] font-light"
                    style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)", maxWidth: "50ch" }}>
                    {data.description}
                </p>
            </div>
        </div>
    )
}

function TwoColumnSection({ data }) {
    return (
        <div className="px-6 sm:px-10 lg:px-16 py-16 border-t border-white/[0.07]">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-sm overflow-hidden border"
                    style={{ height: "360px", borderColor: "rgba(255,255,255,0.08)" }}>
                    <div className="absolute top-3 left-3 w-4 h-4 z-10"
                        style={{ borderTop: "2px solid rgba(250,204,21,0.6)", borderLeft: "2px solid rgba(250,204,21,0.6)" }} />
                    <div className="absolute bottom-3 right-3 w-4 h-4 z-10"
                        style={{ borderBottom: "2px solid rgba(250,204,21,0.6)", borderRight: "2px solid rgba(250,204,21,0.6)" }} />
                    <img src={data.image?.src} alt={data.image?.alt}
                        className="w-full h-full object-cover"
                        onError={e => { e.target.style.background = "#1a1a1a"; e.target.style.display = "none" }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div style={{ animation: "fadeUp 0.6s ease 0.15s both" }}>
                    {data.eyebrow && (
                        <p className="font-display text-[0.58rem] font-bold tracking-[0.25em] uppercase text-yellow-400 mb-3">{data.eyebrow}</p>
                    )}
                    <h2 className="font-display font-extrabold text-white leading-tight mb-4"
                        style={{
                            fontSize: "clamp(1.5rem, 2.5vw, 3rem)", fontFamily:
                                "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                        }}>
                        {data.title}
                    </h2>
                    <div className="h-[2px] bg-yellow-400 rounded-full mb-5" style={{ width: "2.5rem" }} />
                    {data.description?.split("\n\n").map((p, i) => (
                        <p key={i} className="text-white/55 text-sm leading-[1.9] font-light mb-3">{p}</p>
                    ))}
                    {data.features && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5">
                            {data.features.map((f, i) => (
                                <li key={i} className="flex items-center gap-2 text-white/60 text-sm font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/60 shrink-0" />{f}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

function IconCardsSection({ data }) {
    return (
        <div className="px-6 sm:px-10 lg:px-16 py-16 bg-[#080808] border-t border-white/[0.07]">
            <div className="mb-10">
                <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <span className="font-display text-[0.6rem] font-bold tracking-[0.28em] uppercase text-yellow-400">How We Work</span>
                </div>
                <h2 className="font-display font-extrabold text-white leading-tight"
                    style={{
                        fontSize: "clamp(1.5rem, 2.5vw, 3rem)", fontFamily:
                            "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                    }}>
                    {data.title}
                </h2>
                {data.subtitle && <p className="text-white/40 text-sm font-light mt-2">{data.subtitle}</p>}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.cards.map((card, i) => (
                    <div key={i}
                        className="p-5 rounded-sm border bg-[#111] group cursor-default transition-all duration-300"
                        style={{ borderColor: "rgba(255,255,255,0.08)", animation: `fadeUp 0.5s ease ${0.05 + i * 0.07}s both`, }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(250,204,21,0.35)"; e.currentTarget.style.transform = "translateY(-3px)" }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "translateY(0)" }}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-display font-extrabold text-3xl leading-none select-none transition-colors duration-300"
                                style={{ color: "rgba(250,204,21,0.22)" ,fontFamily:
                "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",}}>
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="w-6 h-px" style={{ background: "rgba(250,204,21,0.2)" }} />
                        </div>
                        <h3 className="font-display font-bold text-white text-[0.92rem] mb-2 leading-snug group-hover:text-yellow-400 transition-colors duration-300"
                            style={{
                                fontFamily:
                                    "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                            }}>
                            {card.title}
                        </h3>
                        <p className="text-white/50 text-sm leading-[1.8] font-light">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function BenefitsSection({ data }) {
    return (
        <div className="px-6 sm:px-10 lg:px-16 py-16 border-t border-white/[0.07]">
            <div className="grid lg:grid-cols-3 gap-10 items-start">
                <div>
                    <div className="flex items-center gap-2.5 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        <span className="font-display text-[0.6rem] font-bold tracking-[0.28em] uppercase text-yellow-400">Benefits</span>
                    </div>
                    <h2 className="font-display font-extrabold text-white leading-tight mb-4"
                        style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",fontFamily:
                "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif", }}>
                        {data.title}
                    </h2>
                    <div className="h-[2px] bg-yellow-400 rounded-full mb-4" style={{ width: "2.5rem" }} />
                    {data.description && <p className="text-white/45 text-sm font-light leading-relaxed mb-5">{data.description}</p>}
                    {data.additionalInfo && (
                        <p className="text-white/30 text-xs font-light leading-relaxed italic border-l-2 border-yellow-400/30 pl-3">
                            {data.additionalInfo}
                        </p>
                    )}
                </div>
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-3">
                    {data.items.map((item, i) => (
                        <div key={i} className="p-4 rounded-sm border bg-[#111] transition-all duration-300"
                            style={{ borderColor: "rgba(255,255,255,0.08)", animation: `fadeUp 0.5s ease ${0.08 + i * 0.07}s both` }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(250,204,21,0.3)"}
                            onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
                        >
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                                <h3 className="font-display font-bold text-white text-[0.88rem]" 
                                style={{fontFamily:
                "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",}}>{item.title}</h3>
                            </div>
                            <p className="text-white/50 text-sm leading-[1.8] font-light pl-4">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function CTASection({ data }) {
    return (
        <div className="px-6 sm:px-10 lg:px-16 py-16 border-t border-white/[0.07]">
            <div className="bg-[#111] border rounded-sm p-10 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <div>
                    <h3 className="font-display font-extrabold text-white mb-2"
                        style={{ fontSize: "clamp(1.3rem, 2vw, 3rem)",fontFamily:
                "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif", }}>
                        {data.title}
                    </h3>
                    <p className="text-white/45 text-sm font-light max-w-md leading-relaxed" >{data.description}</p>
                </div>
                <div className="flex flex-wrap gap-3 shrink-0">
                    <a href="/contact"
                        className="font-display text-[0.65rem] font-bold tracking-[0.18em] uppercase
                            bg-yellow-400 text-black px-6 py-3 rounded-sm
                            hover:bg-yellow-300 transition-all duration-200 hover:-translate-y-px">
                        {data.buttonText}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function SectionRenderer({ sections }) {
    return (
        <>
            {sections.map(section => {
                switch (section.type) {
                    case "hero": return <HeroSection key={section.id} data={section.data} />
                    case "two-column": return <TwoColumnSection key={section.id} data={section.data} />
                    case "icon-cards": return <IconCardsSection key={section.id} data={section.data} />
                    case "benefits": return <BenefitsSection key={section.id} data={section.data} />
                    case "cta": return <CTASection key={section.id} data={section.data} />
                    default: return null
                }
            })}
        </>
    )
}