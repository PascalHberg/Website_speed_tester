function normalizeUrl(input) {
  if (!input) return null;

  let url = input.trim();

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  try {
    return new URL(url).href;
  } catch {
    return null;
  }
}

function runTest() {
  const input = document.getElementById("urlInput");
  const status = document.getElementById("status");

  const url = normalizeUrl(input.value);

  if (!url) {
    status.innerText = "Ungültige URL";
    return;
  }

  const reportUrl =
    "https://pagespeed.web.dev/report?url=" + encodeURIComponent(url) + "&form_factor=desktop";

  window.open(reportUrl, "_blank");
}

function useCurrentPage() {
  const reportUrl =
    "https://pagespeed.web.dev/report?url=" +
    encodeURIComponent(window.location.href);

  window.open(reportUrl, "_blank");
}
