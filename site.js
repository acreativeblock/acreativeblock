/* GTM backup loader (GTM-NXN6JJ2H) — fires only if the inline <head> snippet is missing (e.g. a page was regenerated). Idempotent: never double-loads. KEEP THIS. */
(function(){var i='GTM-NXN6JJ2H';try{if(window.google_tag_manager&&window.google_tag_manager[i])return;if(document.querySelector('script[src*="googletagmanager.com/gtm.js?id='+i+'"]'))return;window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=document.getElementsByTagName('script')[0],j=document.createElement('script');j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);}catch(e){}})();
(function(){
  /* The project stylesheet is the final visual layer. On pages where these
     shared sheets are injected, insert them before it rather than appending
     them after it, so legacy rules cannot override the current system. */
  var acbStyle=document.querySelector('link[href*="acb.css"]');
  if(!document.querySelector('link[href*="base.css"]')){var baseLink=document.createElement('link');baseLink.rel='stylesheet';baseLink.href='../base.css?v=45';document.head.insertBefore(baseLink,acbStyle||null)}
  if(!document.querySelector('link[href*="sections.css"]')){var sectionsLink=document.createElement('link');sectionsLink.rel='stylesheet';sectionsLink.href='../sections.css?v=54';document.head.insertBefore(sectionsLink,acbStyle||null)}
  var headerHost=document.querySelector('[data-site-header]'),footerHost=document.querySelector('[data-site-footer]');
  var siteJsTag=document.currentScript,atRoot=siteJsTag&&siteJsTag.getAttribute('src').indexOf('../')!==0;
  var instagram='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4Zm8.9 1.5a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/></svg>',linkedin='<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>';
  var headerHtml='<header class="site-header acb-header"><div class="inner"><a class="acb-logo" href="../" aria-label="A Creative Block home"><span class="acb-logo-mount" data-acb-logo="3lines" data-acb-mode="none"></span></a><div class="acb-head-right"><nav class="acb-nav hdr-main" aria-label="Main navigation"><span class="menu navitem"><a class="navbutton" href="../for-individuals/">For individuals</a></span><span class="menu navitem"><a class="navbutton" href="../for-organisations/">For organisations</a></span><span class="menu navitem"><button class="navbutton">Research &amp; method</button><span class="submenu mega acb-sub"><a href="../our-method/">How we work</a><a href="../the-block-map/">Our blocks’ map</a><a href="../the-factors/">The factors</a><a href="../evidence/">The evidence</a></span></span><span class="menu navitem"><button class="navbutton">About us</button><span class="submenu mega acb-sub"><a href="../about/">Our story</a><a href="../contact/">Contact</a><a href="../faq/">FAQ</a></span></span></nav><div class="mobile-menu-footer" aria-label="More links"><a href="../faq/">FAQ</a><a href="https://www.instagram.com/a.creative.block/">Instagram</a><a href="https://www.linkedin.com/company/acreativeblock/">LinkedIn</a></div><div class="acb-actions"><span class="acb-social"><a href="https://www.linkedin.com/company/acreativeblock/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.06c.53-.95 1.83-1.95 3.76-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.03-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4z"/></svg></a><a href="https://www.instagram.com/a.creative.block/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg></a></span><a class="acb-utility-pill" href="../contact/">Get in touch</a></div></div><a class="mobile-header-cta" href="../contact/">Get in touch</a><button class="mobile-menu-toggle" type="button" aria-expanded="false" aria-label="Open menu">Menu</button></div></header>';
  var quickContactHtml='<section class="acb-quick-contact"><picture class="qc-media"><source type="image/avif" srcset="../images/hero-contact-960.avif 960w, ../images/hero-contact-1920.avif 1920w, ../images/hero-contact-2560.avif 2560w" sizes="100vw"><img src="../images/hero-contact-1440.webp" srcset="../images/hero-contact-960.webp 960w, ../images/hero-contact-1440.webp 1440w, ../images/hero-contact-1920.webp 1920w, ../images/hero-contact-2560.webp 2560w" sizes="100vw" width="1440" height="961" loading="lazy" decoding="async" alt="A person taking a breath before reaching out"></picture><div class="qc-scrim"></div><div class="wrap"><div class="qc-copy"><h2>Let\'s break the block.</h2><p class="note">Send a quick message and we\'ll get back to you.</p></div><form class="cform qc-form" action="https://api.web3forms.com/submit" method="POST"><input type="hidden" name="access_key" value="d7506451-0687-41fb-964f-15578f8bde62"><input type="hidden" name="subject" value="New enquiry — A Creative Block"><input type="hidden" name="from_name" value="A Creative Block website"><input type="checkbox" name="botcheck" style="display:none" tabindex="-1" autocomplete="off" aria-hidden="true"><div class="row2"><input type="text" name="name" placeholder="Your name" autocomplete="name" required><input type="email" name="email" placeholder="Your email" autocomplete="email" required></div><textarea name="message" placeholder="Tell us a bit about what you have in mind." required></textarea><p class="cform-status qc-status" role="status" aria-live="polite"></p><button class="btn" type="submit">Send message</button></form></div></section>';
  var footerHtml='<footer class="acb-footer"><div class="wrap"><div class="foot-lead"><div class="mark"><a href="../" aria-label="A Creative Block home"><span class="acb-logo-mount" data-acb-logo="3lines" data-acb-mode="none" style="color:#FEFDF9"></span></a><p class="ack">For anyone shaping their creative identity, vision, and work.</p></div></div><div class="top acb-footer-links"><div class="col"><b>Work together</b><a href="../for-individuals/">For individuals</a><a href="../for-organisations/">For organisations</a><a href="../contact/">Contact</a></div><div class="col"><b>Research &amp; method</b><a href="../our-method/">How we work</a><a href="../the-block-map/">The 7+1 map</a><a href="../the-factors/">The factors</a><a href="../evidence/">The evidence</a></div><div class="col"><b>Explore</b><a href="../blog/">Blog</a><a href="../find-your-block/">Find your block</a><a href="../about/">Our story</a></div><div class="col"><b>Support</b><a href="../faq/">FAQ</a><a href="../terms/">Terms &amp; Conditions</a><a href="../privacy/">Privacy Policy</a><a href="../cookies/">Cookies</a></div></div><div class="bottom"><span>© 2026 A Creative Block · Understand the why, then move.</span></div></div></footer>';
  if(atRoot){headerHtml=headerHtml.replace(/\.\.\//g,'');footerHtml=footerHtml.replace(/\.\.\//g,'');quickContactHtml=quickContactHtml.replace(/\.\.\//g,'');}
  if(headerHost)headerHost.innerHTML=headerHtml;
  if(footerHost){
    footerHost.innerHTML='<div class="footer-reveal">'+quickContactHtml+footerHtml+'</div>';
    var footerBottom=footerHost.querySelector('.acb-footer .bottom');
    if(footerBottom)footerBottom.insertAdjacentHTML('beforeend','<div class="footer-socials" aria-label="Follow A Creative Block"><a href="https://www.instagram.com/a.creative.block/" target="_blank" rel="noopener" aria-label="Instagram">'+instagram+'</a><a href="https://www.linkedin.com/company/acreativeblock/" target="_blank" rel="noopener" aria-label="LinkedIn">'+linkedin+'</a></div>')
  }

  var header=document.querySelector('.site-header'),toggle=document.querySelector('.menu-toggle');
  var mobileToggle=document.querySelector('.mobile-menu-toggle');
  var mobileMenuTimer;
  function openMobileMenu(){clearTimeout(mobileMenuTimer);header.classList.remove('menu-closing');header.classList.add('mobile-open');mobileToggle.setAttribute('aria-expanded','true');mobileToggle.setAttribute('aria-label','Close menu');document.documentElement.classList.add('menu-open')}
  function closeMobileMenu(animate){if(!header.classList.contains('mobile-open'))return;mobileToggle.setAttribute('aria-expanded','false');mobileToggle.setAttribute('aria-label','Open menu');if(!animate){header.classList.remove('mobile-open','menu-closing');document.documentElement.classList.remove('menu-open');return}header.classList.add('menu-closing');clearTimeout(mobileMenuTimer);mobileMenuTimer=setTimeout(function(){header.classList.remove('mobile-open','menu-closing');document.documentElement.classList.remove('menu-open')},520)}
  if(mobileToggle)mobileToggle.addEventListener('click',function(){if(header.classList.contains('menu-closing'))return;if(header.classList.contains('mobile-open'))closeMobileMenu(true);else openMobileMenu()});
  document.querySelectorAll('.site-header .navbutton').forEach(function(button){button.addEventListener('click',function(){if(button.tagName==='A')return;if(window.innerWidth>1180)return;var item=button.closest('.navitem'),open=!item.classList.contains('submenu-open');document.querySelectorAll('.site-header .navitem.submenu-open').forEach(function(other){if(other!==item)other.classList.remove('submenu-open')});item.classList.toggle('submenu-open',open)})});
  document.querySelectorAll('.site-header a').forEach(function(a){a.addEventListener('click',function(){if(header.classList.contains('mobile-open'))closeMobileMenu(false)})});
  (function(){function slug(s){s=(s||'').replace(/[?#].*$/,'').replace(/\/+$/,'');s=s.split('/').pop().replace(/\.html$/,'');return(s===''||s==='..'||s==='final')?'index':s.toLowerCase();}var cur=slug(location.pathname);document.querySelectorAll('.acb-nav .navitem').forEach(function(it){var on=false;it.querySelectorAll('a[href]').forEach(function(a){if(slug(a.getAttribute('href'))===cur)on=true});if(on)it.classList.add('is-active')})})();
  if(header){var headerBar=header.parentElement,pageReel=document.querySelector('[data-situations-reel]'),lastScroll=window.scrollY,scrollTick=false,travel=0,direction=0;addEventListener('scroll',function(){if(scrollTick)return;scrollTick=true;requestAnimationFrame(function(){var now=window.scrollY,delta=now-lastScroll,nextDirection=delta>0?1:delta<0?-1:0,reelActive=pageReel&&now<pageReel.offsetTop+pageReel.offsetHeight-innerHeight-2;if(now<=10||reelActive){headerBar.classList.remove('header-hidden');travel=0;direction=0}else if(nextDirection){if(nextDirection!==direction){travel=0;direction=nextDirection}travel+=Math.abs(delta);if(direction===1&&travel>=50){headerBar.classList.add('header-hidden');travel=0}else if(direction===-1&&travel>=4){headerBar.classList.remove('header-hidden');travel=0}}lastScroll=now;scrollTick=false})},{passive:true})}
  if(toggle)toggle.addEventListener('click',function(){header.classList.toggle('open');toggle.setAttribute('aria-expanded',header.classList.contains('open'))});
  var timeNode=document.querySelector('[data-lisbon-time]');function updateLisbonTime(){if(timeNode)timeNode.textContent=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Lisbon',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date())}updateLisbonTime();setInterval(updateLisbonTime,30000);
  document.querySelectorAll('.navbutton').forEach(function(b){b.addEventListener('click',function(e){if(b.tagName==='A')return;e.preventDefault();if(innerWidth>1180){b.blur()}})});
  document.querySelectorAll('.submenu a').forEach(function(a){a.addEventListener('click',function(){document.querySelectorAll('.navitem.open').forEach(function(n){n.classList.remove('open')});if(document.activeElement)document.activeElement.blur()})});
  document.querySelectorAll('.offer-toggle,.faq-q').forEach(function(b){var item=b.parentElement,answer=item.querySelector('.offer-body,.faq-a'),icon=b.querySelector('.pm');if(icon)icon.innerHTML='<svg viewBox=\"0 0 20 20\" aria-hidden=\"true\"><path d=\"m5 7.5 5 5 5-5\"/></svg>';b.setAttribute('aria-expanded',item.classList.contains('open')?'true':'false');b.addEventListener('click',function(){var opening=!item.classList.contains('open');if(!answer){item.classList.toggle('open',opening);b.setAttribute('aria-expanded',opening?'true':'false');return}if(opening){item.classList.add('open');b.setAttribute('aria-expanded','true');answer.style.setProperty('height','0px','important');void answer.offsetHeight;answer.style.setProperty('height',answer.scrollHeight+'px','important')}else{answer.style.setProperty('height',answer.scrollHeight+'px','important');void answer.offsetHeight;item.classList.remove('open');b.setAttribute('aria-expanded','false');answer.style.setProperty('height','0px','important')}answer.addEventListener('transitionend',function(e){if(e.propertyName==='height')answer.style.removeProperty('height')},{once:true})})});
  (function(){var viewport=document.querySelector('[data-journal-viewport]'),previous=document.querySelector('[data-journal-prev]'),next=document.querySelector('[data-journal-next]');if(!viewport)return;function move(direction){var card=viewport.querySelector('.journal-card'),amount=card?card.getBoundingClientRect().width+16:viewport.clientWidth*.8;viewport.scrollBy({left:direction*amount,behavior:'smooth'})}if(previous)previous.addEventListener('click',function(){move(-1)});if(next)next.addEventListener('click',function(){move(1)});viewport.addEventListener('keydown',function(e){if(e.key==='ArrowLeft'){e.preventDefault();move(-1)}if(e.key==='ArrowRight'){e.preventDefault();move(1)}})})();
  document.querySelectorAll('.newsletter').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var b=f.querySelector('button');b.textContent='Thank you!';b.disabled=true})});
  document.querySelectorAll('.qc-form').forEach(function(form){
    var status=form.querySelector('.qc-status'),btn=form.querySelector('button[type=submit]'),btnLabel=btn.textContent;
    form.addEventListener('submit',function(e){
      e.preventDefault();
      btn.disabled=true;btn.textContent='Sending…';
      if(status){status.textContent='';status.className='cform-status qc-status'}
      fetch(form.action,{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify(Object.fromEntries(new FormData(form)))
      }).then(function(r){return r.json().then(function(data){return{ok:r.ok,data:data}})}).then(function(res){
        if(res.ok&&res.data&&res.data.success===true){form.innerHTML='<p class="note qc-sent">Thanks — your message is on its way. We\'ll get back to you as soon as we can.</p>'}
        else{throw new Error('web3forms error')}
      }).catch(function(){
        btn.disabled=false;btn.textContent=btnLabel;
        if(status){status.className='cform-status qc-status is-error';status.textContent='Something went wrong sending that — please try again, or email hello@acreativeblock.com directly.'}
      });
    });
  });
  document.querySelectorAll('form.cform').forEach(function(f){f.addEventListener('submit',function(){try{(window.dataLayer=window.dataLayer||[]).push({event:'generate_lead',form_name:'contact'})}catch(e){}})});
  document.querySelectorAll('a[href^="mailto:"]').forEach(function(a){a.addEventListener('click',function(){try{(window.dataLayer=window.dataLayer||[]).push({event:'generate_lead',form_name:'email_link'})}catch(e){}})});

  (function(){var nav=document.querySelector('.legal-nav,.faqx-nav');if(!nav)return;var links=[].slice.call(nav.querySelectorAll('a[href^="#"]')),pairs=links.map(function(a){return{a:a,s:document.querySelector(a.getAttribute('href'))}}).filter(function(x){return x.s});if(!pairs.length)return;var spy=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(!entry.isIntersecting)return;links.forEach(function(a){a.classList.remove('is-current')});var hit=pairs.find(function(x){return x.s===entry.target});if(hit)hit.a.classList.add('is-current')})},{rootMargin:'-18% 0px -68% 0px',threshold:0});pairs.forEach(function(x){spy.observe(x.s)});if(pairs[0])pairs[0].a.classList.add('is-current')})();
  (function(){var journey=document.querySelector('.method-journey');if(!journey)return;var navItems=[].slice.call(journey.querySelectorAll('.journey-nav-item')),steps=[].slice.call(journey.querySelectorAll('.journey-step'));var pairs=navItems.map(function(nav){var step=steps.find(function(s){return s.dataset.step===nav.dataset.stepNav});return{nav:nav,step:step}}).filter(function(x){return x.step});if(!pairs.length)return;navItems.forEach(function(nav){nav.addEventListener('click',function(){var hit=pairs.find(function(x){return x.nav===nav});if(hit)hit.step.scrollIntoView({behavior:'smooth',block:'start'})})});var spy=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(!entry.isIntersecting)return;var hit=pairs.find(function(x){return x.step===entry.target});if(!hit)return;navItems.forEach(function(n){n.classList.remove('active')});hit.nav.classList.add('active')})},{rootMargin:'-20% 0px -65% 0px',threshold:0});pairs.forEach(function(x){spy.observe(x.step)});if(pairs[0])pairs[0].nav.classList.add('active')})();
  var consentKey='acb-cookie-consent-v1',consent=localStorage.getItem(consentKey),banner=document.createElement('aside');
  banner.className='cookie-banner';
  banner.setAttribute('aria-label','Cookie choices');
  banner.innerHTML='<div><strong>Cookies, without the crumbs.</strong><p>We use essential storage so the site works and remembers this choice. Optional analytics will only run if you accept them.</p><a href="../cookies/">Read the Cookie Policy</a></div><div class="cookie-actions"><button type="button" data-cookie-reject>Essential only</button><button type="button" data-cookie-accept>Accept optional</button></div>';
  document.body.appendChild(banner);
  banner.hidden=!!consent;
  function setConsent(choice){localStorage.setItem(consentKey,choice);banner.hidden=true;var __g=choice==='accepted'?'granted':'denied';try{(window.gtag||function(){(window.dataLayer=window.dataLayer||[]).push(arguments)})('consent','update',{ad_storage:__g,ad_user_data:__g,ad_personalization:__g,analytics_storage:__g})}catch(e){}window.dispatchEvent(new CustomEvent('acb:consent',{detail:{optional:choice==='accepted'}}));if(choice==='accepted'){setTimeout(function(){location.reload()},250)}}
  banner.querySelector('[data-cookie-reject]').addEventListener('click',function(){setConsent('essential')});
  banner.querySelector('[data-cookie-accept]').addEventListener('click',function(){setConsent('accepted')});
  document.querySelectorAll('[data-cookie-settings]').forEach(function(button){button.addEventListener('click',function(){localStorage.removeItem(consentKey);banner.hidden=false;banner.querySelector('[data-cookie-reject]').focus()})});

  document.querySelectorAll('.resources-page .resitem').forEach(function(el,i){
    var body=document.createElement('span');body.className='resbody';
    while(el.firstChild)body.appendChild(el.firstChild);
    var icon=document.createElement('span');icon.className='resico';
    function badge(){icon.textContent=(body.querySelector('b')?.textContent||'?').trim().charAt(0);icon.style.background=['#4F46E5','#FF7F50','#F6D65D','#bde7d5'][i%4];icon.style.color=i%4===2||i%4===3?'#071321':'#fff'}
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

/* references slide-in panel */
(function(){
  function close(){var p=document.querySelector('.refpanel'),s=document.querySelector('.refscrim'),b=document.querySelector('.refbar');if(p)p.classList.remove('open');if(s)s.classList.remove('open');if(p)p.setAttribute('aria-hidden','true');if(b)b.setAttribute('aria-expanded','false');document.documentElement.style.overflow='';}
  document.addEventListener('click',function(e){
    var bar=e.target.closest('.refbar');
    if(bar){var p=document.querySelector('.refpanel'),s=document.querySelector('.refscrim');if(p){p.classList.add('open');p.setAttribute('aria-hidden','false');}if(s)s.classList.add('open');bar.setAttribute('aria-expanded','true');document.documentElement.style.overflow='hidden';return;}
    if(e.target.closest('.refpanel-close')||e.target.classList.contains('refscrim'))close();
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
})();
