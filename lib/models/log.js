const pool = require('../utils/pool');
const Recipe = require('../models/recipe');


module.exports = class log {
    id;
    recipeId;
    dateOfEvent;
    notes;
    rating;
  
    constructor(row) {
      this.id = row.id;
      this.recipeId = row.recipe_id;
      this.dateOfEvent = row.dateOfEvent;
      this.name = row.name;
      this.directions = row.directions;
    }
    





};
