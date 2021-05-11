import React from 'react'
import { useHistory } from 'react-router'
import { createFootprint } from '../lib/api'

function Form() {
  const history = useHistory()
  const [isError, setIsError] = React.useState(false)
  const [formData, setFormData] = React.useState({
    type: '',
    weight_value: 0,
    weight_unit: '',
    distance_value: 0,
    distance_unit: '',
    transport_method: '',
  })

  const handleChange = (e) => {
    if (e.target.name === 'weight_value' || e.target.name === 'distance_value') {
      setFormData({ ...formData, [e.target.name]: parseFloat(e.target.value) })
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value.toLowerCase() })
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await createFootprint(formData)
      history.push(`/estimates/${res.data.data.id}`)
    } catch (error) {
      setIsError(true)
    }
  }
  
  return (
    <section className="hero is-fullheight-with-navbar is-success">
      <section className="section">
        <h1 className="subtitle">Please fill in the requred fields</h1>
        <form className="column is-half is-offset-one-quarter" onSubmit={handleSubmit}>
          <label className="label">Type</label>
          <div className="select">
            <select name="type" onChange={handleChange}>
              <option> </option>
              <option>Shipping</option>
            </select>
          </div>
          {isError && (
            <p className="help is-danger">
                * Type required
            </p>
          )}
          <div className="field">
            <label className="label">Weight Value</label>
            <div className="control">
              <input 
                className="input"
                placeholder="Weight Value"
                name="weight_value"
                type="number"
                onChange={handleChange}
              />
            </div>
          </div>
          {isError && (
            <p className="help is-danger">
                * Weight value required
            </p>
          )}
          <label className="label">Weight Unit</label>
          <div className="select">
            <select name="weight_unit" onChange={handleChange}>
              <option> </option>
              <option>g</option>
              <option>lb</option>
              <option>kg</option>
              <option>mt</option>
            </select>
          </div>
          {isError && (
            <p className="help is-danger">
                * Weight unit required
            </p>
          )}
          <div className="field">
            <label className="label">Distance Value</label>
            <div className="control">
              <input 
                className="input"
                placeholder="Distance Value"
                name="distance_value"
                type="number"
                onChange={handleChange}
              />
            </div>
          </div>
          {isError && (
            <p className="help is-danger">
                * Distance value required
            </p>
          )}
          <label className="label">Distance Unit</label>
          <div className="select">
            <select name="distance_unit" onChange={handleChange}>
              <option> </option>
              <option>mi</option>
              <option>km</option>
            </select>
          </div>
          {isError && (
            <p className="help is-danger">
                * Distance unit required
            </p>
          )}
          <div className="field">
            <label className="label">Transport Method</label>
            <div className="select">
              <select name="transport_method" onChange={handleChange}>
                <option> </option>
                <option>Ship</option>
                <option>Train</option>
                <option>Truck</option>
                <option>Plane</option>
              </select>
            </div>
          </div>
          {isError && (
            <p className="help is-danger">
                * Transportation method required
            </p>
          )}
          <div className="field">
            <p className="control">
              <button className="button is-primary is-light is-rounded" type="submit">
                Calculate
              </button>
            </p>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Form