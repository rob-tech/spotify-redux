export const handleTracks = (id) => {
  console.log(id)
    return async (dispatch, getState) => {

            var headers = new Headers({
                "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387"
              });
          
              var response = await fetch(
                "https://deezerdevs-deezer.p.rapidapi.com/album/" + id,
                {
                  method: "GET",
                  headers: headers
                }
              );
              var tracks = await response.json();
              tracks = tracks.tracks.data
      
      dispatch({
        type: "TRACKS",
        payload: tracks
      });

    }
}

export const handleQueenAlbums = () => {
    return async (dispatch, getState) => {
var headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387"
});
    var response=await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" +"Queen", {
        method: "GET", headers: headers
    })
    if(response.ok)
    {
        var queenAlbums = await response.json();
        queenAlbums = queenAlbums.data
    }
  
    console.log(queenAlbums)
  
    dispatch({
        type: "QUEEN_ALBUMS",
        payload: queenAlbums
      });
    }
}

