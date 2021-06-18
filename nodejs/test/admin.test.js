const app = require('../index')
const request = require('supertest')
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
})
