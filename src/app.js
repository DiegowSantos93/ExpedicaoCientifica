import "dotenv/config"
import express from "express"
import explorerRoute from "./routes/explorer-route.js"
import speciesRoute from "./routes/species-route.js"
import expeditionRoute from "./routes/expedition-route.js"

const app = express();

app.use(express.json());

app.use("/explorer", explorerRoute)

app.use("/species", speciesRoute)

app.use("/expedition", expeditionRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server is running in port ${process.env.PORT}`)
});