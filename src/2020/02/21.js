export default () => {
  console.log('--- 20200221.js -----------------------------')

  console.log(JSON.parse('[1,2,3]'))
  try{
    console.log(JSON.parse('1,3'))  // throws exception
  }catch(e){
    console.log(e)
  }
  console.log(parseInt('a'))    // returns NaN
  console.log(parseInt('0.1'))  // returns 0
}