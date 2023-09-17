import { fastify } from "fastify";
import { prisma } from "./lib/prisma";
import { getAllPromptsRoute } from "./routes/get-all-prompts.routes";
import { uploadVideoRoute } from "./routes/upload-video.routes";

const PORT = 3333;

const app = fastify();

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log("Http server running on port ", PORT);
  });
