/* acb-v2.js — motion for the Feeld-inspired v2 pages */
(function(){
  /* 1. rotating words */
  document.querySelectorAll('.rot').forEach(function(rot){
    var words=(rot.getAttribute('data-words')||'').split('|').map(function(s){return s.trim();}).filter(Boolean);
    var el=rot.querySelector('.rot-w'); if(!el||words.length<2) return;
    var i=0, dur=parseInt(rot.getAttribute('data-interval')||'2200',10);
    el.style.transition='transform .45s cubic-bezier(.4,0,.1,1),opacity .45s';
    setInterval(function(){
      el.style.transform='translateY(-110%)'; el.style.opacity='0';
      setTimeout(function(){
        i=(i+1)%words.length; el.textContent=words[i];
        el.style.transition='none'; el.style.transform='translateY(110%)'; el.style.opacity='0';
        void el.offsetHeight;
        el.style.transition='transform .45s cubic-bezier(.4,0,.1,1),opacity .45s';
        el.style.transform='translateY(0)'; el.style.opacity='1';
      },450);
    },dur);
  });

  /* 2. timed feature carousel */
  document.querySelectorAll('.v2-feat').forEach(function(feat){
    var tabs=[].slice.call(feat.querySelectorAll('.v2-tab'));
    var panels=[].slice.call(feat.querySelectorAll('.v2-panel'));
    if(!tabs.length) return;
    var dur=parseInt(getComputedStyle(feat).getPropertyValue('--dur'))*1000 || 5000;
    var cur=-1, timer=null;
    function show(n){
      cur=n;
      tabs.forEach(function(t,idx){t.classList.toggle('is-active',idx===n);});
      panels.forEach(function(p,idx){p.classList.toggle('is-active',idx===n);});
    }
    function schedule(){ clearTimeout(timer); timer=setTimeout(function(){ show((cur+1)%tabs.length); schedule(); }, dur); }
    tabs.forEach(function(t,idx){
      t.addEventListener('click',function(){ show(idx); schedule(); });
    });
    show(0); schedule();
    // pause on hover
    feat.addEventListener('mouseenter',function(){clearTimeout(timer);});
    feat.addEventListener('mouseleave',schedule);
  });
})();
