(function(){
const D=window.CA_DATA;
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),2400)};
const goTo=id=>window.scrollTo({top:$(id).getBoundingClientRect().top+scrollY-72,behavior:'smooth'});

/* THEME */
const sun='<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const moon='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';
const setIcon=()=>$('#themeBtn').innerHTML=document.documentElement.dataset.theme==='dark'?sun:moon;
setIcon();
$('#themeBtn').onclick=()=>{const t=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=t;localStorage.setItem('ca_theme',t);setIcon()};

/* AGE GATE */
const gate=$('#gate');
gate.dataset.mode=localStorage.getItem('ca_gatemode')||'yes';
const modeLbl=()=>$('#gateMode').textContent='Gate: '+(gate.dataset.mode==='yes'?'Yes/No':'Birthdate');
modeLbl();
$('#gateMode').onclick=()=>{gate.dataset.mode=gate.dataset.mode==='yes'?'dob':'yes';localStorage.setItem('ca_gatemode',gate.dataset.mode);modeLbl();resetGate()};
const passed=()=>{const v=localStorage.getItem('ca_age');return v?Date.now()<+v:sessionStorage.getItem('ca_age')==='1'};
const openSite=()=>{if($('#remember').checked)localStorage.setItem('ca_age',Date.now()+30*864e5);else sessionStorage.setItem('ca_age','1');gate.classList.add('gone');document.body.classList.remove('locked')};
if(passed()){gate.classList.add('gone');document.body.classList.remove('locked')}
$('#gateYes').onclick=openSite;
$('#gateNo').onclick=()=>gate.classList.add('no');
['dobM','dobD'].forEach((id,i)=>$('#'+id).addEventListener('input',e=>{e.target.value=e.target.value.replace(/\D/g,'');if(e.target.value.length===2)$(i?'#dobY':'#dobD').focus()}));
$('#dobY').addEventListener('keydown',e=>{if(e.key==='Enter')checkDob()});
$('#enterBtn').onclick=checkDob;
function checkDob(){const m=+$('#dobM').value,d=+$('#dobD').value,y=+$('#dobY').value,dt=new Date(y,m-1,d);
  if(!m||!d||String(y).length!==4||dt.getMonth()!==m-1||y<1900){$('#gateErr').textContent='Please enter a valid date of birth.';return}
  const n=new Date();let a=n.getFullYear()-y;if(n.getMonth()<m-1||(n.getMonth()===m-1&&n.getDate()<d))a--;
  if(a<21){gate.classList.add('no');return}openSite()}
function resetGate(){localStorage.removeItem('ca_age');sessionStorage.removeItem('ca_age');gate.classList.remove('gone','no');document.body.classList.add('locked');['dobM','dobD','dobY'].forEach(i=>$('#'+i).value='');$('#gateErr').textContent=''}
$('#resetGate').onclick=()=>{resetGate();scrollTo(0,0)};

/* NAV */
const nav=$('#nav');const onS=()=>nav.classList.toggle('solid',scrollY>window.innerHeight*.7);onS();
addEventListener('scroll',onS,{passive:true});
$('#burger').onclick=()=>$('#mmenu').classList.add('open');
$('#mclose').onclick=()=>$('#mmenu').classList.remove('open');
$$('#mmenu a').forEach(a=>a.addEventListener('click',()=>$('#mmenu').classList.remove('open')));

/* SMOKE */
(function(){const c=$('#smoke'),x=c.getContext('2d');let W,H,P=[];
  const size=()=>{const r=c.getBoundingClientRect();W=c.width=r.width;H=c.height=r.height};size();addEventListener('resize',size);
  const pf=document.createElement('canvas');pf.width=pf.height=128;const p=pf.getContext('2d'),g=p.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,'rgba(230,210,180,.18)');g.addColorStop(1,'rgba(230,210,180,0)');p.fillStyle=g;p.fillRect(0,0,128,128);
  const sp=()=>P.push({x:W*Math.random(),y:H+40,r:70+Math.random()*120,vx:(Math.random()-.5)*.25,vy:-.2-Math.random()*.35,l:0,m:700+Math.random()*400});
  for(let i=0;i<18;i++){sp();P[i].y=Math.random()*H;P[i].l=Math.random()*400}
  (function f(){x.clearRect(0,0,W,H);if(P.length<26&&Math.random()<.1)sp();
    P.forEach(q=>{q.l++;q.x+=q.vx+Math.sin(q.l/90)*.2;q.y+=q.vy;q.r+=.15;const t=q.l/q.m;x.globalAlpha=Math.max(0,t<.2?t/.2:1-(t-.2)/.8)*.7;x.drawImage(pf,q.x-q.r,q.y-q.r,q.r*2,q.r*2)});
    P=P.filter(q=>q.l<q.m);requestAnimationFrame(f)})();
})();

