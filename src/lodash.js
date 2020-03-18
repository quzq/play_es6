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

  console.log(`* difference オブジェクト`)
  console.log(_.difference([{name:'aaa'},{name:'bbb'}],[{name:'aaa'}, {name:'ccc'}]))
  console.log(_.differenceWith([{name:'aaa'},{name:'bbb'}],[{name:'aaa'}, {name:'ccc'}], _.isEqual))
  console.log(_.differenceWith([{ name: 'aaa', year: 18 }, { name: 'bbb' }], [{ name: 'aaa', year: 18 }, { name: 'ccc' }], _.isEqual))
  console.log(_.differenceWith([{ name: 'aaa', year: 18 }, { name: 'bbb' }], [{ name: 'aaa', year: 19 }, { name: 'ccc' }], _.isEqual))
  console.log(_.differenceWith([{ name: 'aaa', year: 18 }, { name: 'bbb' }], [{ name: 'aaa', year: undefined }, { name: 'ccc' }], _.isEqual))

  console.log(`* isEqual`)
  console.log(_.isEqual([{ name: 'aaa', year: 18 }], [{ name: 'aaa', year: 18 }]))
  console.log(_.isEqual([{ name: 'aaa', year: 18 }, { name: 'bbb' }], [  { name: 'aaa', year: 18 }, { name: 'bbb' },]))
  console.log(_.isEqual([{ name: 'aaa', year: 18 }, { name: 'bbb' }], [  { name: 'aaa', year: undefined }, { name: 'bbb' },]))
  console.log(_.isEqual([{ name: 'aaa', year: 18 }, { name: 'bbb' }], [ { name: 'bbb' }, { name: 'aaa', year: undefined }]))
  console.log(_.isEqual([{ name: 'aaa', year: 18 }, { name: 'bbb' }], [ { name: 'bbb' }, { name: 'aaa', year: 18}]))

  console.log(`* zip`)
  {
    const foo = [1,2,3,4,5]
    const bar = [2,4,6,8,10]
    console.log(_.zip(foo,bar))
  }

  console.log(`* trim`)
  console.log(_.trim(' aaa '))  // aaa
  console.log(_.trim(' a aa '))  // a aa
  console.log(_.trim(''))  // '' 
  console.log(_.trim(null))  // '' 
  console.log(_.trim(undefined))  // '' 
  console.log(_.trim(0))  // '' 

  console.log(`* uniq`)
  {
    const foo = [{id: 12},{id: 13},{id: 12},]
    console.log(_.chain(foo).uniqBy('id').value())
    console.log(_.uniqBy(foo,'id'))
  }
  
  console.log(`* indexOf`)
  {
    const foo = ['100', '200', '500']
    console.log(_.indexOf(foo,'500'))
    console.log(_.indexOf(foo,'300'))
  }

  console.log(`* concat`)
  {
    const foo = ['100', {value:'200'}, '500']
    console.log(_.concat(foo,[1,2]))
    console.log(_.concat(foo,null))
  }

  console.log(`* `)
}
