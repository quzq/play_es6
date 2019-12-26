export default () => {
  console.log('--- 20191226.js -----------------------------')
  console.log('* %o')
  const foo = {id:2, name: 'mike', data:{id:3, data:{id:4, method: ()=>{}}}}
  console.log(`data %o`, foo)
  console.log('* %O')
  console.log(`data %O`, foo)
}