import * as _ from "lodash"

export default ()=>{
  console.log('--- lodash.js -----------------------------')
  console.log(`* mapの中身をそのままコンソール出力`)
  _.map([1,2,3], console.log);
  
  console.log(`* 配列の末尾の要素を削除`)
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(_.dropRight(fruits));

  console.log(`* undifined をtrimした結果`)
  console.log(!!_.trim(undefined))

  console.log(`* `)
}
