import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

let aiClient: GoogleGenAI | null = null;

function getAIClient() {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("WARNING: GEMINI_API_KEY environment variable is missing.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// API endpoint for Gear Concierge
app.post("/api/concierge", async (req, res) => {
  try {
    const { inputs, locale = "en" } = req.body;
    if (!inputs) {
      return res.status(400).json({ error: "Missing farm inputs" });
    }

    const {
      landSize,
      soilType,
      cropType,
      budget,
      powerAvailability,
      primaryChallenges
    } = inputs;

    const systemInstruction = locale === "hi"
      ? `आप एसबी एग्रोटेक कंपनी के प्रमुख कृषि मशीनरी और भूमि विकास विशेषज्ञ (एआई सलाहकार) हैं। 
आपका कार्य किसान के इनपुट के आधार पर एक बेहद सटीक, व्यावहारिक और व्यावहारिक कृषि गियर योजना तैयार करना है।
आपको प्रतिक्रिया पूरी तरह से हिंदी भाषा में और प्रदान की गई JSON योजना के अनुसार देनी होगी। सभी तकनीकी शब्द जैसे कि हॉर्सपावर, कल्टीवेटर, रोटावेटर आदि देवनागरी लिपि या समझने योग्य सरल भाषा में होने चाहिए।`
      : `You are the lead Agriculture Machinery & Land Development Expert (AI Advisor) for SB Agrotech.
Your job is to generate a highly precise, practical, and localized agricultural gear recommendation plan based on the farmer's inputs.
You must respond entirely in English and strictly conform to the requested JSON schema. Make it highly professional, technical, and encouraging.`;

    const prompt = `
Analyze the following farm details to create a custom machinery match plan:
1. Farm Size: ${landSize} Acres
2. Soil Type: ${soilType}
3. Main Crop: ${cropType}
4. Budget Bracket: ${budget}
5. Tractor Power Preference: ${powerAvailability}
6. Primary Farm Challenge: ${primaryChallenges}

We manufacture:
- SB-55 Pro Power Tractor (55 HP heavy commercial)
- SB Orchard-30 Compact Tractor (30 HP compact for narrow orchard fields)
- SB Rotavator Extreme (Boron steel 6-foot rotavator, excellent for hard/clay soils)
- SB SeedMaster Seeder & Drill (9-row automatic seed spacing seeder)
- SB-90 Combine Harvester (101 HP self-propelled grain harvester)
- SB Reversible Spring Plow (rock safety spring-loaded reversible soil plow)

Please recommend the best tractor match and implement match from our catalog, provide specific field timing, and calculate estimated productivity boost (e.g., percentage reductions in labor or time). Ensure the response is localized and optimized for the challenges described.
`;

    const client = getAIClient();
    
    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["tractorHp", "tractorReason", "implements", "expertAdvice", "timeline", "roiEstimate"],
          properties: {
            tractorHp: {
              type: Type.STRING,
              description: "Short recommended Tractor HP recommendation (e.g. 30 HP, 55 HP, or customized)"
            },
            tractorReason: {
              type: Type.STRING,
              description: "Deep explanation of why this tractor size / HP fits the acreage and challenges."
            },
            implements: {
              type: Type.ARRAY,
              description: "List of recommended implements / machinery from SB Agrotech catalog.",
              items: {
                type: Type.OBJECT,
                required: ["name", "purpose", "expectedBenefit"],
                properties: {
                  name: { type: Type.STRING, description: "Name of the SB Agrotech model (e.g. SB Rotavator Extreme)" },
                  purpose: { type: Type.STRING, description: "Exactly what this will do for their specific soil / crop." },
                  expectedBenefit: { type: Type.STRING, description: "What efficiency or result boost to expect (e.g. 40% time saved)." }
                }
              }
            },
            expertAdvice: {
              type: Type.STRING,
              description: "Bespoke soil, crop, and challenge-management guidance."
            },
            timeline: {
              type: Type.ARRAY,
              description: "Suggested crop calendar timeline with machinery utilization stages.",
              items: {
                type: Type.OBJECT,
                required: ["stage", "action", "machineryUsed"],
                properties: {
                  stage: { type: Type.STRING, description: "Stage name (e.g. Soil Preparation, Sowing, Harvesting)" },
                  action: { type: Type.STRING, description: "What to do in this phase." },
                  machineryUsed: { type: Type.STRING, description: "Which machine is used for this step." }
                }
              }
            },
            roiEstimate: {
              type: Type.STRING,
              description: "Brief summary of calculated return on investment or productivity gains."
            }
          }
        }
      }
    });

    const resultText = response.text || "{}";
    const parsedData = JSON.parse(resultText);
    res.json(parsedData);

  } catch (error: any) {
    console.error("Error in concierge endpoint:", error);
    res.status(500).json({ 
      error: "Failed to generate recommendation. Please ensure GEMINI_API_KEY is configured in Secrets.",
      details: error.message 
    });
  }
});

// Serve frontend assets
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    // Development Mode with Vite HMR Server as Middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Running in DEVELOPMENT mode with Vite middleware.");
  } else {
    // Production Mode serving compiled static assets
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Running in PRODUCTION mode.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SB Agrotech server listening on http://0.0.0.0:${PORT}`);
  });
}

setupServer();
