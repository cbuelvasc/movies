import React, {useEffect, useState} from 'react';
import movieAPI from '../api/movieAPI';
import {Credits} from '../interfaces/creditsInterface';
import {MovieInformation} from '../interfaces/movieInterface';

interface MovieDetails {
    isLoading: boolean;
    movieInformation?: MovieInformation;
    cast: any[];
}

const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieInformation: undefined,
        cast: [],
    });

    const getMovieDetails = async () => {
        const movieInformationPromise = movieAPI.get<MovieInformation>(
            `/${movieId}`,
        );
        const creditsPromise = movieAPI.get<Credits>(`/${movieId}/credits`);

        const [movieInformationResponse, creditsResponse] = await Promise.all([
            movieInformationPromise,
            creditsPromise,
        ]);
        setState({
            isLoading: false,
            movieInformation: movieInformationResponse.data,
            cast: creditsResponse.data.cast,
        });
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state,
    };
};

export default useMovieDetails;
