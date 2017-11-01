/**
 * Handler to handle requests
 * @type {Handler}
 */
export default class Handler {
  /**
   * Create Handler
   * @param  {Handler} successor Successor to delegate request if desired
   */
  constructor(successor) {
    this.successor = successor
  }
  /**
   * Getter for successor
   * @return {Handler} Successor to delegate request if desired
   */
  get successor() {
    return this._successor
  }
  /**
   * Setter for successor
   * @param  {Handler} successor Successor to delegate request if desired
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
    if (this.successor instanceof Handler) {
      this.successor.perform(request)
    }
  }
}
