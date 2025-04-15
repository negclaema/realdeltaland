import Head from 'next/head'
import Image from 'next/image'

const Despre = () => {
  return (
    <>
      <Head>
        <title>Despre Noi - Real Delta Land</title>
      </Head>
      <div className="container">
        <h1>Despre Real Delta Land</h1>
        <p>Suntem un resort de lux situat în Delta Dunării, oferind cazare de calitate superioară și experiențe de neuitat.</p>
        
        <div className="image-container">
          <Image 
            src="/img/despre.jpg" 
            alt="Real Delta Land"
            width={800} 
            height={600} 
          />
        </div>
      </div>
    </>
  )
}

export default Despre
