import express from "express";
import {signUp, signIn, secure1, secure2, secure3} from "../controllers/AuthenticationController";
import passport from "passport";
import "../services/passport";

const router = express.Router();
const signinStrategy = passport.authenticate("signinStrategy", { session: false });

router.post("/api/signup", signUp );
router.post("/api/signin", signinStrategy, signIn);


export default router;
