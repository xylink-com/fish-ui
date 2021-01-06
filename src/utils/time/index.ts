// ---------- 将毫秒时间转化为 hh:mm:ss的格式 ---------- //
export const formatTime = (time: number): string => {
  const sep: string = ':';
  const totalSeconds: number = Math.floor(time / 1000);
  const second: number = totalSeconds % 60;
  const totalMinutes: number = (totalSeconds - second) / 60;
  const minute: number = totalMinutes % 60;
  const hour: number = (totalMinutes - minute) / 60;
  if(hour === 0) return padDigit(minute) + sep + padDigit(second);
  return padDigit(hour) + sep + padDigit(minute) + sep + padDigit(second);
};

// ---------- 将数字转化为两位，填充0 ---------- //
export const padDigit = (num: number): string => (num < 10 ? '0' + num : '' + num);
