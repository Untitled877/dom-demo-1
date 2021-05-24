const div1 = dom.create("<div>Div1</div>")
const div2 = dom.create("<div>Div2</div>")

dom.after(t1, div1)
dom.before(t2, div2)

const childDiv = dom.create('<div id="child1"></div>')
dom.append(t3, childDiv)

const parentDiv = dom.create('<div id="parent1"></div>')
dom.wrap(t1, parentDiv)

dom.remove(child1)

let array1 = dom.empty(t9)
console.log(array1)

dom.attr(t4, 'attr1', 'iamt4')
const attr1 = dom.attr(t4, 'attr1')
console.log(`attr1: ${attr1}`)

dom.text(t5, '这是t5')
console.log(dom.text(t5))

dom.html(t6, "<div>一个新的div</div>")
console.log(dom.html(t6))

dom.style(t7, 'color', 'red')
console.log(dom.style(t7, 'color'))
dom.style(t7, {color: 'red', background: 'blue'})

dom.class.add(t8, 'class8')
dom.class.add(t8, 'class88')
dom.class.remove(t8, 'class88')
console.log(dom.class.has(t8, 'class88'))

const fn = ()=> {
    console.log('点击了！')
}
dom.on(t7, 'click', fn)
dom.off(t7, 'click', fn)

const testDiv = dom.find('#t8')[0]
console.log(testDiv)
const testDiv2 = dom.find('#parent1')[0]
console.log(dom.find('#t1', testDiv2)[0])

const parent2= dom.find("#parent2")[0]
// console.log(parent2)
const children1 = dom.find("#children1")[0]
console.log(dom.parent(children1))
console.log(dom.children(parent2))
console.log(dom.siblings(children1))
console.log(dom.next(children1))
const children2 = dom.find("#children2")[0]
console.log(dom.previous(children2))

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n)=> dom.style(n, 'color', 'red'))

console.log(dom.index(t4))
console.log(dom.index(children3))
console.log(dom.index(travel1))