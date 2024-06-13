
import {useEffect, useState} from "react";
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';



//49c7d197

const API_URL ='http://www.omdbapi.com?apikey=49c7d197';


const App = ()=>{
  const [movies ,setMovies] = useState([]);
  const [searchTerm ,setSerachTerm] = useState('');
  
  const searchMovies = async(title) => {
    const response =await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    
   const handleSubmit =()=>{
   searchMovies('')

   searchTerm(true)
      
   };
 
   

  };
 
  
  useEffect(()=>{

  
       searchMovies('')
      
   
         

   
   



  },[]);

  return(
   <div className="app">
    <h1>Hola TV</h1>
      <div className="search">
        <input
           placeholder="search for movies" id="my-text"
           value={searchTerm}
           onChange={(e)=> setSerachTerm (e.target.value)}
           //onChange={(e) => searchMovies('')}
        />
        
       
        <img src={SearchIcon}
         alt="search"
         onClick={()=> searchMovies(searchTerm)}
         //onChange={(e) => searchMovies('')}
        />

      </div>
      {
         movies?.length >0
         ? (
            
        <div className="container">
     
        {movies.map((movie)=>(

           <MovieCard movie={movie}/>


        ))}
    
     </div>

         ):(
           <div className="empty">
            <h2> Welcome Dude </h2>

            </div>


         )


      }
      
   ;



      

     


   </div>
  );
}


//#010136 input box color
export default App;

