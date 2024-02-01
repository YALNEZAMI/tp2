import { describe, expect, test } from "@jest/globals";
import Pokemon from "./index";
const poke = new Pokemon("1", "bulbasaur", {
  front_default:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
});
describe("sum module", () => {
  test("getNom test", () => {
    expect(poke.getNom()).toBe("bulbasaur");
  });
});
//test de la méthode getId
test("getId test", () => {
  expect(poke.getId()).toBe("1");
});
//test de la méthode getPhoto
test("getImage test", () => {
  expect(poke.getPhoto()).toBe(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  );
});
