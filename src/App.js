"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./rest/Server");
const Util_1 = require("./Util");
class App {
    initServer(port) {
        Util_1.default.info("App::initServer( " + port + " ) - start");
        const server = new Server_1.default(port);
        server.start().then(function (val) {
            Util_1.default.info("App::initServer() - started: " + val);
        }).catch(function (err) {
            Util_1.default.error("App::initServer() - ERROR: " + err.message);
        });
    }
}
exports.App = App;
Util_1.default.info("App - starting");
const app = new App();
app.initServer(4321);
//# sourceMappingURL=App.js.map