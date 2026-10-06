/* Crown & Ash — option data + slide builder. Prices are approximate 2026 retail estimates, pre-tax. */
window.C4M_OPTIONS = [
  {
    key:'A', render:'assets/render-A.png', name:'Maduro', tier:'$$', insp:'assets/insp-6-black.jpg', inspPos:'50% 60%', inspNote:'Based on inspiration image 6',
    tagline:'Tall black planters, bronze and wine mums, and a black-and-ivory rug. The most tailored look, closest to a gentleman\'s lounge.',
    palette:[['#141414','Satin black'],['#5a1f24','Wine'],['#9c5a2c','Bronze mum'],['#efe6d2','Ivory'],['#b8924a','Brass']],
    rug:{pattern:'stripe', c:['#141414','#efe6d2'], label:'4×6 black & ivory wide-stripe outdoor flatweave, layered on a 3×5 coir mat'},
    scene:{planter:'tall', pc:'#121212', mums:['#5a1f24','#9c5a2c','#7a2e2a'], plume:false, ivy:true, pumpkins:['#1a1a1a','#efe6d2','#9c5a2c'], lantern:'#141414'},
    items:[
      ['Tall tapered planters, 24–28″, black (pair)','Target / Walmart',2,38],
      ['Mums, 8–9″ pots — wine + bronze','Walmart / Lowe\'s',6,8],
      ['Faux trailing ivy','Hobby Lobby / Dollar Tree',4,4],
      ['Faux pumpkins — black, ivory, copper','Michaels',6,7],
      ['Outdoor rug 4×6, black/ivory stripe','Target',1,45],
      ['Coir doormat 3×5 (layer underneath)','Walmart',1,18],
      ['LED lantern, black metal, timer candle','Target / HomeGoods',2,24],
      ['Pea gravel for ballast + rug tape','Home Depot / Walmart',1,18],
    ]
  },
  {
    key:'B', render:'assets/render-B.png', name:'Copper & Smoke', tier:'$$$', insp:'assets/insp-4-copper.jpg', inspPos:'30% 45%', inspNote:'Based on inspiration image 4',
    tagline:'Copper urns with faux pampas and wheat, rust mums and dark foliage. The tallest option, so it can be seen from the parking lot.',
    palette:[['#8a4b2a','Aged copper'],['#b4552f','Rust mum'],['#4a1e2b','Plum foliage'],['#d9c18e','Wheat'],['#2a2521','Smoke']],
    rug:{pattern:'medallion', c:['#6b2a22','#d9c18e','#2a2521'], label:'4×6 rust & wheat Persian-style outdoor rug'},
    scene:{planter:'urn', pc:'#7a4226', mums:['#b4552f','#8e3b25','#4a1e2b'], plume:true, plumeC:'#d9c18e', ivy:true, pumpkins:['#9a5a33','#efe6d2','#5d6b58'], lantern:null},
    items:[
      ['Tall urn planters 26–30″ (buy on 50%-off week)','Hobby Lobby',2,55],
      ['Rust-Oleum metallic copper spray paint (optional upgrade)','Walmart / Home Depot',2,9],
      ['Mums, 8–9″ pots — rust + bronze','Walmart / Lowe\'s',6,8],
      ['Faux burgundy foliage bushes','Hobby Lobby',4,8],
      ['Faux pampas + wheat stems (faux, not dried)','Michaels / Hobby Lobby',6,9],
      ['Faux pumpkins — copper, ivory, sage','Michaels',6,8],
      ['Outdoor rug 4×6, rust/wheat medallion','Target / Walmart',1,55],
      ['Pea gravel for ballast + rug tape','Home Depot / Walmart',1,18],
    ]
  },
  {
    key:'C', render:'assets/render-C.png', name:'The Terrace', tier:'$$', insp:'assets/insp-5-terracotta.jpg', inspPos:'20% 70%', inspNote:'Based on inspiration image 5 (mum colors)',
    tagline:'Square terracotta boxes packed with wine and raspberry mums, plus wheat and warm lanterns. It feels like a wine-bar patio.',
    palette:[['#a4553a','Terracotta'],['#6d1f2c','Wine mum'],['#a8425a','Raspberry mum'],['#d8b870','Wheat'],['#efe6d2','Cream']],
    rug:{pattern:'kilim', c:['#6d1f2c','#a4553a','#e8dcc3'], label:'4×6 wine & terracotta kilim-style outdoor rug'},
    scene:{planter:'box', pc:'#a4553a', mums:['#6d1f2c','#a8425a','#8b2c3c'], plume:true, plumeC:'#d8b870', ivy:true, pumpkins:['#c56a2d','#efe6d2','#5d6b58'], lantern:'#2a2521'},
    items:[
      ['Square planters 16–18″, terracotta-look resin','Walmart / Target',2,32],
      ['Mums, 8–9″ pots — wine + raspberry','Walmart / Lowe\'s',6,8],
      ['Faux wheat bundles','Michaels / Hobby Lobby',4,8],
      ['Faux trailing ivy','Dollar Tree / Hobby Lobby',4,3],
      ['Faux pumpkins — cream, sage, burnt orange','Michaels / Dollar General',6,5],
      ['Outdoor rug 4×6, kilim pattern','Target / Walmart',1,42],
      ['LED lanterns, warm-white timer candles','Target / Dollar General',2,18],
      ['Pea gravel for ballast + rug tape','Home Depot / Walmart',1,18],
    ]
  },
  {
    key:'D', render:'assets/render-D.png', name:'Crown Tier', tier:'$$', insp:'assets/insp-5-terracotta.jpg', inspPos:'85% 42%', inspNote:'Uses the mum colors from inspiration image 5',
    tagline:'Black three-tier stands against each brick pier, stacked with mums in wine, bronze and gold. Tiered like a crown, with a gold medallion rug.',
    palette:[['#141414','Black iron'],['#5a1f24','Wine'],['#9c5a2c','Bronze'],['#c9a13d','Gold mum'],['#efe6d2','Ivory']],
    rug:{pattern:'border', c:['#3b1418','#c9a13d','#141414'], label:'4×6 oxblood rug with gold border / medallion'},
    scene:{planter:'tier', pc:'#141414', mums:['#5a1f24','#9c5a2c','#c9a13d'], plume:false, ivy:false, pumpkins:['#efe6d2','#9c5a2c','#1a1a1a'], lantern:'#141414'},
    items:[
      ['3-tier metal plant stand, black (pair)','Walmart / Target',2,40],
      ['Mums, 6″ pots — wine, bronze, gold','Walmart / Lowe\'s',12,5],
      ['Large mums, 12″ (floor, front of stands)','Lowe\'s / Walmart',2,18],
      ['Faux pumpkins — ivory, copper, black','Michaels',6,7],
      ['Outdoor rug 4×6, oxblood/gold','Target / HomeGoods',1,50],
      ['LED lanterns, black metal','Target / HomeGoods',2,24],
      ['Sandbags or pavers to weight stand bases','Home Depot',4,4],
      ['Outdoor rug tape','Walmart',1,10],
    ]
  },
  {
    key:'E', render:'assets/render-E.png', name:'Petite Corona', tier:'$', insp:'assets/insp-6-black.jpg', inspPos:'30% 85%', inspNote:'A simpler version of Option A',
    tagline:'The essentials: one pair of black planters, big mums, a few pumpkins and a simple rug. Still elegant, at the lowest cost.',
    palette:[['#141414','Black'],['#5a1f24','Wine'],['#b06a2e','Bronze'],['#efe6d2','Cream'],['#6d6358','Stone']],
    rug:{pattern:'check', c:['#2a2521','#6d6358'], label:'3×5 charcoal & stone low-profile outdoor rug'},
    scene:{planter:'tall', pc:'#1a1a1a', mums:['#5a1f24','#b06a2e','#5a1f24'], plume:false, ivy:false, pumpkins:['#efe6d2','#b06a2e'], lantern:null},
    items:[
      ['Large resin planters 20″, black (pair)','Walmart / Dollar General',2,22],
      ['Large mums, 12″ — wine + bronze','Walmart / Lowe\'s',2,18],
      ['Faux pumpkins — cream + bronze','Dollar General / Dollar Tree',6,3],
      ['Outdoor rug 3×5','Walmart / Dollar General',1,25],
      ['Bricks / gravel for ballast + rug tape','Walmart / Home Depot',1,14],
    ]
  }
];

