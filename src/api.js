
  const getMusic = async (artist) => {
    const resp = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`, {
      headers: {
        "X-RapidAPI-Key": "59f4081f5emshe5eef313607984ap1c3fa5jsnf51594987541",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
    const data= await resp.json()
    return data
  }

export { getMusic };
