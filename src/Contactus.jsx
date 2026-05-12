import React, { useState } from 'react'
import PrivacyModal from "./PrivacyModal";
import { Link } from 'react-router-dom';
const contactInfo = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
        label: "Email Us",
        value: "islahsiddiqui@outlook.com",
        sub: "We respond within 24 hours",
        href: "mailto:islahsiddiqui@outlook.com",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
        label: "Call Us",
        value: "7737444367",
        sub: "Mon – Fri, 9am – 6pm EST",
        href: "tel:7737444367",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        label: "Visit Us",
        value: "Dallas, Texas",
        // sub: "San Francisco, CA 94105",
        href: "#",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        label: "Business Hours",
        value: "Mon – Fri: 9am – 6pm",
        sub: "EST / GMT-5",
        href: null,
    },
]

const services = [
    "JD Edwards Training",
    "ServiceNow Training",
    "Microsoft Technologies Training",
    "JD Edwards Implementation",
    "ServiceNow Implementation",
    "Microsoft Technologies Implementation",
    "Other / General Enquiry",
]

const initialForm = {
    firstName: "", lastName: "",
    email: "", phone: "",
    company: "", jobTitle: "",
    service: "", message: "",
}

export default function ContactUs() {
    const [openPrivacy, setOpenPrivacy] = useState(false);

    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const validate = () => {
        const e = {}
        if (!form.firstName.trim()) e.firstName = "Required"
        if (!form.lastName.trim()) e.lastName = "Required"
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required"
        // if (!form.company.trim()) e.company = "Required"
        if (!form.service) e.service = "Please select a service"
        if (!form.message.trim()) e.message = "Please write a message"
        return e
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(f => ({ ...f, [name]: value }))
        if (errors[name]) setErrors(err => ({ ...err, [name]: undefined }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const e2 = validate();
        if (Object.keys(e2).length) {
            setErrors(e2);
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbxfPUiddTbWq-XgUU2H3vVC69E_wwDO_qmABN--HUprSaBWNdoHUoDhX30xkmM9rZLMQQ/exec",
                {
                    method: "POST",
                    body: new URLSearchParams(form), // 👈 key fix
                }
            );

            const result = await response.json();

            if (result.status === "success") {
                setSubmitted(true);
                setForm(initialForm);
            } else {
                alert("Something went wrong!");
            }

        } catch (error) {
            console.error(error);
            alert("Error submitting form");
        }

        setLoading(false);
    };

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
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.92); }
                    to   { opacity: 1; transform: scale(1); }
                }

                .field-wrap { position: relative; }

                .form-input {
                    width: 100%;
                    background: #111;
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 2px;
                    padding: 0.85rem 1rem;
                    color: #fff;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.875rem;
                    font-weight: 300;
                    outline: none;
                    transition: border-color 0.2s, background 0.2s;
                    -webkit-appearance: none;
                }
                .form-input::placeholder { color: rgba(255,255,255,0.25); }
                .form-input:focus {
                    border-color: rgba(250,204,21,0.5);
                    background: #141414;
                }
                .form-input.error { border-color: rgba(239,68,68,0.6); }

                select.form-input option { background: #111; color: #fff; }

                .form-label {
                    display: block;
                    font-family: 'Syne', sans-serif;
                    font-size: 0.62rem;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: rgba(255,255,255,0.45);
                    margin-bottom: 0.5rem;
                }

                .error-msg {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 0.7rem;
                    color: rgba(239,68,68,0.8);
                    margin-top: 0.35rem;
                }

                .info-card {
                    display: flex; gap: 1rem; align-items: flex-start;
                    padding: 1.25rem;
                    background: #111;
                    border: 1px solid rgba(255,255,255,0.08);
                    border-radius: 2px;
                    text-decoration: none;
                    transition: border-color 0.25s, transform 0.25s, background 0.25s;
                }
                .info-card:hover {
                    border-color: rgba(250,204,21,0.35);
                    background: #161616;
                    transform: translateY(-3px);
                }
                .info-icon {
                    width: 2.4rem; height: 2.4rem;
                    background: rgba(250,204,21,0.08);
                    border: 1px solid rgba(250,204,21,0.18);
                    border-radius: 2px;
                    display: flex; align-items: center; justify-content: center;
                    color: #facc15; flex-shrink: 0;
                    transition: background 0.25s;
                }
                .info-card:hover .info-icon { background: rgba(250,204,21,0.15); }

                .submit-btn {
                    width: 100%;
                    background: #facc15;
                    color: #000;
                    font-family: 'Syne', sans-serif;
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    padding: 1rem;
                    border: none;
                    border-radius: 2px;
                    cursor: pointer;
                    transition: background 0.2s, transform 0.15s;
                    display: flex; align-items: center; justify-content: center; gap: 0.5rem;
                }
                .submit-btn:hover:not(:disabled) { background: #fde047; transform: translateY(-1px); }
                .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

                .success-box {
                    animation: scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) both;
                }
            `}</style>

            <div className="bg-[#0a0a0a] text-white font-body min-h-screen">

                {/* ── HERO BANNER ── */}
                <div className="relative pt-32 pb-20 px-6 sm:px-10 lg:px-24 overflow-hidden border-b border-white/[0.07]">
                    <div className='absolute inset-0 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/Handshake.jpg')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-yellow-400/5" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="relative z-10" style={{ animation: "fadeUp 0.6s ease both" }}>
                        <div className="flex items-center gap-2.5 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                            <span className="font-display text-[0.62rem] font-bold tracking-[0.28em] uppercase text-yellow-400">
                                Get In Touch
                            </span>
                        </div>
                        <h1 className="font-display font-extrabold text-white leading-tight mb-4"
                            style={{
                                fontSize: "clamp(2.4rem, 6vw, 5rem)", fontFamily:
                                    "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                            }}>
                            Let's Start a<br /><span className="text-yellow-400">Conversation.</span>
                        </h1>
                        <div className="h-[2px] bg-yellow-400 rounded-full mb-5"
                            style={{ animation: "lineGrow 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s both", width: "3.5rem" }} />
                        <p className="text-white/50 leading-[1.85] font-light"
                            style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)", maxWidth: "46ch" }}>
                            Whether you're planning an implementation, exploring training options, or just have
                            a question — our team is ready to help.
                        </p>
                    </div>
                </div>

                {/* ── MAIN CONTENT ── */}
                <div className="px-6 sm:px-10 lg:px-24 py-20">
                    <div className="grid lg:grid-cols-5 gap-14">

                        {/* ── LEFT: Contact Info ── */}
                        <div className="lg:col-span-2 flex flex-col gap-8" style={{ animation: "fadeUp 0.6s ease 0.1s both" }}>

                            <div>
                                <div className="flex items-center gap-2.5 mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                    <span className="font-display text-[0.62rem] font-bold tracking-[0.28em] uppercase text-yellow-400">
                                        Contact Details
                                    </span>
                                </div>
                                <h2 className="font-display font-extrabold text-white leading-tight mb-3"
                                    style={{
                                        fontSize: "clamp(1.4rem, 2.5vw, 3rem)", fontFamily:
                                            "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
                                    }}>
                                    Reach Us Directly.
                                </h2>
                                <p className="text-white/45 text-sm font-light leading-[1.85]">
                                    Our enterprise team is available Monday to Friday. We typically respond to all enquiries within one business day.
                                </p>
                            </div>

                            {/* Info cards */}
                            <div className="flex flex-col gap-3">
                                {contactInfo.map((item, i) => (
                                    item.href && item.href !== '#'
                                        ? <a key={i} href={item.href} className="info-card" style={{ animation: `fadeUp 0.5s ease ${0.15 + i * 0.08}s both` }}>
                                            <div className="info-icon">{item.icon}</div>
                                            <div>
                                                <p className="font-display text-[0.6rem] font-bold tracking-[0.18em] uppercase text-yellow-400/70 mb-0.5">{item.label}</p>
                                                <p className="text-white font-medium text-sm">{item.value}</p>
                                                <p className="text-white/35 text-xs font-light mt-0.5">{item.sub}</p>
                                            </div>
                                        </a>
                                        : <div key={i} className="info-card" style={{ animation: `fadeUp 0.5s ease ${0.15 + i * 0.08}s both` }}>
                                            <div className="info-icon">{item.icon}</div>
                                            <div>
                                                <p className="font-display text-[0.6rem] font-bold tracking-[0.18em] uppercase text-yellow-400/70 mb-0.5">{item.label}</p>
                                                <p className="text-white font-medium text-sm">{item.value}</p>
                                                <p className="text-white/35 text-xs font-light mt-0.5">{item.sub}</p>
                                            </div>
                                        </div>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="border-t border-white/[0.07] pt-6">
                                <p className="font-display text-[0.6rem] font-bold tracking-[0.2em] uppercase text-white/30 mb-4">
                                    Follow Us
                                </p>
                                <div className="flex gap-2">
                                    {[
                                        { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                                        { label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                                        { label: "YouTube", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                                    ].map(s => (
                                        <a key={s.label} href="#" aria-label={s.label}
                                            className="w-9 h-9 flex items-center justify-center rounded-sm border transition-all duration-200"
                                            style={{ borderColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.35)" }}
                                            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(250,204,21,0.5)"; e.currentTarget.style.color = "#facc15"; e.currentTarget.style.background = "rgba(250,204,21,0.06)" }}
                                            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.35)"; e.currentTarget.style.background = "transparent" }}
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                                <path d={s.path} />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ── RIGHT: Form ── */}
                        <div className="lg:col-span-3" style={{ animation: "fadeUp 0.6s ease 0.25s both" }}>

                            {submitted ? (
                                /* ── SUCCESS STATE ── */
                                <div className="success-box bg-[#111] border rounded-sm p-12 flex flex-col items-center text-center gap-5"
                                    style={{ borderColor: "rgba(250,204,21,0.3)" }}>
                                    <div className="w-16 h-16 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="2" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display font-extrabold text-white text-xl mb-2">Message Sent!</h3>
                                        <p className="text-white/50 text-sm font-light leading-relaxed max-w-sm">
                                            Thank you for reaching out. A member of our team will get back to you within one business day.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => { setSubmitted(false); setForm(initialForm) }}
                                        className="font-display text-[0.65rem] font-bold tracking-[0.18em] uppercase
                                            border border-white/15 text-white/50 px-6 py-2.5 rounded-sm
                                            hover:border-yellow-400/40 hover:text-white transition-all duration-200 mt-2">
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                /* ── FORM ── */
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="bg-[#0d0d0d] border rounded-sm p-8 sm:p-10"
                                        style={{ borderColor: "rgba(255,255,255,0.08)" }}>

                                        <div className="flex items-center gap-2.5 mb-8">
                                            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                            <span className="font-display text-[0.62rem] font-bold tracking-[0.28em] uppercase text-yellow-400">
                                                Send Us a Message
                                            </span>
                                        </div>

                                        <div className="flex flex-col gap-5">

                                            {/* Name row */}
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="field-wrap">
                                                    <label className="form-label">First Name <span className="text-yellow-400">*</span></label>
                                                    <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="John"
                                                        className={`form-input ${errors.firstName ? 'error' : ''}`} />
                                                    {errors.firstName && <p className="error-msg">{errors.firstName}</p>}
                                                </div>
                                                <div className="field-wrap">
                                                    <label className="form-label">Last Name <span className="text-yellow-400">*</span></label>
                                                    <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Smith"
                                                        className={`form-input ${errors.lastName ? 'error' : ''}`} />
                                                    {errors.lastName && <p className="error-msg">{errors.lastName}</p>}
                                                </div>
                                            </div>

                                            {/* Email + Phone */}
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="field-wrap">
                                                    <label className="form-label">Email Address <span className="text-yellow-400">*</span></label>
                                                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com"
                                                        className={`form-input ${errors.email ? 'error' : ''}`} />
                                                    {errors.email && <p className="error-msg">{errors.email}</p>}
                                                </div>
                                                <div className="field-wrap">
                                                    <label className="form-label">Phone Number</label>
                                                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (800) 000-0000"
                                                        className="form-input" />
                                                </div>
                                            </div>

                                            {/* Company + Job title */}
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="field-wrap">
                                                    <label className="form-label">Company <span className="text-yellow-400"></span></label>
                                                    <input name="company" value={form.company} onChange={handleChange} placeholder="MFATech"
                                                        className={`form-input ${errors.company ? 'error' : ''}`} />
                                                    {errors.company && <p className="error-msg">{errors.company}</p>}
                                                </div>
                                                <div className="field-wrap">
                                                    <label className="form-label">Job Title</label>
                                                    <input name="jobTitle" value={form.jobTitle} onChange={handleChange} placeholder="IT Manager"
                                                        className="form-input" />
                                                </div>
                                            </div>

                                            {/* Service */}
                                            <div className="field-wrap">
                                                <label className="form-label">Service of Interest <span className="text-yellow-400">*</span></label>
                                                <select name="service" value={form.service} onChange={handleChange}
                                                    className={`form-input ${errors.service ? 'error' : ''}`}>
                                                    <option value="">Select a service…</option>
                                                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                                                </select>
                                                {errors.service && <p className="error-msg">{errors.service}</p>}
                                            </div>

                                            {/* Message */}
                                            <div className="field-wrap">
                                                <label className="form-label">Message <span className="text-yellow-400">*</span></label>
                                                <textarea name="message" value={form.message} onChange={handleChange}
                                                    placeholder="Tell us about your project, requirements, or question…"
                                                    rows={5}
                                                    className={`form-input resize-none ${errors.message ? 'error' : ''}`} />
                                                {errors.message && <p className="error-msg">{errors.message}</p>}
                                            </div>

                                            {/* Privacy note */}
                                            <p className="text-white/25 text-xs font-light leading-relaxed">
                                                By submitting this form you agree to our{" "}
                                                <Link onClick={() => setOpenPrivacy(true)} className="text-yellow-400/60 hover:text-yellow-400 transition-colors">Privacy Policy</Link>.
                                                We will never share your information with third parties.
                                            </p> <PrivacyModal
                                                isOpen={openPrivacy}
                                                onClose={() => setOpenPrivacy(false)}
                                            />

                                            {/* Submit */}
                                            <button type="submit" className="submit-btn" disabled={loading}>
                                                {loading ? (
                                                    <>
                                                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                        </svg>
                                                        Sending…
                                                    </>
                                                ) : (
                                                    <>Send Message →</>
                                                )}
                                            </button>

                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>

                    </div>
                </div>

                {/* ── BOTTOM MAP STRIP ── */}
                {/* <div className="border-t border-white/[0.07] bg-[#080808]">
                    <div className="px-6 sm:px-10 lg:px-24 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <p className="font-display text-[0.6rem] font-bold tracking-[0.22em] uppercase text-yellow-400 mb-2">Global HQ</p>
                            <p className="font-display font-bold text-white text-lg mb-1">San Francisco, CA</p>
                            <p className="text-white/40 text-sm font-light">123 Enterprise Avenue, Suite 400, CA 94105</p>
                        </div>
                        <a href="https://maps.google.com" target="_blank" rel="noreferrer"
                            className="font-display text-[0.68rem] font-bold tracking-[0.18em] uppercase
                                border border-white/15 text-white/50 px-6 py-3 rounded-sm shrink-0
                                hover:border-yellow-400/40 hover:text-white transition-all duration-200">
                            View on Maps →
                        </a>
                    </div>
                </div> */}

            </div>
        </>
    )
}