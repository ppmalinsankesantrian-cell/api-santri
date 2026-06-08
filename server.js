const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const BASE44_APP_ID = "69eabbe48b257f7737097f4e";
const BASE44_API_KEY = "48e999e43f7d4b11bc3896afa62cd578";

app.get("/api-santri", async (req, res) => {

const uid = req.query.uid;

try {

```
const response = await fetch(
  `https://app.base44.com/api/apps/${BASE44_APP_ID}/entities/Student`,
  {
    headers: {
      api_key: BASE44_API_KEY
    }
  }
);

const students = await response.json();

const santri = students.find(
  s =>
    s.rfid_uid &&
    s.rfid_uid.toUpperCase() === uid.toUpperCase()
);

if (santri) {

  res.json({
    uid: santri.rfid_uid,
    nama: santri.name,
    kelas: santri.kelas,
    kamar: santri.kamar
  });

} else {

  res.json({
    status: false,
    message: "Santri tidak ditemukan"
  });

}
```

} catch (err) {

```
res.status(500).json({
  status: false,
  error: err.message
});
```

}

});

app.listen(process.env.PORT || 3000);
