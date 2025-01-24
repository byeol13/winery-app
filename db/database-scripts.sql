-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: winery_db
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bottle`
--

DROP TABLE IF EXISTS `bottle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bottle` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(255) DEFAULT NULL,
  `label` text,
  `volume` decimal(5,2) DEFAULT NULL,
  `year_produced` int DEFAULT NULL,
  `picture` text,
  `alcohol_percentage` decimal(5,2) DEFAULT NULL,
  `current_price` decimal(8,2) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `producer_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id_idx` (`category_id`),
  KEY `producer_id_idx` (`producer_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `producer_id` FOREIGN KEY (`producer_id`) REFERENCES `producer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bottle`
--

LOCK TABLES `bottle` WRITE;
/*!40000 ALTER TABLE `bottle` DISABLE KEYS */;
INSERT INTO `bottle` VALUES (1,'Chateau Margaux 2015','Premier Grand Cru',750.00,2015,'https://www.alkovintages.com/wp-content/uploads/2019/09/dry-red.png',13.50,500.00,1,1),(2,'Tignanello 2017','Super Tuscan',750.00,2017,'https://www.alkovintages.com/wp-content/uploads/2019/09/dry-red.png',14.00,150.00,2,2),(3,'Marques de Riscal Reserva 2018','Reserva',750.00,2018,'https://www.alkovintages.com/wp-content/uploads/2019/09/dry-red.png',14.50,40.00,1,3);
/*!40000 ALTER TABLE `bottle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Red Wine'),(2,'White Wine'),(3,'Rosé Wine'),(4,'Sparkling Wine');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postal_code` varchar(16) DEFAULT NULL,
  `city_name` varchar(255) DEFAULT NULL,
  `country_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `country_id_idx` (`country_id`),
  CONSTRAINT `countryid` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'75001','Paris',1),(2,'50122','Florence',2),(3,'26001','Logroño',3),(4,'4000','Porto',4);
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'France'),(2,'Italy'),(3,'Spain'),(4,'Portugal'),(5,'Germany');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'john_doe','password1','John Doe','123 Main St, Paris','+33123456789','johndoe@example.com'),(2,'jane_smith','password2','Jane Smith','456 Park Ave, Florence','+390123456789','janesmith@example.com'),(3,'carlos_garcia','password3','Carlos Garcia','789 Calle Mayor, Logroño','+34914123456','carlosg@example.com');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_order`
--

DROP TABLE IF EXISTS `customer_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_number` int DEFAULT NULL,
  `expected_delivery_date` date DEFAULT NULL,
  `time_placed` timestamp NULL DEFAULT NULL,
  `order_price` decimal(8,2) DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `store_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_id_idx` (`customer_id`),
  KEY `idstore_idx` (`store_id`),
  CONSTRAINT `customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idstore` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_order`
--

LOCK TABLES `customer_order` WRITE;
/*!40000 ALTER TABLE `customer_order` DISABLE KEYS */;
INSERT INTO `customer_order` VALUES (1,12345678,'2024-11-10','2024-10-31 23:00:00',200.00,1,1),(2,25789643,'2024-11-12','2024-11-01 23:00:00',150.00,2,2),(3,48931572,'2024-11-15','2024-11-02 23:00:00',250.00,3,3);
/*!40000 ALTER TABLE `customer_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_order_items`
--

DROP TABLE IF EXISTS `customer_order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer_order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int DEFAULT NULL,
  `order_price` decimal(8,2) DEFAULT NULL,
  `customer_order_id` int DEFAULT NULL,
  `bottle_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customer_order_id_idx` (`customer_order_id`),
  KEY `idbottle_idx` (`bottle_id`),
  CONSTRAINT `customer_order_id` FOREIGN KEY (`customer_order_id`) REFERENCES `customer_order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idbottle` FOREIGN KEY (`bottle_id`) REFERENCES `bottle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_order_items`
--

LOCK TABLES `customer_order_items` WRITE;
/*!40000 ALTER TABLE `customer_order_items` DISABLE KEYS */;
INSERT INTO `customer_order_items` VALUES (1,1,200.00,1,1),(2,1,150.00,2,2),(3,1,250.00,3,3);
/*!40000 ALTER TABLE `customer_order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(64) DEFAULT NULL,
  `last_name` varchar(64) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Alice','Johnson','alice_j','hashedpassword1','+33123456789','alice.johnson@example.com',1),(2,'Bob','Williams','bob_w','hashedpassword2','+390123456789','bob.williams@example.com',1),(3,'Carlos','Martinez','carlos_m','hashedpassword3','+34912456789','carlos.martinez@example.com',1),(4,'Diana','Lopez','diana_l','hashedpassword4','+351223456789','diana.lopez@example.com',1);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int DEFAULT NULL,
  `store_id` int DEFAULT NULL,
  `bottle_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `store_id_idx` (`store_id`),
  KEY `bottle_id_idx` (`bottle_id`),
  CONSTRAINT `bottle_id` FOREIGN KEY (`bottle_id`) REFERENCES `bottle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `store_id` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
INSERT INTO `inventory` VALUES (1,10,1,1),(2,5,2,2),(3,15,3,3);
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `invoice_number` varchar(64) DEFAULT NULL,
  `invoice_total` decimal(8,2) DEFAULT NULL,
  `time_created` timestamp NULL DEFAULT NULL,
  `store_id` int DEFAULT NULL,
  `customer_order_id` int DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `employee_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_store_idx` (`store_id`),
  KEY `id_customer_order_idx` (`customer_order_id`),
  KEY `id_customer_idx` (`customer_id`),
  KEY `id_employee_idx` (`employee_id`),
  CONSTRAINT `id_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_customer_order` FOREIGN KEY (`customer_order_id`) REFERENCES `customer_order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_employee` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `id_store` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` VALUES (1,'INV001',200.00,'2024-10-31 23:00:00',1,1,1,1),(2,'INV002',150.00,'2024-10-31 23:00:00',2,2,2,2),(3,'INV003',250.00,'2024-11-01 23:00:00',3,3,3,1);
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice_item`
--

DROP TABLE IF EXISTS `invoice_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int DEFAULT NULL,
  `item_price` decimal(8,2) DEFAULT NULL,
  `invoice_id` int DEFAULT NULL,
  `bottle_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `invoice_id_idx` (`invoice_id`),
  KEY `id_bottle_idx` (`bottle_id`),
  CONSTRAINT `id_bottle` FOREIGN KEY (`bottle_id`) REFERENCES `bottle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `invoice_id` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_item`
--

LOCK TABLES `invoice_item` WRITE;
/*!40000 ALTER TABLE `invoice_item` DISABLE KEYS */;
INSERT INTO `invoice_item` VALUES (1,1,200.00,1,1),(2,1,150.00,2,2),(3,1,250.00,3,3);
/*!40000 ALTER TABLE `invoice_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_number` varchar(64) DEFAULT NULL,
  `expected_delivery_date` timestamp NULL DEFAULT NULL,
  `time_placed` timestamp NULL DEFAULT NULL,
  `time_canceled` timestamp NULL DEFAULT NULL,
  `time_delivered` timestamp NULL DEFAULT NULL,
  `order_price` decimal(8,2) DEFAULT NULL,
  `supplier_id` int DEFAULT NULL,
  `store_id` int DEFAULT NULL,
  `employee_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `supplier_id_idx` (`supplier_id`),
  KEY `store_id_idx` (`store_id`),
  KEY `employee_id_idx` (`employee_id`),
  CONSTRAINT `employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `storeid` FOREIGN KEY (`store_id`) REFERENCES `store` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `supplier_id` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,'ORD001','2024-11-30 23:00:00','2024-10-31 23:00:00',NULL,NULL,4500.00,1,1,1),(2,'ORD002','2024-12-04 23:00:00','2024-11-01 23:00:00',NULL,NULL,3000.00,2,2,2),(3,'ORD003','2024-12-09 23:00:00','2024-11-02 23:00:00',NULL,NULL,4000.00,3,3,1);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` int DEFAULT NULL,
  `order_price` decimal(8,2) DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  `bottle_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id_idx` (`order_id`),
  KEY `bottleid_idx` (`bottle_id`),
  CONSTRAINT `bottleid` FOREIGN KEY (`bottle_id`) REFERENCES `bottle` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `order_id` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (1,10,4500.00,1,1),(2,5,3000.00,2,2),(3,15,4000.00,3,3);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producer`
--

DROP TABLE IF EXISTS `producer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `producer_name` varchar(255) DEFAULT NULL,
  `details` text,
  `region_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `region_id_idx` (`region_id`),
  CONSTRAINT `region_id` FOREIGN KEY (`region_id`) REFERENCES `region` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producer`
--

LOCK TABLES `producer` WRITE;
/*!40000 ALTER TABLE `producer` DISABLE KEYS */;
INSERT INTO `producer` VALUES (1,'Chateau Margaux','Renowned French Winery',1),(2,'Antinori','Historic Italian Winery',2),(3,'Marques de Riscal','Famous Spanish Bodega',3),(4,'Quinta do Noval','Prestigious Portugese Winery',NULL);
/*!40000 ALTER TABLE `producer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `region`
--

DROP TABLE IF EXISTS `region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `region` (
  `id` int NOT NULL AUTO_INCREMENT,
  `region_name` varchar(255) DEFAULT NULL,
  `country_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `country_id_idx` (`country_id`),
  CONSTRAINT `country_id` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `region`
--

LOCK TABLES `region` WRITE;
/*!40000 ALTER TABLE `region` DISABLE KEYS */;
INSERT INTO `region` VALUES (1,'Bordeaux',1),(2,'Tuscany',2),(3,'Rioja',3),(4,'Douro',4);
/*!40000 ALTER TABLE `region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `store` (
  `id` int NOT NULL AUTO_INCREMENT,
  `store_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `details` text,
  `city_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id_idx` (`city_id`),
  CONSTRAINT `city_id` FOREIGN KEY (`city_id`) REFERENCES `city` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `store`
--

LOCK TABLES `store` WRITE;
/*!40000 ALTER TABLE `store` DISABLE KEYS */;
INSERT INTO `store` VALUES (1,'Paris Wine House','123 Rue de Wine','+33123456789','+33698765432','info@pariswine.com','Specialty wine store in Paris',1),(2,'Florence VIntages','456 Viale dei Colli','+390123456789','+390987654321','info@florencevintages.com','Fine wines from Tuscany and beyond',2),(3,'Rioja Cellar','789 Calle de Vino','+34914123456','+34919876543','contact@riojacellar.com','Wine shop featuring Rioja wines',3);
/*!40000 ALTER TABLE `store` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `supplier_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `details` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES (1,'French Wine Supplier','789 Supplier St, Paris','+331223456789','+336753654321','sales@frenchwine.com','Supplier of French wines'),(2,'Italian Wine Supplier','133 Vino Way, Florence','+390223456789','+390753654321','sales@italianwine.com','Supplier of Italian wines'),(3,'Spanish Wine Supplier','55 Vinedo St, Logroño','+34914325678','+34976543210','sales@spanishwine.com','Spanish wines supplier');
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-22 20:28:05
