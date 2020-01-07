export default () => {
  console.log('--- 20200107.js -----------------------------')
  console.log('* readonly property ')
  class Foo{
  }  
  const foo = new Foo()
  Object.defineProperty(foo, 'bar', {get: ()=> 'const value'})
  console.log(`show %o`, foo.bar)
  try{
    foo.bar = 'changed'
    console.log(`show %o`, foo.bar)
  }catch(e){
    console.log(e)
  }
}