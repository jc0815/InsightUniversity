
/**
 * Receives a query object as parameter and sends it as Ajax request to the POST /query REST endpoint.
 *
 * @param query The query object
 * @returns {Promise} Promise that must be fulfilled if the Ajax request is successful and be rejected otherwise.
 */
CampusExplorer.sendQuery = function(query) {
    return new Promise(function(fulfill, reject) {
        let req = new XMLHttpRequest();
        try {
            // request function taken from:
            // https://stackoverflow.com/questions/9713058/send-post-data-using-xmlhttprequest
            // console.log("1");
            req.open("POST", "http://localhost:4321/query", true);
            req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            req.send(JSON.stringify(query));
            // console.log("2");
            req.onload = () => {
                // console.log("3");
                if (req.status === 200) {
                    let jsonResponse = JSON.parse(req.responseText);
                    // console.log(req);
                    fulfill(jsonResponse);
                } else {
                    reject();
                }
            };
        } catch (err) {
            reject(err);
        }
    });
};
