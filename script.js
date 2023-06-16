function FactorDeFriccion() {
  const Densidad = parseFloat(document.getElementById("dendidadre").value);
  const velocidad = parseFloat(document.getElementById("velocidadre").value);
  const Diametro = parseFloat(document.getElementById("diametro").value);
  const viscosidad = parseFloat(document.getElementById("viscocidad").value);
  const Re = (928 * (Densidad * velocidad * Diametro)) / viscosidad;

  document.getElementById("resultado0").innerHTML =
    "El numero de reynolds es: " + Re.toFixed(3);
}

function FactorDeFriccion2() {
  const Densidad = parseFloat(document.getElementById("dendidadre").value);
  const velocidad = parseFloat(document.getElementById("velocidadre").value);
  const Diametro = parseFloat(document.getElementById("diametro").value);
  const viscosidad = parseFloat(document.getElementById("viscocidad").value);
  const Re = (928 * (Densidad * velocidad * Diametro)) / viscosidad;
  const FactorDeFriccion = 0.0791 / Math.pow(Re, 0.25);

  document.getElementById("resultado01").innerHTML =
    "El factor de friccion es : " + FactorDeFriccion.toFixed(3);
}

function CalcularPerdidaDePresion() {
  const Velocidad = parseFloat(document.getElementById("Velocidad").value);
  const ID = parseFloat(document.getElementById("IDTuberia").value);
  const Densidad = parseFloat(document.getElementById("Densidad").value);
  const Longitud = parseFloat(document.getElementById("Longitud").value);
  const Friccion = parseFloat(
    document.getElementById("FactorDeFriccion").value
  );

  const CalcularPerdidaDePresion =
    ((Friccion * (Velocidad * Velocidad) * Densidad) / (92.916 * ID)) *
    Longitud;

  document.getElementById("resultado").innerHTML =
    "la perdida de presion en el intervalo es:" +
    CalcularPerdidaDePresion.toFixed(3) +
    "psi";
}

function perdidaDePresionAnular() {
  const D1 = parseFloat(
    document.getElementById("DiametroexternoTuberiaPerforacion").value
  );
  const D2 = parseFloat(document.getElementById("DiametroInternoPoso").value);
  const Va = parseFloat(document.getElementById("VelocidadIntervalo").value);
  const fa = parseFloat(
    document.getElementById("FactorDeFriccionAnular").value
  );
  const P = parseFloat(document.getElementById("DensidadDelFluido2").value);
  const LM = parseFloat(document.getElementById("LongitudIntervalo").value);

  const perdidaDePresionAnular =
    ((fa * (Va * Va) * P) / (92.916 * (D2 - D1))) * LM;

  document.getElementById("resultado2").innerHTML =
    "La perdida de presion anular es: " +
    perdidaDePresionAnular.toFixed(3) +
    "  psi.";

  console.log(perdidaDePresionAnular);
}

function perdidaDePresionBroca() {
  const Densidad = parseFloat(document.getElementById("Densidad3").value);
  const ROP = parseFloat(document.getElementById("ROP").value);
  const areaBoquillas = parseFloat(
    document.getElementById("AreaBoquillas").value
  );

  const perdidaDePresionBroca =
    (156 * Densidad * (ROP * ROP)) / (areaBoquillas * areaBoquillas);

  document.getElementById("resultado3").innerHTML =
    "la perdida de presion en la broca es: " +
    perdidaDePresionBroca.toFixed(3) +
    " psi.";
}

function perdidaDePresionanularFL() {
  const viscocidad = parseFloat(document.getElementById("viscosidad1").value);
  const velocidad = parseFloat(document.getElementById("velocidad1").value);
  const D1 = parseFloat(document.getElementById("D1").value);
  const D2 = parseFloat(document.getElementById("D2").value);

  const perdidaDePresionanularFL =
    ((viscocidad * velocidad) / 1500) *
    (D1 * D1 + D2 * D2 - (D2 * D2 - D1 * D1) / Math.log(D1 / D2));

  document.getElementById("resultado4").innerHTML =
    "la perdida de presion en el intervalo es:" +
    perdidaDePresionanularFL.toFixed(3) +
    "psi";
}

function PerdidadDepresionFLT() {
  const viscocidad = parseFloat(document.getElementById("viscocidad6").value);
  const velocidad = parseFloat(document.getElementById("valocidad6").value);
  const diametro = parseFloat(document.getElementById("diametro7").value);

  const PerdidadDepresionFLT =
    (viscocidad * velocidad) / (1500 * (diametro * diametro));

  document.getElementById("resultado5").innerHTML =
    "la perdida de presion en la tuberia es: " +
    PerdidadDepresionFLT.toFixed(4) +
    "psi";
}
