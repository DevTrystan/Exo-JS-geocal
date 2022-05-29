// récupération du noeud DOM pour le bouton
const button = document.querySelector('#geoloc button');

// récupération des noueds DOM pour les latitude et longitude
const latSpan = document.querySelector('#lat');
const lonSpan = document.querySelector('#lon');





//geolocalisation = Objet qui stock l'information de la position
//navigator = Api du navigateur
// getCurrentPosition = methodes qui récupère l'emplacement de l'appareil
//geo_ok = function qui renvoi un objet de position ok
//geo_err = function qui renvoi un objet de Objet position error


    
       
function geo_ok(position) {
  
    latSpan.textContent = position.coords.latitude;
    lonSpan.textContent = position.coords.longitude;

   
    }
  

function geo_error() {
    alert("Sorry, no position available.");
}


button.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(geo_ok, geo_error);
    navigator.geolocation.watchPosition(
        geo_ok,
        (err)=> console.error(err.message)
    )
})




    
  
    




