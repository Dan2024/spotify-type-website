import { useState } from "react";

export default function Hero() {
  const [searchedArtist, setNewSearchedArtist] = useState("");
  const [artistToDisplay, setNewArtistToDisplay] = useState(null);

  function handleChange(e) {
    const { value } = e.target;
    setNewSearchedArtist(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        "X-RapidAPI-Key": "c78a4add31msh77ca8d7a1ebf937p186f2bjsnda4d9ea5cc1a",
      },
    };

    // fetch("https://randomuser.me/api/")
    fetch(
// link to api
      options
    )
      .then((response) => response.json())
      .then((searchedArtistObject) => {
        setNewArtistToDisplay(searchedArtistObject);
        console.log(searchedArtistObject);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="mt-5 w-1/2 p-3 rounded-md outline-0"
          placeholder="Enter an artist name or song..."
          onChange={handleChange}
          value={searchedArtist}
        />
      </form>
      <div className="text-white ">
        {artistToDisplay && (
          <div>
            <div className="grid grid-cols-2">
              <div>
                <p className="text-2xl pt-5 font-semibold">Top Result</p>
                <div className="bg-stone-900 w-5/6 mt-5 rounded-md hover:bg-stone-800 transition ease-in-out delay-150">
                  <img
                    className="w-52 p-5 rounded-full"
                    src={
                      artistToDisplay.artists.items[0].data.visuals.avatarImage
                        .sources[0].url
                    }
                    alt="#"
                  />
                  <p className="font-bold text-4xl pb-5 pl-5">
                    {artistToDisplay.artists.items[0].data.profile.name}
                  </p>

                  <p className="text-2xl pb-5 pl-5">Artist</p>
                </div>
              </div>
              <div>
                <p className="text-2xl pt-5 font-semibold pb-3">Songs</p>
                {artistToDisplay.tracks.items.map((track, idx) => (
                  <div
                    key={idx}
                    className="three-col-grid__expand-two pb-2 hover:bg-stone-800 transition ease-in-out delay-50"
                  >
                    <img
                      className="w-16 p-1"
                      src={track.data.albumOfTrack.coverArt.sources[0].url}
                      alt="#"
                    />
                    <div>
                      <p>{track.data.name}</p>
                      <p className="text-xs">
                        {track.data.artists.items.map((artist) => (
                          <span className="text-stone-400">
                            {artist.profile.name + " "}
                          </span>
                        ))}
                      </p>
                    </div>
                    <p className="text-stone-400 pr-4">
                      {(track.data.duration.totalMilliseconds / 100000).toFixed(
                        2
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-2xl pt-5 font-semibold pb-3">Albums</p>
            <div className="grid grid-flow-col gap-6">
              {artistToDisplay.albums.items.map((album, idx) => (
                <div className=" grid place-items-center bg-stone-900 rounded-lg">
                  <img
                    className="w-56 rounded-lg mt-5"
                    src={album.data.coverArt.sources[0].url}
                  />
                  <p key={idx} className="text-xl font-semibold mt-5 mb-5">
                    {album.data.name}
                  </p>
                  <p className="text-stone-400 pr-4 mb-5 italic">
                    {album.data.date.year +
                      "•" +
                      album.data.artists.items[0].profile.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* <div className="grid">
        <div>
          <p>Top Result</p>
        </div>
        <div>
          <p>Songs</p>
          
        </div>
      </div> */}
    </div>
  );
}
