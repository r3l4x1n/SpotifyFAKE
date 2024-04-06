
export async function obtenerArtistasTop(token) {
    const a = ",5cj0lLjcoR7YOSnhnX0Po5,1TA5sGRlKUJXBN4ZyJuDIX,6nVcHLIgY5pE2YCl8ubca1,73sIBHcqh3Z3NyqHKZ7FOL,3tlXnStJ1fFhdScmQeLpuG,1URnnhqYAYcrqrcwql10ft,1vyhD5VmyZ7KMfW5gqLgo5,3TVXtAsR1Inumwj472S9r4,4q3ewBCX7sLwd24euuV69X"
    //const URL_TOPTRACKS_SERVICE = `https://api.spotify.com/v1/artists?ids=2gRP1Ezbtj3qrERnd0XasU`;
     const URL_TOPTRACKS_SERVICE = `https://api.spotify.com/v1/artists?ids=12vb80Km0Ew53ABfJOepVz${a}`;


    const PETICION_ARTISTAS = {
        method: "GET",
        headers: { "Authorization": token }
    };

    try {
        let respuestaServicio = await fetch(URL_TOPTRACKS_SERVICE, PETICION_ARTISTAS);
        let artistas = await respuestaServicio.json();
        return artistas;
    } catch (error) {
        console.error("Error al obtener los artistas:", error);
        return null;
    }
}
