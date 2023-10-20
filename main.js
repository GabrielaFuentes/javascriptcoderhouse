class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const products = [
    new Product('1', 'Chicken Wings', 300),
    new Product('2', 'Nuggets de Pollo', 400),
    new Product('3', 'Sandwich de pollo', 250),
];

function getProductById(productId) {
    return products.find(product => product.id === productId);
}

function printMenu() {
    console.log('Menú de Productos:');
    products.forEach(product => {
        console.log(`${product.id}. ${product.name} - $${product.price}`);
    });
}

function main() {
    alert('Bienvenidos a RFS Chicken');
    const buyHistory = [];

    while (true) {
        printMenu();

        let product = prompt(`Elige un producto: \n 1. Chicken Wings \n 2. Nuggets de Pollo \n 3. Sandwich de pollo \n 4. Terminar pedido`);
        if (product === '4') {
            break;
        }

        const selectedProduct = getProductById(product);

        if (!selectedProduct) {
            alert('Opción no válida');
            continue;
        }

        console.log(`Elegiste ${selectedProduct.name}`);

        let friesChoice = prompt('¿Deseas papas fritas? (Sí o No)').toLowerCase();
        let hasFries = friesChoice === 'sí' || friesChoice === 'si';

        if (hasFries) {
            selectedProduct.price += 120;
        } else if (friesChoice !== 'no') {
            alert('Opción no válida');
            continue;
        }

        alert(`El precio total es: $${selectedProduct.price}`);

        let payment = prompt('Con ¿qué monto deseas pagar?');
        payment = parseFloat(payment);

        while (isNaN(payment) || payment < selectedProduct.price) {
            alert(isNaN(payment) ? 'Ingresa un monto válido' : 'El monto es insuficiente, ingresa un monto mayor o igual al precio.');
            payment = parseFloat(prompt('Con ¿qué monto deseas pagar?'));
        }

        let change = payment - selectedProduct.price;
        alert(`Su cambio es de: ${change}`);

        buyHistory.push({
            product: selectedProduct.name,
            price: selectedProduct.price,
            hasFries: hasFries,
        });
    }

    console.log('Historial de Compras:');
    buyHistory.forEach((buy, index) => {
        const frieText = buy.hasFries ? 'con papas fritas' : 'sin papas fritas';
        console.log(`Compra ${index + 1}: ${buy.product} ${frieText} - $${buy.price} `);
    });

    alert('Gracias por tu visita. ¡Hasta luego!');
}

main();
