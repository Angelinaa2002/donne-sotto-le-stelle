import Header from '../components/Header'
import { useState } from 'react'
import dynamic from 'next/dynamic'
const BookingModal = dynamic(() => import('../components/BookingModal'))

export default function Home(){
  const [open,setOpen] = useState(false)
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="stars" aria-hidden="true"></div>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h1 className="h1-gothic">Donne Sotto le Stelle</h1>
        <div className="mt-6 card-magical mx-auto max-w-3xl text-left">
          <pre style={{whiteSpace:'pre-wrap',fontFamily:'inherit',color:'#e6e9ee',lineHeight:1.5}}>
{`🌙 Manifesto di Donne Sotto le Stelle 🌙

Siamo donne che si incontrano sotto lo stesso cielo,
non per cambiare il mondo, ma per ricordare chi siamo.

Un cerchio che accoglie, un abbraccio che non giudica.
Qui le maschere cadono, i respiri si allineano,
e ogni silenzio diventa parola sacra.

Siamo arte che guarisce, pennelli che raccontano emozioni,
pizzi, fili e stoffe che cuciono rinascite.
Siamo poesia che nasce da una ferita e diventa luce,
moda che non veste il corpo, ma l’anima.

Camminiamo tra yoga e tarocchi, tisane e costellazioni,
dove la spiritualità non è regola, ma esperienza viva.
Qui le storie si intrecciano, le fragilità si fanno coraggio,
le parole si trasformano in guarigione.

Siamo donne che scelgono sé stesse,
che ballano, cantano, ridono, piangono,
e poi si rialzano insieme, ogni volta più vere.

Donne Sotto le Stelle è un ponte
tra la terra e l’infinito,
tra ciò che siamo e ciò che ancora possiamo diventare.

Perché ogni donna che brilla,
illumina il cammino di un’altra.`}
        
<section className="py-16 text-center">
  <h2 className="text-3xl mb-10">✨ Tarocchi ✨</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
    <div className="bg-white/10 p-4 rounded-xl border border-purple-500 hover:scale-105 transition">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/RWS_Tarot_08_Strength.jpg" alt="Forza" />
    </div>
    <div className="bg-white/10 p-4 rounded-xl border border-purple-500 hover:scale-105 transition">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_10_Wheel_of_Fortune.jpg" alt="Ruota della Fortuna" />
    </div>
    <div className="bg-white/10 p-4 rounded-xl border border-purple-500 hover:scale-105 transition">
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/RWS_Tarot_17_Star.jpg" alt="La Stella" />
    </div>
  </div>
</section>

          </pre>
        </div>
        <div className="mt-8">
          <button onClick={()=>setOpen(true)} className="px-6 py-3 rounded bg-mystic-purple text-white">Prenota</button>
        </div>
      </main>
      {open && <BookingModal open={open} onClose={()=>setOpen(false)} />}
    </div>
  )
}
<section className="py-16 text-center">
  <h2 className="text-3xl mb-6">📍 Dove siamo</h2>
  <div className="max-w-4xl mx-auto">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.099!2d15.072!3d37.5079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313e31f1c3b7b47%3A0xb5d2c024aaa0f!2sCatania%2C%20Sicilia!5e0!3m2!1sit!2sit!4v1695745743787!5m2!1sit!2sit"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</section>
