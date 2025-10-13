import './globals.css';
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'Donne Sotto le Stelle',
  description: 'Tarocchi, Yoga e Pratiche Energetiche',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
