'use strict';

describe('Navigating from list do detail', function() {
    beforeEach(function () {
        browser.manage().deleteAllCookies();

        browser.get('/#/login');
        
        var EC = protractor.ExpectedConditions;

        browser.waitForAngular();

        element(by.css('input[name="email"]')).sendKeys('test@test.com');
        element(by.css('input[name="password"]')).sendKeys('test');
        element(by.css('button[type="submit"]')).click();

        browser.waitForAngular();
    });

    it('should have detail button ', function() {
        browser.get('#/contact-list');
        browser.waitForAngular();

        var btn = element(by.css('li.card:first-child .footer a'));
        expect(btn).not.toBe(undefined);
    });


    it('should arrive to the detail page  ', function() {
        browser.get('#/contact-list');
        browser.waitForAngular();
        var btn = element(by.css('li.card:first-child .footer a'));

        btn.click().then(function(resp){
            browser.waitForAngular();
        });

        expect(browser.getCurrentUrl()).toContain('/detail/');
    });

    it('should filter correctly when searching for "john"',function(){
        browser.get('#/contact-list');
        element(by.model('contactListController.search')).sendKeys('John');
        expect(browser.getCurrentUrl()).toContain('#/contact-list');

        browser.waitForAngular();
        var contacts = element.all(by.css('ul.contacts-list li')) ;

        expect(contacts.count()).toBe(2);
    });
});
