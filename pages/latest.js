import {useRouter} from "next/router";
import {useState, useEffect} from "react";
const API_KEY = "fe70023ec53e73de5f4f566c124b89bd";
export default function Latest() {
    const router = useRouter();
    const [movies, setMovies] = useState();
    useEffect(() => {
        (async () => {
            const {results} = await(
                await fetch(`/api/movies/top_rated`)
            ).json();
            
            setMovies(results);
            console.log(results)
        })();
    }, []);
    return (
        <div>
            <div className="divgrid">
            {movies?.map((movie) => (
            <div className="container" key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              
              <div className="overlay"></div>
              <div className="button"><a href="https://www.naver.com"> 예매 하기 </a></div>
              <h4>{movie.original_title}</h4>
            </div> ))}
            
            </div>
            <style jsx>{`
            .container {
              position: relative;
              margin-bottom: 50px;
              width: 280px;
              height: 350px;
            }
            
            .overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0);
              transition: background 0.5s ease;
            }
            
            .container:hover .overlay {
              display: block;
              background: rgba(0, 0, 0, .3);
            }
            
            .container:hover .title {
              top: 90px;
            }
            
            .button {
              position: absolute;
              width: 280px;
              left:0;
              top: 180px;
              text-align: center;
              opacity: 0;
              transition: opacity .35s ease;
            }
            
            .button a {
              width: 200px;
              padding: 12px 48px;
              text-align: center;
              color: white;
              border: solid 3px white;
              z-index: 1;
            }
            .button a:hover{
              width: 200px;
              padding: 12px 48px;
              text-align: center;
              color: black;
              border: solid 3px black;
              z-index: 1;
            }
            
            .container:hover .button {
              opacity: 1;
            }
            
        
            .divgrid {
                display : grid ;
                grid-template-columns : 300px 300px 300px 300px;
                grid-template-rows : repeat(1, 400px);
                justify-content :center;
                margin-top :1rem;
                padding : 1rem;
                
            }
            img {
              width : 280px;
              height : 350px;
            }
            
            h4 {
              margin-top : 0px ;
            }
            
  
            `}</style>
        </div>
        
    )
}
