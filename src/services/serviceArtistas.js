

async function ObtenerTokenSpotify(){
    const URL_TOPTRACKS_SERVICE="https://api.spotify.com/v1/artists/12vb80Km0Ew53ABfJOepVz/top-tracks?market=us"

    const PETICON_CANCIONES={
        method:"GET",
    }


    let respuestaServicio=await fetch(URL_TOPTRACKS_SERVICE, PETICON_CANCIONES)
    let canciones = await respuestaServicio.json()
    return canciones






}
export default ObtenerTokenSpotify
