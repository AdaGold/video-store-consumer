import Backbone from 'backbone';
import _ from 'underscore';
import MovieView from '../views/movie_view';
import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    console.log(params);
    this.template = params.template;
    this.listenTo(this.model,"update", this.render);
  },
  render() {
    this.$('#movie').empty();

    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'article',
        className: 'movie',
      });
      this.$('#movie').prepend(movieView.render().$el);
    });
    return this;
  },
  events: {
    'submit #search-movies': 'searchMovies',
  },
  searchMovies: function(e){
    e.preventDefault();
    console.log('Tried to search a movie!');
  }

});


export default MovieListView;
