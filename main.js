const loginButtonElement = document.getElementById('login-btn')


loginButtonElement.addEventListener('click', function() {

    const emailInputElement = document.getElementById('email-input')
    const passwordInputElement = document.getElementById('passwd-input')

    axios.post('https://reqres.in/api/login', {

        "email": emailInputElement.value,
        "password": passwordInputElement.value

    }).then(function(response) {

        let token = response.data.token

        localStorage.setItem('token', token)
        console.log("Token Received ", token)

        window.location = 'loginsuccess.html'

    }).catch(error => { 
        
        console.log(error)
        alert(error.response.data.error)
    })
})