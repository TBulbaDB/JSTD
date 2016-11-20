var grid = function (width, height) {
    return new Array(width, height);
}

var gridTests = function (qUnit) {
    //var testConsole = $("#test-console");
    //function writeLine(value) {
    //    testConsole.appendChild("<div>" + value + "</div>");
    //}

    function testCreateGrid() {
        qUnit.test("create grid", function (assert) {
            var testGrid = grid(10, 10);
            assert.ok(1 === "1", "Passed!");
        });
    }

    return {
        TestAll: function() {
            testCreateGrid();
        }
    }
}(window.QUnit);
