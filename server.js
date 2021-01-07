import express from 'express'
import { getAllAuthors, getAuthorByIdOrName } from './controllers/authors'
import { getAllGenres, getGenreById } from './controllers/genres'
import { getAllNovels, getNovelByIdOrTitle } from './controllers/novels'

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:identifier', getAuthorByIdOrName)

app.get('/genres', getAllGenres)
app.get('/genres/:id', getGenreById)

app.get('/novels', getAllNovels)
app.get('/novels/:identifier', getNovelByIdOrTitle)

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})
