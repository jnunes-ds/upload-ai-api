import { fastify } from "fastify";
import { prisma } from "./lib/prisma";
import { getAllPromptsRoute } from "./routes/get-all-prompts.routes";
import { uploadVideoRoute } from "./routes/upload-video.routes";
import { createTranscriptionRoute } from "./routes/create-transcription.routes";
import { generateAICompletionRoute } from "./routes/generate-ai-completion.routes";

const PORT = 3333;

const app = fastify();

app.register(getAllPromptsRoute);
app.register(uploadVideoRoute);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log("Http server running on port ", PORT);
  });
