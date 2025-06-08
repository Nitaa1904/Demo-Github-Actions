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
exports.getRecipe = getRecipe;
const httpResponses_1 = require("../../lib/httpResponses");
function getRecipe(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            return (0, httpResponses_1.httpResponse)(200, 'Recipe Found', {
                id: id,
                title: "Chicken Alfredo Pasta",
                ingredients: [
                    "1 lb chicken",
                    "1 cup Alfredo sauce",
                    "1/2 cup Parmesan cheese",
                    "1/2 cup Mozzarella cheese",
                    "1/2 cup heavy cream",
                    "1/4 cup butter",
                    "2 cloves garlic",
                    "1/2 tsp salt",
                    "1/2 tsp pepper",
                    "1/2 tsp Italian seasoning",
                    "1/2 tsp paprika",
                    "1/4 tsp red pepper flakes",
                    "1/4 cup parsley",
                    "8 oz fettuccine pasta"
                ],
                cookingTime: 30,
                instructions: [
                    "Cook pasta according to package instructions",
                    "Season chicken with salt, pepper, Italian seasoning, and paprika",
                    "Heat 2 tbsp butter in a skillet over medium-high heat",
                    "Add chicken and cook until golden brown",
                    "Remove chicken from skillet",
                    "Add 2 tbsp butter to skillet",
                    "Add garlic and cook until fragrant",
                    "Add heavy cream, Parmesan cheese, and Mozzarella cheese",
                    "Stir until cheese is melted",
                    "Add Alfredo sauce and red pepper flakes",
                    "Add chicken and pasta to skillet",
                    "Stir until combined",
                    "Top with parsley",
                    "Serve and enjoy!"
                ],
                image: "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg",
            }, res);
        }
        catch (error) {
            return (0, httpResponses_1.httpResponse)(500, error.message, null, res);
        }
    });
}
