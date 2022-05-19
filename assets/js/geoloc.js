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





//Position.coords.latitude & longitude = Objet qui renvoi les coordonnées de géolocalisation
function success(position){
    
    latSpan.innerHTML = position.coords.latitude;
    lonSpan.innerHTML = position.coords.longitude;
     
    }



function error() {
    alert("Sorry,nopositionavailable.");
}

navigator.geolocation.getCurrentPosition(success,error);

