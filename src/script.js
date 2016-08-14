function addElement (grid)  {

  for (var i = 0; i < grid; i++) {
    for (var j = 0; j < grid; j++) {
      if ((i+j)%2 === 0) {
        var check = document.createElement('div');
        document.body.appendChild(check);
        check.style.width = 100/grid + '%';
        check.style.backgroundColor = '#000000';
        check.style.paddingBottom = 100/grid + '%';
        check.style.float = 'left';
      } else {
        var check = document.createElement('div');
        document.body.appendChild(check);
        check.style.width = 100/grid + '%';
        check.style.backgroundColor = 'red';
        check.style.paddingBottom = 100/grid + '%';
        check.style.float = 'left';
        }
      }
    }
  }
addElement(9)

// function randomBoard (grid) {
//   for (var i = 0; i < grid*grid; i++) {
//       var check = document.createElement('div');
//       check.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//       check.style.width = 100/grid +'%';
//       check.style.paddingBottom = 100/grid + '%';
//       check.style.float = 'left';
//       document.body.appendChild(check);
//     }
//   }
//   randomBoard(12)
// for (var i = 0; i < 1; i++) {
//
// setInterval(function(){
//   var color = Math.floor(Math.random()*16777215).toString(16);
//   var check = document.createElement('div');
//           check.style.backgroundColor = '#'+ color;
//           check.style.width = '11%';
//           check.style.paddingBottom = '11%';
//           check.style.float = 'left';
//           document.body.appendChild(check);
//   // console.log("#" + color);
// }, 1000);
// }
// randomBoard(9)
// //
//   function randomBoard (grid) {
//
//
//     for (var i = 0; i < 81; i++) {
//       var color = Math.floor(Math.random()*16777215).toString(16);
//       var check = document.createElement('button');
//         check.style.backgroundColor = '#'+ color;
//         check.style.width = 100/grid + '%';
//         check.style.paddingBottom = 100/grid + '%';
//         check.style.float = 'left';
//         document.body.appendChild(check);
//       }
    //   var color = Math.floor(Math.random()*16777215).toString(16);
    // setInterval(function () {
    //   'button'.style.backgroundColor = '#'+ color;
    // }, 1000);
// }
