import * as _ from "lodash"
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