const app = require('../index')
const request = require('supertest')
const ContactModel = require('../models/Contact')
const knex = require('../database/connection')
const assert = require('assert')
const http = require('http')

describe('Tests Contact Model', async () => {
  before(async () => {
    const name = 'TestName'
    const email = 'test@email.com'
    const message = 'testMessage'
    const sent = new Date()
    await ContactModel.sendMessage(name, email, message, sent)
  })

  after(async () => {
    await knex.raw("DELETE FROM contact WHERE name='TestName'")
  })

  it('created message', async () => {
    const user = await knex.raw("SELECT * FROM contact WHERE name='TestName'")
    assert.strictEqual(user.rows[0].name, 'TestName')
    assert.strictEqual(user.rows[0].email, 'test@email.com')
    assert.strictEqual(user.rows[0].message, 'testMessage')
  })
})

describe('Tests Contact Controler', () => {
  const message = {
    name: 'TestName',
    email: 'test@email.com',
    message: 'testMessage',
    sent: `${new Date()}`
  }

  after(async () => {
    await knex.raw("DELETE FROM contact WHERE name='TestName'")
  })

  it('GET /contact it should return 200 and json', async () => {
    await request(app)
      .get('/contact')
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('POST /contact it should return 200', async () => {
    await request(app)
      .post('/contact')
      .send(message)
      .expect(200)
  })

  it('POST /contact without data it should return 400', async () => {
    await request(app)
      .post('/contact')
      .send({})
      .expect(400)
  })

  it('GET /contact/:id it should return 200 and json', async () => {
    const id = await knex.raw("SELECT * FROM contact WHERE name='TestName'")
    await request(app)
      .get('/contact/' + id.rows[0].id)
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('DELETE /contact/:id it should return 200', async () => {
    const id = await knex.raw("SELECT * FROM contact WHERE name='TestName'")
    await request(app)
      .delete('/contact/' + id.rows[0].id)
      .expect(200)
  })
})
