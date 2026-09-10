(function(){
  var c=document.querySelector('canvas.grain');
  if(!c){c=document.createElement('canvas');c.className='grain';c.setAttribute('aria-hidden','true');document.body.appendChild(c)}
  var x=c.getContext('2d'),S=1.5,W=0,H=0,last=0;
  function resize(){W=c.width=Math.max(1,Math.ceil(innerWidth/S));H=c.height=Math.max(1,Math.ceil(innerHeight/S))}
  function clearMedia(){document.querySelectorAll('img,picture,video,[data-grain-exclude]').forEach(function(el){var r=el.getBoundingClientRect();if(r.bottom<=0||r.right<=0||r.top>=innerHeight||r.left>=innerWidth)return;x.clearRect(Math.floor(r.left/S)-1,Math.floor(r.top/S)-1,Math.ceil(r.width/S)+2,Math.ceil(r.height/S)+2)})}
  function frame(t){
    if(t-last>60){
      var img=x.createImageData(W,H),d=img.data;
      for(var i=0;i<d.length;i+=4){var v=(Math.random()*255)|0;d[i]=d[i+1]=d[i+2]=v;d[i+3]=(Math.random()*48)|0}
      x.putImageData(img,0,0);clearMedia();last=t;
    }
    requestAnimationFrame(frame);
  }
  resize();addEventListener('resize',resize,{passive:true});requestAnimationFrame(frame);
})();
