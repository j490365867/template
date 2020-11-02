// 验证是否是[0-1000]的小数
export function isBtnZero(rule, value, callback) {
  if (!value) {
    return callback();
  }
  setTimeout(() => {
    if (!Number(value)) {
      callback(new Error('请输入大于零的数字'));
    } else {
      if (value < 0) {
        callback(new Error('请输入大于零的数字'));
      } else {
        callback();
      }
    }
  }, 100);
}
