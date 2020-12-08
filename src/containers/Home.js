import React, { Component } from 'react'
import MovieDetail from '../components/movie/MovieDetail'
import Modal from '../components/UI/Modal'
import MovieContent from './MovieContent'

export default class Home extends Component {
    state = {
        movieClicked: {},
        toggleModal: false
    }

    movieClickHandler = (movie) => {
        this.setState({
            movieClicked: movie,
            toggleModal: true
        })
    }

    closeModal = () => {
        this.setState({
            toggleModal: false
        })
    }

    render() {
        return (
            <div>
                <Modal
                    show={this.state.toggleModal}
                    modalClosed={this.closeModal}
                    movieClicked={this.state.movieClicked}
                >
                    <MovieDetail movie={this.state.movieClicked} />
                </Modal>
                <MovieContent movieClicked={this.movieClickHandler} />
            </div>
        )
    }
}
