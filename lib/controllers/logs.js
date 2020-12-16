const { Router } = require('express');
const LogService = require('../services/LogService');
const Log = require('../models/log');

//LOG ENDPOINTS START HERE
module.exports = Router()
  .post('/', (req, res, next) => {
    LogService
      .start(req.body)
      .then(log => res.send(log))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    LogService
      .start(req.body)
      .then(log => res.send(log))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    Log
      .insert(req.body)
      .then(log => res.send(log))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Log
      .find()
      .then(logs => res.send(logs))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Log
      .findById(req.params.id)
      .then(log => res.send(log))
      .catch(next);
  })
  .put('/:id', (req, res, next) => {
    Log
      .update(req.params.id, req.body)
      .then(log => res.send(log))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Log
      .delete(req.params.id)
      .then(log => res.send(log))
      .catch(next);
  });



