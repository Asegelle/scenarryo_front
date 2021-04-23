
























/* ------------------------------------------------------------------------------------------------
------------------------------------------- contact page ------------------------------------------
--------------------------------------------------------------------------------------------------- */


/**************************** Début Style Partie GPS  ***********************************/

/******************************** Code Map API OSM  ***************************************/
// On initialise la latitude et la longitude de Ib Cegos (centre de la carte)

var latFirstPlace = 47.22743110397898;
var lonFirstPlace = -1.6178746585579586;
var latSecondPlace = 47.22274169140698;
var lonSecondPlace = -1.6282311043353408;
var myMap = null;
// Fonction d'initialisation de la carte
function initMap() {
    // Créer l'objet "myMap" et l'insèrer dans l'élément HTML qui a l'ID "map"
    myMap = L.map('js-map').setView([latFirstPlace, lonFirstPlace], 15);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(myMap);

    // ajouter les deux points 
    L.Routing.control({
    waypoints: [
        L.latLng(latFirstPlace, lonFirstPlace),
        L.latLng(latSecondPlace, lonSecondPlace)
    ],
    routeWhileDragging: true
}).addTo(myMap);
}

window.onload = function(){
// Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
initMap(); 
};
/**************************** Fin Style Partie GPS  ***********************************/


/**************************** Debur  Style Partie Captcha  ***********************************/

function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }

/**************************** Fin Style Partie Captcha  ***********************************/