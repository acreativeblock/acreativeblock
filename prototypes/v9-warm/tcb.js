// rotating relatable quote (home hero)
(function(){
  const el=document.getElementById('rotq'); if(!el) return;
  const quotes=[
    "“I don’t know where to go.”",
    "“The project’s a chaos.”",
    "“I know what to do — I just don’t.”",
    "“What if I’m not good enough?”",
    "“I don’t know how to do the next part.”",
    "“My life keeps killing my momentum.”"
  ];
  let i=0; el.textContent=quotes[0];
  setInterval(()=>{
    el.classList.add('out');
    setTimeout(()=>{ i=(i+1)%quotes.length; el.textContent=quotes[i]; el.classList.remove('out'); },400);
  },2600);
})();

// accordions (faq + lenses)
function accordion(itemSel, signSel, openChar){
  document.querySelectorAll(itemSel+' button').forEach(b=>b.addEventListener('click',()=>{
    const it=b.closest(itemSel), open=it.classList.contains('open');
    document.querySelectorAll(itemSel).forEach(x=>{x.classList.remove('open');const s=x.querySelector(signSel);if(s)s.textContent='+';});
    if(!open){ it.classList.add('open'); const s=it.querySelector(signSel); if(s)s.textContent=openChar; }
  }));
}
accordion('.fitem','.sgn','×');
accordion('.litem','.lsgn','×');

// subtle reveal on scroll/load
(function(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els=document.querySelectorAll('.heroY .rotline,.heroY .hsub,.heroY .herocta,.phero h1,.phero p,.statline .st,.projhead,.subt,.cards .ec,.iconcards .iccard,.litem,.qgrid2 .qc,.fitem,.ttile,.loop,.ptable,.closing > *,.footer,.howrow > *,.blog-head,.bfeat,.blist .brow,.blead,.bcats,.bgrid .bcard');
  els.forEach(el=>{
    el.classList.add('rv');
    const p=el.parentElement;
    if(p&&(p.classList.contains('iconcards')||p.classList.contains('cards')||p.classList.contains('qgrid2')||p.classList.contains('lacc')||p.classList.contains('statline')||p.classList.contains('tgrid')||p.classList.contains('bgrid')||p.classList.contains('blist'))){
      el.style.transitionDelay=([...p.children].indexOf(el)*60)+'ms';
    }
  });
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -7% 0px'});
  els.forEach(el=>io.observe(el));
})();
