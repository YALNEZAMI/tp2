"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
// Une classe métier nommée pokemon. Notez la syntaxe typescript pour créer un objet qui a un attribut id.
class Pokemon {
    constructor(id, nom, sprites) {
        this.id = id;
        this.nom = nom;
        this.sprites = sprites;
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    getNom() {
        return this.nom;
    }
    setNom(nom) {
        this.nom = nom;
    }
    getPhoto() {
        return this.sprites.front_default;
    }
}
exports.Pokemon = Pokemon;
//liste des pokemons
let pokemons;
// Ce code permet de récupéter une référence sur l'élement input du DOM (c-à-d l'élément input de la page web dont l'identifiant est "pokeid")
const pokeinput = document.getElementById("pokeid");
//input event
pokeinput === null || pokeinput === void 0 ? void 0 : pokeinput.addEventListener("keyup", (event) => {
    const span = document.getElementById("debug_donnee");
    if (span)
        span.innerText += event.key;
});
//récupère le select présent dans le dom
const pokemonsSelect = document.getElementById("allpokemons");
//s'abonne à l'évènement change et récupère l'option sélectionnée
pokemonsSelect.addEventListener("change", (e) => __awaiter(void 0, void 0, void 0, function* () {
    if ((e === null || e === void 0 ? void 0 : e.target) instanceof HTMLSelectElement) {
        const id = e === null || e === void 0 ? void 0 : e.target.selectedOptions[0].value;
        let tmpPoke = pokemons.find((p) => p.getId() === id);
        let res = yield getPokemonInfo(tmpPoke.getNom());
        selectedPokemon = new Pokemon(res.id, res.name, res.sprites);
        console.log(selectedPokemon);
        yield afficheDetail();
    }
}));
// let selectedPokemon: Pokemon;
//button listener
const b = document.getElementById("go");
b.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    const filtre = document.getElementById("filtre");
    if (!filtre) {
        pokemons.forEach((pokemon) => {
            let select = document.getElementById("allpokemons");
            if (select)
                select.innerHTML += `<option value="${pokemon.getId()}">${pokemon.getNom()}</option>`;
        });
        return;
    }
    const filteredPokemons = pokemons.filter((p) => p.getNom().includes(filtre.value));
    let select = document.getElementById("allpokemons");
    if (select)
        select.innerHTML = "";
    filteredPokemons.forEach((pokemon) => {
        if (select)
            select.innerHTML += `<option value="${pokemon.getId()}">${pokemon.getNom()}</option>`;
    });
}));
//api interactions
function getAllPokemons() {
    return __awaiter(this, void 0, void 0, function* () {
        const request = new Request("https://pokeapi.co/api/v2/pokemon", {
            method: "GET",
        });
        const response = yield fetch(request);
        if (!response.ok) {
            // Au cas où le "fetch" s'est mal passé
            console.error(response);
            return [];
        }
        else {
            // Si le fetch a réussi on récupère un objet au format JSON
            const validResponse = (yield response.json());
            return validResponse.results;
        }
    });
}
function initPokemons() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiPokemons = yield getAllPokemons();
        pokemons = [];
        for (let i = 0; i < apiPokemons.length; i++) {
            const p = apiPokemons[i];
            pokemons.push(new Pokemon(i.toString(), p.name, p.url));
        }
        pokemons.forEach((pokemon) => {
            let select = document.getElementById("allpokemons");
            if (select)
                select.innerHTML += `<option value="${pokemon.getId()}">${pokemon.getNom()}</option>`;
        });
    });
}
initPokemons();
function getPokemonInfo(pokeName) {
    return __awaiter(this, void 0, void 0, function* () {
        const request = new Request("https://pokeapi.co/api/v2/pokemon/" + pokeName, {
            method: "GET",
        });
        const response = yield fetch(request);
        if (!response.ok) {
            console.error(response);
        }
        else {
            const validResponse = yield response.json();
            return validResponse;
            // return validResponse.result;}
        }
    });
}
let selectedPokemon;
function afficheDetail() {
    return __awaiter(this, void 0, void 0, function* () {
        if (selectedPokemon) {
            const name = selectedPokemon.getNom();
            const photo = selectedPokemon.getPhoto();
            console.log(name, photo);
            let pokemonimg = document.getElementById("pokemonimg");
            if (pokemonimg)
                pokemonimg.src = photo;
            let namePoke = document.getElementById("namePoke");
            if (namePoke)
                namePoke.innerText = name;
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMEdBQTBHO0FBQzFHLE1BQWEsT0FBTztJQUNsQixZQUFvQixFQUFVLEVBQVUsR0FBVyxFQUFVLE9BQVk7UUFBckQsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFLO0lBQUcsQ0FBQztJQUU3RSxLQUFLLENBQUMsRUFBVTtRQUNkLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUNNLEtBQUs7UUFDVixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNNLE1BQU07UUFDWCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUNNLE1BQU0sQ0FBQyxHQUFXO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFDTSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7QUFsQkQsMEJBa0JDO0FBRUQsb0JBQW9CO0FBQ3BCLElBQUksUUFBbUIsQ0FBQztBQUV4Qiw4SUFBOEk7QUFDOUksTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVwRCxhQUFhO0FBQ2IsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO0lBQzdDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckQsSUFBSSxJQUFJO1FBQUUsSUFBSSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQ3hDLENBQUMs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