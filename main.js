const mapElement = document.getElementById("mapa-principal");

// ID de un mapa público de prueba
const mapaID = "93781cd76c614bbf94760520930cf19c";

mapElement.setAttribute("item-id", mapaID);

mapElement.addEventListener("arcgisViewReadyChange", () => {
  console.log("✅ Mapa cargado correctamente con ID:", mapaID);
});

