describe('Проверка авторизации', function () {

    it('Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio'); //Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввести правильный логин
        cy.get('#pass').type('iLoveqastudio1');//Ввести правильный пароль
        cy.get('#loginButton').click();//Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверить нужный текст
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик
    });

    it('Автотест на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio'); //Зашли на сайт
        cy.get('#forgotEmailButton').click(); // Нажать «Забыли пароль»
        cy.get('#mailForgot').type('german@dolnikov.ru') //Ввести любой имейл
        cy.get('#restoreEmailButton').click();//нажать "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверка, что получили нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик
    });

    it('Проверка на негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio'); //Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввести правильный логин
        cy.get('#pass').type('iLoveqastudio');//Ввести НЕ правильный пароль
        cy.get('#loginButton').click();//Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверить нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик
    });
    
    it('Проверка на негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio'); //Зашли на сайт
        cy.get('#mail').type('german1@dolnikov.ru'); //Ввести НЕ правильный логин
        cy.get('#pass').type('iLoveqastudio1');//Ввести  правильный пароль
        cy.get('#loginButton').click();//Нажать войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверить нужный текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик
    });

    it('Проверка на негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio'); //Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); //Ввести логин без @
        cy.get('#pass').type('iLoveqastudio1');//Ввести  правильный пароль
        cy.get('#loginButton').click();//Нажать войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверить, что получаем текст с ошибкой
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик
    });

    it('Проверка на приведение к строчным буквам в логине:', function () {
        cy.visit('https://login.qa.studio'); //Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввести логин без @
        cy.get('#pass').type('iLoveqastudio1');//Ввести  правильный пароль
        cy.get('#loginButton').click();//Нажать войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');//Проверить нужный текст
        cy.get('#messageHeader').should('be.visible');// Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // наличие кнопки крестик
    });

});