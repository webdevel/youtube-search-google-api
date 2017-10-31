/**
 * Transporter to handle requests
 * @type {Transporter}
 */
export default class Transporter {
  /**
   * Create Transporter
   * @param  {Transporter} successor Successor to delegate request if desired
   */
  constructor(successor) {
    this.successor = successor
  }
  /**
   * Getter for successor
   * @return {Transporter} Successor to delegate request if desired
   */
  get successor() {
    return this._successor
  }
  /**
   * Setter for successor
   * @param  {Transporter} successor Successor to delegate request if desired
   */
  set successor(successor) {
    this._successor = successor
  }
  perform(request) {
  }
  /**
   * Delegate request to successor if desired
   * @param  {Request} request User specified request
   */
  delegate(request) {
    if (this.successor instanceof Transporter) {
      this.successor.perform(request)
    }
  }
}
