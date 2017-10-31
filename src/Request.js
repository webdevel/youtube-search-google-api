export default class Request {
  constructor(parameters, callback, specs) {
    this.parameters = parameters
    this.callback = callback
    this.specs = specs
  }
  get parameters() {
    return this._parameters
  }
  set parameters(parameters) {
    this._parameters = parameters
  }
  get callback() {
    return this._callback
  }
  set callback(callback) {
    this._callback = callback
  }
}
