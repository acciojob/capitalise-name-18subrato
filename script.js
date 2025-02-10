//your JS code here. If required.\
let input = document.querySelector("#fname");
input.addEventListener('blur', function() {
            input.value = input.value.toUpperCase();
        });