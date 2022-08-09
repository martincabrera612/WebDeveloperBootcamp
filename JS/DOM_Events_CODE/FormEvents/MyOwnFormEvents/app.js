const form = document.querySelector('#formShelter');
const input = document.querySelector('#catname');
const list = document.querySelector('#cats');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(input.value)
    const catname = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = catname;
    list.appendChild(newLI); 


});

// Form events - code excersie 
//Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const product = document.querySelector('#product');
const quantity = document.querySelector('#qty');
const list = document.querySelector('#list');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const newLi = document.createElement("LI");
    newLi.innerText = `${quantity.value} ${product.value}`;
    list.appendChild(newLi);
    document.contact-form.reset();
});

//Input events - code excercise

const h1 = document.querySelector("h1");
const input = document.querySelector('#username');

input.addEventListener('input' , () => {
    if (input.value !== "") {
        h1.innerText = `Welcome, ${input.value}`;
    }else {
        h1.innerText = 'Enter Your Username';
    }
});