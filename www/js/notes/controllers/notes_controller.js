module.exports = function(app) {
  app.controller('NotesController', ['$http', function($http) {
    var server = 'http://' + SERVER_ADDRESS + '/api/notes';
    var handleError = function(res) {
      console.log(res);
    };
    this.notes = [];
    this.getAll = function() {
      $http.get(server)
        .then(function(res) {
          this.notes = res.data;
        }.bind(this), handleError);
    }.bind(this);

    this.createNote = function(note) {
      $http.post(server, note)
        .then(function(res) {
          this.notes.push(res.data);
          this.newNote = null;
        }.bind(this), handleError)
    }.bind(this);

    this.deleteNote = function(note) {
      $http.delete(server + '/' + note._id)
        .then(function(res) {
          this.notes.splice(this.notes.indexOf(note), 1);
        }.bind(this), handleError)
    }.bind(this);
  }]);
};
