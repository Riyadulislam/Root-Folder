let idcount=1;
let idd=2;
document.getElementById('button-1').addEventListener('click',function(){
    const ul=document.getElementById('list')
    const li=document.createElement('li');
    li.innerHTML=`
    <div class="border border-1" style="width:25%" id="all${idcount}" >
    <div class="picture" id='id${idcount}'>
    <input id="folder" type="text">
    <button id="folderadded" onclick="createfolder('id${idcount}','sub${idcount}${idd}')"><i class="fa-solid fa-check"></i></button>
    <button onclick="deletefolder('id${idcount}')"><i class="fa-sharp fa-solid fa-circle-xmark"></i></button>
    </div>
    </div> 
    `
    li.setAttribute( "id", 'sub'+idcount+idd);
      ul.appendChild(li);
      idcount++; 
})
function createfolder(id,id2){
   
    const x=document.getElementById('folder')
    document.getElementById(id).innerHTML=`<i class="fa-regular fa-folder-open"></i> ${x.value}
     <i class="fa-solid fa-circle-plus"  onclick="subtreeadd('id${idcount}','${id2}')"></i>
    <i class="fa-solid fa-trash" onclick="deleteallfolder(event)"></i>`;  
 } 

 function subtreeadd(sub,sub2){
   console.log('${sub}',sub2)
 const pul = document.getElementById(sub2)
 const ul=document.createElement('ul')
 const li=document.createElement('li');
 li.innerHTML=` 
 <div  id='id${idd}'>
 <input id="child"  class="mt-3"  type="text">
 <button onclick="subadd('id${idd}')"><i class="fa-solid fa-check" onclick="subfolderadd()"></i></button>
 <button onclick="subtext('id${idd}')"><i class="fa-sharp fa-solid fa-circle-xmark"></i></button>
 </div>
`
ul.appendChild(li)
pul.appendChild(ul)
idd++;
 }
 function subadd(sadd){
    console.log(sadd)
    var subadd=document.getElementById('child')
    document.getElementById(sadd).innerHTML=subadd.value=`${subadd.value} <i class="fa-solid fa-circle-plus"></i> <i onclick="subdelete(idd)" class="fa-solid fa-trash"></i>`;
   
 }
 function subtext(element){
    const s=document.getElementById('child')
    s.value="";
    // console.log(i)
 }
 function subdelete(){
   const f= idd-1;
   const newid= 'id'+ f.toString()
   console.log(newid)
   const cdelete=document.getElementById(newid)
   cdelete.innerHTML=""; 
   idd--;
 }
function deleteallfolder(event){
   console.log(event.target.parentNode.parentNode)
   event.target.parentNode.parentNode.innerHTML=" ";
   //  const q=document.getElementById(alllist)
   //   document.getElementById(alllist).innerHTML=q.value=" ";
}
 function deletefolder(d){
   console.log(d)
    const z=document.getElementById('folder')
    document.getElementById(d).innerHTML=z.value="";

    
 } 