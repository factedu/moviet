/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'localhost',
            'res.cloudinary.com',
            'images.unsplash.com',
            'cdn.pixabay.com',
            'cdn.dribbble.com',
            'cdn.fakercloud.com',
            'cdn-icons-png.flaticon.com',
            'image.tmdb.org',
            'www.themoviedb.org',
        ],
    }
}

module.exports = nextConfig
