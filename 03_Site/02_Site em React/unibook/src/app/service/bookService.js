class BookService {
  consultarLivro(isbn) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&startIndex=0&all&lite&orderBy=relevance`,
      {
        method: "GET",
        mode: "cors",
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default BookService;
