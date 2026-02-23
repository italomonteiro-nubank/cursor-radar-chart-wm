goog.provide('wm.frontend.core');
wm.frontend.core.labels = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Diversifica\u00E7\u00E3o","Liquidez","Retorno","Efici\u00EAncia","Prote\u00E7\u00E3o"], null);
wm.frontend.core.default_tokens = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radar","radar",-1323428042),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"baseFill","baseFill",-2009356028),"#efefef",new cljs.core.Keyword(null,"baseStrokeColor","baseStrokeColor",-610053180),"#e1e1e1",new cljs.core.Keyword(null,"angleLineColor","angleLineColor",441496909),"#1f023014",new cljs.core.Keyword(null,"seriesBorderColor","seriesBorderColor",1122628863),"#820ad1",new cljs.core.Keyword(null,"seriesFillColor","seriesFillColor",-279068884),"rgba(130,10,209,0.4)",new cljs.core.Keyword(null,"seriesBorderWidthPx","seriesBorderWidthPx",-1134103368),3.77356,new cljs.core.Keyword(null,"seriesBorderJoin","seriesBorderJoin",-855406145),"round"], null)], null);
if((typeof wm !== 'undefined') && (typeof wm.frontend !== 'undefined') && (typeof wm.frontend.core !== 'undefined') && (typeof wm.frontend.core.state_STAR_ !== 'undefined')){
} else {
wm.frontend.core.state_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"scores","scores",-1267421800),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"diversificacao","diversificacao",1201141686),(50),new cljs.core.Keyword(null,"liquidez","liquidez",-1404152955),(50),new cljs.core.Keyword(null,"retorno","retorno",-183994829),(50),new cljs.core.Keyword(null,"eficiencia","eficiencia",113943536),(50),new cljs.core.Keyword(null,"protecao","protecao",-1864922423),(50)], null),new cljs.core.Keyword(null,"chart","chart",1173225425),null], null));
}
wm.frontend.core.chartjs_urls = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://cdn.jsdelivr.net/npm/chart.js@4.5.1/dist/chart.umd.min.js","https://unpkg.com/chart.js@4.5.1/dist/chart.umd.min.js","https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.5.1/chart.umd.min.js"], null);
wm.frontend.core.normalize_score = (function wm$frontend$core$normalize_score(v){
var n = Number(v);
return (((n - (1)) * (100)) / (99));
});
wm.frontend.core.ordered_scores = (function wm$frontend$core$ordered_scores(p__21461){
var map__21462 = p__21461;
var map__21462__$1 = cljs.core.__destructure_map(map__21462);
var diversificacao = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21462__$1,new cljs.core.Keyword(null,"diversificacao","diversificacao",1201141686));
var liquidez = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21462__$1,new cljs.core.Keyword(null,"liquidez","liquidez",-1404152955));
var retorno = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21462__$1,new cljs.core.Keyword(null,"retorno","retorno",-183994829));
var eficiencia = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21462__$1,new cljs.core.Keyword(null,"eficiencia","eficiencia",113943536));
var protecao = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21462__$1,new cljs.core.Keyword(null,"protecao","protecao",-1864922423));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [diversificacao,liquidez,retorno,eficiencia,protecao], null);
});
wm.frontend.core.clear_el_BANG_ = (function wm$frontend$core$clear_el_BANG_(el){
return (el.textContent = "");
});
wm.frontend.core.el = (function wm$frontend$core$el(var_args){
var G__21466 = arguments.length;
switch (G__21466) {
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
var G__21467 = document.createElement(tag);
(G__21467["className"] = className);

return G__21467;
}));

(wm.frontend.core.el.cljs$lang$maxFixedArity = 2);

