const resizeHandle = document.querySelectorAll('.resize-handle')
const window1 = document.querySelectorAll('.window1')

for (i of resizeHandle) {
    let canResizeVert = false
    const resizeVert = (e) => {
        for (let i of window1) {
            i.style.height = String(e.pageY - 90) + 'px'
       }
    //  styles.left = String(e.pageX - 90) + 'px'
    }
    
    
    i.addEventListener('mousedown', e => {
       canResizeVert = true
       document.addEventListener('mousemove', e => {
          canResizeVert ? resizeVert(e) : null
       })
    })
    
    document.addEventListener('mouseup', e => {
       canResizeVert = false
    })
}

// const content = document.querySelector('.content')
// const horizResize = document.querySelector('.horiz-resize')
// let canResizeHor = false

// const resizeHor = (e) => {
//     console.log(e);
//     window1[0].style.width = String(e.layerX) + 'px'
// //  styles.left = String(e.pageX - 90) + 'px'
// }


// horizResize.addEventListener('mousedown', e => {
//    canResizeHor = true
//    document.addEventListener('mousemove', e => {
//       canResizeHor ? resizeHor(e) : null
//    })
// })

// document.addEventListener('mouseup', e => {
//    canResizeHor = false
// })


