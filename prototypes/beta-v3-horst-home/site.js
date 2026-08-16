(function(){
  document.documentElement.classList.add('horst-v3');
  if(!document.querySelector('link[href^="horst-pages.css"]')){var horstStyles=document.createElement('link');horstStyles.rel='stylesheet';horstStyles.href='horst-pages.css?v=16';document.head.appendChild(horstStyles)}
  var headerHost=document.querySelector('[data-site-header]'),footerHost=document.querySelector('[data-site-footer]');
  var instagram='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.4" cy="6.7" r="1.1"/></svg>',linkedin='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="1" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="7.6" cy="8" r="1.2"/><path d="M6.5 10.5v7M10.5 10.5v7M10.5 13.6c.8-2.3 5.1-2.5 5.1 1v2.9" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';
  if(headerHost)headerHost.innerHTML='<header class="site-header horst-header"><div class="inner"><a class="horst-logo" href="index.html" aria-label="A Creative Block home"><span class="acb-logo-mount" data-acb-logo="1line" data-acb-mode="eye"></span></a><nav class="hdr-main" aria-label="Main navigation"><span class="menu navitem"><button class="navbutton">The blocks</button><span class="submenu mega"><a href="blocks.html"><strong>The 7+1 map</strong></a><a href="evidence.html"><strong>Evidence + limits</strong></a><a href="Questionnaire.html"><strong>Find your block</strong></a></span></span><span class="menu navitem"><button class="navbutton">How we work</button><span class="submenu mega"><a href="method.html"><strong>The CRAFT method</strong></a><a href="manifesto.html"><strong>Manifesto</strong></a></span></span><span class="menu navitem"><button class="navbutton">Work together</button><span class="submenu mega"><a href="individuals.html"><strong>For individuals</strong></a><a href="organisations.html"><strong>For organisations</strong></a><a href="contact.html"><strong>Start a conversation</strong></a></span></span><span class="menu navitem"><button class="navbutton">Read + explore</button><span class="submenu mega"><a href="blog.html"><strong>Articles</strong></a><a href="resources.html"><strong>Resources</strong></a><a href="Playroom.html"><strong>Playroom</strong></a><a href="faq.html"><strong>FAQ</strong></a></span></span><span class="menu navitem"><button class="navbutton">About</button><span class="submenu mega"><a href="about.html"><strong>About the founder</strong></a><a href="contact.html"><strong>Contact</strong></a></span></span></nav><div class="horst-actions"><a class="horst-book" href="contact.html">Book a call</a><button class="mobile-menu-toggle" type="button" aria-expanded="false" aria-label="Open menu">Menu</button></div></div></header>';
  var readExplore=headerHost&&[].slice.call(headerHost.querySelectorAll('.navbutton')).find(function(button){return button.textContent.trim()==='Read + explore'});if(readExplore)readExplore.textContent='Read & explore';
  var researchItems=headerHost&&headerHost.querySelectorAll('.hdr-main>.navitem');if(researchItems&&researchItems.length>1){var researchButton=researchItems[0].querySelector('.navbutton'),researchMenu=researchItems[0].querySelector('.submenu');researchButton.textContent='Our research';researchMenu.innerHTML='<a href="blocks.html"><strong>The 7+1 map</strong></a><a href="evidence.html"><strong>Evidence + limits</strong></a><a href="method.html"><strong>The CRAFT method</strong></a>';researchItems[1].remove()}var aboutButton=headerHost&&[].slice.call(headerHost.querySelectorAll('.navbutton')).find(function(button){return button.textContent.trim()==='About'});if(aboutButton){var aboutMenu=aboutButton.parentElement.querySelector('.submenu');if(aboutMenu&&!aboutMenu.querySelector('a[href="manifesto.html"]'))aboutMenu.insertAdjacentHTML('beforeend','<a href="manifesto.html"><strong>Manifesto</strong></a>')}
  var headerActions=headerHost&&headerHost.querySelector('.horst-actions');
  if(headerActions){var findButton=headerActions.querySelector('.horst-find');if(findButton)findButton.remove()}
  if(footerHost)footerHost.innerHTML='<footer class="footer horst-footer"><div class="horst-footer-lead"><strong>A Creative Block</strong><p>Getting stuck is information.<br>Understand the why, then move.</p></div><div class="horst-footer-links"><div><b>Explore</b><a href="blocks.html">The blocks</a><a href="method.html">Method</a><a href="blog.html">Articles</a><a href="resources.html">Resources</a></div><div><b>Work together</b><a href="individuals.html">Individuals</a><a href="organisations.html">Organisations</a><a href="contact.html">Contact</a></div><div><b>Elsewhere</b><a href="https://instagram.com/acreativeblock">Instagram</a><a href="https://www.linkedin.com/company/a-creative-block/">LinkedIn</a><a href="mailto:hello@acreativeblock.com">Email</a></div></div><div class="horst-footer-bottom"><span>© 2026 A Creative Block</span><div><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="cookies.html">Cookies</a></div></div></footer>';
  var grain=document.querySelector('.grain');
  if(grain){var gx=grain.getContext('2d'),gw=0,gh=0,last=0,tile=document.createElement('canvas'),tx=tile.getContext('2d');function resize(){gw=grain.width=Math.ceil(innerWidth);gh=grain.height=Math.ceil(innerHeight);tile.width=Math.max(1,Math.ceil(gw*.5));tile.height=Math.max(1,Math.ceil(gh*.5))}function noise(t){if(t-last<95)return;last=t;var tw=tile.width,th=tile.height,im=tx.createImageData(tw,th),d=im.data;for(var i=0;i<d.length;i+=4){var n=Math.random()*255;d[i]=d[i+1]=d[i+2]=n;d[i+3]=32}tx.putImageData(im,0,0);gx.clearRect(0,0,gw,gh);for(var y=0;y<gh;y+=th)for(var x=0;x<gw;x+=tw)gx.drawImage(tile,x,y)}resize();addEventListener('resize',resize,{passive:true});(function loop(t){noise(t);requestAnimationFrame(loop)})(0)}

  var header=document.querySelector('.site-header'),toggle=document.querySelector('.menu-toggle');
  var mobileToggle=document.querySelector('.mobile-menu-toggle');
  if(mobileToggle)mobileToggle.addEventListener('click',function(){var open=header.classList.toggle('mobile-open');mobileToggle.setAttribute('aria-expanded',open);mobileToggle.setAttribute('aria-label',open?'Close menu':'Open menu');document.documentElement.classList.toggle('menu-open',open)});
  document.querySelectorAll('.site-header .navbutton').forEach(function(button){button.addEventListener('click',function(){if(window.innerWidth>900)return;var item=button.closest('.navitem'),open=!item.classList.contains('submenu-open');document.querySelectorAll('.site-header .navitem.submenu-open').forEach(function(other){if(other!==item)other.classList.remove('submenu-open')});item.classList.toggle('submenu-open',open)})});
  document.querySelectorAll('.site-header a').forEach(function(a){a.addEventListener('click',function(){if(!header.classList.contains('mobile-open'))return;header.classList.remove('mobile-open');mobileToggle.setAttribute('aria-expanded','false');document.documentElement.classList.remove('menu-open')})});
  if(header){var headerBar=header.parentElement,pageReel=document.querySelector('[data-situations-reel]'),lastScroll=window.scrollY,scrollTick=false,travel=0,direction=0;addEventListener('scroll',function(){if(scrollTick)return;scrollTick=true;requestAnimationFrame(function(){var now=window.scrollY,delta=now-lastScroll,nextDirection=delta>0?1:delta<0?-1:0,reelActive=pageReel&&now<pageReel.offsetTop+pageReel.offsetHeight-innerHeight-2;if(now<=10||reelActive){headerBar.classList.remove('header-hidden');travel=0;direction=0}else if(nextDirection){if(nextDirection!==direction){travel=0;direction=nextDirection}travel+=Math.abs(delta);if(direction===1&&travel>=50){headerBar.classList.add('header-hidden');travel=0}else if(direction===-1&&travel>=35){headerBar.classList.remove('header-hidden');travel=0}}lastScroll=now;scrollTick=false})},{passive:true})}
  if(toggle)toggle.addEventListener('click',function(){header.classList.toggle('open');toggle.setAttribute('aria-expanded',header.classList.contains('open'))});
  var timeNode=document.querySelector('[data-lisbon-time]');function updateLisbonTime(){if(timeNode)timeNode.textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Lisbon',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date())}updateLisbonTime();setInterval(updateLisbonTime,30000);
  document.querySelectorAll('.navbutton').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();if(innerWidth<=1050){document.querySelectorAll('.navitem.open').forEach(function(n){if(n!==b.parentElement)n.classList.remove('open')});b.parentElement.classList.toggle('open')}else{b.blur()}})});
  document.querySelectorAll('.submenu a').forEach(function(a){a.addEventListener('click',function(){document.querySelectorAll('.navitem.open').forEach(function(n){n.classList.remove('open')});if(document.activeElement)document.activeElement.blur()})});
  document.querySelectorAll('.offer-toggle,.faq-q').forEach(function(b){b.addEventListener('click',function(){b.parentElement.classList.toggle('open')})});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.08,rootMargin:'0px 0px -5%'});document.querySelectorAll('main section,.reveal').forEach(function(x,i){x.classList.add('reveal');x.style.transitionDelay=(i%3)*45+'ms';io.observe(x)});
  document.querySelectorAll('.newsletter').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var b=f.querySelector('button');b.textContent='Thank you';setTimeout(function(){b.textContent='Join'},1800)})});
  var consentKey='acb-cookie-consent-v1',consent=localStorage.getItem(consentKey),banner=document.createElement('aside');
  banner.className='cookie-banner';
  banner.setAttribute('aria-label','Cookie choices');
  banner.innerHTML='<div><strong>Cookies, without the crumbs.</strong><p>We use essential storage so the site works and remembers this choice. Optional analytics will only run if you accept them.</p><a href="cookies.html">Read the Cookie Policy</a></div><div class="cookie-actions"><button type="button" data-cookie-reject>Essential only</button><button type="button" data-cookie-accept>Accept optional</button></div>';
  document.body.appendChild(banner);
  banner.hidden=!!consent;
  function setConsent(choice){localStorage.setItem(consentKey,choice);banner.hidden=true;window.dispatchEvent(new CustomEvent('acb:consent',{detail:{optional:choice==='accepted'}}))}
  banner.querySelector('[data-cookie-reject]').addEventListener('click',function(){setConsent('essential')});
  banner.querySelector('[data-cookie-accept]').addEventListener('click',function(){setConsent('accepted')});
  document.querySelectorAll('[data-cookie-settings]').forEach(function(button){button.addEventListener('click',function(){localStorage.removeItem(consentKey);banner.hidden=false;banner.querySelector('[data-cookie-reject]').focus()})});

  document.querySelectorAll('.resources-page .resitem').forEach(function(el,i){
    var body=document.createElement('span');body.className='resbody';
    while(el.firstChild)body.appendChild(el.firstChild);
    var icon=document.createElement('span');icon.className='resico';
    function badge(){icon.textContent=(body.querySelector('b')?.textContent||'?').trim().charAt(0);icon.style.background=['#4F46E5','#FF7F50','#f4dc55','#bde7d5'][i%4];icon.style.color=i%4===2||i%4===3?'#1E1E1E':'#fff'}
    var href=el.tagName==='A'&&el.getAttribute('href'),host='';
    if(href)try{host=new URL(href,location.href).hostname}catch(err){}
    if(host){var img=document.createElement('img');img.alt='';img.loading='lazy';img.src='https://www.google.com/s2/favicons?domain='+encodeURIComponent(host)+'&sz=64';img.onerror=function(){img.remove();badge()};icon.appendChild(img)}else badge();
    el.appendChild(icon);el.appendChild(body);
  });

  var reel=document.querySelector('[data-situations-reel]'),reelTrack=document.querySelector('[data-reel-track]');
  if(reel&&reelTrack&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    var reelItems=[].slice.call(reelTrack.children),reelCurrent=document.querySelector('[data-reel-current]'),reelFrame=0;
    function updateReel(){
      reelFrame=0;
      var rect=reel.getBoundingClientRect(),sectionStart=scrollY+rect.top,distance=Math.max(1,reel.scrollHeight-innerHeight),progress=Math.max(0,Math.min(1,(scrollY-sectionStart)/distance));
      var itemHeight=reelItems[0].offsetHeight,indexFloat=progress*(reelItems.length-1),active=Math.round(indexFloat);
      reelTrack.style.transform='translateY('+(-indexFloat*itemHeight-itemHeight/2)+'px)';
      reel.style.setProperty('--reel-progress',progress);
      reelItems.forEach(function(item,i){item.classList.toggle('is-active',i===active)});
      if(reelCurrent)reelCurrent.textContent=String(active+1).padStart(2,'0');
    }
    function requestReel(){if(!reelFrame)reelFrame=requestAnimationFrame(updateReel)}
    updateReel();addEventListener('scroll',requestReel,{passive:true});addEventListener('resize',requestReel,{passive:true});
  }

  // The shared SVG script supplies the exact logo and pupil tracking. Beta adds only a
  // direct-pointer impact on BLOCK; there is deliberately no scroll listener.
  var mount=document.querySelector('.horst-logo .acb-logo-mount');
  if(!mount)return;
  requestAnimationFrame(function waitForLogo(){
    var svg=mount.querySelector('svg');
    if(!svg){requestAnimationFrame(waitForLogo);return}
    var paths=[].slice.call(svg.querySelectorAll('path')),pupil=svg.querySelector('circle'),letters=paths.slice(-5),eye=null;
    [].slice.call(svg.querySelectorAll('rect[clip-path]')).forEach(function(n){var m=(n.getAttribute('clip-path')||'').match(/#([^\)]+)/),cp=m&&svg.querySelector('#'+m[1]);n.remove();if(cp)cp.remove()});
    if(pupil){var pcx=+pupil.getAttribute('cx'),pcy=+pupil.getAttribute('cy');paths.forEach(function(p){var q=p.getBBox();if(pcx>=q.x&&pcx<=q.x+q.width&&pcy>=q.y&&pcy<=q.y+q.height){if(!eye||q.width*q.height<eye.area)eye={el:p,area:q.width*q.height}}})}
    var bodies=letters.map(function(el){el.style.transformBox='fill-box';el.style.transformOrigin='center';return{el:el,x:0,y:0,vx:0,vy:0,r:0,vr:0}}),raf=0;
    function tick(){var active=false;bodies.forEach(function(b){var isEye=eye&&b.el===eye.el;b.vx+=-b.x*.055;b.vy+=-b.y*.055;if(!isEye)b.vr+=-b.r*.045;b.vx*=.79;b.vy*=.79;b.vr*=.77;b.x+=b.vx;b.y+=b.vy;if(!isEye)b.r+=b.vr;else{b.r=0;b.vr=0}b.el.style.translate=b.x+'px '+b.y+'px';b.el.style.rotate=b.r+'deg';if(isEye&&pupil)pupil.style.translate=b.x+'px '+b.y+'px';if(Math.abs(b.x)+Math.abs(b.y)+Math.abs(b.vx)+Math.abs(b.vy)>.08)active=true});if(active)raf=requestAnimationFrame(tick);else raf=0}
    function hit(e){var r=svg.getBoundingClientRect(),mx=(e.clientX-r.left)/r.width*svg.viewBox.baseVal.width,my=(e.clientY-r.top)/r.height*svg.viewBox.baseVal.height;bodies.forEach(function(b){var q=b.el.getBBox(),cx=q.x+q.width/2,cy=q.y+q.height/2,dx=cx-mx,dy=cy-my,d=Math.hypot(dx,dy),isEye=eye&&b.el===eye.el;if(d<180){var f=(1-d/180)*10;b.vx+=(dx/(d||1))*f;b.vy+=(dy/(d||1))*f;if(!isEye)b.vr+=(Math.random()-.5)*4}});if(!raf)raf=requestAnimationFrame(tick)}
    // Pointer collision intentionally disabled: the brand mark remains stable.
    if(eye&&pupil){eye.el.style.transformBox='fill-box';eye.el.style.transformOrigin='center';(function blink(){setTimeout(function(){eye.el.animate([{transform:'scaleY(1)'},{transform:'scaleY(.08)',offset:.48},{transform:'scaleY(1)'}],{duration:180,easing:'cubic-bezier(.4,0,.2,1)'});pupil.animate([{opacity:1},{opacity:0,offset:.4},{opacity:0,offset:.58},{opacity:1}],{duration:180});blink()},1900+Math.random()*3600)})()}
  });
})();
