import React from 'react'

const services = [
    {
        number: "01",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0M4.5 12H3m16.5 0H21M12 4.5V3m0 18v-1.5M6.343 6.343l-1.06-1.06M18.717 18.717l-1.06-1.06M6.343 17.657l-1.06 1.06M18.717 5.283l-1.06 1.06" />
            </svg>
        ),
        title: "JD Edwards Consulting",
        subtitle: "ERP Solutions",
        description: "Implementation, customization, and ongoing support for JD Edwards enterprise systems tailored to your operational needs.",
        tags: ["Implementation", "Support", "Customization"],
    },
    {
        number: "02",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
        ),
        title: "ServiceNow Solutions",
        subtitle: "ITSM & Automation",
        description: "Workflow automation, ITSM implementation, and enterprise platform integration to streamline your IT operations at scale.",
        tags: ["ITSM", "Automation", "Integration"],
    },
    {
        number: "03",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
            </svg>
        ),
        title: "Power Apps Development",
        subtitle: "Microsoft Platform",
        description: "Custom business applications using Microsoft Power Platform to accelerate digital transformation across your organization.",
        tags: ["Power Apps", "Power BI", "Automate"],
    },
    //     {
    //         number: "04",
    //         icon: (
    //             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
    //                 <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    //             </svg>
    //         ),
    //         title: "Managed IT Services",
    //         subtitle: "Enterprise Support",
    //         description: "End-to-end IT support, proactive monitoring, and system maintenance to ensure reliable, always-on enterprise operations.",
    //         tags: ["Monitoring", "Support", "Maintenance"],
    //     },
]

