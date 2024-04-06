import React, { useEffect, useState } from 'react'
import ObtenerTokenSpotify from '../../../../services/serviciosSpotify'

import style from './ManejoCanciones.module.css'
import { useParams } from 'react-router-dom';

export default function ManejoCanciones() {

    let { spotify } = useParams();

    async function obtenerCancionesTop(tokenrespuesta){

        const URL_TOPTRACKS_SERVICE=`https://api.spotify.com/v1/artists/${spotify}/top-tracks?market=us`

        const PETICON_CANCIONES={
            method:"GET",
            headers:{"Authorization":tokenrespuesta}
        }
    
    
        let respuestaServicio=await fetch(URL_TOPTRACKS_SERVICE, PETICON_CANCIONES)
        let canciones = await respuestaServicio.json()
        return canciones
    
    }

    

  console.log("miremos el id");
  console.log(spotify);

  const[canciones, setCanciones]= useState(null);
  const[carga, setCarga] = useState(true);

    useEffect(function(){
        ObtenerTokenSpotify()
        .then(function(tokenrespuesta){
            
            obtenerCancionesTop(tokenrespuesta)


            .then(function(respuestaCanciones){
                setCarga(false)
                setCanciones(respuestaCanciones.tracks)
            })
        })
    },[])

    if(carga){
        return(
            <>
             <h1>Cargando....</h1>
            
            </>
        )
    }
  return (
    <>
        
        <div className={style.container__manejoCanciones}>
         id canciones : {spotify}

                <h1 >$_$</h1>
         {
                    canciones.map(function(cancion){
                        return(
                            <div className='col'>
                                <div className='card h-100 shadow'>
                                <img src={cancion.album.images[0].url} alt={cancion.name} />
                                    <h3>{cancion.name}</h3>
                                    <audio src={cancion.preview_url} controls className='w-100'></audio>
                                    {
                                        console.log("CANCIONES", canciones)
                                    }
                                    
                                </div>
                            </div>
                            );

                    })
                }
        </div>
    </>
  )
}

