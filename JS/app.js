const artApi = () =>{
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200){
            console.log (request.responseType);
        } else if (request.readyState === 4){
            console,log("Can't fetch!!!")
        }
    });

    request.open ("GET","https://api.artic.edu/api/v1/artworks" );
    request.send ();
}