function findLongestDiagnosticUrl(reservoirs) {
  const baseURL = "https://www.twilio.com/quest";
  const diagnosticPath = "/ducktypium-diagnostics";

  const diagnosticUrls = reservoirs.map((reservoir) => {
    const reservoirDetailParams = new URLSearchParams();

    reservoirDetailParams.set("label", reservoir.label);
    reservoirDetailParams.set("id", reservoir.id);
    reservoirDetailParams.set("type", reservoir.type);
    reservoirDetailParams.set("contents", reservoir.contents);

    reservoirDetailParams.set("rads", reservoir.radiation.radsCountCurrent);
    reservoirDetailParams.set("guid", reservoir.radiation.monitorSystemGuid);

    const diagnosticUrl = new URL(baseURL + diagnosticPath);
    diagnosticUrl.search = reservoirDetailParams;

    return diagnosticUrl.toString();
  });

  const urlsWithLengths = diagnosticUrls.map((url) => {
    return [url, url.length()];
  });

  let longestUrl = "";
  let longestUrlLength = 0;

  for (const [url, length] of urlsWithLengths) {
    if (length > longestUrlLength) {
      longestUrlLength = length;
      longestUrl = url;
    }
  }

  return longestUrl;
}

console.log("Test case data:");
console.log(
  findLongestDiagnosticUrl([
    {
      id: 623,
      label: "Reservoir-2A-East-Wing",
      radiation: {
        radsCountCurrent: "190",
        monitorSystemGuid: "8453b2e7-0cf3-43fa-8909-cab00f75d413",
      },
      type: "raw",
      contents: 83,
    },
    {
      id: 21,
      label: "Reservoir-2B-East-Wing%50",
      type: "distilled",
      contents: 120,
    },
    {
      id: 617,
      label: "Reservoir-3F-North-Wing%75",
      radiation: {
        radsCountCurrent: "39",
        monitorSystemGuid: "bf0b28be-ae90-406a-8f90-c556b0056f2e",
      },
      type: "raw",
      contents: 100,
    },
    {
      id: 100,
      label: "Reservoir-3G-North-Wing%50",
      radiation: {
        radsCountCurrent: "712",
        monitorSystemGuid: "e1e73107-f0ad-495d-a11c-e730543f1ad5",
      },
      type: "raw",
      contents: 98,
    },
  ])
);
