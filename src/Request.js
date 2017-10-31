/**
 * User specified request to YouTube API
 * @type {Request}
 */
export default class Request {
  /**
   * Create request
   * @param  {Object}   parameters Headers and query request parameters
   * @param  {Function(error, response, body)} callback   User specified callback for response
   * @param  {Object}   specs      YouTube Search API Specification
   * @return {Request}              Request
   */
  constructor(parameters, callback, specs) {
    this.parameters = parameters
    this.callback = callback
    this.specs = specs
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
    this._parameters = parameters
  }
  /**
   * Getter for callback
   * @return {Function(error, response, body)} User specified callback for response
   */
  get callback() {
    return this._callback
  }
  /**
   * Setter for callback
   * @param  {Function(error, response, body)} callback User specified callback for response
   */
  set callback(callback) {
    this._callback = callback
  }
}
