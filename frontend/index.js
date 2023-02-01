import axios from "axios"

let map;

const getRouteData = async () =>  { 
    
}

async function initMap() {
    
    const directionService = new google.maps.DirectionsService()
    const rota = await directionService.route({
        origin: "Senai Jandira - Sp, Brasil",
        destination: "Rua sao pedro Osasco Sp, Brasil",
        travelMode: google.maps.TravelMode.DRIVING
    })
    // handler direction (bind)
    const directionsRenderer = new google.maps.DirectionsRenderer({
        draggable: true
    })
    
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });


    directionsRenderer.setMap(map)

    directionsRenderer.setDirections(rota)
}



window.initMap = initMap;