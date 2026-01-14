// QM Estimator – Netlify Demo (Full Matrix)
// Haltung: ISO 9001 verlangt i.d.R. keine neuen Prozesse. Wir beschreiben bestehende Praxis.

const INDUSTRY_LABELS = {
  service: "Dienstleistung",
  craft: "Handwerk",
  it: "IT / Software",
  production: "Industrie / Produktion",
  retail: "Handel",
  other: "Sonstige"
};

const SIZE_LABELS = {
  "1-5": "1–5",
  "6-20": "6–20",
  "21-50": "21–50",
  "51-100": "51–100",
  "100+": "über 100"
};

// Vollständige Matrix: alle Branchen x alle Mitarbeiterzahlen
const QM_ESTIMATES = {
  service: {
    "1-5": {
      duration: "4–6 Wochen",
      cost: "2.000–3.500 €",
      body: [
        "In sehr kleinen Dienstleistungsunternehmen sind Abläufe meist überschaubar.",
        "Der Aufwand entsteht vor allem dadurch, die bereits gelebte Praxis strukturiert zu beschreiben (Verantwortlichkeiten, Abläufe, Nachweise)."
      ],
      note: "Wenn Prozesse bisher gar nicht beschrieben sind, steigt der Abstimmungs- und Dokumentationsaufwand.",
      tip: "Starte mit 5 Kernprozessen und einer einfachen Prozesslandkarte."
    },
    "6-20": {
      duration: "8–12 Wochen",
      cost: "3.000–6.000 €",
      body: [
        "In dieser Größe werden ISO-9001-Anforderungen im Alltag meist bereits erfüllt.",
        "Der Schwerpunkt liegt darauf, Vorhandenes sauber zu ordnen und nachvollziehbar darzustellen – nicht darauf, neue Prozesse zu erfinden."
      ],
      note: "Zeitfresser sind oft Abstimmungen zwischen Rollen statt die Dokumentation selbst.",
      tip: "Ein internes Audit vor dem Zertifizierungsaudit reduziert Korrekturen deutlich."
    },
    "21-50": {
      duration: "12–16 Wochen",
      cost: "5.000–9.000 €",
      body: [
        "Mit mehreren Teams steigt die Komplexität durch Schnittstellen und Übergaben.",
        "ISO 9001 gelingt schnell, wenn pro Prozess klare Verantwortliche benannt und bestehende Nachweise geordnet werden."
      ],
      note: "Mehrere Leistungsbereiche brauchen konsistente Leistungsbeschreibungen und Nachweise.",
      tip: "Definiere 8–12 Kernkennzahlen (z. B. Reklamationen, Liefertermine, Durchlaufzeiten)."
    },
    "51-100": {
      duration: "16–24 Wochen",
      cost: "8.000–14.000 €",
      body: [
        "Ab dieser Größe wird es zum Koordinationsprojekt über mehrere Bereiche.",
        "Der Aufwand entsteht vor allem durch Vereinheitlichung: gleiche Begriffe, gleiche Vorlagen, gleiche Nachweise."
      ],
      note: "Ohne Projektplan und Owner je Bereich verlängert sich die Dauer spürbar.",
      tip: "Arbeite in Wellen: Pilotbereich → Stabilisieren → Rollout auf alle Teams."
    },
    "100+": {
      duration: "6–9 Monate",
      cost: "> 15.000 € (individuell)",
      body: [
        "Ab dieser Größe ist ISO 9001 ein Organisationsprojekt mit höherem Koordinationsaufwand.",
        "Ziel ist nicht, Arbeit neu zu erfinden, sondern vorhandene Praxis standort-/bereichsübergreifend konsistent zu beschreiben."
      ],
      note: "Unterschiedliche Arbeitsweisen müssen harmonisiert werden, sonst entstehen Audit-Risiken.",
      tip: "Setze ein Kernteam (QM + Bereichsowner) und arbeite mit klaren Meilensteinen."
    }
  },

  craft: {
    "1-5": {
      duration: "6–10 Wochen",
      cost: "2.500–4.500 €",
      body: [
        "Im Handwerk werden viele ISO-9001-Anforderungen bereits täglich erfüllt (Auftrag, Ausführung, Abnahme, Reklamation).",
        "Der Aufwand entsteht, weil diese gelebten Abläufe häufig nicht einheitlich beschrieben und als Nachweise geordnet sind."
      ],
      note: "Nachweise (z. B. Abnahme, Prüfungen, Reklamationen) sind oft der größte Aufwand.",
      tip: "Beginne mit Auftrag → Ausführung → Abnahme → Reklamation als Prozesskette."
    },
    "6-20": {
      duration: "10–14 Wochen",
      cost: "3.500–6.500 €",
      body: [
        "ISO 9001 ist gut umsetzbar, wenn Abläufe bereits klar geregelt sind.",
        "Es geht darum, vorhandene Arbeitsweisen konsistent zu beschreiben und Verantwortlichkeiten klar zu machen."
      ],
      note: "Der größte Zeitfaktor ist meist die konsequente Umsetzung im Tagesgeschäft (einheitliche Anwendung).",
      tip: "Führe eine einfache Checkliste je Auftrag ein (Dokumentation/Abnahme)."
    },
    "21-50": {
      duration: "14–20 Wochen",
      cost: "6.000–11.000 €",
      body: [
        "Mit mehr Teams/Trupps steigt das Risiko unterschiedlicher Arbeitsweisen.",
        "Der Aufwand liegt vor allem in Standards für Übergaben, Material, Prüfungen und Nacharbeit – als Beschreibung, nicht als Neuerfindung."
      ],
      note: "Schnittstellen (Büro ↔ Baustelle ↔ Einkauf) sind auditrelevant.",
      tip: "Standardisiere Formulare: Auftrag, Abnahme, Reklamation, Nacharbeit."
    },
    "51-100": {
      duration: "20–28 Wochen",
      cost: "10.000–18.000 €",
      body: [
        "Ab dieser Größe ist ein Rollout-Ansatz sinnvoll (Pilot → Ausrollen).",
        "Der Schwerpunkt liegt auf vereinheitlichten Beschreibungen und Schulung (damit alle dasselbe meinen)."
      ],
      note: "Ohne kurze Einweisungen entstehen in der Praxis oft Abweichungen.",
      tip: "Plane kurze Toolbox-Trainings (15–20 Min.) pro Team zu QM-Standards."
    },
    "100+": {
      duration: "7–10 Monate",
      cost: "> 18.000 € (individuell)",
      body: [
        "ISO 9001 wird zum organisationsweiten Standardisierungsprojekt.",
        "Ziel ist konsistente Beschreibung vorhandener Praxis über Standorte/Teams hinweg."
      ],
      note: "Je diverser die Leistungen, desto wichtiger sind klare Prozessfamilien.",
      tip: "Arbeite mit Prozessfamilien (Kern-/Supportprozesse) und Standort-Ownern."
    }
  },

  it: {
    "1-5": {
      duration: "6–10 Wochen",
      cost: "3.000–5.500 €",
      body: [
        "In kleinen IT-Teams sind Prozesse da, aber selten formal beschrieben.",
        "ISO 9001 lässt sich meist über vorhandene Tool-Nachweise abbilden (Tickets, Reviews, Releases) – ohne neue Prozesse zu erfinden."
      ],
      note: "Auditrelevant sind Nachweise (Ticketfluss, Review, Fehlerbehandlung, Kundenfeedback).",
      tip: "Nutze bestehende Tools als Nachweisquelle statt Extra-Dokumente."
    },
    "6-20": {
      duration: "10–14 Wochen",
      cost: "4.500–8.000 €",
      body: [
        "Mit mehreren Rollen (Dev, Support, Sales) entstehen Schnittstellenanforderungen.",
        "Der Aufwand liegt darin, vorhandene Arbeitsweisen klar zu beschreiben (Definition of Done, Changes, Reklamationen)."
      ],
      note: "Change-Management und Incident/Problem-Prozesse sind typische Auditpunkte.",
      tip: "Definiere 5 Standards: Anforderungen, Umsetzung, Review, Release, Support."
    },
    "21-50": {
      duration: "12–16 Wochen",
      cost: "5.000–8.000 €",
      body: [
        "In dieser Größe ist oft genug Struktur vorhanden, aber uneinheitlich gelebt.",
        "Der Schwerpunkt liegt auf konsistenter Beschreibung und Zuordnung zu ISO-9001-Anforderungen."
      ],
      note: "Schnittstellen zwischen Entwicklung, Support und Vertrieb sind auditrelevant.",
      tip: "Erstelle eine Prozesslandkarte, die Scrum/Kanban sauber integriert."
    },
    "51-100": {
      duration: "16–24 Wochen",
      cost: "9.000–16.000 €",
      body: [
        "Ab dieser Größe braucht ihr Mindeststandards über mehrere Teams/Produkte hinweg.",
        "Der Aufwand ist vor allem Harmonisierung: gleiche Begriffe, gleiche Nachweise, gleiche Messgrößen."
      ],
      note: "Uneinheitliche Toollandschaften verlängern die Nachweisführung.",
      tip: "Setze ein Minimum-Set an Nachweisen (Releases, Reviews, CAPA, Audits)."
    },
    "100+": {
      duration: "6–9 Monate",
      cost: "> 18.000 € (individuell)",
      body: [
        "ISO 9001 wird zum Governance- und Harmonisierungsthema über viele Teams/Standorte.",
        "Ziel ist kontrollierte Einheitlichkeit: zentrale Mindeststandards + teamnahe Ausprägungen."
      ],
      note: "Ohne zentrale Standards entstehen Abweichungen zwischen Teams im Audit.",
      tip: "Arbeite mit einem zentralen QM-Backlog + Team-Adaptionen (controlled flexibility)."
    }
  },

  production: {
    "1-5": {
      duration: "8–12 Wochen",
      cost: "3.500–6.000 €",
      body: [
        "In kleinen Produktionsbetrieben ist der Umfang höher wegen operativer Nachweise (Prüfungen, Messmittel, Rückverfolgbarkeit).",
        "Der Aufwand liegt darin, vorhandene Praxis transparent zu beschreiben und Nachweise zu ordnen – nicht darin, zusätzliche Prüfungen zu erfinden."
      ],
      note: "Wareneingang/Endprüfung und Messmittel sind häufige Stolpersteine.",
      tip: "Starte mit Wareneingang → Produktion → Prüfung → Auslieferung als Kernkette."
    },
    "6-20": {
      duration: "12–18 Wochen",
      cost: "5.000–9.000 €",
      body: [
        "Mit mehr Personal steigt der Bedarf an Standards und Schulungsnachweisen.",
        "Prüfplanung, Rückverfolgbarkeit und Reklamationsbearbeitung werden aus bestehender Praxis strukturiert beschrieben."
      ],
      note: "Fehlende Prüf-/Messmittelorganisation kann Auditrisiken verursachen.",
      tip: "Definiere Prüfmerkmale, Intervalle und Verantwortliche (einfach, aber klar)."
    },
    "21-50": {
      duration: "16–24 Wochen",
      cost: "8.000–15.000 €",
      body: [
        "Mehr Linien/Schichten erhöhen die Komplexität und die Nachweisführung.",
        "Der Aufwand liegt vor allem in konsistenter Beschreibung über Schichten hinweg (gleiche Standards, gleiche Nachweise)."
      ],
      note: "Schichtübergaben und Abweichungsmanagement sind auditrelevant.",
      tip: "Führe ein einfaches Abweichungs-/Sperrprozess-Schema ein (Hold, Freigabe, CAPA)."
    },
    "51-100": {
      duration: "16–24 Wochen",
      cost: "8.000–15.000 €",
      body: [
        "In produzierenden Unternehmen ist der Umfang höher (operative Abläufe, Prüfungen, Kennzahlen).",
        "Produktionslenkung und Rückverfolgbarkeit stehen häufig im Fokus – meist ist vieles bereits da, muss aber sauber beschrieben werden."
      ],
      note: "Viele Produktvarianten erhöhen den Dokumentationsaufwand.",
      tip: "Nutze SOPs für kritische Schritte statt alles „neu“ zu dokumentieren."
    },
    "100+": {
      duration: "7–10 Monate",
      cost: "> 20.000 € (individuell)",
      body: [
        "Ab dieser Größe ist ISO 9001 ein standort-/bereichsübergreifendes Projekt.",
        "Der Schwerpunkt liegt in Harmonisierung vorhandener Praxis (Lieferanten, Prüfprozesse, Kennzahlen) über Standorte hinweg."
      ],
      note: "Mehrere Standorte erfordern Mindeststandards plus lokale Ergänzungen.",
      tip: "Setze Standort-Owner + zentrale Mindeststandards (Prüfung, Reklamation, CAPA, Audits)."
    }
  },

  retail: {
    "1-5": {
      duration: "6–10 Wochen",
      cost: "2.500–4.500 €",
      body: [
        "Im Handel stehen Lieferanten, Wareneingang, Reklamationen und Kundenkommunikation im Fokus.",
        "Der Aufwand entsteht, die gelebten Abläufe (Bestellung, Retouren, Reklamationen) klar zu beschreiben und Nachweise zu ordnen."
      ],
      note: "Lieferantenbewertung und Reklamationsnachweise sind typische Auditpunkte.",
      tip: "Starte mit Bestellung → Wareneingang → Lager/Versand → Reklamation."
    },
    "6-20": {
      duration: "10–14 Wochen",
      cost: "3.500–6.500 €",
      body: [
        "Mit mehr Personal braucht ihr klare Verantwortlichkeiten (Einkauf, Lager, Vertrieb).",
        "ISO 9001 verlangt hier keine neue Arbeit – sondern eine konsistente Beschreibung dessen, was bereits passiert."
      ],
      note: "Uneinheitliche Abläufe zwischen Filiale/Lager/Backoffice verlängern die Abstimmung.",
      tip: "Führe eine einheitliche Reklamationsklassifikation und Fristen ein."
    },
    "21-50": {
      duration: "14–20 Wochen",
      cost: "6.000–11.000 €",
      body: [
        "Mehr Teams/Standorte erhöhen die Schnittstellenanforderungen.",
        "Wichtig sind Standards für Wareneingang, Bestandsführung, Retouren und Kundenfeedback – als Beschreibung vorhandener Praxis."
      ],
      note: "Bei mehreren Standorten ist Pilot-Rollout meist am schnellsten.",
      tip: "Setze ein KPI-Set: Liefertermintreue, Reklamationsquote, Retourenquote, Durchlaufzeit."
    },
    "51-100": {
      duration: "20–28 Wochen",
      cost: "10.000–18.000 €",
      body: [
        "Ab dieser Größe wird ISO 9001 zum Standardisierungsprojekt über mehrere Bereiche.",
        "Der Aufwand ist vor allem: gleiche Standards, gleiche Vorlagen, gleiche Nachweise."
      ],
      note: "Ohne Prozessowner entstehen unterschiedliche Interpretationen im Audit.",
      tip: "Definiere Prozessowner für Einkauf, Lager/Logistik, Reklamation, Vertrieb."
    },
    "100+": {
      duration: "6–9 Monate",
      cost: "> 18.000 € (individuell)",
      body: [
        "ISO 9001 wird ein Organisationsprojekt mit Rollout über Standorte/Teams.",
        "Harmonisierung von Abläufen und Kennzahlen ist der Hauptaufwand (Vorhandenes konsistent beschreiben)."
      ],
      note: "Standorte brauchen Mindeststandards plus lokale Ergänzungen.",
      tip: "Arbeite in Wellen: Pilotstandort → 2–3 Standorte → Skalierung."
    }
  },

  other: {
    "1-5": {
      duration: "6–10 Wochen",
      cost: "2.500–4.500 €",
      body: [
        "Bei „Sonstige“ hängt der Aufwand stark von Prozessklarheit und Dokumentationsstand ab.",
        "Meist wird ISO 9001 bereits erfüllt – es geht darum, das Vorhandene schlank zu strukturieren und nachvollziehbar zu beschreiben."
      ],
      note: "Regulatorik oder hohe Kundenanforderungen können den Aufwand erhöhen.",
      tip: "Starte mit Kernprozessen und nutze Vorlagen konsequent."
    },
    "6-20": {
      duration: "10–14 Wochen",
      cost: "3.500–7.000 €",
      body: [
        "In dieser Größe ist ISO 9001 typischerweise gut umsetzbar.",
        "Der Aufwand liegt in Rollenklärung, Vorlagen und sauberer Nachweisführung – nicht in neuen Prozessen."
      ],
      note: "Der größte Hebel ist ein konsequenter Review-/Audit-Rhythmus.",
      tip: "Plane internes Audit + Managementbewertung als feste Meilensteine."
    },
    "21-50": {
      duration: "14–20 Wochen",
      cost: "6.000–12.000 €",
      body: [
        "Mit mehreren Teams steigt die Komplexität durch Schnittstellen.",
        "ISO 9001 braucht Standards, die bereichsübergreifend gelten – als Beschreibung der bestehenden Praxis."
      ],
      note: "Uneinheitliche Arbeitsweisen zwischen Teams sind ein häufiger Audit-Fund.",
      tip: "Definiere ein Minimum an Nachweisen (KPIs, Reklamationen, CAPA, Audits)."
    },
    "51-100": {
      duration: "20–28 Wochen",
      cost: "10.000–18.000 €",
      body: [
        "Ab dieser Größe ist ISO 9001 ein Koordinations- und Rollout-Thema.",
        "Der Aufwand ist vor allem Governance: Prozessowner, Standards, Schulungen und Nachweisstruktur."
      ],
      note: "Ohne klare Governance wächst Dokumentation, aber nicht die Wirksamkeit.",
      tip: "Arbeite mit Prozessowner-Meetings (2-wöchig) und klaren Deliverables."
    },
    "100+": {
      duration: "6–9 Monate",
      cost: "> 15.000 € (individuell)",
      body: [
        "Ab dieser Größe wird ISO 9001 zum organisationsweiten Standardisierungsprojekt.",
        "Pilotierung + Rollout ist meist schneller als Big-Bang – Ziel: Vorhandenes konsistent beschreiben."
      ],
      note: "Standorte/Abteilungen erhöhen Abstimmung und Nachweisaufwand.",
      tip: "Setze eine zentrale QM-Backlog-Liste und arbeite in Rollout-Wellen."
    }
  }
};

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

