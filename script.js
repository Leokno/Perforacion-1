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

  const perdidaDePresionBroca = (156 * Densidad * (ROP * ROP)) / areaBoquillas;

  document.getElementById("resultado3").innerHTML =
    "la perdida de presion en la broca es: " +
    perdidaDePresionBroca.toFixed(3) +
    " psi.";
}
