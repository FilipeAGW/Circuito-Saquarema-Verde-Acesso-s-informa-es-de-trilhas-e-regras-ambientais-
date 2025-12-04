let token = "";

function login() {
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;

  fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  .then(r => r.json())
  .then(data => {
    if (data.token) {
      token = data.token;
      document.getElementById("loginStatus").innerText = "Login realizado!";
    } else {
      document.getElementById("loginStatus").innerText = "Erro no login!";
    }
  });
}

/* ---------------- TRILHAS ---------------- */
function criarTrilha() {
  fetch("/api/admin/trails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify({
      name: document.getElementById("tNome").value,
      description: document.getElementById("tDesc").value,
      rules: document.getElementById("tRules").value,
      season_start: document.getElementById("tStart").value,
      season_end: document.getElementById("tEnd").value,
      available: document.getElementById("tAtiva").value === "true"
    })
  }).then(r => alert("Trilha cadastrada!"));
}

/* ---------------- LUGARES ---------------- */
function criarLugar() {
  fetch("/api/admin/lugares", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify({
      name: document.getElementById("lNome").value,
      description: document.getElementById("lDesc").value,
      rules: document.getElementById("lRules").value
    })
  }).then(() => alert("Lugar cadastrado!"));
}

/* ---------------- RECOMENDAÇÕES ---------------- */
function criarRecomendacao() {
  fetch("/api/admin/recomendacoes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify({
      title: document.getElementById("rTitulo").value,
      text: document.getElementById("rTexto").value
    })
  }).then(() => alert("Recomendação cadastrada!"));
}
