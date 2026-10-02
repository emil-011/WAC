/* ============================================================
   REBUFO — live timing · demo behaviour
   All race data is authored synthetic content for the UI demo.
   ============================================================ */
'use strict';

/* ---------- teams ---------- */
const TEAMS = {
  mclaren:    { name:'McLaren',          logo:'mclaren.webp',     color:'#FF8000' },
  redbull:    { name:'Red Bull Racing',  logo:'redbull.webp',     color:'#3671C6' },
  ferrari:    { name:'Ferrari',          logo:'ferrari.webp',     color:'#E8002D' },
  mercedes:   { name:'Mercedes',         logo:'mercedes.webp',    color:'#27F4D2' },
  aston:      { name:'Aston Martin',     logo:'astonmartin.webp', color:'#229971' },
  williams:   { name:'Williams',         logo:'williams.webp',    color:'#64C4FF' },
  racingbulls:{ name:'Racing Bulls',     logo:'racingbulls.webp', color:'#6692FF' },
  haas:       { name:'Haas',             logo:'haas.webp',        color:'#B6BABD' },
  stake:      { name:'Kick Sauber',      logo:'stake.webp',       color:'#52E252' },
  alpine:     { name:'Alpine',           logo:'alpine.webp',      color:'#FF87BC' },
};

