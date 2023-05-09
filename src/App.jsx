import { useLoaderData } from 'react-router-dom'
import './App.css'
import ChocolateCard from './components/ChocolateCard';
// import ChocolateCard from './components/ChocolateCard';
function App() {

  const chocolates = useLoaderData();


  return (
    <div>
      <h1 className='header'>Chocolate Management System</h1>

      <div className='topic-name mx-28 py-5 px-10	'>
            <div className='flex justify-between'>
              <p>Image</p>
              <p>Name</p>
              <p>Country/Factory</p>
              <p>Category</p>
              <p>Action</p>
            </div>
      </div>
      {/* <div>
        <p>{chocolates.length}</p>

      </div> */}
      <div >
        {
          chocolates.map(chocolate => <ChocolateCard
          key={chocolate._id}
          chocolate = {chocolate}
          ></ChocolateCard>)
        }
            
      </div>
    
    </div>
  )
}

export default App
