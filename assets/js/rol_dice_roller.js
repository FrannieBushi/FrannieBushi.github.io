document.getElementById('tirar-dados').addEventListener('click', () => {
    const bonificadores = parseInt(document.getElementById('bonificadores').value) || 0;
    const tipoDado = parseInt(document.getElementById('tipo-dado').value);
    const cantidadDados = parseInt(document.getElementById('cantidad-dados').value);

    let total = 0;
    let tiradas = [];

    for (let i = 0; i < cantidadDados; i++) {
        const resultado = Math.floor(Math.random() * tipoDado) + 1;
        tiradas.push(resultado);
        total += resultado;
    }

    total += bonificadores;

    document.getElementById('resultado-tiradas').textContent = `Tiradas: ${tiradas.join(', ')} | Total (con bonificadores): ${total}`;
});
