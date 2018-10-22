"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("./routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use('/', _index.default);
var port = process.env.PORT || 3088;
app.listen(port, function () {
  console.log("App listening on port ".concat(port, "!"));
});
//# sourceMappingURL=app.js.map