const dataApi = fetch("http://localhost:3000/api/cameras")

dataApi.then(async (resData)=> {
    console.log(resData);

    const res = await resData.json();
    console.log(res);

    try{
        // Object 0 capture data API avec sa photo 
        const imgUrl = res[0].imageUrl;
        console.log(imgUrl);
        const title = res[0].name;
        console.log(title);
        const pri = res[0].price;
        console.log(pri);
        const ident = res[0]._id;
        console.log(ident);
        const descri = res[0].description
        console.log (describe)

        // Dom Objet affichage textes et photos

        const showtitle = document.querySelector(".title");
        showtitle.innerHTML = title;
        const showPri = document.querySelector("#price");
        showPri.innerHTML = pri;
        const showIdent = docuemnt.querySelector("#ident");
        showIdent.innerHTML = id;
        const showDescri = document.querySelector(".describe");
        showDescri.innerHTML = descri;


        const showimgUrl = `<img src="${imgUrl}">`;
        showimgUrl.insertAdjacentHTML = ("afterbegin", showimagUrl);

        // Création de la balise img dans le dom
        const img = docuement.createElement("img")
        console.log(img)

    } catch(err){
        console.log(err);
    }
})

.catch((err)=>{
    console.log(err);
});