/* every entry below is synthetic demo data */
const DRIVERS = [
  { pos:1,  code:'NOR', name:'Lando Norris',      num:4,  team:'mclaren',     flag:'great-britain', stints:[{c:'M',from:1,to:17},{c:'H',from:18,to:34}], pits:[18], gap:0,     last:'1:36.412', best:'1:34.982', s:['p','g','p'], temps:[98,101,96,99]  },
  { pos:2,  code:'PIA', name:'Oscar Piastri',      num:81, team:'mclaren',     flag:'australia',     stints:[{c:'M',from:1,to:16},{c:'H',from:17,to:34}], pits:[17], gap:2.418, last:'1:36.208', best:'1:35.114', s:['g','p','g'], temps:[99,100,97,98]  },
  { pos:3,  code:'VER', name:'Max Verstappen',    num:1,  team:'redbull',     flag:'netherlands',   stints:[{c:'H',from:1,to:19},{c:'M',from:20,to:34}], pits:[20], gap:7.903, last:'1:35.771', best:'1:35.012', s:['g','g','p'], temps:[97,98,99,100] },
  { pos:4,  code:'RUS', name:'George Russell',    num:63, team:'mercedes',    flag:'great-britain', stints:[{c:'H',from:1,to:21},{c:'M',from:22,to:34}], pits:[22], gap:11.204,last:'1:36.004', best:'1:35.220', s:['y','g','g'], temps:[100,101,98,99] },
  { pos:5,  code:'LEC', name:'Charles Leclerc',   num:16, team:'ferrari',     flag:'monaco',        stints:[{c:'M',from:1,to:15},{c:'H',from:16,to:34}], pits:[16], gap:14.771,last:'1:36.550', best:'1:34.870', s:['p','y','g'], temps:[101,102,99,100]},
  { pos:6,  code:'HAM', name:'Lewis Hamilton',    num:44, team:'ferrari',     flag:'great-britain', stints:[{c:'M',from:1,to:12},{c:'H',from:13,to:34}], pits:[13], gap:18.332,last:'1:35.902', best:'1:35.118', s:['g','g','y'], temps:[99,100,101,100]},
  { pos:7,  code:'ANT', name:'Andrea Kimi Antonelli',num:12,team:'mercedes',  flag:'italy',         stints:[{c:'M',from:1,to:19},{c:'H',from:20,to:34}], pits:[20], gap:21.050,last:'1:36.318', best:'1:35.640', s:['g','y','g'], temps:[100,101,99,101]},
  { pos:8,  code:'ALO', name:'Fernando Alonso',   num:14, team:'aston',       flag:'spain',         stints:[{c:'H',from:1,to:13},{c:'M',from:14,to:34}], pits:[14], gap:26.418,last:'1:36.742', best:'1:35.880', s:['y','g','y'], temps:[102,103,101,102]},
  { pos:9,  code:'SAI', name:'Carlos Sainz',      num:55, team:'williams',    flag:'spain',         stints:[{c:'M',from:1,to:18},{c:'H',from:19,to:34}], pits:[19], gap:29.771,last:'1:36.610', best:'1:35.702', s:['g','g','p'], temps:[99,100,98,100] },
  { pos:10, code:'ALB', name:'Alexander Albon',   num:23, team:'williams',    flag:'thailand',      stints:[{c:'H',from:1,to:24},{c:'M',from:25,to:34}], pits:[25], gap:33.205,last:'1:35.488', best:'1:35.401', s:['p','g','g'], temps:[97,99,98,99]   },
  { pos:11, code:'TSU', name:'Yuki Tsunoda',      num:22, team:'redbull',     flag:'japan',         stints:[{c:'M',from:1,to:20},{c:'H',from:21,to:34}], pits:[21], gap:36.882,last:'1:36.900', best:'1:35.930', s:['g','y','g'], temps:[100,102,99,101]},
  { pos:12, code:'HUL', name:'Nico Hulkenberg',   num:27, team:'stake',       flag:'germany',       stints:[{c:'H',from:1,to:23},{c:'M',from:24,to:34}], pits:[24], gap:40.117,last:'1:36.204', best:'1:35.990', s:['g','g','y'], temps:[99,100,100,101]},
  { pos:13, code:'STR', name:'Lance Stroll',      num:18, team:'aston',       flag:'canada',        stints:[{c:'M',from:1,to:21},{c:'H',from:22,to:34}], pits:[22], gap:44.509,last:'1:37.118', best:'1:36.220', s:['y','g','g'], temps:[101,103,100,102]},
  { pos:14, code:'OCO', name:'Esteban Ocon',      num:31, team:'haas',        flag:'france',        stints:[{c:'H',from:1,to:25},{c:'M',from:26,to:34}], pits:[26], gap:48.220,last:'1:36.980', best:'1:36.104', s:['g','g','g'], temps:[100,101,99,100]},
  { pos:15, code:'GAS', name:'Pierre Gasly',      num:10, team:'alpine',      flag:'france',        stints:[{c:'S',from:1,to:19},{c:'H',from:20,to:33},{c:'S',from:34,to:34}], pits:[20,33], gap:52.610,last:'1:34.880', best:'1:34.880', s:['p','p','g'], temps:[88,89,90,89], status:'pit' },
  { pos:16, code:'LAW', name:'Liam Lawson',       num:30, team:'racingbulls', flag:null, cc:'NZ',   stints:[{c:'H',from:1,to:22},{c:'M',from:23,to:34}], pits:[23], gap:55.940,last:'1:37.204', best:'1:36.330', s:['g','y','g'], temps:[100,102,100,101]},
  { pos:17, code:'BEA', name:'Oliver Bearman',    num:87, team:'haas',        flag:'great-britain', stints:[{c:'M',from:1,to:24},{c:'H',from:25,to:34}], pits:[25], gap:59.310,last:'1:37.010', best:'1:36.180', s:['y','g','y'], temps:[101,102,101,103]},
  { pos:18, code:'HAD', name:'Isack Hadjar',      num:6,  team:'racingbulls', flag:'france',        stints:[{c:'H',from:1,to:26},{c:'M',from:27,to:34}], pits:[27], gap:63.770,last:'1:36.842', best:'1:36.020', s:['g','g','g'], temps:[99,101,100,100]},
  { pos:19, code:'BOR', name:'Gabriel Bortoleto', num:5,  team:'stake',       flag:'brazil',        stints:[{c:'M',from:1,to:23},{c:'H',from:24,to:34}], pits:[24], gap:68.110,last:'1:37.330', best:'1:36.410', s:['g','y','g'], temps:[100,102,101,102]},
  { pos:20, code:'DOO', name:'Jack Doohan',       num:7,  team:'alpine',      flag:'australia',     stints:[{c:'H',from:1,to:22}], pits:[], gap:null, last:'—', best:'1:37.020', s:['y','y','y'], temps:[104,105,103,104], status:'out' },
];

/* race state */
const RACE = { total:62, lap:34, frac:0.58 };

/* authored events on the lap axis */
const EVENTS = [
  { type:'sc',     from:12, to:15, label:'SAFETY CAR' },
  { type:'yellow', from:27, to:29, label:'AMARILLA S2' },
];

