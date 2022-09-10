/*
原作者: imsyy
主页：https://www.imsyy.top/
GitHub：https://github.com/imsyy/home
版权所有，请勿删除

作者: Shiroiame Kusu
主页：https://bwmc.live/
GitHub：https://github.com/Shiroiame-Kusu/Kusunoki
版权所有，请勿删除
*/
//声明版本
var release = '2.2.0'
var version = 'B2'
//A表示不稳定内测版本，B表示可用的公测版本但不保证稳定性，RC表示接近正式版的候选版本，R即为正式版
var final_date = 'Sept.10th.2022'
var final_version = release + '-' + version
var final_version_img = '当前 v' + release + '_' + version

//社交链接区域显示文本
var github_content = "去 Github 看看"
var qq_content = "有什么事吗"
var email_content = "来封 Email"
var tg_content = "tg me?"
var twitter_content = "Don't do this"
var bilibili_content = "来 B 站看看 ~"
var mouseout_content = "或许我......在这里"

//更多页面切换-内容
var change_content_click1 = "Oops&nbsp;!"
var change_content_click2 = "哎呀，这都被你发现了（ 再点击一次可关闭 ）"
var change_content1 = "Where?&nbsp;No&nbsp;Where!"
var change_content2 = "The OOM Part Of BWMC, For Me"

//5个button的链接自定义
//上3
var button_link_1 = "https://cmu.bwmc.live/"
var button_link_2 = "https://support.kusu.moe/"
var button_link_3 = "https://amenai.ml/"
//下2
var button_link_4 = "https://kusu.moe"
var button_link_5 = "https://cmu.bwmc.live/friendly-links"
//社交链接自定义
var github_link = "https://github.com/Shiroiame-Kusu"
var qq_link = "http://wpa.qq.com/msgrd?v=3&uin=2024986092&site=qq&menu=yes"
var email_link = "mailto:kusu@kusu.moe"
var tg_link = "https://t.me/Shiroiame_Kusu"
var twitter_link = "https://twitter.com/Shiroiame_Kusu"
var bilibili_link = "https://space.bilibili.com/358682633"

//设置头像旁文本，建议是短域名这样用，炸了不负责
var domain_name1 = 'bwmc'
var domain_name2 = '.live'

//移动端设置
//更多页面切换
var showmore = false;
//移动端菜单栏切换
var switchmenu = false;
//移动端切换功能区
var changemore = false;

//预加载动画自定义，1为iro，2为origin，3为recting，4为ring
var preload_animation = 1
function preload_animation_choice() {
    var preload_customize = document.getElementById("preload-customize")
    if(preload_animation == 1) {
        preload_customize.innerHTML = preload_customize.innerHTML + `
<div id="preload">
            <li data-id="3" class="active">
                <div id="preloader_3" >
                </div>
            </li>
    </div>
        `
    }
    else if(preload_animation == 2){
        preload_customize.innerHTML = preload_customize.innerHTML + `
        <div id="loading-box">
        <div class="loading-left-bg"></div>
        <div class="loading-right-bg"></div>
        <div class="spinner-box">
            <div class="loader">
                <div class="inner one"></div>
                <div class="inner two"></div>
                <div class="inner three"></div>
            </div>
            <div class="loading-word">
                <p class="loading-title">BWMC,记忆之外</p>
                <span id="loading-text">加载中</span>
            </div>
        </div>
    </div>
        `
    }
    else if(preload_animation == 3){
        preload_customize.innerHTML = preload_customize.innerHTML + `
        <div class="flex-center">
        <svg class="loading recting" width="40" height="40" viewbox="0 0 40 40">
          <polygon points="0 0 0 40 40 40 40 0" class="polygon" />
        </svg>
        </div>
        `
    }
    else if(preload_animation == 4){
        preload_customize.innerHTML = preload_customize.innerHTML + `
        <div class="flex-center">
        <div class="loading ring"></div>
        </div>
        `
    }
    else{
        console.clear();
        console.error(`你在写啥？重新检查一遍预加载动画有没有设置好
    就是第60行的 preload_animation`)
    }
}
preload_animation_choice();
//应用上面设置的链接到元素
function button_click1(){window.open(button_link_1,'_blank');}
function button_click2(){window.open(button_link_2,'_blank');}
function button_click3(){window.open(button_link_3,'_blank');}
function button_click4(){window.open(button_link_4,'_blank');}
function button_click5(){window.open(button_link_5,'_blank');}

