   function changelang(lang)
   {

	lang = lang + "_";

	if (parent.location.href.lastIndexOf("#")+1 == parent.location.href.length ){
		len = parent.location.href.length -1;
		temp = parent.location.href.substring(parent.location.href.lastIndexOf("/")+1);
		docname =temp.substring(0, temp.length -1);

	}else{
		docname = parent.location.href.substring(parent.location.href.lastIndexOf("/")+1);
	}
	
	 if (docname == ""){
          docname = "en_index.html";
   }
	 
    dir = parent.location.href.substring(0, parent.location.href.lastIndexOf("/")+1);

		newloc =  dir + lang + docname.substring(docname.indexOf("_")+1);
		document.location.href = newloc;
   };





var menu=function(){
	var t=15,z=50,s=6,a;
	function dd(n){this.n=n; this.h=[]; this.c=[]}
	dd.prototype.init=function(p,c){
		a=c; var w=document.getElementById(p), s=w.getElementsByTagName('ul'), l=s.length, i=0;
		for(i;i<l;i++){
			var h=s[i].parentNode; this.h[i]=h; this.c[i]=s[i];
			h.onmouseover=new Function(this.n+'.st('+i+',true)');
			h.onmouseout=new Function(this.n+'.st('+i+')');
		}
	}
	dd.prototype.st=function(x,f){
		var c=this.c[x], h=this.h[x], p=h.getElementsByTagName('a')[0];
		clearInterval(c.t); c.style.overflow='hidden';
		if(f){
			p.className+=' '+a;
			if(!c.mh){c.style.display='block'; c.style.height=''; c.mh=c.offsetHeight; c.style.height=0}
			if(c.mh==c.offsetHeight){c.style.overflow='visible'}
			else{c.style.zIndex=2000+z; z++; c.t=setInterval(function(){sl(c,1)},t)}
		}else{p.className=p.className.replace(a,''); c.t=setInterval(function(){sl(c,-1)},t)}
	}
	function sl(c,f){
		var h=c.offsetHeight;
		if((h<=0&&f!=1)||(h>=c.mh&&f==1)){
			if(f==1){c.style.filter=''; c.style.opacity=1; c.style.overflow='visible'}
			clearInterval(c.t); return
		}
		var d=(f==1)?Math.ceil((c.mh-h)/s):Math.ceil(h/s), o=h/c.mh;
		
		//console.log(h);
		
		c.style.opacity=o;  
		c.style.filter='alpha(opacity='+(o*100)+')';
		c.style.opacity = (o);
		c.style.height=h+(d*f)+'px'
		
		
		/* start hardcode by ray (2015-04-23) */
		if (f==-1&&h<=12) {
			clearInterval(c.t);
			c.style.opacity = '0';
			c.style.filter='alpha(opacity='+(0)+')';
			return;
		}
		/* end hardcode by ray (2015-04-23) */
	}
	return{dd:dd}
}();

$(function() {
    var elems = $('.picture');
	
	elems.on('mouseenter mouseleave', function(e) {
	elems.not(this).stop(true).fadeTo('fast', e.type=='mouseenter'?0.5:1);});
	
    
});

$(function() {
    var elems = $('.sub_picture');
    elems.on('mouseenter mouseleave', function(e) {
        elems.not(this).stop(true).fadeTo('fast', e.type=='mouseenter'?0.5:1);
    });
});