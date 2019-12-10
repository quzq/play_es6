export default () => {
  console.log('--- 20191210.js -----------------------------')
  console.log(`* 処理時間の計測`)
  const label = 'my-label'
  console.time(label)
  for (var i = 0; i < 9999; i++) { }
  console.timeLog(label)
  for (var i = 0; i < 9999; ++i) { }
  console.timeEnd(label)
  
}
