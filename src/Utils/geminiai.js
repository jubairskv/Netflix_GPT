/* eslint-disable no-unused-vars */
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../Utils/constant";

const genAI = new GoogleGenerativeAI({key:GEMINI_API_KEY})

export default genAI;