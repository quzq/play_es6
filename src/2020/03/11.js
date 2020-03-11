export default () => {
  console.log('--- 2020-03-11.js -----------------------------')
  const options = {
    era: 'long',
  };
  const convDate = (date) => new Intl.DateTimeFormat('ja-JP-u-ca-japanese', options).format(date)
  console.log(convDate(new Date(2010,1,1)))
}