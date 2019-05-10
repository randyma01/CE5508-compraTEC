<?php
require_once __DIR__ . '/vendor/autoload.php';
require "Db.php";
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use GraphQL\Server\StandardServer;


try {
  $config = [
    'host' => 'ctec.mysql.database.azure.com:3306',
    'database' => 'compratec',
    'username' => 'usctec@ctec',
    'password' => 'pwctec1234*',
    'port' => 3306
  ];

  //initialisation of database connection
  DB::init($config);

  $userType = new ObjectType([
    'name' => 'user',
    'fields' => [
      'id' => ['type' => Type::int()],
      'first_name' => ['type' => Type::string()],
      'last_name' => ['type' => Type::string()],
      'email' => ['type' => Type::string()],
      'password' => ['type' => Type::string()]
    ]
  ]);

  $queryType = new ObjectType([
    'name' => 'getAllUser',
    'description' => 'Get all user from database',
    'fields' => [
      'users' => [
        'type' => Type::listOf($userType),
        'resolve' => function ($root, $args) {
          $results = DB::selectAllUser();
          foreach ($results as $row) {
            $rows[] = array(
              'id' => intval($row->id),
              'first_name' => strval($row->first_name),
              'last_name' => strval($row->last_name),
              'email' => strval($row->email),
              'password' => strval($row->password)
            );
          }
          return $rows; //json_encode
        }
      ],
    ],
  ]);
 
  $mutationType = new ObjectType([
    'name' => 'CRUD',
    'description' => 'Create, Read, Update, Delete methods for User',
    'fields' => [
      'createUser' => [
        'description' => 'Insert new user in database',
        'type' => Type::string(),
        'args' => [
          'first_name' => ['type' => Type::string()],
          'last_name' => ['type' => Type::string()],
          'email' => ['type' => Type::string()],
          'password' => ['type' => Type::string()],
        ],
        'resolve' => function ($root, $args) {
          $result = DB::createUser($args['first_name'], $args['last_name'], $args['email'], $args['password']);
          return json_encode($result);
        }
      ],
      'readUser' => [
        'description' => 'Find user by id in database',
        'type' =>  $userType,
        'args' => [
          'id' => ['type' => Type::int()]
        ],
        'resolve' => function ($root, $args) {
          $result = DB::findOneUser($args['id']);
          return $result;
        }
      ],
      'updateUser' => [
        'description' => 'Update user by id',
        'type' =>  $userType,
        'args' => [
          'id' => ['type' => Type::int()],
          'first_name' => ['type' => Type::string()],
          'last_name' => ['type' => Type::string()],
          'email' => ['type' => Type::string()],
          'password' => ['type' => Type::string()]
        ],
        'resolve' => function ($root, $args) {
          $result = DB::updateUser($args);
          return $result;
        }
      ],
      'deleteUser' => [
        'description' => 'Delete user by id in database',
        'type' =>  $userType,
        'args' => [
          'id' => ['type' => Type::int()]
        ],
        'resolve' => function ($root, $args) {
          $result = DB::deleteUser($args['id']);
          return $result;
        }
      ],
    ],
  ]);

  $schema = new Schema([
    'query' => $queryType,
    'mutation' => $mutationType,
  ]);

  $server = new StandardServer([
    'schema' => $schema
  ]);
  $server->handleRequest();
} catch (\Exception $e) {
  StandardServer::send500Error($e);
}
