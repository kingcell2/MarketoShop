$(function () {

    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    const cart = JSON.parse(localStorage.getItem("cart"));
    function renderProductOnCart(cart) {
        cart.map(val => {
            $(`
                <div data-id=${val.id} class="product flex a-center j-between">
                <div  class="item-product flex a-center j-between">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                        <a class="name" href="">${val.name}</a>
                        <div class="price flex a-center">
                            <span class="quantity">${val.quantity_add}x </span>
                            <span class="price"> $${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                        </div>
                    </div>
                </div>
                <button id="delete">X</button>     
                </div>
            `).appendTo(".product-cart");
        })
    }
    function renderWishlist(wishlist) {
        wishlist.map(val => {

            $(` <div data-id=${val.id} class="item">
            <button id="delete-list">X</button>
            <div class="images">
                <img src=${val.img}
                    alt="">
            </div>
            <span class="name">${val.name}</span>
            <span class="price">$${Math.round(val.price - val.price * val.discount / 100)}.00</span>
            <span class="quantity">${val.quantity} In Stock</span>
            <button id="add-list">Add to cart <i class="fas fa-check"></i></button>
        </div>
        `).appendTo(".cols-list")
        })
    }
    if (wishlist !== null) {
        const quantity_wilsit = wishlist.reduce((acc, val) => {
            return acc + val.quantity_add;
        }, 0);
        $(".white").text(`${quantity_wilsit}`);
        $(".product-cart").empty();
        renderWishlist(wishlist)
    }
    if (cart !== null) {
        const total_cart = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);
        const quantity_cart = cart.reduce((acc, val) => {
            return acc + val.quantity_add;
        }, 0);
        $(".blue").text(`${quantity_cart}`);
        $(".no-product").css('display', 'none')
        $(".total").text(`$${total_cart}.00`)
        renderProductOnCart(cart)

    }


    $("body").on("click", "#delete-list", function () {
        const currentId = $(this).parents(".item").data("id");
        const idx = wishlist.findIndex(val => val.id === currentId);
        wishlist.splice(idx, 1)
        $(".cols-list").empty();
        const quantity_wilsit = wishlist.reduce((acc, val) => {
            return acc + val.quantity_add;
        }, 0);
        $(".white").text(`${quantity_wilsit}`);
        if (wishlist.length) {
            renderWishlist(wishlist)
        }
        else {
            $(".no-list").css('display', 'block')
            $(".cols-list").css('border-bottom', 'none')
        }
        $(".removed").css('display', 'block')
        $(".exists").css('display', 'none')
        $(".added").css('display', 'none')

    })
    $("body").on("click", "#add-list", function () {
        let cart = []
        const currentId = $(this).parents(".item").data("id");
        const currentItem = wishlist.find((val) => val.id === currentId);
        const currentItem2 = wishlist.findIndex((val) => val.id === currentId);

        const currentCart = cart.find((val) => val.id === currentId);
        const idx = cart.findIndex(val => val.id === currentId);
        if (idx === -1) {
            currentItem.quantity_add = 1;
            currentItem.total = Math.round((currentItem.price - currentItem.price * currentItem.discount / 100) * currentItem.quantity);
            cart.push(currentItem)
            wishlist.splice(currentItem2, 1)
            $(".cols-list").empty();
            const quantity_wilsit = wishlist.reduce((acc, val) => {
                return acc + val.quantity_add;
            }, 0);
            $(".white").text(`${quantity_wilsit}`);
            if (wishlist.length) {
                renderWishlist(wishlist)
            }
            else {
                $(".no-list").css('display', 'block')
                $(".cols-list").css('border-bottom', 'none')
            }
            $(".removed").css('display', 'none')
            $(".exists").css('display', 'none')
            $(".added").css('display', 'block')
        }
        else {
            cart[idx].quantity_add = currentCart.quantity_add
            cart[idx].total = (Math.round(cart[idx].quantity_add * (cart[idx].price - cart[idx].price * cart[idx].discount / 100)))
            wishlist.splice(currentItem2, 1)
            $(".cols-list").empty();
            const quantity_wilsit = wishlist.reduce((acc, val) => {
                return acc + val.quantity_add;
            }, 0);
            $(".white").text(`${quantity_wilsit}`);
            if (wishlist.length) {
                renderWishlist(wishlist)
            }
            else {
                $(".no-list").css('display', 'block')
                $(".cols-list").css('border-bottom', 'none')
            }
            $(".removed").css('display', 'none')
            $(".exists").css('display', 'block')
            $(".added").css('display', 'none')
        }
        const quantity_cart = cart.reduce((acc, val) => {
            return acc + val.quantity_add;
        }, 0);
        $(".blue").text(`${quantity_cart}`);
        const total = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);
        if (cart.length > 0) {
            $(".no-product").css('display', 'none')
        }
        $(".total").text(`$${total}.00`)
        $(".product-cart").empty();
        renderProductOnCart(cart)


        localStorage.setItem("cart", JSON.stringify(cart))
    })
    //delete view cart
    $("body").on("click", "#delete", function () {
        const cartId = $(this).parents(".product").data("id");
        const idx = cart.findIndex(val => val.id === cartId);
        cart.splice(idx, 1)
        const total_cart = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);
        cart.subtotal = total_cart;
        const quantity_cart = cart.reduce((acc, val) => {
            return acc + val.quantity_add;
        }, 0);
        $(".blue").text(`${quantity_cart}`);
        $(".product-cart").empty();
        if (cart.length) {
            $(".no-product").css('display', 'none')
            $(".view-cart").css('opacity', '1')
            $(".total").text(`$${total_cart}.00`)
            renderProductOnCart(cart)
        }
        else {
            $(".no-product").css('display', 'block')
            $(".total").text(`$${total_cart}.00`)
        }
    });
})