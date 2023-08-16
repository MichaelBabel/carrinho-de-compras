let addToCcartBtn = document.getElementById("add-to-cart");
let plusTwoBtn = document.getElementById("add-to-cart-plus-2");
let removeBtn = document.getElementById("remove");
let clearBtn = document.getElementById("clear");

let quantityCart = document.getElementById("quantity-cart");
let messageCart = document.getElementById("message-cart");

itensCart = 0;

removeBtn.disabled = true;
clearBtn.disabled = true;


addToCcartBtn.addEventListener("click", () => {
    itensCart += 1;
    quantityCart.textContent = itensCart;
    removeBtn.disabled = false;
    clearBtn.disabled = false;
    messageCart.textContent = `Item adicionado no carrinho com sucesso.`;
});

plusTwoBtn.addEventListener("click", () => {
    itensCart += 2;
    quantityCart.textContent = itensCart;
    removeBtn.disabled = false;
    clearBtn.disabled = false;
    messageCart.textContent = `Itens adicionados no carrinho com sucesso.`;

});

removeBtn.addEventListener("click", () => {
    if (itensCart > 0) {
        itensCart -= 1;
        quantityCart.textContent = itensCart;
        if (itensCart < 1) {
            removeBtn.disabled = true;
            clearBtn.disabled = true;
        }
    }
    messageCart.textContent = `Item removido do carrinho com sucesso.`;

});

clearBtn.addEventListener("click", () => {
    if (itensCart > 0) {
        itensCart = 0;
        quantityCart.textContent = itensCart;
        if (itensCart < 1) {
            removeBtn.disabled = true;
            clearBtn.disabled = true;
        }
    }
        messageCart.textContent = `Seu carrinho de compras ainda está vazio.`;    
})