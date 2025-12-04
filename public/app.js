async function carregarDados() {
  try {
    const trilhas = await fetch("/api/trails").then(r => r.json());
    const lugares = await fetch("/api/lugares").then(r => r.json());
    const recomendacoes = await fetch("/api/recomendacoes").then(r => r.json());

    // --- Trilhas ---
    const trilhasDiv = document.getElementById("trilhas");
    trilhasDiv.innerHTML = "";
    trilhas.forEach(t => {
      trilhasDiv.innerHTML += `
        <div class="card">
          <h3>${t.name} ${t.available ? "<span class='tag'>ABERTA</span>" : "<span class='tag' style='background:#c62828'>FECHADA</span>"}</h3>
          <p>${t.description}</p>
          <p><strong>Período:</strong> ${t.season_start} até ${t.season_end}</p>
          <p><strong>Regras:</strong> ${t.rules}</p>
        </div>
      `;
    });

    // --- Lugares ---
    const lugaresDiv = document.getElementById("lugares");
    lugaresDiv.innerHTML = "";
    lugares.forEach(l => {
      lugaresDiv.innerHTML += `
        <div class="card">
          <h3>${l.name}</h3>
          <p>${l.description}</p>
          <p><strong>Regras:</strong> ${l.rules}</p>
        </div>
      `;
    });

    // --- Recomendações ---
    const recDiv = document.getElementById("recomendacoes");
    recDiv.innerHTML = "";
    recomendacoes.forEach(r => {
      recDiv.innerHTML += `
        <div class="card">
          <h3>${r.title}</h3>
          <p>${r.text}</p>
        </div>
      `;
    });

  } catch (err) {
    console.error("Erro ao carregar dados:", err);
  }
}

carregarDados();
