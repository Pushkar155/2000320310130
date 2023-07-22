const axios = require('axios');

function get_acces_token() {

    let data = JSON.stringify({
    "companyName": "Train Pushkar",
    "clientID": "ac5b7823-e50e-4788-a9e0-3bdba4aaeb91",
    "clientSecret": "zuIkhdUMOniOqWYI",
    "ownerName": "Pushkar Chaubey",
    "ownerEmail": "chaubeypushkar4@gmail.com",
    "rollNo": "21"
    });

    let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://20.244.56.144/train/auth',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };
    axios.request(config)
    .then((response) => {
    console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
    console.log(error);
    });
    const acces_token=response.data.acces_token;
    return(acces_token); 
}
module.exports = get_acces_token();