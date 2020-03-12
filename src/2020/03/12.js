export default () => {
  console.log('--- 2020-03-12.js -----------------------------')
  console.log('年度文字列のsplit')
  const foo = '平成21年'
  console.log(foo.match(/\d+/)[0])
  const nen=foo.match(/\d+/)[0]
  console.log(foo.split(nen)[0])
}