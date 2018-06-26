const express = require('express');
const jsonfile = require('jsonfile');
const bodyParser = require('body-parser');
const file = 'pokedex.json';
const reactEngine = require('express-react-views').createEngine();
const methodOverride = require('method-override');

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

/**
 * ===================================
 * Routes
 * ===================================
 */

// update pokemon position tbc..

// const pokeData = jsonfile.readFileSync(file);


// let updatedID = 0;
// let updatedNum = 0;

// for (i = 0; i < pokeData.pokemon.length; i++) {
//   if (parseInt(pokeData.pokemon[i].id) > updatedID) {
//     updatedID = parseInt(pokeData.pokemon[i].id)
//   }
//   if (parseInt(pokeData.pokemon[i].num) > updatedNum) {
//     updatedNum = parseInt(pokeData.pokemon[i].num)
//   }
// };

jsonfile.readFile(file, (err, obj) => {

  // add pokemon
  app.get('/pokemon/new', (req, res) => {

    res.render('newPokeForm');

  });


  app.post('/pokemon/new', (req, res) => {

    let input = {
      "id": parseInt(req.body.id),
      "num": req.body.num,
      "name": req.body.name,
      "img": req.body.img,
      "height": req.body.height,
      "weight": req.body.weight,
      "candy": "",
      "candy_count": "",
      "egg": "",
      "avg_spawns": "",
      "spawn_time": ""
    };
    // pushes new poke into the arr
    obj.pokemon.push(input);
    let object = obj

    jsonfile.writeFile(file, obj, (err) => {
      console.error(err);

      res.send("New Pokemon Successfully Added!");

    });
  });

  // display pokemon
  app.get('/:id', (req, res) => {

    // obj is the object from the pokedex json file
    // extract input data from request
    let inputId = req.params.id;

    // default sort by ID
    let pokemon = obj.pokemon.find((currentPokemon) => {
      return currentPokemon.id === parseInt(inputId, 10);
    });

    if (pokemon === undefined) {

      // send 404 back
      res.status(404);
      res.send("not found");
    } else {

      let pokeName = pokemon.name;
      let pokeID = parseInt(pokemon.id);
      let pokeNum = pokemon.num;
      let pokeIMG = '<img src="' + pokemon.img + '">';
      let pokeHeight = pokemon.height;
      let pokemonWeight = pokemon.weight;

      const context = pokemon;

      console.log(context);

      res.render('displayPoke', context);

      }
  });

  // edit pokemon
  app.get('/:id/edit', (req, res) => {

    let index = req.params.id;
    // console.log(index);
    let selectedPoke = obj.pokemon[index -1];
    res.render('editPoke', selectedPoke);
  });

  app.put('/:id/edit', (req, res) => {

    // console.log(req.params.id);
    // console.log(req.body);

    let index = req.params.id;
    let editPoke = {

      "id": parseInt(req.body.id),
      "num": req.body.num,
      "name": req.body.name,
      "img": req.body.img,
      "height": req.body.height,
      "weight": req.body.weight,
      "candy": "",
      "candy_count": "",
      "egg": "",
      "avg_spawns": "",
      "spawn_time": ""
    };

      obj.pokemon[index - 1] = editPoke;

        let object = obj;

      jsonfile.writeFile(file, object, (err) => {

      res.send('Pokemon Has Been Successfully Edited!');

      });        
  });


  // delete pokemon

app.get('/:id/delete', (req, res) => {

  jsonfile.readFile(file, (err, obj) => {
    // obj is the object from the pokedex json file
    // extract input data from request
    let input = req.params.id

    var pokemon = obj.pokemon.find((currentPokemon) => {
      return currentPokemon.id === parseInt(input, 10);
    });
    // console.log(pokemon);

    var context = {
      pokemon: pokemon
    }

  // running this will let express to run home.handlebars file in your views folder
  res.render('deletePoke', context)

   });
})

app.delete("/pokemon/:id", (req, res) => {
  //read the file in and write out to it
  // get json from specified file
  jsonfile.readFile(file, (err, obj) => {
    // obj is the object from the pokedex json file
    // extract input data from request
    let input = req.params.id
    input = parseInt(input)

    obj.pokemon.splice(input - 1 ,1)

    let object = obj;
      
    jsonfile.writeFile(file, object, (err) => {

      res.send('Pokemon Successfully Deleted!');

      });
  });

});

  // pokemon by name
  app.get('/pokemon/:name', (req, res) => {

    let input = req.params.pokeName;
    input = input.toLowerCase();
    console.log(input);

    let pokemon = obj.pokemon.find((currentPokemon) => {
      return currentPokemon.name.toLowerCase() === input;
    });

    if (pokemon === undefined) {

      // send 404 back
      res.status(404);
      res.send("not found");
    } else {


      let pokeName = pokemon.name;
      let pokeID = parseInt(pokemon.id);
      let pokeNum = pokemon.num;
      let pokeIMG = '<img src="' + pokemon.img + '">';
      let pokeHeight = pokemon.height;
      let pokeWeight = pokemon.weight;

      const context = pokemon;

      console.log(context);

      res.render('displayPoke', context);

    }

  });


  app.get('/', (req, res) => {

    let pokemon =  obj.pokemon;

    const data = {
        pokemons: pokemon
    }

    res.render('home', data);

  });
});


/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

// const express = require('express');
// const jsonfile = require('jsonfile');
// const methodOverride = require('method-override');
// const bodyParser = require('body-parser');
// const file = 'pokedex.json';


// const app = express();
// app.use(methodOverride('_method'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// // setting up react
// const reactEngine = require('express-react-views').createEngine();
// app.engine('jsx', reactEngine);

// // this tells express where to look for the view files
// app.set('views', __dirname + '/views');

// // set react as default engine
// app.set('view engine', 'jsx');

// // always remember to readfile girl!


