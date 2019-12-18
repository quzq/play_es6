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

}