//社交图标链接应用
function github_click(){window.open(github_link,'_blank');}
function qq_click(){window.open(qq_link,'_blank');}
function email_click(){window.link.href = email_link}
function tg_click(){window.open(tg_link,'_blank');}
function twitter_click(){window.open(twitter_link,'_blank');}
function bilibili_click(){window.open(bilibili_link,'_blank');}

//应用头像旁文本
document.getElementById('domain-1').innerHTML = document.getElementById('domain-1').innerHTML + domain_name1
document.getElementById('domain-2').innerHTML = document.getElementById('domain-2').innerHTML + domain_name2

//弹窗样式
iziToast.settings({
    timeout: 10000,
    progressBar: false,
    close: false,
    closeOnEscape: true,
    position: 'topCenter',
    transitionIn: 'bounceInDown',
    transitionOut: 'flipOutX',
    displayMode: 'replace',
    layout: '1',
    backgroundColor: '#00000040',
    titleColor: '#efefef',
    messageColor: '#efefef',
    icon: 'Fontawesome',
    iconColor: '#efefef',
});

//加载完成后执行
window.addEventListener('load', function () {

    //载入动画
    //Preload Animation
    $('.preload-customize').attr('class', 'loaded');
    $('.flex-center').attr('class', 'loaded');
    //Original Preload Animation
    $('#loading-box').attr('class', 'loaded');
    //Sakurairo Preload Animation
    $('#preload').attr('class', 'loaded');
    $('#bg').css("cssText", "transform: scale(1);filter: blur(0px);transition: ease 1.5s;");
    $('.cover').css("cssText", "opacity: 1;transition: ease 1.5s;");
    $('#section').css("cssText", "transform: scale(1) !important;opacity: 1 !important;filter: blur(0px) !important");

    //用户欢迎
    setTimeout(function () {
        iziToast.show({
            timeout: 2500,
            icon: false,
            title: hello,
            message: '欢迎来到我的主页'
        });
    }, 800);

    //延迟加载音乐播放器
    var element = document.createElement("script");
    element.src = "./js/music.js";
    document.body.appendChild(element);

    //中文字体缓加载-此处写入字体源文件
    const font = new FontFace(
        "MiSans",
        "url(" + "https://api.bwmc.live/fonts/MiSans-Regular.woff2" + ")"
        //"url(" + "./font/MiSans-Regular.woff2" + ")"
    );
    document.fonts.add(font);

}, false)

setTimeout(function () {
    $('#loading-text').html("字体及文件加载可能需要一定时间")
}, 3000);

//火狐浏览器独立样式
if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.href = './css/firefox.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    head.appendChild(link);
    window.addEventListener('load', function () {
        setTimeout(function () {
            iziToast.show({
                timeout: 8000,
                icon: "fa-solid fa-circle-exclamation",
                message: '您正在使用火狐浏览器，部分功能可能不支持'
            });
        }, 3800);
    }, false)
}

//获取一言
fetch('https://v1.hitokoto.cn?max_length=24')
    .then(response => response.json())
    .then(data => {
        $('#hitokoto_text').html(data.hitokoto)
        $('#from_text').html(data.from)
    })
    .catch(console.error)

var times = 0;
$('#hitokoto').click(function () {
    if (times == 0) {
        times = 1;
        var index = setInterval(function () {
            times--;
            if (times == 0) {
                clearInterval(index);
            }
        }, 1000);
        fetch('https://v1.hitokoto.cn?max_length=24')
            .then(response => response.json())
            .then(data => {
                $('#hitokoto_text').html(data.hitokoto)
                $('#from_text').html(data.from)
            })
            .catch(console.error)
    } else {
        iziToast.show({
            timeout: 2000,
            icon: "fa-solid fa-circle-exclamation",
            message: '你点太快了吧'
        });
    }
});

