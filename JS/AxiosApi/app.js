// axios.get ("https://swapi.tech/api/people/1")
//     .then((res) => {
//         console.log("Response" ,res);
//     })
//     .catch ((e) => {
//         console.log ("Error", e);
//     });

const getStarWarsPerson = async (id) => {
    try {
    const res = await axios.get(`https://swapi.tech/api/people/${id}`);
    console.log(res.data.result.properties);
    }catch (e) {
        console.log(e);
    }
}

// getStarWarsPerson(1);
// getStarWarsPerson(10);
const jokes = document.querySelector("#jokesList");
const boton = document.querySelector("#boton");

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);
}

const getDadJoke = async () => {
    try {
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }
}



boton.addEventListener('click', addNewJoke);