(function(){
  const $ = (h)=>{const t=document.createElement('template');t.innerHTML=h.trim();return t.content.firstChild;};
  const money = n => '$'+Math.round(n).toLocaleString();
  const total = o => o.items.reduce((s,i)=>s+i[2]*i[3],0);
  window.C4M_TOTAL = total;

  function rugBg(r){
    const [a,b,c] = r.c;
    switch(r.pattern){
      case 'stripe': return `repeating-linear-gradient(90deg,${a} 0 14%,${b} 14% 28%)`;
      case 'medallion': return `radial-gradient(ellipse 30% 42% at 50% 50%,${b} 0 30%,${a} 31% 55%,transparent 56%),repeating-linear-gradient(45deg,${a} 0 6px,${c} 6px 8px),${a}`;
      case 'kilim': return `repeating-linear-gradient(90deg,${a} 0 10%,${c} 10% 13%,${b} 13% 23%,${c} 23% 26%)`;
      case 'border': return `linear-gradient(${a},${a}) padding-box, ${b}`;
      case 'check': return `repeating-linear-gradient(90deg,${a} 0 12px,${b} 12px 24px)`;
    }
  }
  function rugEl(r,style){
    const border = r.pattern==='border' ? `border:6px solid ${r.c[1]};box-shadow:inset 0 0 0 5px ${r.c[0]},inset 0 0 0 7px ${r.c[1]};background:${r.c[0]}` : `background:${rugBg(r)}`;
    return `<div class="rug" style="${style};${border}"></div>`;
  }

  // Annotated zones on the real storefront photo (840x630 box; photo is 1024x768 scaled)
  function zone(x,y,w,h,label,color,sub){
    return `<div class="zone" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px;border-color:${color};background:color-mix(in oklab,${color} 30%,transparent)"><b>${label}</b>${sub?`<em>${sub}</em>`:''}</div>`;
  }
  function scene(o){
    const s=o.scene, pc=o.palette[0][0], mc=o.palette[1][0];
    const tier = s.planter==='tier';
    const names = {tall:'Tall planter',urn:'Copper urn',box:'Terracotta box',tier:'3-tier mum stand'};
    let h = `<div class="scene"><img src="assets/site-1-front.jpg" alt="Crown & Ash storefront">`;
    // rug in front of doors (doors ~ x 345–505 at this scale, sill at y~490)
    h += `<div style="position:absolute;left:332px;top:487px;width:186px;height:52px;transform:perspective(260px) rotateX(42deg);transform-origin:50% 0;box-shadow:0 6px 14px rgba(0,0,0,.35)">${rugEl(o.rug,'width:100%;height:100%')}</div>`;
    // planters against brick piers (piers ~ x 115–235 left, 625–740 right)
    h += zone(tier?128:150, tier?360:392, tier?96:72, tier?132:100, names[s.planter], mc, '');
    h += zone(tier?628:640, tier?360:392, tier?96:72, tier?132:100, names[s.planter], mc, '');
    h += zone(238,452,62,40,'Pumpkins',o.palette[2][0]);
    h += zone(560,452,62,40,'Pumpkins',o.palette[2][0]);
    if(s.lantern){ h += zone(300,462,34,30,'',o.palette[4]?o.palette[4][0]:'#c8a15a'); h += zone(526,462,34,30,'',o.palette[4]?o.palette[4][0]:'#c8a15a'); }
    h += `<span class="callout" style="left:16px;top:16px">Placement overlay · actual storefront</span>`;
    h += `<span class="rugtag" style="left:332px;top:548px;width:186px">Rug · doors swing clear</span>`;
    h += `<span class="walk" style="left:0;right:0;top:568px">← 60″ min. clear walkway kept open to curb →</span>`;
    h += `</div>`;
    return h;
  }
  window.C4M_scene = scene; window.C4M_rugEl = rugEl;

  function optionSlide(o){
    const t = total(o);
    const rows = o.items.map(i=>`<tr><td>${i[0]}${i[2]>1?` <span style="color:var(--mute)">× ${i[2]}</span>`:''}</td><td class="store">${i[1]}</td><td class="r">${money(i[2]*i[3])}</td></tr>`).join('');
    return $(`<section data-label="Option ${o.key}">
      <div class="pad">
        <div style="display:flex;align-items:baseline;gap:28px"><span class="eyebrow">Option ${o.key}</span><span class="eyebrow" style="color:var(--mute)">${o.tier}</span></div>
        <h2 style="margin-top:18px;font-size:92px">${o.name}</h2>
        <p class="body" style="max-width:800px;margin-top:14px;font-size:25px">${o.tagline}</p>
        <div style="position:absolute;left:120px;top:396px;width:840px;transform:scale(.86);transform-origin:0 0">${scene(o)}</div>
        <div style="position:absolute;left:1010px;right:120px;top:100px">
          <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:14px">${o.palette.map(p=>`<div class="chip"><i style="background:${p[0]};height:64px"></i><span>${p[1]}</span></div>`).join('')}</div>
          <div style="display:flex;gap:22px;align-items:center;margin-top:30px">
            ${rugEl(o.rug,'width:120px;height:78px;flex:none')}
            <div><div class="eyebrow" style="font-size:17px">The rug</div><p class="small" style="color:#d9d0c3;margin-top:8px;font-size:22px">${o.rug.label}</p></div>
          </div>
          <table class="list" style="margin-top:30px">
            <tr><th>Item</th><th>Where</th><th class="r">Est.</th></tr>${rows}
            <tr class="tot"><td>Estimated materials</td><td></td><td class="r" style="color:var(--gold)">${money(t)}</td></tr>
          </table>
          <div style="display:flex;gap:20px;align-items:center;margin-top:26px">
            <div style="width:84px;height:84px;flex:none;background:url('${o.insp}') ${o.inspPos}/cover"></div>
            <p class="small" style="color:var(--mute);font-size:20px">${o.inspNote}. Prices are 2026 retail estimates before tax, and coupons usually bring them down 20–40%.</p>
          </div>
        </div>
      </div>
      <div class="foot"><span>Crown &amp; Ash <i class="crest"></i> Option ${o.key} · ${o.name}</span><span><b>Create4Me</b></span></div>
    </section>`);
  }


  function renderSlide(o){
    return $(`<section data-label="Option ${o.key} Render">
      <div style="position:absolute;left:0;top:0;width:1920px;height:1080px;background:url('${o.render}') 50% 70%/cover;filter:blur(40px) brightness(.35);transform:scale(1.1)"></div>
      <div style="position:absolute;left:660px;top:0;width:603px;height:1080px;background:url('${o.render}') center/cover;box-shadow:0 0 80px rgba(0,0,0,.6)"></div>
      <div style="position:absolute;left:120px;top:96px;width:460px">
        <div class="eyebrow">Option ${o.key}</div>
        <h2 style="font-size:88px;margin-top:22px">${o.name}</h2>
        <div class="rule" style="width:220px;margin:34px 0"></div>
        <p class="body" style="font-size:25px">${o.tagline}</p>
      </div>
      <div style="position:absolute;left:1343px;top:96px;width:457px">
        <div class="eyebrow" style="color:var(--mute)">The rug</div>
        <div style="margin-top:22px">${rugEl(o.rug,'width:100%;height:150px')}</div>
        <p class="small" style="color:#d9d0c3;margin-top:16px;font-size:22px">${o.rug.label}</p>
        <div style="display:flex;gap:8px;margin-top:40px">${o.palette.map(p=>`<i style="flex:1;height:34px;background:${p[0]}"></i>`).join('')}</div>
        <div style="font:500 72px/1 var(--serif);margin-top:48px;color:var(--gold)">${money(total(o))}</div>
        <p class="small" style="color:var(--mute);font-size:19px;letter-spacing:.14em;text-transform:uppercase;margin-top:8px">est. materials · details next slide</p>
      </div>
      <p style="position:absolute;left:120px;bottom:44px;width:460px;font:400 18px/1.45 var(--sans);color:var(--mute-d)">AI-generated concept image of the actual Suite 4 storefront. Products, scale and exact placement will vary.</p>
      <div style="position:absolute;right:120px;bottom:44px;font:400 20px/1 var(--sans);letter-spacing:.18em;text-transform:uppercase;color:var(--gold)">Create4Me</div>
    </section>`);
  }
  function build(){
    const anchor = document.getElementById('opt-anchor');
    window.C4M_OPTIONS.forEach(o=>{ if(o.render) anchor.parentNode.insertBefore(renderSlide(o), anchor); anchor.parentNode.insertBefore(optionSlide(o), anchor); });
    anchor.remove();
    const g = document.getElementById('compare-grid');
    g.innerHTML = window.C4M_OPTIONS.map(o=>`
      <div style="border-top:2px solid #9a7636;padding-top:26px">
        <div style="display:flex;justify-content:space-between;align-items:baseline"><span class="eyebrow">Option ${o.key}</span><span class="eyebrow" style="color:#9b8f80">${o.tier}</span></div>
        <h3 style="font-size:50px;margin:14px 0 22px">${o.name}</h3>
        ${rugEl(o.rug,'width:100%;height:120px')}
        <div style="display:flex;gap:6px;margin-top:16px">${o.palette.map(p=>`<i style="flex:1;height:26px;background:${p[0]}"></i>`).join('')}</div>
        <div style="font:500 64px/1 var(--serif);margin-top:30px">${money(total(o))}</div>
        <p class="small" style="color:#6e6356;margin-top:6px;font-size:20px;letter-spacing:.12em;text-transform:uppercase">est. materials</p>
        <p class="small" style="color:#3d352d;margin-top:22px;font-size:22px">${o.pick}</p>
      </div>`).join('');
  }
  const picks = {A:'Most refined. Best match for the lounge interior.',B:'Most impact. Tall enough to be seen from the parking lot.',C:'Warmest. Echoes the neighbors\' café seating.',D:'Most mums per dollar, and fits a shallower sidewalk.',E:'Lowest cost. Easy to upgrade later.'};
  window.C4M_OPTIONS.forEach(o=>o.pick=picks[o.key]);
  build();
})();
