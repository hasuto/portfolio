

var title = document.getElementById("title");

title = "hasuto";

const FADEIN_ELEM = document.getElementById('fadein');
const FADEIN_ELEM2 = document.getElementById('fadein2');
const FADEIN_ELEM3 = document.getElementById('fadein3');
const FADEIN_ELEM4 = document.getElementById('fadein4');
const FADEIN_ELEM5 = document.getElementById('fadein5');
const FADEIN_ELEM6 = document.getElementById('fadein6');
//スクロール時に要素をフェードインさせるイベントを設定する
window.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_ELEM_TOP = FADEIN_ELEM.getBoundingClientRect().top;
    //ブラウザの高さを取得
    const WINDOW_HEIGHT = window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 200)) {
        FADEIN_ELEM.classList.add('fadein-after');
    } else {
        FADEIN_ELEM.classList.remove('fadein-after');
    }
});

//スクロール時に要素をフェードインさせるイベントを設定する
window.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_ELEM_TOP2 = FADEIN_ELEM2.getBoundingClientRect().top;
    //ブラウザの高さを取得
    const WINDOW_HEIGHT2 = window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT2 > (FADEIN_ELEM_TOP2 + 200)) {
        FADEIN_ELEM2.classList.add('fadein-after');
    } else {
        FADEIN_ELEM2.classList.remove('fadein-after');
    }
});

window.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_ELEM_TOP3 = FADEIN_ELEM3.getBoundingClientRect().top;
    //ブラウザの高さを取得
    const WINDOW_HEIGHT3 = window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT3 > (FADEIN_ELEM_TOP3 + 200)) {
        FADEIN_ELEM3.classList.add('fadein-after');
    } else {
        FADEIN_ELEM3.classList.remove('fadein-after');
    }
});

window.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_ELEM_TOP4 = FADEIN_ELEM4.getBoundingClientRect().top;
    //ブラウザの高さを取得
    const WINDOW_HEIGHT4 = window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT4 > (FADEIN_ELEM_TOP4 + 200)) {
        FADEIN_ELEM4.classList.add('fadein-after');
    } else {
        FADEIN_ELEM4.classList.remove('fadein-after');
    }
});

window.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_ELEM_TOP5 = FADEIN_ELEM5.getBoundingClientRect().top;
    //ブラウザの高さを取得
    const WINDOW_HEIGHT5 = window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT5 > (FADEIN_ELEM_TOP5 + 200)) {
        FADEIN_ELEM5.classList.add('fadein-after');
    } else {
        FADEIN_ELEM5.classList.remove('fadein-after');
    }
});

window.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_ELEM_TOP6 = FADEIN_ELEM6.getBoundingClientRect().top;
    //ブラウザの高さを取得
    const WINDOW_HEIGHT6 = window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT6 > (FADEIN_ELEM_TOP6 + 200)) {
        FADEIN_ELEM6.classList.add('fadein-after');
    } else {
        FADEIN_ELEM6.classList.remove('fadein-after');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // タブに対してクリックイベントを適用
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', tabSwitch, false);
    }
    // タブをクリックすると実行する関数
    function tabSwitch() {
        // タブのclassの値を変更
        document.getElementsByClassName('is-active')[0].classList.remove('is-active');
        this.classList.add('is-active');
        // コンテンツのclassの値を変更
        document.getElementsByClassName('is-show')[0].classList.remove('is-show');
        const arrayTabs = Array.prototype.slice.call(tabs);
        const index = arrayTabs.indexOf(this);
        document.getElementsByClassName('panel')[index].classList.add('is-show');
    };
}, false);;
// $(function(){
//     $("#contents div").hide();
//     $($("tab a.selected").attr("href")).show();
//     $("#tab li a").click(function(){
//         $("#tab li a").removeClass();
//         $(this).addClass("selected");
//         $("#contents div").hide();
//         $($(this).attr("href")).fadeIn();
//         return false;
//     });
// });

$(function () {
    $('.slick01').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
    });
});