/* FILM */
const fs=$('#filmScrim');
$('#filmBtn').onclick=()=>{$('#filmSlot').innerHTML='<iframe src="https://www.instagram.com/reel/DVJ3aNfAcWW/embed" style="width:100%;height:100%;border:0" allowfullscreen></iframe>';fs.classList.add('open')};
const closeFilm=()=>{fs.classList.remove('open');$('#filmSlot').innerHTML=''};
$('#filmClose').onclick=closeFilm;fs.onclick=e=>{if(e.target===fs)closeFilm()};

/* HUMIDOR */
let fS='all',fO='all';
const bucket=s=>s<=2?'mild':s===3?'med':'full';
const bars=n=>`<span class="strength">${[1,2,3,4,5].map(i=>`<i class="${i<=n?'f':''}"></i>`).join('')}</span>`;
function renderCigars(){const L=D.cigars.filter(c=>(fS==='all'||bucket(c.strength)===fS)&&(fO==='all'||c.origin===fO));
  $('#cigarGrid').innerHTML=L.length?L.map(c=>`<button class="cigar" data-id="${c.id}"><div class="ph"><img src="${c.img}" alt="" loading="lazy"><span class="tag">${c.tag}</span></div><div class="bd"><div class="maker">${c.maker}</div><h3>${c.name}</h3><div class="notes">${c.notes}</div><div class="row"><span>${c.origin.replace('Dominican Republic','Dominican Rep.')}</span>${bars(c.strength)}<span class="price">$${c.price}</span></div></div></button>`).join('')
  :`<div style="grid-column:1/-1;padding:48px;text-align:center;color:var(--muted);border:1px dashed var(--line2)">No matches here — our humidor holds far more than we show. Ask your host.</div>`}
renderCigars();
$('#filters').onclick=e=>{const b=e.target.closest('.chip');if(!b)return;
  if(b.dataset.s){fS=b.dataset.s;$$('[data-s]').forEach(x=>x.classList.toggle('on',x===b))}
  if(b.dataset.o){fO=b.dataset.o;$$('[data-o]').forEach(x=>x.classList.toggle('on',x===b))}renderCigars()};
const drawer=$('#drawer'),scrim=$('#scrim');
function openCigar(id){const c=D.cigars.find(x=>x.id===id);
  drawer.innerHTML=`<button class="x" aria-label="Close">✕</button><div class="dimg"><img src="${c.img}" alt=""></div><div class="dbody">
  <div class="eyebrow">${c.maker}</div><h3>${c.name}</h3>
  <div style="display:flex;gap:12px;align-items:center;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)">${c.body} ${bars(c.strength)}<span style="margin-left:auto;font-family:var(--serif);font-size:24px;letter-spacing:0;color:var(--text)">$${c.price}</span></div>
  <div class="specs"><div>Origin<b>${c.origin} · ${c.region}</b></div><div>Vitola<b>${c.vitola}</b></div><div>Wrapper<b>${c.wrapper}</b></div><div>Binder<b>${c.binder}</b></div><div style="grid-column:1/-1">Filler<b>${c.filler}</b></div></div>
  <div class="dh4">Tasting Profile</div>${Object.entries(c.profile).map(([k,v])=>`<div class="brow"><span>${k}</span><div class="tr"><i style="width:0" data-w="${v}"></i></div></div>`).join('')}
  <div class="pairbox"><div class="dh4">Recommended Pour</div><p>${c.pair}</p></div>
  <a href="#reserve" class="btn btn-gold" data-close style="width:100%">Reserve a Seat to Try It <span class="arr">→</span></a>
  <p style="font-size:12px;color:var(--muted);margin-top:12px;text-align:center">Available in-lounge · Members save up to 15%</p></div>`;
  drawer.classList.add('open');scrim.classList.add('open');drawer.scrollTop=0;
  requestAnimationFrame(()=>requestAnimationFrame(()=>$$('.tr i',drawer).forEach(i=>i.style.width=i.dataset.w+'%')));
  $('.x',drawer).onclick=closeDrawer;$('[data-close]',drawer).onclick=closeDrawer}
