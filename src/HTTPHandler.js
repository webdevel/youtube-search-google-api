import Handler from './Handler'

/**
 * Default Handler to handle requests not in browser
 * @type {HTTPHandler}
 */
export default class HTTPHandler extends Handler {

  /**
   * Perform request. Invoke callback with response.
   * @param  {Request} request User specified request
   */
  perform(request) {
    this.client(
      {
        url: request.url,
        method: request.method
      },
      (error, response, body) => {
        request.callback(error, response, body)
      }
    )
  }
  /**
   * Getter for HTTP client implementation.
   * @return {function} HTTP client
   */
  get client() {
    if (typeof this._client === 'undefined') {
      this._client = require('request')
    }
    return this._client
  }
  /**
   * Setter for HTTP client.
   * @param  {function} client HTTP client
   */
  set client(client) {
    this._client = client
  }
}
