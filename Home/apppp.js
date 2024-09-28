let mapOptions = {
    center: [51.5073219, -0.1276474],
    zoom: 15
}

let map = new L.map('map', mapOptions);
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);

let apikey = "9098219d1899456be55415be86df062";

const addressSearchControl = L.control.addressSearch(apikey, {

});

map.addControl(addressSearchControl);

