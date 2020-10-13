$(function () {
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));


    const cart = JSON.parse(localStorage.getItem("cart"));
    const quantity2 = cart.reduce((acc, val) => {
        return acc + val.quantity;
    }, 0);
    const totalCart = cart.reduce((acc, val) => {
        return acc + Math.floor(val.total);
    }, 0);
    $(".blue").text(`${quantity2}`);
    $(".product-cart").empty();

    if (cart.length) {
        $(".no-product").css('display', 'none')
        $(".total").text(`$${totalCart}.00`)
        cart.map(val => {
            $(`
            <div  data-id=${val.id}   class="product flex a-center j-between">
            <div class="item-product flex a-center j-between">
                <img src=${val.img}
                    alt="">
                <div class="info">
                    <a class="name" href="">${val.name}</a>
                    <div class="price flex a-center">
                        <span class="quantity">${val.quantity}x </span>
                        <span class="price"> $${Math.floor(val.price - val.price * val.discount / 100)}.00</span>
                    </div>
                </div>
            </div>
            <button id="delete">X</button>     
            </div>
        `).appendTo(".product-cart");
        })
    }

    wishlist.map(val => {

        $(` <div data-id=${val.id} class="item">
        <button id="delete-list">X</button>
        <div class="images">
            <img src=${val.img}
                alt="">
        </div>
        <span class="name">${val.name}</span>
        <span class="price">$${Math.round(val.price - val.price * val.discount / 100)}.00</span>
        <span class="quantity">In Stock</span>
        <button id="add-list">Add to cart <i class="fas fa-check"></i></button>
    </div>
    `).appendTo(".cols-list")
    })
    const quantity = wishlist.reduce((acc, val) => {
        return acc + val.quantity;
    }, 0);
    $(".white").text(`${quantity}`);
    $("body").on("click", "#delete-list", function () {
        const currentId = $(this).parents(".item").data("id");
        // const currentItem = products.find((val) => val.id === currentId);
        const idx = wishlist.findIndex(val => val.id === currentId);
        wishlist.splice(idx, 1)
        $(".cols-list").empty();
        console.log(currentId);
        console.log(idx);
        const quantity = wishlist.reduce((acc, val) => {
            return acc + val.quantity;
        }, 0);
        $(".white").text(`${quantity}`);
        if (wishlist.length) {
            wishlist.map(val => {
                $(` <div data-id=${val.id} class="item">
        <button id="delete-list">X</button>
        <div class="images">
            <img src=${val.img}
                alt="">
        </div>
        <span class="name">${val.name}</span>
        <span class="price">${val.price}</span>
        <span class="quantity">In Stock</span>
        <button id="add-list">Add to cart</button>
    </div>
    `).appendTo(".cols-list")
            })
        }
        else {
            $(".no-list").css('display', 'block')
            $(".cols-list").css('border-bottom', 'none')

        }

    })
    $("body").on("click", "#add-list", function () {
        const currentId = $(this).parents(".item").data("id");
        const currentItem = wishlist.find((val) => val.id === currentId);
        const currentCart = cart.find((val) => val.id === currentId);
        const idx = cart.findIndex(val => val.id === currentId);

        if (idx === -1) {
            currentItem.quantity = 1;
            currentItem.total = Math.round((currentItem.price - currentItem.price * currentItem.discount / 100) * currentItem.quantity);
            cart.push(currentItem)
            alert("Product added to cart successfully");
        }
        else {
            cart[idx].quantity = currentCart.quantity
            cart[idx].total = (Math.round(cart[idx].quantity * (cart[idx].price - cart[idx].price * cart[idx].discount / 100)))
            alert("The product already exists in the shopping cart, please check back!")
        }

        const quantity = cart.reduce((acc, val) => {
            return acc + val.quantity;
        }, 0);
        $(".blue").text(`${quantity}`);
        const total = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);
        if (cart.length > 0) {
            $(".no-product").css('display', 'none')
        }
        $(".total").text(`$${total}.00`)
        $(".product-cart").empty();
        cart.map(val => {
            $(`
            <div data-id=${val.id} class="product flex a-center j-between">
            <div  class="item-product flex a-center j-between">
                <img src=${val.img}
                    alt="">
                <div class="info">
                    <a class="name" href="">${val.name}</a>
                    <div class="price flex a-center">
                        <span class="quantity">${val.quantity}x </span>
                        <span class="price"> $${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                    </div>
                </div>
            </div>
            <button id="delete">X</button>     
            </div>
        `).appendTo(".product-cart");
        })


        localStorage.setItem("cart", JSON.stringify(cart))
    })
})