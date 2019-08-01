let express = require('express');

let app = express();
let heroes = require('./heroes.json');
let port = 1337;

app.post('/',(request,response)=>{

});
app.get('/heroes',(request,response)=>{
    response.send(heroes);

});
app.get('/heroes/:slug',(request,response)=>{
    let matchingHeroes = heroes.filter((hero)=>{
        return hero.slug === request.params.slug
    })

    if (matchingHeroes.length){
        response.send(matchingHeroes);
    }
    else {response.sendStatus(404)}

});



app.all('*',(request,response)=>{

});

app.listen(port,()=>{
    console.log(`hero server running on port `+ port)
})