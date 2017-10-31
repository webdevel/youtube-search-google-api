import DefaultTransporter from './DefaultTransporter'
import Transporter from './Transporter'

export default class XHRTransporter extends Transporter {

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
  get xhr() {
    if (typeof this._xhr === 'undefined') {
      this._xhr = require('xhr')
    }
    return this._xhr
  }
  set xhr(xhr) {
    this._xhr = xhr
  }
  get successor() {
    if (typeof this._successor === 'undefined') {
      this._successor = new DefaultTransporter()
    }
    return this._successor
  }
  set successor(successor) {
    this._successor = successor
  }
}
