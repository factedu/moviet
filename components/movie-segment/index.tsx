"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react';
import axios from 'axios';


export interface MovieSegmentProps {
    language: string;
    languageCode: string;
    numberOfMovies: number;
}

export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    vote_average: number;
    vote_count: number;
    adult: boolean;
    original_language: string;
    original_title: string;
    popularity: number;
    release_date: string;
}

export const MovieSegment: FC<MovieSegmentProps> = ({
    language,
    languageCode,
    numberOfMovies
}) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        axios.get('/api/movies').then((res) => {
            console.log(res.data.results);
            setMovies(res.data.results);
        }).catch((err) => {
            console.log(err);
            setError(err);
        }).finally(() => {
            setLoading(false);
        });
    }, []);


    return (
        <div>
            <h1>{language}</h1>
            {movies.length >= 0 && <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => {
                    return (
                        <div className="bg-white dark:bg-slate-800 shadow-md rounded-md p-4" key={movie?.id}>
                            <div className="relative w-full h-60">
                                <Image src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} layout="fill" objectFit="cover" className="rounded-md" alt={`${movie?.title}`} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-bold">{movie?.title}</h3>
                                <p className="text-sm">{movie?.release_date}</p>
                                <p className="text-sm">{movie?.vote_average}</p>
                                <p className="text-sm">{movie?.overview}</p>
                                {/* Popularity */}
                                <div className="flex flex-row gap-2">
                                    <Button variant="outline" size="sm">Add to Watchlist</Button>
                                    <Button variant="outline" size="sm">Add to Favourites</Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}