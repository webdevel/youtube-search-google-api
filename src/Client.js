/**
 * Default implementation for clients
 */
export default class Client {
  /**
   *  Create client
   * @param  {Handler} handler Handler to handle request
   * @return {Client}
   */
  constructor(handler) {
    this.handler = handler
  }
  /**
   * Invoke request on handler
   * @param  {Request} request Request to handle
   */
  invoke(request) {
    this.handler.perform(request)
  }
}
