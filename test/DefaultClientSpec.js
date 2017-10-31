import chai, { assert, expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.should()
chai.use(sinonChai)
import SearchRequest from '../src/SearchRequest'
import Transporter from '../src/Transporter'
import DefaultClient from '../src/DefaultClient'

describe('DefaultClient', function() {

  let request, stub, client, transporter

  beforeEach(function() {
    request = new SearchRequest()
    client = new DefaultClient()
    transporter = new Transporter()
    stub = sinon.stub()
  })
  afterEach(function() {
  })
  it('Should have property transporter', function() {
    client.should.have.property('transporter')
  })
  it('Should have default transporter', function() {
    client.transporter.should.be.an.instanceof(Transporter)
  })
  it('Should allow user specified transporter', function() {
    client.transporter = transporter
    client.transporter.should.equal(transporter)
  })
  it('Should invoke transporter perform', function() {
    stub = sinon.stub(transporter, 'perform')
    client.transporter = transporter
    client.invoke(request)
    transporter.perform.should.have.been.calledOnce
    stub.restore
  })
})
