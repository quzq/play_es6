import src from "./2021/05/19"
import lodashSrc from "./lodash" 
import momentSrc from "./moment" 
import dayjsSrc from "./dayjs" 
import momentTzSrc from "./momenttz" 
import regex from "./regex"
import util from "./util"
import _this from "./this"
import axios from "./axios"
import * as favorites from "./favorites"
import _throw from "./throw"

//lodashSrc();
// momentSrc();
// dayjsSrc();
 // momentTzSrc();
//regex();
// util()
// _this()
//_throw()
//src();
//const today = new Date()
//console.log(today,favorites.getStartDateInThisWeek(2,today))
// const arr = [
//   {floorNo:'B2'},
//   {floorNo:'B1'},
//   {floorNo:'1F'},
//   {floorNo:'2F'},
//   {floorNo:'3F'},
//   {floorNo:'4F'},
// ]
// console.log(arr,favorites.sortFloorNo(arr))

const arr = [
  {corp_cd:'1', store_cd: '1'},
  {corp_cd:'1', store_cd: '2'},
  {corp_cd:'1', store_cd: null},
  {corp_cd:'2', store_cd: null},
  {corp_cd:'3', store_cd: '1'},
  {corp_cd:'3', store_cd: '2'},
]
console.log(favorites.groupChildCode(arr))
//axios()
//console.log(favorites.convertPoints(''))
//console.log(favorites.customErrorOccer())
