// SIMPLE SIMULADOR ECOMMERCE  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*alert("Please enter the number of the product you would like to purchase. If you are finished, enter '0'.")
let selectedProduct = Number(prompt("1 - Keyboard $80.00, 2 - Electric handle $200.00, 3 - AirPods $300.00, 4 - Watch $100.00"));
let selectedQuantity
let totalCost = 0


const calculateCost = (quantity, price) => {
    return quantity * price
};

while (selectedProduct != 0) {
    switch(selectedProduct) {
        case 1:
            selectedQuantity = Number(prompt("You have selected a keyboard. Please enter the quantity you would like to purchase."));
            totalCost += calculateCost(selectedQuantity, 80.00);
            console.log(totalCost)
            break
        case 2:
            selectedQuantity = Number(prompt("You have selected an electric handle. Please enter the quantity you would like to purchase."));
            totalCost += calculateCost(selectedQuantity, 200.00);
            console.log(totalCost)
            break
        case 3:
            selectedQuantity = Number(prompt("You have selected AirPods. Please enter the quantity you would like to purchase."));
            totalCost += calculateCost(selectedQuantity, 300.00)
            console.log(totalCost)
            break
        case 4:
            selectedQuantity = Number(prompt("You have selected a watch. Please enter the quantity you would like to purchase."));
            totalCost += calculateCost(selectedQuantity, 100.00)
            console.log(totalCost)
            break
        default:
            alert("Invalid selection. Please try again.")
            break
    }
    selectedProduct = Number(prompt("1 - Keyboard $80.00, 2 - Electric handle $200.00, 3 - AirPods $300.00, 4 - Watch $100.00"))
    
}


alert("Your total purchase amount is: $" + totalCost)*/






// SECOND IMPLEMMENTATION // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*const sneakers = [
    {
        id: 1,
        brand: 'jordan',
        model: 'retro 4',
        color: 'vage',
        price: 130.0
    },
    {
        id: 2,
        brand: 'nike',
        model: 'force one',
        color: 'white',
        price: 90.00
    },
    {
        id: 3,
        brand: 'adidas',
        model: 'superstar',
        color: 'golden',
        price: 110.00
    },
    {
        id: 4,
        brand: 'adidas',
        model: 'yessy (zebra)',
        color: 'white',
        price: 160.00,
    },
]

const cart = {
    items: [],
    totalCost: 0
}


const addItemToCart = (item, quantity) => {
    cart.items.push({
        id: item.id,
        brand: item.brand,
        model: item.model,
        color: item.color,
        price: item.price,
        quantity: quantity,
    })
    cart.totalCost += item.price * quantity;
}


alert("Please enter the number of the sneaker you would like to purchase. If you are finished, enter '0'.")
let selectedSneaker = Number(prompt("1 - Jordan(retro 4) $130.0, 2 - nike(force one) $90.00, 3 - adidas(superstar) $110.00, 4 - Adidas(yessy'zebra') $110.00.  If you are finished, enter '0'.'")
)

let selectedQuantity
let attempts = 0

while (selectedSneaker !== 0) {
    const selectedSneakerObj = sneakers.find((sneakers) => sneakers.id === selectedSneaker)
    if (selectedSneakerObj) {
        selectedQuantity = Number(
            prompt(`You have selected ${selectedSneakerObj.brand}, ${selectedSneakerObj.model}, ${selectedSneakerObj.color}. Please enter the quantity you would like to purchase.`)
        )
        if (selectedQuantity > 0) {
            addItemToCart(selectedSneakerObj, selectedQuantity)
            console.log(cart.items)
        } else {
            alert("Invalid quantity. Please try again.")
        }
    } else {
        alert("Invalid selection. Please try again.")
    }
    selectedSneaker = Number(prompt("1 - Jordan(retro 4) $130.0, 2 - nike(force one) $90.00, 3 - adidas(superstar) $110.00, 4 - Adidas(yessy'zebra') $110.00.  If you are finished, enter '0'.'"))
}

alert(`Your total purchase amount is: $${cart.totalCost}`)*/






// third implementation // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sneakers = [
    {
        Image: document.getElementById("img").src,
        id: 1,
        model: 'Jordan retro 4',
        price: 130.0,
        stock: 1,
        quantity: 0
    },
    {
        Image: document.getElementById("img2").src,
        id: 2,
        model: 'force one',
        price: 90.00,
        stock: 2,
        quantity: 0
    },
    {
        Image: document.getElementById("img3").src,
        id: 3,
        model: 'superstar',
        price: 110.00,
        stock: 3,
        quantity: 0
    }
];

let cart = []

// capture the buttons 
const buyButtons = document.querySelectorAll(".btn-block")

// function to add a product to the cart
const addToCart = (e) => {
    // get the product id from the data-product-id attribute of the button
    const productId = parseInt(e.target.getAttribute("data-product-id"));

    // find the product in the sneakers array
    const product = sneakers.find((sneaker) => sneaker.id === productId);

    // check if the product is already in the cart
    const cartProductIndex = cart.findIndex((item) => item.id === productId);

    if (product && product.stock > 0) {
        // if the product is already in the cart, update its quantity
        if (cartProductIndex !== -1) {
            cart[cartProductIndex].quantity += 1;
        } else {
            // add the product to the cart array
            cart.push({ ...product, quantity: 1 });
        }
        // update the product stock and save the cart to local storage
        product.stock -= 1;
        const cartJSON = JSON.stringify(cart);
        localStorage.setItem("cart", cartJSON);
        console.log(`Product ${product.model} added to cart.`);
        console.log(`Cart:`, cart);
        // update the cart display on the page
        updateCart();
    } else {
        alert("producto no disponible en stock");
    }
};


// add event listener to each "Buy" button
for (const button of buyButtons) {
    button.addEventListener("click", addToCart)
}


// function to update the cart display on the page
const updateCart = () => {


    const cartTable = document.getElementById("cart-table")
    const tbody = cartTable.getElementsByTagName("tbody")[0]
    total = 0

    tbody.innerHTML = ""

    for (const product of cart) {

        const row = document.createElement("tr")


        const imgTd = document.createElement("td")
        const img = document.createElement("img")
        img.src = product.Image
        img.style.width = "100px"  // Set the width of the image to 200 pixels
        img.style.height = "auto" // Automatically adjust the height to maintain the aspect ratio
        imgTd.appendChild(img)   // en este caso, la rason por la que uso apenChild es poque  es basicamente un sitaxys antiguo que funciona en browsesers viejos
        row.appendChild(imgTd)

        const brandTd = document.createElement("td")
        brandTd.textContent = product.model
        row.append(brandTd)

        const PriceTd = document.createElement("td")
        PriceTd.textContent = product.price
        row.append(PriceTd)

        const stockTd = document.createElement("td")
        stockTd.textContent = product.stock
        row.append(stockTd)

        const quanityTd = document.createElement("td")
        quanityTd.textContent = product.quantity
        row.append(quanityTd)

        tbody.append(row)
    }
    let clearBtn = document.querySelector(".btn-danger");

    clearBtn.addEventListener("click", function () {
        // reset the cart array
        cart = [];

        // reset the product quantities and stock
        for (let i = 0; i < sneakers.length; i++) {
            sneakers[i].quantity = 0;
            sneakers[i].stock = 3; // assuming that the maximum stock for all products is 3
        }

        // clear the cart from local storage
        localStorage.removeItem("cart");

        // update the cart display
        updateCart();
    });
}







