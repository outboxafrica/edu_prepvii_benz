process.env.NODE_ENV = "test"

let mongoose = require('mongoose')
let User = require('../Models/user.model')

const { expect } = require('chai')
const request = require('supertest')
const faker = require('faker')
let app = require('../../index')


describe('User', () => {
  beforeEach((done) => {
    User.deleteMany({}, err => {
      done()
    })
  })

  describe('create a user', () => {
    it('should create a user', (done) => {
      request(app)
        .post('/api/v1/auth/signup')
        .send({
          username: faker.name.firstName().toLowerCase(),
          email: faker.internet.email(),
          password: "password",
        })
        .then(res => {
          expect(res.statusCode).to.equal(200)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.property('message')
          expect(res.body).to.have.property('token')
          done()
        }).catch(err => {
        done(err)
      })
    })

    it('Should not create a user without a username', (done) => {
      request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: faker.internet.email(),
        password: "password",
      })
      .then(res => {
        expect(res.statusCode).to.equal(400)
        expect(res.body).to.be.an('object')
        expect(res.body).to.have.property('message')
        expect(res.body.message).to.contain('"username" is required')
        done()
      }).catch(err => {
      done(err)
    })
    })
  })
})