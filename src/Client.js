/**
 * Default implementation for clients
 */
export default class Client {
  constructor(transporter) {
    this.transporter = transporter
  }
  invoke(request) {
    this.transporter.perform(request)
  }
}
