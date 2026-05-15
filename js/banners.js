// =============================================
// banners.js — Estado compartido
// =============================================
const STORAGE_KEY = "hv_banners_v2";

async function cargarBanners() {
  const local = localStorage.getItem(STORAGE_KEY);
  if (local) return JSON.parse(local);
  const res = await fetch("data/banners.json");
  const data = await res.json();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data;
}

function guardarBanners(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getBanners() {
  const local = localStorage.getItem(STORAGE_KEY);
  return local ? JSON.parse(local) : { home: [], paquetes: [] };
}

// Obtener un paquete por id (busca en home y paquetes)
function getPaqueteById(id) {
  const data = getBanners();
  return [...data.home, ...data.paquetes].find(b => b.id === id) || null;
}
