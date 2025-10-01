import { useState } from "react";

export default function BookingModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8">
      <button
        onClick={() => setOpen(true)}
        className="px-6 py-3 bg-magic text-white rounded-2xl shadow-lg hover:bg-purple-600 transition"
      >
        ✨ Prenota ora ✨
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-night p-8 rounded-2xl shadow-xl w-96 text-center">
            <h3 className="text-2xl mb-4 text-magic">Inserisci i tuoi dati</h3>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Nome" className="p-2 rounded bg-gray-900 border border-gray-700" />
              <input type="email" placeholder="Email" className="p-2 rounded bg-gray-900 border border-gray-700" />
              <button type="submit" className="px-4 py-2 bg-magic text-white rounded hover:bg-purple-600 transition">
                Conferma
              </button>
            </form>
            <button onClick={() => setOpen(false)} className="mt-4 text-gray-400 hover:text-white">Chiudi</button>
          </div>
        </div>
      )}
    </div>
  );
}