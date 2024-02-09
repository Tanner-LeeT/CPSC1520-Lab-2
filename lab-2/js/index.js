function strong(string){
    return `<strong>${string}</strong>`
}

const template = strong('making things useful')
console.log(template)

const updateInnerHTML = function (selector, htmlString){
    document.querySelector(selector).insertAdjacentHTML('beforeend', htmlString)
    }
    updateInnerHTML('section', template)