// The Creative Block — WePresent edition: accordions + reveal + favicons
document.querySelectorAll('.acc .item button').forEach(function(b){
  b.addEventListener('click',function(){
    var it=b.closest('.item'), open=it.classList.contains('open');
    var acc=it.closest('.acc');
    acc.querySelectorAll('.item').forEach(function(x){x.classList.remove('open');var s=x.querySelector('.sgn');if(s)s.textContent='+';});
    if(!open){it.classList.add('open');var s=it.querySelector('.sgn');if(s)s.textContent='–';}
  });
});

// favicons for resource links
(function(){
  var pal=['#b23a2e','#6f6b63','#c9a227','#8a9a5b','#7d6f86','#3a3833'];
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

// scroll reveal
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var els=document.querySelectorAll('.rv'); if(!els.length) return;
  els.forEach(function(el){var p=el.parentElement;if(p&&(p.classList.contains('blockgrid')||p.classList.contains('posts')||p.classList.contains('tiles')||p.classList.contains('qgrid')))el.style.transitionDelay=([].indexOf.call(p.children,el)*80)+'ms';});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.1,rootMargin:'0px 0px -6% 0px'});
  els.forEach(function(el){io.observe(el);});
})();
