const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://darienperpepa:${password}@cluster0fso.tc28ubi.mongodb.net/noteApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Node is quite confusing...',
  important: true,
})

note.save().then(result => {
  console.log(`Added note - > Content: ${note.content}  Important: ${note.important}`)
  mongoose.connection.close()
})