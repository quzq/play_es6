export default () => {
  console.log('--- string.js -----------------------------');

  console.log(`* splitでは、4バイト文字を分割できない`);
  console.log('3バイト文字は分割できる'.split(''));
  console.log('4バイト文字（𠀋）の場合'.split(''));

  console.log([...'4バイト文字（𠀋）の場合']);
  console.log(Array.from('4バイト文字（𠀋）の場合'));
  console.log('4バイト文字（𠀋）の場合'.split(/(?=[\s\S])/u));
  console.log('* ');
};
