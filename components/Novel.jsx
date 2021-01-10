import React from 'react'

export default ({ id, title, nameFirst, nameLast}) => (
  <div key={id} className="novel">
    {`${title} by ${nameFirst} ${nameLast}`}
  </div>
)
