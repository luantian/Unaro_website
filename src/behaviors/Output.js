class Output {

  static log(...msg) {
    console.log(...msg)
  }

  static warn(...msg) {
    console.warn(...msg)
  }

  static error(...msg) {
    console.error(...msg)
  }

  static clear() {
    console.clear();
  }

}

export default Output;
