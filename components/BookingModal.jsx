import { useState } from 'react'

export default function BookingModal() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mt-8">
      <button 
        onClick={() => setOpen(true)}
        className="bg-purpleMagic px-6 py-3 rounded-xl text-white text-lg shadow-lg hover:bg-purple-700 transition"
      >
        Prenota Ora
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-xl p-6 w-96">
            <h2 className="text-2xl font-bold mb-4">Prenotazione</h2>
            <form className="flex flex-col space-y-3">
              <input type="text" placeholder="Nome" className="p-2 border rounded" required />
              <input type="email" placeholder="Email" className="p-2 border rounded" required />
              <input type="date" className="p-2 border rounded" required />
              <button className="bg-purpleMagic text-white px-4 py-2 rounded hover:bg-purple-700">
                Invia
              </button>
            </form>
            <button 
              onClick={() => setOpen(false)}
              className="mt-4 text-sm text-gray-600 hover:underline"
            >
              Chiudi
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
