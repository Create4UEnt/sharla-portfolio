/* Crown & Ash — v2 stylist concepts. Prices = approx. 2026 retail before tax. */
window.C4M2 = [
  {
    key:'01', render:'assets/render-v2-01.png', name:'Maduro Reserve', rec:true, tier:'Recommended',
    idea:'Your black planters, turned into a pair of "banded cigars" framing the door.',
    story:'Tall satin-black tapered planters, each wrapped with an ivory and gold band that has the Crown & Ash crest, like the band on a cigar. Bronze faux tobacco-style leaves add height, and the base is one massed color of maduro-burgundy mums with silver dusty miller spilling over the rim. The pumpkins are white and ash-grey, set on the lounge\'s own cedar cigar boxes.',
    why:'It has the most height, the clearest symmetry and the strongest brand moment. The band is the detail guests will photograph.',
    palette:[['#141414','Satin black'],['#4e1f22','Maduro mum'],['#7a5230','Cured leaf'],['#efe9dc','Lumina white'],['#9aa0a0','Ash slate'],['#c8a15a','Band gold']],
    rug:{bg:'#141414', border:'#efe6d2', label:'3×5 black flatweave with a thin ivory border. A solid rug looks custom, while a busy pattern looks store-bought.'},
    el:{ planter:'taper', pc:'#141414', ph:30, pw:18, band:{c:'#efe6d2', edge:'#c8a15a', crest:true},
         stems:{c:['#5e3a20','#7a5230','#8e6436','#6a4426','#4a2e1a'], h:150},
         mum:'#4e1f22', mumHi:'#7a3036', trail:'#b9bdb6',
         box:{x:300,w:80,h:26}, pumpkins:[{x:300,y:26,w:66,h:44,c:'#efe9dc'},{x:352,y:26,w:44,h:30,c:'#9aa0a0'},{x:250,y:0,w:88,h:56,c:'#efe9dc'},{x:350,y:0,w:52,h:34,c:'#8d9494'}], stemC:'#c8a15a',
         lantern:null, marks:[[190,180,'1'],[190,300,'2'],[190,395,'3'],[330,48,'4']] },
    legend:['Crest band, ivory with gold edges, at 60% of the planter height','Maduro mums plus silver dusty miller spilling over the rim','Faux bronze "tobacco" leaves, about 5′ to the tips','White and slate pumpkins on a cedar cigar box'],
    items:[
      ['Tall tapered planters 28–32″, satin black','Target / Hobby Lobby',2,45],
      ['Faux bronze magnolia or large-leaf stems, 36″+','Hobby Lobby (50% week)',6,10],
      ['Mums 9″, burgundy only','Lowe\u2019s / Walmart',4,9],
      ['Dusty miller, 4″ pots','Lowe\u2019s',6,3],
      ['Faux pumpkins, white Lumina + slate "Jarrahdale"','Michaels',8,7],
      ['Crest band: 4″ ivory ribbon, gold trim, printed crest','Michaels + local print',1,30],
      ['Cedar cigar boxes as risers','From the lounge',2,0],
      ['Battery LED puck uplights, warm white, timer','Walmart / Amazon',2,15],
      ['Rug 3×5, black flatweave with ivory border','Target / Walmart',1,40],
      ['Pea gravel ballast + rug tape','Home Depot',1,18],
    ]
  },
  {
    key:'02', render:'assets/render-v2-02.png', name:'Copper & Cedar', tier:'Warmest',
    idea:'Your Option B urns, redesigned around the tobacco harvest instead of a porch.',
    story:'Aged-copper urns hold bundles of faux cured tobacco-style leaves (called "hands"), tied with twine the way leaf hangs in a Carolina curing barn. Smokebush-burgundy foliage and colorado-rust mums fill the base. Cedar crates lift a stack of white and copper-leafed pumpkins. It\'s warmer and more rustic, but still disciplined.',
    why:'It tells the best story: fall is tobacco harvest season in South Carolina. I swapped out the pampas grass because it looks more like a boho wedding than a cigar lounge.',
    palette:[['#8a4f2c','Aged copper'],['#a24a26','Colorado mum'],['#4a1e2b','Smokebush'],['#b08a4a','Cured leaf'],['#efe9dc','Ivory'],['#1f1512','Oscuro']],
    rug:{bg:'#5a3522', border:'#b08a4a', label:'4×6 tonal tobacco-brown flatweave with a thin wheat border. Warm, but quiet.'},
    el:{ planter:'urn', pc:'linear-gradient(90deg,#5e3620,#a8683c 45%,#6a3d22)', ph:28, pw:20, band:{c:'#1f1512', edge:'#c8a15a', crest:true},
         stems:{c:['#b08a4a','#9a7238','#c29a55','#8a6232','#a8824a'], h:160, bundle:true},
         mum:'#a24a26', mumHi:'#c8683a', trail:'#4a1e2b',
         box:{x:300,w:96,h:40,crate:true}, pumpkins:[{x:300,y:40,w:70,h:46,c:'#efe9dc'},{x:250,y:0,w:84,h:54,c:'#b8743e'},{x:356,y:0,w:56,h:36,c:'#efe9dc'}], stemC:'#6b4a2b',
         lantern:{x:440,c:'#8a4f2c'}, marks:[[190,170,'1'],[190,305,'2'],[190,400,'3'],[330,80,'4']] },
    legend:['Copper urn with a black and gold crest band','Colorado-rust mums with burgundy smokebush','Faux tobacco-leaf "hands" tied with jute','White + copper pumpkins on a cedar crate, copper lantern'],
    items:[
      ['Urn planters 26–30″, aged-copper finish','Hobby Lobby (50% week)',2,55],
      ['Faux large dried-leaf stems (tobacco look)','Hobby Lobby / Michaels',8,8],
      ['Faux smokebush / burgundy foliage','Hobby Lobby',2,8],
      ['Mums 9″, rust only','Lowe\u2019s / Walmart',4,9],
      ['Faux pumpkins, white + copper','Michaels',6,8],
      ['Crest band: black ribbon, gold trim, printed crest','Michaels + local print',1,30],
      ['Cedar crates as risers','Michaels',2,12],
      ['Copper LED lanterns','Target',2,30],
      ['Rug 4×6, tonal tobacco flatweave','Target / Walmart',1,50],
      ['Pea gravel ballast + rug tape','Home Depot',1,18],
    ]
  },
  {
    key:'03', render:'assets/render-v2-03.png', name:'White Ash', tier:'Lowest cost',
    idea:'Black and white, like a tuxedo. The "Ash" in Crown & Ash.',
    story:'Low black cylinders filled edge to edge with white mums and silver dusty miller, sitting beside sculptural towers of three stacked white pumpkins with gold-leafed stems. There are no tall stems and only two colors. It reads modern and expensive, and it costs the least.',
    why:'You mentioned white pumpkins. They look most elegant stacked into towers and kept to a single color. Scattered around, they\'d just look like farm-stand pumpkins.',
    palette:[['#141414','Black'],['#efe9dc','White mum'],['#f6f1e6','Lumina white'],['#b9bdb6','Dusty miller'],['#c8a15a','Gold leaf'],['#2a2826','Charcoal']],
    rug:{bg:'#2a2826', border:'#2a2826', label:'3×5 solid charcoal flatweave. It stays in the background so the white pieces stand out.'},
    el:{ planter:'cyl', pc:'#141414', ph:20, pw:18, band:{c:'#c8a15a', edge:'#c8a15a', thin:true},
         stems:null, mum:'#efe9dc', mumHi:'#ffffff', trail:'#b9bdb6',
         box:null, tower:{x:320,c:'#f3eee3'}, stemC:'#c8a15a',
         lantern:null, marks:[[190,110,'1'],[190,185,'2'],[320,160,'3']] },
    legend:['Black cylinder with a thin gold pinstripe','White mums massed edge to edge, with dusty miller','Three-pumpkin tower with gold-leafed stems'],
    items:[
      ['Cylinder planters 18–20″, black resin','Walmart',2,25],
      ['Mums 9″, white only','Lowe\u2019s / Walmart',4,8],
      ['Dusty miller, 4″ pots','Lowe\u2019s',6,3],
      ['Faux white pumpkins, L / M / S for towers','Michaels / Dollar General',6,7],
      ['Gold leaf paint + gold pinstripe tape','Michaels',1,14],
      ['Rug 3×5, solid charcoal flatweave','Walmart',1,30],
      ['Pea gravel ballast, dowel for towers, rug tape','Home Depot',1,18],
    ]
  }
];

