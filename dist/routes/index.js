"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.use(_bodyParser.default.json());

var getRandomInt = function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

router.get('/health', function (req, res) {
  res.send({
    ok: true
  });
});
router.get('/result', function (req, res) {
  var items = JSON.parse(req.query.items);
  var length = items.length;
  var index = getRandomInt(1, length + 1);
  res.json({
    items: items,
    result: items[index - 1]
  });
});
router.post('/result', function (req, res) {
  var items = req.body.items;
  var length = items.length;
  var index = getRandomInt(1, length + 1);
  res.json({
    items: items,
    result: items[index - 1]
  });
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map