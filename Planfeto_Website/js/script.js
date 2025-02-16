//const btnVerde = document.getElementById("#verde");
/*const btnAzul
const btnVermelho
const img1
const img2
const img3*/
//elements = document.getElementsByClassName("preview" );

/*btnVerde.addEventListener("click",() =>{
    document.preview.style.background-color= "green";
});*/
/*function green(){
    document.elements.styles.backgroundColor= "red";
}*/
function changeBackground(color){
    let elements = document.getElementsByClassName("preview" );

    for (let i = 0; i < elements.length; i++){
        elements.item(i).style.background = color;
    }
}

function changeImage(image){
    let elements = document.getElementsByClassName("preview");

    for (let i = 0; i < elements.length; i++){
        elements.item(i).style.backgroundImage = image;
    }
}