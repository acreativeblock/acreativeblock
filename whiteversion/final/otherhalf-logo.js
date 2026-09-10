/* Self-contained 3-line ACB logo for the OtherHalf prototype.
   Pupil follows the cursor (kept inside the O), letters poke on hover,
   the eye shrinks to blink (no eyelid). */
(function(){
  var SVG='<svg class="acb-logo" viewBox="0 0 1256 796" xmlns="http://www.w3.org/2000/svg" style="height:100%;width:auto;display:block;overflow:visible">'
   +'<path d="M1254.74 243V268.73H1150.15V334.553H1249.32V359.99H1150.15V430.646H1254.74V456.377H1121.78V243H1254.74Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
   +'<path d="M945.072 243L945.307 243.669L1007.64 421.527L1069.98 243.669L1070.22 243H1100.05L1099.55 244.346L1021.62 455.723L1021.38 456.377H993.91L993.669 455.723L915.739 244.346L915.243 243H945.072Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
   +'<path d="M893.508 243V456.377H865.141V243H893.508Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
   +'<path d="M839.309 243V268.73H772.658V456.377H744.291V268.73H677.641V243H839.309Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
   +'<path d="M629.719 243L629.96 243.654L707.89 455.031L708.386 456.377H678.557L678.322 455.708L657.316 395.879H574.652L553.646 455.708L553.412 456.377H523.583L524.079 455.031L602.009 243.654L602.25 243H629.719ZM583.117 371.467H648.852L615.984 277.846L583.117 371.467Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
   +'<path d="M629.719 1L629.96 1.6543L707.89 213.031L708.386 214.377H678.557L678.322 213.708L657.316 153.879H574.652L553.646 213.708L553.412 214.377H523.583L524.079 213.031L602.009 1.6543L602.25 1H629.719ZM583.117 129.467H648.852L615.984 35.8457L583.117 129.467Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
   +'<path d="M508 243V268.73H403.41V334.553H502.58V359.99H403.41V430.646H508V456.377H375.043V243H508Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
   +'<path d="M285.408 243C305.973 243 323.079 249.29 335.054 260.481C347.034 271.679 353.791 287.702 353.791 306.988C353.791 336.399 338.041 359.418 311.775 368.207L360.109 454.89L360.938 456.377H327.732L327.448 455.853L282.469 372.734H233.527V456.377H205.16V243H285.408ZM233.527 347.443H283.064C296.441 347.443 306.783 343.829 313.776 337.154C320.763 330.486 324.545 320.632 324.545 307.867C324.545 295.42 320.522 285.6 313.257 278.884C305.982 272.159 295.337 268.438 281.893 268.438H233.527V347.443Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
   +'<path d="M97.2148 239.484C143.645 239.484 179.122 267.766 185.946 310.492L186.132 311.65H157.513L157.327 310.887C150.707 283.685 126.967 265.801 97.2148 265.801C76.8556 265.801 60.1167 274.019 48.4463 288.553C36.7589 303.108 30.0996 324.071 30.0996 349.615C30.0996 375.383 36.6876 396.381 48.3545 410.915C60.0032 425.426 76.7768 433.576 97.3613 433.576C128.063 433.576 149.872 418.846 157.34 393.57L157.552 392.854H186.217L185.934 394.079C181.053 415.153 170.682 431.631 155.58 442.832C140.485 454.028 120.744 459.893 97.2148 459.893C67.8066 459.893 43.7168 449.206 26.9912 430.015C10.2788 410.838 1 383.264 1 349.615C1 316.254 10.391 288.718 27.1562 269.508C43.9337 250.283 68.0216 239.484 97.2148 239.484Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
   +'<path d="M962.68 544.29L924.177 639.958L924.197 639.966L1048.86 579.33L1049.26 579.136L1082.65 592.572L1080.57 593.549L965.824 647.584L1009.39 791.345L1009.99 793.341L976.358 779.804L976.22 779.344L940.011 659.016L910.808 673.177L883.014 742.237L856.698 731.646L936.364 533.699L962.68 544.29Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
   +'<path d="M725.183 499.283C762.549 477.257 805.423 484.877 832.573 518.418L833.303 519.32L810.204 532.936L809.656 532.356C790.501 512.031 762.375 507.908 738.547 521.954C722.237 531.569 712.974 546.542 710.982 564.583C708.987 582.658 714.285 603.881 727.264 625.898C740.357 648.109 756.321 663.086 773.074 670.083C789.795 677.068 807.373 676.139 823.865 666.417C836.187 659.153 844.837 649.772 849.558 639.076C854.278 628.385 855.103 616.314 851.67 603.607L851.472 602.872L874.607 589.233L874.998 590.409C881.775 610.859 881.818 629.963 875.372 646.775C868.927 663.584 856.032 678.003 837.111 689.157C813.455 703.102 788.649 705.297 765.461 696.68C742.301 688.073 720.855 668.718 703.776 639.744C686.843 611.019 680.402 582.863 684.112 558.377C687.825 533.864 701.7 513.127 725.183 499.283Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
   +'<path d="M461.417 641.238C460.267 611.056 469.962 586.029 488.47 568.234C506.966 550.451 534.165 539.981 567.866 538.696C601.567 537.412 629.447 545.783 649.206 562.108C668.979 578.444 680.515 602.661 681.665 632.842C682.816 663.023 673.157 688.047 654.685 705.842C636.226 723.624 609.064 734.093 575.363 735.378C541.662 736.662 513.745 728.293 493.949 711.97C474.141 695.635 462.568 671.42 461.417 641.238ZM487.714 640.235C488.527 661.552 497.268 678.518 512.188 689.93C527.129 701.358 548.363 707.286 574.255 706.299C600.073 705.315 620.757 697.789 634.768 685.257C648.757 672.743 656.181 655.161 655.368 633.844C654.555 612.528 645.815 595.562 630.913 584.149C615.99 572.72 594.792 566.791 568.974 567.775C543.082 568.762 522.362 576.289 508.333 588.822C494.326 601.336 486.902 618.919 487.714 640.235Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
   +'<path d="M437.485 561.686L414.49 747.919L515.675 760.412L512.522 785.949L383.184 769.979L409.331 558.21L437.485 561.686Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
   +'<path d="M304.043 479.749C322.313 479.11 337.899 483.897 349.077 492.928C360.268 501.97 366.966 515.208 367.529 531.294C368.285 552.884 353.746 573.663 334.114 579.146C347.719 580.848 359.125 586.353 367.367 594.809C376.069 603.737 381.19 615.896 381.69 630.176C382.349 649.026 376.114 664.383 363.94 675.21C351.791 686.016 333.836 692.214 311.213 693.006L230.428 695.833L222.966 482.586L304.043 479.749ZM257.894 669.565L306.376 667.868C322.148 667.316 333.897 663.7 341.582 657.336C349.223 651.008 352.981 641.851 352.562 629.876C352.143 617.917 347.624 609.168 339.191 603.507C330.698 597.808 318.1 595.146 301.36 595.732L255.366 597.342L257.894 669.565ZM254.502 572.652L293.029 571.303C308.511 570.762 320.201 567.256 327.903 561.189C335.557 555.159 339.384 546.511 338.994 535.371C338.636 525.15 334.873 517.455 328.172 512.397C321.438 507.313 311.602 504.791 298.925 505.235L252.2 506.87L254.502 572.652Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
   +'<circle cx="571.64" cy="637.142" r="27" fill="currentColor"/></svg>';

  function init(svg){
    svg.style.visibility='visible';
    var paths=[].slice.call(svg.querySelectorAll('path')), pupil=svg.querySelector('circle'), eye=null, pcx=0, pcy=0;
    if(pupil){
      pcx=+pupil.getAttribute('cx'); pcy=+pupil.getAttribute('cy');
      paths.forEach(function(p){var q=p.getBBox();if(pcx>=q.x&&pcx<=q.x+q.width&&pcy>=q.y&&pcy<=q.y+q.height){if(!eye||q.width*q.height<eye.area)eye={el:p,area:q.width*q.height,box:q};}});
    }
    function toSvg(e){var r=svg.getBoundingClientRect();if(!r.width)return null;var vb=svg.viewBox.baseVal;return{x:(e.clientX-r.left)/r.width*vb.width,y:(e.clientY-r.top)/r.height*vb.height};}
    if(eye&&pupil){
      window.addEventListener('mousemove',function(e){
        var m=toSvg(e); if(!m) return;
        var holeR=Math.min(eye.box.width,eye.box.height)/2,pr=+pupil.getAttribute('r'),R=Math.max(4,(holeR-pr)*0.5),dx=m.x-pcx,dy=m.y-pcy,d=Math.hypot(dx,dy)||1,t=Math.tanh(d/280);
        pupil.style.translate=((dx/d)*R*t).toFixed(2)+'px '+((dy/d)*R*t).toFixed(2)+'px';
      },{passive:true});
      eye.el.style.transformBox='fill-box'; eye.el.style.transformOrigin='center';
      (function blink(){setTimeout(function(){
        eye.el.animate([{transform:'scaleY(1)'},{transform:'scaleY(.08)',offset:.48},{transform:'scaleY(1)'}],{duration:230,easing:'cubic-bezier(.4,0,.2,1)'});
        pupil.animate([{opacity:1},{opacity:0,offset:.42},{opacity:0,offset:.56},{opacity:1}],{duration:230});
        blink();
      },1800+Math.random()*3400);})();
    }
  }
  function boot(){[].slice.call(document.querySelectorAll('.acb-logo-mount')).forEach(function(m){if(m.querySelector('svg'))return;m.innerHTML=SVG;var svg=m.querySelector('svg');if(svg)requestAnimationFrame(function(){init(svg);});});}
  if(document.readyState!=='loading')boot(); else document.addEventListener('DOMContentLoaded',boot);
})();

