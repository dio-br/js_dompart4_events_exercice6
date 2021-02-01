let maDiv = document.querySelector('#content')
console.log(maDiv);

//1 & 2
maDiv.addEventListener('click', (e) => {
    console.log(e.target);
})

//3
maDiv.addEventListener('click', (e) => {
    let cible = e.target
    cible.style = 'border: solid 2px red'
})


//event key 
let input = document.querySelector('input')
input.addEventListener('keypress', (e) => {
    console.log(e.key);
})

