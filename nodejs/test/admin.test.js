const app = require('../index')
const request = require('supertest')
const jwt = require('jsonwebtoken')
require('dotenv').config()

describe('Test Admin', async () => {
  const admin = {
    name: process.env.ADMIN_NAME,
    password: process.env.ADMIN_PASSWORD
  }

  it('login', async () => {
    await request(app)
      .post('/login')
      .send(admin)
      .expect(200)
  })

  it('Test validate', async () => {
    const token = jwt.sign({ name: process.env.ADMIN_NAME }, process.env.SECRET)
    await request(app)
      .post('/validate')
      .auth(token, { type: 'bearer' })
      .expect('Content-Type', /json/)
      .expect(200)
  })
})
