import Head from 'next/head'

const Rezervare = () => {
  return (
    <>
      <Head>
        <title>Rezervare - Real Delta Land</title>
      </Head>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Formular de Rezervare</h1>
        <form className="space-y-4">
          <div>
            <label className="block font-medium">Nume complet</label>
            <input type="text" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block font-medium">Telefon</label>
            <input type="tel" className="w-full border rounded px-3 py-2" required />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block font-medium">Data sosirii</label>
              <input type="date" className="w-full border rounded px-3 py-2" required />
            </div>
            <div className="flex-1">
              <label className="block font-medium">Data plecării</label>
              <input type="date" className="w-full border rounded px-3 py-2" required />
            </div>
          </div>
          <div>
            <label className="block font-medium">Număr de persoane</label>
            <input type="number" className="w-full border rounded px-3 py-2" min="1" required />
          </div>
          <div>
            <label className="block font-medium">Mesaj opțional</label>
            <textarea className="w-full border rounded px-3 py-2" rows="4"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Trimite Rezervarea
          </button>
        </form>
      </div>
    </>
  )
}

export default Rezervare
