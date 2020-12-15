const Recipe = require('../models/recipe');

module.exports = class RecipeService {
  static async start({ name, directions }) {
    const recipe = await Recipe.insert({
      name,
      directions,
      complete: false
    });

    return recipe;
  }

};
