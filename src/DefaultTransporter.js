import Transporter from './Transporter'

export default class DefaultTransporter extends Transporter {

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
  get request() {
    if (typeof this._request === 'undefined') {
      this._request = require('request')
    }
    return this._request
  }
  set request(request) {
    this._request = request
  }
}
