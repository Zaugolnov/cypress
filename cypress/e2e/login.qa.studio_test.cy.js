import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
    });

    afterEach('Конец теста', function () {
        cy.get(result_page.close).should('be.visible'); // наличие кнопки крестик
    });

    it('Проверка на позитивный кейс авторизации', function () {
        cy.get(main_page.email).type(data.login); //Ввести правильный логин
        cy.get(main_page.password).type(data.password);//Ввести правильный пароль
        cy.get(main_page.login_button).click();//Нажать войти
        cy.get(result_page.title).contains('Авторизация прошла успешно');//Проверить нужный текст
        cy.get(result_page.title).should('be.visible');// Текст виден пользователю
    });

    it('Автотест на проверку логики восстановления пароля', function () {
        cy.get(main_page.fogot_pass_btn).click(); // Нажать «Забыли пароль»
        cy.get(recovery_password_page.email).type(data.login) //Ввести любой имейл
        cy.get(recovery_password_page.send_button).click();//нажать "Отправить код"
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); //Проверка, что получили нужный текст
        
    });

    it('Проверка на негативный кейс авторизации: ввести НЕ правильный пароль', function () {
        cy.get(main_page.email).type(data.login); //Ввести правильный логин
        cy.get(main_page.password).type('iLoveqastudio');//Ввести НЕ правильный пароль
        cy.get(main_page.login_button).click();//Нажать войти
        cy.get(result_page.title).contains('Такого логина или пароля нет'); //Проверить нужный текст
     
    });

    it('Проверка на негативный кейс авторизации: ввести НЕ правильный логин', function () {
        cy.get(main_page.email).type('german1@dolnikov.ru'); //Ввести НЕ правильный логин
        cy.get(main_page.password).type(data.password);//Ввести  правильный пароль
        cy.get(main_page.login_button).click();//Нажать войти
        cy.get(result_page.title).contains('Такого логина или пароля нет'); //Проверить нужный текст
    });

    it('Проверка на негативный кейс авторизации: вести логин без @', function () {
        cy.get(main_page.email).type('germandolnikov.ru'); //Ввести логин без @
        cy.get(main_page.password).type(data.password);//Ввести  правильный пароль
        cy.get(main_page.login_button).click();//Нажать войти
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); //Проверить, что получаем текст с ошибкой
    });

    it('Проверка на приведение к строчным буквам в логине: ввести логин большими буквами', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); //Ввести логин большими буквами
        cy.get(main_page.password).type(data.password);//Ввести  правильный пароль
        cy.get(main_page.login_button).click();//Нажать войти
        cy.get(result_page.title).contains('Авторизация прошла успешно');//Проверить нужный текст
        cy.get(result_page.title).should('be.visible');// Текст виден пользователю
    });

});

