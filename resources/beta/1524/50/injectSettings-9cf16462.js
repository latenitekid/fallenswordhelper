import{o as e,z as t,h as n,W as i,S as s,X as a,Y as o,Z as l,D as r,_ as u,c as d,a0 as h,I as c,a1 as p,a2 as f,a3 as g,a4 as b,y as m}from"./calfSystem-617f9a5d.js"
import{c as y,t as k}from"./toggleVisibilty-a6d142e6.js"
import{c as v}from"./createSpan-b1cc2640.js"
import{j as w}from"./jConfirm-98c541b6.js"
import{n as L}from"./numberIsNaN-bf55a311.js"
import{s as S,n as G,h as B,i as T,j as x,a as M}from"./simpleCheckbox-af0b5ade.js"
import{i as C}from"./isChecked-8825c1a8.js"
import{f as N}from"./functionPasses-f7da3bd0.js"
import{h as P}from"./huntingBuffs-5c7d609b.js"
import{i as R}from"./isSelected-70ffb4dd.js"
var E=["gameHelpLink","guildSelf","guildSelfMessage","guildFrnd","guildFrndMessage","guildPast","guildPastMessage","guildEnmy","guildEnmyMessage","showAdmin","ajaxifyRankControls","detailedConflictInfo","enableLogColoring","enableChatParsing","enableCreatureColoring","hideNonPlayerGuildLogMessages","buyBuffsGreeting","renderSelfBio","renderOtherBios","defaultMessageSound","showSpeakerOnWorld","playNewMessageSound","highlightPlayersNearMyLvl","highlightGvGPlayersNearMyLvl","showCombatLog","showMonsterLog","showCreatureInfo","keepLogs","enableGuildInfoWidgets","enableOnlineAlliesWidgets","hideGuildInfoMessage","hideGuildInfoBuff","hideGuildInfoSecureTrade","hideGuildInfoTrade","huntingBuffs","huntingBuffsName","huntingBuffs2","huntingBuffs2Name","huntingBuffs3","huntingBuffs3Name","showHuntingBuffs","moveGuildList","moveOnlineAlliesList","moveFSBox","moveDailyQuest","hideQuests","hideQuestNames","hideRecipes","hideRecipeNames","doNotKillList","enableBioCompressor","sendGoldonWorld","goldRecipient","goldAmount","keepBuffLog","showQuickSendLinks","showQuickDropLinks","sendClasses","itemRecipient","currentGoldSentTotal","enableAllyOnlineList","enableEnemyOnlineList","allyEnemyOnlineRefreshTime","quickLinksTopPx","quickLinksLeftPx","draggableQuickLinks","enableActiveBountyList","bountyListRefreshTime","enableWantedList","wantedNames","wantedGuildMembers","fsboxlog","huntingMode","hideRelicOffline","enterForSendMessage","storeLastQuestPage","addAttackLinkToLog","showStatBonusTotal","newGuildLogHistoryPages","useNewGuildLog","enhanceChatTextEntry","enableMaxGroupSizeToJoin","maxGroupSizeToJoin","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","autoFillMinBidPrice","showPvPSummaryInLog","enableQuickDrink","enhanceOnlineDots","hideBuffSelected","fixBuffSelected","hideHelperMenu","keepHelperMenuOnScreen","draggableHelperMenu","showNextQuestSteps","hideChampionsGroup","hideElitesGroup","hideSEGroup","hideTitanGroup","hideLegendaryGroup","disableDeactivatePrompts","moveComposingButtons","showExtraLinks","expandMenuOnKeyPress","highlightPvpProtection","enableHistoryCompressor","statBarLinks","staminaCalculator","levelUpCalculator","resizeQuickBuff","joinAllLink","pageTwoLinks","addUfsgLinks","trackLadderReset","addServerNode","addScoutTowerLink","storeLastScavPage","recipeManagerLink","medalGuideLink","inventoryManagerLink","buffLogLink","combatLogLink","creatureLogLink","quickLinksLink","auctionSearchLink","onlinePlayersLink","findOtherLink","findBuffsLink","guildInventoryLink","newGuildLogLink","topRatedLink","enableMessageTemplates","wrapGuildChat","colorPlayerNames","addIgnoreLink","changeButtonLabels","fastDebuff","countAllyEnemy","fixFolderImages","componentWidgets","quickWearLink","selectAllLink","nekidButton","ajaxifyProfileSections","injectBuffGuide","statisticsWrap","showGuildRelationship","showQuickButtons","showBuffLevel","enableItemColoring","checkAllOfType","enableFolderFilter","moveXmasBox","privateMsgButtons","optInOnLadderPage","betaOptIn"]
function H(e,t){return r(`#fshSettingsTable ${e}[name="${t}"]`)}function I(e){return H("input",e)}function O(e){return H("select",e)}function A(e){const t=$('input[name^="blockedSkillList"]:visible',"#settingsTabs-4"),n=$(e.target)
t.prop("checked","Tick all buffs"===n.text()),"Tick all buffs"===n.text()?n.text("Untick all buffs"):n.text("Tick all buffs")}function z(){w("Clear localStorage","Are you sure you want to clear you localStorage?",(()=>{localStorage.clear()}))}function Q(e){const t=I(e)
"checkbox"===t.type?u(e,t.checked):u(e,t.value)}function W(e,t,n){const i=I(e),s=Number(i.value);(L(s)||s<=t)&&(i.value=n)}function F(){W("newGuildLogHistoryPages",1,25),W("maxGroupSizeToJoin",1,11),function(e){const t=O(e)
u(e,Number(t.value))}("combatEvaluatorBias"),function(e){const t=O(e)
u(e,t.value)}("enabledHuntingMode"),E.forEach(Q),i("FS Helper Settings Saved")}function j(){s("settingsPage","injectNotepadShowLogs"),a(o)}function q(){s("settingsPage","injectMonsterLog"),a(l)}function D(n){e(t(n[0]),n[1])}function J(n){e(t(n),k)}function U(){!function(){const i=v({id:"fshAllBuffs",className:"fshLink",textContent:"Tick all buffs"})
e(i,A)
const s=t("settingsTabs-4").children[0].rows[0].cells[0]
n(s,y()),n(s,i)}(),[["fshClearStorage",z],["Helper:SaveOptions",F],["Helper:ShowLogs",j],["Helper:ShowMonsterLogs",q]].forEach(D),["toggleShowGuildSelfMessage","toggleShowGuildFrndMessage","toggleShowGuildPastMessage","toggleShowGuildEnmyMessage"].forEach(J)}function K(e){d[e[0]]=c(e[1])}function V(){[["showBuffs","showHuntingBuffs"],["buffs","huntingBuffs"],["buffsName","huntingBuffsName"],["buffs2","huntingBuffs2"],["buffs2Name","huntingBuffs2Name"],["buffs3","huntingBuffs3"],["buffs3Name","huntingBuffs3Name"]].forEach(K),["doNotKillList","bountyListRefreshTime","wantedNames","combatEvaluatorBias","enabledHuntingMode"].forEach(h),d.storage=(JSON.stringify(localStorage).length/5242880*100).toFixed(2)}function X(e,t){return e+S(t)}function Y(e){return e.reduce(X,"")}function _(){return`<tr><th colspan="2"><b>Bounty hunting preferences</b></th></tr><tr><td align= "right">${G}Show Active Bounties${B("Show Active Bounties","This will show your active bounties on the right hand side")}:</td><td colspan="3"><input name="enableActiveBountyList" type = "checkbox" value = "on"${C(d.enableActiveBountyList)}>&nbsp;<input name="bountyListRefreshTime" size="3" value="${d.bountyListRefreshTime}"> seconds refresh</td></tr><tr><td align= "right">${G}Show Wanted Bounties${B("Show Wanted Bounties","This will show when someone you want is on the bounty board, the list is displayed on the right hand side")}:</td><td colspan="3"><input name="enableWantedList" type="checkbox" value="on"${C(d.enableWantedList)}> Refresh time is same as Active Bounties<tr><td align= "right">Wanted Names${B("Wanted Names","The names of the people you want to see on the bounty board separated by commas (or * for all)")}:</td><td colspan="3"><input name="wantedNames" size="60" value="${d.wantedNames}"></td></tr>${Y(["wantedGuildMembers","showPvPSummaryInLog"])}`}function Z(){return`<tr><th colspan="2"><b>Equipment screen preferences</b></th></tr>${Y(["showExtraLinks","enableItemColoring","checkAllOfType","enableFolderFilter"])}<tr><td class="fshRight">${G}Show Quick Send Item${B("Show Quick Send on Manage Backpack","This will show a link beside each item which gives the option to quick send the item to this person")}:</td><td><input name="showQuickSendLinks" type="checkbox" value="on"${T("showQuickSendLinks")}>&nbsp;&nbsp;Send Items To <input name="itemRecipient" size="10" value="${c("itemRecipient")}">${S("showQuickDropLinks")}<tr><td class="fshRight">Quick Select all of type in Send Screen${B("Quick Select all of type in Send Screen","This allows you to customize what quick links you would like displayed in your send item screen.<br>Use the format [&quot;name&quot;,&quot;itemid&quot;],[&quot;othername&quot;,&quot;itemid2&quot;].<br>WARNING: NO REFUNDS ON ERROR")}:</td><td><input name="sendClasses" size="60" value="${p(c("sendClasses"))}">`}const ee=["moveGuildList","moveOnlineAlliesList"],te=["enableOnlineAlliesWidgets","moveDailyQuest","moveXmasBox","moveFSBox","fsboxlog","gameHelpLink","enableTempleAlert","enableUpgradeAlert","enableComposingAlert","enhanceOnlineDots","hideBuffSelected","fixBuffSelected","hideHelperMenu","keepHelperMenuOnScreen","draggableHelperMenu"],ne=["draggableQuickLinks","expandMenuOnKeyPress","statBarLinks","staminaCalculator","levelUpCalculator","resizeQuickBuff","addServerNode","addScoutTowerLink"]
function ie(){return`<tr><th colspan="2"><b>General preferences (apply to most screens)</b></th></tr><tr><td class="fshRight"><label for="enableGuildInfoWidgets">Enable Guild Info Widgets${B("Enable Guild Info Widgets","Enabling this option will enable the Guild Info Widgets (coloring on the Guild Info panel)")}:</label></td><td><input id="enableGuildInfoWidgets" name="enableGuildInfoWidgets" type="checkbox" value="on"${C(d.enableGuildInfoWidgets)}>&nbsp;<label>Hide Message&gt;<input name="hideGuildInfoMessage" type="checkbox" value="on"${C(d.hideGuildInfoMessage)}></label>&nbsp;<label>Hide Buff&gt;<input name="hideGuildInfoBuff" type="checkbox" value="on"${C(d.hideGuildInfoBuff)}></label>&nbsp;<label>Hide ST&gt;<input name="hideGuildInfoSecureTrade" type="checkbox" value="on"${C(d.hideGuildInfoSecureTrade)}></label>&nbsp;<label>Hide Trade&gt;<input name="hideGuildInfoTrade" type="checkbox" value="on"${C(d.hideGuildInfoTrade)}></label></td></tr>${Y(ee)}<tr><td class="fshRight">${G}Show Online Allies/Enemies${B("Show Online Allies/Enemies","This will show the allies/enemies online list on the right.")}:</td><td><label>Allies&nbsp;<input name="enableAllyOnlineList" type="checkbox" value="on"${C(d.enableAllyOnlineList)}></label>&nbsp;&nbsp;<label>Enemies&nbsp;<input name="enableEnemyOnlineList" type="checkbox" value="on"${C(d.enableEnemyOnlineList)}></label>&nbsp;&nbsp;<input name="allyEnemyOnlineRefreshTime" size="3" value="${c("allyEnemyOnlineRefreshTime")}"> seconds refresh</td></tr>${Y(te)}<tr><td class="fshRight">Quick Links Screen Location${B("Quick Links Screen Location","Determines where the quick links dialog shows on the screen. Default is top 22, left 0.")}:</td><td>Top: <input name="quickLinksTopPx" size="3" value="${c("quickLinksTopPx")}"> Left: <input name="quickLinksLeftPx" size="3" value="${c("quickLinksLeftPx")}"></td></tr>${Y(ne)}`}function se(e){let t="",n=""
return"Self"===e&&(t=' title="This is automatically detected"',n=" disabled"),`<input${t} name="guild${e}" size="60" value="${c(`guild${e}`)}"${n}><span class="fshPoint" id="toggleShowGuild${e}Message" data-linkto="showGuild${e}Message"> &#x00bb;</span><div id="showGuild${e}Message" class="fshHide"><input name="guild${e}Message" size="60" value="${c(`guild${e}Message`)}"></div>`}function ae(){return`<tr><th colspan="2"><b>Guild>Manage preferences</b></th></tr>${S("showGuildRelationship")}<tr><td colspan="2">Enter guild names, separated by commas</td></tr><tr><td class="fshRight">Own Guild</td><td>${se("Self")}</td></tr><tr><td class="fshRight">Friendly Guilds</td><td>${se("Frnd")}</td></tr><tr><td class="fshRight">Old Guilds</td><td>${se("Past")}</td></tr><tr><td class="fshRight">Enemy Guilds</td><td>${se("Enmy")}</td></tr><tr><td class="fshRight">Highlight Valid PvP Targets${B("Highlight Valid PvP Targets","Enabling this option will highlight targets in OTHER guilds that are within your level range to attack for PvP or GvG.")}:</td><td>PvP: <input name="highlightPlayersNearMyLvl" type="checkbox" value="on"${T("highlightPlayersNearMyLvl")}> GvG: <input name="highlightGvGPlayersNearMyLvl" type="checkbox" value="on"${T("highlightGvGPlayersNearMyLvl")}></td></tr>${Y(["showAdmin","ajaxifyRankControls","detailedConflictInfo","enableHistoryCompressor"])}`}function oe(){return`<tr><th colspan="2"><b>Left Hand Menu Additional Links</b></th></tr><tr><th colspan="2">Warning: Changes to the left hand menu have a significant impact on page load performance</th></tr>${Y(f)}`}function le(){return`<tr><th colspan="2"><b>Log screen preferences</b></th></tr>${Y(["hideNonPlayerGuildLogMessages","useNewGuildLog"])}<tr><td class="fshRight">New Guild Log History${B("New Guild Log History (pages)","This is the number of pages that the new guild log screen will go back in history.")}:</td><td><input name="newGuildLogHistoryPages" size="3" value="${c("newGuildLogHistoryPages")}"></td></td></tr>${S("enableLogColoring")}<tr><td class="fshRight">New Log Message Sound${B("New Log Message Sound","The .wav or .ogg file to play when you have unread log messages. This must be a .wav or .ogg file. This option can be turned on/off on the world page. Only works in Firefox 3.5+")}:</td><td colspan="3"><input name="defaultMessageSound" size="60" value="${c("defaultMessageSound")}"></td></tr><tr><td class="fshRight">Play sound on unread log${B("Play sound on unread log","Should the above sound play when you have unread log messages? (will work on Firefox 3.5+ only)")}:</td><td><input name="playNewMessageSound" type="checkbox" value="on"${T("playNewMessageSound")}> Show speaker on world${B("Show speaker on world","Should the toggle play sound speaker show on the world map? (This icon is next to the Fallensword wiki icon and will only display on Firefox 3.5+)")}:<input name="showSpeakerOnWorld" type="checkbox" value="on"${T("showSpeakerOnWorld")}></tr></td>${Y(["enableChatParsing","keepBuffLog","addAttackLinkToLog","colorPlayerNames","addIgnoreLink","changeButtonLabels","privateMsgButtons","enhanceChatTextEntry","wrapGuildChat"])}`}function re(){return`<tr><th colspan="2"><b>Other preferences</b></th></tr>${S("autoFillMinBidPrice")}<tr><td class="fshRight">Hide Specific Recipes${B("Hide Specific Recipes","If enabled, this hides recipes whose name matches the list (separated by commas). This works on Recipe Manager")}:</td><td colspan="3"><input name="hideRecipes" type="checkbox" value="on"${T("hideRecipes")}>&nbsp;<input name="hideRecipeNames" size="60" value="${c("hideRecipeNames")}"></td></tr>${Y(["hideRelicOffline","enterForSendMessage","enableMessageTemplates","joinAllLink"])}<tr><td align= "right">Max Group Size to Join${B("Max Group Size to Join","This will disable HCSs Join All functionality and will only join groups less than a set size. ")}:</td><td colspan="3"><input name="enableMaxGroupSizeToJoin" type = "checkbox" value = "on"${T("enableMaxGroupSizeToJoin")}>&nbsp;&nbsp;Max Size: <input name="maxGroupSizeToJoin" size="3" value="${c("maxGroupSizeToJoin")}"></td></tr>${Y(["moveComposingButtons","pageTwoLinks","addUfsgLinks","trackLadderReset","optInOnLadderPage","storeLastScavPage","betaOptIn"])}`}function ue(e,t,n,i){return`<tr><td class="fshRight">${e} Hunting Buff List${B(`${e} Hunting Buff List`,`${e} list of hunting buffs.`)}:</td><td colspan="3"><input name="${t}" title="Hunting mode name" size="7" value="${e}"><input name="${n}" size="49" value="${i}"></td></tr>`}function de(){return`<tr><th colspan="2"><b>World screen/Hunting preferences</b></th></tr><tr><td class="fshRight">Hide Create Group Button${B("Hide Create Group Button","Enabling this option will hide the Create Group button")}:</td><td><input name="hideChampionsGroup" type="checkbox" value="on"${T("hideChampionsGroup")}>&nbsp;Champions&nbsp;&nbsp;<input name="hideElitesGroup" type="checkbox" value="on"${T("hideElitesGroup")}>&nbsp;Elites&nbsp;&nbsp;<input name="hideSEGroup" type="checkbox" value="on"${T("hideSEGroup")}>&nbsp;Super Elite&nbsp;&nbsp;<input name="hideTitanGroup" type="checkbox" value="on"${T("hideTitanGroup")}>&nbsp;Titan&nbsp;&nbsp;<input name="hideLegendaryGroup" type="checkbox" value="on"${T("hideLegendaryGroup")}>&nbsp;Legendary</td></tr><tr><td class="fshRight">Keep Combat Logs${B("Keep Combat Logs","Save combat logs to a temporary variable. Press <u>Show logs</u> on the right to display and copy them")}:</td><td><input name="keepLogs" type="checkbox" value="on"${T("keepLogs")}>&nbsp;&nbsp;<input type="button" class="custombutton" value="Show Logs" id="Helper:ShowLogs"></td></tr>${Y(["showCombatLog","enableCreatureColoring","showCreatureInfo"])}${[`<tr><td class="fshRight">Combat Evaluator Bias${B("Combat Evaluator Bias","This changes the bias of the combat evaluator for the damage and HP evaluation. It will not change the attack bias (1.1053).<br>Conservative = 1.1053 and 1.1 (Safest)<br>Semi-Conservative = 1.1 and 1.053<br>Adventurous = 1.053 and 1 (Bleeding Edge)<br>Conservative+ = 1.1053 and 1 with the attack calculation changed to +-48 per RJEM")}:</td><td><select name="combatEvaluatorBias"><option value="0"${R(d.combatEvaluatorBias,0)}>Conservative</option><option value="1"${R(d.combatEvaluatorBias,1)}>Semi-Conservative</option><option value="2"${R(d.combatEvaluatorBias,2)}>Adventurous</option><option value="3"${R(d.combatEvaluatorBias,3)}>Conservative+</option></select></td></tr>`,`<tr><td class="fshRight">${x("showMonsterLog")}</td><td>${M("showMonsterLog")}&nbsp;&nbsp;<input type="button" class="custombutton" value="Show" id="Helper:ShowMonsterLogs"></td></tr>`,`<tr><td class="fshRight">Show Send Gold${B("Show Gold on World Screen","This will show an icon below the world map to allow you to quickly send gold to a Friend.")}:</td><td><input name="sendGoldonWorld" type="checkbox" value="on"${T("sendGoldonWorld")}>&nbsp;&nbsp;Send <input name="goldAmount" size="5" value="${c("goldAmount")}"> gold to <input name="goldRecipient" size="10" value="${c("goldRecipient")}"> Current total: <input name="currentGoldSentTotal" size="5" value="${c("currentGoldSentTotal")}"></td></tr>`,`<tr><td class="fshRight">Do Not Kill List${B("Do Not Kill List","List of creatures that will not be killed by quick kill. You must type the full name of each creature, separated by commas. Creature name will show up in red color on world screen and will not be killed by keyboard entry (but can still be killed by mouseclick). Quick kill must be enabled for this function to work.")}:</td><td colspan="3"><input name="doNotKillList" size="60" value="${d.doNotKillList}"></td></tr>`,P(),ue(d.buffsName,"huntingBuffsName","huntingBuffs",d.buffs)+ue(d.buffs2Name,"huntingBuffs2Name","huntingBuffs2",d.buffs2)+ue(d.buffs3Name,"huntingBuffs3Name","huntingBuffs3",d.buffs3)].join("")}${S("huntingMode")}`}const he=["showQuickButtons","renderSelfBio","renderOtherBios","enableBioCompressor"]
const ce=["showStatBonusTotal","ajaxifyProfileSections","statisticsWrap","quickWearLink","nekidButton","selectAllLink","enableQuickDrink","fixFolderImages","componentWidgets","fastDebuff","disableDeactivatePrompts","injectBuffGuide","showBuffLevel","countAllyEnemy","highlightPvpProtection"]
function pe(){return`<tr><th colspan="2"><b>Profile preferences</b></th></tr>${Y(he)}<tr><td class="fshRight">Buy Buffs Greeting${B("Buy Buffs Greeting","This is the default text to open a message with when asking to buy buffs. You can use {playername} to insert the target players name. You can also use {buffs} to insert the list of buffs. You can use {cost} to insert the total cost of the buffs.")}:</td><td colspan="3"><input name="buyBuffsGreeting" size="60" value="${c("buyBuffsGreeting")}"></td></tr>${Y(ce)}`}function fe(){return`<tr><th colspan="2"><b>Quest preferences</b></th></tr><tr><td class="fshRight">Hide Specific Quests${B("Hide Specific Quests","If enabled, this hides quests whose name matches the list (separated by commas).")}:</td><td colspan="3"><input name="hideQuests" type="checkbox" value="on"${T("hideQuests")}>&nbsp;<input name="hideQuestNames" size="60" value="${c("hideQuestNames")}"></td></tr>${Y(["storeLastQuestPage","showNextQuestSteps"])}`}function ge(e,t,n,i){let s=`${e}<a href="${b}${t[0]}">${t[1]}</a>`
return n===i.length-2?s+=" and ":n!==i.length-1&&(s+=", "),s}function be(e){return e.reduce(ge,"")}function me(){d.configData=`<form><table id="fshSettingsTable"><thead><th colspan="2"><b>Fallen Sword Helper configuration Settings</b></th></thead><tr><td align=center><input id="fshClearStorage" type="button" class="awesome magenta tip-static" value="Clear Storage" data-tipped="<span class='fshHelpTitle'>Clear Storage</span><br><br>This will clear all localStorage related to fallensword.com<br>It will reset all your Helper settings to defaults<br>Use it if your storage has overflowed or become corrupt"></td><td align=center><span style="font-size:x-small">(Current version: ${d.fshVer}(${d.calfVer})) (Storage Used: ${d.storage}% Remaining: ${(100-d.storage).toFixed(2)}%)</span></td></tr><tr><td colspan="2" align=center><span style="font-weight:bold;">Visit the <a href="https://github.com/fallenswordhelper/fallenswordhelper">Fallen Sword Helper web site</a> for any suggestions, requests or bug reports</span></td></tr>${[ie,oe,ae,de,le,Z,fe,pe,_,re].map(N).join("")}<tr><td colspan="2" align=center><input type="button" class="custombutton" value="Save" id="Helper:SaveOptions"></td></tr><tr><td colspan="2" align=center><a href="${g}savesettings">Export or Load Settings!</a></td></tr><tr><td colspan="2" align=center><span class="fshXXSmall">Fallen Sword Helper was coded by ${be([["1393340","Coccinella"],["1599987","yuuzhan"],["1963510","PointyHair"],["1346893","Tangtop"],["2536682","dkwizard"],["1570854","jesiegel"],["2156859","ByteBoy"],["2169401","McBush"]])}, with valuable contributions by ${be([["524660","Nabalac"],["37905","Ananasii"],["1674838","Lusterless"]])}</span></td></tr></table></form>`}function ye(e){var t
V(),me(),(t=e).find(".ui-tabs-nav").append('<li><a href="#fshSettings">FSH</a></li>'),t.append(`<div id="fshSettings"><p>${d.configData}</p></div>`),t.tabs("refresh"),U(),u("minGroupLevel",r('input[name="min_group_level"]').value)}function ke(){if(m())return
const e=$("#settingsTabs")
e.tabs("instance")&&ye(e)}export default ke
//# sourceMappingURL=injectSettings-9cf16462.js.map
