document.body.onload = () => {
    const form_input_username = document.querySelector('#form__input__username');
    const form_input_password = document.querySelector('#form__input__password');

    const auth_btn = document.querySelector('#auth_btn');

    auth_btn.onclick = () => {
        const response = fetch('http://26.83.222.115:8080/api/auth/token/login/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow", // manual, *follow, error
            body: JSON.stringify({
                username: form_input_username.value,
                password: form_input_password.value
            }),
        }).then((res) => res.json()).then((response) => {
            sessionStorage.setItem('token', `Token ${response.auth_token}`);
            if (response.auth_token) {
                window.location.replace('http://26.83.222.115:8080/');
            }
        });
    }
}