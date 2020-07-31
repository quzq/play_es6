import {lsm} from '../../favorites'

export default () => {
  console.log('--- 2020-07-30.js -----------------------------')
  const coordinates = [
    {x:5,y:5},
    {x:4,y:3},
    {x:3,y:2},
    {x:0,y:0},
    {x:1,y:1},
  ];
  console.log(lsm(coordinates))
}