function kivalaszt(){
    db=1
    document.getElementById("talalat").innerHTML=""
    let szoveg=document.getElementById("bekertszoveg").value
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd25cebcd8amsh85fa0fae9315129p19c69bjsn1270fe61bcd8',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };
    
    fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${szoveg}`, options)
        .then(response => response.json())
        .then(response => kiir(response))
        .catch(err => console.error(err));
    
}
let db=1

function kiir(response){
    console.log(response)
    if(response.d.length==0){
        document.getElementById("talalat").innerHTML="Nincs adat!"
    }
    else{
        for (const elem of response.d) {
            //console.log(elem.l,elem.y)
            let div=document.createElement("div")
            document.getElementById("talalat").appendChild(div)
            div.style.border="1px solid lightblue"
            let img=document.createElement("img")
            div.appendChild(img)
            img.src=elem.i.imageUrl
            img.style.width="250px"
            let p1=document.createElement("p")
            div.appendChild(p1)
            p1.style.fontVariant="small-caps;"
            p1.innerHTML=`${db}. találat: ${elem.l}`
            let p2=document.createElement("p")
            div.appendChild(p2)
            p2.style.color="red"
            p2.innerHTML=elem.s
            let p3=document.createElement("p")
            div.appendChild(p3)
            p3.style.fontStyle="italic"
            p3.innerHTML=`Értékelés: ${elem.rank}`
            let p4=document.createElement("p")
            div.appendChild(p4)
            if (typeof elem.y === "undefined") {
                p4.innerHTML="Nincs adat!"
            }
            else{
                p4.innerHTML=`Év: ${elem.y}`
            }
            p4.style.borderTop="2px dotted pink"
            
            db++
            div.style.textAlign="center"
            div.style.marginBottom="15px"
            div.style.padding="15px"
            
        }
    }
    

}