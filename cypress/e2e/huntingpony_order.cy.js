describe('Проверка оформления заказа', function () {
    it('оформление заказа', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('[data-index="0"] > .header__collections-controls > .header__collections-link').click();
         cy.get('[data-product-id="338933151"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
         cy.get('.add-cart-counter__btn').wait(1000).click();
         cy.get('.header__cart > .icon').click();
         cy.get('.is-count-up').click();
         cy.get('.cart-controls > .button').click();
         cy.get('#client_surname').type("Ivanov");
         cy.get('#client_contact_name').type("Ivan");
         cy.get('#client_phone').type("79123456789");
         cy.get('#client_email').type("ivanov@ivan.ru");
         cy.get('#shipping_address_street').type("ивановская");
         cy.get('#shipping_address_house').type("1");
         cy.get('#order_field_24333471').type("собакен");
         cy.get('.co-delivery_method-list > .co-input--captcha > .g-recaptcha > [style="width: 304px; height: 78px;"] > div > iframe').click();
         cy.get('#create_order').click();

           })
    })