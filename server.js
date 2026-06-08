module.exports = async (req, res) => {

try {

```
const response = await fetch(
  "https://app.base44.com/api/apps/69eabbe48b257f7737097f4e/entities/Student",
  {
    headers: {
      api_key: "48e999e43f7d4b11bc3896afa62cd578"
    }
  }
);

const data = await response.text();

return res.status(200).send(data);
```

} catch (err) {

```
return res.status(500).json({
  error: err.message
});
```

}

};
