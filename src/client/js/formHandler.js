function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    Client.checkForName(formText);

    console.log('::: Form Submitted :::');
    fetch('https://api.openweathermap.org/data/2.5/weather?appid=541edf4d85a8f53fc2d7080a41292ff2&units=imperial&zip=91748')
        .then((res) => {
            return res.json();
        })
        .then(function (data) {
            document.getElementById('results').innerHTML = data.main.temp;
        });
}

export { handleSubmit };
