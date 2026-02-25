goog.provide('wm.frontend.core');
wm.frontend.core.labels = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Diversifica\u00E7\u00E3o","Liquidez","Retorno","Efici\u00EAncia","Prote\u00E7\u00E3o"], null);
wm.frontend.core.default_tokens = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radar","radar",-1323428042),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"baseFill","baseFill",-2009356028),"#efefef",new cljs.core.Keyword(null,"baseStrokeColor","baseStrokeColor",-610053180),"#e1e1e1",new cljs.core.Keyword(null,"angleLineColor","angleLineColor",441496909),"#1f023014",new cljs.core.Keyword(null,"seriesBorderColor","seriesBorderColor",1122628863),"#820ad1",new cljs.core.Keyword(null,"seriesFillColor","seriesFillColor",-279068884),"rgba(130,10,209,0.4)",new cljs.core.Keyword(null,"seriesBorderWidthPx","seriesBorderWidthPx",-1134103368),3.77356,new cljs.core.Keyword(null,"seriesBorderJoin","seriesBorderJoin",-855406145),"round"], null)], null);
wm.frontend.core.rand_score = (function wm$frontend$core$rand_score(){
return ((20) + cljs.core.rand_int((81)));
});
wm.frontend.core.random_scores = (function wm$frontend$core$random_scores(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"diversificacao","diversificacao",1201141686),wm.frontend.core.rand_score(),new cljs.core.Keyword(null,"liquidez","liquidez",-1404152955),wm.frontend.core.rand_score(),new cljs.core.Keyword(null,"retorno","retorno",-183994829),wm.frontend.core.rand_score(),new cljs.core.Keyword(null,"eficiencia","eficiencia",113943536),wm.frontend.core.rand_score(),new cljs.core.Keyword(null,"protecao","protecao",-1864922423),wm.frontend.core.rand_score()], null);
});
if((typeof wm !== 'undefined') && (typeof wm.frontend !== 'undefined') && (typeof wm.frontend.core !== 'undefined') && (typeof wm.frontend.core.state_STAR_ !== 'undefined')){
} else {
wm.frontend.core.state_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scores","scores",-1267421800),wm.frontend.core.random_scores(),new cljs.core.Keyword(null,"chart","chart",1173225425),null], null));
}
wm.frontend.core.chartjs_urls = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://cdn.jsdelivr.net/npm/chart.js@4.5.1/dist/chart.umd.min.js","https://unpkg.com/chart.js@4.5.1/dist/chart.umd.min.js","https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.5.1/chart.umd.min.js"], null);
wm.frontend.core.normalize_score = (function wm$frontend$core$normalize_score(v){
var n = Number(v);
return (((n - (1)) * (100)) / (99));
});
wm.frontend.core.ordered_scores = (function wm$frontend$core$ordered_scores(p__19967){
var map__19968 = p__19967;
var map__19968__$1 = cljs.core.__destructure_map(map__19968);
var diversificacao = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19968__$1,new cljs.core.Keyword(null,"diversificacao","diversificacao",1201141686));
var liquidez = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19968__$1,new cljs.core.Keyword(null,"liquidez","liquidez",-1404152955));
var retorno = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19968__$1,new cljs.core.Keyword(null,"retorno","retorno",-183994829));
var eficiencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19968__$1,new cljs.core.Keyword(null,"eficiencia","eficiencia",113943536));
var protecao = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19968__$1,new cljs.core.Keyword(null,"protecao","protecao",-1864922423));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [diversificacao,liquidez,retorno,eficiencia,protecao], null);
});
wm.frontend.core.clear_el_BANG_ = (function wm$frontend$core$clear_el_BANG_(el){
return (el.textContent = "");
});
wm.frontend.core.el = (function wm$frontend$core$el(var_args){
var G__19970 = arguments.length;
switch (G__19970) {
case 1:
return wm.frontend.core.el.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(wm.frontend.core.el.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(tag);
}));

(wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2 = (function (tag,className){
var G__19971 = document.createElement(tag);
(G__19971["className"] = className);

return G__19971;
}));

(wm.frontend.core.el.cljs$lang$maxFixedArity = 2);

wm.frontend.core.set_styles_BANG_ = (function wm$frontend$core$set_styles_BANG_(el,styles){
var seq__19972_19993 = cljs.core.seq(styles);
var chunk__19973_19994 = null;
var count__19974_19995 = (0);
var i__19975_19996 = (0);
while(true){
if((i__19975_19996 < count__19974_19995)){
var vec__19982_19997 = chunk__19973_19994.cljs$core$IIndexed$_nth$arity$2(null, i__19975_19996);
var k_19998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19982_19997,(0),null);
var v_19999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19982_19997,(1),null);
(el.style[cljs.core.name(k_19998)] = v_19999);


var G__20000 = seq__19972_19993;
var G__20001 = chunk__19973_19994;
var G__20002 = count__19974_19995;
var G__20003 = (i__19975_19996 + (1));
seq__19972_19993 = G__20000;
chunk__19973_19994 = G__20001;
count__19974_19995 = G__20002;
i__19975_19996 = G__20003;
continue;
} else {
var temp__5804__auto___20004 = cljs.core.seq(seq__19972_19993);
if(temp__5804__auto___20004){
var seq__19972_20005__$1 = temp__5804__auto___20004;
if(cljs.core.chunked_seq_QMARK_(seq__19972_20005__$1)){
var c__5525__auto___20006 = cljs.core.chunk_first(seq__19972_20005__$1);
var G__20007 = cljs.core.chunk_rest(seq__19972_20005__$1);
var G__20008 = c__5525__auto___20006;
var G__20009 = cljs.core.count(c__5525__auto___20006);
var G__20010 = (0);
seq__19972_19993 = G__20007;
chunk__19973_19994 = G__20008;
count__19974_19995 = G__20009;
i__19975_19996 = G__20010;
continue;
} else {
var vec__19985_20011 = cljs.core.first(seq__19972_20005__$1);
var k_20012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19985_20011,(0),null);
var v_20013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19985_20011,(1),null);
(el.style[cljs.core.name(k_20012)] = v_20013);


var G__20014 = cljs.core.next(seq__19972_20005__$1);
var G__20015 = null;
var G__20016 = (0);
var G__20017 = (0);
seq__19972_19993 = G__20014;
chunk__19973_19994 = G__20015;
count__19974_19995 = G__20016;
i__19975_19996 = G__20017;
continue;
}
} else {
}
}
break;
}

