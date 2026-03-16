document.addEventListener("DOMContentLoaded", () => {
  const btnCalcular = document.getElementById("btnCalcular");
  const btnLimpiar = document.getElementById("btnLimpiar");
  btnCalcular.addEventListener("click", calcular);
  btnLimpiar.addEventListener("click", limpiar);
});

function calcular() {
  const edad = document.getElementById("edad").value;
  const presion = document.getElementById("presion").value;
  const colesterol = document.getElementById("colesterol").value;
  const fumador = document.getElementById("fumador").value;
  const textoResultado = document.getElementById("textoResultado");
  const resultadoDiv = document.getElementById("resultado"); // contenedor completo
  const recomendacionesUl = document.getElementById("recomendaciones");

  if (!edad || !presion || !colesterol || !fumador) {
    textoResultado.textContent = "⚠️ Por favor complete todos los campos.";
    resultadoDiv.style.backgroundColor = "gray";
    recomendacionesUl.innerHTML = "";
    return;
  }

  let puntos = 0;
  if (edad >= 35 && edad <= 44) puntos += 1;
  else if (edad >= 45) puntos += 2;

  if (presion >= 120) puntos += 1;
  if (presion >= 140) puntos += 3;

  if (colesterol >= 200) puntos += 1;
  if (colesterol >= 240) puntos += 3;

  if (fumador === "si") puntos += 3;

  let riesgo = "";
  let color = "";
  if (puntos <= 2) {
    riesgo = "Riesgo Bajo";
    color = "green";
    textoResultado.style.color = "white";
  } else if (puntos <= 5) {
    riesgo = "Riesgo Moderado";
    color = "yellow";
    textoResultado.style.color = "black";
  } else {
    riesgo = "Riesgo Alto";
    color = "red";
    textoResultado.style.color = "white";
  }
  textoResultado.textContent = `Nivel de riesgo: ${riesgo} (Puntos: ${puntos})`;
  resultadoDiv.style.backgroundColor = color;

  recomendacionesUl.innerHTML = "";
  const recomendaciones = [
    "Mantener una dieta balanceada y baja en grasas.",
    "Realizar actividad física al menos 30 minutos diarios.",
    "Consultar regularmente con un médico para chequeos preventivos."
  ];

  recomendaciones.forEach(rec => {
    const li = document.createElement("li");
    li.textContent = rec;
    recomendacionesUl.append(li);
  });
}

function limpiar() {
  document.getElementById("edad").value = "";
  document.getElementById("presion").value = "";
  document.getElementById("colesterol").value = "";
  document.getElementById("fumador").value = "";

  document.getElementById("textoResultado").textContent = "";
  document.getElementById("resultado").style.backgroundColor = "";
  document.getElementById("recomendaciones").innerHTML = "";
}