<?php

class Todo extends Eloquent {

	protected $fillable = ['name', 'completed'];
	
	protected $table = 'todo';
}