const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const PORT = 3000;



const generateFakeUsers = (num) =>{
   const users = [];
   for(let i=0; i<num; i++){
    users.push({
        id: i+1,
        name: faker.name.firstName(),
        surname: faker.name.lastName(),
        image: faker.image.avatar(),
        isActive: faker.datatype.boolean(),
        Address:faker.address.streetAddress(),
        location:{
            latitude: faker.location.latitude(),
            longitude: faker.location.longitude(),
        },
    })
   }
   return users;
};

app.get('/users',(req, res )=>{
    const users = generateFakeUsers(5);
    res.json(users);
});

app.get('/', (req, res) => {res.send('ok')});

app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`);});