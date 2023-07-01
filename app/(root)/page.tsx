import { MovieSegment } from '@/components/movie-segment'
import React from 'react'

export default function Home() {
    return (
        <div className="py-4 px-10">
            {/* Movies Card */}
            <MovieSegment language='English' languageCode='en' numberOfMovies={20} />
        </div>
    )
}
