import React from 'react'
import { displayFootprint } from '../lib/api'

function Results() {
  const [estimate, setEstimate] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await displayFootprint()
        setEstimate(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <>
      {estimate &&
      <section className="hero is-fullheight-with-navbar is-sucess">
        <section className="resultsSection" key={estimate[0].data.id}>
          <section className="section">
            <img className="co2" src="https://i.imgur.com/E1M4mLu.png" alt="logo"/>
            <h1>Your carbon footprint for this shipping would be:</h1>
            <h2>
              {estimate[estimate.length - 1].data.attributes.carbon_g}g
            </h2>
            <h2>
              {estimate[estimate.length - 1].data.attributes.carbon_kg}kg
            </h2>
            <h2>
              {estimate[estimate.length - 1].data.attributes.carbon_lb}lb
            </h2>
            <h2>
              {estimate[estimate.length - 1].data.attributes.carbon_mt}mt
            </h2>
            <strong>
              The total cost to offset this would be £{Math.ceil(estimate[estimate.length - 1].data.attributes.carbon_g * 0.000007)}
            </strong>
          </section>
          <div className="bottomTwo">
            <section className="section">
              <img className="co2" src="https://cdn.shopify.com/s/files/1/0502/7010/9865/files/Copy_of_Untitled_4_190x.png?v=1605188060"/>
              <p className="charityInfo">Carbon Neutral Britain is the UK&apos;s leading Carbon Offsetting Initiative - allowing individuals and businesses to offset their carbon emissions.</p>
              <p>Become carbon neutral for £6.99 month</p>
              <a className="donateLink" href="https://carbonneutralbritain.org/products/become-carbon-neutral?variant=37544813428905&selling_plan=12419241"><strong>Donate</strong></a>
            </section>
            <section className="section">
              <img className="co2" src="https://cornwallinnovation.co.uk/wp-content/uploads/2019/12/Cool-Earth-logo-scaled-e1575539011735.jpg"/>
              <p className="charityInfo">Cool Earth&apos;s vision is a world where tropical deforestation and degredation has no role in climate change.</p>
              <p>By supporting Cool Earth, you are protecting the rainforest, improving lives and helping to tackle the climate crisis</p>
              <a className="donateLink" href="https://www.coolearth.org/get-involved/donate-cool-earth/"><strong>Donate</strong></a>
            </section>
          </div>
          
        </section>
      </section>
      }
    </>
  )
}

export default Results