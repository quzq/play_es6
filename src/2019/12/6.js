export default () => {
  console.log('--- 20191206.js -----------------------------')
  console.log(`* wrapperの引数を、内部関数の引数としてそのまま渡す`)
  const wrapper = (...args)=>{
    console.log(`args.length: ${args.length}`)   //引数の数
    console.log(`args[0]: ${args[0]}`)  
    const core = (...args)=>{
      console.log('core args',args)
    } 
    core(...args)
  }
  wrapper('hello','world','11') // success
}