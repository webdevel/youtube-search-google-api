import DefaultTransporter from './DefaultTransporter'
import Transporter from './Transporter'

/**
 * Transporter to make XHR requests in browser.
 * @type {XHRTransporter}
 */
export default class XHRTransporter extends Transporter {

  /**
   * Perform request. Invoke callback with response. When xhr not available, delegate request.
   * @param  {Request} request User specified request
   */
  perform(request) {
    if (this.xhr.open) {
      this.xhr(
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
  get xhr() {
    if (typeof this._xhr === 'undefined') {
      this._xhr = require('xhr')
    }
    return this._xhr
  }
  /**
   * Setter for XHR client.
   * @param  {function} xhr XHR client
   */
  set xhr(xhr) {
    this._xhr = xhr
  }
  /**
   * Getter for successor Transporter. Provides default successor if undefined.
   * @return {Transporter} Successor to delegate request if desired
   */
  get successor() {
    if (typeof this._successor === 'undefined') {
      this._successor = new DefaultTransporter()
    }
    return this._successor
  }
  /**
   * Setter for successor Transporter.
   * @param  {Transporter} successor Successor to delegate request if desired
   */
  set successor(successor) {
    this._successor = successor
  }
}
