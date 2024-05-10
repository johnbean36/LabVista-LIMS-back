require("dotenv").config;
const { PORT } = process.env;

const app = express();

app.listen(PORT, () => console.log(`listening on  PORT ${PORT}`));
