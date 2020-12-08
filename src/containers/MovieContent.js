import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import { fetchActionMovies } from '../store/actions'
import { fetchComedyMovies } from '../store/actions'
import { fetchDocumentries } from '../store/actions'
import { fetchHorrorMovies } from '../store/actions'
import { fetchNetflixOriginals } from '../store/actions'
import { fetchRomanceMovies } from '../store/actions'
import { fetchTopRated } from '../store/actions'
import { fetchTrendingNow } from '../store/actions'
import MovieRow from './MovieRow'

export class MovieContent extends Component {

    async componentDidMount() {
        this.props.fetchActionMovies()
        this.props.fetchComedyMovies()
        this.props.fetchDocumentries()
        this.props.fetchHorrorMovies()
        this.props.fetchNetflixOriginals()
        this.props.fetchTrendingNow()
        this.props.fetchTopRated()
        this.props.fetchRomanceMovies()
    }
    rnd1 = Math.floor(Math.random() * 20)
    rnd2 = Math.floor(Math.random() * 8)

    movieHeader = () => {
        let movieHeader = null
        if (this.props.movies[this.rnd2].data) {
            movieHeader = this.props.movies[this.rnd2].data.movies[this.rnd1]
        }
        return movieHeader
    }

    render() {
        return (
            <div className="container">
                <Header movie={this.movieHeader()} />
                <div className="movieShowcase">
                    {this.props.movies.map(movie => {
                        if (movie.data) {
                            return <MovieRow
                                movieClicked={this.props.movieClicked}
                                category={movie.data.title}
                                movieList={movie.data.movies}
                                key={movie.data.title} />
                        }
                        return null
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        movies: Object.values(state),
    }
}

const mapDispatchToProps = {
    fetchNetflixOriginals,
    fetchTrendingNow,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentries
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContent)
