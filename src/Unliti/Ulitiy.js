const getStoredBook = () => {

    const storedBook = localStorage.getItem('read-book');
    if(storedBook){
        return JSON.parse(storedBook);
    }
    return [];
}


const saveBook = id => {
    const storedBook = getStoredBook();
    const exists = storedBook.find(bookId => bookId === id);
    if(!exists){
        storedBook.push(id);
        localStorage.setItem('read-book', JSON.stringify(storedBook)
        )
    }
}

export {saveBook, getStoredBook} 