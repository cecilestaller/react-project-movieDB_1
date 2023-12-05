import { Link, useParams } from 'react-router-dom';
import movies from './../data/movies.js'
import { useState } from 'react';

const Details = () => {
    const [normalMovies, setNormalMovies] = useState(movies);

    const myPath = useParams();
    console.log(myPath);
    const pathTitle = myPath.title
    console.log(pathTitle);

    const filteredMovie = normalMovies.filter((singleMovieObj) => {
        if(singleMovieObj.title.toLowerCase().split(" ").join("").toString() === pathTitle.toString()){
            return singleMovieObj
        }
    })

    console.log(filteredMovie);

    return (  
        <section>
            <Link to='/'>back</Link>
            <h2>movie details</h2>
            {filteredMovie.map((item, index) => (
                <article key={index}>
                    <h2>{item.title}</h2>
                    <h2>YEAR: {item.year}</h2>
                    <h3>directed by: {item.director}</h3>
                    <p>Duration: {item.duration}</p>
                    <h3>Genre:</h3>
                    <div>
                        {item.genre.map((singleGenre, index) => (
                            <div key={index}>
                                <p>{singleGenre}</p>
                            </div>
                        ))}
                    </div>
                    <h2>Rate: {item.rate} ⭐️</h2>
                </article>
            ))}

        </section>
    );
}
 
export default Details;