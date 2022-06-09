const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../programming.html'), 'utf8');

describe('programming.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('nav', () => {
        let nav;

        beforeEach(() => {
            nav = document.querySelector('nav')
        })

        test('it exists', () => {
            expect(nav).toBeTruthy();
        })
    })

    describe('form', () => {
        let form;

        beforeEach(() => {
            form = document.querySelector('.subform')
        })

        test('it exists', () => {
            expect(form).toBeTruthy();
        });

        describe('submit button', () => {
            test('it says "Go!', () => {
                expect(btnSearch.value).toBe('Go!');
            })
        })

        describe('has a search input', () => {
            test('it exists', () =>{
                expect(form).toBeTruthy();
            })
        })
    })

})

