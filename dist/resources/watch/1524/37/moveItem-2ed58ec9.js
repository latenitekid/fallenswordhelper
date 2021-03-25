import { d as dialog } from './dialog-8dd3ba22.js';
import { i as indexAjaxJson } from './indexAjaxJson-dfd6ce16.js';

function moveItem(invIdList, folderId) {
  return indexAjaxJson({
    cmd: 'profile',
    subcmd: 'sendtofolder',
    inv_list: JSON.stringify(invIdList),
    folder_id: folderId,
    ajax: 1,
  }).then(dialog);
}

export { moveItem as m };
//# sourceMappingURL=moveItem-2ed58ec9.js.map
