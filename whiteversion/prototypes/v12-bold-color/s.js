// The Creative Block — Summeet edition: page transitions + mobile menu + accordion + favicons + reveal
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  // clear the leave-state if returning via back/forward (bfcache)
  window.addEventListener('pageshow',function(e){ if(e.persisted) document.body.classList.remove('pg-leave'); });
  if(reduce) return;
  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a'); if(!a) return;
    var href=a.getAttribute('href');
    if(!href||a.target==='_blank'||a.hasAttribute('download')) return;
    if(href[0]==='#'||href.indexOf('mailto:')===0||href.indexOf('tel:')===0) return;
    if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button) return;
    if(a.origin && location.origin && a.origin!==location.origin) return;
    e.preventDefault();
    document.body.classList.add('pg-leave');
    setTimeout(function(){ window.location.href=href; },165);
  });
})();

document.querySelectorAll('.nav-in').forEach(function(n){
  if(n.querySelector('.burger')) return;
  var b=document.createElement('button');
  b.className='burger';b.setAttribute('aria-label','Menu');
  b.innerHTML='<span></span><span></span><span></span>';
  n.appendChild(b);
  b.addEventListener('click',function(e){e.stopPropagation();n.classList.toggle('open');});
  // mobile: tap the "Block options" parent to expand its submenu inline
  var ddt=n.querySelector('.ddw>.ddt');
  if(ddt) ddt.addEventListener('click',function(e){ if(window.matchMedia('(max-width:980px)').matches){ e.preventDefault(); } });
});
document.addEventListener('click',function(e){
  document.querySelectorAll('.nav-in.open').forEach(function(n){ if(!n.contains(e.target)) n.classList.remove('open'); });
});

document.querySelectorAll('.acc .item button').forEach(function(b){
  b.addEventListener('click',function(){
    var it=b.closest('.item'), open=it.classList.contains('open'), acc=it.closest('.acc');
    acc.querySelectorAll('.item').forEach(function(x){x.classList.remove('open');var s=x.querySelector('.sgn');if(s)s.textContent='+';});
    if(!open){it.classList.add('open');var s=it.querySelector('.sgn');if(s)s.textContent='–';}
  });
});
(function(){
  var pal=['#3b39e0','#fa4616','#9d5ce6','#173d1c','#f4a8ad','#171615'];
  document.querySelectorAll('.resitem').forEach(function(el,i){
    var body=document.createElement('div');body.className='resbody';
    while(el.firstChild) body.appendChild(el.firstChild);
    var ico=document.createElement('div');ico.className='resico';
    function badge(){ico.textContent='';ico.classList.add('badge');var b=body.querySelector('b');ico.textContent=((b&&b.textContent.trim().charAt(0))||'★').toUpperCase();ico.style.background=pal[i%pal.length];}
    var host=null;
    if(el.tagName==='A'&&el.getAttribute('href')){try{var u=new URL(el.href);if(u.protocol.indexOf('http')===0)host=u.hostname.replace(/^www\./,'');}catch(e){}}
    if(host){var img=document.createElement('img');img.loading='lazy';img.alt='';img.src='https://www.google.com/s2/favicons?domain='+host+'&sz=64';img.onerror=badge;ico.appendChild(img);}else{badge();}
    el.appendChild(ico);el.appendChild(body);
  });
})();
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var els=document.querySelectorAll('.rv'); if(!els.length) return;
  els.forEach(function(el){var p=el.parentElement;if(p&&(p.classList.contains('cards')||p.classList.contains('posts')||p.classList.contains('tiles')||p.classList.contains('qgrid')))el.style.transitionDelay=([].indexOf.call(p.children,el)*80)+'ms';});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.1,rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(el){io.observe(el);});
})();
