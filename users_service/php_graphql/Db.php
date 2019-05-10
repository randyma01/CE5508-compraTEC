<?php
class DB
{
  private static $pdo;

  public static function init($config)
  {
    self::$pdo = new PDO("mysql:host={$config['host']};dbname={$config['database']}", $config['username'], $config['password']);
    self::$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
  }

  /** CRUD */

  public static function createUser($firstName, $lastName, $email, $password)
  {
    $statement = self::$pdo->prepare("CALL `compratec`.`SP_Insert_New_User`(:first_name, :last_name, :email, :password)");
    $statement->bindParam(':first_name', $firstName, PDO::PARAM_STR);
    $statement->bindParam(':last_name', $lastName, PDO::PARAM_STR);
    $statement->bindParam(':email', $email, PDO::PARAM_STR);
    $statement->bindParam(':password', $password, PDO::PARAM_STR);
    return $statement->execute();
  }

  public static function deleteUser($id)
  {
    $statement = self::$pdo->prepare("CALL `compratec`.`SP_Delete_User`(:id)");
    $statement->execute(['id' => $id]);
    return $statement->fetch(PDO::FETCH_ASSOC);
  }

  public static function updateUser($args)
  {
    $statement = self::$pdo->prepare("CALL `compratec`.`SP_Update_User`(:id, :firstName, :lastName, :email, :password)");
    $statement->execute(array(':firstName' => $args['first_name'], ':lastName' => $args['last_name'], ':email' => $args['email'], ':password' => $args['password'], ':id' => $args['id']));
    return $statement->fetch(PDO::FETCH_ASSOC);
  }

  public static function findOneUser($id)
  {
    $statement = self::$pdo->prepare("SELECT * FROM `compratec`.`user` WHERE `user`.`id` = :id ");
    $statement->execute(['id' => $id]);
    return $statement->fetch(PDO::FETCH_ASSOC);
  }

  public static function selectAllUser()
  {
    $statement = self::$pdo->query("SELECT * FROM `compratec`.`user`");
    return $statement->fetchAll();
  }
}
