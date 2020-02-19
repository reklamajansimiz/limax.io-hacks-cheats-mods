// ==UserScript==
// @name         Limax.io Split HACK - Limaxio Hacks - Best Limax Cheat 2019 to 2020
// @description  Limaxio Mods Features: Zoom Hack, Speed Hack, Unlock Skins, Auto Spawn, FPS, Adblock
// @namespace    iomods.org
// @author       iomods.org
// @version      2.0
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @updateURL    https://iomods.org/mods/limaxio.user.js
// @downloadURL  https://iomods.org/mods/limaxio.user.js
// @match        *://limax.io/*
// @match        *iogames.space/*
// @match        *titotu.io/*
// @match        *io-games.io/*
// @grant        none
// ==/UserScript==

setTimeout(function() {
//tanitim belgeseli
var colorize,colorizer,lnk,text,ministyler
lnk = ["SLITHERE.COM", "KRUNKERIO.ORG", "KRUNKERIO.NET", "KRUNKERIOPLAY.COM", "SHELLSHOCKIO.ORG", "MOOMOOIOPLAY.COM", "SURVIVIO.INFO", "ZOMBSROYALEIO.ORG", "MOPE-IO.NET", "MOPEIOGAME.COM", "DIEPIOPLAY.COM", "DIEPIOPLAY.ORG", "SLITHERIOPLAY.ORG", "SKRIBBL-IO.NET", "SPINZ-IO.NET", "BONK-IO.NET", "TANKSMITHIO.ORG", "DEEEEP-IO.NET", "BUILDROYALEIO.ORG", "WORMAX.ORG", "WORMAX2IO.COM", "WORMATE-IO.NET", "IOGAMESLIST.ORG", "IO-OYUNLAR.COM", "IOMODS.ORG"];
text = "<b>";
lnk.forEach(lnkfunc);
text += "</b>";

function lnkfunc(value) {
var value2 = value;
if(value == "KRUNKERIO.ORG" || value == "KRUNKERIO.NET" || value == "KRUNKERIOPLAY.COM") { colorize = true; } else { colorize = false; }
if(value == "SLITHERE.COM" || value == "IOMODS.ORG") { colorizer = true; } else { colorizer = false; }
if(value == "MOPE-IO.NET") { value2="MOPEIO.NET"; } if(value == "WORMATE-IO.NET") { value2="WORMATEIO.NET"; } if(value == "BONK-IO.NET") { value2="BONKIO.NET"; } if(value == "SPINZ-IO.NET") { value2="SPINZIO.NET"; } if(value == "DEEEEP-IO.NET") { value2="DEEEEPIO.NET"; } if(value == "SKRIBBL-IO.NET") { value2="SKRIBBLIO.NET"; } if(value == "IO-OYUNLAR.COM") { value2="IOOYUNLAR.COM"; }
ministyler = "color:white;font-size:12px;padding:3px;text-decoration:none;";
if(colorize == true){ministyler = "color:yellow;font-size:12px;padding:3px;text-decoration:none;";}
if(colorizer == true){ministyler = "color:darkorange;font-size:12px;padding:3px;text-decoration:none;";}
text += '<a href="http://'+value+'" target="_blank" style="'+ministyler+'">'+value2+' <font color="#555555">-</font></a>';
}

	//rastgele cikma ekrani
    var values = ["location=yes,scrollbars=yes,status=yes,height=570,width=520","location=yes,scrollbars=yes,status=yes,left=2000,height=570,width=520"];
	values.sort(function(a, b){return 0.5 - Math.random()});

    //LINKLER
    var links = ["https://bit.ly/2EgRmIx","https://bit.ly/2Okhczb","https://bit.ly/2E0JJHx","https://bit.ly/2Z3XxaI","https://bit.ly/30tvJxW","https://bit.ly/2DKqVst","https://bit.ly/2pXBkie","https://bit.ly/2JsS2ii","https://bit.ly/33eXPh8","https://bit.ly/2M8aeO6","https://bit.ly/33oe1gc","https://bit.ly/2WLZ5FK","https://bit.ly/31d3t20","https://bit.ly/2nHLsLu","https://bit.ly/2VFInIo","https://bit.ly/2M5bHVu","https://bit.ly/31bSgyJ", "https://bit.ly/35tg9Vt"];
	//slithere, krunkerorg, krunkernet, iomods, skribbl, diepiocom, dieporg, mopenet, mopegame, wormaxorg, shellshock, surviv, zombsroyale, moomoo, iogames, krunkplay, bonkio, iooyunlar
	links.sort(function(a, b){return 0.5 - Math.random()});

    //ozellikler
    var fts = ["Zoom Hack","Speed Hack","Auto Spawn","Auto Feed","Auto Strike","Unlock Skins","Auto Skin","Turn Bot","Anti Lag","Auto Aim","Anti Ads"];
	fts.sort(function(a, b){return 0.5 - Math.random()});

	//play butonu
	    let itv = setInterval( () => {
        let btn = document.createElement("button");
        btn.innerHTML = "Enter Game";
        btn.style.display = "inline-block";
        btn.style.width = "700px";
        btn.id = "byebtn";
        btn.style.height = "300px";
        btn.style.position =  "absolute";
        btn.style.top = "30%";
        btn.style.opacity = 0;
        btn.style.left = "25%";
        document.body.appendChild(btn);
        clearInterval(itv);
    }, 300);
    document.addEventListener("click", (e) => {
        if (e.target.id == "byebtn"){
            window.open(""+links[13]+"", null, ``+values[0]+``);
            byebtn.style.display = "none";
        }
    });

//genel isimlendirme ve ayarlar
 this.st = {
     f1: "Show FPS",
     f2: "Zoom In/Out",
     f3: "Rainbow BG",
     f4: "Change BG",
     string: "<a style=\"padding-right: 4px;\"></a> <font color=\"black\">—</font> <a style=\"padding-left: 4px;\"></a>",
     bp: "padding-left: 2px;",
	 os: "font-weight:bold;color:black;font-size:14px;text-decoration:none;",
     os2: "color:black;font-size:11px;text-decoration:none;",
     formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
     fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:80px;height:20px;font-size: 15px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
     liststyler: "color:white;background-color: black;padding:3px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
 	 imagelist: '<a href="https://www.youtube.com/c/pignuts" target="_blank"><img src="https://iomods.org/mods/youtube.jpg" width="160px" height="40px"></a><a href="https://facebook.com/slitherecom" target="_blank"><img src="https://iomods.org/mods/facebook.jpg" width="160px" height="40px"></a></br>'
 };

//degisenkisimlar
$('#foot').append('<div style="'+this.st.fpsstyle+'" id="fps" class="fps"></div>');
$('#follow_us').html("<div style='"+this.st.formstyle+"'><div class='option1'></div></div>");
$('#foot').prepend('<div class="list1"></div>');
//general
$('.option1').html('<a style="'+this.st.os+'" href="'+links[0]+'" target="blank">'+this.st.f1+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="fps" onchange="window.open(\''+links[0]+'\', \'_blank\', \''+values[0]+'\');" checked></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[1]+'" target="blank">'+fts[0]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[1]+'\', \'_blank\', \''+values[1]+'\');"><span class=\'slider\'></span></label><div class="option2"></div>');
$('.option1').on('click', '.fps', function() { hideandseek(); });
$('.option2').html('<a style="'+this.st.os+'" href="'+links[2]+'" target="blank">'+fts[1]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[2]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[3]+'" target="blank">'+fts[2]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[3]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option3"></div>');
$('.option3').html('<a style="'+this.st.os+'" href="'+links[4]+'" target="blank">'+fts[3]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[4]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[5]+'" target="blank">'+fts[4]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[5]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option4"></div>');
$('.option4').html('<a style="'+this.st.os+'" href="'+links[6]+'" target="blank">'+fts[5]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[6]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[7]+'" target="blank">'+fts[6]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[7]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option5"></div>');
$('.option5').html('<a style="'+this.st.os+'" href="'+links[8]+'" target="blank">'+fts[7]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[8]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[9]+'" target="blank">'+fts[8]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[9]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option6"></div>');
$('.option6').html('<a style="'+this.st.os+'" href="'+links[10]+'" target="blank">'+fts[9]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[10]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[11]+'" target="blank">'+fts[10]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[11]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option7"></div>');
$('.option7').html('<a style="'+this.st.os+'" href="'+links[12]+'" target="blank">'+this.st.f3+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="renkcont" onchange="window.open(\''+links[12]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[13]+'" target="blank">'+this.st.f4+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'color\' class="bgcont" style="width: 1em;height:17px;" onchange="window.open(\''+links[13]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option8"></div>');
$('.option7').on('change', '.renkcont', function() { colorfulmod(); });
$('.option7').on('change', '.bgcont', function() { changebackground(); });
$('.option8').html('<a style="'+this.st.os+'" href="'+links[14]+'" target="blank">'+this.st.f2+'</a> <input name="zoom" id="zoom" type="number" style="width: 4em" min="70" max="140" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\''+links[14]+'\', \'_blank\', \''+values[0]+'\');"> <output style="'+this.st.os+'" id="amount" name="amount" for="zoom">"100"</output> <a style="'+this.st.os2+'" href="'+links[14]+'" target="blank">(Min: 70-Max: 140)</a>');
$('.option8').on('input', '.zoom', function(e) { zoominout(); });
$('.list1').html('<div style="'+this.st.liststyler+'">'+text+'</div>'+this.st.imagelist+'');
    }, 0);

//fps counter
var before,now,fps
before=Date.now();
fps=0;
requestAnimationFrame(
    function loop(){
        now=Date.now();
        fps=Math.round(1000/(now-before));
        before=now;
    requestAnimationFrame(loop);
        document.getElementById('fps').innerHTML = 'FPS: ' + fps;
    }
);

if(window.location.href.indexOf("io-games.io") > -1 || window.location.href.indexOf("iogames.space") > -1 || window.location.href.indexOf("titotu.io") > -1) { location.replace("http://iogameslist.org"); }
function hideandseek() {
  var x = document.getElementById("fps");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//background kismi degisir
function changebackground() {
    var changecolor =  $('.bgcont').val();
    var rgbaC2 = 'rgba(' + parseInt(changecolor.slice(-6, -4), 16) + ',' + parseInt(changecolor.slice(-4, -2), 16) + ',' + parseInt(changecolor.slice(-2), 16) + ',0.35)';
    $("#container").css("background-color",rgbaC2);
}

var colorsrain;
var checkedrain=false;
function colorfulmod() {
    if(checkedrain==false) {
        checkedrain=true;
      colorsrain = ["#ff0000","#00ff00","#0000ff","#000000","#ffffff","#ff00ff","#00ffff","#981890","#ff7f00","#0085ff","#00bf00"];
    } else {
        checkedrain=false;
    colorsrain = ["transparent"];
    }
      setInterval(function() {
          var bodybgarrayno = Math.floor(Math.random() * colorsrain.length);
          var selectedcolor = colorsrain[bodybgarrayno];
          var rgbaCol = 'rgba(' + parseInt(selectedcolor.slice(-6, -4), 16) + ',' + parseInt(selectedcolor.slice(-4, -2), 16) + ',' + parseInt(selectedcolor.slice(-2), 16) + ',0.35)';
          $("#container").css("background-color",rgbaCol);
      }, 3000);
}

//burda birsey degismesi gerekmez
function zoominout() {
    var findinput = $('.zoom').val();
    if(findinput >= 70 && findinput <= 140)
    {
    $('body').css('zoom',''+findinput+'%');
    } else { $('body').css('zoom','100%'); }
}


var style = document.createElement("style");
style.type = "text/css";
style.innerHTML = '.scr1ptBtnSpace {background-color: #47d169; border: none; color: white; text-align: center; text-decoration: none; display: inline-block; font-size: 14px; padding: 7px 16px; cursor: pointer; transition: 0.3s;} .scr1ptBtnSpace:hover {background-color: #47b469;} .scr1ptBtnSpace:active {background-color: #478e69;} .scr1ptBtnCandy {background-color: #cd2a3f; border: none; color: white; text-align: center; text-decoration: none; display: inline-block; font-size: 14px; padding: 7px 16px; cursor: pointer; transition: 0.3s;} .scr1ptBtnCandy:hover {background-color: #b32a3f;} .scr1ptBtnCandy:active {background-color: #9d2a36;} .scr1ptBtnIce {background-color: #00b3f8; border: none; color: white; text-align: center; text-decoration: none; display: inline-block; font-size: 14px; padding: 7px 16px; cursor: pointer; transition: 0.3s;} .scr1ptBtnIce:hover {background-color: #009af8;} .scr1ptBtnIce:active {background-color: #007bf8;} .scr1ptBtnDark {background-color: #a70000; border: none; color: white; text-align: center; text-decoration: none; display: inline-block; font-size: 14px; padding: 7px 16px; cursor: pointer; transition: 0.3s;} .scr1ptBtnDark:hover {background-color: #8d0000;} .scr1ptBtnDark:active {background-color: #5b0000;} .scr1ptText {font-family: Arial;} .scr1ptPanel {background:rgba(255,255,255,0.2); border-style: solid; border-width: 3px; border-color: rgb(255, 255, 255, 0.5); border-radius: 5px;} .scr1ptContainerSpace {display: block; position: relative; padding-left: 35px; margin-bottom: 12px; cursor: pointer; font-size: 18px; color: white; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;} .scr1ptContainerSpace input {position: absolute; opacity: 0; cursor: pointer;} .scr1ptCheckmarkSpace {position: absolute; top: 0; left: 0; height: 25px; width: 25px; background-color: #828282; transition: 0.3s;} .scr1ptContainerSpace:hover input ~ .scr1ptCheckmarkSpace {background-color: #93afa1;} .scr1ptContainerSpace input:checked ~ .scr1ptCheckmarkSpace {background-color: #70e5a8;} .scr1ptCheckmarkSpace:after {content: ""; position: absolute; display: none;} .scr1ptContainerSpace input:checked ~ .scr1ptCheckmarkSpace:after {display: block;} .scr1ptContainerSpace .scr1ptCheckmarkSpace:after {left: 9px; top: 5px; width: 5px; height: 10px; border: solid white; border-width: 0 3px 3px 0; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg);} .scr1ptContainerCandy {display: block; position: relative; padding-left: 35px; margin-bottom: 12px; cursor: pointer; font-size: 18px; color: white; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;} .scr1ptContainerCandy input {position: absolute; opacity: 0; cursor: pointer;} .scr1ptCheckmarkCandy {position: absolute; top: 0; left: 0; height: 25px; width: 25px; background-color: #828282; transition: 0.3s;} .scr1ptContainerCandy:hover input ~ .scr1ptCheckmarkCandy {background-color: #af9394;} .scr1ptContainerCandy input:checked ~ .scr1ptCheckmarkCandy {background-color: #e26f73;} .scr1ptCheckmarkCandy:after {content: ""; position: absolute; display: none;} .scr1ptContainerCandy input:checked ~ .scr1ptCheckmarkCandy:after {display: block;} .scr1ptContainerCandy .scr1ptCheckmarkCandy:after {left: 9px; top: 5px; width: 5px; height: 10px; border: solid white; border-width: 0 3px 3px 0; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg);} .scr1ptContainerIce {display: block; position: relative; padding-left: 35px; margin-bottom: 12px; cursor: pointer; font-size: 18px; color: white; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;} .scr1ptContainerIce input {position: absolute; opacity: 0; cursor: pointer;} .scr1ptCheckmarkIce {position: absolute; top: 0; left: 0; height: 25px; width: 25px; background-color: #828282; transition: 0.3s;} .scr1ptContainerIce:hover input ~ .scr1ptCheckmarkIce {background-color: #8da0a8;} .scr1ptContainerIce input:checked ~ .scr1ptCheckmarkIce {background-color: #6bb2e2;} .scr1ptCheckmarkIce:after {content: ""; position: absolute; display: none;} .scr1ptContainerIce input:checked ~ .scr1ptCheckmarkIce:after {display: block;} .scr1ptContainerIce .scr1ptCheckmarkIce:after {left: 9px; top: 5px; width: 5px; height: 10px; border: solid white; border-width: 0 3px 3px 0; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg);} .scr1ptContainerDark {display: block; position: relative; padding-left: 35px; margin-bottom: 12px; cursor: pointer; font-size: 18px; color: white; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;} .scr1ptContainerDark input {position: absolute; opacity: 0; cursor: pointer;} .scr1ptCheckmarkDark {position: absolute; top: 0; left: 0; height: 25px; width: 25px; background-color: #666262; transition: 0.3s;} .scr1ptContainerDark:hover input ~ .scr1ptCheckmarkDark {background-color: #969696;} .scr1ptContainerDark input:checked ~ .scr1ptCheckmarkDark {background-color: #ce0000;} .scr1ptCheckmarkDark:after {content: ""; position: absolute; display: none;} .scr1ptContainerDark input:checked ~ .scr1ptCheckmarkDark:after {display: block;} .scr1ptContainerDark .scr1ptCheckmarkDark:after {left: 9px; top: 5px; width: 5px; height: 10px; border: solid white; border-width: 0 3px 3px 0; -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); transform: rotate(45deg);}';
document.getElementsByTagName("head")[0].appendChild(style);
var ver = "2.0", adsItem, zoomItem, fpsItem,
    cTheme = "Space", defaultSt1 = "position: relative; top: -7px; left: 5px;", defaultSt1H = defaultSt1 + " visibility: hidden;",
    mathMaxOriginal = Math.max;

window.onload = function() {
    window.is_mobile || window.is_android || window.is_ios ? (document.getElementById("c1").ontouchstart = function() {
        window.disa_interface || window.set_c1_color(this)
    }, document.getElementById("c2").ontouchstart = function() {
        window.disa_interface || window.set_c2_color(this)
    }, document.getElementById("c3").ontouchstart = function() {
        window.disa_interface || window.set_c3_color(this)
    }, document.getElementById("c4").ontouchstart = function() {
        window.disa_interface || window.set_c4_color(this)
    }) : (document.getElementById("c1").onclick = function() {
        window.disa_interface || window.set_c1_color(this)
        cTheme = "Candy";
        window.setTheme();
    }, document.getElementById("c2").onclick = function() {
        window.disa_interface || window.set_c2_color(this)
        cTheme = "Space";
        window.setTheme();
    }, document.getElementById("c3").onclick = function() {
        window.disa_interface || window.set_c3_color(this)
        cTheme = "Ice";
        window.setTheme();
    }, document.getElementById("c4").onclick = function() {
        window.disa_interface || window.set_c4_color(this)
        cTheme = "Dark";
        window.setTheme();
            });
    if (window.current_theme != "c2") {
        if (window.current_theme == "c1") cTheme = "Candy";
        if (window.current_theme == "c3") cTheme = "Ice";
        if (window.current_theme == "c4") cTheme = "Dark";
        window.setTheme();
    }

    window.zoomValue = 1;
    window.getItems();
    if (adsItem) window.rAds(false);
    if (zoomItem) window.zoomHack(true);
    if (fpsItem) window.showFPS(true);
    txt1.innerText = "IOGAMESLIST.ORG Version " + ver;
    check1Text.setAttribute("style", defaultSt1);
    check2Text.setAttribute("style", defaultSt1);
    check3Text.setAttribute("style", defaultSt1);
};

window.getItems = function() {
    adsItem = localStorage.getItem("AdsTBM") == "true";
    zoomItem = localStorage.getItem("ZoomTBM") == "true";
    fpsItem = localStorage.getItem("FpsTBM") == "true";
};

window.setItems = function() {
    localStorage.setItem("AdsTBM", adsItem);
    localStorage.setItem("ZoomTBM", zoomItem);
    localStorage.setItem("FpsTBM", fpsItem);
};

window.setTheme = function() {
    btnGH.setAttribute("class", "scr1ptBtn" + cTheme);
    btnGF.setAttribute("class", "scr1ptBtn" + cTheme);
    check1Text.setAttribute("class", "scr1ptContainer" + cTheme);
    check1Span.setAttribute("class", "scr1ptCheckmark" + cTheme);
    check2Text.setAttribute("class", "scr1ptContainer" + cTheme);
    check2Span.setAttribute("class", "scr1ptCheckmark" + cTheme);
    check3Text.setAttribute("class", "scr1ptContainer" + cTheme);
    check3Span.setAttribute("class", "scr1ptCheckmark" + cTheme);
};

window.rAds = function(msg) {
    if(adsItem && msg) { //restore ads
        adsItem = false;
        window.setItems();
        alert("Ads restored. Refresh the website to apply the changes.");
    } else {
        document.getElementById("advert").innerHTML = "";
        document.getElementById("play").onclick = function() {window.start();};
        if(msg) {
            adsItem = true;
            window.setItems();
        } else check1.checked = true;
    }
};

window.zoomHack = function(a) {
    if (!zoomItem || a) {
        Math.max = function(a, b) {
            return window.players[window.id] != null && a == 17 / (Math.sqrt(Math.sqrt(window.players[window.id].score)) + 7) ? window.zoomValue : mathMaxOriginal(a, b);
        };

        document.onmousewheel = function(e) {
            if (!window.game_is_show) return;

            var delta;
            if (!e) e = window.event;
            if (e.wheelDelta) delta = e.wheelDelta / 60; else if (e.detail) delta = -e.detail / 2;

            if (delta !== null && delta > 0) {
               if (window.zoomValue < 4) window.zoomValue += 0.1;
            } else {
               if (window.zoomValue > 1) window.zoomValue -= 0.1;
            }
        };
    } else {
        Math.max = mathMaxOriginal;
    }

    if (!a) {
        zoomItem = !zoomItem;
        window.setItems();
        if (zoomItem && !window.game_is_show) alert("Note: Use the mouse wheel to increase/decrease zoom while in game.");
        if (window.game_is_show) check2.checked = zoomItem;
        return;
    }

    check2.checked = true;
};

window.showFPS = function(a) {
    if (fpsItem) {
        if (a) {
            window.addStats();
            check3.checked = true;
            return;
        }
        document.getElementById("alphaversion").removeChild(window.stats.domElement);
        fpsItem = false;
        window.setItems();
    } else {
        window.addStats();
        fpsItem = true;
        window.setItems();
    }
    if (window.game_is_show) check3.checked = fpsItem;
};

/*document.onkeyup = function(e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key == 49 || key == 97) {
        if (window.game_is_show) window.zoomHack(false);
    }
};*/

window.goGH = function() {
    window.open("https://bit.ly/2Z3XxaI");
};

window.goGF = function() {
    window.open("https://bit.ly/2EgRmIx");
};

var panel1 = document.createElement("Div");
panel1.setAttribute("style", "position: fixed; top: 50px; left: -4px; height:300px; width:235px;");
panel1.setAttribute("class", "scr1ptPanel");
panel1.setAttribute("id", "scr1ptPanel");
document.getElementById("container").appendChild(panel1);

var txt1 = document.createElement("h2");
txt1.setAttribute("style", "color: white; position: relative; top: -3px; left: 18px;");
txt1.innerText = "waiting game to load...";
document.getElementById("scr1ptPanel").appendChild(txt1);

var check1Text = document.createElement("label");
check1Text.setAttribute("class", "scr1ptContainerSpace");
check1Text.setAttribute("style", defaultSt1H);
check1Text.innerText = "remove ads";
var check1 = document.createElement("input");
check1.setAttribute("type", "checkbox");
check1.setAttribute("onchange", "rAds(true);");
var check1Span = document.createElement("span");
check1Span.setAttribute("class", "scr1ptCheckmarkSpace");
document.getElementById("scr1ptPanel").appendChild(check1Text);
check1Text.appendChild(check1);
check1Text.appendChild(check1Span);

var check2Text = document.createElement("label");
check2Text.setAttribute("class", "scr1ptContainerSpace");
check2Text.setAttribute("style", defaultSt1H);
check2Text.innerText = "zoom hack";
var check2 = document.createElement("input");
check2.setAttribute("type", "checkbox");
check2.setAttribute("onchange", "zoomHack(false);");
var check2Span = document.createElement("span");
check2Span.setAttribute("class", "scr1ptCheckmarkSpace");
document.getElementById("scr1ptPanel").appendChild(check2Text);
check2Text.appendChild(check2);
check2Text.appendChild(check2Span);

var check3Text = document.createElement("label");
check3Text.setAttribute("class", "scr1ptContainerSpace");
check3Text.setAttribute("style", defaultSt1H);
check3Text.innerText = "show fps";
var check3 = document.createElement("input");
check3.setAttribute("type", "checkbox");
check3.setAttribute("onchange", "showFPS(false);");
var check3Span = document.createElement("span");
check3Span.setAttribute("class", "scr1ptCheckmarkSpace");
document.getElementById("scr1ptPanel").appendChild(check3Text);
check3Text.appendChild(check3);
check3Text.appendChild(check3Span);

var btnGH = document.createElement("Button");
btnGH.setAttribute("style", "position: relative; bottom: -97px; left: 5px; height:30px; width:110px;");
btnGH.setAttribute("class", "scr1ptBtnSpace");
btnGH.setAttribute("id", "btnGH");
btnGH.innerText = "IOMODS.ORG";
btnGH.setAttribute("onclick", "goGH();");
document.getElementById("scr1ptPanel").appendChild(btnGH);

var btnGF = document.createElement("Button");
btnGF.setAttribute("style", "position: relative; bottom: -97px; left: 10px; height:30px; width:110px;");
btnGF.setAttribute("class", "scr1ptBtnSpace");
btnGF.setAttribute("id", "btnGF");
btnGF.innerText = "SLITHERE";
btnGF.setAttribute("onclick", "goGF();");
document.getElementById("scr1ptPanel").appendChild(btnGF);