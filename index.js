if ((typeof (data_type) != "undefined" && data_type == 0) || (typeof (vip_type) != "undefined" && vip_type != null && vip_type == 0)) {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger" && ua.indexOf("miniprogram") < 1 && window.location.href.indexOf("code") < 1 && window.location.href.indexOf("new") < 1 && window.location.href.indexOf("mp") < 1 && document.referrer.indexOf("game") == -1) {
      document.writeln("<script src=\"http://web-file.360ab.cn/static/js/mp-jump.js?v1090\"><\/script>");
  }
}

var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  console.log(location.toString())
  if (location.toString().indexOf('551.cn') > -1 || location.toString().indexOf('771.cn') > -1 || location.toString().indexOf('ai81') > -1) {
      hm.src = 'https://hm.baidu.com/hm.js?51d6321aaa4909493b4e8941b57c30d7';
  } else if (location.toString().indexOf('web-3') > -1) {
      hm.src = 'https://hm.baidu.com/hm.js?e2c5f61aa6d237cbe2cffd716efd19e5';
  } else if (location.toString().indexOf('best') > -1) {
      hm.src = 'https://hm.baidu.com/hm.js?27f2ce04de556d7e9823742bff757bf8';
  } else {
      hm.src = 'https://hm.baidu.com/hm.js?9268d9128fcebf1a5da96d7cb2a8dac4';
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();