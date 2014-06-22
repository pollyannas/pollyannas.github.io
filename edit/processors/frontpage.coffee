module.exports = (doc) ->
  doc.sections = doc._data.sections
  doc.sectionWidth = "#{100/doc.sections.length}%"
  return doc
