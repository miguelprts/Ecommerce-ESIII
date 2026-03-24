import app from "./app";
import dotnev from "dotenv"

dotnev.config();

const PORT: number = Number(process.env.PORT) || 3001;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});