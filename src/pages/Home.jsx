import { useState } from 'react';
import movies from './../data/movies.js'
import './Home.scss'
import { Link } from 'react-router-dom';

const Home = () => {
    const [normalMovies, setNormalMovies] = useState(movies);
    const [userInput, setUserInput] = useState('');
    // console.log(normalMovies);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('you clicked submit');
    }

    const sortYearUp = () => {
        let arrayCopy = [...normalMovies]
        const sortedMoviesYearUp = arrayCopy.sort((movieA, movieB) => movieA.year - movieB.year);
        setNormalMovies(sortedMoviesYearUp);
    }

    const sortYearDown = () => {
        let arrayCopy2 = [...normalMovies]
        const sortedMoviesYearDown = arrayCopy2.sort((movieA, movieB) => movieB.year - movieA.year);
        setNormalMovies(sortedMoviesYearDown)
    }

    const sortbestRanked = () => {
        let arrayCopy3 = [...normalMovies]
        const sortedMoviesRanking = arrayCopy3.sort((movieA, movieB) => movieB.rate - movieA.rate);
        setNormalMovies(sortedMoviesRanking)
    }

    const searchMovie = () => {
        let arrayCopy4 = [...normalMovies]
        const movieMatch = arrayCopy4.filter((singleMovie) => {
            if(singleMovie.title.toLowerCase().includes(userInput.toLowerCase().trim())){
                return singleMovie
            }
        })
        setNormalMovies(movieMatch)
        setUserInput('');
    }

    const sortMoviesAtoZ = () => {
        let arrayCopy5 = [...normalMovies]
        const sortedMoviesAtoZ = arrayCopy5.sort((movieA, movieB) => {
            if(movieA.title.toLowerCase() < movieB.title.toLowerCase()){
                return -1;
            } else {
                return 1;
            }
        });
        setNormalMovies(sortedMoviesAtoZ)
    }

    const sortMoviesZtoA = () => {
        let arrayCopy6 = [...normalMovies]
        const sortedMoviesZtoA = arrayCopy6.sort((movieA, movieB) => {
            if(movieA.title.toLowerCase() < movieB.title.toLowerCase()){
                return 1;
            } else {
                return -1;
            }
        });
        setNormalMovies(sortedMoviesZtoA)
    }

    return (  
        <section>
            <header>
                <h1>Incredible Movies for you</h1>
                <h3>The beste Movie DataBase</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="" id="" placeholder="search by title" onChange={(e) => setUserInput(e.target.value)} value={userInput}/>
                        <input type="submit" value="search" onClick={searchMovie}/>
                    </div>
                    <div>
                        <button type="submit" onClick={sortYearUp}>Sort Year Up</button>
                        <button type="submit" onClick={sortYearDown}>Sort Year Down</button>
                        <button type="submit" onClick={sortbestRanked}>Sort by Rating</button>
                        <button type="submit" onClick={sortMoviesAtoZ}>Sort by MovieTitle A - Z</button>
                        <button type="submit" onClick={sortMoviesZtoA}>Sort by MovieTitle Z - A</button>
                    </div>
                    

                </form>
            
            </header>

            <article className='movieOutput_wrap'>
                {normalMovies.map((singleMovie, index) => {
                return (
                    <div key={index} className='singleMovie_wrap'>
                        <h2>{singleMovie.title}</h2>
                        <h4>{singleMovie.year}</h4>
                        <p>directed by: {singleMovie.director}</p>
                        <p>Genre: {singleMovie.genre.join()}</p>
                        <p>Duration: {singleMovie.duration}</p>
                        <h3>Rate: {singleMovie.rate} ⭐️</h3>
                        <Link to={`/details/${singleMovie.title.toLowerCase().split(" ").join("")}`}>Details</Link>
                    </div>
                )
            })}
            </article>
            
        </section>
    );
}
 
export default Home;