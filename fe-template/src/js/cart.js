$(function () {
    const cart = JSON.parse(localStorage.getItem("cart"));
    // console.log(cart);
    cart.map(val => {
        $(`
        <div data-id=${val.id} class="item">
                    <button id="delete">X</button>
                    <img src=${val.img}
                        alt="">
                    <div class="name">${val.name}</div>
                    <div class="price">
                        <span class="price-discount">
                           $${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                    </div>
                    <form class="flex a-center" action="#">
                        <div class="btn flex  a-center">
                            <div class="dec-button">-</div>
                            <input type="text" class="quantity_" id="quantity" value=${val.quantity}>
                            <div class="inc-button">+</div>
                        </div>
                    </form>
                    <div class="subtotal">$${Math.round(val.price - val.price * val.discount / 100) *
            val.quantity}.00
                    </div>
                    <button class="update" >Update Cart</button>
                </div>
                <div class="b-bottom"></div>
                
        `).appendTo(".cols")
    })


    $("#delete").click(function (e) {
        e.preventDefault();
        const cartId = $(this).parents(".item").data("id");
        const idx = cart.findIndex(val => val.id === cartId);
        console.log(idx);
        console.log(cartId);
        cart.splice(idx, 1)
        const totalCart = cart.reduce((acc, val) => {
            return acc + Math.floor(val.total);
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
            cart.map(val => {
                $(`
                <div  class="product flex a-center j-between">
                <div data-id=${val.id}  class="item-product flex a-center j-between">
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
        cart.map(val => {
            $(`
            <div data-id=${val.id} class="item">
                        <button id="delete">X</button>
                        <img src=${val.img}
                            alt="">
                        <div class="name">${val.name}</div>
                        <div class="price">
                            <span class="price-discount">
                               $${Math.round(val.price - val.price * val.discount / 100)}.00</span>
                        </div>
                        <form class="flex a-center" action="#">
                            <div class="btn flex  a-center">
                                <div class="dec-button">-</div>
                                <input type="text" class="quantity_" id="quantity" value=${val.quantity}>
                                <div class="inc-button">+</div>
                            </div>
                        </form>
                        <div class="subtotal">$${Math.round(val.price - val.price * val.discount / 100) *
                val.quantity}.00
                        </div>
                        <button class="update" >Update Cart</button>
                    </div>
                    <div class="b-bottom"></div>
                    
            `).appendTo(".cols")
        })
    });

    const total = cart.reduce((acc, val) => {
        return acc + val.total;
    }, 0);
    const quantity = cart.reduce((acc, val) => {
        return acc + val.quantity;
    }, 0);
    $(".blue").text(`${quantity}`);

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
})