const RACE_CONTROL = [
  { t:'21:38:10', k:'sc',  b:'SAFETY CAR',  text:'Safety Car desplegado — vuelta 12. Coche 20 detenido en la curva 14.' },
  { t:'21:41:22', k:'sc',  b:'SAFETY CAR',  text:'Safety Car entra al pit lane esta vuelta. Pista limpia en la curva 14.' },
  { t:'21:43:05', k:'ok',  b:'Pista libre',  text:'Bandera verde. Carrera relanzada en la vuelta 16.' },
  { t:'21:46:40', k:'y',   b:'Bandera amarilla', text:'Amarilla ondeada, sector 2. Coche 20 en la escapatoria de la curva 11.' },
  { t:'21:47:02', k:'pen', b:'Penalización', text:'Coche 5 (BOR) — 5 s por exceder los límites de pista. Se aplica en su próxima parada.' },
  { t:'21:47:31', k:'ok',  b:'DRS',          text:'DRS habilitado en las zonas 1 y 2.' },
];

/* author-synthetic circuit trace (Marina Bay, schematic) in a 1000×563 space */
const TRACK = [
  {x:799,y:72},{x:769,y:45},{x:727,y:19},{x:701,y:42},{x:703,y:83},{x:712,y:114},
  {x:716,y:197},{x:682,y:201},{x:606,y:195},{x:530,y:182},{x:455,y:159},{x:379,y:114},
  {x:356,y:144},{x:311,y:170},{x:280,y:152},{x:250,y:129},{x:227,y:159},{x:205,y:205},
  {x:174,y:250},{x:144,y:288},{x:114,y:314},{x:140,y:333},{x:163,y:341},{x:174,y:371},
  {x:163,y:394},{x:178,y:432},{x:205,y:462},{x:250,y:481},{x:273,y:455},{x:295,y:394},
  {x:311,y:341},{x:318,y:288},{x:326,y:250},{x:356,y:269},{x:402,y:299},{x:470,y:303},
  {x:545,y:303},{x:621,y:302},{x:652,y:303},{x:655,y:333},{x:640,y:347},{x:667,y:352},
  {x:720,y:356},{x:780,y:364},{x:803,y:352},{x:826,y:333},{x:837,y:316},{x:826,y:288},
  {x:814,y:242},{x:807,y:197},{x:803,y:152},{x:802,y:114}
];
const TRACK_SPLITS = [10, 32]; // index ranges for S1 / S2 / S3

/* authored synthetic benchmarks */
const BENCH = [
  { label:'Vuelta rápida · carrera', code:'LEC', flag:'monaco',        time:'1:34.870' },
  { label:'Vuelta rápida · sesión',  code:'NOR', flag:'great-britain', time:'1:34.982' },
  { label:'Mejor S1',                code:'NOR', flag:'great-britain', time:'24.086' },
  { label:'Mejor S2',                code:'VER', flag:'netherlands',   time:'31.402' },
  { label:'Mejor S3',                code:'PIA', flag:'australia',     time:'40.925' },
  { label:'Récord del circuito',     code:'HAM', flag:'great-britain', time:'1:29.525', record:true },
];

/* ---------- helpers ---------- */
const $  = (s,r=document) => r.querySelector(s);
const $$ = (s,r=document) => [...r.querySelectorAll(s)];
const clamp = (v,a,b) => Math.max(a,Math.min(b,v));
const lapPct   = l => (l-1)/RACE.total*100;
const spanPct  = (a,b) => (b-a+1)/RACE.total*100;
const PH_PCT   = lapPct(RACE.lap) + RACE.frac*(100/RACE.total);

function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
function fmtGap(g){ if(g==null) return '—'; if(g===0) return ''; return '+'+g.toFixed(3); }
function tempColor(t){ const r=clamp((t-88)/24,0,1); const h=150-r*140; return `hsl(${h.toFixed(0)} 85% 60%)`; }

/* ---------- axis ---------- */
function renderAxis(){
  const ticks = $('#axisTicks');
  for(let l=5; l<=RACE.total; l+=5){
    const tk = document.createElement('span');
    tk.className = 'tick' + (l%10===0 ? ' major':'');
    tk.style.left = lapPct(l)+'%';
    tk.textContent = l;
    ticks.appendChild(tk);
  }
  const evs = $('#axisEvents');
  EVENTS.forEach(ev=>{
    const band = document.createElement('div');
    band.className = 'axis-event ev-'+ev.type;
    band.style.left = lapPct(ev.from)+'%';
    band.style.width = spanPct(ev.from,ev.to)+'%';
    band.innerHTML = `<span class="ev-lbl">${ev.label}</span>`;
    evs.appendChild(band);
  });
  $('#axisPlayhead').style.left = PH_PCT+'%';
  $('#phTag').textContent = 'V'+RACE.lap;
}

