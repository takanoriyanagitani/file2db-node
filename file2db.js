const {
  readFile,
  stat,
} = require("fs")

const file2object = filename => {
  return new Promise(resolve => readFile(
    filename || "",
    { encoding: null },
    (data_err, data) => resolve({data_err, data})
  ))
  .then(r=>{
    const {
      data_err,
      data,
    } = r || {}
    return new Promise(resolve => stat(
      filename || "",
      { bigint: true },
      (stats_err, stats) => resolve({
        data_err,
        data,
        stats_err,
        stats,
      })
    ))
  })
}

module.exports = {
  file2object,
}
