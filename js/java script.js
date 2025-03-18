<script>
    let cart = [];
    let discount = 0;

    function addToCart(name, price, quantity) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ name, price, quantity });
        }
        updateCart();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function applyDiscount() {
        const discountCode = document.getElementById("discount-code").value;
        if (discountCode === "3MI_TABBON") {
            discount = 0.10;
            alert("Discount code applied! You got 10% off.");
        } else {
            discount = 0;
            alert("Invalid discount code.");
        }
        updateCart();
    }

    function updateCart() {
        const cartItems = document.getElementById("cart-items");
        const cartCount = document.getElementById("cart-count");
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            cartItems.innerHTML += `
                <div style="display: flex; justify-content: space-between; align-items: center; margin: 5px 0; padding: 8px; border-radius: 8px; background-color: #eee;">
                    <span class="cart-item-name">${item.name}</span> - <span class="cart-item-price">$${item.price}</span> x ${item.quantity} = $${itemTotal}
                    <button onclick="removeFromCart(${index})" style="padding: 4px 8px; background-color: red; color: white; border: none; border-radius: 4px; cursor: pointer;">Remove</button>
                </div>
            `;
        });
        const discountAmount = total * discount;
        const finalTotal = total - discountAmount;
        cartItems.innerHTML += `<div style="margin: 10px 0;">Discount: $${discountAmount.toFixed(2)}</div>`;
        cartItems.innerHTML += `<div style="margin: 5px 0; font-weight: bold;">Total: $${finalTotal.toFixed(2)}</div>`;
        cartItems.innerHTML += `<button onclick="checkout()" style="padding: 10px 20px; margin-top: 10px; background-color: green; color: white; border: none; border-radius: 8px; cursor: pointer;">Checkout</button>`;
        cartCount.textContent = cart.length;
    }

    function toggleCart() {
        const cartItems = document.getElementById("cart-items");
        cartItems.classList.toggle("show");
    }

    function checkout() {
        if (cart.length === 0) {
            alert("Your cart is empty! Add some penguins first.");
            return;
        }
        let summary = "Checkout Summary:\n";
        let total = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            summary += `${item.name} x ${item.quantity} = $${itemTotal}\n`;
        });
        const discountAmount = total * discount;
        const finalTotal = total - discountAmount;
        summary += `Discount: $${discountAmount.toFixed(2)}\n`;
        summary += `Total: $${finalTotal.toFixed(2)}\nThank you for adopting a penguin! 🐧`;
        alert(summary);
        cart = [];
        discount = 0;
        updateCart();
    }
</script>

	<script>
    let cart = [];

    function addToCart(name, price, quantity) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ name, price, quantity });
        }
        updateCart();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function updateCart() {
        const cartItems = document.getElementById("cart-items");
        const cartCount = document.getElementById("cart-count");
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            cartItems.innerHTML += `
                <div>
                    ${item.name} - $${item.price} x ${item.quantity} = $${itemTotal}
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
        });
        cartItems.innerHTML += `<div>Total: $${total}</div>`;
        cartItems.innerHTML += `<button onclick="checkout()">Checkout</button>`;
        cartCount.textContent = cart.length;
    }

    function toggleCart() {
        const cartItems = document.getElementById("cart-items");
        cartItems.classList.toggle("show");
    }

    function checkout() {
        if (cart.length === 0) {
            alert("Your cart is empty! Add some penguins first.");
            return;
        }
        let summary = "Checkout Summary:\n";
        let total = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            summary += `${item.name} x ${item.quantity} = $${itemTotal}\n`;
        });
        summary += `Total: $${total}\nThank you for adopting a penguin! 🐧`;
        alert(summary);
        cart = [];
        updateCart();
    }
</script>

<script>
    let cart = [];

    function addToCart(name, price, quantity) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ name, price, quantity });
        }
        updateCart();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function updateCart() {
        const cartItems = document.getElementById("cart-items");
        const cartCount = document.getElementById("cart-count");
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            cartItems.innerHTML += `
                <div>
                    ${item.name} - $${item.price} x ${item.quantity} = $${itemTotal}
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
        });
        cartItems.innerHTML += `<div>Total: $${total}</div>`;
        cartCount.textContent = cart.length;
    }

    function toggleCart() {
        const cartItems = document.getElementById("cart-items");
        cartItems.classList.toggle("show");
    }
</script>