function closeDrawer(){drawer.classList.remove('open');scrim.classList.remove('open')}
scrim.onclick=closeDrawer;
$('#cigarGrid').onclick=e=>{const a=e.target.closest('.cigar');if(a)openCigar(a.dataset.id)};
addEventListener('keydown',e=>{if(e.key==='Escape'){closeDrawer();closeFilm()}});

/* BAR — pairing feature */
const PAIRMAP={'Ashton VSG':'ashton','Liga Privada No. 9':'liga9','Oliva Serie V':'olivav','Padrón 1964':'padron64','Fuente Hemingway':'fuente','Davidoff Late Hour':'davidoff','Any Maduro':'padron64','My Father Le Bijou':'mfather','House Blend No. 1':'crownhouse'};
const findCigar=n=>D.cigars.find(c=>c.id===PAIRMAP[n]);
const drinkImg={bourbon:'assets/stock/whiskey1.jpg',scotch:'assets/stock/whiskey2.jpg',cocktails:'assets/stock/cigar3.jpg',wine:'assets/stock/whiskey3.jpg'};
let cat='bourbon',sel=0;
function renderFeature(){const [n,o,d,p,pair]=D.menu[cat][sel];const cg=findCigar(pair);
  $('#feature').innerHTML=`<div class="ph"><img src="${drinkImg[cat]}" alt=""></div><div class="fb"><div class="k">Tonight's Pairing</div><h3>${n}</h3>
  <div class="combo"><div><small>Pour</small>${o}</div><span>&amp;</span><div><small>Cigar</small>${cg?cg.maker+' '+cg.name:pair}</div></div><p>${d}.</p>
  ${cg?`<button class="link" style="margin-top:16px;color:#d4b98a;border-color:rgba(212,185,138,.3)" data-cg="${cg.id}">View the cigar →</button>`:''}</div>`;
  const b=$('[data-cg]',$('#feature'));if(b)b.onclick=()=>openCigar(b.dataset.cg)}
function renderMenu(){$('#menuList').innerHTML=D.menu[cat].map(([n,o,d,p,pair],i)=>`<li class="mi" data-i="${i}" style="cursor:pointer;${i===sel?'':'opacity:.78'}"><div class="top"><h4>${n}</h4><span class="dots"></span><span class="pr">${p}</span></div><p>${d}</p>${pair!=='—'?`<div class="pairing">Pairs with <b>${pair}</b></div>`:''}</li>`).join('');renderFeature()}
renderMenu();
$('#tabs').onclick=e=>{const b=e.target.closest('.tab');if(!b)return;$$('.tab').forEach(x=>x.classList.toggle('on',x===b));cat=b.dataset.t;sel=0;renderMenu()};
$('#menuList').onclick=e=>{const li=e.target.closest('.mi');if(!li)return;sel=+li.dataset.i;renderMenu()};

/* MUSIC */
$('#events').innerHTML=D.events.slice(0,4).map((ev,i)=>`<div class="ev"><div class="d">${ev.d}<small>${ev.dow} ${ev.m}</small></div><div><h3>${ev.title}</h3><div class="g">${ev.genre.split('·')[1]||ev.genre} · ${ev.time.split('–')[0].trim()}${ev.seats?` · <em>${ev.seats}</em>`:''}</div></div><button class="btn btn-light btn-sm" data-ev="${i}">Reserve</button></div>`).join('');
$('#events').onclick=e=>{const b=e.target.closest('[data-ev]');if(!b)return;const ev=D.events[+b.dataset.ev];Object.assign(B,{type:'event',eventName:ev.title,step:1,day:null,time:null});renderBooker();goTo('#reserve')};
$('#heroEv').textContent=D.events[0].title;

