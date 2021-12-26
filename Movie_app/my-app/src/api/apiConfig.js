const apiConfig = {
    baseUrl: 'https://api.themovuedb.org/3/',
    apiKey: '9ef293dfffd1f535e5c26ddf736a28fa',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;