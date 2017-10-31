import chai, { assert, expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.should()
chai.use(sinonChai)
import SearchRequest from '../src/SearchRequest'
import DefaultTransporter from '../src/DefaultTransporter'
import Transporter from '../src/Transporter'

describe('DefaultTransporter', function() {

  const TEST_STR = 'TEST_STR'
  let request, transporter, stub

  beforeEach(function() {
    request = new SearchRequest()
    transporter = new DefaultTransporter()
    stub = sinon.stub()
  })
  afterEach(function() {
    stub.restore
  })
  it('Should respond with error 403 Forbidden without authentication', function(done) {
    const params = {}
    const request = new SearchRequest(params, function(error, response, body) {
      // debugger
      response.statusCode.should.equal(403)
      response.statusMessage.should.equal('Forbidden')
      JSON.parse(body).should.include.keys('error')
      done()
    })
    transporter.perform(request)
  })
  it('Should callback user specified function', function(done) {
    const params = {}, index = 1, err = null, res = {}, bod = { TEST_STR: TEST_STR }
    stub.callsArgWith(index, err, res, bod)

    const request = new SearchRequest(params, function(error, response, body) {
      expect(error).to.be.null
      body.should.have.property(TEST_STR)
      stub.should.have.been.calledOnce
      done()
    })
    transporter.request = stub
    transporter.perform(request)
  })
  it('Should have undefined default successor', function() {
    expect(transporter.successor).to.be.undefined
  })
  it('Should not invoke perform when successor is undefined', function() {
    const successor = new Transporter()
    stub = sinon.stub(successor, 'perform')
    transporter.successor = stub
    transporter.delegate(request)
    stub.should.not.have.been.called
  })
  it('Should invoke perform when successor is set', function() {
    const successor = new Transporter()
    stub = sinon.stub(successor, 'perform')
    transporter.successor = successor
    transporter.delegate(request)
    successor.perform.should.have.been.called
  })
  it('Should have undefined result of default perform method', function() {
    const t = new Transporter(transporter)
    expect(t.perform(request)).to.be.undefined
  })
})