return el;
});
wm.frontend.core.chart_ctor = (function wm$frontend$core$chart_ctor(){
var g = globalThis;
var c = g.Chart;
if(cljs.core.fn_QMARK_(c)){
return c;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = c;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.fn_QMARK_(c.Chart);
} else {
return and__5000__auto__;
}
})())){
return c.Chart;
} else {
return null;

}
}
});
wm.frontend.core.load_script_BANG_ = (function wm$frontend$core$load_script_BANG_(src,onload,onerror){
var s = document.createElement("script");
(s.src = src);

(s.async = true);

s.addEventListener("load",onload);

s.addEventListener("error",onerror);

return document.head.appendChild(s);
});
wm.frontend.core.ensure_chartjs_BANG_ = (function wm$frontend$core$ensure_chartjs_BANG_(done){
if(cljs.core.truth_(wm.frontend.core.chart_ctor())){
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(true) : done.call(null, true));
} else {
var urls = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(wm.frontend.core.chartjs_urls);
var try_next_BANG_ = (function wm$frontend$core$ensure_chartjs_BANG__$_try_next_BANG_(){
var temp__5802__auto__ = cljs.core.first(cljs.core.deref(urls));
if(cljs.core.truth_(temp__5802__auto__)){
var u = temp__5802__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(urls,cljs.core.subvec,(1));

return wm.frontend.core.load_script_BANG_(u,(function (_){
if(cljs.core.truth_(wm.frontend.core.chart_ctor())){
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(true) : done.call(null, true));
} else {
return wm$frontend$core$ensure_chartjs_BANG__$_try_next_BANG_();
}
}),(function (_){
return wm$frontend$core$ensure_chartjs_BANG__$_try_next_BANG_();
}));
} else {
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(false) : done.call(null, false));
}
});
return try_next_BANG_();
}
});
wm.frontend.core.create_figma_base_plugin = (function wm$frontend$core$create_figma_base_plugin(tokens){
var radar = new cljs.core.Keyword(null,"radar","radar",-1323428042).cljs$core$IFn$_invoke$arity$1(tokens);
var plugin = ({});
(plugin["id"] = "figmaRadarBase");

(plugin["beforeDatasetsDraw"] = (function (chart){
var r = chart.scales.r;
if(cljs.core.truth_(r)){
var ctx = chart.ctx;
var n = chart.data.labels.length;
if((n > (0))){
var outer = [];
var n__5593__auto___20018 = n;
var i_20019 = (0);
while(true){
if((i_20019 < n__5593__auto___20018)){
outer.push(r.getPointPositionForValue(i_20019,(100)));

var G__20020 = (i_20019 + (1));
i_20019 = G__20020;
continue;
} else {
}
break;
}

ctx.save();

ctx.beginPath();

var p0_20021 = (outer[(0)]);
ctx.moveTo(p0_20021.x,p0_20021.y);

var n__5593__auto___20022 = (n - (1));
var i_20023 = (0);
while(true){
if((i_20023 < n__5593__auto___20022)){
var p_20024 = (outer[(i_20023 + (1))]);
ctx.lineTo(p_20024.x,p_20024.y);

var G__20025 = (i_20023 + (1));
i_20023 = G__20025;
continue;
} else {
}
break;
}

ctx.closePath();

(ctx.fillStyle = new cljs.core.Keyword(null,"baseFill","baseFill",-2009356028).cljs$core$IFn$_invoke$arity$1(radar));

ctx.fill();

(ctx.strokeStyle = new cljs.core.Keyword(null,"baseStrokeColor","baseStrokeColor",-610053180).cljs$core$IFn$_invoke$arity$1(radar));

(ctx.lineWidth = (1));

(ctx.lineJoin = "miter");

ctx.stroke();

(ctx.strokeStyle = new cljs.core.Keyword(null,"angleLineColor","angleLineColor",441496909).cljs$core$IFn$_invoke$arity$1(radar));

(ctx.lineWidth = (1));

var n__5593__auto___20026 = n;
var i_20027 = (0);
while(true){
if((i_20027 < n__5593__auto___20026)){
var p_20028 = (outer[i_20027]);
ctx.beginPath();

ctx.moveTo(r.xCenter,r.yCenter);

ctx.lineTo(p_20028.x,p_20028.y);

ctx.stroke();

var G__20029 = (i_20027 + (1));
i_20027 = G__20029;
continue;
} else {
}
break;
}

return ctx.restore();
} else {
return null;
}
} else {
return null;
}
}));

(plugin["afterDatasetsDraw"] = (function (chart){
var meta = chart.getDatasetMeta((0));
var points = meta.data;
if(cljs.core.truth_((function (){var and__5000__auto__ = points;
if(cljs.core.truth_(and__5000__auto__)){
return (points.length > (0));
} else {
return and__5000__auto__;
}
})())){
var ctx = chart.ctx;
var desired = new cljs.core.Keyword(null,"seriesBorderWidthPx","seriesBorderWidthPx",-1134103368).cljs$core$IFn$_invoke$arity$1(radar);
if(cljs.core.truth_((function (){var and__5000__auto__ = desired;
if(cljs.core.truth_(and__5000__auto__)){
return (desired > (0));
} else {
return and__5000__auto__;
}
})())){
ctx.save();

ctx.beginPath();

var p0_20030 = (points[(0)]);
ctx.moveTo(p0_20030.x,p0_20030.y);

var n__5593__auto___20031 = (points.length - (1));
var i_20032 = (0);
while(true){
if((i_20032 < n__5593__auto___20031)){
var p_20033 = (points[(i_20032 + (1))]);
ctx.lineTo(p_20033.x,p_20033.y);

var G__20034 = (i_20032 + (1));
i_20032 = G__20034;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.clip();

(ctx.lineJoin = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"seriesBorderJoin","seriesBorderJoin",-855406145).cljs$core$IFn$_invoke$arity$1(radar);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "round";
}
})());

(ctx.lineWidth = (desired * (2)));

(ctx.strokeStyle = new cljs.core.Keyword(null,"seriesBorderColor","seriesBorderColor",1122628863).cljs$core$IFn$_invoke$arity$1(radar));

(ctx.shadowColor = "transparent");

(ctx.shadowBlur = (0));

(ctx.shadowOffsetX = (0));

(ctx.shadowOffsetY = (0));

ctx.beginPath();

var p0_20035 = (points[(0)]);
ctx.moveTo(p0_20035.x,p0_20035.y);

var n__5593__auto___20036 = (points.length - (1));
var i_20037 = (0);
while(true){
if((i_20037 < n__5593__auto___20036)){
var p_20038 = (points[(i_20037 + (1))]);
ctx.lineTo(p_20038.x,p_20038.y);

var G__20039 = (i_20037 + (1));
i_20037 = G__20039;
continue;
} else {
}
break;
}

ctx.closePath();

ctx.stroke();

return ctx.restore();
} else {
return null;
}
} else {
return null;
}
}));

