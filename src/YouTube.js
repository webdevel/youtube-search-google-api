import DefaultClient from './DefaultClient'

/**
 * YouTube search interface
 * @type {YouTube}
 */
export default class YouTube {

  /**
   * Create YouTube interface
   * @param  {client} client Client to invoke requests
   */
  constructor(client) {
    this.client = client
  }
  /**
   * Getter for client. Provide default client if undefined.
   * @return {Client} Client to invoke requests
   */
  get client() {
    if (undefined === this._client) {
      this._client = new DefaultClient()
    }
    return this._client
  }
  /**
   * Setter for client.
   * @param  {Client} client Client to invoke requests
   */
  set client(client) {
    this._client = client
  }
  /**
   * Search YouTube
   * @param  {Request} request User specified request
   */
  search(request) {
    this.client.invoke(request)
  }
}
