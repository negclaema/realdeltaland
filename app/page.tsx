export default function Home() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h2 className="text-4xl font-bold">Bine ai venit la Real Delta Land</h2>
        <p className="mt-4 text-lg">Un colț de rai în inima Deltei Dunării</p>
        <img src="https://source.unsplash.com/800x400/?delta,water" alt="Delta Dunării" className="mt-6 w-full rounded-lg shadow" />
      </section>

      <section>
        <h3 className="text-2xl font-semibold">Despre noi</h3>
        <p className="mt-2">Oferim cazare de vis, activități în natură și o experiență autentică în Delta Dunării.</p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold">Camere și tarife</h3>
        <ul className="mt-2 list-disc list-inside">
          <li>Camera dublă – 350 RON/noapte</li>
          <li>Camera triplă – 450 RON/noapte</li>
          <li>Suită – 600 RON/noapte</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold">Contact</h3>
        <p className="mt-2">Telefon: 07xx xxx xxx</p>
        <p>Email: contact@realdeltaland.ro</p>
      </section>
    </div>
  );
}