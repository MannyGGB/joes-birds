import { insertBird } from "./queries";
import { getAllBirds } from "./queries";
import { birdsData } from "./lib/birdsData";
import cors from "cors";
import express from "express";

const app = express();

app.use(express.json());
app.use(cors());
const PORT = 8080;

app.listen(PORT, (error: Error) => {
  if (error) return console.error(error);
  return console.log(`Server is running in ${PORT}`);
});

app.get("/", (_: express.Request, res: express.Response) => {
  res.send("This is the root route");
});

app.get("/allBirds", async (_: express.Request, res: express.Response) => {
  const birds = await getAllBirds();
  res.send(birds);
});

app.post("/insertBirds", async (_: express.Request, res: express.Response) => {
  const birds = await insertBird(birdsData);

  res.send(birds);
});
