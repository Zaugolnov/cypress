describe('E2e (end-to-end) автотест для покемонов', function () {

    it('Проверка на позитивный кейс', function () {
        cy.visit('https://pokemonbattle.me/login'); //Зашли на сайт
        cy.get(':nth-child(1) > .auth__input').type('zau-sasha@yandex.ru'); // ввели верный логин
        cy.get('#password').type('12345678Q'); // ввели верный пароль
        cy.get('.auth__button').click(); // нажали "Войти"
        cy.get('.header__btns > [href="/shop"]').click(); // нажали "Магазин"
        cy.get('.available > button').first().click(); // нажали купить
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555 5555 5555 5557'); // Ввели номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('05.24'); // Ввели "Срок"
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввели "Код"
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Zaugolnov'); // ввели "Имя"
        cy.get('.pay-btn').click(); // нажали "Оплатить"
        cy.get('#cardnumber').type('56456'); //Ввели "Код из пуша или СМС"
        cy.get('.payment__submit-button').click(); //Нажали "Отправить"
        cy.get('.payment__success1').contains('Покупка прошла успешно'); 
        cy.get('.payment__font-for-success').should('be.visible');// Текст виден пользователю
    });
    
});