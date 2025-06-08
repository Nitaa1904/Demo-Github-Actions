"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
exports.startServer = startServer;
exports.stop = stop;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
let server;
app.use((0, cors_1.default)({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
}));
app.use(body_parser_1.default.json({ limit: "100kb" }));
app.use("/recipes", require("./routes/recipes"));
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const port = 3000;
            exports.server = server = app.listen(port, () => {
                console.log(`Service ready on :${port}`);
            });
        }
        catch (error) {
            console.error("Failed to connect to the database:", error);
            process.exit(1);
        }
    });
}
function stop() {
    console.log("Stopping server");
    server.close();
}
startServer();
