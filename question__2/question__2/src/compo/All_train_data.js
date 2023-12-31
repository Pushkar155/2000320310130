import React from 'react';
import "./all.css";
// import { useEffect, useState } from 'react';
import Card1 from './Card1';

const All_train_data = () => {
    // const [data, setData] = useState([]);
    const data=[
        {
            "trainName": "Cochin Exp",
            "trainNumber": "2348",
            "departureTime": {
                "Hours": 15,
                "Minutes": 55,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 1,
                "AC": 0
            },
            "price": {
                "sleeper": 2,
                "AC": 79
            },
            "delayedBy": 11
        },
        {
            "trainName": "Chennai Exp",
            "trainNumber": "2344",
            "departureTime": {
                "Hours": 21,
                "Minutes": 35,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 3,
                "AC": 1
            },
            "price": {
                "sleeper": 2,
                "AC": 5
            },
            "delayedBy": 15
        },
        {
            "trainName": "Pune Exp",
            "trainNumber": "2342",
            "departureTime": {
                "Hours": 23,
                "Minutes": 0,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 6,
                "AC": 7
            },
            "price": {
                "sleeper": 104,
                "AC": 1104
            },
            "delayedBy": 17
        },
        {
            "trainName": "Delhi Exp",
            "trainNumber": "2343",
            "departureTime": {
                "Hours": 9,
                "Minutes": 45,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 32,
                "AC": 1
            },
            "price": {
                "sleeper": 1,
                "AC": 633
            },
            "delayedBy": 3
        },
        {
            "trainName": "Panjim Exp",
            "trainNumber": "2349",
            "departureTime": {
                "Hours": 13,
                "Minutes": 32,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 2,
                "AC": 1
            },
            "price": {
                "sleeper": 1,
                "AC": 2
            },
            "delayedBy": 9
        },
        {
            "trainName": "Bokaro Exp",
            "trainNumber": "2347",
            "departureTime": {
                "Hours": 13,
                "Minutes": 32,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 55,
                "AC": 0
            },
            "price": {
                "sleeper": 13,
                "AC": 8
            },
            "delayedBy": 7
        },
        {
            "trainName": "Lucknow Exp",
            "trainNumber": "2347",
            "departureTime": {
                "Hours": 17,
                "Minutes": 33,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 5,
                "AC": 1
            },
            "price": {
                "sleeper": 814,
                "AC": 1073
            },
            "delayedBy": 12
        },
        {
            "trainName": "Amritsar Exp",
            "trainNumber": "2346",
            "departureTime": {
                "Hours": 19,
                "Minutes": 0,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 15,
                "AC": 10
            },
            "price": {
                "sleeper": 15,
                "AC": 5
            },
            "delayedBy": 13
        },
        {
            "trainName": "Kolkata Exp",
            "trainNumber": "2345",
            "departureTime": {
                "Hours": 20,
                "Minutes": 15,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 16,
                "AC": 70
            },
            "price": {
                "sleeper": 960,
                "AC": 1060
            },
            "delayedBy": 14
        },
        {
            "trainName": "Aizawl Exp",
            "trainNumber": "2342",
            "departureTime": {
                "Hours": 8,
                "Minutes": 30,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 18,
                "AC": 7
            },
            "price": {
                "sleeper": 1782,
                "AC": 2413
            },
            "delayedBy": 2
        },
        {
            "trainName": "Cuttack Exp",
            "trainNumber": "2346",
            "departureTime": {
                "Hours": 12,
                "Minutes": 3,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 10,
                "AC": 1
            },
            "price": {
                "sleeper": 960,
                "AC": 1233
            },
            "delayedBy": 6
        },
        {
            "trainName": "Mysore Exp",
            "trainNumber": "2347",
            "departureTime": {
                "Hours": 13,
                "Minutes": 32,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 2,
                "AC": 2
            },
            "price": {
                "sleeper": 1000,
                "AC": 1133
            },
            "delayedBy": 8
        },
        {
            "trainName": "Srinagar Exp",
            "trainNumber": "2349",
            "departureTime": {
                "Hours": 14,
                "Minutes": 55,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 1,
                "AC": 0
            },
            "price": {
                "sleeper": 1407,
                "AC": 1494
            },
            "delayedBy": 10
        },
        {
            "trainName": "Mumbai Exp",
            "trainNumber": "2343",
            "departureTime": {
                "Hours": 22,
                "Minutes": 37,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 8,
                "AC": 15
            },
            "price": {
                "sleeper": 1130,
                "AC": 1230
            },
            "delayedBy": 16
        },
        {
            "trainName": "Hyderabad Exp",
            "trainNumber": "2341",
            "departureTime": {
                "Hours": 23,
                "Minutes": 55,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 6,
                "AC": 7
            },
            "price": {
                "sleeper": 554,
                "AC": 1854
            },
            "delayedBy": 5
        },
        {
            "trainName": "Jodhpur Exp",
            "trainNumber": "2344",
            "departureTime": {
                "Hours": 11,
                "Minutes": 0,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 33,
                "AC": 13
            },
            "price": {
                "sleeper": 1123,
                "AC": 1234
            },
            "delayedBy": 4
        },
        {
            "trainName": "Sikkim Exp",
            "trainNumber": "2345",
            "departureTime": {
                "Hours": 11,
                "Minutes": 23,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 4,
                "AC": 4
            },
            "price": {
                "sleeper": 6,
                "AC": 617
            },
            "delayedBy": 5
        },
        {
            "trainName": "Gandhinagar Exp",
            "trainNumber": "2341",
            "departureTime": {
                "Hours": 7,
                "Minutes": 15,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 15,
                "AC": 5
            },
            "price": {
                "sleeper": 7,
                "AC": 15
            },
            "delayedBy": 1
        }
    ]
    // const [isloading,setIsloading]=useState(true);
    // useEffect(() => {
    //   setTimeout(()=>{
    //     fetchData();
    //   },1125);
    // }, []);
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('https://localhost:3001/trains');
    //     const jsonData = await response.json();
    //     setData(jsonData);
    //     console.log(data);
    //     // setIsloading(false);
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // };
  return (
    <div className='all'>
        {
            data.map((item,index)=>(
            <Card1 delay={item.delayedBy} name={item.trainName} seat={item.seatsAvailable} price={item.price} id ={item.trainNumber}/>
            ))
        }
        
    </div>
  )
}

export default All_train_data