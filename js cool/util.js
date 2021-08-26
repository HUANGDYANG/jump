import config from "../config/index.js";

let debugLog = (function () {
  return config.IS_DEBUG ? console.log : function () {};
})();
/**
 * 时间戳或标准时间转为2002-01-11 等指定格式
 * @param {*} time
 * @param {*} cFormat 传入'{y}年{m}-{d}' 输出 2002年-01-11
 */
function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (("" + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const TIME_STR = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === "a") {
      return ["一", "二", "三", "四", "五", "六", "日"][value - 1];
    }
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return TIME_STR;
}

function cmpObjArr(arr, prop) {
  function compare(property) {
    return (a, b) => {
      return a[property] - b[property];
    };
  }
  return arr.sort(compare(prop));
}

/**
 *  去掉所有的html标签和&nbsp;之类的特殊符合
 * @param {*} str
 */
function deleteHtmlTag(str) {
  str = str.replace(/<[^>]+>|&[^>]+;/g, "").trim();
  return str;
}

/**
 * 定时器
 * @param {*} s 秒数
 */
function sleep(s) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise resolved");
    }, s * 1000);
  });
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : "0" + n;
}

export {
  deleteHtmlTag,
  sleep,
  formatDate,
  formatTime,
  parseTime,
  cmpObjArr,
  debugLog,
};
