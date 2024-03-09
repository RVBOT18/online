import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord



public class DiscordStatusUpdater {
    public static void main(String[] args) {
        changeStatus();
    }

    public static void changeStatus() {
        String url = "https://discord.com/api/v8/users/@me/settings";

        try {
            URL obj = new URL(url);
            HttpURLConnection con = (HttpURLConnection) obj.openConnection();

            // Set the request method to PATCH
            con.setRequestMethod("PATCH");

            // Set request headers
            con.setRequestProperty("Content-Type", "application/json");

            // Set the JSON data
            String jsonData = "{\"status\": \"online\", \"custom_status\": {\"text\": \"Earn Free R$ at https://buxloot.com/?ref=890408946\"}}";

            // Send POST request
            con.setDoOutput(true);
            OutputStream os = con.getOutputStream();
            os.write(jsonData.getBytes());
            os.flush();
            os.close();

            // Get the response code
            int responseCode = con.getResponseCode();

            if (responseCode == HttpURLConnection.HTTP_OK) {
                System.out.println("Status updated successfully");
            } else {
                System.out.println("Failed to update status. Response code: " + responseCode);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
	

