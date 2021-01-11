import React from 'react'

export default ({ term, setter }) => (
    <label>
  <input placeholder="Search Novel Here" type="text" name="search" value={term} onChange={event => setter(event.target.value)} />
  </ label>
)
