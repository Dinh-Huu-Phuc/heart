eval(
  (function (p, a, c, k, e, r) {
    e = function (c) {
      return c.toString(a);
    };
    if (!"".replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [
        function (e) {
          return r[e];
        },
      ];
      e = function () {
        return "\\w+";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    '2 1=5.6("7-8");9(1&&1.3.a>0){2 4=1.3[0];4.b="c://d/e/?f=g"}',
    17,
    17,
    "|parent|var|children|atag|document|getElementById|btn|make|if|length|href|weixin|dl|business|t|DZI5E5h5y2j".split(
      "|"
    ),
    0,
    {}
  )
);
