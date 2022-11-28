


var list

function setup() {
    
    list= ["yes","no","random"]

    var t=list[2]

    var r=random(list)

    var b=createButton(r)

    b.id(button)
    b.style('background-color','black')
    b.position(5,15)

    b.mousePressed(action)
}

function action() {

    var r=random(list)

    var d=createDiv(r)
    d.parent('container')
    d.class('text')

}

