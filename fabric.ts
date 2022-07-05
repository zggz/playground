/**
 * Description：fabric
 * Created by Qin on 2022/7/5.
 */
import { fabric } from "fabric";

const canvas = new fabric.Canvas('canvas',{
    backgroundColor: 'rgba(0,0,255,0.3)',
});

const rect = new fabric.Rect({
    top : 150,
    left : 10,
    width : 60,
    height : 30,
    fill : 'white',
    selectable:false,
    name:"tishi"
});
console.log(rect)
canvas.add(rect);
const triangle = new fabric.Triangle({
    width: 10, height: 20, left: 50, top: 300, fill: '#cca',
    selectable:false,
    name: "sj"
});
const triangle2 = new fabric.Triangle({
    width: 10, height: 20, left: 150, top: 300, fill: '#cca',
    selectable:false,
    name: "sj2"
});
canvas.add(triangle)
canvas.add(triangle2)

let IMG = null
canvas.on('mouse:down', function(options) {
    if (options.target?.name ==="tishi") {
        console.log('有对象被点击咯! ', options.target.type);
        fabric.Image.fromURL('./errorPage.png', function(oImg) {
            // scale image down, and flip it, before adding it onto canvas
            oImg.scale(0.5).set('flipX', true);
            oImg.selectable = false
            oImg.name = "tup"
            oImg.rotate(90)
            IMG = oImg
            canvas.add(IMG);
        });
    }else if(options.target?.name!=="tup"){
        console.log('else')
        delObj(IMG)
    }
});


// canvas.on('mouse:move', function(options) {
//
//     var p = canvas.getPointer(options.e);
//
//     canvas.forEachObject(function(obj) {
//         var distX = Math.abs(p.x - obj.left),
//             distY = Math.abs(p.y - obj.top),
//             dist = Math.round(Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)));
//
//         console.log(obj, dist)
//     });
//
//     canvas.renderAll();
// });


function makeLine(coords) {
    return new fabric.Line(coords, {
        fill: 'red',
        stroke: 'red',
        strokeWidth: 4,
        selectable: false,
         evented: false,
    });
}




canvas.add(makeLine([0, 250, 800, 250 ]))
canvas.add(makeLine([100, 250, 50, 100 ]))
// canvas.add(new fabric.Circle({
//     radius: 30,
//     fill: '#f55',
//     top: 100,
//     left: 100
// }));


// canvas.on('mouse:down', function(options) {
//     console.log(options.e.clientX, options.e.clientY)
// })


function delObj(obj){
    canvas.FX_DURATION = 150
    // @ts-ignore
    canvas.fxRemove(obj, {
        onChange() {
            console.log('在动画的每一帧调用')
        },
        onComplete() {
            console.log('删除成功后调用')
        }
    })
}
