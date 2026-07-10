import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const Viewemploye = () => {
  const [data, ChangeData]=useState(

[

{"emname":"sam","emcode":"01","desi":"Manager"},
{"emname":"anu","emcode":"01","desi":"HR"},
{"emname":"vinu","emcode":"01","desi":"Staff"},
{"emname":"renu","emcode":"01","desi":"Staff"},
{"emname":"tanu","emcode":"01","desi":"Staff"},




]

  )
  return (

    
    <div>
<NavigationBar />
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Employee code</th>
      <th scope="col">Phone NO</th>
      
    </tr>
  </thead>
  <tbody>
    {data.map(

      (value,index)=>{

        return(
          <tr>
      <th scope="row">{value.emname}</th>
      <td>{value.emcode}</td>
      
      <td>{value.desi}</td>
    </tr>
        )
      }
    )}
    
    
    
    
    
    
    
  </tbody>
</table>
    </div>
  )
}

export default Viewemploye