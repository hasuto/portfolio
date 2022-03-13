

var title = document.getElementById("title");

title = "hasuto";

const FADEIN_ELEM = document.getElementById('fadein');
const FADEIN_ELEM2 = document.getElementById('fadein2');
const FADEIN_ELEM3 = document.getElementById('fadein3');
const FADEIN_ELEM4 = document.getElementById('fadein4');
const FADEIN_ELEM5 = document.getElementById('fadein5');
//スクロール時に要素をフェードインさせるイベントを設定する
window.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_ELEM_TOP = FADEIN_ELEM.getBoundingClientRect().top;
    //ブラウザの高さを取得
    const WINDOW_HEIGHT = window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 200)) {
        FADEIN_ELEM.classList.add('fadein-after');
    }else{
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
    }else{
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
    }else{
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
    }else{
        FADEIN_ELEM4.classList.remove('fadein-after');
    }
});

window.addEventListener('scroll', () => {
    //フェードインする要素の上部の位置を取得する
    const FADEIN_ELEM_TOP5 = FADEIN_ELEM5.getBoundingClientRect().top;
    //ブラウザの高さを取得
    const WINDOW_HEIGHT5= window.innerHeight;
    //画面に表示された時にフェードインさせる処理
    if (WINDOW_HEIGHT5 > (FADEIN_ELEM_TOP5 + 200)) {
        FADEIN_ELEM5.classList.add('fadein-after');
    }else{
        FADEIN_ELEM5.classList.remove('fadein-after');
    }
});

$(function(){
    $("#contents div").hide();
    $($("tab a.selected").attr("href")).show();
    $("#tab li a").click(function () {
        $("tab li a").removeClass();
        $(this).addClass("selected");
        $($(this).attr("href")).fadeIn();
        return false;
    });
});

