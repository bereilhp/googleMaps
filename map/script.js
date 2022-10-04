function iniciarMap(){
    var coord = {lat:40.4165,lng: -3.70256};
    var coordRetiro = {lat:40.41317 ,lng: -3.68307}
    
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });

    var madrid = new google.maps.Marker({
      position: coord,
      map: map
    });

    var retiro = new google.maps.Marker({
      position: coordRetiro,
      map: map 
    });
}