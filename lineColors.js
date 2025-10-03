/**
 * Central line color tokens for Digitaler Fahrplan.
 * One source of truth for chips, popup headers and icons.
 */
(function(){
  const LINE_COLORS = {
    "S 6": "#2e7d32",
    "S 8": "#1b5e20",
    "RB 40": "#0d47a1",
    "RB 41": "#00796b",
    "RE 30": "#1565c0",
    "U 4": "#8e24aa",
    "ICE": "#b71c1c",
    "IC": "#880e4f",
    "17": "#ef6c00",
    "Bus 17": "#ef6c00",
    "1": "#0277bd",
    "Bus 1": "#0277bd"
  };
  function normalize(key){
    if(!key) return "";
    key = String(key).trim();
    // Normalize common forms: "S6" -> "S 6"
    key = key.replace(/^S(\d)\b/, "S $1");
    return key;
  }
  window.getLineColor = function(lineId){
    const key = normalize(lineId);
    return LINE_COLORS[key] || "#455A64";
  };
  window.LINE_COLORS = LINE_COLORS; // expose (useful for tests)
})();
