export default () => {
  console.log('--- 20191210.js -----------------------------')
  console.log(`* 処理時間の計測`)
  const label = 'my-label'
  console.time(label)
  for (var i = 0; i < 9999; i++) { }
  console.timeLog(label)
  for (var i = 0; i < 9999; ++i) { }
  console.timeEnd(label)

  console.log(`* 関数の引数の書き換えは可能`)
  const foo = (val = 0) => {
    val = 5
    return val
  }
  console.log(foo())

}
