import * as _ from "lodash"
import dayjs from 'dayjs'

const stretchSize = (parentWidth, parentHeight, childWidth, childHeight) => {
    if (!parentWidth || !parentHeight || !childWidth || !childHeight) return { width: 0, height: 0 }

    // width基準にストレッチ
    const height = parseInt(parentWidth / childWidth * childHeight)
    if (parentHeight > height) return { width: parentWidth, height, base: 'width' }
    // height基準にストレッチ
    const width = parseInt(parentHeight / childHeight * childWidth)
    return { width, height: parentHeight, base: 'height' }
  }


// 棚の開始X座標、終了X座標を平均化
export const getAverageWithoutOutlier = values => {
  const avgAll = values.reduce((prev, curr) => prev + curr, 0) / values.length
  // valuesに平均値からの距離を付加
  const dists = values.map((v,idx) => ({
    idx,
    value: v,
    dist: Math.sqrt((avgAll - v) ** 2),
  }))
  const outlier = _.maxBy(dists, 'dist')  // 外れ値を１件取得
  // 平均値から最も遠いものを１つカットし、残った中で平均化
  const forAverage =  dists.filter(v => v.idx !== outlier.idx).map(v => v.value)
  return forAverage.reduce((prev,curr)=>prev+curr, 0)/forAverage.length
}

// 回帰直線を求める（最小二乗法）
export const lsm = coordinates => {
  const n = coordinates.length
  const sigX = coordinates.reduce((acc, c) => acc + c.x, 0)
  const sigY = coordinates.reduce((acc, c) => acc + c.y, 0)
  const sigXX = coordinates.reduce((acc, c) => acc + c.x * c.x, 0)
  const sigXY = coordinates.reduce((acc, c) => acc + c.x * c.y, 0)
  // a(傾き)を求める
  const a = (n * sigXY - sigX * sigY) / (n * sigXX - Math.pow(sigX, 2));
  // b(切片)を求める
  const b = (sigXX * sigY - sigXY * sigX) / (n * sigXX - Math.pow(sigX, 2));
  return { a, b }
}
export const getStartDateInThisWeek = (weekStartDay, today)=>{
  const thisWeekDay = today.getDay()
  // console.log(weekStartDay,thisWeekDay)
  return dayjs(today).add(-((thisWeekDay + 7 - weekStartDay) % 7), 'day').toDate()

}

export const sortFloorNo =(floors)=>{
  const sortAsc = (a, b) => a.order - b.order;
  const sortDesc = (a, b) => b.order - a.order;
  const floorNos = _.uniqWith(
    floors.map((i) => ({ code: i.floorNo, order: parseInt(i.floorNo.replace('B', '-')) })),
    _.isEqual
  ).sort(sortDesc);
  // 地上階は昇順で選択、地下階は降順で選択
  console.log('sort', floorNos);
  console.log('filter',floorNos.filter((i) => i.order > 0))
  console.log('asc',floorNos.filter((i) => i.order > 0).sort(sortAsc))
  console.log('first',_.first(floorNos.filter((i) => i.order > 0).sort(sortAsc)) || 'what?')

  return (_.first(floorNos.filter((i) => i.order > 0).sort(sortAsc)) || _.first(floorNos.filter((i) => i.order < 0).sort(sortDesc))).code;  

}

export const convertPoints = (s)=>{
  const splited = s.split(',')
  const numbers = splited.map(i=>parseInt(i))
  if(numbers.length % 2 >0) throw new Error('座標の組が不正です')
  const points = [...Array(numbers.length/2).keys()].map(i=>`${numbers[i*2]},${numbers[i*2+1]} `)
  return points.reduce((prev,curr)=>prev+curr,'')
}


export const customErrorOccer = () => {
  class AppError extends Error{
    constructor(code, message){
      super(message)
      this.name = 'AppError'
      this.code = code
    }
  }
  throw new AppError(404,"what?")
  
}