const add_id = "gjefqrrkxtliwpqp"; // app_id
const app_secret = "VkRpVEI5MU1FTEJCOUM4SUlWSC8yUT09"; // app_secret
const key = "f76f94fe1ff64b14933c34f305f50dde" // key
function getWeather() {
    fetch("https://www.mxnzp.com/api/ip/self?app_id=" + add_id + "&app_secret=" + app_secret)
        .then(response => response.json())
        .then(data => {
            let str = data.data.city
            let city = str.replace(/市/g, '')
            $('#city_text').html(city);
            fetch("https://geoapi.qweather.com/v2/city/lookup?location=" + city + "&number=1&key=" + key)
                .then(response => response.json())
                .then(location => {
                    let id = location.location[0].id
                    fetch("https://devapi.qweather.com/v7/weather/now?location=" + id + "&key=" + key)
                        .then(response => response.json())
                        .then(weather => {
                            $('#wea_text').html(weather.now.text)
                            $('#tem_text').html(weather.now.temp + "°C&nbsp;")
                            $('#win_text').html(weather.now.windDir)
                            $('#win_speed').html(weather.now.windScale + "级")
                        })
                })
        })
        .catch(console.error);
}
function getRelease() {
   fetch("https://api.bwmc.live/Kusunoki/Release/latest")
   .then(response => response.json())
   .then(data => {
    let releases = data.tag_name
    let latest_link = "https://github.com/Shiroiame-Kusu/Kusunoki/archive/refs/tags/" + releases + ".zip"
    window.location.href = latest_link
   })
}
function getCurrentVer(){
    var current_version = document.getElementById("current-version")
    var version_badge = "https://img.shields.io/badge/-" + final_version_img + "-0078D6?style=flat-square&logo=github"
    current_version.innerHTML = current_version.innerHTML + "<a href='https://github.com/Shiroiame-Kusu' target='_blank'><img src='" + version_badge + "' /> </a>"
}
getCurrentVer();
getWeather();

//获取时间
var t = null;
t = setTimeout(time, 1000);

function time() {
    clearTimeout(t);
    dt = new Date();
    var y = dt.getYear() + 1900;
    var mm = dt.getMonth() + 1;
    var d = dt.getDate();
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var day = dt.getDay();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    //document.getElementById("time").innerHTML = y + "&nbsp;年&nbsp;" + mm + "&nbsp;月&nbsp;" + d + "&nbsp;日&nbsp;" + "<span class='weekday'>" + weekday[day] + "</span><br>" + "<span class='time-text'>" + h + ":" + m + ":" + s + "</span>";
    $("#time").html(y + "&nbsp;年&nbsp;" + mm + "&nbsp;月&nbsp;" + d + "&nbsp;日&nbsp;" + "<span class='weekday'>" + weekday[day] + "</span><br>" + "<span class='time-text'>" + h + ":" + m + ":" + s + "</span>");
    t = setTimeout(time, 1000);
}

//链接提示文字
$("#social").mouseover(function () {
    $("#social").css({
        "background": "rgb(0 0 0 / 25%)",
        'border-radius': '6px',
        "backdrop-filter": "blur(5px)"
    });
    $("#link-text").css({
        "display": "block",
    });
}).mouseout(function () {
    $("#social").css({
        "background": "none",
        "border-radius": "6px",
        "backdrop-filter": "none"
    });
    $("#link-text").css({
        "display": "none"
    });
});

//社交链接区域显示文本
document.getElementById("link-text").innerHTML = document.getElementById("link-text").innerHTML + mouseout_content
$("#github").mouseover(function () {
    $("#link-text").html(github_content);
}).mouseout(function () {
    $("#link-text").html(mouseout_content);
});
$("#qq").mouseover(function () {
    $("#link-text").html(qq_content);
}).mouseout(function () {
    $("#link-text").html(mouseout_content);
});
$("#email").mouseover(function () {
    $("#link-text").html(email_content);
}).mouseout(function () {
    $("#link-text").html(mouseout_content);
});
$("#telegram").mouseover(function () {
    $("#link-text").html(tg_content);
}).mouseout(function () {
    $("#link-text").html(mouseout_content);
});
$("#twitter").mouseover(function () {
    $("#link-text").html(twitter_content);
}).mouseout(function () {
    $("#link-text").html(mouseout_content);
});
$("#bilibili").mouseover(function () {
    $("#link-text").html(bilibili_content);
}).mouseout(function () {
    $("#link-text").html(mouseout_content);
});

document.getElementById('change').innerHTML = document.getElementById('change').innerHTML + change_content1
document.getElementById('change1').innerHTML = document.getElementById('change1').innerHTML + change_content2
//更多页面切换
$('#switchmore').on('click', function () {
    showmore = !showmore;
    if (showmore && $(document).width() >= 990) {
        $('#container').attr('class', 'container mores');
        $("#change").html(change_content_click1);
        $("#change1").html(change_content_click2);
    } else {
        $('#container').attr('class', 'container');
        $("#change").html(change_content1);
        $("#change1").html(change_content2);
    }
});

