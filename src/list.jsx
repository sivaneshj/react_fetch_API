import React from 'react'

function list({item}) {
    const val=JSON.stringify(item)
  return (
    <>
        <li>{val}</li>
    </>
  )
}

export default list