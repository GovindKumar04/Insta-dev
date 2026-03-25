import { model } from "../configs/AiModel.js";
import Prompt from "../data/Prompt.js";

export const aiChatGen = async (req, res) => {
  try {

    const { prompt } = req.body;

    const result = await model.generateContent(
      prompt + Prompt.CHAT_PROMPT
    );

    const text = result.response.text();

    return res.status(200).json({
      message: "AI chat response",
      success: true,
      result: text
    });

  } catch (error) {

    console.log("Gemini chat error:", error);

    return res.status(503).json({
      message: "Gemini chat response error",
      success: false,
      geminiError: true,
      error: error.message
    });

  }
};


export const aiCodeGen = async (req, res) => {
  try {

    const { prompt } = req.body;

    let result;
    let attempts = 3;

    // Retry logic for Gemini overload
    while (attempts > 0) {
      try {

        result = await model.generateContent(
          prompt + Prompt.CODE_GEN_PROMPT
        );

        break;

      } catch (error) {

        if (error.status === 503 && attempts > 1) {

          console.log("Gemini overloaded, retrying...");
          await new Promise(resolve => setTimeout(resolve, 2000));
          attempts--;

        } else {

          throw error;

        }

      }
    }

    const text = result.response.text();

    console.log("RAW GEMINI RESPONSE:", text);

    // Step 1: remove markdown code blocks
    let cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Step 2: extract pure JSON if extra text exists
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");

    if (start !== -1 && end !== -1) {
      cleaned = cleaned.substring(start, end + 1);
    }

    console.log("CLEANED JSON:", cleaned);

    const parsedResult = JSON.parse(cleaned);

    return res.status(200).json({
      success: true,
      result: parsedResult
    });

  } catch (error) {

    console.log("Gemini code error:", error);

    return res.status(503).json({
      success: false,
      message: "Gemini service overloaded or invalid response",
      error: error.message
    });

  }
};

export const aiPromptEnhance = async (req, res) => {
    try {

        const { prompt } = req.body;

        const result = await model.generateContent(
            prompt + Prompt.ENHANCE_PROMPT
        );

        const text = result.response.text();

        return res.status(200).json({
            message: "AI prompt enhance response",
            success: true,
            result: text
        });

    } catch (error) {

        console.log("Gemini enhance error:", error);

        return res.status(503).json({
            message: "Gemini prompt enhance error",
            success: false,
            geminiError: true,
            error: error.message
        });
    }
};