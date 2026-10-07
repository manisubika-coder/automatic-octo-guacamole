pythonimport google.generativeai as genai

genai.configure(api_key="YOUR_GEMINI_API_KEY")

model = genai.GenerativeModel('gemini-1.5-flash')

def learning_assistant(question):
    prompt = f"You are a learning assistant. Explain simply: {question}"
    response = model.generate_content(prompt)
    return response.text

# Test
print(learning_assistant("What is Computer Vision?"))For JavaScript version - javascript.js:javascriptimport { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("YOUR_API_KEY");

async function run(question) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(`Explain as a teacher: ${question}`);
  console.log(result.response.text());
}
run("What is CNN?");http://requirements.txt:

streamlit
google-generativeai


