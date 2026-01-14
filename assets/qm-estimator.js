const QM_ESTIMATES = {
  service: {
    "6-20": {
      duration: "8–12 Wochen",
      cost: "3.000–6.000 €",
      body: [
        "ISO-9001-Anforderungen werden meist bereits erfüllt.",
        "Der Aufwand entsteht durch das strukturierte Beschreiben der bestehenden Praxis."
      ]
    }
  }
};

function initEstimator(){
  const root = document.querySelector(".qm-estimator");
  const industrySelect = root.querySelector(".qm-estimator__industry");
  const sizeButtons = root.querySelectorAll("[data-size]");
  const resultBox = root.querySelectorAll(".qm-estimator__result")[1];
  const placeholder = root.querySelector(".qm-estimator__result--placeholder");

  let industry = "", size = "";

  function render(){
    if(!(industry && size)) return;
    const est = QM_ESTIMATES[industry]?.[size];
    if(!est) return;

    resultBox.innerHTML = `
      <p><strong>Dauer:</strong> ${est.duration}</p>
      <p><strong>Kosten:</strong> ${est.cost}</p>
      ${est.body.map(t=>`<p>${t}</p>`).join("")}
    `;
    placeholder.hidden = true;
    resultBox.hidden = false;
  }

  industrySelect.addEventListener("change", e=>{
    industry = e.target.value;
    render();
  });

  sizeButtons.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      size = btn.dataset.size;
      sizeButtons.forEach(b=>b.classList.remove("is-active"));
      btn.classList.add("is-active");
      render();
    });
  });
}

document.addEventListener("DOMContentLoaded", initEstimator);
