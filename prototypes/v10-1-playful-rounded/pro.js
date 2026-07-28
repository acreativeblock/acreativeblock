// The Creative Block — shared interactions (accordions + scroll reveal)
function accordion(itemSel, signSel, openChar){
  document.querySelectorAll(itemSel+' button').forEach(function(b){
    b.addEventListener('click',function(){
      var it=b.closest(itemSel), open=it.classList.contains('open');
      document.querySelectorAll(itemSel).forEach(function(x){
        x.classList.remove('open'); var s=x.querySelector(signSel); if(s)s.textContent='+';
      });
      if(!open){ it.classList.add('open'); var s=it.querySelector(signSel); if(s)s.textContent=openChar; }
    });
  });
}
accordion('.litem','.lsgn','×');
accordion('.fitem','.sgn','×');

(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var els=document.querySelectorAll('.rv');
  if(!els.length) return;
  els.forEach(function(el){
    var p=el.parentElement;
    if(p&&(p.classList.contains('iconcards')||p.classList.contains('cards')||p.classList.contains('qgrid2')||p.classList.contains('tgrid')||p.classList.contains('bgrid')))
      el.style.transitionDelay=([].indexOf.call(p.children,el)*70)+'ms';
  });
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -7% 0px'});
  els.forEach(function(el){io.observe(el);});
})();
