import chai, { assert, expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.should()
chai.use(sinonChai)
import SearchRequest from '../src/SearchRequest'
import Handler from '../src/Handler'
import DefaultClient from '../src/DefaultClient'

describe('DefaultClient', function() {

  let request, stub, client, handler

  beforeEach(function() {
    request = new SearchRequest()
    client = new DefaultClient()
    handler = new Handler()
    stub = sinon.stub()
  })
  afterEach(function() {
  })
  it('Should have property handler', function() {
    client.should.have.property('handler')
  })
  it('Should have default handler', function() {
    client.handler.should.be.an.instanceof(Handler)
  })
  it('Should allow user specified handler', function() {
    client.handler = handler
    client.handler.should.equal(handler)
  })
  it('Should invoke handler perform', function() {
    stub = sinon.stub(handler, 'perform')
    client.handler = handler
    client.invoke(request)
    handler.perform.should.have.been.calledOnce
    stub.restore
  })
})
