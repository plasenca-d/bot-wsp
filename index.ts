import { Client, RemoteAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { MongoStore } from "wwebjs-mongo";
import mongoose from "mongoose";
import cron from "node-cron";

const message = process.env.MESSAGE ?? "No message";

async function main() {
  await mongoose.connect(process.env.MONGODB_URI ?? "");

  const store = new MongoStore({
    mongoose: mongoose,
  });

  const client = new Client({
    authStrategy: new RemoteAuth({
      store,
      backupSyncIntervalMs: 300000,
    }),
    puppeteer: {
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
  });

  client.on("ready", async () => {
    console.log("Client is ready!");

    cron.schedule(
      "0 20 * * *",
      async () => {
        try {
          await client.sendMessage(
            `${process.env.WSP_NUMBER_ID_TO_SEND}`,
            message
          );
          console.table({
            message: message,
            number: `${process.env.WSP_NUMBER_ID_TO_SEND}`,
            date: new Date(),
          });
        } catch (error) {
          console.table({
            message: message,
            number: `${process.env.WSP_NUMBER_ID_TO_SEND}`,
            error: error,
            date: new Date(),
          });
        }
      },
      {
        timezone: "America/Lima",
      }
    );
  });

  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  client.initialize();
}

main();
