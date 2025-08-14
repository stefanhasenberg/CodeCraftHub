// tests/userController.test.js
const request = require('supertest');
const app = require('../server');
const User = require('../models/userModel');

describe('User Controller', () => {
  beforeAll(async () => {
    await User.deleteMany();
  });

  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/users/register')
      .send({ name: 'John Doe', email: 'john@example.com', password: 'password123' });
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe('User created');
  });

  it('should login a user', async () => {
    const response = await request(app)
      .post('/api/users/login')
      .send({ email: 'john@example.com', password: 'password123' });
    expect(response.statusCode).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});