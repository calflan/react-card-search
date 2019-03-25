module.exports = {
  onEnterPress() {
    let code;
    document.onkeydown = (event, callback) => {
      if (event.key !== undefined && event.key === 13) {
        code = event.key;
      } else if (event.keyIdentifier !== undefined && event.keyIdentifier === 13) {
        code = event.keyIdentifier;
      } else if (event.keyCode !== undefined && event.keyCode === 13 ) {
        code = event.keyCode;
      }
      callback(code);
    }
  }
}