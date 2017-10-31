import XHRTransporter from './XHRTransporter'
import Client from './Client'

/**
 * Default implementation of client. Client invokes transporter to handle requests.
 */
export default class DefaultClient extends Client {
  /**
   * Getter for transporter. Provides default transporter if undefined.
   * @return {Transporter} Handles requests
   */
  get transporter() {
    if (typeof this._transporter === 'undefined') {
      this._transporter = new XHRTransporter()
    }
    return this._transporter
  }
  /**
   * Setter for transporter.
   * @param  {Transporter} transporter Handles requests
   */
  set transporter(transporter) {
    this._transporter = transporter
  }
}
