import { useState } from 'react'

export default function BookingModal({open, onClose}) {
  const [status, setStatus] = useState('')
  if(!open) return null
  async function onSubmit(e){
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries())
    setStatus('sending')
    try{
      const res = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
      if(res.ok){ setStatus('ok'); e.target.reset() } else setStatus('err')
    }catch(err){ setStatus('err') }
  }
  return (
    <div className="modal-backdrop">
      <div className="modal-window card-magical max-w-lg w-full">
        <div className="p-6">
          <button onClick={onClose} className="float-right text-star-gold">✕</button>
          <h3 className="h1-gothic">Prenota la tua consulenza</h3>
          <form onSubmit={onSubmit} className="space-y-3 mt-4">
            <input name="name" required placeholder="Nome" className="w-full px-3 py-2 rounded bg-black/30 border" />
            <input name="email" type="email" required placeholder="Email" className="w-full px-3 py-2 rounded bg-black/30 border" />
            <input name="phone" placeholder="Telefono (opzionale)" className="w-full px-3 py-2 rounded bg-black/30 border" />
            <select name="service" className="w-full px-3 py-2 rounded bg-black/30 border">
              <option>Tarocchi - Lettura</option>
              <option>Yoga - Lezione individuale</option>
              <option>Tarocchi + Yoga - Pacchetto</option>
            </select>
            <textarea name="message" placeholder="Messaggio / preferenze" className="w-full px-3 py-2 rounded bg-black/30 border"></textarea>
            <div className="flex gap-2">
              <button type="submit" className="flex-1 py-2 rounded-md bg-mystic-purple text-white">Prenota ora</button>
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="py-2 px-4 rounded-md border border-star-gold text-star-gold">WhatsApp</a>
            </div>
          </form>
          {status==='ok' && <div className="mt-3 text-star-gold">Grazie! Ci contatteremo per l'orario.</div>}
          {status==='err' && <div className="mt-3 text-red-400">Errore: riprova più tardi.</div>}
        </div>
      </div>
    </div>
  )
}
