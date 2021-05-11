import React from 'react'
import { useParams } from 'react-router'
import { displayFootprint } from '../lib/api'

function Results() {
  const { id } = useParams()
  const [estimate, setEstimate] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await displayFootprint(id)
        setEstimate(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    console.log(getData)
    getData()
  }, [id])

  console.log(estimate)

  return (
    <h1>hello</h1>
  )
}

export default Results