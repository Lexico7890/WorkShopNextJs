import { useEffect, useState } from "react";

const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDateDiffs = (timestamp) => {
  const now = new Date();
  const elapsed = (timestamp - now) / 1000;

  for (const [unit, seconsUnitit] of DATE_UNITS) {
    if (Math.abs(elapsed) > seconsUnitit || unit === "second") {
      const value = Math.round(elapsed / seconsUnitit);
      return { value, unit };
    }
  }
};

export default function useTimeAgo(timestamp) {
  const [timeago, setTimeAgo] = useState(() => getDateDiffs(timestamp));
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp);
      setTimeAgo(newTimeAgo);
    }, 10000);

    return () => clearInterval(interval);
  });

  const rtf = new Intl.RelativeTimeFormat("es", {
    style: "long",
  });

  const { value, unit } = timeago;

  return rtf.format(value, unit);
}
