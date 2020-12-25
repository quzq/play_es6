import {lsm} from '../../favorites'

export default () => {
  console.log('--- 2020-12-25.js -----------------------------')
  const foo = [...Array(5)]
  console.log(foo)
  console.log(foo.map((_, idx) => idx))

}