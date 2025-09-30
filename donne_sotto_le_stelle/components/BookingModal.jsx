import { useState } from 'react'

export default function BookingModal({open, onClose}){
  const [sending, setSending] = useState(false)
  const [successText, setSuccessText] = useState('')

  if(!open) return null

  async function handleSubmit(e){
    e.preventDefault()
    setSending(true)
    const data = new FormData(e.target)
    const body = Object.fromEntries(data.entries())
    try{
      const res = await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(body)})
      if(res.ok){
        setSuccessText('Grazie! Ci metteremo in contatto con te per concordare l\'orario.')
        e.target.reset()
      } else {
        const json = await res.json()
        setSuccessText('Errore: ' + (json.error || 'Si è verificato un errore.'))
      }
    }catch(err){
      setSuccessText('Si è verificato un errore. Riprova più tardi.')
    }
    setSending(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="relative w-full max-w-lg mx-4 card-magical rounded-2xl p-6 shadow-2xl">
        <button className="absolute top-3 right-3 text-star-gold" onClick={onClose}>✕</button>
        <h3 className="font-gothic text-3xl text-star-gold mb-2">Prenota la tua consulenza</h3>
        <p className="mb-4 text-sm text-gray-300">Compila il modulo per ricevere la conferma via email. Puoi anche contattarci con WhatsApp.</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" required placeholder="Nome" className="w-full px-3 py-2 rounded bg-black/30 border border-mystic-purple/30" />
          <input name="email" type="email" required placeholder="Email" className="w-full px-3 py-2 rounded bg-black/30 border border-mystic-purple/30" />
          <input name="phone" placeholder="Telefono (opzionale)" className="w-full px-3 py-2 rounded bg-black/30 border border-mystic-purple/30" />
          <select name="service" defaultValue="Tarocchi" className="w-full px-3 py-2 rounded bg-black/30 border border-mystic-purple/30">
            <option>Tarocchi - Lettura</option>
            <option>Yoga - Lezione individuale</option>
            <option>Tarocchi + Yoga - Pacchetto</option>
          </select>
          <textarea name="message" placeholder="Messaggio / preferenze" className="w-full px-3 py-2 rounded bg-black/30 border border-mystic-purple/30" />
          <div className="flex gap-2">
            <button disabled={sending} type="submit" className="flex-1 py-2 rounded-md font-medium bg-mystic-purple text-white">Prenota ora</button>
            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent('Ciao! Vorrei prenotare una consulenza.')}`} target="_blank" rel="noreferrer" className="py-2 px-4 rounded-md border border-star-gold text-star-gold">WhatsApp</a>
          </div>
        </form>
        {successText && (
          <div className="mt-4 p-3 bg-black/40 rounded text-star-gold">{successText}</div>
        )}
      </div>
    </div>
  )
}
