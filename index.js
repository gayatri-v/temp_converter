let celsius = document.getElementById('cel');
let farhenite = document.getElementById('far');
celsius.addEventListener("input",function(){
     let c = this.value;
     let f = ((c*9)/5) +32;
     farhenite.value = f;
});
farhenite.addEventListener("input",function(){
    let f = this.value;
    let c = ((f-32)*5/9);
     celsius.value = c;
});