return plugin;
});
wm.frontend.core.make_chart_BANG_ = (function wm$frontend$core$make_chart_BANG_(canvas,scores,tokens){
var plugin = wm.frontend.core.create_figma_base_plugin(tokens);
var ordered = wm.frontend.core.ordered_scores(scores);
var data = ({"labels": cljs.core.clj__GT_js(wm.frontend.core.labels), "datasets": [({"data": cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(wm.frontend.core.normalize_score,ordered)), "borderColor": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tokens,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radar","radar",-1323428042),new cljs.core.Keyword(null,"seriesBorderColor","seriesBorderColor",1122628863)], null)), "backgroundColor": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tokens,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radar","radar",-1323428042),new cljs.core.Keyword(null,"seriesFillColor","seriesFillColor",-279068884)], null)), "borderWidth": (0), "fill": true, "pointRadius": (0), "pointHoverRadius": (0)})]});
var opts = ({"responsive": false, "maintainAspectRatio": false, "animation": false, "normalized": true, "layout": ({"padding": (0)}), "plugins": ({"legend": ({"display": false}), "tooltip": ({"enabled": false})}), "elements": ({"line": ({"borderJoinStyle": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tokens,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radar","radar",-1323428042),new cljs.core.Keyword(null,"seriesBorderJoin","seriesBorderJoin",-855406145)], null))})}), "scales": ({"r": ({"min": (0), "max": (100), "afterFit": (function (scale){
(scale.paddingLeft = (0));

(scale.paddingRight = (0));

(scale.paddingTop = (0));

return (scale.paddingBottom = (0));
}), "ticks": ({"display": false, "padding": (0)}), "grid": ({"display": false}), "angleLines": ({"display": false}), "pointLabels": ({"display": false})})})});
var ChartCtor = wm.frontend.core.chart_ctor();
if(cljs.core.fn_QMARK_(ChartCtor)){
} else {
throw (new TypeError("Chart.js n\u00E3o carregou (window.Chart indispon\u00EDvel)."));
}

