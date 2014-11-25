<?php
class TodoController extends BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	*/
	public function index()
	{
		$todo = Todo::all();
		$error= false;

		return Response::json( array('error' => $error,'todos' => $todo ),200);
      
	}


	/**
	* Store a newly created resource in storage.
	*
	* @return Response
	*/
	public function store()
	{

		$error = false;

		// New todo
		$todo = new Todo;
		$todo->name = Request::get( 'name' );
		$todo->completed = 0; // initially todo is not completed

		if( ! empty( $todo->name ) ){
		  if(!$todo->save()){
			  $error = true;
		  }
		}

		return Response::json( array('error' => $error,'todos' => $todo ),200);

	 }

    /**
    * Remove the specified resource from storage.
	*
	* @param  int  $id
	* @return Response
	*/
	public function destroy( $id )
	{
		$error = false;

		$id = (int) $id;

		$todo = Todo::find( $id );

		if(!$todo->delete()){
			$error = true;
		}

		return Response::json( array('error' => $error ),200);

	}


    /**
	* Update the specified resource in storage.
	*
	* @param  int  $id
	* @return Response
	*/
	public function update( $id )
	{
		$error = false;

		$id = (int) $id;

		$todo = Todo::find( $id );
    
		if( Request::get( 'name' ) )
		  $todo->name = Request::get( 'name' );


		if( Request::get( 'completed' ) ){
			$completed =  Request::get( 'completed' );
			
			if($completed=="yes")
				$completed_int=1;
			else
				$completed_int=0;
			
			$todo->completed = $completed_int;

		}

		if(!$todo->save()){
			  $error = true;
		  }

		return Response::json( array('error' => $error ),200);
	}


}
