function nomina() {

    const diasT = document.getElementById('diasT').value;
    const valorD =  parseFloat(document.getElementById('valorD').value.replace(/[,\.]/g, ''));
    const salariM =  parseFloat(document.getElementById('salariM').value.replace(/[,\.]/g, ''));
    
    console.log(valorD)
    fetch('libreria/calcular.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            diasT: diasT,
            valorD:  valorD,
            salariM: salariM
        })

    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            document.getElementById("pantalla").innerHTML = 
            `
                <p>El sueldo es: ${data.pago}</p>
                <p>La salud es: ${data.salud}</p>
                <p>La Pension es: ${data.pension}</p>
                <p>La ARL es: ${data.arl}</p>
                <p>El subTransporte es: ${data.subTransporte}</p>
                <p>La Retencion es: ${data.reten}</p>
                <p>El pago total es: ${data.pagoTotal}</p>
            `;
        }
    })
    .catch(error => console.error('Error:', error));    
}

