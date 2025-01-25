# WhatsApp Bot

This project is a WhatsApp bot that automates message sending using the `whatsapp-web.js` library. It was created using `bun init` with Bun v1.1.26, a fast all-in-one JavaScript runtime. [Bun](https://bun.sh) simplifies dependency installation and script execution.

## Requirements

- Node.js v16+ (if you use libraries that require it in parallel).
- [Bun](https://bun.sh) installed.
- WhatsApp with an active session (you will need to scan a QR code when starting the bot).

## Installation

To install the project's dependencies, run the following command:

```bash
bun install
```

This will install all dependencies specified in the `bun.lockb` file.

## Usage

To run the bot, use the following command:

```bash
bun run index.ts
```

This will initialize the bot and display a QR code in the console. Scan the code with WhatsApp to link your account.

## Features

- **Automated message sending:** Schedule messages to be sent at specific times.
- **Integration with cron jobs:** Use `node-cron` to schedule daily messages.
- **Persistent authentication:** Use `LocalAuth` to keep the session active between bot restarts.

## Additional Configuration

### Time Zone for Scheduled Messages

If you want to schedule messages in a specific time zone, you can modify the code to use `node-cron` with time zone support. For example:

```javascript
cron.schedule(
  "0 20 * * *",
  () => {
    console.log("Sending message...");
    client.sendMessage("1234567890@c.us", "This is an automated message.");
  },
  {
    timezone: "America/Lima" // Change this to your desired time zone
  }
);
```

Refer to the [Time Zone Database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) for a list of valid time zones.

## Key Dependencies

- **[whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js):** Library to interact with WhatsApp Web.
- **[node-cron](https://github.com/node-cron/node-cron):** For scheduling recurring tasks.
- **[bun.sh](https://bun.sh):** Runtime for fast and efficient development.

## Contributions

If you wish to contribute to the project:

1. Fork this repository.
2. Create a new branch for your changes: `git checkout -b my-branch`.
3. Make your modifications.
4. Commit your changes: `git commit -m 'Description of my changes'`.
5. Push to your branch: `git push origin my-branch`.
6. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

Thank you for using the WhatsApp bot! If you have any questions or suggestions, feel free to open an issue.

