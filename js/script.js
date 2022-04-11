
const formBtn = document.getElementById("generate");
const formSelect = document.getElementById("age");

generate.addEventListener("click",
    function() {
        const name = document.getElementById("name").value;
        console.log(name);

        const userKm = parseInt(document.getElementById("km"));
        console.log("km");

        const userAge = parseInt(document.getElementById("age"));
        console.log("age");
        
        let price = 0.21;

        let cost;

        cost = price * userKm;

        if ('Minorenne') {
            cost = cost - (cost * 20 / 100);

        }   else if ('Maggiorenne' >=65) {
            cost = cost - (cost * 40 / 100);

        }   else {
            cost = price * userKm;
        }
       
        const dettagli = document.querySelector(".dettagli")
        console.log(dettagli)
        dettagli.classList.remove("d-none");
    
        const ticketNameResponse = document.querySelector (".nome-passeggero");
        ticketNameResponse.innerHTML = `${name}`;
    
        let ticketClassResponse = document.querySelector (".offerta")
        ticketClassResponse.innerHTML = `${offerta}`
        document.getElementById('price').innerHTML = cost;
    }
);