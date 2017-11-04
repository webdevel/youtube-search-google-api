import queryString from 'querystring'
import Request from './Request'
import { searchSpec } from './searchSpecV3'
import { includes, find } from 'lodash'

/**
 * YouTube search request
 * @type {SearchRequest}
 */
export default class SearchRequest extends Request {
  /**
   * Getter for method. Provide default HTTP method from specs.
   * @return {String} HTTP method: GET, POST...
   */
  get method() {
    if (undefined === this._method) {
      this._method = this.specs.method
    }
    return this._method
  }
  /**
   * Setter for HTTP method.
   * @param  {String} method HTTP method
   */
  set method(method) {
    this._method = method
  }
  /**
   * Getter for URL to make HTTP requests
   * @return {String} URL
   */
  get url() {
    if (undefined === this._url) {
      this._url = `${this.specs.uri}${this.query}`
    }
    return this._url
  }
  /**
   * Setter for URL to make HTTP requests
   * @param  {String} url URL
   */
  set url(url) {
    this._url = url
  }
  /**
   * Build query string
   * @return {String} Query string
   */
  get query() {
    const p = this.queryParameters
    const q = queryString.stringify(p)
    return `${this.specs.query}${q}`
  }
  /**
   * Validate query parameter names and values where feasible
   * @param  {Object}  query Object representing query name value pairs
   * @return {Boolean}       Whether or not the query parameters are valid
   */
  isValidQueryParameters(query) {
    let result = true, params = this.specs.parameters, index
    const keys = Object.keys(query), length = keys.length

    if (length === 0) return false

    for (index = 0; index < length; ++index) {

      const key = keys[index]
      let param = find(params, { 'name': key })

      if (undefined === param) {
        result = false
        throw new Error('Invalid query parameter name specified: ' + key)

      } else if (Array.isArray(param.values) && param.values.length > 0) {

        // @todo validate fields comma delimited parameter values
        // @todo validate publishedAfter/publishedBefore date values with regular expressions
        // @todo validate location values with regex. example 37.42307,-122.08427
        // @todo validate locationRadius values with regex. example 15m, 5km, 10ft, and 0.7mi
        // @todo validate regionCode values
        // @todo validate relevanceLanguage values

        if ((typeof param.values[0] === 'string' || typeof param.values[0] === 'number') && !includes(param.values, query[key])) {
          result = false
          throw new Error(`Invalid query parameter value for ${key} specified: ${query[key]}`)

        } else if (typeof param.values[0] !== 'string' && typeof param.values[0] !== 'number') {

          let value = find(param.values, { 'value': query[key]})
          if (undefined === value) {
            result = false
            throw new Error(`Invalid query parameter value for ${key} specified: ${query[key]}`)
          }
        }
      }
    }
    return result
  }
  /**
   * Getter for parameters.
   * @return {Object} Headers and query request parameters
   */
  get parameters() {
    return this._parameters
  }
  /**
   * Setter for parameters.
   * @param  {Object} parameters Headers and query request parameters
   */
  set parameters(parameters) {
    if (typeof parameters.query !== 'undefined' && this.isValidQueryParameters(parameters.query)) {
      this.queryParameters = parameters.query
    }
    this._parameters = parameters
  }
  /**
   * Getter for Container of query parameters
   * @return {Object} Container of query parameters
   */
  get queryParameters() {
    if (undefined === this._queryParameters) {
      this._queryParameters = {
        part: 'snippet'
      }
    }
    return this._queryParameters
  }
  /**
   * Setter for container of query parameters
   * @param  {Object} queryParameters Container of query parameters
   */
  set queryParameters(queryParameters) {
    this.queryParameters
    Object.keys(queryParameters).forEach((key) => {
      this._queryParameters[key] = queryParameters[key]
    })
  }
  /**
   * Getter for YouTube Search API specification
   * @return {Object} YouTube Search API specification
   */
  get specs() {
    if (undefined === this._specs) {
      this._specs = searchSpec
    }
    return this._specs
  }
  /**
   * Setter for YouTube Search API specification
   * @param  {Object} specs YouTube Search API specification
   */
  set specs(specs) {
    this._specs = specs
  }
}