function Services() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');
                .font-display { font-family: 'Syne', sans-serif; }
                .font-body    { font-family: 'DM Sans', sans-serif; }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }

                .service-card {
                    position: relative;
                    background: #141414;
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 4px;
                    padding: 2.25rem;
                    overflow: hidden;
                    transition: border-color 0.3s, transform 0.3s, background 0.3s, box-shadow 0.3s;
                    cursor: default;
                    display: flex;
                    flex-direction: column;
                }

                .service-card::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(250,204,21,0.05) 0%, transparent 60%);
                    opacity: 0;
                    transition: opacity 0.35s;
                }

                .service-card:hover {
                    border-color: rgba(250,204,21,0.5);
                    background: #181818;
                    transform: translateY(-5px);
                    box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(250,204,21,0.08);
                }

                .service-card:hover::after { opacity: 1; }

                .card-top-line {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 2px;
                    background: linear-gradient(to right, #facc15, rgba(250,204,21,0.2));
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.45s cubic-bezier(0.16,1,0.3,1);
                }
                .service-card:hover .card-top-line { transform: scaleX(1); }

                .card-number {
                    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
                    font-weight: 800;
                    font-size: 4rem;
                    line-height: 1;
                    color: rgba(199, 199, 199, 0.93);
                    transition: color 0.3s;
                    user-select: none;
                    margin-bottom: 1.5rem;
                }
                .service-card:hover .card-number { color: rgba(250,204,21,0.45); }

                .card-icon {
                    color: rgba(255,255,255,0.5);
                    margin-bottom: 1.25rem;
                    transition: color 0.3s;
                }
                .service-card:hover .card-icon { color: #facc15; }

                .card-subtitle {
                    font-family: 'Syne', sans-serif;
                    font-size: 0.6rem;
                    font-weight: 700;
                    letter-spacing: 0.22em;
                    text-transform: uppercase;
                    color: rgba(250,204,21,0.7);
                    margin-bottom: 0.5rem;
                }

                .card-title {
                    font-family: 'Syne', sans-serif;
                    font-weight: 700;
                    font-size: 1.08rem;
                    color: #ffffff;
                    line-height: 1.35;
                    margin-bottom: 1rem;
                    transition: color 0.3s;
                }
                .service-card:hover .card-title { color: #facc15; }

                .card-divider {
                    width: 2rem;
                    height: 1px;
                    background: rgba(255,255,255,0.15);
                    margin-bottom: 1rem;
                    transition: width 0.3s, background 0.3s;
                }
                .service-card:hover .card-divider {
                    width: 3rem;
                    background: rgba(250,204,21,0.4);
                }

                .card-desc {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.875rem;
                    color: rgba(255,255,255,0.6);
                    line-height: 1.8;
                    font-weight: 300;
                    margin-bottom: 1.5rem;
                    flex: 1;
                }

                .tag {
                    font-family: 'Syne', sans-serif;
                    font-size: 0.58rem;
                    font-weight: 700;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.45);
                    border: 1px solid rgba(255,255,255,0.15);
                    padding: 0.22rem 0.65rem;
                    border-radius: 2px;
                    transition: color 0.2s, border-color 0.2s, background 0.2s;
                }
                .service-card:hover .tag {
                    color: rgba(250,204,21,0.8);
                    border-color: rgba(250,204,21,0.3);
                    background: rgba(250,204,21,0.05);
                }

                .learn-more {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-top: 1.5rem;
                    font-family: 'Syne', sans-serif;
                    font-size: 0.63rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.3);
                    transition: color 0.2s;
                }
                .learn-more .arrow {
                    opacity: 0;
                    transform: translateX(-4px);
                    transition: opacity 0.25s, transform 0.25s;
                    color: #facc15;
                }
                .service-card:hover .learn-more { color: rgba(255,255,255,0.7); }
                .service-card:hover .learn-more .arrow {
                    opacity: 1;
                    transform: translateX(0);
                }
            `}</style>

            <section className="bg-[#0a0a0a] py-28 px-6 sm:px-10 lg:px-24 font-body">

                {/* Section Header */}
                <div className="max-w-7xl mb-16">
                    <div className="flex items-center gap-2.5 mb-5" style={{ animation: "fadeUp 0.5s ease both" }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        <span className="font-display text-[0.62rem] font-bold tracking-[0.28em] uppercase text-yellow-400">
                            What We Do
                        </span>
                    </div>

                    <h2
                        className="font-display font-extrabold text-white leading-tight mb-5"
                        style={{
                            fontSize: "clamp(2rem, 4vw, 4rem)", animation: "fadeUp 0.55s ease 0.1s both",
                            fontFamily:
                                "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                        }}
                    >
                        Enterprise Solutions<br />
                        <span className="text-yellow-400">Built to Scale.</span>
                    </h2>

                    <div className="w-14 h-[2px] bg-yellow-400 rounded-full mb-6"
                        style={{ animation: "fadeUp 0.55s ease 0.18s both" }} />

                    <p
                        className="text-white/55 leading-[1.85] font-light"
                        style={{ fontSize: "clamp(0.875rem, 1.2vw, 1rem)", maxWidth: "48ch", animation: "fadeUp 0.55s ease 0.25s both" }}
                    >
                        We deliver enterprise-grade technology solutions designed to help
                        organizations scale, innovate, and transform digitally.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-4">
                    {services.map((svc, i) => (
                        <div
                            key={i}
                            className="service-card border border-white"
                            style={{ animation: `fadeUp 0.55s ease ${0.1 + i * 0.1}s both` }}
                        >
                            <div className="card-top-line" />
                            <div className="card-number">{svc.number}</div>
                            <div className="card-icon">{svc.icon}</div>
                            <p className="card-subtitle">{svc.subtitle}</p>
                            <h3 className="card-title">{svc.title}</h3>
                            <div className="card-divider" />
                            <p className="card-desc">{svc.description}</p>
                            <div className="flex flex-wrap gap-1.5">
                                {svc.tags.map((tag, j) => (
                                    <span key={j} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="learn-more">
                                <span>Learn more</span>
                                <span className="arrow">→</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}


            </section>
        </>
    )
}

export default Services