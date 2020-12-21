const express       = require("express");
const bodyParser    = require("body-parser");
const cors          = require("cors");

const api = express();
const port = 3000;

const router = express.Router();

const studentRouter = require("./router/studentRouter");
api.use(cors())
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: true}));

router.get("/", (req, resp) => resp.json({
    message: '=>>>> API Online'
}));

api.use("/", router);
api.use("/student", studentRouter);
api.listen(port);
console.log('run API Express');