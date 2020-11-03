
const form = document.querySelector('#form');

const email = document.querySelector('#email');

const submit = document.querySelector('#submit');


const checkFill = function(email){

    if(email.value.length === 0){

        email.parentNode.nextElementSibling.classList.add('message');

        email.style.borderColor = 'red';

        email.parentNode.nextElementSibling.textContent = 'Whoops! It looks like you forgot to add your email';

        return false;

    }

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!regex.test(email.value)){

        email.style.backgroundColor = 'white';

        email.style.borderColor = 'red';
        
        email.parentNode.nextElementSibling.classList.add('message');

        email.parentNode.nextElementSibling.textContent = 'Please provide a valid email address';

        return false;

    }

    return true;
}


form.addEventListener('submit', function(e){

    e.preventDefault();

    checkFill(email);

    if(checkFill(email)){

        alert('You will be notified');

        window.location.reload(); // reloads the page
    }
});

email.addEventListener('input', function(e){

    e.target.classList.remove('message');

    email.style.borderColor = 'hsl(0, 0%, 59%, 0.3)'; 
    
    e.target.parentNode.nextElementSibling.textContent = '';

});
