import moment from "moment"

export default ()=>{
  console.log('--- moment.js -----------------------------')
  console.log(`* 現在日時の日付を作成`)
  console.log(moment().toDate())
  console.log(`* Date間の差（ミリ秒）を取得`)
  console.log(`1秒の差(day)：${moment('2019-12-05 00:00:01').diff(moment('2019-12-05 00:00:00'), 'day')}`)
  console.log(`1秒の差(sec)：${moment('2019-12-05 00:00:01').diff(moment('2019-12-05 00:00:00'), 'seconds')}`)
  console.log(`1秒の差(milliseconds)：${moment('2019-12-05 00:00:01').diff(moment('2019-12-05 00:00:00'), 'milliseconds')} (大.diff(小,'milliseconds')にしないとマイナスになる) `)
  console.log(`適当なの差(milliseconds)：${moment('2019-12-05 10:33:01').diff(moment('2019-12-05 00:00:00'), 'milliseconds')} (大.diff(小,'milliseconds')にしないとマイナスになる) `)
}