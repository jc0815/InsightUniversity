"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const restify = require("restify");
const Util_1 = require("../Util");
const InsightFacade_1 = require("../controller/InsightFacade");
const IInsightFacade_1 = require("../controller/IInsightFacade");
class Server {
    constructor(port) {
        Util_1.default.info("Server::<init>( " + port + " )");
        this.port = port;
    }
    stop() {
        Util_1.default.info("Server::close()");
        const that = this;
        return new Promise(function (fulfill) {
            that.rest.close(function () {
                fulfill(true);
            });
        });
    }
    start() {
        const that = this;
        return new Promise(function (fulfill, reject) {
            try {
                Util_1.default.info("Server::start() - start");
                that.rest = restify.createServer({
                    name: "insightUBC",
                });
                that.rest.use(restify.bodyParser({ mapFiles: true, mapParams: true }));
                that.rest.use(function crossOrigin(req, res, next) {
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header("Access-Control-Allow-Headers", "X-Requested-With");
                    return next();
                });
                that.rest.get("/echo/:msg", Server.echo);
                that.rest.put("/dataset/:id/:kind", Server.putDataset);
                that.rest.del("/dataset/:id", Server.deleteDataset);
                that.rest.post("/query", Server.postQuery);
                that.rest.get("/dataset", Server.getDatasets);
                that.rest.get("/.*", Server.getStatic);
                that.rest.listen(that.port, function () {
                    Util_1.default.info("Server::start() - restify listening: " + that.rest.url);
                    fulfill(true);
                });
                that.rest.on("error", function (err) {
                    Util_1.default.info("Server::start() - restify ERROR: " + err);
                    reject(err);
                });
            }
            catch (err) {
                Util_1.default.error("Server::start() - ERROR: " + err);
                reject(err);
            }
        });
    }
    static echo(req, res, next) {
        Util_1.default.trace("Server::echo(..) - params: " + JSON.stringify(req.params));
        try {
            const response = Server.performEcho(req.params.msg);
            Util_1.default.info("Server::echo(..) - responding " + 200);
            res.json(200, { result: response });
        }
        catch (err) {
            Util_1.default.error("Server::echo(..) - responding 400");
            res.json(400, { error: err });
        }
        return next();
    }
    static performEcho(msg) {
        if (typeof msg !== "undefined" && msg !== null) {
            return `${msg}...${msg}`;
        }
        else {
            return "Message not provided";
        }
    }
    static putDataset(req, res, next) {
        Util_1.default.trace("Server::putDataset() - start");
        let currentId = req.params.id;
        let currentKind = (req.params.kind === "courses") ? IInsightFacade_1.InsightDatasetKind.Courses :
            ((req.params.kind === "rooms") ? IInsightFacade_1.InsightDatasetKind.Rooms : null);
        let content = Buffer.from(req.body).toString("base64");
        Server.InsightFacade.addDataset(currentId, content, currentKind).then((returnArray) => {
            res.json(200, { result: returnArray });
            return next();
        }).catch((err) => {
            Util_1.default.error(err);
            res.json(400, {
                error: "Error!"
            });
            return next();
        });
    }
    static deleteDataset(req, res, next) {
        Util_1.default.trace("Server::deleteDataset() - start");
        let currentId = req.params.id;
        Util_1.default.info("Deleting dataset: ", currentId);
        Server.InsightFacade.removeDataset(currentId).then((returnString) => {
            res.send(200, { result: returnString });
            return next();
        }).catch((err) => {
            Util_1.default.error(err);
            if (err instanceof IInsightFacade_1.NotFoundError) {
                res.json(404, {
                    error: "Did not find dataset!"
                });
            }
            else {
                res.json(400, {
                    error: "Error!"
                });
            }
            return next();
        });
    }
    static postQuery(req, res, next) {
        Util_1.default.trace("Server::postQuery() - start");
        let query = req.body;
        Server.InsightFacade.performQuery(query).then((returnArray) => {
            res.send(200, { result: returnArray });
            return next();
        }).catch((err) => {
            res.json(400, {
                error: "Error!"
            });
            return next();
        });
    }
    static getDatasets(req, res, next) {
        Util_1.default.trace("Server::getDatasets() - start");
        Server.InsightFacade.listDatasets().then((returnArray) => {
            res.json(200, { result: Object.values(returnArray) });
            return next();
        });
    }
    static getStatic(req, res, next) {
        const publicDir = "frontend/public/";
        Util_1.default.trace("RoutHandler::getStatic::" + req.url);
        let path = publicDir + "index.html";
        if (req.url !== "/") {
            path = publicDir + req.url.split("/").pop();
        }
        fs.readFile(path, function (err, file) {
            if (err) {
                res.send(500);
                Util_1.default.error(JSON.stringify(err));
                return next();
            }
            res.write(file);
            res.end();
            return next();
        });
    }
}
Server.InsightFacade = new InsightFacade_1.default();
exports.default = Server;
//# sourceMappingURL=Server.js.map