wm.frontend.core.set_styles_BANG_ = (function wm$frontend$core$set_styles_BANG_(el,styles){
var seq__21468_21542 = cljs.core.seq(styles);
var chunk__21469_21543 = null;
var count__21470_21544 = (0);
var i__21471_21545 = (0);
while(true){
if((i__21471_21545 < count__21470_21544)){
var vec__21478_21546 = chunk__21469_21543.cljs$core$IIndexed$_nth$arity$2(null, i__21471_21545);
var k_21547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21478_21546,(0),null);
var v_21548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21478_21546,(1),null);
(el.style[cljs.core.name(k_21547)] = v_21548);


var G__21549 = seq__21468_21542;
var G__21550 = chunk__21469_21543;
var G__21551 = count__21470_21544;
var G__21552 = (i__21471_21545 + (1));
seq__21468_21542 = G__21549;
chunk__21469_21543 = G__21550;
count__21470_21544 = G__21551;
i__21471_21545 = G__21552;
continue;
} else {
var temp__5804__auto___21553 = cljs.core.seq(seq__21468_21542);
if(temp__5804__auto___21553){
var seq__21468_21556__$1 = temp__5804__auto___21553;
if(cljs.core.chunked_seq_QMARK_(seq__21468_21556__$1)){
var c__5525__auto___21558 = cljs.core.chunk_first(seq__21468_21556__$1);
var G__21559 = cljs.core.chunk_rest(seq__21468_21556__$1);
var G__21560 = c__5525__auto___21558;
var G__21561 = cljs.core.count(c__5525__auto___21558);
var G__21562 = (0);
seq__21468_21542 = G__21559;
chunk__21469_21543 = G__21560;
count__21470_21544 = G__21561;
i__21471_21545 = G__21562;
continue;
} else {
var vec__21483_21563 = cljs.core.first(seq__21468_21556__$1);
var k_21564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21483_21563,(0),null);
var v_21565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21483_21563,(1),null);
(el.style[cljs.core.name(k_21564)] = v_21565);


var G__21567 = cljs.core.next(seq__21468_21556__$1);
var G__21568 = null;
var G__21569 = (0);
var G__21570 = (0);
seq__21468_21542 = G__21567;
chunk__21469_21543 = G__21568;
count__21470_21544 = G__21569;
i__21471_21545 = G__21570;
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
var n__5593__auto___21580 = n;
var i_21582 = (0);
while(true){
if((i_21582 < n__5593__auto___21580)){
outer.push(r.getPointPositionForValue(i_21582,(100)));

var G__21584 = (i_21582 + (1));
i_21582 = G__21584;
continue;
} else {
}
break;
}

ctx.save();

ctx.beginPath();

var p0_21585 = (outer[(0)]);
ctx.moveTo(p0_21585.x,p0_21585.y);

var n__5593__auto___21586 = (n - (1));
var i_21587 = (0);
while(true){
if((i_21587 < n__5593__auto___21586)){
var p_21588 = (outer[(i_21587 + (1))]);
ctx.lineTo(p_21588.x,p_21588.y);

var G__21589 = (i_21587 + (1));
i_21587 = G__21589;
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

var n__5593__auto___21591 = n;
var i_21592 = (0);
while(true){
if((i_21592 < n__5593__auto___21591)){
var p_21594 = (outer[i_21592]);
ctx.beginPath();

ctx.moveTo(r.xCenter,r.yCenter);

ctx.lineTo(p_21594.x,p_21594.y);

ctx.stroke();

var G__21597 = (i_21592 + (1));
i_21592 = G__21597;
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

var p0_21598 = (points[(0)]);
ctx.moveTo(p0_21598.x,p0_21598.y);

var n__5593__auto___21599 = (points.length - (1));
var i_21600 = (0);
while(true){
if((i_21600 < n__5593__auto___21599)){
var p_21602 = (points[(i_21600 + (1))]);
ctx.lineTo(p_21602.x,p_21602.y);

var G__21603 = (i_21600 + (1));
i_21600 = G__21603;
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

var p0_21604 = (points[(0)]);
ctx.moveTo(p0_21604.x,p0_21604.y);

var n__5593__auto___21605 = (points.length - (1));
var i_21606 = (0);
while(true){
if((i_21606 < n__5593__auto___21605)){
var p_21607 = (points[(i_21606 + (1))]);
ctx.lineTo(p_21607.x,p_21607.y);

var G__21608 = (i_21606 + (1));
i_21606 = G__21608;
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

var initial_21616 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(wm.frontend.core.state_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scores","scores",-1267421800),key], null));
(val.textContent = cljs.core.str.cljs$core$IFn$_invoke$arity$1(initial_21616));

(input.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(initial_21616));

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

var frame_21620 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","frame");
frame_21620.setAttribute("data-node-id","1324:17002");

var label_liq_21621 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","label");
var label_pro_21622 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","label");
var label_div_21623 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","label");
var label_efi_21624 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","label");
var label_ret_21625 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","label");
wm.frontend.core.set_styles_BANG_(label_liq_21621,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"62px",new cljs.core.Keyword(null,"top","top",-1856271961),"111.5px",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(100%, -50%)"], null));

wm.frontend.core.set_styles_BANG_(label_pro_21622,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),"16px",new cljs.core.Keyword(null,"top","top",-1856271961),"111.5px",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0, -50%)"], null));

wm.frontend.core.set_styles_BANG_(label_div_21623,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),"calc(50% - 36.5px)",new cljs.core.Keyword(null,"top","top",-1856271961),"10.5px",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0, -50%)"], null));

wm.frontend.core.set_styles_BANG_(label_efi_21624,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),"82px",new cljs.core.Keyword(null,"top","top",-1856271961),"266.5px",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0, -50%)"], null));

wm.frontend.core.set_styles_BANG_(label_ret_21625,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),"236px",new cljs.core.Keyword(null,"top","top",-1856271961),"266.5px",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0, -50%)"], null));

(label_liq_21621.textContent = "Liquidez");

(label_pro_21622.textContent = "Prote\u00E7\u00E3o");

(label_div_21623.textContent = "Diversifica\u00E7\u00E3o");

(label_efi_21624.textContent = "Efici\u00EAncia");

(label_ret_21625.textContent = "Retorno");

frame_21620.appendChild(label_liq_21621);

frame_21620.appendChild(label_pro_21622);

frame_21620.appendChild(label_div_21623);

frame_21620.appendChild(label_efi_21624);

frame_21620.appendChild(label_ret_21625);

var canvas_21647 = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("canvas","chartCanvas");
(canvas_21647.id = "radar");

canvas_21647.setAttribute("width","240");

canvas_21647.setAttribute("height","240");

frame_21620.appendChild(canvas_21647);

root.appendChild(frame_21620);

var controls = wm.frontend.core.el.cljs$core$IFn$_invoke$arity$2("div","controls");
controls.setAttribute("aria-label","Controladores do gr\u00E1fico de radar");

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

var temp__5804__auto___21668 = new cljs.core.Keyword(null,"chart","chart",1173225425).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(wm.frontend.core.state_STAR_));
if(cljs.core.truth_(temp__5804__auto___21668)){
var c_21669 = temp__5804__auto___21668;
c_21669.destroy();
} else {
}

var chart = wm.frontend.core.make_chart_BANG_(canvas,new cljs.core.Keyword(null,"scores","scores",-1267421800).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(wm.frontend.core.state_STAR_)),wm.frontend.core.default_tokens);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(wm.frontend.core.state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"chart","chart",1173225425),chart);
}catch (e21522){var e = e21522;
return wm.frontend.core.show_error_BANG_(e);
}}));
} else {
return null;
}
}catch (e21517){var e = e21517;
return wm.frontend.core.show_error_BANG_(e);
}});
wm.frontend.core.init();

//# sourceMappingURL=wm.frontend.core.js.map
