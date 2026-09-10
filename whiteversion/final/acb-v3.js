/* acb-v3.js — werk-style timed loading-bar sequence for "how it works" */
(function(){
  document.querySelectorAll('.v3-how').forEach(function(sec){
    var rows=[].slice.call(sec.querySelectorAll('.v3-hrow'));
    var panels=[].slice.call(sec.querySelectorAll('.v3-hpanel'));
    if(!rows.length) return;
    var dur=5000, cur=-1, timer=null;
    function show(n){
      cur=n;
      rows.forEach(function(r,i){r.classList.toggle('is-active',i===n);});
      panels.forEach(function(p,i){p.classList.toggle('is-active',i===n);});
    }
    function next(){ show((cur+1)%rows.length); timer=setTimeout(next,dur); }
    rows.forEach(function(r,i){ r.addEventListener('click',function(){ clearTimeout(timer); show(i); timer=setTimeout(next,dur); }); });
    show(0); timer=setTimeout(next,dur);
    sec.addEventListener('mouseenter',function(){clearTimeout(timer);});
    sec.addEventListener('mouseleave',function(){clearTimeout(timer);timer=setTimeout(next,dur);});
  });
})();
