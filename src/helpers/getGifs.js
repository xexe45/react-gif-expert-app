export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1ywmV3u79OoXLBLh0QAf3sIUfNkuQOVC&q=${category}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }));
    return gifs;
};