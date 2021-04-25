let DUMMY_DB = [
    {
        id:'b1',
        title:'title for book1',
        description:'description for book1',
        authorID:'a1',
        category:'horror'
    },
    {
        id:'b2',
        title:'title for book2',
        description:'description for book2',
        authorID:'a2',
        category:'Historic'
    },
    {
        id:'b3',
        title:'title for book3',
        description:'description for book3',
        authorID:'a1',
        category:'Programming'
    }
]

const allBooks = (req,res)=>{
     res.status(200).json({books: DUMMY_DB})
}
const show = (req,res)=>{
    const bookId = req.params.bookId
    const book = DUMMY_DB.find(db=>db.id === bookId)
    if(!book) res.status(404).json({Msg:"book not found.."})
    res.status(200).json({book})
}
const search = (req,res)=>{
    res.search("you can find book from this endpoint")
}
const booksByAuthor = (req,res)=>{
    const authorId = req.params.authorId
    const books = DUMMY_DB.filter(db=> db.authorID ===authorId)
    res.status(200).json({books})
}
const addBook = (req,res)=>{
    const {id,title,description,authorID,category} = req.body
    const newBook = {id,title,description,authorID,category}
    DUMMY_DB.push(newBook)
    res.status(201).json({Added_Book: newBook})
}
const update = (req,res)=>{
    let bookId = req.params.bookId
    const {id,title,description,authorID,category} = req.body
    const book = DUMMY_DB.find(db=>db.id === bookId)

    book.title = title
    book.description = description
    book.category = category

    const bookIndex = DUMMY_DB.findIndex(db=>db.id === bookId)
    DUMMY_DB[bookIndex] = book
    res.status(200).json({updatedBook: book})
}
const delBook = (req,res)=>{
    let bookId = req.params.bookId
    DUMMY_DB = DUMMY_DB.filter(db=>db.id !== bookId)
    res.status(200).json({msg:'book with id ' +bookId+ ' deleted successfully'})
}
exports.index = allBooks
exports.show = show
exports.search = search
exports.booksByAuthor = booksByAuthor
exports.addBook = addBook
exports.update = update
exports.delete = delBook