//更多页面关闭按钮
$('#close').on('click', function () {
    $('#switchmore').click();
});

//移动端菜单栏切换
$('#switchmenu').on('click', function () {
    switchmenu = !switchmenu;
    if (switchmenu) {
        $('#row').attr('class', 'row menus');
        $("#menu").html("<i class='fa-solid fa-xmark'></i>");
    } else {
        $('#row').attr('class', 'row');
        $("#menu").html("<i class='fa-solid fa-bars'></i>");
    }
});

//更多弹窗页面
$('#openmore').on('click', function () {
    $('#box').css("display", "block");
    $('#row').css("display", "none");
    $('#more').css("cssText", "display:none !important");
});
$('#closemore').on('click', function () {
    $('#box').css("display", "none");
    $('#row').css("display", "flex");
    $('#more').css("display", "flex");
});

//监听网页宽度
window.addEventListener('load', function () {
    window.addEventListener('resize', function () {
        //关闭移动端样式
        if (window.innerWidth >= 600) {
            $('#row').attr('class', 'row');
            $("#menu").html("<i class='fa-solid fa-bars'></i>");
            //移除移动端切换功能区
            $('#rightone').attr('class', 'row rightone');
        }

        if (window.innerWidth <= 990) {
            //移动端隐藏更多页面
            $('#container').attr('class', 'container');
            $("#change").html(change_content1);
            $("#change1").html(change_content2);

            //移动端隐藏弹窗页面
            $('#box').css("display", "none");
            $('#row').css("display", "flex");
            $('#more').css("display", "flex");
        }
    })
})

//移动端切换功能区
$('#changemore').on('click', function () {
    changemore = !changemore;
    if (changemore) {
        $('#rightone').attr('class', 'row menus mobile');
    } else {
        $('#rightone').attr('class', 'row menus');
    }
});

//更多页面显示关闭按钮
$("#more").hover(function () {
    $('#close').css("display", "block");
}, function () {
    $('#close').css("display", "none");
})

//屏蔽右键
document.oncontextmenu = function () {
    iziToast.show({
        timeout: 2000,
        icon: "fa-solid fa-circle-exclamation",
        message: '为了浏览体验，本站禁用右键'
    });
    return false;
}

//自动变灰
var myDate = new Date;
var mon = myDate.getMonth() + 1;
var date = myDate.getDate();
var days = ['4.4', '5.12', '7.7', '9.9', '9.18', '12.13'];
for (var day of days) {
    var d = day.split('.');
    if (mon == d[0] && date == d[1]) {
        document.write(
            '<style>html{-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);_filter:none}</style>'
        )
        $("#change").html("Silence&nbsp;in&nbsp;silence");
        $("#change1").html("今天是中国国家纪念日，全站已切换为黑白模式");
        window.addEventListener('load', function () {
            iziToast.show({
                timeout: 14000,
                icon: "fa-solid fa-candle-holder",
                message: '今天是中国国家纪念日'
            });
        }, false);
    }
    else{
        var KFC = document.createElement("script");
        KFC.src = "https://cdn.kusu.moe/KFC-Crazy-Thursday/KFC-crazy-thursday-NO-INSERT.js";
        document.body.appendChild(KFC);
    }
}

//控制台输出

var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(255,137,241);
`
var styleTitle2 = `
font-size:12px;
color: rgb(153,248,255);
`
var styleContent = `
color: rgb(153,248,255);
`
var styleContent0 = `
color: rgb(0,255,0);
`

var title1 = 'Kusunoki-楠'
var title2 = 'Powered by Shiroiame Kusu'
var content = `
版 本 号：` + final_version + `
更新日期：` + final_date + `
更新内容：（小版本都是小修小补）
2.1：提供更好的自定义设置
2.0：项目正式更名为“Kusunoki-楠”
1.8.1：增加两种预加载动画（共计四种）
1.8：更改预加载动画
（从Sakurairo搬过来的，瞳宝别打我wwwwwwwww）
1.7.1：修复天气api
1.7：增加PWA支持

主页:  https://bwmc.live
Github:  https://github.com/Shiroiame-Kusu/Kusunoki
邮箱：kusu@kusu.moe

`
var content0 = `
Based on https://github.com/imsyy/home
Preload Animation based on https://github.com/mirai-mamori/Sakurairo
                           https://github.com/CiroLee/html_css_javascript
`
console.log(`%c${title1} %c${title2}
%c${content} %c${content0}`, styleTitle1, styleTitle2, styleContent, styleContent0)