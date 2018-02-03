import {options} from '../inventory';
import setForage from '../../ajax/setForage';

export default function getChecks() { // jQuery
  options.checkedElements = {};
  Array.prototype.forEach.call(
    document.querySelectorAll(
      'table.fshInvFilter input[type="checkbox"][item]:checked'),
    function(el) {
      options.checkedElements[el.getAttribute('item')] = 1;
    });
  setForage('fsh_inventory', options);
  $('#fshInv').DataTable().draw(false);
}