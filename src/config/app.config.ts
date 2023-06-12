require('dotenv').config();

const currentEnv: string = process.env.APP_ENV || 'development';
const port: number|string = process.env.APP_PORT || 3000;
const basePath: string = process.env.BASE_PATH;
const baseUrl: string = process.env.APP_URL || `http://${basePath}:${port}/`;
const apiVersion: string = 'api/v1/';
const mongodbName: string = process.env.MONGODB_DATABASE_NAME;
const mongoBasePath: string = process.env.MONGODB_BASE_PATH;
const mongoUri = `mongodb://${mongoBasePath}:27017/${mongodbName}`;
const redisPort:number = Number(process.env.REDIS_PORT) || 6379;
const storeKey:string = "EMAIL_TASKS";
const attemptedCount: number = 5;

const errorMessageList :any = {
    required: 'Please enter the :attribute',
    unique: 'The :attribute has already been taken.',
    max: 'The :attribute may not be greater than :max.',
    min: 'The :attribute must be at least :min.',
    maxAmount: 'The :attribute may not be greater than :max.',
    numeric: 'The :attribute must be a number.',
    valueIn: 'Please :attribute should in [:in].',
    regex: ':attribute value not in the right format.',
    exists: 'The :attribute value is not available in the database',
    checkDroneIsReady: 'selected drone should be in IDLE or LOADING status',
};

const emailConfig = {
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD
  },
};

export {
  currentEnv,
  port,
  baseUrl,
  apiVersion,
  mongoUri,
  redisPort,
  errorMessageList,
  storeKey,
  emailConfig,
  attemptedCount
}