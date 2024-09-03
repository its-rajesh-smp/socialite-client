/**
 * Function to get time ago
 * @param timestamp in milliseconds
 * @returns  time ago
 */
export const getTimeAgo = (timestamp: any) => {
  if (!timestamp) return;

  const now = Date.now();
  const parsedTimestamp = new Date(Number(timestamp)).getTime();
  const seconds = Math.floor((now - parsedTimestamp) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};
