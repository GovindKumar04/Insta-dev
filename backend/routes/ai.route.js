import { Router } from "express";
import { aiChatGen, aiCodeGen, aiPromptEnhance } from "../controllers/ai.controller.js";
import { isAuthenticated } from "../db/auth.js";
import { model } from "../configs/AiModel.js";

const router = Router();

router.route("/chat").post(isAuthenticated, aiChatGen);
router.route("/code").post(isAuthenticated, aiCodeGen);
router.route("/enhance").post(isAuthenticated, aiPromptEnhance);

// Test route to check Gemini API
router.get("/test-ai", async (req, res) => {
    try {

        const result = await model.generateContent("Say hello");

        res.json({
            success: true,
            result: result.response.text()
        });

    } catch (error) {

        console.log("AI TEST ERROR:", error);

        res.json({
            success: false,
            error: error.message
        });
    }
});

export default router;