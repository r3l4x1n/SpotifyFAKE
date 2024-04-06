import { useEffect, useState } from 'react'
import ObtenerTokenSpotify from '../../services/serviciosSpotify'
import ObtenerCancionesTop, { obtenerCancionesTop } from '../../services/servicioCanciones'
import styleD from './Home.module.css'
import Canciones from './components/canciones/Canciones';
import { obtenerArtistasTop } from '../../services/serviceArtistasVarios';
import Artistas from './components/artistas/Artistas';


function Home(){
    const[carga, setCarga] = useState(true);
    const[canciones, setCanciones]= useState(null);
    const[artistas, setArtistas]= useState(null);
    




// song
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

// Artista

    useEffect(function(){
        ObtenerTokenSpotify()
        .then(function(tokenrespuesta){
            obtenerArtistasTop(tokenrespuesta)
            .then(function(respuestaArtistas){
                console.log("mira repuerca*****");
                console.log(respuestaArtistas)
                setCarga(false)
                setArtistas(respuestaArtistas.artists)
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
    return(
        <>
            <div >
                <Canciones canciones= {canciones} /> 
            </div>
                
            <div className={styleD.contenedor_home_artistas}>
                <Artistas artistas={artistas} />
            </div>
                


        </>
    )

}

export default Home 
