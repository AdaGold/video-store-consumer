import Backbone from 'backbone';
import _ from 'underscore';
import OrderView from '../views/movie_view';
import Order from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model,"update", this.render);
  },
  render() {
    this.$('#MOVIE').empty();

    this.model.each((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });
      this.$('#movie').prepend(movieView.render().$el);
    });
    return this;
  },
  events: {

  },
});


export default MovieListView;