/* ---------- lanes ---------- */
function renderLanes(){
  const wrap = $('#lanes');
  DRIVERS.forEach((d,i)=>{
    const team = TEAMS[d.team];
    const row = document.createElement('div');
    row.className = 'lane-row' + (i===0?' is-selected':'') + (d.status==='out'?' is-out':'');
    row.dataset.i = i;
    row.tabIndex = 0;
    row.setAttribute('role','button');
    row.setAttribute('aria-label', `${d.pos}º ${d.name}, ${team.name}`);

    const flag = d.flag
      ? `<img class="drv-flag" src="assets/flags/${d.flag}.webp" alt="">`
      : `<span class="drv-cc mono">${d.cc||''}</span>`;

    const gapHtml = d.status==='out'
      ? `<span class="out-tag">OUT</span>`
      : d.pos===1 ? `<span class="leader">LÍDER</span>`
      : (d.status==='pit' ? `<span class="pit-tag">PIT</span>` : '') + fmtGap(d.gap);

    row.innerHTML = `
      <div class="gutter">
        <span class="pos">${d.pos}</span>
        <span class="drv"><span class="team-tick" style="--tt:${team.color}"></span><span class="drv-code">${d.code}</span>${flag}</span>
        <span class="tyre-chip c-${compName(lastStint(d).c)}" style="--c:var(--c-${lastStint(d).c.toLowerCase()})">${lastStint(d).c}</span>
        <span class="age">${d.status==='out' ? '—' : tyreAge(d)}</span>
        <span class="gap">${gapHtml}</span>
      </div>
      <div class="lane-cell"></div>`;

    const cell = $('.lane-cell', row);
    const canvas = document.createElement('div');
    canvas.className = 'lane-canvas';
    canvas.innerHTML = '<div class="lane-track"></div>';
    cell.appendChild(canvas);

    // event bands
    EVENTS.forEach(ev=>{
      const b = document.createElement('div');
      b.className = 'lane-event ev-'+ev.type;
      b.style.left = lapPct(ev.from)+'%';
      b.style.width = spanPct(ev.from,ev.to)+'%';
      canvas.appendChild(b);
    });

    // future shade
    const future = document.createElement('div');
    future.className = 'lane-future';
    future.style.left = PH_PCT+'%';
    canvas.appendChild(future);

    // stints
    d.stints.forEach((st,si)=>{
      const seg = document.createElement('div');
      const live = si===d.stints.length-1 && d.status!=='out';
      seg.className = `stint c-${compName(st.c)}` + (live?' is-live':'');
      seg.style.left = lapPct(st.from)+'%';
      seg.style.width = Math.max(spanPct(st.from,st.to)-0.6, 0)+'%';
      const laps = st.to-st.from+1;
      if(laps>=4) seg.innerHTML = `<span class="stint-lbl">${st.c}${laps}</span>`;
      canvas.appendChild(seg);
    });

    // pit notches
    d.pits.forEach(p=>{
      const n = document.createElement('div');
      n.className = 'pit-notch';
      n.style.left = lapPct(p)+'%';
      n.innerHTML = '<span>P</span>';
      canvas.appendChild(n);
    });

    // playhead + node
    const ph = document.createElement('div');
    ph.className='lane-playhead'; ph.style.left = PH_PCT+'%';
    canvas.appendChild(ph);
    const node = document.createElement('div');
    node.className='lane-node'; node.style.left = PH_PCT+'%';
    canvas.appendChild(node);

    row.addEventListener('click', ()=>selectDriver(i));
    row.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); selectDriver(i);} });
    wrap.appendChild(row);
  });
}

const COMP_NAMES = {S:'soft',M:'medium',H:'hard',I:'inter',W:'wet'};
function compName(c){ return COMP_NAMES[c] || 'hard'; }
function lastStint(d){ return d.stints[d.stints.length-1]; }
function tyreAge(d){ const st=lastStint(d); return RACE.lap - st.from + 1; }

/* ---------- timing tower ---------- */
function microFor(d){
  const r = mulberry32(d.num*97+13);
  const pace = 1 - (d.pos-1)/19;
  const out = [];
  for(let i=0;i<15;i++){
    const v = r();
    let s = 'y';
    if(v < 0.05 + pace*0.16) s = 'p';
    else if(v < 0.42 + pace*0.4) s = 'g';
    out.push(s);
  }
  return out;
}

