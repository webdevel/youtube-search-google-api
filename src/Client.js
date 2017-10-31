/**
 * Default implementation for clients
 */
export default class Client {
  /**
   *  Create client
   * @param  {Transporter} transporter Transporter to handle request
   * @return {Client}
   */
  constructor(transporter) {
    this.transporter = transporter
  }
  /**
   * Invoke request on transporter
   * @param  {Request} request Request to handle
   */
  invoke(request) {
    this.transporter.perform(request)
  }
}
