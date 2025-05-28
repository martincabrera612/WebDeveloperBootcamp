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

getStarWarsPerson(1);
getStarWarsPerson(10);