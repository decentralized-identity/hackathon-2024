// scripts/fetchEvents.js

const fs = require("fs");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const EVENT_IDS = [
  "1027651562487",
  "1031608798687",
  "1029328859327",
  "1029328919507",
  "1029328979687",
  "1029330303647",
  "1029330343767",
  "1029330413977",
  "1029330474157",
  "1029330524307",
  "1029330564427",
  "1029330644667",
  "1029330684787",
  "1029330724907",
  "1029330754997",
  "1031698406707",
  "1031701084717",
];
const API_TOKEN = process.env.EVENTBRITE_API_TOKEN;

async function fetchEvents() {
  try {
    const events = await Promise.all(
      EVENT_IDS.map(async (id) => {
        const response = await axios.get(
          `https://www.eventbriteapi.com/v3/events/${id}/`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
            },
          }
        );
        const event = response.data;

        // Download the event logo
        if (event.logo && event.logo.url) {
          const imageUrl = event.logo.url;
          const imageResponse = await axios.get(imageUrl, {
            responseType: "arraybuffer",
          });

          // Ensure the directory for images exists
          const imagesDir = path.join(__dirname, "../static/img/event-images");
          if (!fs.existsSync(imagesDir)) {
            fs.mkdirSync(imagesDir, { recursive: true });
          }

          // Define the local image path
          const imageFileName = `event_${event.id}.png`;
          const imagePath = path.join(imagesDir, imageFileName);

          // Save the image locally
          fs.writeFileSync(imagePath, imageResponse.data);

          // Update the event data to include the local image path
          event.localImagePath = `/img/event-images/${imageFileName}`;
        } else {
          // If there's no logo, set localImagePath to null
          event.localImagePath = null;
        }

        return event;
      })
    );

    // Save events to a JSON file
    const filePath = path.join(__dirname, "../src/data/events.json");
    fs.writeFileSync(filePath, JSON.stringify(events, null, 2));
    console.log("Events data fetched and saved successfully.");
  } catch (error) {
    console.error("Error fetching events:", error);
    process.exit(1);
  }
}

fetchEvents();
