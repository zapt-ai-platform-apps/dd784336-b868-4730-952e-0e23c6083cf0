import './index.css';

function App(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a la Aplicación para Crear Música</h1>
        <p className="text-lg mb-8">
          Crea, edita y comparte tu música con facilidad. Explora tus ideas y transforma sonidos en composiciones únicas.
        </p>
      </header>
      <main className="w-full flex-grow flex flex-col items-center justify-center">
        {/* Future UI components for music creation can be added here */}
      </main>
      <footer className="w-full py-4 bg-gray-200 text-center">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-sm text-gray-700"
        >
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}

export default App;