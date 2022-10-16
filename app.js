


btn.onclick = () => {
    kolo.style.display = 'flex';
    
 
    gen.style.display = 'none';
    

    let userName= inp.value;
    let userSurname = inp2.value;

    
  
   
    

text.innerText = inp.value[0] + inp2.value[0];
   function ret(userName, userSurname){
    let objec = {
        name: userName[0].toUpperCase() + userSurname[0],
        color: '#' + (Math.floor(Math.random() * 16777215)).toString(16)
        

      

}
kolo.style.backgroundColor = objec.color;


return obj;

};
ret()






 










}
kolo.onclick = function(){
    kolo.style.borderRadius = '2px'
   
}
kolo.ondblclick = function(){
  kolo.style.backgroundColor = 'red'
  kolo.style.borderRadius = '50%'
}



alert('Щоб створитиа аватарку то 1 веди своє імя і прізвище і натисни gener')

   
