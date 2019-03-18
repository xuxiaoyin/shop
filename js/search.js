
window.onload=function(){	
	var oSearch=document.getElementById('search');
	var oSpan=document.getElementById('selectsd_s');
	var oDiv=oSearch.getElementsByTagName('div')[0];
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	oDiv.onmouseover=function(){
		oUl.style.display='block';
		
		}
		
	oDiv.onmouseout=function(){
		oUl.style.display='none';
		
		}

		for(i=0;i<aLi.length;i++){
			aLi[i].onclick=function(){
				oSpan.innerHTML=this.innerHTML;
				oUl.style.display='none';
				}
			}
			
	
	var oCode=document.getElementById('code');
	var oCodes=oCode.getElementsByTagName('span')[0];
	
	oCode.onmouseover=function(){
		oCodes.style.display='block';
		}
	oCode.onmouseout=function(){
		oCodes.style.display='none';
		}
	
	}
