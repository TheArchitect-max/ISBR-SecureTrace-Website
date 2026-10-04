const header=document.querySelector('[data-header]');
const nav=document.querySelector('[data-nav]');
const toggle=document.querySelector('[data-nav-toggle]');
const setHeader=()=>header?.classList.toggle('scrolled',window.scrollY>12);
setHeader();
window.addEventListener('scroll',setHeader,{passive:true});
toggle?.addEventListener('click',()=>{
  const open=nav?.classList.toggle('open');
  toggle.setAttribute('aria-expanded',String(Boolean(open)));
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded','false');
}));
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=String(new Date().getFullYear()));
