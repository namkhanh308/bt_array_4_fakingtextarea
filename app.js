let a= ["T","Ô","I"," ","L","À"," ","M","Ộ","T"," ","Đ","Ứ","A"," ","N","G","Ố","C","!","!"]
function dulieu(){
    let d = "";
    let text = document.getElementById("text").value;
    // console.log(text)
        if(text.length>0) {
            // console.log(text.length)
            console.log(text.length)
            for (let i = 0; i < text.length; i++) {
                d += a[i];
                if (d.length >= a.length) {
                    d = "";
                    break;
                }
            }
        }
    document.getElementById("text").value = d;
    setTimeout("dulieu()",1)
}

