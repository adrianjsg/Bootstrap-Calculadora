function calcularPropina() {
    // Obtener los valores de los campos de entrada
    var totalFactura = parseFloat(document.getElementById('totalFactura').value);
    var porcentajePropina = parseFloat(document.getElementById('porcentajePropina').value);

    // Calcular el monto total de la propina
    var propina = (totalFactura * porcentajePropina) / 100;

    // Calcular el total de la factura con propina
    var totalConPropina = totalFactura + propina;

    // Mostrar el resultado en el área de resultado
    document.getElementById('resultado').innerHTML = `
        <div class="alert alert-success" role="alert">
            <p>Propina: ${propina.toFixed(2)}€</p>
            <p>Total con Propina: ${totalConPropina.toFixed(2)}€</p>
        </div>
    `;
}
