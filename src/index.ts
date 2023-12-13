import { App } from "./app";

const app = new App();

const port = Number(process.env.PORT) || 3003;

app.start(port);
