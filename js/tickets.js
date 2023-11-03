console.log('archivo vinculado');

//Tomando datos del cliente
const nombre = document.querySelector("[name=nombre]");
const apellido = document.querySelector("[name=apellido]");
const email = document.querySelector("[name=email]");
const cantidad = document.querySelector("[name=cantidad]");

// console.log(nombre, apellido, email, cantidad);

nombre.addEventListener("blur", function (e){
  const field = e.target;
  const fieldValue = e.target.value;
  if(fieldValue.lenght === 0){
    field.nextElementSibling.innerText = 'Nombre es requerido'
  }
})