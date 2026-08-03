
function searchBooks(library, authorName) {

    result = [];
    const booksByAuth = library.filter(book => book.author.includes(authorName));

    if (booksByAuth.length == 0)
    {
        result.push('NOT FOUND');
    }

    else
    {
        result = [];
        for (let i = 0; i < booksByAuth.length; i++){
            result.push(booksByAuth[i].title);
        }
    }


    return result.join(",");
}