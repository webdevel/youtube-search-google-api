import queryString from 'querystring'
import Request from './Request'

export default class SearchRequest extends Request {

  get method() {
    if (typeof this._method === 'undefined') {
      this._method = this.specs.method
    }
    return this._method
  }
  set method(method) {
    this._method = method
  }
  get url() {
    if (typeof this._url === 'undefined') {
      this._url = `${this.specs.uri}${this.query}`
    }
    return this._url
  }
  set url(url) {
    this._url = url
  }
  get query() {
    const p = this.queryParameters
    const q = queryString.stringify(p)
    return `${this.specs.query}${q}`
  }
  get queryParameters() {
    if (typeof this._queryParameters === 'undefined') {
      this._queryParameters = {
        part: 'snippet'
      }
    }
    return this._queryParameters
  }
  set queryParameters(queryParameters) {
    this.queryParameters
    Object.keys(queryParameters).forEach((key) => {
      this._queryParameters[key] = queryParameters[key]
    })
  }
  get specs() {
    if (typeof this._specs === 'undefined') {
      this._specs = require('./search-request-v3.json')
    }
    return this._specs
  }
  set specs(specs) {
    this._specs = specs
  }
}
