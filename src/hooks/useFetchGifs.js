import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        setTimeout(() => {

            const images = getGifs(category);// helpers que consigue los gifs
            images.then(imgs => {
                console.log(imgs);
                setState({
                    data: imgs, //[img1,img2... ] el estado almacena el arreglo de imagenes traidos de la promesa
                    loading: false
                })
            });

        }, 3000);


    }, [category])

    return state; // { data: [], loading: true}
}
