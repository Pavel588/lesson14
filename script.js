'use strick';

function DomElement(prop) {
    this.selector = prop.selector || '.block';
    this.height = prop.height || '120px';
    this.width = prop.width || '120px';
    this.bg = prop.bg || 'red';
    this.fontSize = prop.fontSize || ' 23px';
    this.text = prop.text || 'Hello!!!';
}

DomElement.prototype.createElem = function() {
    let newElem;
    if (this.selector[0] === '.') {
        newElem = document.createElement('div');
        newElem.classList.add(this.selector.slice(1));
    } else if (this.selector[0] === '#') {
        newElem = document.createElement('p');
        newElem.id = this.selector.slice(1);
    }
    newElem.textContent = this.text;
    newElem.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; fontSize: ${this.fontSize}`;
    document.querySelector('body').append(newElem);
};

const elemBlock = new DomElement({
    selector: '#block',
    height: '100px',
    width: '100px',
    bg: 'blue',
    fontSize: '14px',
    text: 'hi!',
});

elemBlock.createElem();