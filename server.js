const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;


//API info
const villains = { 
        'vurmak': {
            'age': 57,
            'birthname': 'Vurmak Adrese',
            'birthlocation':'The Isle of Kos',
            'class':'Warlock'
        },
        'maeldir': {
            'age': 29,
            'birthname': "Maeldir Ghistlaine",
            'birthlocation':'The Calderra',
            'class':'Monk, Warlock multi-class'
        },
        'corhilla':{
            'age': 61,
            'birthname': 'Lady Corhilla Lorenhale',
            'birthlocation':'Vedas',
            'class':'Rogue'
        },
        'unknown':{
            'age':'unknown',
            'birthname': 'unknown',
            'birthlocation':'unknown',
            'class':'unknown'
        }
}

//Routes
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const villainName = request.params.name.toLowerCase()
    if ( villains[villainName]){
        response.json(villains[villainName]) 
    }else{
        response.json(villains['unknown'])
    }
   
})


//Listen
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Rad my dude!`)
})