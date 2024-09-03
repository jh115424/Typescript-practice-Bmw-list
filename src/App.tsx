import { useState } from 'react'
import { BmwList } from './BmwList'





 const bmws: BmwList[] = [
  {id: 1,
    name: 'BMW 3 Series',
   
   price: 55000
 
   
  },
   {
    id: 2, 
    name: 'BMW 5 Series',
    price: 68000
   
    
   },
   {
    id: 3, 
    name: 'BMW 7 Series',
    price: 75000

   }
  
]
const getAllBmws = () => fetch('http://localhost:3000/bmws')
.then(response => response.json())
getAllBmws().then(bmws => console.log(bmws))

function App() {
const [activateBmwList, setActivateBmwList] = useState< BmwList | null>(null)
  return (
    <>

      <h1>BMW Info List</h1>
      <section className="car-list">
        <h3>All BMW Info</h3>
        <div> <b>Name:</b>{activateBmwList?.name}</div>
      <ol>
        {bmws.map((bmws => <li key={bmws.id} onClick={() => {
          setActivateBmwList(bmws);
        }}>{bmws.name}</li>))}
      </ol>
      <h3>My BMW List</h3>
      </section>
      <section className='my-list'>
        <h3>My List</h3> 
        <div>
        <b>Name:</b>{activateBmwList?.name}
        </div>
        <br></br>
        <b>Price:</b>{activateBmwList?.price}
       
  

      </section>
 
    </>
  )
}

export default App
