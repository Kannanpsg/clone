const express = require ("express");
const { response } = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const cors = require('cors');

app.use(cors({
    origin: '*'
  }));

const PORT = 9000;

/* const locations = [
    {
      poster:"../img/China.webp",
      name:"China",
      summary:"Zhaoxing Village is flanked by mountains and touts five drum towers representing five good manners in Chinese tradition: benevolence, righteousness, courtesy, wisdom and trust.",
      cost:145000,
      Person:2,
    },
    
    {
      poster:"../img/Turkey.webp",
      name:"Turkey",
      summary:"Antalya's Old Town features Ottoman mosques, Roman towers and an ancient harbor lined with bustling modern-day cafes.",
      cost:115000,
      Person:1,
    },
    
    {
      poster:"../img/Malaysia.webp",
      name:"Malaysia",
      summary:" Malaysia is gaining in popularity thanks to its natural charms (rainforests, national parks and wildlife abound) and desirable tropical temps.",
      cost:75000,
      Person:2,
    },
    
    {
      poster:"../img/Thailand.webp",
      name:"Thailand",
      summary:"The Phi Phi Islands are so idyllic and popular that the Thai government closed them until 2021 to allow for recovery from over-tourism.",
      cost:145000,
      Person:2,
    },
    
    {
      poster:"../img/Tajmahal.jpg",
      name:"Tajmahal",
      summary:"The Taj Mahal, is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra.",
      cost:115000,
      Person:1,
    },
    
    {
      poster:"../img/Mexico.webp",
      name:"Mexico",
      summary:"Chichen Itza, the ancient Mayan settlement, is a UNESCO World Heritage site dating back to A.D. 750 to 1200.",
      cost:75000,
      Person:2,
    },
    ]; */

  app.use(express.json());
    
  app.get("/", (request, response) => {
  response.send("Hello man");
  });

  app.get("/locations", async(request, response) => {
    const MONGO_URL = "mongodb://localhost";
  
    const client = new MongoClient(MONGO_URL);
    await client.connect();
  
    const location = await client.db("locationlist").collection("mycollection").find({}).toArray()
    console.log(location);
    location
    ? response.send(location)
    : response.status(404)
  }); 




  app.post("/locations", async(request, response) => {
    const MONGO_URL = "mongodb://localhost";
      
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    const data = request.body;
    const result = await client.db("locationlist").collection("mycollection").insertOne(data);
    response.send(result);
 }); 


  app.listen(PORT, () => console.log("App is started in", PORT))




