L.mapquest.key = "mWushO0ZL22euhQrU2obCa1q875PFuxN";

// documentation: https://developer.mapquest.com/documentation/mapquest-js/v1.3/

const map = L.mapquest.map("map", {
  center: [53.480759, -2.242631],
  // 1. change 'map' to 'hybrid', try other type of map
  layers: L.mapquest.tileLayer("dark"),
  zoom: 12,
});

// 2. Add control
map.addControl(L.mapquest.control());

// 3. Add icon
// TODO: add your location info here
// TODO: add different colors, text  and icon

L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: "#22407F",
    secondaryColor: "#3B5998",
    shadow: true,
    size: "md",
    symbol: "M",
  }),
})
  .bindPopup("This is Manchester!")
  .addTo(map);
