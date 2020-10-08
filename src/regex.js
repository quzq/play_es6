export default () => {
  console.log('--- regex.js -----------------------------')
  let target = null
  console.log('* 全角文字列の判断')
  console.log(('あいいいいｲｯｻ'.match(/[^ -~｡-ﾟ]*/)))
  console.log(('1111あいいいいｲｯｻああああ'.match(/(\d+)([^ -~｡-ﾟ]+)([ｦ-ﾟ]+)([^ -~｡-ﾟ]+)/)))

  target ='1111 あいいいい　  ｲｯｻ ああああ'
  console.log((target.match(/(\d+)\s*([^ -~｡-ﾟ]+)\s*([ｦ-ﾟ]+)\s*([^ -~｡-ﾟ]+)/)))

  target = "569859  その他スポーツ　トレーナー・Ｔシャツ    ｿﾉﾀｽﾎﾟｰﾂﾄﾚｰﾅｰ,  その他スポーツ　トレーナー・"
  console.log((target.match(/(\d+)\s*([^ -~｡-ﾟ]+)\s*((?:[ｦ-ﾟ]|,)+)\s*([^ -~｡-ﾟ]+)/)))

  /*
    数字：(\d+)\s*
    全角文字：([^ -~｡-ﾟ]+)
    半角カナ：((?:[ｦ-ﾟ]|,)+)
  */
  target = "110105  低カロリー甘味料ﾃｲｶﾛﾘ-ｶﾝﾐﾘﾖｳ   低カロリー甘味料"
  console.log(target)
  console.log((target.match(/(\d+)\s*([^ -~｡-ﾟ]+)\s*((?:[-ｦ-ﾟ]|,)+)\s*([^ -~｡-ﾟ]+)/)))

  target = "110141  香辛料（からし・わさび以外）ｺｳｼﾝﾘﾖｳ(ｶﾗｼﾜｻﾋ  香辛料（からし・わさび以外）"
  console.log(target)
  console.log((target.match(/(\d+)\s*([^ -~｡-ﾟ]+)\s*((?:[-\(\)ｦ-ﾟ]|,)+)\s*([^ -~｡-ﾟ]+)/)))

  target = "110803  野菜缶詰ﾔｻｲ ｶﾝﾂﾞﾒ野菜缶詰"
  console.log(target)
  console.log((target.match(/(\d+)\s*([^ -~｡-ﾟ]+)\s*((?:[\-\(\)ｦ-ﾟ\s]|,)+)\s*([^ -~｡-ﾟ]+)/)))

  target = "140201  果汁１００％飲料ｶｼﾞﾕｳ100%ｲﾝﾘﾖｳ  果汁１００％飲料"
  console.log(target)
  console.log((target.match(/(\d+)\s*([^ -~｡-ﾟ]+)\s*((?:[\-\(\)\s%ｦ-ﾟ0-9]|,)+)\s*([^ -~｡-ﾟ]+)/)))

  target = "22ＯＴＣ医薬品類OTCｲﾔｸﾋﾝﾙｲ   ＯＴＣ医薬品類"
  console.log(target)
  console.log((target.match(/(\d+)\s*([^ -~｡-ﾟ]+)\s*((?:[\-\(\)\s%ｦ-ﾟ0-9A-Z]|,)+)\s*([^ -~｡-ﾟ]+)/)))

  target = "311205  製図用定規・コンパスｾｲｽﾞﾖｳｼﾞﾖｳｷﾞ.ｺ   製図用定規・コンパス"
  console.log(target)
  console.log((target.match(/(\d+)\s*([^ -~｡-ﾟ]+)\s*((?:[\-\(\)\s\.%ｦ-ﾟ0-9A-Z]|,)+)\s*([^ -~｡-ﾟ]+)/)))

  target = "431103  トラック、バス用タイヤﾄﾗﾂｸ､ﾊﾞｽﾖｳﾀｲﾔ  トラック、バス用タイヤ"
  console.log(target)
  console.log((target.match(/(\d+)\s*([^ -~｡-ﾟ]+)\s*((?:[\-\(\)\s\.､%ｦ-ﾟ0-9A-Z]|,)+)\s*([^ -~｡-ﾟ]+)/)))

  target = "432007  サスペンション・ブレーキ系チューニング   ｻｽﾍﾟﾝｼﾖﾝ･ﾌﾞﾚｰｷ  サスペンション・ブレーキ系"
  console.log(target)
  console.log((target.match(/(\d+)\s*([^ -~｡-ﾟ]+)\s*((?:[\-\(\)\s\.､･%ｦ-ﾟ0-9A-Z]|,)+)\s*([^ -~｡-ﾟ]+)/)))

  target = "/aaa/bbb" 
  console.log(target)
  console.log((target.match(/\/*(\w+)\/*/))[1])
  
  target = ["/aaa_a/s","/aaa_a/","/aaa_a","/aaa_a/444/aa", "/aaaa"] 
  console.log(target, (target.map(i=>i.match(/^\/\aaa_a(\/(\w|\/)*)?$/g))))
}