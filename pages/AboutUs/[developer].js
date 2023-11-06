import { useRouter } from 'next/router'
import { details } from '.'

function Detail()
{
 
    const route=useRouter()

   const value=route.query.developer
   let id
   
   if(value!==undefined)
   {
    id=value
    
   }
    
  return <div>

   <h1>Developer Detail</h1>
   <h3>Developer Name:- {details[id-1].name}</h3>
   <h3>Developer Role:- {details[id-1].role}</h3>
    
   
  </div>

}

export default Detail 