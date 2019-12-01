const assert = require("assert")

const file2db = require("./file2db")

const test = () => {

  describe("file2db.js", () => {

    it("file2object(empty)", () => {
      return file2db.file2object()
      .then(r=>{
        const {
          data_err,
          data,
          stats_err,
          stats,
        } = r || {}
        assert.equal(true, data_err  && true)
        assert.equal(true, stats_err && true)
      })
    })
    it("file2object(undefined)", () => {
      return file2db.file2object(undefined)
      .then(r=>{
        const {
          data_err,
          data,
          stats_err,
          stats,
        } = r || {}
        assert.equal(true, data_err  && true)
        assert.equal(true, stats_err && true)
      })
    })
    it("file2object(null)", () => {
      return file2db.file2object(null)
      .then(r=>{
        const {
          data_err,
          data,
          stats_err,
          stats,
        } = r || {}
        assert.equal(true, data_err  && true)
        assert.equal(true, stats_err && true)
      })
    })
    it("file2object('')", () => {
      return file2db.file2object("")
      .then(r=>{
        const {
          data_err,
          data,
          stats_err,
          stats,
        } = r || {}
        assert.equal(true, data_err  && true)
        assert.equal(true, stats_err && true)
      })
    })

  })

}

module.exports = { test }
