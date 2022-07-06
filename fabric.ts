/**
 * Description：fabric
 * Created by Qin on 2022/7/5.
 */
import { fabric } from "fabric";

interface RectType {
  coords: [number, number, number, number]; // 起点
  rotate: number;
  group: {
    top: number;
    left: number;
  };
  name: string;
}
function makeGroup({ coords, group, name, rotate }: RectType) {
  const line = makeLine(coords);
  const rect = new fabric.Rect({
    top: 110,
    left: 110,
    width: 100,
    height: 50,
    fill: "white",
    stroke: "red",
    strokeWidth: 4,
    selectable: false,
    name: name,
  });
  return new fabric.Group([line, rect], {
    left: group.left,
    top: group.top,
    angle: rotate,
  });
}
function makeLine(coords) {
  return new fabric.Line(coords, {
    fill: "red",
    stroke: "red",
    strokeWidth: 4,
    selectable: false,
    evented: false,
  });
}

class FishBone {
  width: number;
  height: number;
  canvas: fabric.Canvas;

  constructor({ width, height }, option = {}) {
    this.width = width;
    this.height = height;
    this.init({
      // backgroundColor: "rgba(0,0,255,0.3)",
      width: width,
      height: height,
      ...option,
    });
  }
  init(option) {
    this.canvas = new fabric.Canvas("canvas", option);
    return this;
  }

  renderRoot() {
    return this.add(
      makeLine([0, this.height / 2, this.width, this.height / 2])
    );
  }

  renderGroup() {
    const r = makeGroup({
      coords: [0, 0, 200, 200],

      rotate: 0,
      group: {
        left: 10,
        top: this.height / 2,
      },
      name: "first",
    });
      const s = makeGroup({
          coords: [0, 0, 200, 200],

          rotate: -90,
          group: {
              left: 40,
              top: this.height / 2 + 4,
          },
          name: "second",
      });
    return this.add(r).add(s);
  }

  add(obj: fabric.Object) {
    this.canvas.add(obj);
    return this;
  }
}

// export default FishBone

const triangle = new fabric.Triangle({
  width: 10,
  height: 20,
  left: 50,
  top: 300,
  fill: "#cca",
  selectable: false,
  name: "sj",
});
const fishBone = new FishBone({
  width: document.body.clientWidth,
  height: document.body.clientHeight,
});

fishBone.renderRoot().renderGroup().add(triangle);

//
// console.log(rect)
// canvas.add(rect);

// const triangle2 = new fabric.Triangle({
//     width: 10, height: 20, left: 150, top: 300, fill: '#cca',
//     selectable:false,
//     name: "sj2"
// });
// canvas.add(triangle)
// canvas.add(triangle2)
//
// let IMG = null
// canvas.on('mouse:down', function(options) {
//     if (options.target?.name ==="tishi") {
//         console.log('有对象被点击咯! ', options.target.type);
//         fabric.Image.fromURL('./errorPage.png', function(oImg) {
//             // scale image down, and flip it, before adding it onto canvas
//             oImg.scale(0.5).set('flipX', true);
//             oImg.selectable = false
//             oImg.name = "tup"
//             oImg.rotate(90)
//             IMG = oImg
//             canvas.add(IMG);
//         });
//     }else if(options.target?.name!=="tup"){
//         console.log('else')
//         delObj(IMG)
//     }
// });
//
//
// // canvas.on('mouse:move', function(options) {
// //
// //     var p = canvas.getPointer(options.e);
// //
// //     canvas.forEachObject(function(obj) {
// //         var distX = Math.abs(p.x - obj.left),
// //             distY = Math.abs(p.y - obj.top),
// //             dist = Math.round(Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)));
// //
// //         console.log(obj, dist)
// //     });
// //
// //     canvas.renderAll();
// // });
//
//
// function makeLine(coords) {
//     return new fabric.Line(coords, {
//         fill: 'red',
//         stroke: 'red',
//         strokeWidth: 4,
//         selectable: false,
//         evented: false,
//     });
// }
//
//
//
//
// canvas.add(makeLine([0, 250, 800, 250 ]))
// canvas.add(makeLine([100, 250, 50, 100 ]))
// // canvas.add(new fabric.Circle({
// //     radius: 30,
// //     fill: '#f55',
// //     top: 100,
// //     left: 100
// // }));
//
//
// // canvas.on('mouse:down', function(options) {
// //     console.log(options.e.clientX, options.e.clientY)
// // })
//
//
// function delObj(obj){
//     canvas.FX_DURATION = 150
//     // @ts-ignore
//     canvas.fxRemove(obj, {
//         onChange() {
//             console.log('在动画的每一帧调用')
//         },
//         onComplete() {
//             console.log('删除成功后调用')
//         }
//     })
// }
