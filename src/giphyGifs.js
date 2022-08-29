const giphyKey = '1RrR64yeXUReOp4UeWAgYVWNUXlTVSLj';


export async function genGifs(text) {

        const res = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${giphyKey}&s=${text}`,{mode:"cors"});
        // https://api.giphy.com/v1/gifs/translate?api_key=1RrR64yeXUReOp4UeWAgYVWNUXlTVSLj&s=${txt.value}`,

        const gifData = await res.json();
        console.log(gifData);
        const url = gifData.data.images.original.url;

        return url;
}