function renderTiming(){
  const body = $('#ttBody');
  body.innerHTML = DRIVERS.map((d,i)=>{
    const team = TEAMS[d.team];
    const flag = d.flag ? `<img class="t-flag" src="assets/flags/${d.flag}.webp" alt="">` : `<span class="drv-cc mono">${d.cc||''}</span>`;
    const gapCell = d.status==='out'
      ? `<span class="t-out-tag">OUT</span>`
      : d.pos===1 ? `<span class="t-lead-tag">LÍDER</span>` : fmtGap(d.gap);
    const intCell = (d.pos===1 || d.status==='out') ? '—' : '+'+Math.abs(d.gap-(DRIVERS[d.pos-2]?.gap||0)).toFixed(3);
    const st = lastStint(d);
    const age = d.status==='out' ? '—' : tyreAge(d);
    const laps = d.status==='out' ? 22 : RACE.lap;
    const pit = d.status==='pit' ? `<span class="t-pit-tag">PIT</span>` : d.pits.length;
    const secs = sectorTimes(d);
    return `
      <div class="t-row${i===0?' is-selected':''}${d.status==='out'?' is-out':''}" data-i="${i}" role="row" tabindex="0" aria-label="${d.pos}º ${d.name}">
        <span class="t-c"><span class="t-pos">${d.pos}</span></span>
        <span class="t-c t-drv"><span class="team-tick" style="--tt:${team.color}"></span><span class="t-code">${d.code}</span>${flag}</span>
        <span class="t-c t-num ${d.pos===1?'t-leader':''}">${gapCell}</span>
        <span class="t-c t-num">${intCell}</span>
        <span class="t-c t-num t-strong">${d.last}</span>
        <span class="t-c t-num">${d.best}</span>
        <span class="t-c t-micro">${microFor(d).map(s=>`<span class="mseg ${s}"></span>`).join('')}</span>
        <span class="t-c t-s ${d.s[0]}">${secs[0]}</span>
        <span class="t-c t-s ${d.s[1]}">${secs[1]}</span>
        <span class="t-c t-s ${d.s[2]}">${secs[2]}</span>
        <span class="t-c t-laps">${laps}</span>
        <span class="t-c">${pit}</span>
        <span class="t-c t-tyre"><span class="compound-mini" data-c="${st.c}">${st.c}</span><span class="t-age">${age}</span></span>
      </div>`;
  }).join('');
  $$('.t-row', body).forEach(row=>{
    const i = +row.dataset.i;
    row.addEventListener('click', ()=>selectDriver(i));
    row.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); selectDriver(i);} });
  });
}

