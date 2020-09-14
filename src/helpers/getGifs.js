
/*Como es async esta funcion no regresa los gifs, sino que regresa una promesa que resuelve
la coleccion de mis imagenes*/

export const getGifs = async ( category ) => {

    const apiKey = 'zqPuwKlADks0RbJ7tDyv8Z7KvcJQDSl1';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${ encodeURI(category)}&limit=6`;
    const peticion = await fetch(url);
    const { data } = await peticion.json(); //extrae data de lo recibido de la peticion
    //console.log(data)

    const gifs = data.map(img => { // gifs es un array de objetos que contienen la informacion de la imagen

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
            // "?" si vienen las imagenes, entonces que utilice el downsized_medium.url
        }
    })

    return gifs;
}