function normalizeUrl(url) {
  try {
    return new URL(url).href;
  } catch (e) {
    return null;
  }
}

function runTest() {
  const input = document.getElementById("urlInput").value;
  const url = normalizeUrl(input);

  if (!url) {
    document.getElementById("status").innerText = "Ungültige URL";
    return;
  }

  const reportUrl =
    "https://pagespeed.web.dev/report?url=" + encodeURIComponent(url);

  window.open(reportUrl, "_blank");
}

function useCurrentPage() {
  const current = window.location.href;

  const reportUrl =
    "https://pagespeed.web.dev/report?url=" + encodeURIComponent(current);

  window.open(reportUrl, "_blank");
}