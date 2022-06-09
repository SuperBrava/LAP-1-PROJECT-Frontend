
const jsdom = require("jsdom");
const dom = new JSDOM(`<!DOCTYPE html><body><p id ="main" My First JSDOM!</p></body>`);
console.log(dom.window.document.getElementById("main").textContent);





/*const init = require('./js/script')

test('properly calls the giphy api', () => {
    expect(init(url)).toBe(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`)
})

const postInstance = require('./js/script')

test('post instance to create upVote', () => {
    expect(postInstance(post))
})



test('properly creates a post instance', () => {

})

*/