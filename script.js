document.getElementById('btn-login').addEventListener('click', function(){
    const getEmail = document.getElementById('user-email');
    const email = getEmail.value;
    // console.log(email);

    const getPassword = document.getElementById('user-password');
    const password = getPassword.value;

    if(email === 'sontan@bap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    
    }
    else{
        alert('Invalid! UserName or Password');
    
    }
})

