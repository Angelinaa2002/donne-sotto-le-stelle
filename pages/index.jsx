import Header from '../components/Header'
import BookingModal from '../components/BookingModal'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-stars bg-cover">
      <Header />
      <h1 className="text-4xl md:text-6xl font-bold text-purpleMagic drop-shadow-lg">
        Donne Sotto le Stelle ✨
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-gray-200">
        Vivi un&apos;esperienza magica sotto il cielo stellato. Prenota subito la tua serata indimenticabile.
      </p>
      <BookingModal />
    </div>
  )
}
