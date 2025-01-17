let map;

async function initMap() {
  const position = { lat: 37.9247105, lng: 32.5474503 };

  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 20,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title:
      "Our origins come from the Training & Development Center at 'Ebubekir for AI' Software Company. Officially registered in Turkiye @ 2019",
    gmpClickable: true,
  });

  const infoWindow = new InfoWindow();

  marker.addListener("click", ({ domEvent, latLng }) => {
    const { target } = domEvent;
    infoWindow.setContent(marker.title);
    infoWindow.open(marker.map, marker);
  });
}

initMap();
