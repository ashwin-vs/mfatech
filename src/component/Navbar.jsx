import { useState, useEffect, useRef } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { servicesRegistry } from "../Servicesdata"

const categories = Object.keys(servicesRegistry) // ["Training", "Implementation"]

// ── Dropdown panel ──────────────────────────────────────────
function CategoryDropdown({ category, onClose }) {
    const navigate = useNavigate()
    const services = servicesRegistry[category]

    return (
        <div
            className="absolute top-full left-0 mt-1 bg-black/98 border border-white/[0.1]
                rounded-sm shadow-2xl z-50 overflow-hidden"
            style={{
                minWidth: "240px",
                animation: "dropIn 0.2s cubic-bezier(0.16,1,0.3,1) both",
            }}
        >
            {/* Header */}
            <div className="px-5 py-3 border-b border-white/[0.07]">
                <p className="font-display text-[0.58rem] font-bold tracking-[0.22em] uppercase text-yellow-400 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-yellow-400" />
                    {category}
                </p>
                <p className="text-white/25 text-[0.7rem] font-light mt-0.5 pl-3">
                    {category === "Training" ? "Hands-on programmes for your teams" : "Full-cycle enterprise delivery"}
                </p>
            </div>

            {/* Service items */}
            <div className="py-2">
                {services.map((service) => (
                    <button
                        key={service.id}
                        onClick={() => {
                            navigate(`/services?service=${service.id}`)
                            onClose()
                        }}
                        className="group w-full flex items-center justify-between px-5 py-3 text-left
                            hover:bg-white/[0.04] transition-all duration-150"
                    >
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-yellow-400 transition-colors duration-150 shrink-0" />
                            <span className="text-white/55 text-sm font-light group-hover:text-white transition-colors duration-150">
                                {service.label}
                            </span>
                        </div>
                        <span className="text-yellow-400 text-xs opacity-0 group-hover:opacity-100
                            -translate-x-1 group-hover:translate-x-0 transition-all duration-150">
                            →
                        </span>
                    </button>
                ))}
            </div>

            {/* Footer */}
            <div className="border-t border-white/[0.07] px-5 py-2.5 bg-white/[0.02]">
                <Link
                    to={`/services?service=${services[0].id}`}
                    onClick={onClose}
                    className="font-display text-[0.58rem] font-bold tracking-[0.15em] uppercase text-yellow-400/60 hover:text-yellow-400 transition-colors"
                >
                    View all {category} →
                </Link>
            </div>
        </div>
    )
}

