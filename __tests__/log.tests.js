const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');
const Log = require('../lib/models/log');
const Recipe = require('../lib/models/recipe');

describe('recipe-lab log routes', () => {
  let recipe;
  
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  beforeEach(async() => {
    recipe = await Recipe.insert({
      name: 'cookies',
      directions: [
        'preheat oven to 375',
        'mix ingredients',
        'put dough on cookie sheet',
        'bake for 10 minutes'
      ]
    });
  });
  
  afterAll(() => {
    return pool.end();
  });  
  
  //POST TEST
  it('creates a log', () => {
    return request(app)
      .post('/api/v1/logs')
      .send({
        recipeId: `${recipe.id}`,
        dateOfEvent: 'Jan 3 2021',
        notes: 'Great recipe. Would make again.',
        rating: 8        
      })
      .then(res => {
        expect(res.body).toEqual({
          id: expect.any(String),
          recipeId: `${recipe.id}`,
          dateOfEvent: 'Jan 3 2021',
          notes: 'Great recipe. Would make again.',
          rating: 8
        });
      });
  });
  //GET TEST
  it('gets all logs', async() => {
    const logs = await Promise.all([
      { recipeId: `${recipe.id}`, dateOfEvent: 'Jan 3 2021', notes: 'Great recipe. Would make again.', rating: 8 },
      { recipeId: `${recipe.id}`, dateOfEvent: 'Jan 23 2021', notes: 'Nice recipe. Would make again.', rating: 7 }
    ].map(log => Log.insert(log)));
  
    return request(app)
      .get('/api/v1/logs')
      .then(res => {
        logs.forEach(log => {
          expect(res.body).toContainEqual(log);
        });
      });
  });
  
  //GET BY ID
  it('gets a log by id via GET', async() => {
    const log = await Log.insert(
      { recipeId: `${recipe.id}`, dateOfEvent: 'Jan 3 2021', notes: 'Great recipe. Would make again.', rating: 8 },

    );
    const response = await request(app)
      .get(`/api/v1/logs/${log.id}`);

    expect(response.body).toEqual(log);
  });
  //PUT TEST
  it('updates a log by id with PUT', async() => {
    const log = await Log.insert({
      recipeId: `${recipe.id}`,
      dateOfEvent: 'Jan 3 2021',
      notes: 'Great recipe. Would make again.',
      rating: 8
    });
  
    const response = await request(app)
      .put(`/api/v1/logs/${log.id}`)
      .send({
        recipeId: `${recipe.id}`,
        dateOfEvent: 'UPDATED Jan 3 2021',
        notes: 'UPDATED Great recipe. Would make again.',
        rating: 8
      });
      
    expect(response.body).toEqual({
      ...log,
      dateOfEvent: 'UPDATED Jan 3 2021',
      notes: 'UPDATED Great recipe. Would make again.',
      rating: '8'        
    });
  });
  //DELETE TEST
  it('deletes log from table by ID with PUT', async() => {
    const log = await Log.insert({       
      id: expect.any(String),
      recipeId: `${recipe.id}`,
      dateOfEvent: 'UPDATED Jan 3 2021',
      notes: 'UPDATED Great recipe. Would make again.',
      rating: '8'
    });
    const response = await request(app)
      .delete(`/api/v1/logs/${log.id}`);
  
    expect(response.body).toEqual(log);
  });
  
});
