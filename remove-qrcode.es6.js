// ==UserScript==
// @name         xuetangx-remove-qrcode
// @namespace    https://github.com/DuckSoft
// @version      0.1
// @description  移除学堂在线课程的强制微信扫码关注
// @author       DuckSoft
// @match        http://www.xuetangx.com/courses/*
// @match        https://www.xuetangx.com.courses/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 绑定窗口加载完毕事件
    (f => {
        if (document.addEventListener) window.addEventListener("load", f, false);
        else if (window.attachEvent) window.attachEvent("onload", f);
    })(() => {
        document.querySelector(".course_mask").remove();
    });
})();
