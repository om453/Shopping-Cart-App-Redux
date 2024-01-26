import React, { useEffect, useState } from 'react'
import { Product } from '../components/Product';
import Spinner from '../components/Spinner'

const Home = () => {

const [ posts , setPosts ] = useState([]);
const [ loading , setLoading ] = useState(false)

  const API_URL = "https://fakestoreapi.com/products";


async function fetchProductdata() {
  setLoading(true);

  try{
    const result = await fetch(API_URL);
    const data = await result.json();
    setPosts(data);
    // console.log(data);
  }

  catch(error){ 
console.log("Error 404 posts Not found!");
setPosts([]);
  }
  setLoading(false);
} 


useEffect(() => {
  fetchProductdata();
} , [])

 
  return (
    <div>
{
      loading ? <Spinner /> :
      posts.length > 0 ? 
      (
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 space-y-10 min-h-[80vh]'>
        {
          // post defines the single post which is going to map
          posts.map( (post) => (
          <Product key = {posts.id} post={post}/>
        ))
        }
      </div>) : 
      
      ( <div className='flex justify-center items-center'>
        <p>No data found</p>
      </div>)
}
    </div>
  )
}

export default Home