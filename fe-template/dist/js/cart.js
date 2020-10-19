$(function () {
    const cart = JSON.parse(localStorage.getItem("cart"));
    // console.log(cart);
    renderViewCart(cart)
    const total_cart = cart.reduce((acc, val) => {
        return acc + val.total;
    }, 0);
    const quantity_cart = cart.reduce((acc, val) => {
        return acc + val.quantity_add;
    }, 0);
    $(".blue").text(`${quantity_cart}`);
    if (cart.length > 0) {
        $(".no-product").css('display', 'none')
    }
    $(".total").text(`$${total_cart}.00`)
    $(".product-cart").empty();
    renderProductOnCart(cart)

    function renderViewCart(cart) {
        cart.map(val => {
            $(`
            <div data-id=${val.id} class="item">
                        <button id="delete-cart">X</button>
                        <img src=${val.img}
                            alt="">
                        <div class="name">${val.name}</div>
                        <div class="price">
                            <span class="price-discount">
                               $${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                        </div>
                        <form class="flex a-center" action="#">
                            <div class="btn flex a-center">
                                <div class="dec-button">-</div>
                                <input type="tel" class="quantity_" id="quantity" value=${val.quantity_add}>
                                <div class="inc-button">+</div>
                            </div>
                        </form>
                        <div class="subtotal">$${Math.round(val.price - val.price * val.discount / 100) *
                val.quantity_add}.00
                        </div>
                        <button class="update" >Update Cart</button>
                    </div>
                    <div class="b-bottom"></div>
                    
            `).appendTo(".cols")
        })
    }
    function renderProductOnCart(cart) {
        cart.map(val => {
            $(`
                <div data-id=${val.id} class="product flex a-center j-between">
                <div  class="item-product flex a-center j-between">
                    <img src=${val.img}
                        alt="">
                    <div class="info">
                        <a class="name" href="/viewproduct.html">${val.name}</a>
                        <div class="price flex a-center">
                        <span class="quantity">${val.quantity_add} x </span>
                        <span class="price"> $${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                        </div>
                    </div>
                </div>
                <button id="delete">X</button>     
                </div>
            `).appendTo(".product-cart");
        })
    }
    //delete view cart on screen
    $("body").on("click", "#delete-cart", function () {
        const cartId = $(this).parents(".item").data("id");
        const idx = cart.findIndex(val => val.id === cartId);
        cart.splice(idx, 1)
        const totalCart = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);
        cart.subtotal = totalCart;
        const quantity = cart.reduce((acc, val) => {
            return acc + val.quantity;
        }, 0);
        $(".blue").text(`${quantity}`);
        $(".product-cart").empty();
        if (cart.length) {
            $(".view-cart").css('opacity', '1')
            $(".total").text(`$${totalCart}.00`)
            renderProductOnCart(cart)
        }
        else {
            $(".cols").css('display', 'none')
            $(".return").css('display', 'block')
            $(".shop").css('display', 'flex')
            $(".no-product").css('display', 'block')
            $(".row.a").css('display', 'none')
            $(".code").css('display', 'none')
            $(".total").text(`$${totalCart}.00`)
        }
        $(".cols").empty();
        renderViewCart(cart)
    });
    // update cart 
    $("body").on("click", ".update", function () {
        const currentId = $(this).parents(".item").data("id");
        const idx = cart.find(val => val.id === currentId);
        let quantity_input = $('.quantity_').val()
        idx.quantity_add = parseInt(quantity_input);
        idx.total = (Math.round(idx.quantity_add * (idx.price - idx.price * idx.discount / 100)))
        if (idx.quantity_add > idx.quantity) {
            alert("Not enough products on stock ,"
                + " Existsing quantity on stock is " + `${idx.quantity}`
                + " Please check back again!"
            )
            idx.quantity_add = idx.quantity
            idx.total = (Math.round(idx.quantity_add * (idx.price - idx.price * idx.discount / 100)))
            $(".cols").empty();
            renderViewCart(cart)
            $(".product-cart").empty();
            renderProductOnCart(cart)
            const total_cart = cart.reduce((acc, val) => {
                return acc + val.total;
            }, 0);
            const quantity_cart = cart.reduce((acc, val) => {
                return acc + val.quantity_add;
            }, 0);
            $(".blue").text(`${quantity_cart}`);
            $(".total").text(`$${total_cart}.00`)
            return 0;
        }
        else { }
        // cart.push(idx)
        //console.log(cart);
        const quantity_cart = cart.reduce((acc, val) => {
            return acc + val.quantity_add;
        }, 0);
        $(".blue").text(`${quantity_cart}`);
        const total_cart = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);
        if (cart.length > 0) {
            $(".no-product").css('display', 'none')
        }
        $(".total").text(`$${total_cart}.00`)
        $(".product-cart").empty();
        renderProductOnCart(cart)
        $(".cols").empty();
        renderViewCart(cart)
        localStorage.setItem("cart", JSON.stringify(cart))
    })

    //delete view cart on icon
    $("body").on("click", "#delete", function () {
        const cartId = $(this).parents(".product").data("id");
        //const currentItem = products.find((val) => val.id === cartId);
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
            $(".cols").css('display', 'none')
            $(".return").css('display', 'block')
            $(".shop").css('display', 'flex')
            $(".no-product").css('display', 'block')
            $(".row.a").css('display', 'none')
            $(".code").css('display', 'none')
            $(".total").text(`$${total_cart}.00`)
        }
        $(".cols").empty();
        renderViewCart(cart)
    });
})
