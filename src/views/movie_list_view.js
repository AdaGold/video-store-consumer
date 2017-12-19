import Backbone from 'backbone';

import _ from 'underscore';
import MovieView from '../views/movie_view';
import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    // console.log(params);
    this.template = params.template;
    this.searchTemplate = params.searchTemplate;
    this.listenTo(this.model,"update", this.render);
    this.listenTo(this,"showSearched", this.renderSearch);
  },
  render() {
    console.log("INSIDE OF RENDER");
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

  renderSearch() {
    console.log("************");
    console.log("INSIDE RENDER SEARCH");
    this.template = this.searchTemplate;
  },

  events: {
    'submit #search-movies': 'searchMovies',
  },

  searchMovies: function(event){
    event.preventDefault();
    const query = this.$('input[name=query]').val();
    this.model.fetch({data: {"query": query}});
    this.trigger('showSearched', this);
    console.log('Inside searchMovies');
    console.log(this.model);
  }

});


export default MovieListView;
