import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Hammer,
  Recycle,
  PackageCheck,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  Factory,
  CheckCircle2,
  ClipboardList,
} from "lucide-react";

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="nav-wrap">
          <a href="#home" className="brand">
            <div className="brand-mark">
              <div className="pallet-line line-1" />
              <div className="pallet-line line-2" />
              <div className="pallet-line line-3" />
              <span>NST</span>
            </div>
            <div>
              <p className="brand-title">NST Pallets</p>
              <p className="brand-subtitle">Built Strong</p>
            </div>
          </a>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#quality">Quality</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="btn btn-gold nav-btn" href="#contact">Get a Quote</a>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="glow glow-1" />
          <div className="glow glow-2" />
          <div className="glow glow-3" />
          <div className="hero-pattern" />

          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">Refurbished Pallets • Supply • Custom Builds • Repairs</p>
              <h1>Affordable pallets for serious business.</h1>
              <p className="hero-text">
                NST Pallets supplies affordable refurbished wooden pallets for local distribution,
                logistics, warehousing, packhouses, DIY projects, and everyday business use across
                the Mbombela / Nelspruit area.
              </p>

              <div className="hero-actions">
                <a className="btn btn-gold" href="#contact">Request a Quote</a>
                <a className="btn btn-outline" href="#services">View Services</a>
              </div>

              <div className="hero-points">
                <HeroPoint text="Cheaper solution" />
                <HeroPoint text="Local distribution" />
                <HeroPoint text="Bulk supply" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="hero-visual-wrap"
            >
              <div className="hero-visual">
                <div className="pallet-card">
                  <div className="pallet-card-head">
                    <div>
                      <p>NST</p>
                      <h3>Pallet Supply</h3>
                    </div>
                    <span>Reliable</span>
                  </div>

                  <div className="pallet-stack">
                    <div className="top-plank" />
                    <div className="plank-grid">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="plank" />
                      ))}
                    </div>
                    <div className="block-grid">
                      <div />
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
              </div>

              <div className="promise-card">
                <p>Brand Promise</p>
                <h3>Built Strong. Delivered Reliable.</h3>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-intro">
            <p className="section-label">What we do</p>
            <h2>Refurbished pallet solutions for distribution, storage, and daily operations.</h2>
            <p>
              NST Pallets helps businesses move, stack, store, and protect goods with affordable
              refurbished pallets and practical wooden pallet solutions.
            </p>
          </div>

          <div className="card-grid">
            <ServiceCard
              icon={<Recycle />}
              title="Refurbished Pallets"
              text="A cheaper practical solution for businesses that need dependable pallets for local distribution without paying new-pallet prices."
            />
            <ServiceCard
              icon={<PackageCheck />}
              title="Standard Pallets"
              text="Affordable pallets ideal for local distribution, warehousing, packhouses, DIY use, logistics, factories, farms, and transport needs."
            />
            <ServiceCard
              icon={<Hammer />}
              title="Custom Pallets"
              text="Made-to-size pallet builds for special loads, unusual product dimensions, local distribution needs, and business-specific requirements."
            />
            <ServiceCard
              icon={<Factory />}
              title="Bulk Orders"
              text="Supply support for larger orders, repeat clients, and ongoing pallet requirements where consistency matters."
            />
            <ServiceCard
              icon={<Truck />}
              title="Collection & Delivery"
              text="Flexible collection and local delivery options depending on order size, location, and availability."
            />
            <ServiceCard
              icon={<ClipboardList />}
              title="Sorting & Repairs"
              text="Inspection, sorting, and repairs to help businesses extend pallet life and keep usable pallets in circulation."
            />
          </div>
        </section>

        <section id="about" className="section about">
          <div className="split">
            <div>
              <p className="section-label">About NST Pallets</p>
              <h2>A practical pallet supplier built around value and reliability.</h2>
            </div>
            <div className="about-text">
              <p>
                NST Pallets focuses on supplying strong, practical refurbished wooden pallets for
                businesses and individuals that need a cheaper, dependable solution for local
                distribution, transport, warehousing, packhouses, and DIY use.
              </p>
              <p>
                Whether you need refurbished pallets, standard pallets, custom sizes, repairs, or
                ongoing supply, our aim is simple: deliver quality pallets, honest service, and
                dependable turnaround times.
              </p>
              <div className="mini-grid">
                <MiniStat number="01" label="Cheaper pallet solutions" />
                <MiniStat number="02" label="Practical local supply" />
                <MiniStat number="03" label="Reliable turnaround" />
                <MiniStat number="04" label="Strong refurbished pallets" />
              </div>
            </div>
          </div>
        </section>

        <section id="quality" className="section">
          <div className="section-intro">
            <p className="section-label">Why choose us</p>
            <h2>Built for businesses that need practical pallet supply.</h2>
          </div>

          <div className="feature-grid">
            <Feature
              icon={<ShieldCheck />}
              title="Strong Practical Quality"
              text="Pallets supplied and checked with practical strength, handling, and business use in mind."
            />
            <Feature
              icon={<Clock />}
              title="Fast Turnaround"
              text="Responsive service for urgent orders, refurbished stock, custom requirements, and repeat clients who need stock moving."
            />
            <Feature
              icon={<Truck />}
              title="Business Friendly"
              text="Reliable communication, practical advice, and flexible supply options for local distribution and different industries."
            />
          </div>
        </section>

        <section className="cta">
          <div>
            <p className="section-label gold-label">Need pallets?</p>
            <h2>Send us your size, quantity, and delivery needs.</h2>
            <p>
              We can assist with refurbished pallets, standard pallets, custom builds, bulk supply,
              repairs, and practical advice for your business or DIY requirements.
            </p>
            <a className="btn btn-gold" href="#contact">Contact NST Pallets</a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div>
            <p className="section-label">Contact</p>
            <h2>Request a quote today.</h2>
            <p className="contact-text">
              Send through the pallet size, quantity, whether you need refurbished, standard, or
              custom pallets, and whether collection or delivery is required.
            </p>

            <div className="contact-list">
              <ContactLine icon={<Phone />} text="Leana / WhatsApp: 063 694 0309" />
              <ContactLine icon={<Phone />} text="Garreth / WhatsApp: 076 043 1671" />
              <ContactLine icon={<Mail />} text="Email: info@nstpallets.co.za" />
              <ContactLine icon={<MapPin />} text="27 R538, White River, Nelspruit, 1240" />
            </div>
          </div>

          <form className="quote-form" action="mailto:info@nstpallets.co.za" method="post" encType="text/plain">
            <input name="name" placeholder="Your name" />
            <input name="phone" placeholder="Phone number" />
            <input name="email" placeholder="Email address" />
            <textarea
              name="message"
              placeholder="Example: I need 100 refurbished pallets / standard pallets / custom size pallets. Please include size, quantity, and delivery area."
            />
            <button className="btn btn-dark" type="submit">Send Quote Request</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 NST Pallets. All rights reserved.</p>
        <p>Built Strong. Delivered Reliable.</p>
      </footer>
    </div>
  );
}

function HeroPoint({ text }) {
  return (
    <div className="hero-point">
      <CheckCircle2 size={18} />
      <span>{text}</span>
    </div>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <div className="service-card">
      <div className="icon-box">{React.cloneElement(icon, { size: 28 })}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="feature-card">
      <div>{React.cloneElement(icon, { size: 34 })}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function MiniStat({ number, label }) {
  return (
    <div className="mini-stat">
      <p>{number}</p>
      <h4>{label}</h4>
    </div>
  );
}

function ContactLine({ icon, text }) {
  return (
    <div className="contact-line">
      <span>{React.cloneElement(icon, { size: 22 })}</span>
      <strong>{text}</strong>
    </div>
  );
}
