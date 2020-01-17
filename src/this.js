export default () => {
  console.log('--- this.js -----------------------------')
  console.log('* ')
  function test() {
    console.log(this)
  }
  var obj = {}
  obj.test = test
  obj.test()
  test()
  var fnc = obj.test
  fnc()
}
