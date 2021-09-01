-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: porkrindemporium
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Cuphead','Jones','2021-08-24 06:20:40','2021-08-24 06:20:40'),(2,'Mugman','Jones','2021-08-24 06:20:40','2021-08-24 06:20:40');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `orderId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `totalPrice` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `orderId` (`orderId`),
  KEY `productId` (`productId`),
  CONSTRAINT `order_items_ibfk_267` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `order_items_ibfk_268` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,3,'2021-08-24 06:22:38','2021-08-24 06:22:38',3,2,4),(2,1,'2021-08-24 06:22:38','2021-08-24 06:22:38',4,1,2),(3,5,'2021-08-24 06:22:38','2021-08-24 06:22:38',3,4,3),(4,2,'2021-08-24 06:22:38','2021-08-24 06:22:38',4,2,5),(5,1,'2021-08-31 10:19:13','2021-08-31 10:19:13',5,4,4),(6,2,'2021-08-31 10:19:13','2021-08-31 10:19:13',5,5,2),(7,2,'2021-08-31 10:19:13','2021-08-31 10:19:13',5,3,3),(8,1,'2021-08-31 10:19:13','2021-08-31 10:19:13',5,6,5),(9,1,'2021-08-31 10:20:55','2021-08-31 10:20:55',6,5,3),(10,1,'2021-08-31 10:20:55','2021-08-31 10:20:55',6,3,1),(11,1,'2021-08-31 10:20:55','2021-08-31 10:20:55',6,1,1),(12,4,'2021-09-01 08:22:30','2021-09-01 08:22:30',7,4,5),(13,1,'2021-09-01 08:22:30','2021-09-01 08:22:30',7,5,4),(14,2,'2021-09-01 08:22:37','2021-09-01 08:22:37',8,4,6),(15,2,'2021-09-01 08:22:43','2021-09-01 08:22:43',9,4,2),(16,1,'2021-09-01 09:14:20','2021-09-01 09:14:20',10,3,3),(17,1,'2021-09-01 09:14:20','2021-09-01 09:14:20',10,4,3),(18,1,'2021-09-01 09:14:20','2021-09-01 09:14:20',10,2,7),(19,1,'2021-09-01 09:15:23','2021-09-01 09:15:23',11,2,7),(20,1,'2021-09-01 09:15:23','2021-09-01 09:15:23',11,1,3),(21,3,'2021-09-01 09:15:23','2021-09-01 09:15:23',11,3,9);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `customerId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customerId` (`customerId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (3,'2021-08-24 06:22:38','2021-08-24 06:22:38',1),(4,'2021-08-24 06:22:38','2021-08-24 06:22:38',2),(5,'2021-08-31 10:19:13','2021-08-31 10:19:13',1),(6,'2021-08-31 10:20:55','2021-08-31 10:20:55',1),(7,'2021-09-01 08:22:30','2021-09-01 08:22:30',1),(8,'2021-09-01 08:22:37','2021-09-01 08:22:37',1),(9,'2021-09-01 08:22:43','2021-09-01 08:22:43',1),(10,'2021-09-01 09:14:20','2021-09-01 09:14:20',1),(11,'2021-09-01 09:15:23','2021-09-01 09:15:23',1);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `img` varchar(2100) DEFAULT NULL,
  `stock` int DEFAULT '1000',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Bonus Heart',3,'Adds an additional hit point but lightly weakens your attack power','https://static.wikia.nocookie.net/cuphead/images/e/e8/Heart_Charm.png',10,'2021-08-24 06:20:40','2021-08-24 06:20:40',NULL),(2,'Smoke Bomb',7,'You will not take damage during a dash. A great defense maneuver.','https://static.wikia.nocookie.net/cuphead/images/f/f2/Smoke_Dash.png',20,'2021-08-24 06:20:40','2021-08-24 08:24:00',NULL),(3,'P. Sugar',3,'The first parry move is automatic -- all you need to do is jump','https://static.wikia.nocookie.net/cuphead/images/c/cb/P_Sugar.png',20,'2021-08-24 06:20:40','2021-08-24 06:20:40',NULL),(4,'Coffee',3,'Super meter continuously fills -- in addition to what you earn','https://static.wikia.nocookie.net/cuphead/images/e/e9/Coffee.png',20,'2021-08-24 06:20:40','2021-08-24 06:20:40',NULL),(5,'Twin Heart',5,'Adds two additional hit points but weakens your attack power.','https://static.wikia.nocookie.net/cuphead/images/a/a5/Twin_Heart_Charm.png',20,'2021-08-24 06:20:40','2021-08-24 06:20:40',NULL),(6,'Whetstone',3,'Your first parry move doubles as a damaging axe attack','https://static.wikia.nocookie.net/cuphead/images/9/9f/Whetstone.png',20,'2021-08-24 06:20:40','2021-08-24 06:20:40',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-01 20:32:23
