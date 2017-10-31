import Transporter from './Transporter'

/**
 * Default Transporter to handle requests not in browser
 * @type {DefaultTransporter}
 */
export default class DefaultTransporter extends Transporter {

  /**
   * Perform request. Invoke callback with response.
   * @param  {Request} request User specified request
   */
  perform(request) {
    this.request(
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
  get request() {
    if (typeof this._request === 'undefined') {
      this._request = require('request')
    }
    return this._request
  }
  /**
   * Setter for HTTP client.
   * @param  {function} request HTTP client
   */
  set request(request) {
    this._request = request
  }
}
