/**
 * Created by rtholmes on 2016-06-19.
 */

import fs = require("fs");
import restify = require("restify");
import Log from "../Util";
import InsightFacade from "../controller/InsightFacade";
import { InsightDatasetKind, InsightError, NotFoundError } from "../controller/IInsightFacade";

/**
 * This configures the REST endpoints for the server.
 */
export default class Server {

    private port: number;
    private rest: restify.Server;
    private static InsightFacade: InsightFacade = new InsightFacade();

    constructor(port: number) {
        Log.info("Server::<init>( " + port + " )");
        this.port = port;
    }

    /**
     * Stops the server. Again returns a promise so we know when the connections have
     * actually been fully closed and the port has been released.
     *
     * @returns {Promise<boolean>}
     */
    public stop(): Promise<boolean> {
        Log.info("Server::close()");
        const that = this;
        return new Promise(function (fulfill) {
            that.rest.close(function () {
                fulfill(true);
            });
        });
    }

    /**
     * Starts the server. Returns a promise with a boolean value. Promises are used
     * here because starting the server takes some time and we want to know when it
     * is done (and if it worked).
     *
     * @returns {Promise<boolean>}
     */
    public start(): Promise<boolean> {
        const that = this;
        return new Promise(function (fulfill, reject) {
            try {
                Log.info("Server::start() - start");

                that.rest = restify.createServer({
                    name: "insightUBC",
                });
                that.rest.use(restify.bodyParser({mapFiles: true, mapParams: true}));
                that.rest.use(
                    function crossOrigin(req, res, next) {
                        res.header("Access-Control-Allow-Origin", "*");
                        res.header("Access-Control-Allow-Headers", "X-Requested-With");
                        return next();
                    });

                // This is an example endpoint that you can invoke by accessing this URL in your browser:
                // http://localhost:4321/echo/hello
                that.rest.get("/echo/:msg", Server.echo);

                // NOTE: your endpoints should go here

                // -------- PUT /dataset/:id/:kind --------
                that.rest.put("/dataset/:id/:kind", Server.putDataset);

                // -------- DELETE /dataset/:id --------
                that.rest.del("/dataset/:id", Server.deleteDataset);

                // -------- POST /query --------
                that.rest.post("/query", Server.postQuery);

                // -------- GET /datasets --------
                that.rest.get("/dataset", Server.getDatasets);

                // -------- GET / --------
                // This must be the last endpoint!
                that.rest.get("/.*", Server.getStatic);

                that.rest.listen(that.port, function () {
                    Log.info("Server::start() - restify listening: " + that.rest.url);
                    fulfill(true);
                });

                that.rest.on("error", function (err: string) {
                    // catches errors in restify start; unusual syntax due to internal
                    // node not using normal exceptions here
                    Log.info("Server::start() - restify ERROR: " + err);
                    reject(err);
                });

            } catch (err) {
                Log.error("Server::start() - ERROR: " + err);
                reject(err);
            }
        });
    }

    // The next two methods handle the echo service.
    // These are almost certainly not the best place to put these, but are here for your reference.
    // By updating the Server.echo function pointer above, these methods can be easily moved.
    private static echo(req: restify.Request, res: restify.Response, next: restify.Next) {
        Log.trace("Server::echo(..) - params: " + JSON.stringify(req.params));
        try {
            const response = Server.performEcho(req.params.msg);
            Log.info("Server::echo(..) - responding " + 200);
            res.json(200, {result: response});
        } catch (err) {
            Log.error("Server::echo(..) - responding 400");
            res.json(400, {error: err});
        }
        return next();
    }

    private static performEcho(msg: string): string {
        if (typeof msg !== "undefined" && msg !== null) {
            return `${msg}...${msg}`;
        } else {
            return "Message not provided";
        }
    }

