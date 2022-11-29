import React from 'react'
import Beer from './Beer'

function Beers({data}) {
  return (
    <div>
      {data.map((beer,index) => {
        return <Beer key={index} index={index} beerData={beer}/>
      }
      )}
    </div>
  )
}

export default Beers
