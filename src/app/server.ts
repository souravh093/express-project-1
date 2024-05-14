import { Server } from "http";
import app from "./app";

const port: number | unknown = process.env.PORT || 5000;

let server: Server;

async function bootstrap() {
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

bootstrap();
