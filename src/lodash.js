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

  console.log(`* 配列のソート`)
  let sortUsers = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];
  console.log(_.orderBy(sortUsers, 'user', 'desc'))
  console.log(_.orderBy(sortUsers, i => parseInt(i.age), 'desc') )

  console.log(`* group by`)
  let array = [{ cd: '01', value: 100 }, { cd: '01', value: 200 }, { cd: '02', value: 400 }]

  console.log(_.groupBy(array, i=> i.cd))

  console.log(`* group by してsum`)
  const _grouped = _.groupBy(array, i=> i.cd)
  console.log(Object.keys(_grouped).map(key => ({code: key, value: _.sumBy(_grouped[key], 'value')})))

  console.log(`* reject: 偶数を除外したリスト`)
  console.log(_.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; }))

  console.log(`* `)
}
