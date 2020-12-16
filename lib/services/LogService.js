const Log = require('../models/log');

module.exports = class RecipeService {
  static async start({ recipeId, dateOfEvent, notes, rating }) {
    const log = await Log.insert({
      recipeId,
      dateOfEvent,
      notes,
      rating,
      complete: false
    });

    return log;
  }

};
