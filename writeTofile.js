import fs from "fs";
// Function to write data to a JSON file
export const writeToFile = (fileName, data) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2), "utf8");
    console.log(`Data successfully written to ${fileName}`);
  } catch (error) {
    console.error("Error writing to file:", error);
  }
};