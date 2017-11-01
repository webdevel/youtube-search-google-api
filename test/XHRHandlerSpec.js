import chai, { assert, expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.should()
chai.use(sinonChai)
import SearchRequest from '../src/SearchRequest'
import XHRHandler from '../src/XHRHandler'
import HTTPHandler from '../src/HTTPHandler'
import Handler from '../src/Handler'

describe('XHRHandler', function() {

  const TEST_STR = 'TEST_STR'
  let request, handler, stub

  beforeEach(function() {
    request = new SearchRequest()
    handler = new XHRHandler()
    stub = sinon.stub()
  })
  afterEach(function() {
    stub.restore
  })
  it('Should callback user specified function', function(done) {
    const params = {}, index = 1, err = null, res = {}, bod = { TEST_STR: TEST_STR }
    stub.open = () => { return true }
    stub.callsArgWith(index, err, res, bod)

    const request = new SearchRequest(params, function(error, response, body) {
      expect(error).to.be.null
      body.should.have.property(TEST_STR)
      stub.should.have.been.calledOnce
      done()
    })
    handler.client = stub
    handler.perform(request)
  })
  it('Should have default successor', function() {
    expect(handler.successor).to.be.an.instanceof(Handler)
  })
  it('Should have default client implementation', function() {
    expect(handler.client).to.not.be.undefined
  })
  it('Should invoke perform on successor when client.open evaluates to false', function() {
    const successor = new Handler()
    stub = sinon.stub(successor, 'perform')
    handler.successor = successor
    handler.perform(request)
    successor.perform.should.have.been.called
  })
})
