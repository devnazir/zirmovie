
    



$.ajax({
        url: 'http://www.omdbapi.com/?apikey=98f26bef&s=harrypotter',
        success: result => {

                const movies = result.Search;
                let data = '';
                movies.forEach(movie => {
                    data += `
                            <div class="col-sm-4 my-3">
                                <div class="card">
                                    <img src="${movie.Poster}" class="card-img-top">
                                    <div class="card-body">
                                    <h5 class="card-title">${movie.Title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                                    <a href="#" class="btn btn-primary">Detail</a>
                                </div>
                            </div>
                            </div>`
                });

                $('.movie-container').html(data);




        },

        error: (e) => {
            console.log(e.responseText);
        },

    });



$('.keyword').on('keyup', function (e) {
    if(e.keyCode === 13){
        //showMovie();
    }
});
