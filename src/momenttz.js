import moment from "moment-timezone"

export default ()=>{
  console.log('--- moment-timezone.js -----------------------------')
  console.log(`* timezoneを変更しても絶対時間は変わらない`)
  const now = moment().toDate()
  console.log(now)
  console.log(moment.tz(now,'Asia/Tokyo').toDate())
  console.log(moment(now).utc())
  console.log(moment(now).utc().toDate())
  
  console.log(`* timezoneを指定することで、固定時間の解釈を変えることができる`)
  const fixed = moment.tz('2019-12-10 16:30:00', 'Asia/Tokyo')
  console.log(fixed.toDate())
  const fixed2 = moment.tz('2019-12-10 16:30:00', 'Europe/Stockholm')
  console.log(fixed2.toDate())

  
  console.log(`* unix時間にミリ秒はない`)
  console.log(moment.tz('2019-12-10 16:30:00.134', 'Asia/Tokyo').toDate())
  console.log(moment.tz('2019-12-10 16:30:01.134', 'Asia/Tokyo').unix())
  console.log(moment.tz('2019-12-10 16:30:01.000', 'Asia/Tokyo').unix())

}