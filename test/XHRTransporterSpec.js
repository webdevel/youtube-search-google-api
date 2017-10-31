import chai, { assert, expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.should()
chai.use(sinonChai)
import SearchRequest from '../src/SearchRequest'
import XHRTransporter from '../src/XHRTransporter'
import DefaultTransporter from '../src/DefaultTransporter'
import Transporter from '../src/Transporter'

describe('XHRTransporter', function() {

  const TEST_STR = 'TEST_STR'
  let request, transporter, stub

  beforeEach(function() {
    request = new SearchRequest()
    transporter = new XHRTransporter()
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
    transporter.xhr = stub
    transporter.perform(request)
  })
  it('Should have default successor', function() {
    expect(transporter.successor).to.be.an.instanceof(Transporter)
  })
  it('Should have default xhr implementation', function() {
    expect(transporter.xhr).to.not.be.undefined
  })
  it('Should invoke perform on successor when xhr.open evaluates to false', function() {
    const successor = new Transporter()
    stub = sinon.stub(successor, 'perform')
    transporter.successor = successor
    transporter.perform(request)
    successor.perform.should.have.been.called
  })
})
