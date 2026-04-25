class Logger {
  constructor() {
    this.isDevelopment = process.env.NODE_ENV === "development";
  }

  log(level, message, ...args) {
    if (this.isDevelopment || level === "error") {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
      if (level === "error") {
        console.error(logMessage, ...args);
      } else {
        console[level](logMessage, ...args);
      }
    }
  }

  debug = (message, ...args) => this.log("debug", message, ...args);
  info = (message, ...args) => this.log("info", message, ...args);
  warn = (message, ...args) => this.log("warn", message, ...args);
  error = (message, ...args) => this.log("error", message, ...args);
}

export const logger = new Logger();

export const logApiRequest = (method, url, data) => {
  logger.info(`API Request: ${method} ${url}`, data ? { data: "..." } : "");
};

export const logApiResponse = (method, url, status, data) => {
  logger.info(`API Response: ${method} ${url}`, { status, data: "..." });
};

export const logApiError = (method, url, error) => {
  logger.error(`API Error: ${method} ${url}`, error);
};