return (new ChartCtor(canvas,({"type": "radar", "data": data, "options": opts, "plugins": [plugin]})));
});
wm.frontend.core.sync_chart_BANG_ = (function wm$frontend$core$sync_chart_BANG_(chart,scores){
var ordered = wm.frontend.core.ordered_scores(scores);
var ds = (chart.data.datasets[(0)]);
(ds.data = cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(wm.frontend.core.normalize_score,ordered)));

return chart.update("none");
});
wm.frontend.core.slider_row_BANG_ = (function wm$frontend$core$slider_row_BANG_(key,label){
var row = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","controlRow");
var lbl = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","controlLabel");
var val = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","controlValue");
var input = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("input","controlRange");
(lbl.textContent = label);

var initial_20040 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(wm.frontend.core.state_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scores","scores",-1267421800),key], null));
(val.textContent = cljs.core.str.cljs$core$IFn$_invoke$arity$1(initial_20040));

(input.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(initial_20040));

(input.type = "range");

(input.min = "1");

(input.max = "100");

(input.step = "1");

if(cljs.core.empty_QMARK_(input.value)){
(input.value = "50");
} else {
}

input.addEventListener("input",(function (_){
var nv = Number(input.value);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(wm.frontend.core.state_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scores","scores",-1267421800),key], null),nv);

(val.textContent = cljs.core.str.cljs$core$IFn$_invoke$arity$1(nv));

var temp__5804__auto__ = new cljs.core.Keyword(null,"chart","chart",1173225425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(wm.frontend.core.state_STAR_));
if(cljs.core.truth_(temp__5804__auto__)){
var c = temp__5804__auto__;
return wm.frontend.core.sync_chart_BANG_(c,new cljs.core.Keyword(null,"scores","scores",-1267421800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(wm.frontend.core.state_STAR_)));
} else {
return null;
}
}));

row.appendChild(lbl);

row.appendChild(val);

row.appendChild(input);

return row;
});
wm.frontend.core.render_ui_BANG_ = (function wm$frontend$core$render_ui_BANG_(){
var root = document.getElementById("app");
wm.frontend.core.clear_el_BANG_(root);

var frame_20041 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","frame");
frame_20041.setAttribute("data-node-id","1324:17002");

var label_liq_20042 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","label");
var label_pro_20043 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","label");
var label_div_20044 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","label");
var label_efi_20045 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","label");
var label_ret_20046 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","label");
wm.frontend.core.set_styles_BANG_(label_liq_20042,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"62px",new cljs.core.Keyword(null,"top","top",-1856271961),"111.5px",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(100%, -50%)"], null));

wm.frontend.core.set_styles_BANG_(label_pro_20043,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),"16px",new cljs.core.Keyword(null,"top","top",-1856271961),"111.5px",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0, -50%)"], null));

wm.frontend.core.set_styles_BANG_(label_div_20044,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),"calc(50% - 36.5px)",new cljs.core.Keyword(null,"top","top",-1856271961),"10.5px",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0, -50%)"], null));

wm.frontend.core.set_styles_BANG_(label_efi_20045,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),"82px",new cljs.core.Keyword(null,"top","top",-1856271961),"266.5px",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0, -50%)"], null));

wm.frontend.core.set_styles_BANG_(label_ret_20046,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),"236px",new cljs.core.Keyword(null,"top","top",-1856271961),"266.5px",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0, -50%)"], null));

(label_liq_20042.textContent = "Liquidez");

(label_pro_20043.textContent = "Prote\u00E7\u00E3o");

(label_div_20044.textContent = "Diversifica\u00E7\u00E3o");

(label_efi_20045.textContent = "Efici\u00EAncia");

(label_ret_20046.textContent = "Retorno");

frame_20041.appendChild(label_liq_20042);

frame_20041.appendChild(label_pro_20043);

frame_20041.appendChild(label_div_20044);

frame_20041.appendChild(label_efi_20045);

frame_20041.appendChild(label_ret_20046);

var canvas_20047 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("canvas","chartCanvas");
(canvas_20047.id = "radar");

canvas_20047.setAttribute("width","240");

canvas_20047.setAttribute("height","240");

frame_20041.appendChild(canvas_20047);

root.appendChild(frame_20041);

var controls = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","controls");
controls.setAttribute("aria-label","Controladores do gr\u00E1fico de radar");

var header_20048 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","controlsHeader");
var refresh_btn_20049 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("button","refreshButton");
refresh_btn_20049.setAttribute("type","button");

refresh_btn_20049.setAttribute("aria-label","Atualizar p\u00E1gina");

(refresh_btn_20049.textContent = "Atualizar");

refresh_btn_20049.addEventListener("click",(function (_){
return window.location.reload();
}));

header_20048.appendChild(refresh_btn_20049);

controls.appendChild(header_20048);

controls.appendChild(wm.frontend.core.slider_row_BANG_(new cljs.core.Keyword(null,"diversificacao","diversificacao",1201141686),"Diversifica\u00E7\u00E3o"));

controls.appendChild(wm.frontend.core.slider_row_BANG_(new cljs.core.Keyword(null,"liquidez","liquidez",-1404152955),"Liquidez"));

controls.appendChild(wm.frontend.core.slider_row_BANG_(new cljs.core.Keyword(null,"retorno","retorno",-183994829),"Retorno"));

controls.appendChild(wm.frontend.core.slider_row_BANG_(new cljs.core.Keyword(null,"eficiencia","eficiencia",113943536),"Efici\u00EAncia"));

controls.appendChild(wm.frontend.core.slider_row_BANG_(new cljs.core.Keyword(null,"protecao","protecao",-1864922423),"Prote\u00E7\u00E3o"));

return root.appendChild(controls);
});
wm.frontend.core.show_error_BANG_ = (function wm$frontend$core$show_error_BANG_(e){
var pre = document.createElement("pre");
(pre.textContent = ["Erro no frontend (ClojureScript)\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = e.message;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return e;
}
})()),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = e.stack;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})())].join(''));

