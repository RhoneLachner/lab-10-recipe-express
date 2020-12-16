const { Router } = require('express');
const Recipe = require('../models/recipe.js');
const RecipeService = require('../services/RecipeService');
const LogService = require('../services/LogService');
const Log = require('../models/log');

module.exports = Router()
  .post('/', (req, res, next) => {
    RecipeService
      .start(req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    Recipe
      .insert(req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Recipe
      .find()
      .then(recipes => res.send(recipes))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Recipe
      .findById(req.params.id)
      .then(recipe => res.send(recipe))
      .catch(next);
  })
  .put('/:id', (req, res, next) => {
    Recipe
      .update(req.params.id, req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Recipe
      .delete(req.params.id)
      .then(recipe => res.send(recipe))
      .catch(next);
  })
  
//LOG ENDPOINTS START HERE

  .post('/', (req, res, next) => {
    LogService
      .start(req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    Log
      .insert(req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Log
      .find()
      .then(recipes => res.send(recipes))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Log
      .findById(req.params.id)
      .then(recipe => res.send(recipe))
      .catch(next);
  })
  .put('/:id', (req, res, next) => {
    Log
      .update(req.params.id, req.body)
      .then(recipe => res.send(recipe))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Log
      .delete(req.params.id)
      .then(recipe => res.send(recipe))
      .catch(next);
  });
