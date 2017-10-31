import chai, { assert, expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.should()
chai.use(sinonChai)
import SearchRequest from '../src/SearchRequest'

describe('SearchRequest', function() {

  const TEST_STR = 'TEST_STR'
  let request

  beforeEach(function() {
    request = new SearchRequest()
  })

  it('Should have property specification', function() {
    request.should.have.property('specs')
  })
  it('Should have default specification', function() {
    request.specs.should.include.all.keys('method', 'scheme', 'host', 'path', 'version', 'resource', 'parameters', 'uri')
    request.specs.method.should.be.a('string')
    request.specs.method.should.have.lengthOf.at.least(3)
    request.specs.version.should.be.a('string')
    request.specs.version.should.equal('v3')
    request.specs.resource.should.be.a('string')
    request.specs.resource.should.equal('search')
    request.specs.parameters.should.be.an('array')
    request.specs.parameters.should.have.lengthOf.at.least(38)
  })
  it('Should allow user specified specification', function() {
    const params = {}, callback = {}, specs = { method: TEST_STR }
    const request = new SearchRequest(params, callback, specs)
    request.specs.method.should.equal(TEST_STR)
  })
  it('Should have property queryParameters', function() {
    request.should.have.property('queryParameters')
  })
  it('Should have default queryParameters', function() {
    request.queryParameters.should.include.all.keys('part')
    request.queryParameters.part.should.equal('snippet')
  })
  it('Should allow user specified queryParameters', function() {
    request.queryParameters = {
      part: TEST_STR,
      key: TEST_STR
    }
    request.queryParameters.should.include.keys('part', 'key')
    request.queryParameters.part.should.equal(TEST_STR)
    request.queryParameters.key.should.equal(TEST_STR)
  })
  it('Should have property query', function() {
    request.should.have.property('query')
  })
  it('Should have default query', function() {
    request.query.should.equal('?part=snippet')
  })
  it('Should allow user specified query', function() {
    request.queryParameters = {
      key: TEST_STR,
      q: 'pumpkin|halloween+dog -cat'
    }
    request.queryParameters.should.include.keys('part', 'key', 'q')
    request.query.should.equal(`?part=snippet&key=${TEST_STR}&q=pumpkin%7Challoween%2Bdog%20-cat`)
  })
  it('Should have property method', function() {
    request.should.have.property('method')
  })
  it('Should have default method', function() {
    request.method.should.be.a('string')
    request.method.should.have.lengthOf.at.least(3)
    request.method.should.be.oneOf(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
  })
  it('Should allow user specified method', function() {
    request.method = 'OPTIONS'
    request.method.should.equal('OPTIONS')
  })
  it('Should have property url', function() {
    request.should.have.property('url')
  })
  it('Should have default url', function() {
    request.url.should.be.a('string')
    request.url.should.equal('https://www.googleapis.com/youtube/v3/search?part=snippet')
  })
  it('Should allow user specified url', function() {
    request.url = TEST_STR
    request.url.should.equal(TEST_STR)
  })
  it('Should have undefined default parameters', function() {
    expect(request.parameters).to.be.undefined
  })
  it('Should have undefined default callback', function() {
    expect(request.callback).to.be.undefined
  })
})
