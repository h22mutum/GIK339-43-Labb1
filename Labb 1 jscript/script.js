// Vänta tills hela DOM har laddats innan koden körs
document.addEventListener("DOMContentLoaded", function () {
  // Här hämtar vi referenser till HTML-elementen med hjälp av getElementById, querySelector och querySelectorAll
  const checkbox = document.getElementById("divStyle"); // Hämta checkbox-elementet
  const tomDiv = document.getElementById("tomDiv"); // Hämta Tom div-elementet
  const colorInput = document.getElementById("color"); // Hämta färg-input-elementet
  const deleteButton = document.querySelector("button"); // Hämta delete-knappen med querySelector
  const contentInput = document.getElementById("content"); // Hämta innehåll-input-elementet
  const textfieldElements = document.querySelectorAll(".textfield"); // Hämta alla element med klassen "textfield"
  const divElement = document.getElementById("tomDiv"); // Hämta Tom div-elementet

  // En eventlistener för ändringar i checkboxen
  checkbox.addEventListener("change", handleInput);

  // En eventlistener för klick på delete-knappen
  deleteButton.addEventListener("click", function () {
    // Dölj Tom div när delete-knappen klickas på
    tomDiv.style.display = "none";
  });

  // En eventlistener för inmatning i innehåll-input-fältet
  contentInput.addEventListener("input", handleInput);

  // En eventlistener för blur-händelse på alla element med klassen "textfield"
  textfieldElements.forEach(function (field) {
    field.addEventListener("blur", handleInput);
  });

  // Funktion för att uppdatera stilen på Tom div baserat på checkboxens status och innehåll-input
  function handleInput(event) {
    const e = event;

    console.log("triggas", e.target);

    const FNs = e.target.name;

    if (FNs === "content" || e.type === "input") {
      // Uppdatera innehållet i Tom div baserat på innehåll-input
      divElement.innerHTML = contentInput.value;
    }

    if (checkbox.checked) {
      // Om checkboxen är markerad, hämta färgen från färg-input-fältet och tillämpa på Tom div
      const color = colorInput.value.trim();
      tomDiv.style.backgroundColor = color;
    } else {
      // Om checkboxen inte är markerad, återställ Tom divs bakgrundsfärg
      tomDiv.style.backgroundColor = "";
    }
  }
});
