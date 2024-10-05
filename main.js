var is_copy = false;
        const timestamp2 = new Date().getTime();
        var timeid = timestamp2.toString().substr(-4);
        var pageUrl = 'http://360ab.cn/5221';
        if (pageUrl.indexOf('#') == -1) {
            pageUrl = pageUrl + '#' + timeid;
        }
        if (!copyText) {
            if ($("#ctitle").text()) {
                var copyText = $("#ctitle").text() + '\n' + pageUrl;
            } else {
                var copyText = $(document).prop('title') + "\n" + pageUrl;
            }
        }

        
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("miniprogram") < 1) {
            if (!is_copy && temp_id != "25") {
                var clipboard = new ClipboardJS('html', {
                    text: function () {
                        if (typeof ntzgo === 'function') {
                            ntzgo();
                        }
                        if (typeof checkAudio === 'function') {
                            checkAudio();
                        }
                        return copyText;
                    }
                });
                is_copy = true;
                $("html").click(function () {
                    clipboard.destroy();
                })
                console.log(copyText);
            }
        }