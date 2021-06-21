const app = require('../index')
const request = require('supertest')
const jwt = require('jsonwebtoken')
const AdminModel = require('../models/AdminUser')
const assert = require('assert')
require('dotenv').config()

describe('Test Admin Model', async () => {
  it('DB Find Name', async () => {
    /* Password not tested, because it is hash */
    const name = process.env.ADMIN_NAME
    const result = await AdminModel.find(name)
    assert.strictEqual(result[0].name, name)
  })
})

describe('Test Admin Controller', async () => {
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
