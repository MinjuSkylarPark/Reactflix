import { useEffect, useState} from 'react';
import Moviecard from './Moviecard';
import './App.css';
import SearchIcon from './search.svg';

//omdbapi사이트에서 이메일로 받은 api-key
// e4231acb

const API_URL = 'https://www.omdbapi.com?apikey=e4231acb'
// const movie={
//         "Title": "Italian Spiderman",
//         "Year": "2007",
//         "imdbID": "tt2705436",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",

// }
const App=()=> {
  
  //무비데이터가 변경될때마다 상태업데이트를하는 moviedata만듦
  const [movies, setMovies] = useState([]);
  const[searchTerm,setSearchTerm] = useState('')

  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    // console.log(data.Search)
    setMovies(data.Search)
  }
  useEffect(()=>{
    searchMovies('love')
  },[]);

  return(
    <div className='app'>
        <h1>MovieLand</h1>

        <div className="search">

            <input 
              
              placeholder='search for movies'
              // value="Spiderman"
              value={searchTerm}
              // onChange={()=>{}}/>
              // 1. setSearchTerm - useState을 씀으로써 검색창을 활성화 시켰다
              onChange={(e)=>setSearchTerm(e.target.value)}/>
        
              {/* 2. 이미지를 리렌더링 함으로써 검색값에의해 검색결과가 재조회되게끔 할 수 있다 */}
              <img
                src={SearchIcon}
                alt="search"
                onClick={()=>searchMovies(searchTerm)}
              />
        </div>

    {/* 만일 전체 무비데이터의 길이가 0보다 크다면 하단의 무비데이터를 화면으로 송출하는 3항연산자를 만든다 */}
      {
        movies?.length >0
        ?(
          <div className="container">
          {/* 여기서 Moviecard만 렌더링하면 movie1 props는 없고 '공'데이터만 가져와 까만화면만나온다*/}
          {/* <Moviecard movie={movie}/> */}
          {movies.map((movie)=>(
            <Moviecard movie={movie}/>
          ))}
        </div>
        // 영화데이터가없을 경우 no movie found 
        ) : (
          <div className="empty">
            <h2>No Movies found</h2>
          </div>
        )
      }
       
    </div>
  )
  }
export default App;
