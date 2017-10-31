import XHRTransporter from './XHRTransporter'
import Client from './Client'

/**
 * Default implementation of client
 */
export default class DefaultClient extends Client {
  get transporter() {
    if (typeof this._transporter === 'undefined') {
      this._transporter = new XHRTransporter()
    }
    return this._transporter
  }
  set transporter(transporter) {
    this._transporter = transporter
  }
}
