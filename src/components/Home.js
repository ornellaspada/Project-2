import { Link } from 'react-router-dom'

function Home() {
  const handleChange = () => {
    console.log('clicked')
  }
  
  return (
    <>
      <h1>About</h1>
      <p>The way we shop has changed dramatically, even more so over the past year as our lives have almost exclusively moved online. Whilst we have adapted to this change easily, our planet has not!</p>
      <p>Use our emission calulator to estimate the true environmental impact of the constant stream of packages that sign for, keep a monthly tally </p>
      <Link to="/form">
        <button onClick={handleChange}>estimate</button>
      </Link>
    </>
  )
}

export default Home