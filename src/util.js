import util from 'util'
export default () => {
  console.log('--- util.js -----------------------------')
  console.log('* log')
  util.log('hello')
  console.log('* inspect')
  util.log('inspect', util.inspect({id:15, name:'mike', data: {id:33, }}, {colors:true}))
  console.log('* ')
}