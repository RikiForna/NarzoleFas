"use strict";
// === PLAYER CARDS + LOGO INTERACTIONS ===
document.addEventListener("DOMContentLoaded", function () {
  const staffMembers = [
    {
      name: "PRES", // Cambia con nome reale
      image: "img/Screenshot_2025-06-07_161605-removebg-preview.png",
      role: "Presidente",
      penalties: [],
    },
    {
      name: "PIPPO",
      image: "img/mr.png",
      role: "Allenatore",
    },
  ];

  const staffContainer = document.getElementById("staff-container");

  staffMembers.forEach((member) => {
    const card = document.createElement("div");
    card.className = "staff-card";
    card.innerHTML = `
    <div class="role">${member.role}</div>
    <img src="${member.image}" alt="${member.name}" style="width:100%; height:180px; object-fit:cover; border-radius:12px; margin-bottom: 10px;">
    <div class="name">${member.name}</div>
  `;
    staffContainer.appendChild(card);
  });

  const players = [
    {
      name: "PANERO",
      image: "img/pane.png",
      rating: 64,
      position: "ATT",
      stats: { PAC: 90, SHO: 70, PAS: 65, DRI: 71, DEF: 46, PHY: 68 },
      matches: [
        { opponent: "JPI", goals: 3, assists: 0, rating: 8.5 },
        { opponent: "Rocca Boys", goals: 0, assists: 0, rating: 6.5 },
      ],
    },
    {
      name: "PEPE",
      image: "img/Screenshot_2025-06-07_161706-removebg-preview.png",
      rating: 63,
      position: "CMD",
      stats: { PAC: 94, SHO: 66, PAS: 66, DRI: 70, DEF: 62, PHY: 57 },
      matches: [
        { opponent: "JPI", goals: 4, assists: 0, rating: 9 },
        { opponent: "Rocca Boys", goals: 2, assists: 0, rating: 8 },
      ],
    },
    {
      name: "CURTI",
      image: "img/curti.png",
      rating: 64,
      position: "LW",
      stats: { PAC: 87, SHO: 72, PAS: 70, DRI: 88, DEF: 45, PHY: 70 },
      matches: [
        { opponent: "JPI", goals: 3, assists: 5, rating: 9.5 },
        { opponent: "Rocca Boys", goals: 1, assists: 2, rating: 9 },
      ],
    },
    {
      name: "COLOMBANO",
      image: "img/cholo.png",
      rating: 61,
      position: "CM",
      stats: { PAC: 82, SHO: 80, PAS: 78, DRI: 70, DEF: 80, PHY: 80 },
      matches: [
        { opponent: "JPI", goals: 2, assists: 1, rating: 8 },
        { opponent: "Rocca Boys", goals: 3, assists: 1, rating: 9 },
      ],
    },
    {
      name: "HILA",
      image: "img/rajan.png",
      rating: 59,
      position: "ATT",
      stats: { PAC: 65, SHO: 60, PAS: 63, DRI: 63, DEF: 40, PHY: 56 },
      matches: [
        { opponent: "JPI", goals: 0, assists: 1, rating: 6.5 },
        { opponent: "Rocca Boys", goals: 0, assists: 0, rating: 6.5 },
      ],
    },
    {
      name: "COGNO",
      image: "img/nico.png",
      rating: 56,
      position: "ATT",
      stats: { PAC: 45, SHO: 75, PAS: 43, DRI: 58, DEF: 30, PHY: 63 },
      matches: [
        { opponent: "JPI", goals: 0, assists: 0, rating: 6.5 },
        { opponent: "Rocca Boys", goals: 1, assists: 0, rating: 7 },
      ],
    },
    {
      name: "VECCHIO",
      image: "img/vecchio.png",
      rating: 60,
      position: "ATT",
      stats: { PAC: 65, SHO: 66, PAS: 68, DRI: 65, DEF: 52, PHY: 80 },
      matches: [
        { opponent: "JPI", goals: 0, assists: 0, rating: 4.5 },
        { opponent: "Rocca Boys", goals: 2, assists: 0, rating: 9.5 },
      ],
    },
    {
      name: "VACCHETTA",
      image: "img/vacche.png",
      rating: 63,
      position: "DC",
      stats: { PAC: 70, SHO: 58, PAS: 67, DRI: 68, DEF: 72, PHY: 74 },
      matches: [
        { opponent: "JPI", goals: 0, assists: 0, rating: 7.5 },
        { opponent: "Rocca Boys", goals: 0, assists: 0, rating: 7 },
      ],
    },
    {
      name: "OLOCCO",
      image: "img/gabbo.png",
      rating: 57,
      position: "DC",
      stats: { PAC: 58, SHO: 56, PAS: 43, DRI: 50, DEF: 70, PHY: 88 },
      matches: [
        { opponent: "JPI", goals: 0, assists: 0, rating: 6.5 },
        { opponent: "Rocca Boys", goals: 2, assists: 0, rating: 7 },
      ],
    },
    {
      name: "MEGERA",
      image: "img/meggy.png",
      rating: 56,
      position: "DC",
      stats: { PAC: 65, SHO: 60, PAS: 55, DRI: 57, DEF: 63, PHY: 58 },
      matches: [
        { opponent: "JPI", goals: 0, assists: 0, rating: 7 },
        { opponent: "Rocca Boys", goals: 0, assists: 0, rating: 6 },
      ],
    },
    {
      name: "LANZA",
      image: "img/Screenshot_2025-06-07_161443-removebg-preview.png",
      rating: 63,
      position: "POR",
      stats: { DIV: 82, HAN: 80, KIC: 78, REF: 85, SPD: 90, POS: 80 },
      matches: [
        { opponent: "JPI", goals: 0, assists: 3, rating: 8 },
        { opponent: "Rocca Boys", goals: 0, assists: 0, rating: 7 },
      ],
    },
  ];

  // Carica i dati salvati dal localStorage, se esistono
  /*const savedData = localStorage.getItem("playersData");
  if (savedData) {
    const parsed = JSON.parse(savedData);
    parsed.forEach((savedPlayer) => {
      const player = players.find((p) => p.name === savedPlayer.name);
      if (player) {
        player.matches = savedPlayer.matches;
      }
    });
  }
    */

  const container = document.getElementById("players-container");

  const modal = document.getElementById("playerModal");
  const span = document.getElementsByClassName("close")[0];
  const statsBtn = document.getElementById("viewStatsBtn");
  const statsScreen = document.getElementById("playerStatsScreen");
  const statsName = document.getElementById("statsName");
  const statsImage = document.getElementById("statsImage");
  const statsList = document.getElementById("detailedStats");
  const backBtn = document.getElementById("backToModalBtn");

  let selectedPlayer = null;

  function renderMatchTable() {
    const matchTableBody = document.querySelector("#matchTable tbody");
    matchTableBody.innerHTML = "";
    const maxRating = Math.max(...selectedPlayer.matches.map((m) => m.rating));

    if (selectedPlayer.matches && selectedPlayer.matches.length > 0) {
      selectedPlayer.matches.forEach((match) => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${match.opponent}</td>
        <td>${match.goals}</td>
        <td>${match.assists}</td>
        <td style="font-weight: bold; color: ${
          match.rating === maxRating ? "lime" : "white"
        };">
    ${match.rating}
  </td>
      `;
        matchTableBody.appendChild(row);
      });
    } else {
      const row = document.createElement("tr");
      row.innerHTML = `<td colspan="4" style="text-align:center">Nessuna partita giocata</td>`;
      matchTableBody.appendChild(row);
    }
  }

  players.forEach((player) => {
    const savedData = localStorage.getItem("playersData");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      parsed.forEach((savedPlayer) => {
        const found = players.find((p) => p.name === savedPlayer.name);
        if (found) {
          found.matches = savedPlayer.matches;
        }
      });
    }
    let statsLine = "";
    if (player.name === "LANZA") {
      // Stats specifiche per portiere
      statsLine = `
  <span>${player.stats.DIV}</span>
  <span>${player.stats.HAN}</span>
  <span>${player.stats.KIC}</span>
  <span>${player.stats.REF}</span>
  <span>${player.stats.SPD}</span>
  <span>${player.stats.POS}</span>
  `;
    } else {
      statsLine = `
  <span>${player.stats.PAC}</span>
  <span>${player.stats.SHO}</span>
  <span>${player.stats.PAS}</span>
  <span>${player.stats.DRI}</span>
  <span>${player.stats.DEF}</span>
  <span>${player.stats.PHY}</span>
  `;
    }

    const card = document.createElement("div");
    card.className = "fifa-card";
    card.innerHTML = `
      <div class="overlay">
      <div class="player-rating">
        <div class="rating">${player.rating}</div>
        <div class="position">${player.position}</div>
      </div>
      <img src="${player.image}" alt="${player.name}" class="player-img" />
      <div class="player-name">${player.name}</div>
      <div class="stats-line">
        ${statsLine}
      </div>
      </div>
    `;

    card.addEventListener("click", () => {
      selectedPlayer = player;
      // 🔁 Nasconde eventuali grafici lasciati aperti
      document.getElementById("playerChart").style.display = "none";
      document.getElementById("toggleChartBtn").textContent =
        "Mostra Andamento Voti";

      document.getElementById("radarChartCanvas").style.display = "none";
      document.getElementById("radarChartBtn").textContent =
        "Confronta con altri";

      const contributionBox = document.getElementById("contributionResult");
      if (contributionBox) contributionBox.style.display = "none";

      document.getElementById("modalName").textContent = player.name;
      document.getElementById(
        "modalPosition"
      ).textContent = `Posizione: ${player.position}`;
      if (player.name === "LANZA") {
        document.getElementById("modalStats").textContent =
          `Statistiche: DIV ${player.stats.DIV}, HAN ${player.stats.HAN}, KIC ${player.stats.KIC}, ` +
          `REF ${player.stats.REF}, SPD ${player.stats.SPD}, POS ${player.stats.POS}`;
      } else {
        document.getElementById("modalStats").textContent =
          `Statistiche: PAC ${player.stats.PAC}, SHO ${player.stats.SHO}, PAS ${player.stats.PAS}, ` +
          `DRI ${player.stats.DRI}, DEF ${player.stats.DEF}, PHY ${player.stats.PHY}`;
      }

      document.getElementById("modalImage").src = player.image;
      document.getElementById("modalImage").alt = player.name;
      modal.style.display = "block";
    });

    container.appendChild(card);
  });

  // Chiusura modale con la X
  span.onclick = function () {
    modal.style.display = "none";
  };

  // Click fuori dalla modale
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Stats button -> apre schermata dettagliata
  statsBtn.onclick = function () {
    if (!selectedPlayer) return;

    modal.style.display = "none";
    statsImage.src = selectedPlayer.image;
    statsImage.alt = selectedPlayer.name;

    statsScreen.style.display = "block";
    renderMatchTable();

    // Quando apro un nuovo giocatore: resetto il grafico
    if (playerChartInstance) {
      playerChartInstance.destroy();
      playerChartInstance = null;
    }
    chartCanvas.style.display = "none";
    chartBtn.textContent = "Mostra Andamento Voti";

    /* const matchTableBody = document.querySelector("#matchTable tbody");
    matchTableBody.innerHTML = ""; // pulisce tabella precedente

    if (selectedPlayer.matches && selectedPlayer.matches.length > 0) {
      selectedPlayer.matches.forEach((match) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td>${match.opponent}</td>
      <td>${match.goals}</td>
      <td>${match.assists}</td>
      <td>${match.rating}</td>
    `;
        matchTableBody.appendChild(row);
      });
    } else {
      const row = document.createElement("tr");
      row.innerHTML = `<td colspan="4" style="text-align:center">Nessuna partita giocata</td>`;
      matchTableBody.appendChild(row);
    }
    */
  };

  const chartBtn = document.getElementById("toggleChartBtn");
  const chartCanvas = document.getElementById("playerChart");
  let playerChartInstance = null;

  chartBtn.onclick = () => {
    if (!selectedPlayer || !selectedPlayer.matches) return;

    // Toggle visibilità
    if (chartCanvas.style.display === "none") {
      chartCanvas.style.display = "block";
      chartBtn.textContent = "Nascondi Andamento Voti";

      const labels = selectedPlayer.matches.map(
        (match, index) => `Partita ${index + 1} (${match.opponent})`
      );
      const ratings = selectedPlayer.matches.map((match) => match.rating);

      // Distruggi grafico precedente se esiste
      if (playerChartInstance) {
        playerChartInstance.destroy();
      }

      const average = (
        ratings.reduce((a, b) => a + b, 0) / ratings.length
      ).toFixed(2);

      playerChartInstance = new Chart(chartCanvas, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Voto Partita",
              data: ratings,
              fill: false,
              borderColor: "#00ffff",
              tension: 0.3,
              pointBackgroundColor: ratings.map((v) => {
                if (v >= 7.5) return "lime"; // Ottimo
                if (v >= 6.5) return "orange"; // Buono
                return "red"; // Scarso
              }),

              pointRadius: 6,
              pointHoverRadius: 8,
            },
            {
              label: `Media Voto (${average})`,
              data: ratings.map(() => average),
              borderDash: [10, 5],
              borderColor: "#ffffff88",
              pointRadius: 0,
              tension: 0.3,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              suggestedMin: 5,
              suggestedMax: 10,
              ticks: { color: "white" },
            },
            x: {
              ticks: { color: "white" },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "white",
                font: { size: 14 },
              },
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `Voto: ${context.parsed.y}`;
                },
              },
            },
          },
        },
      });
    } else {
      chartCanvas.style.display = "none";
      chartBtn.textContent = "Mostra Andamento Voti";
    }
  };

  // Torna indietro dalla videata dettagliata
  backBtn.onclick = function () {
    statsScreen.style.display = "none";
    modal.style.display = "block";
  };
  const matchForm = document.getElementById("matchForm");

  matchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newMatch = {
      opponent: document.getElementById("opponentInput").value,
      date: document.getElementById("dateInput").value,
      goals: parseInt(document.getElementById("goalsInput").value),
      assists: parseInt(document.getElementById("assistsInput").value),
      rating: parseFloat(document.getElementById("ratingInput").value),
    };

    selectedPlayer.matches.push(newMatch);
    renderMatchTable();

    // Se il grafico è visibile, aggiornalo
    if (chartCanvas.style.display !== "none") {
      chartBtn.click(); // Nascondi
      chartBtn.click(); // Ricrea con nuovi dati
    }
    // Salva aggiornamenti nel localStorage
    // localStorage.setItem("playersData", JSON.stringify(players));

    matchForm.reset();
  });

  const statsChartBtn = document.getElementById("statsChartBtn");
  const statsChartCanvas = document.getElementById("statsChartCanvas");
  let statsChartInstance = null;

  statsChartBtn.onclick = () => {
    if (!selectedPlayer || !selectedPlayer.matches) return;

    if (statsChartCanvas.style.display === "none") {
      if (chartCanvas.style.display !== "none") return; // blocca se grafico voti aperto

      statsChartCanvas.style.display = "block";
      statsChartBtn.textContent = "Nascondi Gol & Assist per Partita";

      const labels = selectedPlayer.matches.map(
        (match, index) => `Partita ${index + 1} (${match.opponent})`
      );
      const goals = selectedPlayer.matches.map((match) => match.goals);
      const assists = selectedPlayer.matches.map((match) => match.assists);
      const contributions = goals.map((g, i) => g + assists[i]);

      if (statsChartInstance) statsChartInstance.destroy();

      statsChartInstance = new Chart(statsChartCanvas, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Gol",
              data: goals,
              backgroundColor: "limegreen",
            },
            {
              label: "Assist",
              data: assists,
              backgroundColor: "dodgerblue",
            },
            {
              label: "Goal Contribution",
              data: contributions,
              type: "line",
              borderColor: "#ffa500",
              backgroundColor: "transparent",
              borderWidth: 2,
              tension: 0.2,
              pointBackgroundColor: "#ffa500",
              pointRadius: 5,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: { color: "white" },
            },
            x: {
              ticks: { color: "white" },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "white",
                font: { size: 14 },
              },
            },
            tooltip: {
              callbacks: {
                label: function (ctx) {
                  if (ctx.dataset.label === "Goal Contribution") {
                    return `Totale: ${ctx.raw}`;
                  }
                  return `${ctx.dataset.label}: ${ctx.raw}`;
                },
              },
            },
          },
        },
      });
    } else {
      statsChartCanvas.style.display = "none";
      statsChartBtn.textContent = "Mostra Gol & Assist per Partita";
    }
  };

  const radarChartBtn = document.getElementById("radarChartBtn");
  const radarChartCanvas = document.getElementById("radarChartCanvas");
  let radarChartInstance = null;

  radarChartBtn.onclick = () => {
    if (!selectedPlayer) return;

    // Toggle visibilità
    if (radarChartCanvas.style.display === "block") {
      radarChartCanvas.style.display = "none";
      radarChartBtn.textContent = "Confronta con altri";
      document.getElementById("contributionResult").style.display = "none";

      return;
    }

    radarChartCanvas.style.display = "block";
    radarChartBtn.textContent = "Nascondi Confronto";

    if (radarChartInstance) radarChartInstance.destroy();

    const labels = ["Gol/Partita", "Assist/Partita", "Media Voto"];
    const datasets = [];

    players.forEach((p) => {
      if (!p.matches || p.matches.length === 0) return;

      const total = p.matches.length;
      const goals = p.matches.reduce((sum, m) => sum + m.goals, 0);
      const assists = p.matches.reduce((sum, m) => sum + m.assists, 0);
      const ratings = p.matches.reduce((sum, m) => sum + m.rating, 0);

      datasets.push({
        label: p.name,
        data: [
          (goals / total).toFixed(2),
          (assists / total).toFixed(2),
          (ratings / total).toFixed(2),
        ],
        fill: false,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
      });
    });

    radarChartInstance = new Chart(radarChartCanvas, {
      type: "line",
      data: {
        labels: labels,
        datasets: datasets,
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "white",
              font: { size: 13 },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: "white" },
          },
          x: {
            ticks: { color: "white" },
          },
        },
      },
    });

    // Calcola chi ha il contributo migliore (gol + assist per partita)
    const contributionBox = document.getElementById("contributionResult");
    let best = { name: "", value: 0 };
    let worst = { name: "", value: Infinity };

    players.forEach((p) => {
      const matchCount = p.matches.length;
      if (matchCount === 0) return;

      const totalGoals = p.matches.reduce((acc, m) => acc + m.goals, 0);
      const totalAssists = p.matches.reduce((acc, m) => acc + m.assists, 0);
      const contributionPerMatch = (totalGoals + totalAssists) / matchCount;

      if (contributionPerMatch > best.value) {
        best = { name: p.name, value: contributionPerMatch };
      }

      if (contributionPerMatch < worst.value) {
        worst = { name: p.name, value: contributionPerMatch };
      }
    });

    // Mostra il risultato nel div
    contributionBox.innerHTML = `
  <div style="padding: 15px; background: #f1f1f1; border-radius: 12px; text-align: center;">
    <h5>⚽ Contributi a partita (gol + assist)</h5>
    <p><strong>🥇 Migliore:</strong> ${best.name} – ${best.value.toFixed(
      2
    )} a partita</p>
    <p><strong>🐢 Peggiore:</strong> ${worst.name} – ${worst.value.toFixed(
      2
    )} a partita</p>
    <small>(Su match da 40 minuti)</small>
  </div>
`;
    contributionBox.style.display = "block";
  };

  // Aggiorna anno nel footer
  document.getElementById("year").textContent = new Date().getFullYear();
});
