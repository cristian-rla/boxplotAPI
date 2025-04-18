// Por protocolo fue incluida la capa de rutas, aunque para este proyecto solo se tiene un endpoint.
import express from "express"
import boxplotHandler from "../handlers/boxplot"

const router = express.Router();

router.get("/", boxplotHandler.getBoxplot);

export default router;