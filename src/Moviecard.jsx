import React from "react";
//movie1 대신 props를 넣어도 되나(하단)
//props로 하나하나 전달하는 대신(props.movie1Title / props.moviePoster)
//이런식으로 쭉쭉나아가야하니

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>

        <div>
          {/* N/A 는 영화이미지가 없을 때 (API내규칙)*/}
          {/* poster 렌더링전에 movie1반드시붙여주기 */}
          {/* Poster만 치면 순수무비데이터 종속된 곳이 없어서 undefined로 나옴 */}
          {/* 무비이미지가 없을 경우 나타내는 fake이미지를 만들어줬다 */}
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
