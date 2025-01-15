

export function getFacts() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
       return fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", requestOptions)
        .then((response) => response.json());
          
}