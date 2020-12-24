import dayjs from "dayjs"

export default ()=>{
  console.log('--- moment.js -----------------------------')
  console.log(`* 現在日時の日付を作成`)
  console.log(dayjs().toDate())

  console.log(`* Date間の差（ミリ秒）を取得`)
  console.log(`1秒の差(day)：${dayjs('2019-12-05 00:00:01').diff(dayjs('2019-12-05 00:00:00'), 'day')}`)
  console.log(`1秒の差(sec)：${dayjs('2019-12-05 00:00:01').diff(dayjs('2019-12-05 00:00:00'), 'seconds')}`)
  console.log(`1秒の差(milliseconds)：${dayjs('2019-12-05 00:00:01').diff(dayjs('2019-12-05 00:00:00'), 'milliseconds')} (大.diff(小,'milliseconds')にしないとマイナスになる) `)
  console.log(`適当なの差(milliseconds)：${dayjs('2019-12-05 10:33:01').diff(dayjs('2019-12-05 00:00:00'), 'milliseconds')} (大.diff(小,'milliseconds')にしないとマイナスになる) `)

  console.log(`* format文字列の確認`)
  console.log(dayjs('2019-12-13 14:15:16').format('YYYY:MM:DD HH:mm:ss'))

  console.log(`* 日付の加算`)
  console.log(dayjs('2019-12-13 14:15:16').add(1,'days').format('YYYY:MM:DD HH:mm:ss'))

  console.log(`* nullからの作成 -> moment.invalid(/* NaN */)`)
  console.log(dayjs(null))

  console.log(`* 月は0-11`)
  {
    const date = dayjs('2019-01-01 14:15:16')
    console.log(date.get('month'))
  }

  console.log(`* 文字列のパース`)
  {
    const date =dayjs('20200925000000', 'YYYYMMDDhhmmss') 
    console.log(date.format('YYYY/MM/DD hh:mm:ss'))
    console.log(date.toDate().getDay())
    console.log(dayjs('20200925', 'YYYYMMDD').format('YYYY/MM/DD') )
    console.log(dayjs('202005', 'YYYYMMDD').format('YYYY/MM/DD') )
    console.log(date.toDate().getDay())
  }
  
}