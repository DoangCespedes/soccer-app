const soccerFetch = () => {
    return fetch("https://v3.football.api-sports.io/standings?league=39&season=2019", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "XxXxXxXxXxXxXxXxXxXxXxXx"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
    
}

export const Table = async() => {
console.log(soccerFetch, 1)
  return (
    <>
        <h2 className={`mb-3 text-2xl font-semibold`}>
            Post
        </h2>
    </>
  )
}