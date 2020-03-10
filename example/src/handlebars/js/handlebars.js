import tpl from './tpl.hbs';

let $el = document.getElementById('root');

$el.innerHTML = tpl({
    list: [
        {"name": "name1"},
        {"name": "name2"},
        {"name": "name3"}
    ]
}, {
    helpers: {
        toUpperCase: function () {
            return 'Hi, ' + this.name.toUpperCase();
        }
    }
});