export default function RecuPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      
      {/* Reçu */}
      <div className="flex items-center justify-center mb-6">
        <img
          src="/recu.png"
          alt="Reçu de paiement"
          className="w-[900px] h-auto shadow-lg rounded-lg"
        />
      </div>

      {/* Bouton de téléchargement */}
      <a
        href="/recu.png"
        download
        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
      >
        Télécharger le reçu
      </a>
    </div>
  );
}