(pre.style.whiteSpace = "pre-wrap");

(pre.style.padding = "12px");

(pre.style.marginTop = "12px");

(pre.style.borderRadius = "8px");

(pre.style.background = "rgba(255,59,48,0.08)");

(pre.style.border = "1px solid rgba(255,59,48,0.35)");

(pre.style.color = "rgba(0,0,0,0.88)");

return document.body.appendChild(pre);
});
wm.frontend.core.init = (function wm$frontend$core$init(){
try{wm.frontend.core.render_ui_BANG_();

var canvas = document.getElementById("radar");
if(cljs.core.truth_(canvas)){
return wm.frontend.core.ensure_chartjs_BANG_((function (ok_QMARK_){
try{if(cljs.core.truth_(ok_QMARK_)){
} else {
throw (new TypeError("N\u00E3o foi poss\u00EDvel carregar Chart.js. Verifique bloqueio de rede/CDN."));
}

var temp__5804__auto___20050 = new cljs.core.Keyword(null,"chart","chart",1173225425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(wm.frontend.core.state_STAR_));
if(cljs.core.truth_(temp__5804__auto___20050)){
var c_20051 = temp__5804__auto___20050;
c_20051.destroy();
} else {
}

var chart = wm.frontend.core.make_chart_BANG_(canvas,new cljs.core.Keyword(null,"scores","scores",-1267421800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(wm.frontend.core.state_STAR_)),wm.frontend.core.default_tokens);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(wm.frontend.core.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"chart","chart",1173225425),chart);
}catch (e19991){var e = e19991;
return wm.frontend.core.show_error_BANG_(e);
}}));
} else {
return null;
}
}catch (e19990){var e = e19990;
return wm.frontend.core.show_error_BANG_(e);
}});
wm.frontend.core.init();

//# sourceMappingURL=wm.frontend.core.js.map
