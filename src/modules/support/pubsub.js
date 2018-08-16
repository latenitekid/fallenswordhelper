/*
Based on
https://github.com/addyosmani/pubsubz
*/

import add from './task';

var topics = {};
var subUid = -1;

export function publish(topic, args) {
  if (!topics[topic]) {return;}
  topics[topic].forEach(function(el) {
    add(3, el.func, [args]);
  });
  return true; // probably not needed
}

export function subscribe(topic, func) {
  if (!topics[topic]) {topics[topic] = [];}
  subUid += 1;
  var token = subUid.toString();
  topics[topic].push({token: token, func: func});
  return token;
}

function hasSub(token, subs) {
  return function(el, i) {
    if (el.token === token) {
      subs.splice(i, 1);
      return true;
    }
  };
}

function hasTopic(token) {
  return function(subs) {
    return subs.some(hasSub(token, subs));
  };
}

export function unsubscribe(token) {
  if (topics.values().some(hasTopic(token))) {return token;}
}
