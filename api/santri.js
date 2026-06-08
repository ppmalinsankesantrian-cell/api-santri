module.exports = (req, res) => {
  const uid = req.query.uid;

  res.status(200).json({
    uid,
    nama: "TEST",
    kelas: "12",
    kamar: "Rayon 5"
  });
};
