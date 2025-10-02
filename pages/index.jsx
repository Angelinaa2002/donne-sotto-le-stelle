import Head from "next/head";
import Header from "../components/Header";
import BookingModal from "../components/BookingModal";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Donne Sotto le Stelle</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-5xl font-bold text-magic mb-6 drop-shadow-lg">
          ✨ Donne Sotto le Stelle ✨
        </h1>
        <p className="max-w-xl text-lg">
          Vivi la magia di una serata unica sotto le stelle. Prenota subito il tuo posto!
        </p>
        <BookingModal />
      </main>
    </div>
  );
}