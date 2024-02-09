// Une classe métier nommée pokemon. Notez la syntaxe typescript pour créer un objet qui a un attribut id.
console.log("hello");

class Pokemon {
  constructor(private id: string, private nom: string, private sprites: any) {}

  setId(id: string) {
    this.id = id;
  }
  public getId(): string {
    return this.id;
  }
  public getNom(): string {
    return this.nom;
  }
  public setNom(nom: string) {
    this.nom = nom;
  }
  public getPhoto(): string {
    return this.sprites.front_default;
  }
}

//liste des pokemons
let pokemons: Pokemon[];

// Ce code permet de récupéter une référence sur l'élement input du DOM (c-à-d l'élément input de la page web dont l'identifiant est "pokeid")
const pokeinput = document.getElementById("pokeid");

//input event
pokeinput?.addEventListener("keyup", (event) => {
  const span = document.getElementById("debug_donnee");
  if (span) span.innerText += event.key;
});

//récupère le select présent dans le dom
const pokemonsSelect = document.getElementById(
  "allpokemons"
) as HTMLSelectElement;

//s'abonne à l'évènement change et récupère l'option sélectionnée
pokemonsSelect.addEventListener("change", async (e) => {
  if (e?.target instanceof HTMLSelectElement) {
    const id = e?.target.selectedOptions[0].value;
    let tmpPoke = pokemons.find((p) => p.getId() === id) as Pokemon;
    let res = await getPokemonInfo(tmpPoke.getNom());
    selectedPokemon = new Pokemon(res.id, res.name, res.sprites);
    console.log(selectedPokemon);

    await afficheDetail();
  }
});
// let selectedPokemon: Pokemon;
//button listener
const b = document.getElementById("go") as HTMLButtonElement;
b.addEventListener("click", async () => {
  const filtre = document.getElementById("filtre") as HTMLInputElement;
  if (!filtre) {
    pokemons.forEach((pokemon) => {
      let select = document.getElementById("allpokemons");
      if (select)
        select.innerHTML += `<option value="${pokemon.getId()}">${pokemon.getNom()}</option>`;
    });
    return;
  }
  const filteredPokemons = pokemons.filter((p) =>
    p.getNom().toLowerCase().includes(filtre.value.toLowerCase())
  );
  let select = document.getElementById("allpokemons");
  if (select) select.innerHTML = "";
  filteredPokemons.forEach((pokemon) => {
    if (select)
      select.innerHTML += `<option value="${pokemon.getId()}">${pokemon.getNom()}</option>`;
  });
});
//api interactions
async function getAllPokemons(): Promise<any[]> {
  const request = new Request("https://pokeapi.co/api/v2/pokemon", {
    method: "GET",
  });

  const response = await fetch(request);
  if (!response.ok) {
    // Au cas où le "fetch" s'est mal passé
    console.error(response);
    return [];
  } else {
    // Si le fetch a réussi on récupère un objet au format JSON
    const validResponse = (await response.json()) as FetchResult;

    return validResponse.results;
  }
}
async function initPokemons() {
  console.log("initPokemons");

  const apiPokemons = await getAllPokemons();
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
}
initPokemons();

async function getPokemonInfo(pokeName: string): Promise<any> {
  const request = new Request("https://pokeapi.co/api/v2/pokemon/" + pokeName, {
    method: "GET",
  });
  const response = await fetch(request);
  if (!response.ok) {
    console.error(response);
  } else {
    const validResponse = await response.json();
    return validResponse;
    // return validResponse.result;}
  }
}
interface FetchResult {
  count: number;
  next: string;
  previous: null;
  results: PokemonFetch[];
}

interface PokemonFetch {
  name: string;
  url: string;
}
let selectedPokemon: Pokemon;
async function afficheDetail() {
  if (selectedPokemon) {
    const name = selectedPokemon.getNom();
    const photo = selectedPokemon.getPhoto();
    console.log(name, photo);
    let pokemonimg = document.getElementById("pokemonimg") as HTMLImageElement;
    if (pokemonimg) pokemonimg.src = photo;
    let namePoke = document.getElementById("namePoke") as HTMLSpanElement;
    if (namePoke) namePoke.innerText = name;
  }
}

// export  default Pokemon;
