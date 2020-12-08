import React, { Component } from 'react'
import { ReactComponent as AddIcon } from '../../static/images/add.svg';
import { ReactComponent as PlayIcon } from '../../static/images/play-button.svg';

export default class MovieDetail extends Component {
    render() {
        console.log(this.props.movie);
        const { movie } = this.props
        return (
            <div className="modal__container">
                <h1 className="modal__title">{movie.title || movie.name}</h1>
                <p className="modal__info">
                    <span className="modal__info__rating">Rating: {movie.vote_average * 10}%</span>{' '}
                    Release Date: {movie.first_air_date || movie.release_date}{' '}
                    Runtime:
                </p>
                <p className="modal__overview">
                    {movie.overview}
                </p>
                <button className="modal__btn modal__btn--red">
                    <PlayIcon className="modal__btn--icon" />
                    Play
                </button>
                <button className="modal__btn">
                    <AddIcon className="modal__btn--icon" />
                    My List
                </button>
            </div>
        )
    }
}
