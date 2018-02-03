/* eslint-disable max-lines */
export default {
  moveGuildList: {
    helpTitle: 'Move Guild Info List',
    helpText: 'This will Move the Guild Info List higher ' +
      'on the bar on the right'
  },
  moveOnlineAlliesList: {
    helpTitle: 'Move Online Allies List',
    helpText: 'This will Move the Online Allies List higher ' +
      'on the bar on the right'
  },
  enableOnlineAlliesWidgets: {
    helpTitle: 'Enable Online Allies Widgets',
    helpText: 'Enabling this option will enable the Allies List ' +
      'Widgets (coloring on the Allies List panel)'
  },
  moveFSBox: {
    helpTitle: 'Move FS box',
    helpText: 'This will move the FS box to the left, under the menu, ' +
      'for better visibility (unless it is already hidden.)'
  },
  moveDailyQuest: {
    helpTitle: 'Move Daily Quest',
    helpText: 'This will move the Daily Quest to the left, under the menu, ' +
      'for better visibility (unless it is already hidden.)'
  },
  gameHelpLink: {
    helpTitle: '&quot;Game Help&quot; Settings Link',
    helpText: 'This turns the Game Help text in the lower ' +
      'right box into a link to this settings page.'
  },
  enableTempleAlert: {
    helpTitle: 'Enable Temple Alert',
    helpText: 'Puts an alert on the LHS if you have not ' +
      'prayed at the temple today.',
    network: true
  },
  enableUpgradeAlert: {
    helpTitle: 'Enable Gold Upgrade Alert',
    helpText: 'Puts an alert on the LHS if you have not upgraded your ' +
      'stamina with gold today.',
    network: true
  },
  enableComposingAlert: {
    helpTitle: 'Enable Composing Alert',
    helpText: 'Puts an alert on the LHS if you have composing ' +
      'slots available.',
    network: true
  },
  enhanceOnlineDots: {
    helpTitle: 'Enhance Online Dots',
    helpText: 'Enhances the green/grey dots by player names to show ' +
      'online/offline status.'
  },
  hideBuffSelected: {
    helpTitle: 'Hide Buff Selected',
    helpText: 'Hides the buff selected functionality in the online allies ' +
      'and guild info section.'
  },
  hideHelperMenu: {
    helpTitle: 'Hide Helper Menu',
    helpText: 'Hides the helper menu from top left.'
  },
  keepHelperMenuOnScreen: {
    helpTitle: 'Keep Helper Menu On Screen',
    helpText: 'Keeps helper menu on screen as you scroll (helper ' +
      'menu must be enabled to work). Also works with quick links.'
  },
  showAdmin: {
    helpTitle: 'Show rank controls',
    helpText: 'Show ranking controls for guild managemenet in member ' +
      'profile page - this works for guild founders only'
  },
  ajaxifyRankControls: {
    helpTitle: 'AJAXify rank controls',
    helpText: 'Enables guild founders with ranking rights to change rank ' +
      'positions without a screen refresh.'
  },
  detailedConflictInfo: {
    helpTitle: 'Show Conflict Details',
    helpText: 'Inserts detailed conflict information onto your guild\'s ' +
      'manage page. Currently displays the target guild as well as ' +
      'the current score.',
    network: true
  },
  showCombatLog: {
    helpTitle: 'Show Combat Log',
    helpText: 'This will show the combat log for each automatic ' +
      'battle below the monster list.'
  },
  enableCreatureColoring: {
    helpTitle: 'Color Special Creatures',
    helpText: 'Creatures will be colored according to their rarity. ' +
      'Champions will be colored green, Elites yellow and Super Elites red.'
  },
  showCreatureInfo: {
    helpTitle: 'Show Creature Info',
    helpText: 'This will show the information from the view creature ' +
      'link when you mouseover the link.',
    network: true
  },
  fsboxlog: {
    helpTitle: 'Enable FS Box Log',
    helpText: 'This enables the functionality to keep a log of ' +
      'recent seen FS Box message.'
  },
  keepBuffLog: {
    helpTitle: 'Enable Buff Log',
    helpText: 'This enables the functionality to keep a log of ' +
      'recently casted buffs'
  },
  huntingMode: {
    helpTitle: 'Enable Hunting Mode',
    helpText: 'This disable menu and some visual features to ' +
      'speed up the calf.'
  },
  hideNonPlayerGuildLogMessages: {
    helpTitle: 'Cleanup Guild Log',
    helpText: 'Any log messages not related to the current player ' +
      'will be dimmed (e.g. recall messages from guild store)'
  },
  useNewGuildLog: {
    helpTitle: 'Use New Guild Log',
    helpText: 'This will replace the standard guild log with the ' +
      'helper version of the guild log.'
  },
  enableLogColoring: {
    helpTitle: 'Enable Log Coloring',
    helpText: 'Three logs will be colored if this is enabled, ' +
      'Guild Chat, Guild Log and Player Log. It will show any new ' +
      'messages in yellow and anything 20 minutes old ones in brown.'
  },
  enableChatParsing: {
    helpTitle: 'Enable Chat Parsing',
    helpText: 'If this is checked, your character log will be parsed for ' +
      'chat messages and show the chat message on the screen if you reply ' +
      'to that message.'
  },
  addAttackLinkToLog: {
    helpTitle: 'Add attack link to log',
    helpText: 'If checked, this will add an Attack link to each message ' +
      'in your log.'
  },
  enhanceChatTextEntry: {
    helpTitle: 'Enhance Chat Text Entry',
    helpText: 'If checked, this will enhance the entry field for entering ' +
      'chat text on the guild chat page.'
  },
  showExtraLinks: {
    helpTitle: 'Show Extra Links',
    helpText: 'If checked, this will add AH and UFSG ' +
      'links to equipment screens.'
  },
  disableItemColoring: {
    helpTitle: 'Disable Item Coloring',
    helpText: 'Disable the code that colors the item text based on the ' +
      'rarity of the item.'
  },
  showQuickDropLinks: {
    helpTitle: 'Show Quick Drop Item',
    helpText: 'This will show a link beside each item which gives the ' +
      'option to drop the item.  WARNING: NO REFUNDS ON ERROR'
  },
  storeLastQuestPage: {
    helpTitle: 'Store Last Quest Page',
    helpText: 'This will store the page and sort order of each of the ' +
      'three quest selection pages for next time you visit. If you need ' +
      'to reset the links, turn this option off, click on the link you ' +
      'wish to reset and then turn this option back on again.'
  },
  showNextQuestSteps: {
    helpTitle: 'Show Next Quest Steps',
    helpText: 'Shows all quest steps in the UFSG.'
  },
  renderSelfBio: {
    helpTitle: 'Render self bio',
    helpText: 'This determines if your own bio will render the FSH ' +
      'special bio tags.'
  },
  renderOtherBios: {
    helpTitle: 'Render other players&#39; bios',
    helpText: 'This determines if other players bios will render the FSH ' +
      'special bio tags.'
  },
  showStatBonusTotal: {
    helpTitle: 'Show Stat Bonus Total',
    helpText: 'This will show a total of the item stats when you ' +
      'mouseover an item on the profile screen.'
  },
  enableQuickDrink: {
    helpTitle: 'Enable Quick Drink/Wear',
    helpText: 'This enables the quick drink/wear functionality on the ' +
      'profile page.'
  },
  disableDeactivatePrompts: {
    helpTitle: 'Disable Deactivate Prompts',
    helpText: 'This disables the prompts for deactivating buffs on ' +
      'the profile page.'
  },
  enableAttackHelper: {
    helpTitle: 'Show Attack Helper',
    helpText: 'This will show extra information on the attack player ' +
      'screen about stats and buffs on you and your target',
    network: true
  },
  showPvPSummaryInLog: {
    helpTitle: 'Show PvP Summary in Log',
    helpText: 'This will show a summary of the PvP results in the log.',
    network: true
  },
  autoFillMinBidPrice: {
    helpTitle: 'Auto Fill Min Bid Price',
    helpText: 'This enables the functionality to automatically fill in ' +
      'the min bid price so you just have to hit bid and your bid will ' +
      'be placed.'
  },
  hideRelicOffline: {
    helpTitle: 'Hide Relic Offline',
    helpText: 'This hides the relic offline defenders checker.'
  },
  enterForSendMessage: {
    helpTitle: 'Enter Sends Message',
    helpText: 'If enabled, will send a message from the Send Message ' +
      'screen if you press enter. You can still insert a new line by ' +
      'holding down shift when you press enter.'
  },
  navigateToLogAfterMsg: {
    helpTitle: 'Navigate After Message Sent',
    helpText: 'If enabled, will navigate to the referring page after a ' +
      'successful message is sent. Example:  if you are on the world ' +
      'screen and hit message on the guild info panel after you send the ' +
      'message, it will return you to the world screen.'
  },
  moveComposingButtons: {
    helpTitle: 'Move Composing Buttons',
    helpText: 'If enabled, will move composing buttons to the top of ' +
      'the composing screen.'
  },
  draggableHelperMenu: {
    helpTitle: 'Draggable Helper Menu',
    helpText: 'If enabled, allows the helper menu to ' +
      'be dragged around the screen.'
  },
  draggableQuickLinks: {
    helpTitle: 'Draggable Quick Links',
    helpText: 'If enabled, allows the quick link box to ' +
      'be dragged around the screen.'
  },
  expandMenuOnKeyPress: {
    helpTitle: 'Expand Menu on Key Press',
    helpText: 'If enabled, expands the left hand menu ' +
      'when you use hotkeys.'
  },
  disableBreakdownPrompts: {
    helpTitle: 'Disable Breakdown Prompts',
    helpText: 'If enabled, will disable prompts when you breakdown items.' +
      '<br>NO REFUNDS OR DO-OVERS! Use at own risk.'
  },
  collapseNewsArchive: {
    helpTitle: 'Collapse News Archive',
    helpText: 'If enabled, will collapse news archives.'
  },
  collapseHallPosts: {
    helpTitle: 'Collapse Hall Posts',
    helpText: 'If enabled, will collapse hall posts.'
  },
  hideSubLvlCreature: {
    helpTitle: 'Hide Sub Level Creatures',
    helpText: 'If enabled, will hide creatures that are ' +
      'lower than the current realm level.'
  },
  hidePlayerActions: {
    helpTitle: 'Hide Player Actions',
    helpText: 'If enabled, will hide player actions.'
  },
  disableQuickWearPrompts: {
    helpTitle: 'Disable Use/Ext Prompts',
    helpText: 'If enabled, will disable prompts when you Use/Ext items.' +
      '<br>NO REFUNDS OR DO-OVERS! Use at own risk.',
    title: 'Disable Use/Ext<br>Prompts'
  },
  enableGuildActivityTracker: {
    helpTitle: 'Enable Guild Activity Tracker',
    helpText: 'If enabled, will track guild member activity over time.',
    network: true,
    title: 'Enable Tracker'
  },
  enableSeTracker: {
    helpTitle: 'Enable SE Tracker',
    helpText: 'If enabled, will track the last time each SE was killed.<br>' +
      'This is DIFFERENT from the usual FSH network activity.<br>' +
      'When this is enabled, if you have ANY game page open in a<br>' +
      'browser tab it will scan the SE Log every 10 minutes.<br>' +
      'You do not need auto-refresh for this to work.',
    network: true
  },
  showMonsterLog: {
    helpTitle: 'Keep Creature Log',
    helpText: 'This will show the creature log for each creature you see ' +
      'when you travel.',
    network: true
  },
  showTitanInfo: {
    helpTitle: 'Show Titan Info',
    helpText: 'This will show titan info in the action list.',
    network: true
  },
  wantedGuildMembers: {
    helpTitle: 'Show Guild Members',
    helpText: 'If enabled, will show guild members in the wanted bounty list.'
  }
};
