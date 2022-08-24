function monitorReservoirs(reservoirs) {
  const unSafeContentsReservoirs = [];

  for (reservoir of reservoirs) {
    switch (reservoir.type) {
      case "raw":
        if (reservoir.contents > 100) {
          unSafeContentsReservoirs.push(reservoir);
        }
        break;
      case "refined":
        console.log(`Reservoir: ${reservoir.label} (${reservoir.id}) is safe.`);
        break;
      case "heating":
      case "cooling":
      default:
        console.log(
          `Reservoir: ${reservoir.label} (${reservoir.id}) is not ready for safety checks yet.`
        );
        break;
    }
  }

  return unSafeContentsReservoirs;
}

console.log("Test case data:");
console.log(
  monitorReservoirs([
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
      label: "Reservoir-2B-East-Wing",
      type: "distilled",
      contents: 120,
    },
    {
      id: 617,
      label: "Reservoir-3F-North-Wing",
      radiation: {
        radsCountCurrent: "39",
        monitorSystemGuid: "bf0b28be-ae90-406a-8f90-c556b0056f2e",
      },
      type: "raw",
      contents: 100,
    },
    {
      id: 100,
      label: "Reservoir-3G-North-Wing",
      radiation: {
        radsCountCurrent: "712",
        monitorSystemGuid: "e1e73107-f0ad-495d-a11c-e730543f1ad5",
      },
      type: "raw",
      contents: 98,
    },
  ])
);
