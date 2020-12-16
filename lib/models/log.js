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
      this.dateOfEvent = row.date_of_event;
      this.notes = row.notes;
      this.rating = row.rating;
    }

    static async insert(log) {
      const {
        recipeId,
        dateOfEvent,
        notes,
        rating
      } = log;

      const {rows} = await pool.query(
          'INSERT INTO logs'
      )


    }




};
