import { useRouter } from 'next/router'

export const details = [

    { id : 1, name: 'Yash', role: 'Senior Developer'},
    
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    
    ]
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
   <h3>Developer Name:- {id?details[id-1].name:'No Developer exists'}</h3>
   <h3>Developer Role:- {id?details[id-1].role:'No Developer exists'}</h3>
    
   
  </div>

}

export default Detail 