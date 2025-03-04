"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Users, Package, UserCheck, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/animated-button"
import { Handshake, TrendingUp, Users2, Truck, Factory, Building2, Briefcase } from "lucide-react"
import BackgroundPaths from "@/components/background-paths"
import DynamicFallingGifts from "@/components/DynamicFallingGifts"

const giftImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/elegant-pink-gift-box-with-delicate-ribbon-WR4MDFpUUaIhxh9InWRDA5g2zDjgHS.png",
    alt: "Eleganckie różowe pudełko prezentowe",
    width: 180,
    height: 180,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pink-gift-box-white-isolated-xmkfDGR04g1VT9ijV7ObARTMRQ2Xtk.png",
    alt: "Czerwono-białe pudełko prezentowe",
    width: 225,
    height: 150,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gift-box-with-blue-ribbon-polka-dot-design-present-surprise-celebration-84tkz08o0XR5eAFlEaOQKdZNu0L4yd.png",
    alt: "Białe pudełko w kropki z niebieską wstążką",
    width: 195,
    height: 195,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/purple-gift-box-with-pink-ribbon-RxOZRsSLhkkCtXZFSJwmVF0pAp87zn.png",
    alt: "Fioletowe pudełko z różową wstążką",
    width: 165,
    height: 165,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/close-up-wrapped-gift-box-against-white-background-luwPdL02rOc2U3NxrwtqykiGMlchJe.png",
    alt: "Żółte pudełko prezentowe",
    width: 210,
    height: 210,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/green-gift-box-with-bow-festive-present-surprise-eQ0ADW5RRs55KIc0Pocsi0ZvfWkk9k.png",
    alt: "Zielone pudełko prezentowe",
    width: 187,
    height: 187,
  },
]

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const nav = document.querySelector("nav")
    if (nav) {
      nav.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    }
  }, [])

  return (
    <div className="min-h-screen relative bg-white/85">
      {/* Tło dla całej strony */}
      <div className="fixed inset-0 z-0">
        <BackgroundPaths />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>
      </div>

      {/* Zawartość strony */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="bg-white/85 backdrop-blur-sm py-2 sm:py-4 px-4 sm:px-6 flex flex-wrap justify-between items-center fixed w-full top-0 z-50 transition-all duration-300 ease-in-out shadow-md">
          <Link href="/" className="text-red-600 flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jawi-logo-czerwone-271x96-tnrnrl7wPE8nxHLk5BaagHrqe8N8au.png"
              alt="JAWI Logo"
              width={271}
              height={96}
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </Link>
          <button
            className="lg:hidden text-gray-700 hover:text-red-600 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`w-full lg:w-auto mt-4 lg:mt-0 ${mobileMenuOpen ? "block" : "hidden lg:block"}`}>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              {["O NAS", "NASZE ATUTY", "WSPÓŁPRACA", "KONTAKT"].map((item, index) => (
                <Link key={index} href={`#${item.toLowerCase().replace(" ", "-")}`}>
                  <Button
                    variant="ghost"
                    className="w-full lg:w-auto mb-2 lg:mb-0 text-gray-700 hover:text-white hover:bg-red-600 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  >
                    {item}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <motion.section
          className="relative z-10 py-12 px-6 mt-20 bg-white/90 rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-16 mb-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center h-auto md:h-[400px]">
              <div className="max-w-xl mb-8 md:mb-0 z-20">
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                  Tworzymy rzeczy,
                  <br />
                  które wyrażają emocje
                </h1>
                <AnimatedButton />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <DynamicFallingGifts images={giftImages} containerHeight={800} />
          </div>
        </motion.section>

        {/* Service Boxes */}
        <motion.section
          className="py-12 px-6 bg-white/90 rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-16 -mt-18 relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: "DYSTRYBUCJA",
                description:
                  "Zapewniamy szybką i niezawodną dystrybucję, dostosowaną do potrzeb różnych kanałów sprzedaży.",
              },
              {
                icon: Factory,
                title: "PRODUKCJA",
                description: "Wysoka jakość, innowacyjne rozwiązania i precyzyjne wykonanie to nasza wizytówka.",
              },
              {
                icon: Building2,
                title: "LOGISTYKA",
                description: "Efektywnie zarządzamy dostawami, gwarantując terminowość i bezpieczeństwo.",
              },
              {
                icon: Briefcase,
                title: "BIZNES",
                description: "Budujemy trwałe relacje oparte na elastycznych i korzystnych warunkach współpracy.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center shadow-lg transition-all duration-300 ease-in-out hover:bg-red-600 hover:text-white group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="w-12 h-12 mb-4 text-red-600 transition-all duration-300 ease-in-out group-hover:text-white" />
                <h3 className="text-lg font-bold mb-2 transition-all duration-300 ease-in-out group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm transition-all duration-300 ease-in-out group-hover:text-white">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="o-nas"
          className="relative z-10 py-20 px-6 bg-white/90 rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-16 my-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">O nas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl mb-6 text-gray-700">
                  Jesteśmy dynamicznie rozwijającą się polską firmą, istniejącą na rynku od 1980 roku.
                </p>
                <div className="text-gray-800 space-y-4 text-justify">
                  <p>
                    JAWI to lider w produkcji i dystrybucji szerokiej gamy produktów, dostępnych w tysiącach punktów
                    handlowych w Polsce. Jako pionier personalizacji, specjalizujemy się w tworzeniu unikalnych
                    upominków na różne okazje – od świąt po wyjątkowe momenty.
                  </p>
                  <p>
                    Nasze produkty wyróżniają się najwyższą jakością wykonania i dbałością o detale, nadając każdemu
                    prezentowi unikalny charakter.
                  </p>
                  <p>
                    Dzięki innowacyjnemu podejściu i pasji do tworzenia pomagamy naszym klientom wyrażać uczucia w
                    sposób niezapomniany.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/group-businesspeople-stacking-their-hand-office-sKrfKsc3mr0joc1p8SpUuPsfYDi0pn.png"
                  alt="JAWI zespół"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* WONDERLAND Section */}
        <motion.section
          id="nasze-atuty"
          className="py-20 bg-white/90 rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-16 my-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-full">
            <motion.div
              className="w-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/obraz_2025-02-26_162331088-no-bg-preview%20%28carve.photos%29-xU1Yun4S5YsaLa1JIN0KzqnJhVOgoM.png"
                alt="WONDERLAND logo"
                width={1920}
                height={400}
                className="w-full h-[200px] object-contain object-center"
                priority
              />
            </motion.div>
            <div className="max-w-4xl mx-auto mt-12 px-6">
              <motion.p
                className="text-lg text-center text-gray-800 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Nasza marka własna, która ucieleśnia to, co najlepsze w JAWI
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="py-20 px-6 bg-white/90 rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-16 my-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Dlaczego my?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                number: "45",
                label: "LAT DOŚWIADCZENIA",
                description:
                  "JAWI to firma z wieloletnią tradycją, która zdobyła zaufanie wielu klientów dzięki profesjonalizmowi i innowacyjnemu podejściu.",
              },
              {
                icon: Users,
                number: "100+",
                label: "ZAUFANYCH KONTRAHENTÓW",
                description:
                  "Zaufali nam kontrahenci z różnych branż, ceniąc naszą jakość, terminowość i elastyczność w dostosowywaniu oferty do ich potrzeb.",
              },
              {
                icon: Package,
                number: "1M+",
                label: "WYPRODUKOWANYCH ARTYKUŁÓW",
                description:
                  "Realizujemy wiele akcji rocznie, oferując produkty dostosowane do okazji i sezonów, które odpowiadają na zmieniające się potrzeby rynku.",
              },
              {
                icon: UserCheck,
                number: "50+",
                label: "PRACOWNIKÓW",
                description:
                  "Nasz zespół to specjaliści, którzy dbają o każdy detal, zapewniając najwyższy standard obsługi i realizacji zamówień.",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:bg-red-600 hover:text-white group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-16 h-16 text-red-600 mb-4 transition-all duration-300 ease-in-out group-hover:text-white" />
                <div className="text-3xl font-bold text-red-600 mb-2 transition-all duration-300 ease-in-out group-hover:text-white">
                  {stat.number}
                </div>
                <div className="font-bold mb-4 text-lg transition-all duration-300 ease-in-out group-hover:text-white">
                  {stat.label}
                </div>
                <p className="text-gray-600 text-sm transition-all duration-300 ease-in-out group-hover:text-white text-justify">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Cooperation Section */}
        <motion.section
          id="współpraca"
          className="py-20 px-6 bg-white/90 rounded-3xl shadow-lg mx-4 md:mx-8 lg:mx-16 my-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Współpraca</h2>
            <h3 className="text-xl text-center mb-12 text-gray-700">
              Twój partner w produkcji i dystrybucji asortymentu sezonowego i okazjonalnego
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                className="grid grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                {[
                  { icon: Handshake, title: "Partnerstwo" },
                  { icon: TrendingUp, title: "Rozwój" },
                  { icon: Users2, title: "Klienci" },
                  { icon: Package, title: "Produkty" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-16 h-16 text-red-600 mb-4" />
                    <h4 className="text-lg font-semibold text-black">{item.title}</h4>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-gray-800 space-y-4 text-justify">
                  <p>
                    Dostarczamy szeroki asortyment, obejmujący kolekcje tematyczne na różne okazje – od świąt po
                    wydarzenia sezonowe – oraz linie personalizowane, zgodne z aktualnymi trendami.
                  </p>
                  <p>
                    Nieustannie analizujemy rynek i rozwijamy ofertę, aby zapewnić produkty o wysokim potencjale
                    sprzedażowym. Gwarantujemy profesjonalne doradztwo, elastyczne warunki współpracy i najwyższy
                    standard obsługi.
                  </p>
                  <p>
                    Zapraszamy do współpracy sieci sklepów, sklepy stacjonarne, sklepy internetowe, hurtownie oraz
                    klientów indywidualnych.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="kontakt"
          className="py-20 px-6 mx-4 md:mx-8 lg:mx-16 my-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Skontaktuj się z nami</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <motion.div
                  className="p-6 rounded-lg shadow-lg bg-white/95 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Dane kontaktowe</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">Czysta 18, 05-816</p>
                        <p className="text-gray-700">Opacz-Kolonia</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="text-red-600 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">Tel: 22 636 80 13</p>
                        <p className="text-gray-700">Fax: 22 838 85 07</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="text-red-600 flex-shrink-0" />
                      <p className="text-gray-700">kontakt@jawi.waw.pl</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="p-6 rounded-lg shadow-lg bg-white/95 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Formularz kontaktowy</h3>
                  <form className="space-y-4">
                    <Input placeholder="Imię i nazwisko" className="bg-white/80" />
                    <Input type="email" placeholder="Email" className="bg-white/80" />
                    <Input placeholder="Temat" className="bg-white/80" />
                    <Textarea placeholder="Wiadomość" className="h-32 bg-white/80" />
                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 shadow-lg hover:shadow-xl"
                    >
                      Wyślij wiadomość
                    </Button>
                  </form>
                </motion.div>
              </div>
              <motion.div
                className="overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.058164131299!2d20.907718077139286!3d52.17613847197308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47193366725be009%3A0x3d1f31748766cee9!2sJawi%20Sp.%20z%20o.o.!5e1!3m2!1spl!2spl!4v1740409913561!5m2!1spl!2spl!4v1740409913561!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jawi-logo-czerwone-271x96-tnrnrl7wPE8nxHLk5BaagHrqe8N8au.png"
                alt="JAWI Logo"
                width={271}
                height={96}
                className="h-12 w-auto"
              />
              <p className="text-gray-400 mt-2">Tworzymy rzeczy, które wyrażają emocje</p>
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
                {["O nas", "Nasze atuty", "Współpraca", "Kontakt"].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 uppercase"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </footer>
      </div>
      <style jsx global>{`
        body {
          padding-top: 60px;
        }
        @media (min-width: 640px) {
          body {
            padding-top: 80px;
          }
        }
        @media (max-width: 640px) {
          .text-justify {
            text-align: left;
          }
        }
      `}</style>
    </div>
  )
}

export default Home

