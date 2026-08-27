/* Shared animated A Creative Block logo.
   Drop a mount anywhere:  <span class="acb-logo-mount" data-acb-logo="1line|3lines"
                                 style="display:inline-block;height:24px;color:#fff"></span>
   The 5 "BLOCK" letters (nearest the dot) fall in on load, bounce gently on scroll,
   poke away from the cursor, and spring back to their crooked home. Colour = CSS `color`. */
(function(){
  var SVG1='<svg class="acb-logo" viewBox="0 0 2501 328" xmlns="http://www.w3.org/2000/svg" style="height:100%;width:auto;display:block;overflow:visible;visibility:hidden">'
+'<path d="M1515.61 17.3076V43.0381H1411.02V108.86H1510.19V134.298H1411.02V204.954H1515.61V230.685H1382.65V17.3076H1515.61Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
+'<path d="M1205.94 17.3076L1206.18 17.9766L1268.51 195.835L1330.85 17.9766L1331.09 17.3076H1360.92L1360.42 18.6533L1282.49 230.03L1282.25 230.685H1254.78L1254.54 230.03L1176.61 18.6533L1176.11 17.3076H1205.94Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
+'<path d="M1154.38 17.3076V230.685H1126.01V17.3076H1154.38Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
+'<path d="M1100.18 17.3076V43.0381H1033.53V230.685H1005.16V43.0381H938.51V17.3076H1100.18Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
+'<path d="M890.588 17.3076L890.829 17.9619L968.759 229.339L969.255 230.685H939.426L939.191 230.016L918.186 170.187H835.521L814.516 230.016L814.281 230.685H784.452L784.948 229.339L862.878 17.9619L863.119 17.3076H890.588ZM843.986 145.774H909.721L876.854 52.1533L843.986 145.774Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
+'<path d="M107.57 17.3076L107.812 17.9619L185.741 229.339L186.237 230.685H156.408L156.174 230.016L135.168 170.187H52.5039L31.498 230.016L31.2637 230.685H1.43457L1.93066 229.339L79.8604 17.9619L80.1016 17.3076H107.57ZM60.9688 145.774H126.703L93.8359 52.1533L60.9688 145.774Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
+'<path d="M768.869 17.3076V43.0381H664.279V108.86H763.449V134.298H664.279V204.954H768.869V230.685H635.912V17.3076H768.869Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
+'<path d="M546.277 17.3076C566.842 17.3076 583.949 23.5981 595.923 34.7891C607.904 45.9862 614.66 62.0096 614.66 81.2959C614.66 110.706 598.91 133.726 572.645 142.515L620.979 229.197L621.808 230.685H588.602L588.317 230.16L543.338 147.042H494.396V230.685H466.029V17.3076H546.277ZM494.396 121.751H543.934C557.31 121.751 567.652 118.137 574.646 111.462C581.632 104.793 585.414 94.9397 585.414 82.1748C585.414 69.7273 581.391 59.9072 574.126 53.1914C566.851 46.4662 556.206 42.7451 542.762 42.7451H494.396V121.751Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
+'<path d="M358.084 13.792C404.515 13.792 439.991 42.0734 446.815 84.7998L447.001 85.958H418.382L418.196 85.1943C411.576 57.9927 387.836 40.1084 358.084 40.1084C337.725 40.1084 320.986 48.3266 309.315 62.8604C297.628 77.4155 290.969 98.379 290.969 123.923C290.969 149.69 297.557 170.688 309.224 185.223C320.872 199.734 337.646 207.884 358.23 207.884C388.932 207.884 410.741 193.154 418.209 167.878L418.421 167.161H447.086L446.803 168.387C441.922 189.461 431.551 205.939 416.449 217.14C401.355 228.335 381.613 234.2 358.084 234.2C328.676 234.2 304.586 223.514 287.86 204.322C271.148 185.146 261.869 157.572 261.869 123.923C261.869 90.562 271.26 63.026 288.025 43.8154C304.803 24.5911 328.891 13.792 358.084 13.792Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
+'<path d="M2375.55 76.9955L2337.05 172.663L2337.07 172.671L2461.73 112.036L2462.13 111.841L2495.52 125.277L2493.44 126.255L2378.69 180.289L2422.26 324.05L2422.86 326.047L2389.23 312.51L2389.09 312.05L2352.88 191.722L2323.68 205.883L2295.88 274.943L2269.57 264.352L2349.23 66.4045L2375.55 76.9955Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
+'<path d="M2163.55 21.9107C2205.2 9.78466 2244.86 27.7474 2262.9 66.9504L2263.38 68.0043L2237.64 75.5006L2237.25 74.8027C2223.7 50.3796 2197.46 39.445 2170.91 47.1778C2152.73 52.4711 2140.06 64.6958 2133.68 81.6882C2127.28 98.7114 2127.18 120.585 2134.33 145.125C2141.54 169.879 2153.31 188.331 2167.82 199.247C2182.3 210.14 2199.56 213.577 2217.94 208.225C2231.68 204.226 2242.37 197.269 2249.59 188.068C2256.8 178.872 2260.58 167.378 2260.39 154.217L2260.38 153.456L2286.16 145.947L2286.25 147.183C2287.77 168.673 2283.1 187.197 2272.71 201.898C2262.31 216.598 2246.26 227.39 2225.17 233.53C2198.8 241.207 2174.22 237.214 2153.88 223.142C2133.56 209.087 2117.55 185.039 2108.15 152.747C2098.83 120.733 2099.53 91.858 2109.17 69.0436C2118.82 46.2049 2137.38 29.5321 2163.55 21.9107Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
+'<path d="M1874.29 173.943C1873.14 143.761 1882.83 118.735 1901.34 100.94C1919.83 83.1569 1947.03 72.6866 1980.73 71.4019C2014.44 70.1172 2042.32 78.4884 2062.08 94.8137C2081.85 111.15 2093.38 135.366 2094.53 165.548C2095.68 195.729 2086.03 220.753 2067.55 238.547C2049.1 256.329 2021.93 266.799 1988.23 268.083C1954.53 269.368 1926.61 260.999 1906.82 244.675C1887.01 228.341 1875.44 204.125 1874.29 173.943ZM1900.58 172.941C1901.4 194.257 1910.14 211.224 1925.06 222.635C1940 234.064 1961.23 239.992 1987.12 239.005C2012.94 238.021 2033.63 230.495 2047.64 217.963C2061.63 205.449 2069.05 187.866 2068.24 166.55C2067.42 145.234 2058.68 128.267 2043.78 116.855C2028.86 105.425 2007.66 99.4962 1981.84 100.48C1955.95 101.467 1935.23 108.995 1921.2 121.527C1907.19 134.042 1899.77 151.624 1900.58 172.941Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
+'<path d="M1850.35 94.3919L1827.36 280.624L1928.54 293.118L1925.39 318.654L1796.05 302.685L1822.2 90.9158L1850.35 94.3919Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
+'<path d="M1716.91 12.4545C1735.18 11.8152 1750.77 16.6025 1761.95 25.6336C1773.14 34.6753 1779.84 47.9139 1780.4 64C1781.15 85.5894 1766.62 106.369 1746.98 111.851C1760.59 113.553 1771.99 119.059 1780.24 127.514C1788.94 136.443 1794.06 148.602 1794.56 162.882C1795.22 181.731 1788.98 197.089 1776.81 207.916C1764.66 218.721 1746.7 224.919 1724.08 225.711L1643.3 228.538L1635.83 15.2919L1716.91 12.4545ZM1670.76 202.271L1719.24 200.574C1735.02 200.022 1746.77 196.405 1754.45 190.041C1762.09 183.713 1765.85 174.557 1765.43 162.582C1765.01 150.622 1760.49 141.873 1752.06 136.213C1743.57 130.513 1730.97 127.852 1714.23 128.438L1668.24 130.047L1670.76 202.271ZM1667.37 105.357L1705.9 104.009C1721.38 103.467 1733.07 99.9616 1740.77 93.8945C1748.43 87.8645 1752.25 79.2166 1751.86 68.0767C1751.51 57.856 1747.74 50.1606 1741.04 45.1023C1734.31 40.0188 1724.47 37.4965 1711.79 37.9401L1665.07 39.5753L1667.37 105.357Z" fill="currentColor" stroke="currentColor" stroke-width="2"/>'
+'<circle cx="1984.51" cy="169.847" r="27" fill="currentColor"/></svg>';

  var SVG3='<svg class="acb-logo" viewBox="0 0 1256 796" xmlns="http://www.w3.org/2000/svg" style="height:100%;width:auto;display:block;overflow:visible;visibility:hidden">'
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

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;
  var SPRING=0.032, FRICTION=0.94, WALL_E=0.32, COLL_E=0.32, GRAV=1.0;
  var ROT_K=0.24, ROT_SPRING=0.028, ROT_FRIC=0.91, ROT_IMP=0.04;
  var MAXV=20, POKE_R=85, POKE=4.5;

  function animate(svg){
    var vb=svg.viewBox.baseVal, VBW=(vb&&vb.width)||1000, VBH=(vb&&vb.height)||300;
    var paths=[].slice.call(svg.querySelectorAll('path')), dotEl=svg.querySelector('circle');
    if(paths.length<5 || !dotEl){ svg.style.visibility='visible'; return; }
    var dcx=+dotEl.getAttribute('cx'), dcy=+dotEl.getAttribute('cy'), dr=+dotEl.getAttribute('r');
    var info=paths.map(function(p){ var b=p.getBBox(); return {el:p,cx:b.x+b.width/2,cy:b.y+b.height/2,w:b.width,h:b.height,x:b.x,y:b.y}; });
    // group letters into their lines by vertical centre, then take BLOCK from the dot's line
    var byY=info.slice().sort(function(a,b){return a.cy-b.cy;});
    var avgH=info.reduce(function(s,m){return s+m.h;},0)/info.length, lineGap=avgH*0.6;
    var lines=[], cur=[byY[0]];
    for(var k=1;k<byY.length;k++){ if(byY[k].cy-byY[k-1].cy>lineGap){ lines.push(cur); cur=[byY[k]]; } else cur.push(byY[k]); }
    lines.push(cur);
    var dotLine=lines[0], bestd=1e9;
    lines.forEach(function(ln){ var cy=0; ln.forEach(function(m){cy+=m.cy;}); cy/=ln.length; var d=Math.abs(cy-dcy); if(d<bestd){bestd=d;dotLine=ln;} });
    var blk=dotLine.slice().sort(function(a,b){return Math.hypot(a.cx-dcx,a.cy-dcy)-Math.hypot(b.cx-dcx,b.cy-dcy);}).slice(0,5);
    var blocks=[], minX=1e9,maxX=-1e9,minY=1e9,maxY=-1e9;
    blk.forEach(function(m){
      blocks.push({el:m.el,cx0:m.cx,cy0:m.cy,w:m.w,h:m.h,r:Math.max(14,0.42*Math.min(m.w,m.h)),ox:0,oy:0,vx:0,vy:0,rot:0,va:0});
      if(m.x<minX)minX=m.x; if(m.x+m.w>maxX)maxX=m.x+m.w; if(m.y<minY)minY=m.y; if(m.y+m.h>maxY)maxY=m.y+m.h;
    });
    var O=null; blocks.forEach(function(bd){ if(Math.abs(dcx-bd.cx0)<bd.w/2 && Math.abs(dcy-bd.cy0)<bd.h/2) O=bd; });
    var dot={C0x:(O?O.cx0:dcx),C0y:(O?O.cy0:dcy),R:Math.max(6,(O?0.30*Math.min(O.w,O.h):40)-dr),px:dcx-(O?O.cx0:dcx),py:dcy-(O?O.cy0:dcy),vx:0,vy:0};
    var bandH=maxY-minY, pad=Math.max(50,bandH*0.55);
    // ceiling = bottom of the line directly above BLOCK (e.g. CREATIVE) so BLOCK can't pass through it
    var ceil=-1e9;
    info.forEach(function(m){ if(blk.indexOf(m)<0 && m.cy<minY){ if(m.y+m.h>ceil) ceil=m.y+m.h; } });
    var wall={l:minX-14,r:maxX+14,t:(ceil>-1e9?ceil:minY-pad),b:maxY+pad*0.85};
    if(reduce){ svg.style.visibility='visible'; return; }
    blocks.forEach(function(bd,i){
      bd.oy=(wall.t-(bd.cy0-bd.h/2))-Math.random()*8;
      bd.ox=(Math.random()-0.5)*Math.min(30,bandH*0.12);
      bd.vy=Math.max(3,pad*0.06);
      bd.el.setAttribute('transform','translate('+bd.ox+' '+bd.oy+')');
    });
    svg.style.visibility='visible';
    var gravityUntil=performance.now()+1400, crashUntil=0, lastY=window.pageYOffset;
    window.addEventListener('scroll',function(){
      var y=window.pageYOffset,d=y-lastY; lastY=y; var s=Math.min(Math.abs(d)*0.45,9); if(s<0.6)return;
      var now=performance.now(); gravityUntil=now+900; crashUntil=now+900; // strong gravity + weak spring = crash DOWN
      blocks.forEach(function(bd){ bd.vx+=(Math.random()-0.5)*s*0.7; bd.vy+=(Math.random()-0.5)*s*0.25; bd.va+=(Math.random()-0.5)*s*0.22; });
      dot.vx+=(Math.random()-0.5)*s*0.5; dot.vy+=(Math.random()-0.5)*s*0.3;
    },{passive:true});
    svg.addEventListener('pointermove',function(e){
      var rect=svg.getBoundingClientRect(), mx=(e.clientX-rect.left)/rect.width*VBW, my=(e.clientY-rect.top)/rect.height*VBH;
      blocks.forEach(function(bd){ var dx=(bd.cx0+bd.ox)-mx,dy=(bd.cy0+bd.oy)-my,dist=Math.hypot(dx,dy)||0.001,reach=bd.r+POKE_R;
        if(dist<reach){ var f=(1-dist/reach)*POKE; bd.vx+=(dx/dist)*f; bd.vy+=(dy/dist)*f; bd.va+=(Math.random()-0.5)*f*1.6; } }); // radial explosion; spring reassembles
      var Ox=(O?O.cx0+O.ox:dot.C0x),Oy=(O?O.cy0+O.oy:dot.C0y),ex=(Ox+dot.px)-mx,ey=(Oy+dot.py)-my,ed=Math.hypot(ex,ey)||0.001,er=dot.R+POKE_R;
      if(ed<er){ var g=(1-ed/er)*POKE; dot.vx+=(ex/ed)*g; dot.vy+=(ey/ed)*g; }
    },{passive:true});
    svg.addEventListener('pointerleave',function(){ crashUntil=0; gravityUntil=0; },{passive:true}); // leave -> spring straight home
    function collide(a,b){ var dx=(b.cx0+b.ox)-(a.cx0+a.ox),dy=(b.cy0+b.oy)-(a.cy0+a.oy),dist=Math.hypot(dx,dy)||0.001,min=a.r+b.r;
      if(dist<min){ var nx=dx/dist,ny=dy/dist,ov=(min-dist); a.ox-=nx*ov/2; a.oy-=ny*ov/2; b.ox+=nx*ov/2; b.oy+=ny*ov/2;
        var avn=a.vx*nx+a.vy*ny,bvn=b.vx*nx+b.vy*ny,m=(avn-bvn)*COLL_E; if(avn-bvn>0){ a.vx-=nx*m; a.vy-=ny*m; b.vx+=nx*m; b.vy+=ny*m; }
        var tx=-ny,ty=nx,vt=(a.vx-b.vx)*tx+(a.vy-b.vy)*ty; a.va+=vt*ROT_IMP; b.va-=vt*ROT_IMP; } }
    function frame(now){ var gOn=now<gravityUntil, crash=now<crashUntil;
      blocks.forEach(function(bd){
        var sp=crash?SPRING*0.16:SPRING, dp=crash?FRICTION:0.87;  // firmer damping on return = clean reassemble
        bd.vx+=-sp*bd.ox; bd.vy+=-sp*bd.oy+(gOn?(crash?GRAV:0.28):0); bd.vx*=dp; bd.vy*=dp;
        if(bd.vx>MAXV)bd.vx=MAXV; else if(bd.vx<-MAXV)bd.vx=-MAXV; if(bd.vy>MAXV)bd.vy=MAXV; else if(bd.vy<-MAXV)bd.vy=-MAXV;
        bd.ox+=bd.vx; bd.oy+=bd.vy; var cx=bd.cx0+bd.ox,cy=bd.cy0+bd.oy;
        if(cx-bd.r<wall.l){ bd.ox+=(wall.l-(cx-bd.r)); bd.vx=-bd.vx*WALL_E; }
        if(cx+bd.r>wall.r){ bd.ox-=((cx+bd.r)-wall.r); bd.vx=-bd.vx*WALL_E; }
        if(cy-bd.r<wall.t){ bd.oy+=(wall.t-(cy-bd.r)); bd.vy=-bd.vy*WALL_E; }
        if(cy+bd.r>wall.b){ bd.oy-=((cy+bd.r)-wall.b); bd.vy=-bd.vy*WALL_E; }
        bd.va+=bd.vx*ROT_K*0.03; bd.va+=-ROT_SPRING*bd.rot; bd.va*=(crash?ROT_FRIC:0.84); bd.rot+=bd.va;
        if(bd.rot>32)bd.rot=32; else if(bd.rot<-32)bd.rot=-32;
      });
      for(var i=0;i<blocks.length;i++) for(var j=i+1;j<blocks.length;j++) collide(blocks[i],blocks[j]);
      blocks.forEach(function(bd){ bd.el.setAttribute('transform','translate('+bd.ox.toFixed(2)+' '+bd.oy.toFixed(2)+') rotate('+bd.rot.toFixed(2)+' '+bd.cx0+' '+bd.cy0+')'); });
      dot.vx+=-0.02*dot.px; dot.vy+=-0.02*dot.py+(crash?GRAV*0.7:0); dot.vx*=FRICTION; dot.vy*=FRICTION;
      var dm=MAXV*0.9; if(dot.vx>dm)dot.vx=dm; else if(dot.vx<-dm)dot.vx=-dm; if(dot.vy>dm)dot.vy=dm; else if(dot.vy<-dm)dot.vy=-dm;
      dot.px+=dot.vx; dot.py+=dot.vy; var pd=Math.hypot(dot.px,dot.py);
      if(pd>dot.R){ var nx=dot.px/pd,ny=dot.py/pd; dot.px=nx*dot.R; dot.py=ny*dot.R; var vn=dot.vx*nx+dot.vy*ny; dot.vx-=(1+WALL_E)*vn*nx; dot.vy-=(1+WALL_E)*vn*ny; }
      var Oox=O?O.ox:0,Ooy=O?O.oy:0; dotEl.setAttribute('transform','translate('+((dot.C0x+Oox+dot.px)-dcx).toFixed(2)+' '+((dot.C0y+Ooy+dot.py)-dcy).toFixed(2)+')');
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  /* ---- EYE MODE: the O blinks (an eyelid sweeps down), the dot is a pupil that follows the cursor ---- */
  function animateEye(svg){
    var NS='http://www.w3.org/2000/svg';
    var vb=svg.viewBox.baseVal, VBW=(vb&&vb.width)||1000, VBH=(vb&&vb.height)||300;
    var paths=[].slice.call(svg.querySelectorAll('path')), dotEl=svg.querySelector('circle');
    svg.style.visibility='visible';
    if(!dotEl) return;
    var dcx=+dotEl.getAttribute('cx'), dcy=+dotEl.getAttribute('cy'), dr=+dotEl.getAttribute('r');
    // the O = smallest letter whose bbox contains the dot's centre
    var O=null; paths.forEach(function(p){ var b=p.getBBox();
      if(dcx>=b.x&&dcx<=b.x+b.width&&dcy>=b.y&&dcy<=b.y+b.height){ if(!O || b.width*b.height<O.w*O.h) O={el:p,w:b.width,h:b.height,cx:b.x+b.width/2,cy:b.y+b.height/2}; } });
    if(!O) return;
    var holeR=0.4*Math.min(O.w,O.h);                   // the eye opening
    var R=Math.max(4,(holeR-dr)*0.55);                 // pupil travel — kept well inside the O, subtle
    // eyelid: a rect the logo colour, clipped to the eye opening, that drops from above
    var uid='acbEye'+Math.floor(Math.random()*1e9);
    var cp=document.createElementNS(NS,'clipPath'); cp.setAttribute('id',uid);
    var cc=document.createElementNS(NS,'circle'); cc.setAttribute('cx',O.cx); cc.setAttribute('cy',O.cy); cc.setAttribute('r',holeR); cp.appendChild(cc);
    var lid=document.createElementNS(NS,'rect');
    lid.setAttribute('x',O.cx-holeR); lid.setAttribute('y',O.cy-holeR-1);
    lid.setAttribute('width',holeR*2); lid.setAttribute('height',holeR*2+2);
    lid.setAttribute('fill','currentColor'); lid.setAttribute('clip-path','url(#'+uid+')');
    svg.appendChild(cp); svg.appendChild(lid);
    var openY=-(holeR*2+2);                              // fully retracted (eye open)
    lid.setAttribute('transform','translate(0 '+openY+')');
    var fx=0,fy=0,tx=0,ty=0;
    window.addEventListener('pointermove',function(e){
      var rect=svg.getBoundingClientRect(); if(!rect.width) return;
      var mx=(e.clientX-rect.left)/rect.width*VBW, my=(e.clientY-rect.top)/rect.height*VBH;
      var dx=mx-O.cx, dy=my-O.cy, d=Math.hypot(dx,dy)||0.001, m=R*Math.tanh(d/(O.w*1.6)); // stays near centre unless cursor is far
      tx=dx/d*m; ty=dy/d*m;
    },{passive:true});
    var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches;
    var nextBlink=performance.now()+1200+Math.random()*2600, blinkStart=-1, DUR=170;
    function frame(now){
      fx+=(tx-fx)*0.18; fy+=(ty-fy)*0.18;
      dotEl.setAttribute('transform','translate('+fx.toFixed(2)+' '+fy.toFixed(2)+')');
      var ly=openY;
      if(!reduce){
        if(blinkStart<0 && now>=nextBlink) blinkStart=now;
        if(blinkStart>=0){ var p=(now-blinkStart)/DUR; if(p>=1){ blinkStart=-1; nextBlink=now+1600+Math.random()*3600; } else { ly=openY*(1-Math.sin(p*Math.PI)); } }
      }
      lid.setAttribute('transform','translate(0 '+ly.toFixed(2)+')');
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  function init(){
    [].slice.call(document.querySelectorAll('[data-acb-logo]')).forEach(function(m){
      if(m.querySelector('svg')) return;
      m.innerHTML = (m.getAttribute('data-acb-logo')==='3lines') ? SVG3 : SVG1;
      var svg=m.querySelector('svg'); if(!svg) return;
      var mode=m.getAttribute('data-acb-mode');
      requestAnimationFrame(function(){ if(mode==='eye') animateEye(svg); else animate(svg); });
    });
  }
  if(document.readyState!=='loading') init(); else document.addEventListener('DOMContentLoaded', init);
})();
