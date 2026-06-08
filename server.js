module.exports = async (req, res) => {

  const uid = req.query.uid;

  if (!uid) {
    return res.status(400).json({
      status: false,
      message: "UID kosong"
    });
  }

  try {

    const response = await fetch(
      "https://app.base44.com/api/apps/69eabbe48b257f7737097f4e/entities/Student",
      {
        headers: {
          api_key: "48e999e43f7d4b11bc3896afa62cd578"
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

      return res.status(200).json({
        uid: santri.rfid_uid,
        nama: santri.name,
        kelas: santri.kelas,
        kamar: santri.kamar
      });

    }

    return res.status(404).json({
      status: false,
      message: "Santri tidak ditemukan"
    });

  } catch (err) {

    return res.status(500).json({
      status: false,
      error: err.message
    });

  }

};
