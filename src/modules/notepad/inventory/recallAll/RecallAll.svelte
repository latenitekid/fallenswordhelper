<script>
  import sendEvent from '../../../analytics/sendEvent';
  import clickThis from '../../../common/clickThis';
  import querySelectorArray from '../../../common/querySelectorArray';

  const BpFromGs = 'span[action="take"]';
  const BpFromPlayer = 'span[mode="0"][action="recall"]';
  const GsFromPlayer = 'span[mode="1"][action="recall"]';

  function toBp() {
    sendEvent('Inventory', 'Recall All', 'toBp');
    [
      ...querySelectorArray(BpFromGs),
      ...querySelectorArray(BpFromPlayer),
    ].forEach(clickThis);
  }

  function toGs() {
    sendEvent('Inventory', 'Recall All', 'toGs');
    querySelectorArray(GsFromPlayer).forEach(clickThis);
  }
</script>

<div>
  <span>Recall all visible to:</span>
  <button class="custombutton" on:click={toBp} type="button">BP</button>
  <button class="custombutton" on:click={toGs} type="button">GS</button>
</div>

<style>
  div {
    margin-top: 10px;
  }
  button {
    font-size: 12px;
  }
</style>