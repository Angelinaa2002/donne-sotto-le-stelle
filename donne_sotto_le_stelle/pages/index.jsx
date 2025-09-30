import { useState } from 'react'
import Header from '../components/Header'
import BookingModal from '../components/BookingModal'

export default function Home(){
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-deep-blue to-midnight text-white overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="stars opacity-60"></div>
      </div>

      <div className="relative z-10">
        <Header />

        <main className="max-w-5xl mx-auto px-6 py-12">
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-gothic text-6xl text-star-gold leading-tight">Donne Sotto le Stelle</h1>
              <p className="mt-4 text-gray-300">Tarocchi, Yoga e rituali dolci — uno spazio per ritrovare sé stesse sotto lo stesso cielo.</p>

              <div className="mt-6 flex gap-4">
                <button onClick={()=>setOpen(true)} className="px-6 py-3 rounded bg-mystic-purple font-medium">Prenota</button>
                <a className="px-6 py-3 rounded border border-star-gold text-star-gold" href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>

            </div>

            <div>
              <div className="p-6 rounded-2xl card-magical">
                <h2 className="font-gothic text-2xl text-star-gold mb-3">🌙 Manifesto di Donne Sotto le Stelle 🌙</h2>
                <div className="prose prose-invert text-sm leading-relaxed max-w-none">
                  <p>Siamo donne che si incontrano sotto lo stesso cielo, non per cambiare il mondo, ma per ricordare chi siamo.</p>

<p>Un cerchio che accoglie, un abbraccio che non giudica. Qui le maschere cadono, i respiri si allineano, e ogni silenzio diventa parola sacra.</p>

<p>Siamo arte che guarisce, pennelli che raccontano emozioni, pizzi, fili e stoffe che cuciono rinascite. Siamo poesia che nasce da una ferita e diventa luce, moda che non veste il corpo, ma l’anima.</p>

<p>Camminiamo tra yoga e tarocchi, tisane e costellazioni, dove la spiritualità non è regola, ma esperienza viva. Qui le storie si intrecciano, le fragilità si fanno coraggio, le parole si trasformano in guarigione.</p>

<p>Siamo donne che scelgono sé stesse, che ballano, cantano, ridono, piangono, e poi si rialzano insieme, ogni volta più vere.</p>

<p>Donne Sotto le Stelle è un ponte tra la terra e l’infinito, tra ciò che siamo e ciò che ancora possiamo diventare.</p>

<p>Perché ogni donna che brilla, illumina il cammino di un’altra.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-12">
            <div className="grid md:grid-cols-3 gap-6">
              {[1,2,3].map(i=> (
                <div key={i} className="p-6 rounded-xl border border-mystic-purple/20 card-magical">
                  <div className="h-36 flex items-center justify-center star-twinkle">✨</div>
                  <h3 className="font-gothic text-xl text-star-gold">Servizio {i}</h3>
                  <p className="text-gray-300 text-sm">Descrizione breve e magica del servizio, pensata per evocare il mondo dei tarocchi e dello yoga.</p>
                </div>
              ))}
            </div>
          </section>

        </main>

        <footer className="text-center py-8 text-gray-400">
          <p>© {new Date().getFullYear()} Donne Sotto le Stelle</p>
          <div className="mt-6">
            <h4 className="font-gothic text-xl text-star-gold mb-2">Dove trovarci</h4>
            <div className="w-full max-w-xl mx-auto h-64 border border-mystic-purple/30 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.1746567316317!2d15.0872679!3d37.5026699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313e44a2c41d6e9%3A0x3d0c2a0e6f6f7f9!2sCatania%2C%20Sicilia%2C%20Italia!5e0!3m2!1sit!2sit!4v1696092345678"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </footer>
      </div>

      <BookingModal open={open} onClose={()=>setOpen(false)} />
    </div>
  )
}
