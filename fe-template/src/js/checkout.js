$(function () {
    const cart = JSON.parse(localStorage.getItem("cart"));
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
    function renderProductCheckOut(cart) {
        cart.map(val => {
            $(`<div class="product flex">
                    <p>${val.name} <span>x ${val.quantity_add}</span></p>
                    <span class="total-product">$${Math.round(val.price - val.price * val.discount / 100) * val.quantity_add}.00</span>
                </div>`)
                .appendTo(".product-out")
        })
    }
    renderProductCheckOut(cart)
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
    $(".select-style-2").click(function (e) {
        e.preventDefault();
        // e.stopPropagations();
        $("ul.select-options-2").slideToggle();
        $(".select-style-2 i").css('transform', 'rotate(180deg)');
        for (const option of document.querySelectorAll("li.select-option-2")) {
            $(option).click(function (e) {
                e.preventDefault();
                $(this).parent().find('li.selected').removeClass('selected');
                $(this).addClass('selected');
                this.closest('.select-3').querySelector('.select-style-2 span').textContent = this.textContent;

                $("ul.select-options-2").css('display', 'none');
            });
        }
    });
    $("#login").click(function (e) {
        e.preventDefault();
        // e.stopPropagations();
        $(".login").slideToggle();
    });
    $("#coupon").click(function (e) {
        e.preventDefault();
        // e.stopPropagations();
        $(".coupon").slideToggle();
    });
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
        $(".blue").text(`${quantity_cart} `);
        $(".product-out").empty();
        renderProductCheckOut(cart)
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