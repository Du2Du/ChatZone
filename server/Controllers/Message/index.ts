import { app, express } from "../..";

const router = express.Router();

router.get("/", () => {
  return "Ola mundo";
});

module.exports = router;
