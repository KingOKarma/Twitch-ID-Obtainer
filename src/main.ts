import { CONFIG } from "./utils/globals";
import fetch from "node-fetch";

async function getSubs(): Promise<void> {
    const res = await fetch("https://api.twitch.tv/helix/users?=king_o_karma", {
        headers: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "Authorization": `Bearer ${CONFIG.accessToken}`,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            "Client-ID": CONFIG.clientID
        }
    });
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!res.ok) {
        return void console.error("Could not retieve data from the Twitch API");
    }

    const { data } = await res.json();
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!data) {
        return void console.error("Could not retrieve data from the Twitch API");
    }

    console.log(data);
}

void getSubs();
