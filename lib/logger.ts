const isDev = process.env.NODE_ENV !== 'production';

type LogPayload = unknown[];

export const logger = {
  debug: (...args: LogPayload) => {
    if (isDev) {
      // eslint-disable-next-line no-console
      console.log(...args);
    }
  },
  warn: (...args: LogPayload) => {
    // eslint-disable-next-line no-console
    console.warn(...args);
  },
  error: (...args: LogPayload) => {
    // eslint-disable-next-line no-console
    console.error(...args);
  },
};


