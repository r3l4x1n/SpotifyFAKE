import React from 'react'
import style from './Artistas.module.css'
import { Link } from "react-router-dom";
import iconplayD from '../../../../assets/playIcon.png'

export default function Artistas( {artistas} ) {

    


  return (
    <div 
      className={style.container__artista}
    >
      {
    artistas && artistas.map(function(cancion) {

      const partesUrl = cancion.external_urls.spotify.split("/");

      const ultimoParametro = partesUrl[partesUrl.length - 1];
      
      console.log(ultimoParametro);


    return (
      <>
      <div>
        <div className='col'  key={cancion.id}>
        <div className={style.card}>          
           {/* <p>{cancion.artists.followers.total}</p>  */}
          
           <div className={style.icond}>
                < Link className={style.icond__link} to = { "/manejo/" + ultimoParametro  }>
                          <img src={cancion.images[0].url} className={style.imagen} alt="" /> 
                </Link>
                <img className={style.icon__play} src={iconplayD} alt="Icond Play" />
           </div>
           <div className={style.artis_text_padre}>
              <h3 className={style.artis_texto}>{cancion.name}</h3>
              <p  className={style.artis_texto}> {cancion.genres[1]}</p>
           </div>
           
        </div>
        </div>
      </div>
      </>
    );
  })
}

    </div>
  )
}
