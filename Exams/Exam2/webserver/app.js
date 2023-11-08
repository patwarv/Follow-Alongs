const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
const dbFilePath = path.join(__dirname, '..', 'data', 'db.json');

function readDbFile() {
  const fileData = fs.readFileSync(dbFilePath, 'utf-8');
  const data = JSON.parse(fileData);
  return data.months || []; 
}

function writeDbFile(months) {
  const dataToWrite = JSON.stringify({ months: months }, null, 2);
  fs.writeFileSync(dbFilePath, dataToWrite, 'utf8');
}

app.get('/api/getmonths', (req, res) => {
  const months = readDbFile();
  res.json({ months }); 
});

app.put('/api/move/:fromIndex/:toIndex', (req, res) => {
  const { fromIndex, toIndex } = req.params;
  let months = readDbFile();
  const fromIdx = parseInt(fromIndex, 10);
  const toIdx = parseInt(toIndex, 10);

  const movedMonth = months.splice(fromIdx, 1)[0];
  months.splice(toIdx, 0, movedMonth);
  writeDbFile(months);
  res.json({ months, movedMonth, fromIndex: fromIdx, toIndex: toIdx });
});

app.post('/api/setmonths', (req, res) => {
  const { months } = req.body;

  if (!months || !Array.isArray(months) || months.length !== 12) {
    return res.status(400).json({ error: "Invalid months array" });
  }
  writeDbFile(months);
  res.json({ months }); 
});

(function initializeDbFile() {
  if (!fs.existsSync(dbFilePath)) {
    writeDbFile([
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ]);
  }
})();

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
