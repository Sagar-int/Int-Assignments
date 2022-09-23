import * as dotenv from 'dotenv'
dotenv.config()

const config = {
  db: {
    DB_HOST: process.env.DB_HOST,
    DB_NAME: "scorecard-db",
    DB_USER: "postgres",
    DB_PASS: "sagar6699",
    DB_PORT: 5432,
  },
  logger: {
		SRV_ERROR_LOG_PATH: './logs/access.log'
	},
  errorText: {
    value: "An internal error has occurred. Please try again later.",
  },
  jwtSecret: process.env.JWT_SECRET
};

export default config;
