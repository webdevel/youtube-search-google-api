import XHRHandler from './XHRHandler'
import Client from './Client'

/**
 * Default implementation of client. Client invokes handler to handle requests.
 */
export default class DefaultClient extends Client {
  /**
   * Getter for handler. Provides default handler if undefined.
   * @return {Handler} Handles requests
   */
  get handler() {
    if (undefined === this._handler) {
      this._handler = new XHRHandler()
    }
    return this._handler
  }
  /**
   * Setter for handler.
   * @param  {Handler} handler Handles requests
   */
  set handler(handler) {
    this._handler = handler
  }
}
