export default class Transporter {

  constructor(successor) {
    this.successor = successor
  }
  get successor() {
    return this._successor
  }
  set successor(successor) {
    this._successor = successor
  }
  perform(request) {
  }
  delegate(request) {
    if (this.successor instanceof Transporter) {
      this.successor.perform(request)
    }
  }
}
