import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        // Get movies from tmdb api
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
        )

        const data = await response.json();

        return new NextResponse(JSON.stringify(data), { status: 200 });

    } catch (error) {
        console.log('[ERROR] POST /movies', error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}