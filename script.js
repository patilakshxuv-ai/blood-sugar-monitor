
const btn=document.querySelector('.menu-btn'), nav=document.querySelector('.nav'); if(btn)btn.addEventListener('click',()=>nav.classList.toggle('open'));
const year=document.querySelectorAll('[data-year]'); year.forEach(x=>x.textContent=new Date().getFullYear());
const cookie=document.getElementById('cookie'); const key='gp-consent-v1';
if(cookie && !localStorage.getItem(key)) cookie.classList.add('show');
document.getElementById('accept-cookies')?.addEventListener('click',()=>{localStorage.setItem(key,'accepted');cookie.classList.remove('show')});
document.getElementById('decline-cookies')?.addEventListener('click',()=>{localStorage.setItem(key,'declined');cookie.classList.remove('show')});
const searchInput=document.getElementById('site-search'), results=document.getElementById('search-results');
if(searchInput&&results){
 fetch('/search-index.json').then(r=>r.json()).then(index=>{
  const render=(q='')=>{
   q=q.trim().toLowerCase(); let list=q?index.filter(x=>(x.title+' '+x.description+' '+x.section).toLowerCase().includes(q)):index.slice(0,12);
   results.innerHTML=list.map(x=>`<div class="result"><a href="/${x.url}"><strong>${x.title}</strong></a><br><small>${x.section} · ${x.description}</small></div>`).join('') || '<p class="muted">No matching pages found.</p>';
  }; render(); searchInput.addEventListener('input',()=>render(searchInput.value));
 }).catch(()=>results.innerHTML='<p class="muted">Search is temporarily unavailable. Please use the sitemap.</p>');
}
const unitForm=document.getElementById('unit-form');
if(unitForm){
 unitForm.addEventListener('submit',e=>{e.preventDefault();const v=parseFloat(document.getElementById('mgdl').value);if(!Number.isFinite(v)){return}
 document.getElementById('mmol').value=(v/18).toFixed(2);});
 document.getElementById('mmol')?.addEventListener('input',e=>{const v=parseFloat(e.target.value);document.getElementById('mgdl').value=Number.isFinite(v)?(v*18).toFixed(0):''});
}
