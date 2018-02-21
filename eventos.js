var teclas = {
  LEFT:37,
  UP:38,
  RIGHT:39,
  DOWN:40,
};
document.addEventListener("keydown",dibujarTeclado);
var cuadrito=document.getElementById("areaDeDibujo");
var papel=cuadrito.getContext("2d");
var x=150;
var y=150;

dibujarLinea("red",100,100,100,100,papel);

function dibujarLinea(color,xI,yI,xF,yF,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle=color;
  lienzo.lineWidth=3;
  lienzo.moveTo(xI,yI);
  lienzo.lineTo(xF,yF);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito="blue";
  var movimiento = 10;
  switch (evento.keyCode) {

    case teclas.DOWN:
      dibujarLinea(colorcito,x,y,x,y + movimiento,papel);
      y= y + movimiento;
    break;

    case teclas.UP:
      dibujarLinea(colorcito,x,y,x,y - movimiento,papel);
      y= y - movimiento;
    break;

    case teclas.RIGHT:
      dibujarLinea(colorcito,x,y,x + movimiento,y,papel);
      x= x + movimiento;
    break

    case teclas.LEFT:
      dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
      x= x - movimiento;
    break;

    default:
      console.log("otra tecla");

  }
}
