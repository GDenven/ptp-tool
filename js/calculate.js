
//main function for calculation
document.addEventListener('DOMContentLoaded', function() {
            const inputPremisDiperiksa = document.getElementById('premisDiperiksa');
            const inputPremisPositif = document.getElementById('premisPositif');
            const inputBekasDiperiksa = document.getElementById('bekasDiperiksa');
            const inputBekasPositif = document.getElementById('bekasPositif');
            
            const hasilAI = document.getElementById('hasilAI');
            const hasilBI = document.getElementById('hasilBI');
            const hasilCI = document.getElementById('hasilCI');
            const warningMsg = document.getElementById('warningMsg');

            function kiraIndeks() {
                // get number input and change to float
                const premisDiperiksa = parseFloat(inputPremisDiperiksa.value) || 0;
                const premisPositif = parseFloat(inputPremisPositif.value) || 0;
                const bekasDiperiksa = parseFloat(inputBekasDiperiksa.value) || 0;
                const bekasPositif = parseFloat(inputBekasPositif.value) || 0;

                // A warning appear when input is greater than it should be
                let amaran = [];
                if (premisDiperiksa > 0 && premisPositif > premisDiperiksa) {
                    amaran.push("Premis positif melebihi premis diperiksa.");
                }
                if (bekasDiperiksa > 0 && bekasPositif > bekasDiperiksa) {
                    amaran.push("Bekas positif melebihi bekas diperiksa.");
                }

                if (amaran.length > 0) {
                    warningMsg.textContent = "Nota: " + amaran.join(" ");
                    warningMsg.style.display = 'block';
                } else {
                    warningMsg.style.display = 'none';
                }

                // calculate Aedes Index (AI)
                if (premisDiperiksa > 0) {
                    const ai = (premisPositif / premisDiperiksa) * 100;
                    hasilAI.textContent = ai.toFixed(2) + '%';
                }
                else {
                    hasilAI.textContent = '0.00%';
                }
                // calculate Breteau Index (BI)
                if (premisDiperiksa > 0) {
                    const bi = (bekasPositif / premisDiperiksa) * 100;
                    hasilBI.textContent = bi.toFixed(2);
                } 
                else {
                    hasilBI.textContent = '0.00';
                }
                // calculate Container Index (CI)
                    if (bekasDiperiksa > 0) {
                    const ci = (bekasPositif / bekasDiperiksa) * 100;
                    hasilCI.textContent = ci.toFixed(2) + '%';
                } 
                else {
                    hasilCI.textContent = '0.00%';
                }
            }

            function setSemula() {
                inputPremisDiperiksa.value = '';
                inputPremisPositif.value = '';
                inputBekasDiperiksa.value = '';
                inputBekasPositif.value = '';
                warningMsg.style.display = 'none';
                hasilAI.textContent = '0.00%';
                hasilBI.textContent = '0.00';
                hasilCI.textContent = '0.00%';
            }

        // for auto calculation
        const semuaInput = [inputPremisDiperiksa, inputPremisPositif, inputBekasDiperiksa, inputBekasPositif];
        semuaInput.forEach(function(input) {
            input.addEventListener('input', kiraIndeks);
        });

        // calculate and reset button
        document.getElementById('btnKira').addEventListener('click', kiraIndeks);
        document.getElementById('btnReset').addEventListener('click', setSemula);

    });

