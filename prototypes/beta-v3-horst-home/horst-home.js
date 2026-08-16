(function(){
  var headerActions=document.querySelector('.horst-actions');
  if(headerActions&&!headerActions.querySelector('.horst-find'))headerActions.insertAdjacentHTML('afterbegin','<a class="horst-find" href="Questionnaire.html">Find your block</a>');
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
  if(menu)menu.addEventListener('click',function(){var open=nav.classList.toggle('mobile-open');menu.setAttribute('aria-expanded',open);menu.setAttribute('aria-label',open?'Close menu':'Open menu');menu.textContent=open?'Close':'Menu'});
  document.querySelectorAll('.horst-header a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('mobile-open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'})});
  var els=[].slice.call(document.querySelectorAll('.h-story,.h-situations>a,.h-world'));
  if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('in')});return}
  var io=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('in');io.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px -5%'});
  els.forEach(function(el,i){el.style.transitionDelay=(i%2)*70+'ms';io.observe(el)});
})();
