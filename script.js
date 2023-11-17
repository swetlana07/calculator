
function Zap(){
  let i=document.getElementById('in').textContent;
  if(i =='0') return '';
  return i;
}
 
function Expr(str){
     let ex=[];
     let cur='';
    
     for(let i=0;i<str.length;++i){
          if(isNaN(str[i]) & !(str[i]=='.')){//operator
              ex.push(Number(cur));
              ex.push(str[i]);
              cur='';
          }else{//dig
             cur+=str[i];
          }
     }
     ex.push(Number(cur));

     let  i=0;
     while(i<ex.length){
         if(ex[i]=='*'){
          ex[i-1]=ex[i-1]*ex[i+1];
          ex.splice(i,2);
          --i;
         }
         if(ex[i]=='/'){
          ex[i-1]=ex[i-1]/ex[i+1];
          ex.splice(i,2);
          --i;
         }
         ++i;
     }
     i=0;
     console.log(ex);
     while(i<ex.length){
          if(ex[i]=='+'){
           ex[i-1]=ex[i-1]+ex[i+1];
           ex.splice(i,2);
           --i;
          }
          if(ex[i]=='-'){
           ex[i-1]=ex[i-1]-ex[i+1];
           ex.splice(i,2);
           --i;
          }
          ++i;
     }
     console.log(ex);    // alert(ex[0]);
     return ex[0];
}

eq.onclick = function Rez(){     // res=document.getElementById('in').innerHTML=eval(Zap());//alert(str);
      let str=Zap();
      if(isNaN(str.at(-1))){str.slice(0,-1);}
      console.log(str);
      res=document.getElementById('in').innerHTML=Expr(str);
      is_pt=false;
}


let pref='c';

for(let i=0;i<10;++i){
     let s=pref+String(i);
     let obj=document.getElementById(s);
     obj.onclick=function(){
          let sum=Zap()+i;
          document.getElementById('in').innerHTML=sum;
     }
}
let is_pt=false;
ptt.onclick = function(){
  let s=Zap();
  if( !isNaN(s.slice(-1)) & (s.length>0)  & !is_pt){
    document.getElementById('in').innerHTML=s+'.';
    is_pt=true;
  }
}

bsp.onclick = function(){
    let s=Zap();
    if(s.length>0) {
      if(s.slice(-1)=='.'){is_pt=false;}
      s=s.slice(0,-1);
      if(s.length==0){s=0;}
      document.getElementById('in').innerHTML=s;
    }
}

clr.onclick = function(){
     document.getElementById('in').innerHTML=0;
     is_pt=false;
 }

 cs.onclick = function(){
     let s=Zap();
     if( !isNaN(s.slice(-1)) & (s.length>0) ){
       document.getElementById('in').innerHTML=s+'+';
       is_pt=false;
     }
 }
 cr.onclick = function(){
     let s=Zap();
     if( !isNaN(s.slice(-1)) & (s.length>0) ){
       document.getElementById('in').innerHTML=s+'-';
       is_pt=false;
     }else if(s.length==0)
       document.getElementById('in').innerHTML='-';
      
 }
 cd.onclick = function(){
     let s=Zap();
     if( !isNaN(s.slice(-1)) & (s.length>0) ){
       document.getElementById('in').innerHTML=s+'/';
       is_pt=false;
     }
 }
 cm.onclick = function(){
     let s=Zap();
     if( !isNaN(s.slice(-1)) & (s.length>0) ){
       document.getElementById('in').innerHTML=s+'*';
       is_pt=false;
     }
 }

