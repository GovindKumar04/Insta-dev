import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// try primary model first
let model;

try {
  model = genAI.getGenerativeModel({
    model: "gemini-3-flash-preview"
  });
} catch (error) {
  console.log("Primary model unavailable, switching to fallback...");
  
  model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash"
  });
}

export { model };