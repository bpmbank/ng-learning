var div = document.createElement('div');
var str = ""
for (var key in div) {
    str = str + key + " "
}
console.log(str)

var element = {
    tagName: 'ul',
    props: {
        id: 'list'
    },
    children: [
        {tagName: 'li', props: {class: 'item'}, children: ["Item 1"]},
        {tagName: 'li', props: {class: 'item'}, children: ["Item 1"]},

        {
            tagName: 'li', props: {
            class: 'item'
        }
            ,
            children: ["Item 1"]
        }]
}

function Element(tagName,props,children){
    this.tagName = tagName;
    this.props = props;
    this.children=children;
}

model.exports=function(tagName,props,children){
    return new Element(tagName,props,children);
}

var el = require("./element")