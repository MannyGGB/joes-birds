import { deleteBird, insertBird, updateBird } from "./queries";
import { getAllBirds } from "./queries";
// import { birdsData } from "./lib/birdsData";
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
  try {
    const birds = await getAllBirds();
    res.send(birds);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Network error or invalid response:", error.message);
    } else if (error.message.includes("HTTP error!")) {
      console.error("API responded with an error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
});

app.post("/insertBird", async (req: express.Request, res: express.Response) => {
  try {
    const body = req.body.formValues;

    const birds = await insertBird(body);

    res.send(birds);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Network error or invalid response:", error.message);
    } else if (error.message.includes("HTTP error!")) {
      console.error("API responded with an error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
});

app.put(
  "/updateBird/:id",
  async (req: express.Request, res: express.Response) => {
    try {
      const body = req.body.formValues;
      const params = req.params.id;

      const updatedBird = await updateBird(body, params);

      res.send(updatedBird);
    } catch (error) {
      if (error instanceof TypeError) {
        console.error("Network error or invalid response:", error.message);
      } else if (error.message.includes("HTTP error!")) {
        console.error("API responded with an error:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  }
);

app.delete(
  "/deleteBird/:id",
  async (req: express.Request, res: express.Response) => {
    try {
      const params = req.params.id;

      const deletedBird = await deleteBird(params);

      res.send(deletedBird);
    } catch (error) {
      if (error instanceof TypeError) {
        console.error("Network error or invalid response:", error.message);
      } else if (error.message.includes("HTTP error!")) {
        console.error("API responded with an error:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  }
);
