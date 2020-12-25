export default () => {
  console.log('--- throw -----------------------------')
  console.log('* throw error')
  try {
    throw new Error('this is error')
  } catch (e) {
    console.log(e)
  }
  console.log('* throw 1')
  try {
    throw 1
  } catch (e) {
    console.log(e)
  }
  try {
    throw [1,2,3]
  } catch (e) {
    console.log(e)
  }
  try {
    throw {foo:123} 
  } catch (e) {
    console.log(e)
  }
  try {
    throw new Promise((resolve)=>{resolve(4)}) 
  } catch (e) {
    console.log(e)
  }
  try {
    throw new Promise((resolve)=>{setTimeout(()=>resolve(4),4000)}) 
  } catch (e) {
    console.log(e)
  }




}