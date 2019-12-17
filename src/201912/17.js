export default () => {
  console.log('--- 20191217.js -----------------------------')
  console.log('* 代入時の評価')
  let foo = false
  if (foo = true) { console.log('true') } else { console.log('false') }
  if (foo = false) { console.log('true') } else { console.log('false') }
}