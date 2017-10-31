import DefaultClient from './DefaultClient'

export default class YouTube {

  constructor(client) {
    this.client = client
  }
  get client() {
    if (typeof this._client === 'undefined') {
      this._client = new DefaultClient()
    }
    return this._client
  }
  set client(client) {
    this._client = client
  }
  search(request) {
    this.client.invoke(request)
  }
}