    // PUT /dataset/:id/:kind
    // Example Request: http://localhost:4321/dataset/courses/courses
    // Description: allows to submit a zip file that will be parsed and used for future queries.
    //                  The zip file content will be sent 'raw' as a buffer,
    //                  you will need to convert it to base64 server side.
    // Response Codes:
    //      200: InsightFacade.addDataset() resolves
    //      400: InsightFacade.addDataset() rejects
    // Response Body:
    //      {result: arr}: array returned by addDataset
    //      {error: err}: error returned by addDataset
    private static putDataset(req: restify.Request, res: restify.Response, next: restify.Next) {
        // TODO:
        Log.trace("Server::putDataset() - start");
        // req.params: [ 'id', 'kind' ]
        let currentId = req.params.id;
        let currentKind = (req.params.kind === "courses") ? InsightDatasetKind.Courses :
                ((req.params.kind === "rooms") ? InsightDatasetKind.Rooms : null);
        // let content = Buffer.from(req.body, "base64").toString("utf-8");
        let content = Buffer.from(req.body).toString("base64");
        Server.InsightFacade.addDataset(currentId, content, currentKind).then((returnArray) => {
            res.json(200, {result: returnArray});
            // res.end();
            return next();
        }).catch((err) => {
            Log.error(err);
            res.json(400, {
                error: "Error!"
            });
            // res.end();
            return next();
        });
    }

    // DELETE /dataset/:id
    // Example Request: http://localhost:4321/dataset/courses
    // Description: deletes the existing dataset stored. This will delete both disk
    //                 and memory caches for the dataset for the id meaning that
    //                 subsequent queries for that id should fail unless a new PUT happens first.
    // Response Codes:
    //      200: InsightFacade.removeDataset() resolves
    //      400: InsightFacade.removeDataset() rejects w/ InsightError
    //      404: InsightFacade.removeDataset() rejects w/ NotFoundError
    // Response Body:
    //      {result: str}: string returned by removeDataset
    //      {error: err}: error returned by removeDataset
    private static deleteDataset(req: restify.Request, res: restify.Response, next: restify.Next) {
        // TODO:
        Log.trace("Server::deleteDataset() - start");
        let currentId = req.params.id;
        Log.info("Deleting dataset: ", currentId);
        Server.InsightFacade.removeDataset(currentId).then((returnString) => {
            res.send(200, {result: returnString});
            // res.end();
            return next();
        }).catch((err) => {
            Log.error(err);
            if (err instanceof NotFoundError) {
                res.json(404, {
                    error: "Did not find dataset!"
                });
            } else {
                res.json(400, {
                    error: "Error!"
                });
            }
            // res.end();
            return next();
        });
    }

    // POST /query
    // Example Request: http://localhost:4321/query
    // Description: sends the query to the application.
    //                 The query will be in JSON format in the post body.
    // Response Codes:
    //      200: InsightFacade.performQuery() resolves
    //      400: InsightFacade.performQuery() rejects w/ InsightError
    // Response Body:
    //      {result: arr}: array returned by performQuery
    //      {error: err}: error returned by performQuery
    private static postQuery(req: restify.Request, res: restify.Response, next: restify.Next) {
        // TODO:
        Log.trace("Server::postQuery() - start");
        let query = req.body;
        Server.InsightFacade.performQuery(query).then((returnArray) => {
            res.send(200, {result: returnArray});
            // res.end();
            return next();
        }).catch((err) => {
            res.json(400, {
                error: "Error!"
            });
            // res.end();
            return next();
        });
    }

    // GET /datasets
    // Example Request: http://localhost:4321/dataset
    // Description: returns a list of datasets that were added.
    // Response Codes:
    //      200: InsightFacade.listDatasets() resolves
    // Response Body:
    //      {result: arr}: array returned by listDatasets
    private static getDatasets(req: restify.Request, res: restify.Response, next: restify.Next) {
        // TODO:
        Log.trace("Server::getDatasets() - start");
        Server.InsightFacade.listDatasets().then((returnArray) => {
            res.json(200, {result: Object.values(returnArray)});
            // res.end();
            return next();
        });
    }

    private static getStatic(req: restify.Request, res: restify.Response, next: restify.Next) {
        const publicDir = "frontend/public/";
        Log.trace("RoutHandler::getStatic::" + req.url);
        let path = publicDir + "index.html";
        if (req.url !== "/") {
            path = publicDir + req.url.split("/").pop();
        }
        fs.readFile(path, function (err: Error, file: Buffer) {
            if (err) {
                res.send(500);
                Log.error(JSON.stringify(err));
                return next();
            }
            res.write(file);
            res.end();
            return next();
        });
    }

}