/* calm cascade reveal + minimal page transitions */
(function(){
  var rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  function anim(){
    document.body.classList.add('oh-fade');
    if(rm)return;
    var sel='.center-hero .wrap,.section-head,.trio>*,.price-grid>*,.blockmap>*,.arc-card,.method-strip>*,.stats>*,.split>*,.familiar,.callout,.access-note,.oh-close-sub .wrap,.oh-two-col>*,.oh-offer-cards>*,.oh-proof-grid>*,.oh-block-tags,.rescat';
    var els=[].slice.call(document.querySelectorAll(sel));
    if(!els.length)return;
    els.forEach(function(el){el.classList.add('rv');});
    if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('in');});return;}
    var io=new IntersectionObserver(function(ents){
      ents.forEach(function(e){if(e.isIntersecting){var el=e.target,p=el.parentNode,idx=p?[].indexOf.call(p.children,el):0;el.style.transitionDelay=((idx%8)*0.06)+'s';el.classList.add('in');io.unobserve(el);}});
    },{rootMargin:'0px 0px -8% 0px',threshold:0.08});
    els.forEach(function(el){io.observe(el);});
  }
  document.addEventListener('click',function(e){
    if(rm||e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;
    var a=e.target.closest?e.target.closest('a'):null;
    if(!a)return;
    var href=a.getAttribute('href')||'';
    if(a.target==='_blank'||a.hasAttribute('download'))return;
    if(!href||href.charAt(0)==='#'||/^(https?:|mailto:|tel:)/i.test(href))return;
    e.preventDefault();document.body.classList.add('oh-leaving');
    setTimeout(function(){location.href=href;},230);
  },true);
  window.addEventListener('pageshow',function(ev){if(ev.persisted)document.body.classList.remove('oh-leaving');});
  if(document.readyState!=='loading')anim(); else document.addEventListener('DOMContentLoaded',anim);
})();