// Tracking: gtag oder dataLayer (beide unterstützt)
function trackEvent(name, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
    return;
  }
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...params });
  }
}

function resolveEstimate(industry, size) {
  const est = QM_ESTIMATES?.[industry]?.[size];
  if (!est) {
    return {
      duration: "—",
      cost: "—",
      body: ["Für diese Auswahl liegt keine Schätzung vor."],
      note: "Bitte wähle Branche und Mitarbeiterzahl erneut."
    };
  }
  return est;
}

function initEstimator(root) {
  const headline = root.dataset.headline || "ISO-9001-Aufwand einschätzen – in 60 Sekunden";
  const contactUrl = root.dataset.contactUrl || "/kontakt/";
  const ctaLabel = root.dataset.ctaLabel || "Kostenlos prüfen, was bereits ISO-9001-konform ist";

  const headlineEl = root.querySelector(".qm-estimator__headlineText");
  if (headlineEl) headlineEl.textContent = headline;

  const industrySelect = root.querySelector(".qm-estimator__industry");
  const sizeButtons = Array.from(root.querySelectorAll("[data-size]"));
  const submitBtn = root.querySelector(".qm-estimator__btn");
  const resultBox = root.querySelector(".qm-estimator__result");

  let industry = "";
  let size = "";
  let startedTracked = false;

  function updateBtnState() {
    submitBtn.disabled = !(industry && size);
  }

  function maybeTrackStart() {
    if (!startedTracked && industry && size) {
      startedTracked = true;
      trackEvent("qm_estimate_start", { industry, size, page_path: window.location.pathname });
    }
  }

  function setActiveSize(val) {
    size = val;
    sizeButtons.forEach(b => b.classList.toggle("is-active", b.dataset.size === val));
    updateBtnState();
    maybeTrackStart();
  }

  industrySelect.addEventListener("change", () => {
    industry = industrySelect.value;
    updateBtnState();
    maybeTrackStart();
  });

  sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => setActiveSize(btn.dataset.size));
  });

  submitBtn.addEventListener("click", () => {
    if (!industry || !size) return;

    const est = resolveEstimate(industry, size);
    const indLabel = INDUSTRY_LABELS[industry] || "Unternehmen";
    const sizeLabel = SIZE_LABELS[size] || size;

    const paragraphs = (est.body || []).map(t => `<p>${escapeHtml(t)}</p>`).join("");
    const tip = est.tip ? `<p><strong>Praxis-Tipp:</strong> ${escapeHtml(est.tip)}</p>` : "";
    const note = est.note ? `<p><strong>Hinweis:</strong> ${escapeHtml(est.note)}</p>` : "";

    resultBox.innerHTML = `
      <p><strong>Ergebnis für ${escapeHtml(indLabel)} mit ${escapeHtml(sizeLabel)} Mitarbeitenden:</strong></p>
      <p><strong>⏱️ Typischer Aufwand:</strong> ${escapeHtml(est.duration)}</p>
      <p><strong>💰 Typischer Kostenrahmen:</strong> ${escapeHtml(est.cost)}</p>
      ${paragraphs}
      ${tip}
      ${note}
      <p><em>ISO 9001 verlangt in der Regel keine neuen Prozesse – es geht um die nachvollziehbare Beschreibung der bestehenden Praxis.</em></p>
      <a class="qm-estimator__cta" href="${escapeHtml(contactUrl)}">${escapeHtml(ctaLabel)}</a>
    `;
    resultBox.hidden = false;

    trackEvent("qm_estimate_result", {
      industry,
      size,
      duration: est.duration,
      cost: est.cost,
      page_path: window.location.pathname
    });

    const cta = resultBox.querySelector(".qm-estimator__cta");
    if (cta) {
      cta.addEventListener("click", () => {
        trackEvent("qm_estimate_contact_click", { industry, size, page_path: window.location.pathname });
      }, { once: true });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".qm-estimator").forEach(initEstimator);
});
