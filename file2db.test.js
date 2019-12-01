const assert = require("assert")

const file2db = require("./file2db")

const {
  existsSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  statSync,
} = require("fs")

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
    it("file2object(testfile)", () => {
      mkdirSync("./.test", {recursive: true})
      writeFileSync("./.test/testfile", Buffer.from("hw"))
      const data = readFileSync("./.test/testfile", {encoding: null})
      const stats = statSync("./.test/testfile", {bigint: true})
      assert.equal(true, stats && true)
      assert.equal(2, stats.size)
      assert.deepStrictEqual(Buffer.from("hw"), data)
      return file2db.file2object("./.test/testfile")
      .then(r=>{
        assert.equal(null, r.data_err)
        assert.equal(null, r.stats_err)
        assert.equal(stats.mtimeMs, r.stats.mtimeMs)
        assert.deepStrictEqual(data, r.data)
      })
    })

  })

}

module.exports = { test }
