import React from 'react'

export default ({ term, setter }) => (
    <label>
  <input className="input" placeholder="Search Novel Here" type="text" name="subtitle" value={term} onChange={event => setter(event.target.value)} />
  </ label>
)