(function(){
  const S = 6; // px per inch on elevation
  const $ = h=>{const t=document.createElement('template');t.innerHTML=h.trim();return t.content.firstChild;};
  const money = n=>'$'+Math.round(n).toLocaleString();
  const total = c=>c.items.reduce((s,i)=>s+i[2]*i[3],0);
  const G = 60; // ground offset from bottom

  function pumpkin(p,stemC){
    return `<div style="position:absolute;left:${p.x-p.w/2}px;bottom:${G+p.y}px;width:${p.w}px;height:${p.h}px;border-radius:50%/55% 55% 45% 45%;background:radial-gradient(ellipse at 35% 30%,rgba(255,255,255,.35),transparent 55%),repeating-linear-gradient(90deg,rgba(0,0,0,.0) 0 ${p.w/6-2}px,rgba(0,0,0,.12) ${p.w/6-2}px ${p.w/6}px),${p.c}"></div>
    <div style="position:absolute;left:${p.x-3}px;bottom:${G+p.y+p.h-4}px;width:6px;height:${Math.max(8,p.h/4)}px;background:${stemC};border-radius:2px"></div>`;
  }
  function elev(c){
    const e=c.el, cx=190, H=e.ph*S, W=e.pw*S;
    let h=`<div class="elev" style="position:relative;width:760px;height:620px;overflow:hidden;background:#1a1512">`;
    // brick pier + glass
    h+=`<div style="position:absolute;left:0;top:0;width:420px;bottom:${G}px;background:repeating-linear-gradient(0deg,#8e4332 0 16px,#6e3326 16px 18px)"></div>`;
    h+=`<div style="position:absolute;left:420px;top:0;right:0;bottom:${G}px;background:linear-gradient(180deg,#27303a,#141a20);border-left:10px solid #2b2724"></div>`;
    h+=`<div style="position:absolute;left:620px;top:0;width:10px;bottom:${G}px;background:#2b2724"></div>`;
    h+=`<div style="position:absolute;left:0;right:0;bottom:0;height:${G}px;background:#c9bda9"></div>`;
    // uplight glow
    h+=`<div style="position:absolute;left:${cx-160}px;bottom:${G}px;width:320px;height:520px;background:radial-gradient(ellipse 45% 60% at 50% 100%,rgba(255,196,120,.22),transparent 70%)"></div>`;
    // stems
    if(e.stems){
      const ang=e.stems.bundle?[-14,-6,0,7,15]:[-26,-12,2,14,28];
      e.stems.c.forEach((col,i)=>{
        h+=`<div style="position:absolute;left:${cx-18+(i-2)*8}px;bottom:${G+H+10}px;width:36px;height:${e.stems.h-(i%2)*18}px;background:linear-gradient(90deg,${col},rgba(0,0,0,.25) 50%,${col});border-radius:50% 50% 50% 50%/80% 80% 20% 20%;transform:rotate(${ang[i]}deg);transform-origin:50% 100%"></div>`;
      });
      if(e.stems.bundle) h+=`<div style="position:absolute;left:${cx-16}px;bottom:${G+H+22}px;width:32px;height:8px;background:#caa76a;border-radius:3px"></div>`;
    }
    // mum dome
    h+=`<div style="position:absolute;left:${cx-W/2-22}px;bottom:${G+H-26}px;width:${W+44}px;height:${e.stems?78:90}px;border-radius:50% 50% 30% 30%/75% 75% 25% 25%;background:radial-gradient(circle at 50% 50%,${e.mumHi} 0 2.5px,transparent 3.5px) 0 0/12px 12px,${e.mum}"></div>`;
    // trailing
    [[-W/2-18,-40],[W/2-4,-50],[-W/2+4,-58],[W/2-26,-34]].forEach(([dx,dy])=>{
      h+=`<div style="position:absolute;left:${cx+dx}px;bottom:${G+H+dy}px;width:26px;height:34px;border-radius:50%;background:${e.trail};opacity:.95"></div>`;
    });
    // planter
    const clip = e.planter==='taper'?'polygon(0 0,100% 0,82% 100%,18% 100%)':e.planter==='urn'?'polygon(8% 0,92% 0,86% 8%,100% 32%,94% 62%,74% 84%,80% 100%,20% 100%,26% 84%,6% 62%,0 32%,14% 8%)':'none';
    const bandTop = e.planter==='cyl'?38:e.planter==='urn'?44:26;
    const bh = e.band.thin?6:26;
    h+=`<div style="position:absolute;left:${cx-W/2}px;bottom:${G}px;width:${W}px;height:${H}px;background:${e.pc};clip-path:${clip};border-radius:${e.planter==='cyl'?'4px':'0'}">
        <div style="position:absolute;left:0;right:0;top:${bandTop}%;height:${bh}px;background:${e.band.c};${e.band.thin?'':`border-top:3px solid ${e.band.edge};border-bottom:3px solid ${e.band.edge}`}"></div>
        ${e.band.crest?`<div style="position:absolute;left:50%;top:calc(${bandTop}% + ${bh/2-7}px);width:14px;height:14px;margin-left:-7px;transform:rotate(45deg);background:${e.band.edge}"></div>`:''}
      </div>`;
    // box / crate
    if(e.box){
      h+=`<div style="position:absolute;left:${e.box.x-e.box.w/2}px;bottom:${G}px;width:${e.box.w}px;height:${e.box.h}px;background:${e.box.crate?'repeating-linear-gradient(0deg,#9a6a3e 0 10px,#6e4526 10px 13px)':'linear-gradient(#b0744a,#8e5634)'};box-shadow:inset 0 0 0 2px rgba(0,0,0,.25)"></div>`;
    }
    // pumpkins (draw lower first)
    (e.pumpkins||[]).slice().sort((a,b)=>b.y-a.y).reverse().forEach(p=>h+=pumpkin(p,e.stemC));
    if(e.tower){
      const t=e.tower; let y=0;
      [[132,78],[100,60],[70,44]].forEach(([w,hh])=>{h+=pumpkin({x:t.x,y,w,h:hh,c:t.c},e.stemC);y+=hh-8;});
      h+=pumpkin({x:t.x+92,y:0,w:56,h:36,c:t.c},e.stemC);
    }
    if(e.lantern){
      const L=e.lantern;
      h+=`<div style="position:absolute;left:${L.x}px;bottom:${G}px;width:54px;height:108px;background:${L.c};clip-path:polygon(10% 12%,90% 12%,100% 18%,100% 100%,0 100%,0 18%)"><div style="position:absolute;left:12px;right:12px;top:28px;bottom:10px;background:radial-gradient(ellipse at 50% 70%,#ffd08a,#b87634 60%,#3a2414)"></div></div>`;
    }
    // height dimension
    const top = e.stems? H+10+e.stems.h-6 : Math.max(H+50, e.tower?200:0);
    const inches = Math.round(top/S);
    h+=`<div style="position:absolute;left:28px;bottom:${G}px;height:${top}px;border-left:1.5px solid #c8a15a"><div style="position:absolute;left:-7px;top:0;width:14px;border-top:1.5px solid #c8a15a"></div><div style="position:absolute;left:-7px;bottom:0;width:14px;border-top:1.5px solid #c8a15a"></div>
      <span style="position:absolute;left:10px;top:50%;transform:translateY(-50%);font:500 22px/1 var(--sans);letter-spacing:.08em;color:#e2c88f;background:rgba(26,21,18,.8);padding:4px 6px">${Math.floor(inches/12)}′${inches%12?(inches%12)+'″':''}</span></div>`;
    // markers
    e.marks.forEach(([x,y,n])=>h+=`<div style="position:absolute;left:${x-17}px;bottom:${G+y-17}px;width:34px;height:34px;border-radius:50%;background:#16120f;border:1.5px solid #c8a15a;color:#e2c88f;font:600 18px/31px var(--sans);text-align:center">${n}</div>`);
    h+=`<span style="position:absolute;left:440px;top:20px;font:500 20px/1.3 var(--sans);letter-spacing:.16em;text-transform:uppercase;color:#8a9aa6">Glass · door →</span>`;
    h+=`<span style="position:absolute;right:18px;bottom:18px;font:500 20px/1 var(--sans);letter-spacing:.14em;text-transform:uppercase;color:#6e6356">Left pier · mirrored on the right</span>`;
    h+=`</div>`;
    return h;
  }
  function rug(r,style){return `<div style="${style};background:${r.bg};box-shadow:inset 0 0 0 8px ${r.bg},inset 0 0 0 11px ${r.border}"></div>`;}

  function conceptSlide(c){
    return $(`<section data-label="Concept ${c.key}">
      <div class="pad">
        <div style="display:flex;gap:26px;align-items:baseline"><span class="eyebrow">Concept ${c.key}</span>${c.rec?'<span class="tag" style="background:var(--gold);color:var(--ink)">Recommended</span>':`<span class="eyebrow" style="color:var(--mute)">${c.tier}</span>`}</div>
        <h2 style="font-size:104px;margin-top:22px">${c.name}</h2>
        <p style="font:italic 400 38px/1.25 var(--serif);color:var(--gold-l);margin-top:18px;max-width:820px">${c.idea}</p>
        <p class="body" style="font-size:26px;max-width:820px;margin-top:30px">${c.story}</p>
        <div style="max-width:820px;margin-top:34px;padding-top:26px;border-top:1px solid rgba(200,161,90,.35)">
          <div class="eyebrow" style="font-size:20px">Stylist's note</div>
          <p class="body" style="font-size:25px;margin-top:14px;color:#cbbfae">${c.why}</p>
        </div>
      </div>
      <div style="position:absolute;left:1040px;top:96px">${elev(c)}
        <ol style="list-style:none;margin-top:22px;width:760px;display:grid;grid-template-columns:1fr 1fr;gap:12px 30px">${c.legend.map((l,i)=>`<li style="font:400 22px/1.35 var(--sans);color:#d9d0c3;display:flex;gap:12px"><b style="color:var(--gold);font-weight:600">${i+1}</b>${l}</li>`).join('')}</ol>
      </div>
      <div class="foot"><span>Crown &amp; Ash <i class="crest"></i> Concept ${c.key}</span><span>Elevation · not to scale</span></div>
    </section>`);
  }
  function specSlide(c){
    const rows=c.items.map(i=>`<tr><td>${i[0]}${i[2]>1?` <span style="color:#9b8f80">× ${i[2]}</span>`:''}</td><td class="store" style="color:#9a7636">${i[1]}</td><td class="r">${i[3]?money(i[2]*i[3]):'—'}</td></tr>`).join('');
    return $(`<section class="light" data-label="Concept ${c.key} Spec">
      <div class="pad" style="display:grid;grid-template-columns:600px 1fr;gap:100px">
        <div>
          <div class="eyebrow">Concept ${c.key} · Spec</div>
          <h2 style="font-size:76px">${c.name}</h2>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:44px">${c.palette.map(p=>`<div class="chip"><i style="background:${p[0]};height:82px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)"></i><span style="color:#6e6356;font-size:21px">${p[1]}</span></div>`).join('')}</div>
          <div style="display:flex;gap:26px;align-items:center;margin-top:44px">
            ${rug(c.rug,'width:150px;height:96px;flex:none')}
            <div><div class="eyebrow" style="font-size:19px">The rug</div><p class="small" style="margin-top:8px;color:#3d352d;font-size:23px">${c.rug.label}</p></div>
          </div>
        </div>
        <div style="padding-top:20px">
          <table class="list"><tr><th>Item</th><th>Where</th><th class="r">Est.</th></tr>${rows.replace(/<td>/g,'<td style="font-size:22px;color:#2a241e">')}
            <tr class="tot"><td style="color:#16120f">Estimated materials</td><td></td><td class="r" style="color:#9a7636">${money(total(c))}</td></tr>
          </table>
          <p class="small" style="color:#6e6356;margin-top:22px;font-size:21px">2026 retail estimates before tax. Buying during Hobby Lobby and Michaels 40–50% weeks lowers the total.</p>
        </div>
      </div>
      <div class="foot"><span>Crown &amp; Ash <i class="crest"></i> Concept ${c.key}</span><span><b>Create4Me</b></span></div>
    </section>`);
  }
  function renderSlide(c){
    return $(`<section data-label="Concept ${c.key} Render">
      <div style="position:absolute;inset:-60px;background:url('${c.render}') 50% 60%/cover;filter:blur(40px) brightness(.3)"></div>
      <div style="position:absolute;left:660px;top:0;width:603px;height:1080px;background:url('${c.render}') center/cover;box-shadow:0 0 80px rgba(0,0,0,.6)"></div>
      <div style="position:absolute;left:120px;top:96px;width:470px">
        <div class="eyebrow">Concept ${c.key}${c.rec?' · Recommended':''}</div>
        <h2 style="font-size:92px;margin-top:22px">${c.name}</h2>
        <div class="rule" style="width:220px;margin:34px 0"></div>
        <p style="font:italic 400 36px/1.3 var(--serif);color:var(--gold-l)">${c.idea}</p>
      </div>
      <div style="position:absolute;left:1343px;top:96px;width:457px">
        <div class="eyebrow" style="color:var(--mute)">What you're seeing</div>
        <ol style="list-style:none;margin-top:26px;display:grid;gap:18px">${c.legend.map((l,i)=>`<li style="font:400 24px/1.4 var(--sans);color:#d9d0c3;display:flex;gap:14px"><b style="color:var(--gold);font-weight:600">${i+1}</b>${l}</li>`).join('')}</ol>
        <div style="display:flex;gap:6px;margin-top:40px">${c.palette.map(p=>`<i style="flex:1;height:30px;background:${p[0]}"></i>`).join('')}</div>
        <div style="font:500 72px/1 var(--serif);margin-top:40px;color:var(--gold)">${money(total(c))}</div>
        <p class="small" style="color:var(--mute);font-size:20px;letter-spacing:.14em;text-transform:uppercase;margin-top:8px">est. materials</p>
      </div>
      <p style="position:absolute;left:120px;bottom:44px;width:470px;font:400 20px/1.45 var(--sans);color:var(--mute-d)">AI-generated concept of the actual Suite 4 storefront. Real products, scale and placement will vary.</p>
      <div style="position:absolute;right:120px;bottom:44px;font:400 20px/1 var(--sans);letter-spacing:.18em;text-transform:uppercase;color:var(--gold)">Create4Me</div>
    </section>`);
  }
  const anchor=document.getElementById('concepts-anchor');
  window.C4M2.forEach(c=>{if(c.render)anchor.parentNode.insertBefore(renderSlide(c),anchor);anchor.parentNode.insertBefore(conceptSlide(c),anchor);anchor.parentNode.insertBefore(specSlide(c),anchor);});
  anchor.remove();
  const g=document.getElementById('cmp');
  if(g) g.innerHTML=window.C4M2.map(c=>`<div style="border-top:2px solid ${c.rec?'var(--gold)':'#4a4036'};padding-top:28px">
      <div style="display:flex;justify-content:space-between"><span class="eyebrow">${c.key}</span><span class="eyebrow" style="color:${c.rec?'var(--gold)':'var(--mute)'}">${c.tier}</span></div>
      <h3 style="font-size:58px;margin:16px 0 22px">${c.name}</h3>
      <div style="display:flex;gap:6px">${c.palette.map(p=>`<i style="flex:1;height:30px;background:${p[0]}"></i>`).join('')}</div>
      <div style="font:500 72px/1 var(--serif);margin-top:30px;color:${c.rec?'var(--gold)':'var(--ivory)'}">${money(total(c))}</div>
      <p class="small" style="color:var(--mute);font-size:20px;letter-spacing:.14em;text-transform:uppercase;margin-top:6px">est. materials</p>
    </div>`).join('');
})();
