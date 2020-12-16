const { Router } = require('express');
const Recipe = require('../models/recipe.js');
const RecipeService = require('../services/RecipeService');

module.exports = Router()
  .post('/', (req, res, next) => {
    RecipeService
      .start(req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Recipe
      .findById(req.params.id)
      .then(recipe => res.send(recipe))
      .catch(next);
  });
