import React from 'react'

function header({setheader,load,header,error}) {
  return (
    <header>
        <p onClick={()=>{
          setheader('users')
          load(true)}
          }
          className={header === 'users'? 'change':''}>User</p>
        <p onClick={()=>{
          setheader('posts')
          load(true)}}
          className={header === 'posts'? 'change':''}>Post</p>
        <p onClick={()=>{
          setheader('comments')
          load(true)}}
          className={header === 'comments'? 'change':''}>Comments</p>
    </header>
  )
}

export default header