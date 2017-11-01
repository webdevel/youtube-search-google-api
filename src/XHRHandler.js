import HTTPHandler from './HTTPHandler'
import Handler from './Handler'

/**
 * Handler to make XHR requests in browser.
 * @type {XHRHandler}
 */
export default class XHRHandler extends Handler {

  /**
   * Perform request. Invoke callback with response. When client not available, delegate request.
   * @param  {Request} request User specified request
   */
  perform(request) {
    if (this.client.open) {
      this.client(
        {
          url: request.url,
          method: request.method
        },
        (error, response, body) => {
          request.callback(error, response, body)
        }
      )
    } else {
      this.delegate(request)
    }
  }
  /**
   * Getter for XHR client. Provide default if undefined.
   * @return {function} XHR client
   */
  get client() {
    if (typeof this._client === 'undefined') {
      this._client = require('xhr')
    }
    return this._client
  }
  /**
   * Setter for XHR client.
   * @param  {function} client XHR client
   */
  set client(client) {
    this._client = client
  }
  /**
   * Getter for successor Handler. Provides default successor if undefined.
   * @return {Handler} Successor to delegate request if desired
   */
  get successor() {
    if (typeof this._successor === 'undefined') {
      this._successor = new HTTPHandler()
    }
    return this._successor
  }
  /**
   * Setter for successor Handler.
   * @param  {Handler} successor Successor to delegate request if desired
   */
  set successor(successor) {
    this._successor = successor
  }
}