// ── Navbar ───────────────────────────────────────────────────
export default function Navbar() {
    const [menuOpen,       setMenuOpen]       = useState(false)
    const [scrolled,       setScrolled]       = useState(false)
    const [openDropdown,   setOpenDropdown]   = useState(null) // "Training" | "Implementation" | null
    const [mobileExpanded, setMobileExpanded] = useState(null)
    const dropdownRefs = useRef({})
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e) => {
            const clickedOutside = categories.every(
                cat => dropdownRefs.current[cat] && !dropdownRefs.current[cat].contains(e.target)
            )
            if (clickedOutside) setOpenDropdown(null)
        }
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [])

    // Close on route change
    useEffect(() => {
        setOpenDropdown(null)
        setMenuOpen(false)
    }, [location])

    const isServiceActive = (cat) => {
        const param = new URLSearchParams(location.search).get("service")
        if (!param) return false
        return servicesRegistry[cat].some(s => s.id === param)
    }

    const navLinks = [
        { name: "Home",    path: "/" },
        { name: "About",   path: "/aboutus" },
        { name: "Contact", path: "/contact" },
    ]

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
                body { font-family: 'DM Sans', sans-serif; }
                .nav-ul { font-family: 'Syne', sans-serif; }
                .nav-link { position: relative; }
                .nav-link::after {
                    content: '';
                    position: absolute; bottom: -3px; left: 50%;
                    transform: translateX(-50%) scaleX(0);
                    width: 60%; height: 1.5px; background: #facc15;
                    transition: transform 0.25s cubic-bezier(0.16,1,0.3,1);
                }
                .nav-link:hover::after,
                .nav-link.active::after { transform: translateX(-50%) scaleX(1); }
                .mobile-item { animation: slideIn 0.35s ease both; }
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(-12px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes dropIn {
                    from { opacity: 0; transform: translateY(-8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>

            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                ${scrolled ? "backdrop-blur-xl border-b border-white/5" : ""}`}>

                {/* ── DESKTOP BAR ── */}
                <div className={`bg-black/95 border-b border-white/[0.07] flex items-center justify-between
                    px-6 md:px-10 transition-all duration-300
                    ${scrolled ? "h-14" : "h-16"}`}>

                    {/* Logo */}
                    <Link to="/"
                        className="text-white text-2xl tracking-widest font-extrabold select-none"
                        style={{   fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif", }}>
                        MFA<span className="text-yellow-400">Tech</span>
                    </Link>

                    {/* Desktop links */}
                    <ul className="hidden md:flex items-center gap-1 nav-ul">

                        {/* Static links */}
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`nav-link text-[0.72rem] font-bold tracking-[0.14em] uppercase px-4 py-2 transition-colors duration-200
                                        ${location.pathname === link.path ? "text-white active" : "text-white/40 hover:text-white/80"}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}

                        {/* Training & Implementation dropdowns */}
                        {categories.map(cat => (
                            <li
                                key={cat}
                                ref={el => dropdownRefs.current[cat] = el}
                                className="relative"
                            >
                                <button
                                    onClick={() => setOpenDropdown(openDropdown === cat ? null : cat)}
                                    className={`nav-link text-[0.72rem] font-bold tracking-[0.14em] uppercase
                                        px-4 py-2 flex items-center gap-1.5 transition-colors duration-200
                                        ${openDropdown === cat || isServiceActive(cat) ? "text-white active" : "text-white/40 hover:text-white/80"}`}
                                >
                                    {cat}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                                        className={`w-3 h-3 transition-transform duration-200 ${openDropdown === cat ? "rotate-180" : ""}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>
                                {openDropdown === cat && (
                                    <CategoryDropdown category={cat} onClose={() => setOpenDropdown(null)} />
                                )}
                            </li>
                        ))}

                    </ul>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-4">
                        <Link to="/contact"
                            className="hidden md:inline-block text-[0.72rem] font-bold tracking-[0.14em] uppercase
                                bg-yellow-400 text-black px-5 py-2 rounded-sm
                                hover:bg-yellow-300 transition-all duration-200 hover:-translate-y-px"
                            style={{ fontFamily: "'Syne', sans-serif" }}>
                            Get Started
                        </Link>

                        <button onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 focus:outline-none"
                            aria-label="Toggle menu">
                            <span className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? "w-5 translate-y-[6.5px] rotate-45" : "w-5"}`} />
                            <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : "w-4 opacity-100"}`} />
                            <span className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${menuOpen ? "w-5 -translate-y-[6.5px] -rotate-45" : "w-5"}`} />
                        </button>
                    </div>
                </div>

                {/* ── MOBILE DRAWER ── */}
                <div className={`md:hidden bg-black border-b border-white/[0.07] overflow-hidden transition-all duration-500
                    ${menuOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <ul className="py-3">

                        {/* Static links */}
                        {navLinks.map((link, i) => (
                            <li key={link.name} className="mobile-item border-b border-white/[0.05]"
                                style={{ animationDelay: `${i * 0.05}s` }}>
                                <Link to={link.path}
                                    onClick={() => setMenuOpen(false)}
                                    className="group flex items-center justify-between px-8 py-4
                                        text-[0.75rem] font-bold tracking-[0.14em] uppercase
                                        text-white/40 hover:text-white hover:pl-10 transition-all duration-200"
                                    style={{ fontFamily: "'Syne', sans-serif" }}>
                                    {link.name}
                                    <span className="text-yellow-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                </Link>
                            </li>
                        ))}

                        {/* Training & Implementation mobile accordions */}
                        {categories.map((cat, i) => (
                            <li key={cat} className="mobile-item border-b border-white/[0.05]"
                                style={{ animationDelay: `${(navLinks.length + i) * 0.05}s` }}>

                                {/* Category toggle */}
                                <button
                                    onClick={() => setMobileExpanded(mobileExpanded === cat ? null : cat)}
                                    className="flex items-center justify-between w-full px-8 py-4
                                        text-[0.75rem] font-bold tracking-[0.14em] uppercase transition-colors duration-200
                                        hover:text-white"
                                    style={{
                                        fontFamily: "'Syne', sans-serif",
                                        color: mobileExpanded === cat ? "#facc15" : "rgba(255,255,255,0.4)",
                                    }}
                                >
                                    {cat}
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileExpanded === cat ? "rotate-180" : ""}`}
                                        style={{ color: mobileExpanded === cat ? "#facc15" : "rgba(255,255,255,0.3)" }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </button>

                                {/* Sub-items */}
                                <div className={`overflow-hidden transition-all duration-300
                                    ${mobileExpanded === cat ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <div className="bg-white/[0.02] border-t border-white/[0.05] py-2">
                                        {servicesRegistry[cat].map(service => (
                                            <Link
                                                key={service.id}
                                                to={`/services?service=${service.id}`}
                                                onClick={() => { setMenuOpen(false); setMobileExpanded(null) }}
                                                className="flex items-center gap-3 px-10 py-2.5 text-white/45 text-sm font-light hover:text-white transition-colors"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-white/25 shrink-0" />
                                                {service.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}

                    </ul>

                    <div className="px-8 pb-6 pt-1">
                        <Link to="/contact" onClick={() => setMenuOpen(false)}
                            className="block text-center text-[0.75rem] font-bold tracking-[0.14em] uppercase
                                bg-yellow-400 text-black py-3 rounded-sm hover:bg-yellow-300 transition-colors"
                            style={{ fontFamily: "'Syne', sans-serif" }}>
                            Get Started
                        </Link>
                    </div>
                </div>

            </nav>
        </>
    )
}