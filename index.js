const apiUrlPost = "https://jsonplaceholder.typicode.com/posts/";
const apiUrlPostUno = "https://jsonplaceholder.typicode.com/posts/1";
const container = document.querySelector(".container");

let recuperarDatos = ()=>{
fetch(apiUrlPost)
  .then(response => response.json())
  .then(arrayDeDatos => {
    arrayDeDatos.forEach(data => {
      console.log(data);
      const title = document.createElement("h1");
      const p = document.createElement("p");
      title.textContent = data.title;
      p.textContent = data.body;
      container.appendChild(title);
      container.appendChild(p);
    });
  });
}

let recuperarUno = ()=>{
  fetch(apiUrlPostUno)
    .then(response => response.json())
    .then(data=>{
        const title = document.createElement("h1");
        const p = document.createElement("p");
        title.textContent = data.title;
        p.textContent = data.body;
        container.appendChild(title);
        container.appendChild(p);
    })   
  }

  window.addEventListener('load',()=>{
    let boton = document.querySelector('button');
    boton.addEventListener('click',recuperarUno);
  })