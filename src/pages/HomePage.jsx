import photo from '../assets/yomna-hero-4x5.jpg'
import { usePageTitle } from '../usePageTitle'
import './HomePage.css'

export default function HomePage() {
  usePageTitle('Yomna A. Mohaimen')

  return (
    <main className="home-main">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="home-hero-inner">
          <div className="home-hero-copy">
            <div className="home-hero-text">
              <h1 id="home-hero-title">
                Yomna A. Mohaimen,
                <br className="home-hero-break" /> product designer
              </h1>
              <p>
                Hello, I'm Yomna, a product designer based in Cairo, working remotely. I came
                to digital design through textiles, fashion and graphic design, so I care
                about craft as much as I care about usability.
              </p>
            </div>
          </div>
          <div className="home-hero-portrait">
            <div className="home-hero-photo">
              <img
                src={photo}
                alt="Yomna A. Mohaimen in a denim jacket, with pink bougainvillea behind her"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
