import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import BeerCard from './BeerCard'
import SearchBar from './SearchBar'


function FetchAPI() {
  const [beers,setBeers] = useState([])
  const [searchItem,setSearchItem] = useState('')

  useEffect(()=>{
    axios.get('https://api.sampleapis.com/beers/ale')
    .then(response =>{
      setBeers(response.data)
    })
    .catch(error => console.error(error))
  },[])

  const filteredBeers = beers.filter(beer=>
    beer.name.toLowerCase().includes(searchItem.toLowerCase())
  )
  return (
    <div>
      <SearchBar searchItem={searchItem} setSearchItem={setSearchItem}/>
      <div className="container">
        {filteredBeers.map(beer=>(
          <BeerCard key={beer.id} beer={beer}/>
        ))}
      </div>
    </div>
  );
}

export default FetchAPI;