describe("sendQuery test suite", function() {

    let queryFixtures = TTT.getQueryFixtures();
    let queryDescriptions = TTT.getQueryDescriptions();
    for (let queryName in queryFixtures) {
        if (queryFixtures.hasOwnProperty(queryName)) {
            let query = queryFixtures[queryName];
            if (TTT.hasHtmlFixture(queryName)) {
                it(`~Sea${queryName}~Should be able to send a ${queryDescriptions[queryName]}`, function() {
                    expect(CampusExplorer.sendQuery(query)).to.sendAjaxRequest(query);
                });
            }
        }
    }

});