/* MEMBERSHIP */
const PR={elite:{y:['$699','/ year','Save $81 vs. monthly'],m:['$65','/ month','Billed monthly · cancel anytime']},vip:{y:['$499','/ year','Save $41 vs. monthly'],m:['$45','/ month','Billed monthly · cancel anytime']}};
$('#billing').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#billing button').forEach(x=>x.classList.toggle('on',x===b));
  $$('.tier').forEach(t=>{const [p,per,sub]=PR[t.dataset.tier][b.dataset.b];$('[data-price]',t).textContent=p;$('[data-per]',t).textContent=per;$('[data-sub]',t).textContent=sub})};
$('#eliteDots').innerHTML=Array.from({length:9},(_,i)=>`<i class="${i<6?'t':''}"></i>`).join('');
$$('[data-join]').forEach(b=>b.onclick=()=>{Object.assign(B,{type:'member',eventName:b.dataset.join+' — Tour & Enrollment',step:1});renderBooker();goTo('#reserve')});

/* BOOKER */
const TYPES={lounge:['Lounge Seating','Leather seating in the main lounge. Your chair, held.','1–8 guests'],private:['Private Room','Birthdays, corporate evenings and celebrations in the VIP room.','8–20 guests'],event:['Show or Tasting','A seat at an upcoming live performance or tasting.','Limited seating'],member:['Membership Tour','See the lockers and VIP lounge, meet the founders.','15 minutes']};
const B={step:0,type:null,day:null,time:null,party:2,eventName:null,name:'',email:'',phone:'',note:''};
const DOW=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],now=new Date();
const days=Array.from({length:14},(_,i)=>{const d=new Date(now);d.setDate(now.getDate()+i);return d});
const TIMES=['4:00','5:00','6:00','7:00','8:00','9:00','10:00'].map(t=>t+' PM');
const STEPS=['Experience','Date','Guests','Details'];
const ok=()=>[!!B.type,B.day!=null&&!!B.time,B.party>0,B.name&&/.+@.+\..+/.test(B.email)][B.step];
function renderBooker(){
  $('#steps').innerHTML=STEPS.map((s,i)=>`<div class="${i===B.step?'on':i<B.step?'done':''}"><b>${i<B.step?'✓':i+1}</b><span>${s}</span></div>`).join('');
  const body=$('#bkBody'),foot=$('#bkFoot');const dd=B.day!=null?days[B.day]:null;
  if(B.step===4){body.innerHTML=`<div class="confirm"><div class="seal"><span>✓</span></div><h3 class="h2" style="font-size:32px">Your chair <em>is held.</em></h3><p style="color:var(--muted);margin-top:8px;font-size:14px">Confirmation sent to ${B.email}</p>
    <div class="ticket"><div><span>Experience</span>${B.eventName||TYPES[B.type][0]}</div><div><span>Date</span>${DOW[dd.getDay()]}, ${dd.toLocaleString('en-US',{month:'short'})} ${dd.getDate()}</div><div><span>Time</span>${B.time}</div><div><span>Guests</span>${B.party}</div></div></div>`;
    foot.innerHTML=`<span class="bk-sum">Changes? Call <b>803-638-4228</b></span><button class="btn btn-ghost btn-sm" id="bkNew">New reservation</button>`;
    $('#bkNew').onclick=()=>{Object.assign(B,{step:0,type:null,day:null,time:null,party:2,eventName:null});renderBooker()};return}
  if(B.step===0){body.innerHTML=`<h3>What brings you in?</h3><div class="types">${Object.entries(TYPES).map(([k,v])=>`<button class="type ${B.type===k?'on':''}" data-k="${k}"><em>${v[2]}</em><b>${v[0]}</b><span>${v[1]}</span></button>`).join('')}</div>`;
    $$('.type',body).forEach(b=>b.onclick=()=>{B.type=b.dataset.k;B.eventName=null;renderBooker()})}
  if(B.step===1){body.innerHTML=`<h3>${B.eventName||'Choose a date'}</h3><span class="sublbl">Next two weeks · <span style="color:var(--ember)">●</span> live music · closed Mondays</span>
    <div class="days">${days.map((d,i)=>`<button class="day ${B.day===i?'on':''}" data-i="${i}" ${d.getDay()===1?'disabled':''}><small>${DOW[d.getDay()]}</small><b>${d.getDate()}</b>${d.getDay()===5?'<span class="e"></span>':'<span class="ne"></span>'}</button>`).join('')}</div>
    ${B.day!=null?`<span class="sublbl">Available times</span><div class="times">${TIMES.map((t,i)=>`<button class="time ${B.time===t?'on':''}" data-t="${t}" ${(B.day*3+i)%5===0?'disabled':''}>${t}</button>`).join('')}</div>`:''}`;
    $$('.day',body).forEach(b=>b.onclick=()=>{B.day=+b.dataset.i;B.time=null;renderBooker()});$$('.time',body).forEach(b=>b.onclick=()=>{B.time=b.dataset.t;renderBooker()})}
  if(B.step===2){const mx=B.type==='private'?20:8;body.innerHTML=`<h3>How many guests?</h3><div class="stepper"><button id="pm">−</button><b>${B.party}</b><button id="pp">+</button></div>
    <p style="color:var(--muted);margin-top:14px;font-size:14px">${B.type==='private'?'The private room hosts up to 20.':'Parties larger than 8 — choose Private Room.'}</p>
    <p style="margin-top:26px;padding:16px 18px;background:var(--bg2);font-size:13px;color:var(--text2);max-width:460px">Crown Elite members receive priority seating and up to three complimentary guest passes.</p>`;
    $('#pm').onclick=()=>{B.party=Math.max(1,B.party-1);renderBooker()};$('#pp').onclick=()=>{B.party=Math.min(mx,B.party+1);renderBooker()}}
  if(B.step===3){body.innerHTML=`<h3>Your details</h3><div class="fields"><div class="field"><label>Full name</label><input id="fN" value="${B.name}"></div><div class="field"><label>Phone</label><input id="fP" value="${B.phone}"></div><div class="field full"><label>Email</label><input id="fE" type="email" value="${B.email}"></div><div class="field full"><label>Occasion or requests (optional)</label><textarea id="fT">${B.note}</textarea></div></div><p style="font-size:12px;color:var(--muted);margin-top:18px">All guests must present valid ID showing 21+ on arrival.</p>`;
    $$('input,textarea',body).forEach(i=>i.oninput=()=>{B.name=$('#fN').value;B.phone=$('#fP').value;B.email=$('#fE').value;B.note=$('#fT').value;$('#bkNext').disabled=!ok()})}
  const sum=[B.type&&TYPES[B.type][0],dd&&`${DOW[dd.getDay()]} ${dd.getDate()}`,B.time,B.step>=2&&`${B.party} guests`].filter(Boolean).join(' · ');
  foot.innerHTML=`<span class="bk-sum">${B.step>0?'<button class="linkbtn" id="bkBack">← Back</button>':''}<b>${sum||'Select an experience'}</b></span><button class="btn btn-gold btn-sm" id="bkNext" ${ok()?'':'disabled'}>${B.step===3?'Confirm':'Continue'} <span class="arr">→</span></button>`;
  $('#bkNext').onclick=()=>{if(ok()){B.step++;renderBooker()}};if($('#bkBack'))$('#bkBack').onclick=()=>{B.step--;renderBooker()}}
