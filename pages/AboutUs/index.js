import Link from 'next/link'

export const details = [

    { id : 1, name: 'Yash', role: 'Senior Developer'},
    
    { id : 2, name: 'Vaibhav', role: 'Backend Developer'},
    
    { id : 3, name: 'Suresh', role: 'Frontend Developer'}
    
    ]

function AboutUs()
{
    //console.log(details.map((item) => item.name))
  return <div>

   <h1>Welcome to AboutUs</h1>
   {details.map(item=> <Link href={`AboutUs/${item.id}`}><h2>{item.name}</h2></Link>)}
  </div>

}
 
export default AboutUs