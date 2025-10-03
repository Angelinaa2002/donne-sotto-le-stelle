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
            <section className="tarot-cards">
  <div className="card">🃏</div>
  <div className="card">🌙</div>
  <div className="card">⭐</div>
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
