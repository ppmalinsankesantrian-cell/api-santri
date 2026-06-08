const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const students = [
  {
    uid: "D045665F",
    nama: "KOSONG",
    kelas: "12",
    kamar: "Rayon 5"
  }
];

app.get("/api-santri", (req, res) => {
  const uid = req.query.uid;

  const santri = students.find(
    s => s.uid.toUpperCase() === uid.toUpperCase()
  );

  if (santri) {
    res.json(santri);
  } else {
    res.json({
      status: false,
      message: "Santri tidak ditemukan"
    });
  }
});

app.listen(process.env.PORT || 3000);
