class BookService {
  async consultarLivro(isbn) {
    return fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&startIndex=0&all&lite&orderBy=relevance`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (dados) {
        var dadosLivros = dados.items[0].volumeInfo;
        return {
          dados: {
            titulo: dadosLivros.title,
            descricao: dadosLivros.description,
            dataPublicacao: dadosLivros.publishedDate,
            qtdadePaginas: dadosLivros.pageCount,
            categorias: dadosLivros.categories,
          },
          sucesso: true,
        };
      })
      .catch(function () {
        return { dados: {}, sucesso: false };
      });
  }
}

export default BookService;
