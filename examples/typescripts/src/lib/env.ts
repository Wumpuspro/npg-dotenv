import { resolve } from "path"

import { config } from "npg-dotenv"

config({ path: resolve(__dirname, "../../.env.example") })