renderBooker();

$('#councilForm').onsubmit=e=>{e.preventDefault();e.target.reset();toast('Welcome to the Crown Council.')};

/* PORTAL */
const portal=$('#portal');
$$('[data-portal]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();$('#mmenu').classList.remove('open');portal.classList.add('open');document.body.classList.add('locked')}));
const closePortal=()=>{portal.classList.remove('open');if(gate.classList.contains('gone'))document.body.classList.remove('locked')};
$('#portalClose').onclick=closePortal;$$('[data-closeportal]').forEach(a=>a.addEventListener('click',closePortal));
$('#signIn').onclick=()=>{portal.classList.add('in');portal.scrollTop=0;renderDash()};
function renderDash(){const pts=1840,goal=2500,pct=pts/goal,R=50,C=2*Math.PI*R;
  $('#dash').innerHTML=`<div class="dhead"><div><span class="badge">♛ Crown Elite · Member since 2025</span><h2 class="h2">Good evening, <em>Justin.</em></h2></div><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-ghost btn-sm" id="dRes">Reserve my seat</button><button class="btn btn-gold btn-sm" id="dGuest">Send a guest pass</button></div></div>
  <div class="dgrid">
   <div class="card c-locker"><h4>My Locker</h4><div class="plate"><small>Crown Elite · Locker</small><b>07</b><span>J. Nelson</span></div><div class="inv"><div><span>Padrón 1964 Maduro</span><span>×4</span></div><div><span>Liga Privada No. 9</span><span>×2</span></div><div><span>Blanton's · bottle keep</span><span>⅔</span></div></div><p style="font-size:11px;color:#8f8476;margin-top:12px">Humidity 69% · Last visit Sep 19</p></div>
   <div class="card c-loyal"><h4>Crown Rewards <a href="#">History</a></h4><div class="ringw"><svg width="128" height="128" viewBox="0 0 128 128"><circle cx="64" cy="64" r="${R}" fill="none" stroke="var(--line)" stroke-width="4"/><circle id="arc" cx="64" cy="64" r="${R}" fill="none" stroke="var(--accent)" stroke-width="4" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C}" transform="rotate(-90 64 64)" style="transition:stroke-dashoffset 1.3s cubic-bezier(.2,.7,.1,1)"/><text x="64" y="70" text-anchor="middle" fill="var(--text)" font-family="Bodoni Moda" font-size="24">${Math.round(pct*100)}%</text></svg><div><div class="big">${pts.toLocaleString()}</div><div style="font-size:9px;letter-spacing:.28em;text-transform:uppercase;color:var(--accent)">Points</div><p>${goal-pts} points to a complimentary box of five from the house reserve.</p></div></div></div>
   <div class="card c-perks"><h4>This Month</h4><div class="stat"><span>Lounge credit</span><b>$40<small> left</small></b></div><div class="stat"><span>Guest passes</span><b>2<small> / 3</small></b></div><div class="stat" style="border:0"><span>Gift item</span><b style="font-size:16px;font-family:var(--serif);font-style:italic">Ready</b></div></div>
   <div class="card c-events"><h4>Members-Only Events <a href="#">All</a></h4>${[['04','Oct','Elite Private Tasting: Padrón Family Reserve','7 PM · VIP Lounge · 12 seats',0],['11','Oct','Bourbon &amp; Blend Masterclass','6:30 PM · Members +1',0],['02','Oct','Velvet Hour Jazz — Reserved Row','8 PM · Priority seating',1]].map(e=>`<div class="mev"><div class="d"><b>${e[0]}</b><small>${e[1]}</small></div><div><h5>${e[2]}</h5><p>${e[3]}</p></div><button class="${e[4]?'':'rsvp'}" data-rsvp>${e[4]?'✓ Going':'RSVP'}</button></div>`).join('')}</div>
   <div class="card c-hist"><h4>Recent Visits</h4><div class="hist"><div><span>Sep 19 · Sax &amp; Smoke</span><em>+120</em></div><div><span>Sep 12 · Lounge</span><em>+85</em></div><div><span>Sep 05 · Neo-Soul Sessions</span><em>+140</em></div></div></div>
  </div>`;
  requestAnimationFrame(()=>requestAnimationFrame(()=>$('#arc').style.strokeDashoffset=C*(1-pct)));
  $$('[data-rsvp]').forEach(b=>b.onclick=()=>{const on=b.textContent.includes('Going');b.textContent=on?'RSVP':'✓ Going';b.classList.toggle('rsvp',on);toast(on?'RSVP cancelled':'You\u2019re on the list.')});
  $('#dGuest').onclick=()=>toast('Guest pass link copied — valid 7 days.');
  $('#dRes').onclick=()=>{closePortal();Object.assign(B,{type:'lounge',step:1});renderBooker();setTimeout(()=>goTo('#reserve'),350)}}

/* REVEAL */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
$$('.reveal').forEach(el=>io.observe(el));
})();
