// scroll reveal
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.14});
document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%3*70)+'ms';io.observe(el);});

// tabbed carousel (centre active card, peeking neighbours)
(function(){
  var rail=document.querySelector('.rail'); if(!rail) return;
  var cards=[].slice.call(document.querySelectorAll('.bigcard')),
      tabs=[].slice.call(document.querySelectorAll('.tab')),
      dots=[].slice.call(document.querySelectorAll('.dots button')),
      vp=document.querySelector('.viewport'), idx=0;
  function go(i){idx=Math.max(0,Math.min(cards.length-1,i));var c=cards[idx];
    var off=c.offsetLeft-(vp.clientWidth-c.clientWidth)/2;
    rail.style.transform='translateX('+(-off)+'px)';
    tabs.forEach(function(t,k){t.classList.toggle('active',k===idx)});
    dots.forEach(function(d,k){d.classList.toggle('active',k===idx)});}
  tabs.forEach(function(t,k){t.onclick=function(){go(k)}});
  dots.forEach(function(d,k){d.onclick=function(){go(k)}});
  window.addEventListener('resize',function(){go(idx)});
  go(0);
})();

// FAQ accordion
document.querySelectorAll('.acc .item button').forEach(function(b){
  b.onclick=function(){var it=b.closest('.item');var open=it.classList.contains('open');
    document.querySelectorAll('.acc .item').forEach(function(x){x.classList.remove('open');x.querySelector('.sgn').textContent='+';});
    if(!open){it.classList.add('open');}};
});
