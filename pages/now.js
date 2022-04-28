
import {useRouter} from "next/router";
import {useState, useEffect} from "react";
const API_KEY = "fe70023ec53e73de5f4f566c124b89bd";
export default function Now_playing () {
    const router = useRouter();
    const [movies, setMovies] = useState();
    useEffect(() => {
        (async () => {
            const {results} = await(
                await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
            ).json();
            
            setMovies(results);
            console.log(results)
        })();
    }, []);
    return (
        <div>
            <div>
            <div className="divgrid">
                {
                    movies
                        ?.map((movie) => (
                            <div key={movie.id}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                                <h4>{movie.original_title}</h4>
                            </div>
                        ))
                }
            </div>
            <style jsx="jsx">
                {
                    ` .divgrid {
                        display: grid;
                        grid-template-columns: 300px 300px 300px 300px;
                        grid-template-rows: repeat(1, 400px);
                        justify-content: center;
                        margin-top: 1rem;
                        padding: 1rem;

                    }
                    img {
                        width: 280px;
                        height: 350px;
                    }
                    h4 {
                        margin-top: 0;
                    }
                     `
                }</style>
        </div>
        </div>
    )
}

