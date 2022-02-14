// Login form
document.getElementById("submitBtn").addEventListener('click', function() {
    const emaiLField = document.getElementById('user-email');
    const userEmail = emaiLField.value;
    // console.log(userEmail);
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);
    if (userEmail == 'kali' && userPassword == 's') {
        window.location.href = 'bank.html'
    };
});