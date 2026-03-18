import React from 'react'
import { Link } from 'react-router-dom'

const footerLinks = {
    Services: [
        {
            name: "TRAINING",
            path: "/services?service=training-jde"
        },
        {
            name: "IMPLEMENTATION",
            path: "/services?service=implementation-servicenow"
        },

    ],
    Company: [
        {
            name: "ABOUT US",
            path: "/aboutus"
        },
        {
            name: "BLOG",
            path: "/aboutus"
        },

    ],
    Support: [
        {
            name: "CONTACT US",
            path: "/contact"
        },
        {
            name: "PRIVACY POLICY",
            path: "/contact"
        },

    ],
}

const socials = [
    {
        label: "LinkedIn",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        label: "GitHub",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
        ),
    },
]

function Footer() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
                .font-display { font-family: 'Syne', sans-serif; }
                .font-body    { font-family: 'DM Sans', sans-serif; }

                .footer-link {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.45);
                    font-weight: 300;
                    transition: color 0.2s, padding-left 0.2s;
                    display: inline-block;
                    text-decoration: none;
                }
                .footer-link:hover {
                    color: #facc15;
                    padding-left: 4px;
                }

                .social-btn {
                    width: 2.25rem; height: 2.25rem;
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 4px;
                    display: flex; align-items: center; justify-content: center;
                    color: rgba(255,255,255,0.4);
                    transition: border-color 0.2s, color 0.2s, background 0.2s;
                    text-decoration: none;
                }
                .social-btn:hover {
                    border-color: rgba(250,204,21,0.5);
                    color: #facc15;
                    background: rgba(250,204,21,0.06);
                }

                .contact-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    color: rgba(255,255,255,0.45);
                    font-size: 0.875rem;
                    font-weight: 300;
                    line-height: 1.6;
                }
                .contact-icon {
                    color: #facc15;
                    flex-shrink: 0;
                    margin-top: 2px;
                }
            `}</style>

            <footer className="bg-[#080808] text-white font-body border-t border-white/[0.07]">

                {/* Top CTA Banner */}
                <div className="border-b border-white/[0.07]">
                    <div className="px-6 sm:px-10 lg:px-24 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <h3 className="font-display font-extrabold text-white mb-1"
                                style={{
                                    fontSize: "clamp(1.2rem, 2.5vw, 2rem)", fontFamily:
                                        "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                                }}>
                                Ready to Transform Your Business?
                            </h3>
                            <p className="text-white/40 text-sm font-light">
                                Let's talk about how MFATech can accelerate your digital journey.
                            </p>
                        </div>
                        <Link
                            to="/contact"
                            className="font-display text-[0.68rem] font-bold tracking-[0.18em] uppercase
                                bg-yellow-400 text-black px-7 py-3.5 rounded-sm shrink-0
                                hover:bg-yellow-300 transition-all duration-200 hover:-translate-y-px"
                        >
                            Get in Touch →
                        </Link>
                    </div>
                </div>

                {/* Main Footer Grid */}
                <div className="px-6 sm:px-10 lg:px-24 py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

                        {/* Brand Column */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            {/* Logo */}
                            <a href="#" className="font-display font-extrabold text-white text-2xl tracking-widest uppercase w-fit">
                                MFA<span className="text-yellow-400">Tech</span>
                            </a>

                            <p className="text-white/45 text-sm leading-[1.85] font-light max-w-xs">
                                A trusted enterprise technology partner delivering end-to-end digital
                                transformation solutions across JDE, ServiceNow, and Microsoft platforms.
                            </p>

                            {/* Contact Info */}
                            <div className="flex flex-col gap-3">
                                <div className="contact-item">
                                    <svg className="contact-icon w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    <span>islahsiddiqui@outlook.com</span>
                                </div>
                                <div className="contact-item">
                                    <svg className="contact-icon w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    <span>7737444367</span>
                                </div>
                                <div className="contact-item">
                                    <svg className="contact-icon w-4 h-4 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                    <span>Dallas, Texas
                                        {/* <br />San Francisco, CA 94105*/}
                                    </span>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="flex items-center gap-2 pt-1">
                                {socials.map((s) => (
                                    <a key={s.label} href={s.href} aria-label={s.label} className="social-btn">
                                        {s.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Link Columns */}
                        {Object.entries(footerLinks).map(([heading, links]) => (
                            <div key={heading} className="flex flex-col gap-4">
                                <div>
                                    <p className="font-display text-[0.62rem] font-bold tracking-[0.22em] uppercase text-yellow-400 mb-4">
                                        {heading}
                                    </p>
                                    <div className="w-6 h-px bg-yellow-400/30 mb-5" />
                                </div>
                                <ul className="flex flex-col gap-3">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link to={link.path} className="footer-link">{link.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/[0.07] px-6 sm:px-10 lg:px-24 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                        <p className="text-white/25 text-xs font-light tracking-wide">
                            © {new Date().getFullYear()} MFATech. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="text-white/25 text-xs font-light hover:text-white/60 transition-colors duration-200"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer