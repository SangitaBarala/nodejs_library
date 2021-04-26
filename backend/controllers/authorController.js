let DUMMY_DB = [
    {
        authorID:'a1',
        bookId:'b1',
        name:'name of author1',
        language:'English',
        email:'author1@gmail.com'
    },
    {
        authorID:'a2',
        bookId:'b2',
        name:'name of author2',
        language:'English',
        email:'author2@gmail.com'
    },
    {
        authorID:'a3',
        bookId:'b1',
        name:'name of author3',
        language:'French',
        email:'author3@gmail.com'
    }
]

const bookList = (req,res)=>{
    res.status(200).json({authors: DUMMY_DB})
}
const show = (req,res)=>{
    const authorId = req.params.authorID
    const author = DUMMY_DB.find(db=>db.id ===authorId)
    if(!author){
        res.status(404).json({msg:"author does not exist"})
    }
    res.status(200).json({author:author})
}
const addAuthor = (req,res)=>{
    const {authorID,bookId,name,language,email} = req.body
    const newAuthor = {authorID,bookId,name,language,email}
    DUMMY_DB.push(newAuthor)
    res.status(201).json({added:newAuthor})
}
exports.bookList = bookList
exports.show = show
exports.addAuthor = addAuthor