function getProduct(product) {
    switch (product) {
        case '1':
            return 300;
        case '2':
            return 400;
        case '3':
            return 250;
        case '4':
            return 0;
        default:
            return null;
    }
}

function main() {
    alert('Bienvenidos a RFS Chicken');

    let product = prompt(`Elige un producto: \n 1. Chicken Wings \n 2. Nuggets de Pollo \n 3. Sandwich de pollo \n 4. No tengo hambre aun`);

    if (product == '1') {
        console.log('Elegiste Chicken Wings')
    } else if (product == '2') {
        console.log('Eligiste Nuggets de Pollo')
    } else if (product == '3') {
        console.log('Eligiste Sandwich de pollo')
    } else if (product == '4') {
        alert('Vuelva cuanto tenga hambre')
        return
    } else {
        alert('Opcion no valida')
        return
    }

    let friesChoice = prompt('¿Deseas papas fritas? (Sí o No)').toLowerCase();
    let price = getProduct(product);

    if (price === null) {
        alert('Opción no válida');
        return;
    }

    if (friesChoice === 'sí' || friesChoice === 'si') {
        price += 120;
    }else if (friesChoice !== 'no') {
        alert('Opcion no valida')
        return
    }

    alert(`El precio total es: $${price}`);

    payment = prompt('Con ¿qué monto deseas pagar?');

    while (isNaN(payment) || payment < price) {
        payment = prompt('Con ¿qué monto deseas pagar?');
        payment = parseFloat(payment);

        if (isNaN(payment)) {
            alert('Ingresa un monto válido');
        } else if (payment < price) {
            alert('El monto es insuficiente, ingrese un monto mayor o igual al precio.');
        }
    }

    let change = payment - price;
    alert('Su cambio es de: $' + change);

    alert('Gracias por tu visita. ¡Hasta luego!');



}

main();
