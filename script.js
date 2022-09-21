function compute_weight(){
    const inputWeight = document.getElementById('InputWeight').value;
    console.log(inputWeight);
    const onMerc = inputWeight * 0.38;
    const onVenus = inputWeight * 0.91;
    const onMoon  = inputWeight * 0.166;
    const onMars = inputWeight * 0.38;
    const onJupiter = inputWeight * 2.34;
    const onSaturn = inputWeight * 1.06;
    const onSum = inputWeight * 27.01;
    const onUranus = inputWeight * 0.92;
    const onNeptune = inputWeight * 1.19;
    const onPluto = inputWeight * 0.06;
    document.getElementById('MercWeight').value = onMerc;
    document.getElementById('VenusWeight').value = onVenus;
    document.getElementById('MoonWeight').value = onMoon;
    document.getElementById('MarsWeight').value = onMars;
    document.getElementById('JupiterWeight').value = onJupiter;
    document.getElementById('SaturnWeight').value = onSaturn;
    document.getElementById('SunWeight').value = onSum;
    document.getElementById('UranusWeight').value = onUranus;
    document.getElementById('NeptuneWeight').value = onNeptune;
    document.getElementById('PlutoWeight').value = onPluto;



}