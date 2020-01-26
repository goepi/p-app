// find timestamp of time 00:00 of current date
export const getStartOfDateTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);

  const startOfDateUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0));

  const msInAMinute = 60 * 1000;

  return startOfDateUTC.getTime() + date.getTimezoneOffset() * msInAMinute;
};

export const getUserFriendlyDateString = (timestamp: number, showTime: boolean) => {
  const date = new Date(timestamp);

  const tsStartOfDay = getStartOfDateTimestamp(new Date().getTime());

  const msFullDay = 24 * 60 * 60 * 1000;

  if (timestamp >= tsStartOfDay && timestamp < tsStartOfDay + msFullDay) {
    // timestamp within 24 hours ahead of start of timestamp's day
    return showTime ? `Today, ${date.getHours()}:${date.getMinutes()}` : 'Today';
  } else if (timestamp < tsStartOfDay && timestamp > tsStartOfDay - msFullDay) {
    // timestamp within 24 hours behind start of timestamp's day
    return showTime ? `Yesterday, ${date.getHours()}:${date.getMinutes()}` : 'Yesterday';
  } else {
    // timestamp before yesterday
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    if (showTime) {
      options.hour = 'numeric';
      options.minute = 'numeric';
    }

    return date.toLocaleString('en-GB', options);
  }
};

export const getFormattedAmountWithCurrencyString = ({
  value,
  currency,
}: {
  value: string;
  currency: string;
}) => {
  try {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency }).format(parseInt(value));
  } catch (e) {
    return `${currency} ${value}`;
  }
};

export const capitalizeFirstLetters = (str: string) =>
  str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
