import "dotenv/config";

const envConfigs = {
  port: process.env.PORT,
  mongoUrl: process.env.DB_URL,
  moralisKey: process.env.MORALIS_KEY,
  unmarshelKey: process.env.UNMARSHEL_API_KEY,
};

export default envConfigs;