/* ---------- circuit map ---------- */
function catmullRom(pts, closed){
  if(pts.length < 2) return '';
  let d = `M ${pts[0].x} ${pts[0].y}`;
  const n = pts.length;
  for(let i=0;i<n-1;i++){
    const p0 = pts[i-1] || (closed ? pts[n-1] : pts[i]);
    const p1 = pts[i], p2 = pts[i+1];
    const p3 = pts[i+2] || (closed ? pts[0] : pts[i+1]);
    const c1x = p1.x + (p2.x-p0.x)/6, c1y = p1.y + (p2.y-p0.y)/6;
    const c2x = p2.x - (p3.x-p1.x)/6, c2y = p2.y - (p3.y-p1.y)/6;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)} ${c2x.toFixed(1)} ${c2y.toFixed(1)} ${p2.x} ${p2.y}`;
  }
  if(closed) d += ' Z';
  return d;
}

let dotEls = [];
function renderCircuit(){
  const SVG = 'http://www.w3.org/2000/svg';
  const base = $('#trackBase');
  base.setAttribute('d', catmullRom(TRACK, true));
  const [i1,i2] = TRACK_SPLITS;
  $('#sector1').setAttribute('d', catmullRom(TRACK.slice(0, i1+1), false));
  $('#sector2').setAttribute('d', catmullRom(TRACK.slice(i1, i2+1), false));
  $('#sector3').setAttribute('d', catmullRom(TRACK.slice(i2).concat([TRACK[0]]), false));

  const len = base.getTotalLength();

  // start / finish tick
  const prevFin = base.parentNode.querySelector('.track-fin');
  if(prevFin) prevFin.remove();
  const a = base.getPointAtLength(0), b = base.getPointAtLength(8);
  const dx = b.x-a.x, dy = b.y-a.y, m = Math.hypot(dx,dy) || 1;
  const nx = -dy/m*20, ny = dx/m*20;
  const fin = document.createElementNS(SVG,'line');
  fin.setAttribute('class','track-fin');
  fin.setAttribute('x1',(a.x-nx).toFixed(1)); fin.setAttribute('y1',(a.y-ny).toFixed(1));
  fin.setAttribute('x2',(a.x+nx).toFixed(1)); fin.setAttribute('y2',(a.y+ny).toFixed(1));
  base.parentNode.insertBefore(fin, $('#trackDots'));

  // driver dots
  const g = $('#trackDots');
  g.innerHTML = '';
  const running = DRIVERS.filter(d=>d.status!=='out');
  running.forEach(d=>{
    const frac = (((0.92 - (d.gap||0)/96) % 1) + 1) % 1;
    const p = base.getPointAtLength(frac*len);
    const node = document.createElementNS(SVG,'g');
    node.setAttribute('class','dot');
    node.dataset.i = DRIVERS.indexOf(d);
    const t = document.createElementNS(SVG,'title');
    t.textContent = `P${d.pos} · ${d.code} · ${TEAMS[d.team].name}`;
    const c = document.createElementNS(SVG,'circle');
    c.setAttribute('cx', p.x.toFixed(1)); c.setAttribute('cy', p.y.toFixed(1));
    c.setAttribute('r', d.pos===1 ? 12 : 9);
    c.setAttribute('fill', TEAMS[d.team].color);
    node.append(t, c);
    g.appendChild(node);
  });
  dotEls = [...g.children];
  $('#trackCount').textContent = `${running.length} coches en pista · 1 retirado`;
}

/* ---------- benchmarks ---------- */
function renderBenchmarks(){
  $('#benchList').innerHTML = BENCH.map(b=>`
    <li class="bench-item">
      <small>${b.label}</small>
      <span class="bench-who"><span class="team-tick" style="--tt:${TEAMS[DRIVERS.find(d=>d.code===b.code)?.team]?.color || '#7E8896'}"></span><img class="t-flag" src="assets/flags/${b.flag}.webp" alt=""><b>${b.code}</b></span>
      <span class="bench-time${b.record?' is-record':''}">${b.time}</span>
    </li>`).join('');
}

/* ---------- tabs ---------- */
function selectTab(name){
  $$('.tab').forEach(t=>{
    const on = t.dataset.tab===name;
    t.classList.toggle('is-active', on);
    t.setAttribute('aria-selected', on ? 'true':'false');
  });
  $$('.tab-view').forEach(v=>{
    const on = v.id==='view-'+name;
    v.classList.toggle('is-active', on);
    v.hidden = !on;
  });
  try{ if(location.hash.slice(1)!==name) history.replaceState(null,'','#'+name); }
  catch(e){ /* ignore (file:// or sandboxed) */ }
}


/* ---------- dock ---------- */
let selected = 0;

function selectDriver(i){
  selected = i;
  $$('.lane-row').forEach(r=>r.classList.toggle('is-selected', +r.dataset.i===i));
  $$('.t-row').forEach(r=>r.classList.toggle('is-selected', +r.dataset.i===i));
  dotEls.forEach(g=>{
    const on = +g.dataset.i===i;
    g.classList.toggle('is-selected', on);
    const c = g.querySelector('circle');
    if(c) c.setAttribute('r', on ? 14 : (+g.dataset.i===0 ? 12 : 9));
  });
  renderDock(DRIVERS[i]);
}

function renderDock(d){
  const team = TEAMS[d.team];
  $('#dPhoto').src = `assets/drivers/${driverFile(d.code)}.webp`;
  $('#dNum').textContent = d.num;
  $('#dName').textContent = d.name;
  $('#dLogo').src = `assets/logos/${team.logo}`;
  $('#dLogo').alt = team.name;
  $('#dTeam').textContent = team.name;
  $('#dTick').style.setProperty('--tt', team.color);
  $('#dPosLine').textContent = d.status==='out' ? 'RETIRADO' : 'P'+d.pos;

  const fl = $('#dFlag');
  if(d.flag){ fl.src = `assets/flags/${d.flag}.webp`; fl.style.display=''; }
  else fl.style.display='none';

  const st = lastStint(d);
  const cEl = $('#dComp');
  cEl.textContent = d.status==='out' ? st.c : st.c;
  cEl.dataset.c = st.c;
  cEl.style.setProperty('--c', `var(--c-${compName(st.c)})`);
  $('#dAge').textContent = d.status==='out' ? '—' : tyreAge(d);

  $('#dGap').textContent = d.status==='out' ? 'DNF' : (d.pos===1 ? 'LÍDER' : fmtGap(d.gap));
  const ahead = DRIVERS[d.pos-2];
  $('#dInt').textContent = (d.pos===1 || !ahead) ? '—' : '+'+(d.gap-ahead.gap).toFixed(3);
  $('#dLast').textContent = d.last;
  $('#dBest').textContent = d.best;
  $('#dTelemLap').textContent = 'Vuelta '+RACE.lap;

  // trace
  const seed = d.num*13 + d.pos;
  const end = d.status==='out' ? 0.4 : (d.pos===1 ? -0.2 : clamp((d.gap - (DRIVERS[d.pos-2]?.gap||0))*0.6, -0.9, 0.9));
  drawTrace(seed, d.status==='out' ? 0.3 : end);
  const dEl = $('#dDelta'), dLbl = $('#dDeltaLbl');
  if(d.status==='out'){ dEl.textContent='DNF'; dEl.style.color='var(--ink-2)'; dLbl.textContent='Retirado'; }
  else if(d.pos===1){ dEl.textContent='+'+DRIVERS[1].gap.toFixed(3); dEl.style.color='var(--green)'; dLbl.textContent='Margen con P2'; }
  else { dEl.textContent='+'+Math.abs(d.gap-(DRIVERS[d.pos-2]?.gap||0)).toFixed(3); dEl.style.color='var(--red-2)'; dLbl.textContent='Delta al anterior'; }

  // sectors
  const secs = $$('#dSectors .sector');
  const secTimes = sectorTimes(d);
  secs.forEach((el,k)=>{
    el.dataset.s = d.s[k];
    $('b',el).textContent = secTimes[k];
  });

  // tyres
  const ty = $$('#dTyres .tyre');
  ty.forEach((el,k)=>{
    const t = jitterTemps(d)[k];
    el.style.setProperty('--tc', tempColor(t));
    $('b',el).textContent = t+'°';
  });

  // gauges
  applyGauges(d);

  // radio
  renderRadio(d);
}

function driverFile(code){
  const map = {
    NOR:'LANNOR01', PIA:'OSCPIA01', VER:'MAXVER01', RUS:'GEORUS01', LEC:'CHALEC01',
    HAM:'LEWHAM01', ANT:'ANDANT01', ALO:'FERALO01', SAI:'CARSAI01', ALB:'ALEALB01',
    TSU:'YUKTSU01', HUL:'NICHUL01', STR:'LANSTR01', OCO:'ESTOCO01', GAS:'PIEGAS01',
    LAW:'LIALAW01', BEA:'OLIBEA01', HAD:'ISAHAD01', BOR:'GABBOR01', DOO:'JACDOO01'
  };
  return map[code] || 'LANNOR01';
}

function sectorTimes(d){
  const base = [24.0,31.4,40.8];
  const r = mulberry32(d.num*7+3);
  return base.map(b=> (b + (r()-0.5)*0.5).toFixed(3));
}

function jitterTemps(d){
  const r = mulberry32(d.num*11+5);
  return d.temps.map(t=> Math.round(clamp(t + (r()-0.5)*2, 86, 110)));
}

function applyGauges(d){
  const r = mulberry32(d.num*17+9);
  const speed = Math.round(285 + r()*45);
  const gear  = clamp(Math.round(speed/40)+1, 3, 8);
  const throttle = d.status==='pit' ? 12 : Math.round(70+r()*30);
  const brake = Math.round(r()*14);
  const ers = Math.round(45+r()*50);
  const drs = d.pos<=12 && d.status!=='pit';
  $('#gSpeed').textContent = speed;
  $('#gGear').textContent = gear;
  $('#gThrottle').textContent = throttle;
  $('#gBrake').textContent = brake;
  $('#gErs').textContent = ers;
  $('#gDrs').textContent = drs ? 'OPEN' : 'CLOSED';
  $('#gDrs').style.color = drs ? 'var(--green)' : 'var(--ink-3)';
  $('.gauge .bar:not(.bar-green):not(.bar-red):not(.bar-blue) i').style.setProperty('--v', clamp((speed-260)/70,0.05,1).toFixed(3));
  $('.bar-green i').style.setProperty('--v', (throttle/100).toFixed(3));
  $('.bar-red i').style.setProperty('--v', (brake/100).toFixed(3));
  $('.bar-blue i').style.setProperty('--v', (ers/100).toFixed(3));
  const pips = $('#gPips');
  pips.innerHTML = Array.from({length:8},(_,k)=>`<i class="${k<gear?'on':''}"></i>`).join('');
}

function drawTrace(seed, endDelta){
  const rnd = mulberry32(seed*2654435761 % 2147483647);
  const N=64, raw=[]; let v=0, drift=(rnd()-0.5)*0.05;
  for(let i=0;i<N;i++){ drift+=(rnd()-0.5)*0.02; drift*=0.96; v+=(rnd()-0.5)*0.22+drift; v*=0.95; raw.push(v); }
  const maxAbs = Math.max(...raw.map(Math.abs), 0.25);
  const scaled = raw.map(x=> x/maxAbs*0.82);
  const target = clamp(endDelta, -0.9, 0.9);
  const shift = target - scaled[N-1];
  const out = scaled.map((x,i)=> x + shift*(i/(N-1)));
  const X = i => (i/(N-1)*240).toFixed(1);
  const Y = val => (32 - val*30).toFixed(1);
  let line = `M ${X(0)} ${Y(out[0])}`;
  for(let i=1;i<N;i++) line += ` L ${X(i)} ${Y(out[i])}`;
  const area = line + ` L 240 64 L 0 64 Z`;
  $('#traceLine').setAttribute('d', line);
  $('#traceArea').setAttribute('d', area);
}

/* ---------- comm feed ---------- */
const RADIO_TEMPLATES = [
  { who:'driver', text: c=>`${c}: "El trasero se va en la salida de curva, estoy sufriendo."` },
  { who:'wall',   text: ()=>`Muro: "Copiado. Pasamos a Plan B, objetivo vuelta 18."` },
  { who:'driver', text: c=>`${c}: "Neumáticos muertos, box box."` },
];
const RADIO_ALT = [
  { who:'wall',   text: c=>`Muro: "Modo 5 disponible. Cuida el ERS en la recta."` },
  { who:'driver', text: c=>`${c}: "¿Bandera amarilla en el sector 2? Puedo levantar."` },
  { who:'wall',   text: c=>`Muro: "Delta positivo. Empuja ahora, tenemos aire libre."` },
  { who:'driver', text: c=>`${c}: "El volante se ha ido, revisa el diferencial."` },
  { who:'wall',   text: c=>`Muro: "Box esta vuelta por neumático blando, prepárate."` },
];

function renderRadio(d){
  const r = mulberry32(d.num*23+7);
  const set = r()>0.5 ? RADIO_TEMPLATES : RADIO_ALT;
  const times = ['21:43:18','21:45:47','21:47:09'];
  const ul = $('#dRadio');
  ul.innerHTML = set.map((m,k)=>`
    <li class="comm ${m.who==='driver'?'comm-driver':'comm-wall'}">
      <time>${times[k]} · ${m.who==='driver'?d.code:'MURO'}</time>
      <p>${m.text(d.code)}</p>
    </li>`).join('');
}

function renderRaceControl(){
  $('#rcList').innerHTML = RACE_CONTROL.map(m=>`
    <li class="comm" data-k="${m.k}">
      <time>${m.t}</time>
      <p><b>${m.b}</b> — ${m.text}</p>
    </li>`).join('');
}

/* ---------- live feel ---------- */
function startClock(){
  const el = $('#clock');
  let base = 21*3600 + 47*60 + 12;
  setInterval(()=>{ base++; const h=String(Math.floor(base/3600)).padStart(2,'0'); const m=String(Math.floor(base/60)%60).padStart(2,'0'); const s=String(base%60).padStart(2,'0'); el.textContent=`${h}:${m}:${s}`; }, 1000);
}

function startJitter(){
  setInterval(()=>{
    const d = DRIVERS[selected];
    if(!d || d.status==='out') return;
    const r = mulberry32(Date.now()%100000);
    $('#gSpeed').textContent = Math.round(295 + r()*35);
    $('.bar-green i').style.setProperty('--v', ((72+r()*26)/100).toFixed(3));
    $('.bar-blue i').style.setProperty('--v', ((48+r()*46)/100).toFixed(3));
  }, 1700);
}

/* ---------- toast ---------- */
let toastTimer;
function toast(msg){
  const el = $('#toast'); el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(()=>el.classList.remove('show'), 2600);
}
$$('[data-toast]').forEach(b=> b.addEventListener('click', ()=>toast(b.dataset.toast)));

/* ---------- boot ---------- */
renderAxis();
renderLanes();
renderTiming();
renderCircuit();
renderBenchmarks();
renderRaceControl();
selectDriver(0);
selectTab(location.hash==='#stints' ? 'stints' : 'timing');
$$('.tab').forEach(t=>t.addEventListener('click', ()=>selectTab(t.dataset.tab)));
startClock();
startJitter();
