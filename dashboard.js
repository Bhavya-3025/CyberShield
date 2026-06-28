const best = Number(localStorage.getItem("bestScore")) || 0;

const lessons = JSON.parse(localStorage.getItem("completedLessons")) || [];

document.getElementById("bestScore").textContent = best;

document.getElementById("lessons").textContent = lessons.length;

const progress = Math.round((lessons.length / 8) * 100);

document.getElementById("progress").textContent = progress + "%";