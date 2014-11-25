( function( $ ){
	$( function(){
		
		var api_url = 'api/v1';

		// On initial load get all the todos
		$.ajax({
			type: "GET",
			url: api_url + '/todos',
		}).done( function( response ) {

		  // Minor error handling
		  if( response.error !== false )
			return;

		  addTodos( response.todos );

		});

		// Handle pressing the enter key on an text input
		$( document ).on( 'keypress', 'input[type=text]',  function( e ){

		  // Get info about this input
		  var $this = $( this );
		  var $li = $this.parents( 'li' );
		  var id = $this.attr( 'id' ) || null;
		  var name = $this.val();

		  // If enter wasn't pressed or input blank key do nothing
		  if( e.which != 13 || !name)
			return;

		  // Blank the input
		  $this.val( '' );

		  // POST todo
		  if( id == 'new-todo' ){
			
			$.ajax({
			  type: "POST",
			  url: api_url + '/todos',
			  data: { name: name }
			}).done( function( response ) {

				// Minor error handling
				if( response.error !== false )
				  return;
				
				addTodos( response.todos );

			  });

		  } else if( id == null ){

			var todo_id = $li.find( 'input[type=hidden]' ).val();
			
			$.ajax({
			  type: "put",
			  url: api_url + '/todos/' + todo_id,
			  data: { name: name }
			}).done( function( response ) {

				// Minor error handling
				if( response.error !== false )
				  return;
				
				$li.find( 'label').html( name );
			  
				//stopEditing();
				
				$( 'li' ).removeClass( 'editing' );
				$( 'input.edit' ).remove();   
				$( 'label' ).show();

			  });

		  }

		});

		// Handle click outside of editing input
		$( document ).on( 'click', function( e ){

		  if( $( document ).find( 'input.edit' ).length > 0 ){

			if( $( e.target ).attr( 'class' ) != 'edit' ){
			  //stopEditing();		
			  $( 'li' ).removeClass( 'editing' );
			  $( 'input.edit' ).remove();   
			  $( 'label' ).show();

			}
		  }

		});

		// Handle double clicking on one of the todos
		$( document ).on( 'dblclick', '#todo-list label', function(){

		  var $label = $( this );
		  var $li = $label.parents( 'li' );
		  var $input = $( '<input type="text" class="edit" value="' + $label.html() + '" />' );

		  $label.hide();

		  $li.addClass( 'editing' ).append( $input );

		});

		// Handle clicking the checkbox on a todo
		$( document ).on( 'change', '.toggle', function(){

		  var $this = $( this );
		  var $li = $this.parents( 'li' );
		  var id = $this.siblings( 'input.id' ).val();
		  var state = "no";

		  // Get checked state
		  if( $this.is( ':checked' ) )
			state = "yes";

		  $.ajax({
			type: "put",
			url: api_url + '/todos/' + id,
			data: { completed: state }
		  })
		  .done( function( response ) {

			// Minor error handling
			if( response.error !== false )
			  return;
		  
			// Get checked state
			if( state == "yes" )
			  $li.addClass( 'completed' );
			else
			  $li.removeClass( 'completed' );

		  });

		});

		// Handle clicking the delete button on a todo
		$( document ).on( 'click', '.destroy', function(){

		  var $this = $( this );
		  var id = $this.siblings( 'input.id' ).val();
		  
		  $.ajax({
			type: "delete",
			url: api_url + '/todos/' + id
		  })
		  .done( function( response ) {

			$this.parents( 'li ').remove();
			
		  });

		  

		});
		
		function addTodos( json ){

		  var html = '';
		  var todos;
		  
		  // Make sure we're dealing with an array for the $.each
		  
		  if( json instanceof Array )
			todos = json;
		  else
			todos = new Array( json );
		
		  // Creates and appends one or many todos
		  $.each( todos, function( index, todo ){

			var checked = ''
			var todo_class = '';

			if( todo.completed == 1 ){
			  checked = 'checked';
			  todo_class = 'completed';
			}

			html += '<li class="'+ todo_class +'">\
					<div class="view">\
						<input type="hidden" name="id" class="id" value="' + todo.id + '" />\
						  <input class="toggle" type="checkbox" ' + checked + ' />\
						  <label>' + todo.name + '</label>\
						  <button type="button" class="destroy"></button>\
					  </div>\
				  </li>';

		  } );
				
			$( '#todo-list' ).append( html );
		  
		}

	  });

}( jQuery));