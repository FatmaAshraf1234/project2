let errorEl= document.getElementById("error");
let form= document.getElementById("form");
let textName= document.getElementById("textName");
let textPass= document.getElementById("textPass");

form.addEventListener('submit',function(event){
    let error=[];
    if(textName.value===''||textName==null){
        error.push(" where is the name")
    }
    if(textPass.value===''){
        error.push("  where is the password?")
    }
    if(error.length>0){
        event.preventDefault();
        errorEl.innerHTML=error.join('<br>')
    }
    
}
)
