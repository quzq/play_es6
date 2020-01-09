export default () => {
  console.log('--- 20200107.js -----------------------------')
  console.log('* readonly property ')
  class Foo{
    get bazz(){return 'bazz is readonly'}
  }  
  try{
    foo.bazz= 'changed'
    console.log(`show %o`, foo.baz)
  }catch(e){
    console.log(e)
  }
  const foo = new Foo()
  Object.defineProperty(foo, 'bar', {get: ()=> 'bar is readonly'})
  console.log(`show %o`, foo.bar)
  try{
    foo.bar = 'changed'
    console.log(`show %o`, foo.bar)
  }catch(e){
    console.log(e)
  }

  console.log('* nested readonly property ')
  class Foobar{
    get bar() {
      return {
        get baz1() { return 'baz1 is readonly' },
        get baz2() { return 'baz2 is readonly' },
      }
    }
  }  
  const foobar = new Foobar()
  try{
    console.log(`foobar.bar %o`, foobar.bar)
    foobar.bar = null
  }catch(e){
    console.log(e)
  }
  try{
    console.log(`foobar.bar.baz1 %o`, foobar.bar.baz1)
    foobar.bar.baz1 = null
  }catch(e){
    console.log(e)
  }


}