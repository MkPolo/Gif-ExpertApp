

 export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=xC8xLmdL9rqfgyOu2dKn7t3C0tfQj7s7`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            // con ? preguntas si existe o no
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}