// fetch("https://swapi.tech/api/people/1")
//     .then((res) => {
//         console.log("RESOLVED! ", res);
//         return res.json()
//     })
//      .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.tech/api/people/2")
//     }).then(res =>{
//         console.log("second request resolved");
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//      .catch ((e)=> {
//           console.log("ERROR!", e);
//     })

    const loadStarWarsPeople = async (id) => {
        try{
            const res= await fetch(`https://swapi.tech/api/people/${id}/`);
            const data = await res.json();
            const properties = data.result.properties;
            console.log (data); 
            console.log (JSON.stringify(properties, null, 2)); 
            const res2= await fetch("https://swapi.tech/api/people/2");
            const data2 = await res2.json();
            console.log (JSON.stringify(data2.result.properties, null, 2)); 
        } catch (e) {
            console.log("Error", e);
        }
    }

    loadStarWarsPeople(1);

