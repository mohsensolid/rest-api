var bookController = function(Book){
    var get = function(req,res){
    var query = {};
    if(req.query.genre)
    {
        query.genre = req.query.genre;
    }
    Book.find(query,function(err,books){
        if(err)
        {
        res.status(500).send(err);
        }else
        {
        res.json(books);
        }
    });
   
};
    var post = function(req,res){
    var book = Book(req.body);
    book.save();
    console.log(book);
    res.status(201).send(book);
};
    return{
        post:post,
        get:get
    };
};
module.exports = bookController;