import{a as s}from"./chunk-IRQPUWCD.js";import{a as e}from"./chunk-HSGQLATB.js";import{a as l}from"./chunk-NGIDL4MJ.js";function n(t,r,A,p){t instanceof EventTarget&&t.removeEventListener(r,A,p)}var o,a,f,c,u,i;function D(t,r){t?o=t:o=r.target}function m(t){a=t.clientX,f=t.clientY}function b(t){if(t==="none")return[0,0];let r=t.split(/[()]/)[1].split(", ");return[Number(r[4]),Number(r[5])]}function w(){let t=window.getComputedStyle(o,null),r=b(t.transform);c=r[0]-a,u=r[1]-f}function g(t){(t.clientX!==a||t.clientY!==f)&&(o.style.transform=`matrix(1, 0, 0, 1, ${(t.clientX+c).toString()}, ${(t.clientY+u).toString()})`,m(t))}function X(t){let r=performance.now();r-i>16&&(g(t),i=r)}function d(t){return X(t),t.preventDefault(),!1}function Y(t){return g(t),n(document.body,"dragover",d),t.preventDefault(),!1}function y(t){let r=new Image;r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",t.dataTransfer.setDragImage(r,0,0)}function T(t,r){D(t,r),y(r),m(r),w(),i=0,r.dataTransfer.setData("text/plain",""),e(document.body,"dragover",d),s(document.body,"drop",Y)}function x(t,r){t.draggable=!0,e(t,"dragstart",l(T,r))}export{x as a};
//# sourceMappingURL=chunk-3MLJXOC6.js.map
