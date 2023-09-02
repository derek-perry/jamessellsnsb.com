import { google } from "googleapis";

export async function getListings() {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      null,
      process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.NEXT_PUBLIC_SHEET_ID,
      range: "listings!A1:M",
      valueRenderOption: "FORMULA"
    });

    const rows = response.data.values;

    if (rows.length) {
      return rows.map((row) => ({
        address: row[0] || null,
        city: row[1] || null,
        description: row[2] || null,
        price: row[3] || null,
        image1: row[4] || null,
        image2: row[5] || null,
        image3: row[6] || null,
        image4: row[7] || null,
        image5: row[8] || null,
        image6: row[9] || null,
        image7: row[10] || null,
        image8: row[11] || null,
        image9: row[12] || null,
        image10: row[13] || null
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}