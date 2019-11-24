/**
 * Builds a query object using the current document object model (DOM).
 * Must use the browser's global document object {@link https://developer.mozilla.org/en-US/docs/Web/API/Document}
 * to read DOM information.
 *
 * @returns query object adhering to the query EBNF
 */
CampusExplorer.buildQuery = function () {
    let applyKeys = [];
    let type = document.querySelector("#nav-container > nav > a.nav-item.tab.active");
    let ds = type.dataset.type;               // tab = courses or rooms, used for querySelector

    // build TRANSFORMATIONS (doing transformations first to keep track of apply keys)
    let groupBy = CampusExplorer.buildGroupBy(ds);
    let appKeyObjs = CampusExplorer.buildAppKeys(ds, applyKeys);
    for (let keyObj of appKeyObjs) {
        applyKeys.push(Object.keys(keyObj)[0]);    // keep track of apply keys
    }
    let compTrans = {GROUP: groupBy, APPLY: appKeyObjs};

    // build WHERE
    let logicString = CampusExplorer.getLogicString(ds);
    let logicComponents = CampusExplorer.buildLogicComponents(ds);
    let compWhere = {[logicString]: logicComponents};  // the WHERE object
    compWhere = CampusExplorer.adjustFilter(logicString, logicComponents, compWhere);

    // build OPTIONS
    let columns = CampusExplorer.buildColumns(ds, applyKeys);
    let order = CampusExplorer.getOrder(ds);
    let sortKeys = CampusExplorer.getSortKeys(ds, applyKeys);     // get all columns to sort by
    let compOption = {COLUMNS: columns, ORDER: {dir: order, keys: sortKeys}};
    if (sortKeys.length === 0 && order === "UP") {
        delete compOption.ORDER; // if no order selected and no sortkeys, then no ORDER is needed
    }

    let query = {};
    query = {WHERE: compWhere, OPTIONS: compOption, TRANSFORMATIONS: compTrans};
    if (groupBy.length === 0 && appKeyObjs.length === 0) {
        delete query.TRANSFORMATIONS; // if no group no apply, discard TRANSFORMATION
    }

    return query;
};

CampusExplorer.buildGroupBy = function (ds) {
    let groupBy = [];
    let groupByColumns = document.querySelector("#tab-" + ds + " > form > div.form-group.groups > div");
    for (let i = 0; i < groupByColumns.childElementCount; i++) {
        let col = groupByColumns.children[i].children[0].value;  // get column value of this column
        if (groupByColumns.children[i].children[0].checked === true) {
            col = ds + "_" + col;     // adding dataset name
            groupBy.push(col);  // push all checked columns
        }
    }
    return groupBy;
};

CampusExplorer.buildAppKeys = function (ds) {
    let appKeyObjs = [];
    let appKeyHTML = document.querySelector("#tab-" + ds + " > form > div.form-group.transformations " +
        "> div.transformations-container");
    for (let i = 0; i < appKeyHTML.childElementCount; i++) {
        let definition = appKeyHTML.children[i];
        let key = definition.children[0].children[0].value;  // apply Key name
        let op = definition.children[1].children[0];
        op = op.options[op.options.selectedIndex].value;     // operation
        let field = definition.children[2].children[0];
        field = field.options[field.options.selectedIndex].value;     // field
        field = ds + "_" + field;                                           // dataset_field

        let obj = {[key]: {[op]: field}};               // push the definition object to applyKeys
        appKeyObjs.push(obj);
    }
    return appKeyObjs;
};

CampusExplorer.buildLogicComponents = function (ds) {
    let logicContainer = document.querySelector("#tab-" + ds + " > form " +
        "> div.form-group.conditions > div.conditions-container");
    let logicComponents = [];
    for (let i = 0; i < logicContainer.childElementCount; i++) {
        let condition = logicContainer.children[i];
        let selections = condition.children[1].children[0];          // get key
        let key = selections.options[selections.options.selectedIndex].value;
        key = ds + "_" + key; // adding dataset prefix
        let operations = condition.children[2].children[0];          // get logic operation
        let op = operations.options[operations.options.selectedIndex].value;
        let value = condition.children[3].children[0].value;         // get value

        // the following function builds a logic operation, but converts value (string by default in JS to number
        let buildConditionObject = function (op, key, value) {
            if (op === "GT" || op === "EQ" || op === "LT") {
                if (!isNaN(value)) {
                    value = Number(value);
                }
            }
            let obj = {[op]: {[key]: value}};
            return obj;
        };

        let component = buildConditionObject(op, key, value);
        // check if NOT is selected
        if (condition.children[0].children[0].checked === true) {
            component = {NOT: component};
        }
        logicComponents.push(component);
    }

    return logicComponents;
};

CampusExplorer.buildColumns = function (ds, applyKeys) {
    let columns = [];
    let columnHTML = document.querySelector("#tab-" + ds + " > form > div.form-group.columns > div");
    // console.log(columnHTML.childElementCount);
    for (let i = 0; i < columnHTML.childElementCount; i++) {
        let col = columnHTML.children[i].children[0].value;  // get column value of this column
        if (columnHTML.children[i].children[0].checked === true) {
            if (!applyKeys.includes(col)) {
                col = ds + "_" + col;         // add dataset field if it's not applyKey
            }
            columns.push(col);  // push all checked columns
        }
    }
    return columns
};

CampusExplorer.getSortKeys = function (ds, applyKeys) {
    let sortKeys = [];
    let sortKeyColumns = document.querySelector("#tab-" + ds + " > form > div.form-group.order " +
        "> div > div.control.order.fields > select");
    for (let i = 0; i < sortKeyColumns.childElementCount; i++) {
        let col = sortKeyColumns.children[i].value;
        if (sortKeyColumns.children[i].selected === true) {
            if (!applyKeys.includes(col)) {
                col = ds + "_" + col;         // add dataset field if it's not applyKey
            }
            sortKeys.push(col);
        }
    }
    return sortKeys;
};

CampusExplorer.getLogicString = function (ds) {
    let logicString = "";
    if (document.querySelector("#" + ds + "-conditiontype-all").checked === true) {
        logicString = "AND";
    } else if (document.querySelector("#" + ds + "-conditiontype-any").checked === true) {
        logicString = "OR";
    } else if (document.querySelector("#" + ds + "-conditiontype-none").checked === true) {
        logicString = "NOT";
    }
    return logicString;
};

CampusExplorer.adjustFilter = function (logicString, logicComponents, compWhere) {
    if (logicComponents.length === 0) {
        delete compWhere[logicString];
    } else if (logicComponents.length === 1 && logicString !== "NOT") {
        compWhere = logicComponents[0];
    } else if (logicComponents.length === 1 && logicString === "NOT") {
        compWhere = {[logicString]: logicComponents[0]};
    } else if (logicString === "NOT") {
        compWhere = {[logicString]: {AND: logicComponents}};
    }
    return compWhere;
};

CampusExplorer.getOrder = function (ds) {
    return document.querySelector("#" + ds + "-order").checked ? "DOWN" : "UP";  // sort direction
};
