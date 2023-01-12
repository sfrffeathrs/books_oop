class LS {
    addBook(book){
        let books = this.getData('books_oop')
        books.push(book)
        this.setData('books_oop', books)
    }

    getData(name){
        let data // array for user input
        if(localStorage.getItem(name) === null){
            data = []
        } else {
            data = JSON.parse(localStorage.getItem(name))
        }
        return data
    }

    setData(name, data){
        localStorage.setItem(name, JSON.stringify(data))
    }
}