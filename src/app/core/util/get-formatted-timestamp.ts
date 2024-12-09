/**
 * Generates a formatted timestamp string in the format 'YYMMDD_HHMMSS',
 * where 'YY' is the last two digits of the year, 'MM' is the month,
 * 'DD' is the day, 'HH' is the hour, 'MM' is the minutes, and 'SS' is the seconds.
 *
 * @return {string} A string representing the current date and time formatted as 'YYMMDD_HHMMSS'.
 */
export function getFormattedTimestamp(): string {
  const now = new Date();
  const year = String(now.getFullYear()).slice(-2);
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}${month}${day}_${hours}${minutes}${seconds}`;
}
