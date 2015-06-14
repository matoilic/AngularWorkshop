'use strict';


describe('Navigating from list do detail', function() {
	it('should have register button ', function() {
		browser.get('#/contacts');


        //var btn = element(  by.css('#registerbtn') );
        var btn = $("a[href='#/detail/1']");
		expect( btn ).not.toBe(null);

        btn.click().then(function(resp){
            browser.waitForAngular();
        });
	});


	 it('should arrive to the detail page  ', function() {
        browser.waitForAngular();
        expect(browser.getCurrentUrl()).toContain('/detail/1');

        var name = element(by.model('contactDetailController.contact.first_name'));
		expect(name.getAttribute('value')).toBe('Ryan');

    });

});


describe('validate filter', function() {

	it('filter by ryan', function() {
		browser.get('#/contacts');
		browser.waitForAngular();
		expect(browser.getCurrentUrl()).toContain('/contacts');	
	});

	it('filter with ryan',function(){
		element(by.model('contactListController.search')).sendKeys('Ryan');
		expect(browser.getCurrentUrl()).toContain('/contacts');

		browser.waitForAngular();
		var contacts = element.all(by.css('ul.contacts-list li')) ;
		
		expect(contacts.count()).toBe(2);
	});
});
