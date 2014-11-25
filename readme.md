# Prem Todo App

# Language
* PHP		: Laravel 4.2
* Database	: mysql
* Javascript	: Jquery 1.11

# Php 
* Laravel 4.2 used as  PHP framework with php 5.4+ along with composer
* REST services were used to accompalish todo Create,Read,Update,Delete ( CRUD ) operations
* REST services were used using Laravel Resources

# REST Actions for basic CRUD operations
* Verb 	:	Path 			 :	Action 	:	RouteControllerMethod 
* POST	:	/api/v1/todos 		 :	Create 	:	store()
* GET 	:	/api/v1/todos 		 :	Read 	:	index()
* PUT	:	/api/v1/todos/{Resource} :	Update	:	update()
* DELETE:	/api/v1/todos/{Resource} :	Delete	:	destroy()


# Database
* Mysql is used as database layer
* Database name 'todo'
* Table name is 'todo'
* Credentails for 'todo' database is  username : 'todoDBA' , password: 'todo1234' 
* Schema for todo table
   * id		  : Primary Id
   * name	  : Name for todo Task
   * completed    : 1 (True) or 0 (False) to indicate completed or not
   * created_at   : Create date/timestamp
   * updated_at	  : Update date/timestamp
* Mysql dump present in todo.sql

## Base Application Functionality completed
* On initial load, the todo list should be blank : done
* Fill out the input field and press enter. 
  * The new entry should be added to the todo list. : done
  * Its checkbox should be blank. :done
  * The input field should be cleared, and placeholder text should be displayed again.: done
  * Focus should remain in the input field so more todos can be added. : done
* Clicking on the checkbox next to a todo should visually indicate that the item is completed. : done 
* Todos (and completed states) entered on the page should persist across page reloads. : done

## Additional functionalities
* Edit feature : Double click on todo name to edit name
* Delete feature: Click on close icon of a todo name deletes the todo


----------------------------------------------------------------------------------------------------------------------------------------

## Laravel PHP Framework

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/downloads.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, and caching.

Laravel aims to make the development process a pleasing one for the developer without sacrificing application functionality. Happy developers make the best code. To this end, we've attempted to combine the very best of what we have seen in other web frameworks, including frameworks implemented in other languages, such as Ruby on Rails, ASP.NET MVC, and Sinatra.

Laravel is accessible, yet powerful, providing powerful tools needed for large, robust applications. A superb inversion of control container, expressive migration system, and tightly integrated unit testing support give you the tools you need to build any application with which you are tasked.

## Official Documentation

Documentation for the entire framework can be found on the [Laravel website](http://laravel.com/docs).

### Contributing To Laravel

**All issues and pull requests should be filed on the [laravel/framework](http://github.com/laravel/framework) repository.**

### License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
