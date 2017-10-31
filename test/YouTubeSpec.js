import chai, { assert, expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.should()
chai.use(sinonChai)
import SearchRequest from '../src/SearchRequest'
import YouTube from '../src/YouTube'
import Client from '../src/Client'

describe('YouTube', function() {

  let request, stub, client, youtube

  beforeEach(function() {
    request = new SearchRequest()
    client = new Client()
    youtube = new YouTube()
    stub = sinon.stub()
  })
  afterEach(function() {
  })
  it('Should have property client', function() {
    youtube.should.have.property('client')
  })
  it('Should have default client', function() {
    youtube.client.should.be.an.instanceof(Client)
  })
  it('Should allow user specified client', function() {
    youtube.client = client
    youtube.client.should.equal(client)
  })
  it('Should invoke client when search is called', function() {
    stub = sinon.stub(client, 'invoke')
    youtube.client = client
    youtube.search(request)
    client.invoke.should.have.been.calledOnce
    stub.restore
  })
})
