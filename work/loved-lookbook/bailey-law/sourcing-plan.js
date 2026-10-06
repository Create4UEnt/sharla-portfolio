(function(){
  var KEY = 'bailey-sourcing-v1';
  var DEFAULT_SET = {tax:8, rate:20, trip:15, cont:10, repl:15};
  // s: shared|fall|holiday · t: tier 1 Essential, 2 Signature, 3 Estate · k: keep (reusable)
  var DEFAULT_ITEMS = [
    // SHARED
    {id:'l1', s:'shared', t:1, n:'Warm-white LED mini lights, 2700K, 100 ct / 33 ft', note:'Staircase handrails (~36 ft wrapped)', w:'Wintergreen Lighting', q:2, p:28, k:1},
    {id:'c1', s:'shared', t:1, n:'Outdoor extension cord, 14-gauge, 25 ft', note:'To porch outlets', w:"Lowe's / Home Depot", q:2, p:22, k:1},
    {id:'tm1', s:'shared', t:1, n:'Outdoor plug-in timer, dusk-to-set', note:'', w:"Lowe's / Home Depot", q:1, p:18, k:1},
    {id:'u1', s:'shared', t:1, n:'Tall black resin urns, 24–28"', note:'Pair flanking the door', w:"Costco / Lowe's", q:2, p:65, k:1},
    {id:'h1', s:'shared', t:1, n:'Padded garland ties + velcro wraps', note:'No-fastener install', w:'Amazon', q:1, p:15, k:1},
    {id:'h2', s:'shared', t:1, n:'Over-the-door wreath hanger, black', note:'', w:'Amazon / Target', q:1, p:15, k:1},
    {id:'l2', s:'shared', t:2, n:'Warm-white LED mini lights, 100 ct / 33 ft', note:'Porch railing (~54 ft) + balcony (~75 ft)', w:'Wintergreen Lighting', q:5, p:28, k:1},
    {id:'c2', s:'shared', t:2, n:'Outdoor extension cord, 14-gauge, 25 ft', note:'Balcony run', w:"Lowe's / Home Depot", q:2, p:22, k:1},
    {id:'tm2', s:'shared', t:2, n:'Outdoor plug-in timer', note:'Upper floor', w:"Lowe's / Home Depot", q:1, p:18, k:1},
    {id:'h3', s:'shared', t:2, n:'Padded garland ties + velcro wraps', note:'Extra packs for railings', w:'Amazon', q:2, p:15, k:1},
    {id:'up', s:'shared', t:3, n:'LED outdoor spot uplight, warm white', note:'Four porch columns', w:"Lowe's / Home Depot", q:4, p:38, k:1},
    {id:'sh', s:'shared', t:3, n:'Suction wreath hooks for glass, 4-pack', note:'Eight front windows', w:'Amazon', q:2, p:12, k:1},

    // FALL
    {id:'f1', s:'fall', t:1, n:'Fall magnolia door wreath, 28"', note:'Bronze magnolia, copper, olive', w:'Afloral.com', q:1, p:95, k:1},
    {id:'f2', s:'fall', t:1, n:'Cream velvet wired ribbon, 10 yd', note:'Door wreath bow + tails', w:'Michaels', q:1, p:14, k:0},
    {id:'f3', s:'fall', t:1, n:'Faux fall magnolia garland, 6 ft', note:'Staircase handrails (~24 ft)', w:'Hobby Lobby (50% off wk)', q:4, p:30, k:1},
    {id:'f4', s:'fall', t:1, n:'Burgundy mums, 12" pot', note:'2 urns + 2 pillar caps', w:'SC State Farmers Market', q:4, p:14, k:0},
    {id:'f5', s:'fall', t:1, n:'Trailing ivy, 4" pot', note:'Urn spillers', w:'SC State Farmers Market', q:4, p:5, k:0},
    {id:'f6', s:'fall', t:1, n:'Bronze dried wheat / grass bundle', note:'Urn height', w:'Hobby Lobby', q:4, p:12, k:0},
    {id:'f7', s:'fall', t:1, n:'Potting soil + floral foam', note:'', w:"Lowe's", q:1, p:15, k:0},
    {id:'f8', s:'fall', t:2, n:'Faux fall magnolia garland, 6 ft', note:'First-floor porch railing (~36 ft)', w:'Hobby Lobby (50% off wk)', q:6, p:30, k:1},
    {id:'f9', s:'fall', t:2, n:'Faux fall magnolia garland, 6 ft', note:'Upper balcony banister (~50 ft)', w:'Hobby Lobby (50% off wk)', q:9, p:30, k:1},
    {id:'f10', s:'fall', t:3, n:'Fall window wreath, 18"', note:'Eight front windows', w:'Hobby Lobby / Afloral', q:8, p:30, k:1},
    {id:'f11', s:'fall', t:3, n:'Burgundy velvet wired ribbon, 10 yd', note:'Window hangers + bows', w:'Michaels', q:2, p:16, k:0},
    {id:'f12', s:'fall', t:3, n:'Heirloom cream pumpkins, assorted', note:'Pillar caps', w:'SC State Farmers Market', q:6, p:8, k:0},
    {id:'f13', s:'fall', t:3, n:'Replacement mums, 12" pot', note:'Mid-season refresh', w:'SC State Farmers Market', q:4, p:14, k:0},

    // HOLIDAY
    {id:'x1', s:'holiday', t:1, n:'Magnolia & cedar door wreath, 28"', note:'With white magnolia blooms', w:'Afloral.com', q:1, p:110, k:1},
    {id:'x2', s:'holiday', t:1, n:'Red velvet outdoor bow, 12"', note:'Door wreath + handrail bases', w:'Etsy (bulk)', q:3, p:16, k:1},
    {id:'x3', s:'holiday', t:1, n:'Faux cedar garland, 9 ft', note:'Staircase handrails (~24 ft)', w:'Hobby Lobby (50% off wk)', q:3, p:40, k:1},
    {id:'x4', s:'holiday', t:1, n:'Fresh evergreen boughs, bundle', note:'Urns + pillar caps', w:"Farmers Market / Lowe's", q:4, p:20, k:0},
    {id:'x5', s:'holiday', t:1, n:'Faux magnolia leaf stems', note:'Urn accents', w:'Hobby Lobby', q:6, p:6, k:1},
    {id:'x6', s:'holiday', t:1, n:'Birch poles, bundle of 3', note:'Urn height', w:'Hobby Lobby', q:2, p:12, k:1},
    {id:'x7', s:'holiday', t:2, n:'Cedar-magnolia garland, 9 ft', note:'First-floor porch railing (~36 ft)', w:'Hobby Lobby (50% off wk)', q:4, p:40, k:1},
    {id:'x8', s:'holiday', t:2, n:'Cedar-magnolia garland, 9 ft', note:'Upper balcony banister (~50 ft)', w:'Hobby Lobby (50% off wk)', q:6, p:40, k:1},
    {id:'x9', s:'holiday', t:2, n:'Red velvet outdoor bow, 12"', note:'Every column, both floors', w:'Etsy (bulk)', q:12, p:16, k:1},
    {id:'x10', s:'holiday', t:3, n:'Cedar window wreath, 18"', note:'Eight front windows', w:'Hobby Lobby / Afloral', q:8, p:32, k:1},
    {id:'x11', s:'holiday', t:3, n:'Red velvet wired ribbon, 10 yd', note:'Window hangers + bows', w:'Michaels', q:2, p:16, k:0},
    {id:'x12', s:'holiday', t:3, n:'LED window candle, 6-hr timer', note:'Eight front windows', w:'Target / Walmart', q:8, p:10, k:1},
    {id:'x13', s:'holiday', t:3, n:'Brass lantern, 18"', note:'Pillar caps', w:'Target / HomeGoods', q:2, p:45, k:1},
    {id:'x14', s:'holiday', t:3, n:'Flameless pillar candle, timer', note:'Inside lanterns', w:'Target / Walmart', q:2, p:15, k:0}
  ];
  // helper hours & visits by package
  var LABOR = {
    'fall-1':[5,3], 'fall-2':[11,4], 'fall-3':[14,5],
    'holiday-1':[5,3], 'holiday-2':[11,4], 'holiday-3':[14,7],
    'bundle-1':[8,5], 'bundle-2':[16,7], 'bundle-3':[21,11]
  };
  var PRICE = {'fall-1':950,'fall-2':2250,'fall-3':2950,'holiday-1':1095,'holiday-2':2450,'holiday-3':3250,'bundle-1':1745,'bundle-2':4400,'bundle-3':5900};
  var TIERN = {1:'Essential',2:'Signature',3:'Estate'};
  var SEASN = {fall:'Fall', holiday:'Holiday', bundle:'Bundle'};

  var state;
  try{ state = JSON.parse(localStorage.getItem(KEY)); }catch(e){}
  if(!state || !state.items){ state = {set:Object.assign({},DEFAULT_SET), items:{}}; }
  function item(it){ var o = state.items[it.id]||{}; return {q: o.q!=null?o.q:it.q, p: o.p!=null?o.p:it.p}; }
  function save(){ localStorage.setItem(KEY, JSON.stringify(state)); }
  var $ = function(s){return document.querySelector(s)};
  var money = function(v){ var n=Math.round(v); return (n<0?'−$':'$')+Math.abs(n).toLocaleString('en-US'); };

  function buildTables(){
    ['shared','fall','holiday'].forEach(function(sea){
      var tb = $('#t-'+sea), html='';
      [1,2,3].forEach(function(t){
        var rows = DEFAULT_ITEMS.filter(function(i){return i.s===sea && i.t===t});
        if(!rows.length) return;
        html += '<tr class="tier-row"><td colspan="6">'+(t===1?'Essential':(TIERN[t]+' adds'))+'</td></tr>';
        rows.forEach(function(i){
          var v=item(i);
          html += '<tr><td><b>'+i.n+'</b>'+(i.note?'<br><span class="src">'+i.note+'</span>':'')+'</td><td>'+i.w+'</td>'+
            '<td class="num"><input class="ed q" data-id="'+i.id+'" data-f="q" value="'+v.q+'"></td>'+
            '<td class="num"><span class="pre">$</span><input class="ed" data-id="'+i.id+'" data-f="p" value="'+v.p+'"></td>'+
            '<td class="num" data-tot="'+i.id+'"></td><td>'+(i.k?'<span class="keep">Keep</span>':'<span class="use">Used up</span>')+'</td></tr>';
        });
        html += '<tr class="sub"><td colspan="4">'+TIERN[t]+' subtotal</td><td class="num" data-sub="'+sea+'-'+t+'"></td><td></td></tr>';
      });
      tb.innerHTML = html;
    });
    document.querySelectorAll('[data-set]').forEach(function(el){ el.value = state.set[el.dataset.set]; });
  }

  function mats(pkg, yr2){
    var sea = pkg.split('-')[0], t = +pkg.split('-')[1];
    var seasons = sea==='bundle' ? ['shared','fall','holiday'] : ['shared', sea];
    var S = state.set, sum=0;
    DEFAULT_ITEMS.forEach(function(i){
      if(i.t<=t && seasons.indexOf(i.s)>=0){
        var v=item(i), c=v.q*v.p;
        if(yr2 && i.k) c *= S.repl/100;
        sum += c;
      }
    });
    return sum*(1+S.tax/100)*(1+S.cont/100);
  }
  function labor(pkg){ var L=LABOR[pkg], S=state.set; return {h:L[0], v:L[1], hc:L[0]*S.rate, tc:L[1]*S.trip, tot:L[0]*S.rate+L[1]*S.trip}; }

  function recalc(){
    DEFAULT_ITEMS.forEach(function(i){ var v=item(i); var el=document.querySelector('[data-tot="'+i.id+'"]'); if(el) el.textContent=money(v.q*v.p); });
    ['shared','fall','holiday'].forEach(function(sea){ [1,2,3].forEach(function(t){
      var el=document.querySelector('[data-sub="'+sea+'-'+t+'"]'); if(!el) return;
      var s=0; DEFAULT_ITEMS.forEach(function(i){ if(i.s===sea&&i.t===t){var v=item(i); s+=v.q*v.p;} }); el.textContent=money(s);
    });});

    var S=state.set;
    $('#rateLbl').textContent=money(S.rate); $('#tripLbl').textContent=money(S.trip);

    var rows='', lrows='', res={};
    ['fall','holiday','bundle'].forEach(function(sea){
      rows += '<tr class="grp"><td colspan="8">'+(sea==='bundle'?'Season bundle · fall + holiday':SEASN[sea]+' only')+'</td></tr>';
      [1,2,3].forEach(function(t){
        var k=sea+'-'+t, m=mats(k), m2=mats(k,true), L=labor(k), cost=m+L.tot, pr=PRICE[k]-cost, pr2=PRICE[k]-(m2+L.tot), mg=pr/PRICE[k]*100;
        res[k]={m:m,L:L,cost:cost,pr:pr,pr2:pr2,mg:mg};
        rows += '<tr'+(k==='bundle-2'?' class="hl"':'')+'><td><b>'+TIERN[t]+'</b></td><td class="num">'+money(PRICE[k])+'</td><td class="num">'+money(m)+'</td><td class="num">'+money(L.tot)+'</td><td class="num">'+money(cost)+'</td><td class="num '+(pr>=0?'pos':'neg')+'">'+money(pr)+'</td><td class="num">'+Math.round(mg)+'%</td><td class="num '+(pr2>=0?'pos':'neg')+'">'+money(pr2)+'</td></tr>';
        lrows += '<tr><td>'+SEASN[sea]+' · '+TIERN[t]+'</td><td class="num">'+L.h+'</td><td class="num">'+L.v+'</td><td class="num">'+money(L.hc)+'</td><td class="num">'+money(L.tc)+'</td><td class="num"><b>'+money(L.tot)+'</b></td></tr>';
      });
    });
    $('#summary').innerHTML=rows; $('#t-labor').innerHTML=lrows;

    var a=res['fall-2'], b=res['bundle-2'], c=res['bundle-2'];
    $('#c1').textContent=money(a.pr); $('#c1d').textContent='On '+money(PRICE['fall-2'])+' · '+Math.round(a.mg)+'% margin after '+money(a.cost)+' in costs.';
    $('#c2').textContent=money(b.pr); $('#c2d').textContent='On '+money(PRICE['bundle-2'])+' · '+Math.round(b.mg)+'% margin. Lights and urns are bought once for both seasons.';
    $('#c3').textContent=money(c.pr2);

    // takeaways
    var keys=Object.keys(res), best=keys.reduce(function(x,y){return res[y].pr>res[x].pr?y:x});
    var worst=keys.reduce(function(x,y){return res[y].mg<res[x].mg?y:x});
    var garland=0, allm=0;
    DEFAULT_ITEMS.forEach(function(i){ var v=item(i); allm+=v.q*v.p; if(/garland/i.test(i.n)) garland+=v.q*v.p; });
    var t=[];
    t.push('<li><b>Push the Signature bundle.</b> It earns '+money(res['bundle-2'].pr)+' in year 1, compared with '+money(res['fall-2'].pr+res['holiday-2'].pr)+' if Fall and Holiday Signature were sold separately, because the lights, cords, timers and urns are only bought once.</li>');
    t.push('<li><b>Most profitable in year 1:</b> '+SEASN[best.split('-')[0]]+' '+TIERN[best.split('-')[1]]+' at '+money(res[best].pr)+'. <b>Thinnest margin:</b> '+SEASN[worst.split('-')[0]]+' '+TIERN[worst.split('-')[1]]+' at '+Math.round(res[worst].mg)+'%. Year one covers your startup inventory.</li>');
    t.push('<li><b>Garland is '+Math.round(garland/allm*100)+'% of all materials</b> ('+money(garland)+'). Buying it only on Hobby Lobby\u2019s half-off week is the biggest single saving. At full price, year 1 profit drops sharply.</li>');
    t.push('<li><b>Year 2 is where the money is.</b> Everything marked Keep is reused for next year\u2019s clients, so the same Signature bundle earns about '+money(res['bundle-2'].pr2)+'.</li>');
    $('#takeaways').innerHTML=t.join('');
  }

  document.addEventListener('input', function(e){
    var el=e.target; if(!el.classList.contains('ed')) return;
    var v=parseFloat(el.value); if(isNaN(v)) return;
    if(el.dataset.set){ state.set[el.dataset.set]=v; }
    else { var o=state.items[el.dataset.id]||(state.items[el.dataset.id]={}); o[el.dataset.f]=v; }
    save(); recalc();
  });
  $('#reset').onclick=function(){ if(confirm('Reset all prices and settings to the estimates?')){ state={set:Object.assign({},DEFAULT_SET),items:{}}; save(); buildTables(); recalc(); } };
  $('#print').onclick=function(){ window.print(); };

  buildTables(); recalc();
})();
