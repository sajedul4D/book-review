import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";



const Home = () => {
    const [book,setbook]=useState([]);
    useEffect(()=>{
        fetch('/Book.json')
        .then(res=>res.json())
        .then(data=> setbook(data))
    },[])
    console.log(book);
    return (
        <div>
          <Banner></Banner> 
          <h1 className="text-center text-3xl mr-4">Books</h1>
          <div className="flex flex-wrap gap-d-4">
            {
                book.map(book=><Books key={book.id} book={book}></Books>)
            }

          </div>
         
        </div>
    );
};

export default Home;