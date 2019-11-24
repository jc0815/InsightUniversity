import Server from "./rest/Server";
import Log from "./Util";

/**
 * Main app class that is run with the node command. Starts the server.
 */
export class App {
    public initServer(port: number) {
        Log.info("App::initServer( " + port + " ) - start");

        const server = new Server(port);
        server.start().then(function (val: boolean) {
            Log.info("App::initServer() - started: " + val);
        }).catch(function (err: Error) {
            Log.error("App::initServer() - ERROR: " + err.message);
        });
    }
}

// This ends up starting the whole system and listens on a hardcoded port (4321)
Log.info("App - starting");
const app = new App();
app.initServer(4321);
