(function(){
  var headerActions=document.querySelector('.horst-actions');
  var logoMount=document.querySelector('.horst-logo .acb-logo-mount');
  if(logoMount)requestAnimationFrame(function waitForLogo(){
    var svg=logoMount.querySelector('svg');
    if(!svg){requestAnimationFrame(waitForLogo);return}
    var paths=[].slice.call(svg.querySelectorAll('path')),pupil=svg.querySelector('circle'),eye=null;
    [].slice.call(svg.querySelectorAll('rect[clip-path]')).forEach(function(n){var m=(n.getAttribute('clip-path')||'').match(/#([^\)]+)/),cp=m&&svg.querySelector('#'+m[1]);n.remove();if(cp)cp.remove()});
    if(pupil){var x=+pupil.getAttribute('cx'),y=+pupil.getAttribute('cy');paths.forEach(function(p){var b=p.getBBox();if(x>=b.x&&x<=b.x+b.width&&y>=b.y&&y<=b.y+b.height&&(!eye||b.width*b.height<eye.area))eye={el:p,area:b.width*b.height}})}
    if(eye&&pupil){eye.el.style.transformBox='fill-box';eye.el.style.transformOrigin='center';(function blink(){setTimeout(function(){eye.el.animate([{transform:'scaleY(1)'},{transform:'scaleY(.08)',offset:.48},{transform:'scaleY(1)'}],{duration:180,easing:'cubic-bezier(.4,0,.2,1)'});pupil.animate([{opacity:1},{opacity:0,offset:.4},{opacity:0,offset:.58},{opacity:1}],{duration:180});blink()},1900+Math.random()*3600)})()}
  });
  var nav=document.querySelector('.horst-header'),menu=document.querySelector('.mobile-menu-toggle');
  var readExplore=[].slice.call(document.querySelectorAll('.horst-header .navbutton')).find(function(button){return button.textContent.trim()==='Read + explore'});if(readExplore)readExplore.textContent='Read & explore';
  var researchItems=document.querySelectorAll('.horst-header .hdr-main>.navitem');if(researchItems.length>1){researchItems[0].querySelector('.navbutton').textContent='Our research';researchItems[0].querySelector('.submenu').innerHTML='<a href="blocks.html"><strong>The 7+1 map</strong></a><a href="evidence.html"><strong>Evidence + limits</strong></a><a href="method.html"><strong>The CRAFT method</strong></a>';researchItems[1].remove()}var aboutButton=[].slice.call(document.querySelectorAll('.horst-header .navbutton')).find(function(button){return button.textContent.trim()==='About'});if(aboutButton){var aboutMenu=aboutButton.parentElement.querySelector('.submenu');if(aboutMenu&&!aboutMenu.querySelector('a[href="manifesto.html"]'))aboutMenu.insertAdjacentHTML('beforeend','<a href="manifesto.html"><strong>Manifesto</strong></a>')}var findButton=document.querySelector('.horst-header .horst-find');if(findButton)findButton.remove();
  if(menu)menu.addEventListener('click',function(){var open=nav.classList.toggle('mobile-open');document.documentElement.classList.toggle('menu-open',open);menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Close menu':'Open menu');menu.textContent=open?'Close':'Menu'});
  document.querySelectorAll('.horst-header .navbutton').forEach(function(button){button.addEventListener('click',function(){if(window.innerWidth>900)return;var item=button.closest('.navitem'),open=!item.classList.contains('submenu-open');document.querySelectorAll('.horst-header .navitem.submenu-open').forEach(function(other){if(other!==item)other.classList.remove('submenu-open')});item.classList.toggle('submenu-open',open)})});
  document.querySelectorAll('.horst-header a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('mobile-open');document.documentElement.classList.remove('menu-open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'})});
  var heroCopy=document.querySelector('.v2h-hero-copy'),heroTitle=heroCopy&&heroCopy.querySelector('h1'),fitFrame;
  function fitHeroTitle(){
    if(!heroCopy||!heroTitle)return;
    heroTitle.style.fontSize='16px';
    var low=16,high=Math.min(180,window.innerWidth*.12);
    for(var i=0;i<12;i++){
      var size=(low+high)/2;
      heroTitle.style.fontSize=size+'px';
      if(heroCopy.scrollHeight<=heroCopy.clientHeight)low=size;else high=size;
    }
    heroTitle.style.fontSize=Math.floor(low)+'px';
  }
  function queueHeroFit(){cancelAnimationFrame(fitFrame);fitFrame=requestAnimationFrame(fitHeroTitle)}
  queueHeroFit();
  window.addEventListener('resize',queueHeroFit,{passive:true});
  if('ResizeObserver' in window&&heroCopy)new ResizeObserver(queueHeroFit).observe(heroCopy);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(queueHeroFit);
  var els=[].slice.call(document.querySelectorAll('.h-story,.h-situations>a,.h-world'));
  if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('in')});return}
  var io=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('in');io.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px -5%'});
  els.forEach(function(el,i){el.style.transitionDelay=(i%2)*70+'ms';io.observe(el)});
})();
