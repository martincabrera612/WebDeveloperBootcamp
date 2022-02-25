const todoList = [];
let opcion = prompt("Ingrese una de las opciones de la lista: ");
while (opcion !== "quit") {
    if (opcion === "new") {
        let item = prompt("Ingrese nuevo item: ");
        todoList.push(item);
        console.log(`${item} se agrego a la lista`)
    } else if (opcion === "list") {
        console.log("*********************");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("*********************");
    } else if (opcion === "delete") {
        let posItem = parseInt(prompt("Ingrese posicion del item a borrar: "));
        if (!Number.isNaN(posItem)) {
            todoList.splice(posItem, 1);
            console.log("Se borro un item");
        } else {
            console.log("Unknown index");
        }
    }
    opcion = prompt("Ingrese una de las opciones de la lista: ");

}
console.log("OK QUIT THE APP")
