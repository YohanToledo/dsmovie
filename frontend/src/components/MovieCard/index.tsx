import MovieScore from 'components/MovieScore';

function MovieCard() {
    //The witcher image
    //https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
        title: "Spider-Man: No Way Home",
        count: 2,
        score: 4.5
    };
    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>
            </div>
        </div>
    );
}

export default MovieCard;