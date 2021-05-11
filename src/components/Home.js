import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero is-success is-light is-fullheight-with-navbar">
        <div className="hero-body">
          <p className="title is-success">
            About
          </p>
          <p className="subtitle">
            The way we shop has changed dramatically over the past decade, even more so over the last year
            as our lives have moved exlusively online.
          </p>
          <p className="subtitle">
            Whilst we have easily adapted to this change, our planet has not!
          </p>
          <p className="subtitle">
            Use our handy calulator to estimate the true environmental impact of that constant stream of packages arriving
            at your door, and choose to donate to one of our partner charities and help take care of our planet.
          </p>
          <Link to="/form">
            <button className="button is-primary is-light is-rounded is-focused is-fullwidth">Estimate</button>
          </Link>
        </div>
        <div>
          <img className="co2" src="https://i.imgur.com/E1M4mLu.png" alt="logo"/>
        </div>
      </section>
    </>
  )
}

export default Home