//   // events: {
//   //   'submit #search-movies': 'searchMovies',
//   // },
//
// import Backbone from 'backbone';
// import MovieView from '../views/movie_view';
//
// const SearchMoviesView = Backbone.View.extend({
//   initialize(params) {
//     this.template = params.template;
//     this.listenTo(this.model,"update", this.render);
//   },
//
//   render() {
//     this.$('#movie').empty();
//
//     this.model.each((movie) => {
//       const movieView = new MovieView({
//         model: movie,
//         template: this.template,
//         tagName: 'article',
//         className: 'movie',
//       });
//       this.$('#movie').prepend(movieView.render().$el);
//     });
//     return this;
//   },
//
//   events: {
//     'submit #search-movies': 'searchMovies',
//   },
//   searchMovies: function(event){
//     event.preventDefault();
//     console.log('inside seachMovies from SearchMoviesView');
//     console.log(this);
//   }
// })
//
// export default SearchMoviesView;
