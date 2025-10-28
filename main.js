const mapElement = document.getElementById("mapa-principal");

// ID de un mapa público de prueba
const mapaID = "237b9584339446a0b56317b5962a4971";

mapElement.setAttribute("item-id", mapaID);

mapElement.addEventListener("arcgisViewReadyChange", () => {
  console.log("✅ Mapa cargado correctamente con ID:", mapaID);
});
