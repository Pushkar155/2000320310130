const express= require("express");
const axios = require('axios');
const app= express();

async function get_trains(acces_token){
    let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://20.244.56.144/train/trains',
    headers: { 
      'Authorization': `Bearer ${acces_token}`
    }
  };
  
  const response =await axios.request(config)
  return(response.data);

}

async function get_trains_by_id({acces_token,id}){
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://20.244.56.144/train/trains/${id}`,
        headers: { 
          'Authorization': `Bearer ${acces_token}` 
        }
      };
      const response= await axios.request(config)
      return response.data
}
  

async function  get_acces_token() {
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
    const response= await axios.request(config)
    let acces_token=response.data.access_token
    return(acces_token);
}





app.get("/trains",async (req,res)=>{
    let acces_token= await get_acces_token();
    let tranis_data= await get_trains(acces_token);
    // console.log(acces_token)
    res.status(200).json(tranis_data);
})

app.get("/trains/:trainno",async (req,res)=>{
    // const train_no=req.params.trainno
    let id=(req.params.trainno)
    let acces_token= await get_acces_token();
    let tranis_data= await get_trains_by_id({acces_token,id});
    res.status(200).json(tranis_data);
})


app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})
