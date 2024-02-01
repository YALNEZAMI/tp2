"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = __importDefault(require("./index"));
const poke = new index_1.default("1", "bulbasaur", {
    front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
});
(0, globals_1.describe)("sum module", () => {
    (0, globals_1.test)("getNom test", () => {
        (0, globals_1.expect)(poke.getNom()).toBe("bulbasaur");
    });
});
//test de la méthode getId
(0, globals_1.test)("getId test", () => {
    (0, globals_1.expect)(poke.getId()).toBe("1");
});
//test de la méthode getPhoto
(0, globals_1.test)("getImage test", () => {
    (0, globals_1.expect)(poke.getPhoto()).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlbWllci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ByZW1pZXIudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJDQUF1RDtBQUN2RCxvREFBOEI7QUFDOUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxlQUFPLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRTtJQUN6QyxhQUFhLEVBQ1gsdUdBQXVHO0NBQzFHLENBQUMsQ0FBQztBQUNILElBQUEsa0JBQVEsRUFBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO0lBQzFCLElBQUEsY0FBSSxFQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7UUFDdkIsSUFBQSxnQkFBTSxFQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0gsMEJBQTBCO0FBQzFCLElBQUEsY0FBSSxFQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7SUFDdEIsSUFBQSxnQkFBTSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUMsQ0FBQztBQUNILDZCQUE2QjtBQUM3QixJQUFBLGNBQUksRUFBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO0lBQ3pCLElBQUEsZ0JBQU0sRUFBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzFCLHVHQUF1RyxDQUN4RyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMifQ==