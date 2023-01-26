import { useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';
// e4231acb
const API_URL = 'https://www.omdbapi.com?apikey=e4231acb'
const movie1={
        "Title": "Italian Spiderman",
        "Year": "2007",
        "imdbID": "tt2705436",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
}
const App=()=> {
  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    console.log(data.Search)
  }
  useEffect(()=>{
    searchMovies('spiderman')
  },[])
  return(
    <div className='App'>
        <h1>MovieLand</h1>
        <div className='search'>
            <input placeholder='search'
              value="spiderman"
              onChange={()=>{}}/>
              <img
                src={SearchIcon}
                alt="search"
                onClick={()=>{}}
              />
        </div>
        <div className='container'>
          <div className='movie'>
            <div>
               <p>{movie1.Year}</p>
            </div>

            <div>
              {/* N/A 는 영화이미지가 없을 때 (API내규칙)*/}
              {/* poster 렌더링전에 movie1반드시붙여주기 */}
              {/* Poster만 치면 순수무비데이터 종속된 곳이 없어서 undefined로 나옴 */}
              <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
            </div>

            <div>
              <span>{movie1.Type}</span>
              <h3>{movie1.Title}</h3>
            </div>

          </div>
        </div>
    </div>
  )
  }
export default App;
