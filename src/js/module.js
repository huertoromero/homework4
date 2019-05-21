/**
 * Acá escribo la lógica de mi módulo
 */
alert("Hola Bootcamp!");

class contact{
  constructor(name,email,technology,message){
      this._name = name;
      this._email = email;
      this._technology = technology;
      this._message = message;
  }
       getnameAndemail(){
          return `${this._name}, ${this._email}`;
          
      }
  }

  let contacts = [];
  const formContact = document.getElementById('form');
  const listado = document.getElementById('list');
  
  function agregarContactoAListado(contact){
      const elemListado = document.createElement('li');
      elemListado.innerHTML = contact;
      listado.appendChild(elemListado);

    }
  function guardarContacto(contact){
      // Agrego el alumno en el array de listado
      contacts.push(contact);
      // Guardo el array con el nuevo item como string en el local storage
      // (sobreescribiendo lo que ya tenía ese key en el local storage)
      localStorage.setItem('contacts', JSON.stringify(listado));
    }

    formContact.addEventListener('submit', function(evento){
      // Evito event default
      evento.preventDefault();

      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const technology = document.querySelector('#technology').value;
      const message = document.querySelector('#message').value;
      const newContact = new contact(name,email,technology,message);

  
      guardarContacto(newContact.getnameAndemail());
    
     
      
      toggleModal();      
 
    });

const closeButton = document.getElementById('close-modal');
const modal       = document.getElementById('modal-dialog');

function toggleModal(){
modal.classList.toggle('hidden');
}

closeButton.addEventListener('click', toggleModal);