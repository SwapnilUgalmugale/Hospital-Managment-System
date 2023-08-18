-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `admit_patients`
--

DROP TABLE IF EXISTS `admit_patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admit_patients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `admit_date` date DEFAULT NULL,
  `discharge_date` date DEFAULT NULL,
  `appt_id` int NOT NULL,
  `dept_id` int NOT NULL,
  `patient_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2dh5xrk3fkf3g23olplwdyuww` (`appt_id`),
  KEY `FKomgg3yv3c849cakuuxqdf8g1t` (`dept_id`),
  KEY `FKfh4r4c1s0r45fvv7n97f1q9bt` (`patient_id`),
  CONSTRAINT `FK2dh5xrk3fkf3g23olplwdyuww` FOREIGN KEY (`appt_id`) REFERENCES `appointments` (`id`),
  CONSTRAINT `FKfh4r4c1s0r45fvv7n97f1q9bt` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`),
  CONSTRAINT `FKomgg3yv3c849cakuuxqdf8g1t` FOREIGN KEY (`dept_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admit_patients`
--

LOCK TABLES `admit_patients` WRITE;
/*!40000 ALTER TABLE `admit_patients` DISABLE KEYS */;
INSERT INTO `admit_patients` VALUES (1,'2022-09-20','2022-09-19',1,2,3),(2,'2022-09-19','2022-09-19',1,2,3),(3,'2022-09-19','2022-09-19',1,2,3),(4,'2022-09-19','2022-09-19',1,2,3),(5,'2022-09-19','2022-09-19',1,2,3),(6,'2022-09-19','2022-09-19',1,2,3),(7,'2022-09-19','2022-09-19',1,2,3),(8,'2022-09-19','2022-09-19',1,2,3),(9,'2022-09-19','2022-09-19',6,2,7);
/*!40000 ALTER TABLE `admit_patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `appt_date` date DEFAULT NULL,
  `doc_id` int DEFAULT NULL,
  `patient_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKhkrq54yejrq7ed9aeced3pvkx` (`doc_id`),
  KEY `FK8exap5wmg8kmb1g1rx3by21yt` (`patient_id`),
  CONSTRAINT `FK8exap5wmg8kmb1g1rx3by21yt` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`),
  CONSTRAINT `FKhkrq54yejrq7ed9aeced3pvkx` FOREIGN KEY (`doc_id`) REFERENCES `employees` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (1,'2022-09-15',3,3),(3,'2022-09-21',3,3),(5,'2022-09-19',2,4),(6,'2022-09-19',10,7),(7,'2022-09-24',2,3);
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
INSERT INTO `departments` VALUES (1,'SURGEON'),(2,'CARDIAC'),(3,'DENTIST'),(4,'ADMIN'),(5,'RECEPTIONIST');
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contact` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(20) NOT NULL,
  `dob` date DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `dept_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_j9xgmd0ya5jmus09o0b8pqrpb` (`email`),
  KEY `FK8fcq4opjusnahh25dvhjr0v78` (`dept_id`),
  CONSTRAINT `FK8fcq4opjusnahh25dvhjr0v78` FOREIGN KEY (`dept_id`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (2,'9834694536','sanket@gmail.com','MALE','Sanket','1234','1997-02-21','DOCTOR',1),(3,'9834694536','swapnil@gmail.com','MALE','Swapnil','1234','1997-02-21','DOCTOR',1),(4,'9834694536','prathmesh@gmail.com','MALE','Prathmesh','1234','1995-02-21','LABMANAGER',2),(7,'746584962','suraj@gmail.com','MALE','Suraj','5656','1998-01-01','LABMANAGER',1),(8,'9503868555','utkarsh1@gmail.com','MALE','Utkarsh','1234','1999-04-12','ADMIN',4),(9,'9421590221','goldie@gmail.com','FEMALE','Goldie','1234','2000-01-19','RECEPTIONIST',2),(10,'7588093877','akash@gmail.com','MALE','Akash','1234','1996-02-19','DOCTOR',2);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `med_presc`
--

DROP TABLE IF EXISTS `med_presc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `med_presc` (
  `id` int NOT NULL AUTO_INCREMENT,
  `presc_date` date DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  `patient_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK248ye149kwko3yqac135p2dv5` (`doctor_id`),
  KEY `FKpd88yed3jglsyvvh37hrat36b` (`patient_id`),
  CONSTRAINT `FK248ye149kwko3yqac135p2dv5` FOREIGN KEY (`doctor_id`) REFERENCES `employees` (`id`),
  CONSTRAINT `FKpd88yed3jglsyvvh37hrat36b` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `med_presc`
--

LOCK TABLES `med_presc` WRITE;
/*!40000 ALTER TABLE `med_presc` DISABLE KEYS */;
INSERT INTO `med_presc` VALUES (1,'2022-09-19',2,4),(2,'2022-09-19',10,7),(3,'2022-09-24',2,3),(4,'2022-09-24',2,3);
/*!40000 ALTER TABLE `med_presc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medical_tests`
--

DROP TABLE IF EXISTS `medical_tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medical_tests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `charges` double NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical_tests`
--

LOCK TABLES `medical_tests` WRITE;
/*!40000 ALTER TABLE `medical_tests` DISABLE KEYS */;
INSERT INTO `medical_tests` VALUES (1,1000,'RTPCR'),(2,500,'Blood-Test'),(3,100,'Urine-Test');
/*!40000 ALTER TABLE `medical_tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicine_item_qty`
--

DROP TABLE IF EXISTS `medicine_item_qty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicine_item_qty` (
  `id` int NOT NULL AUTO_INCREMENT,
  `qty` int DEFAULT NULL,
  `med_presc_id` int DEFAULT NULL,
  `medicine_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK43347339ceqv6rh5l5rysv4co` (`med_presc_id`),
  KEY `FKr9ais0ge8opy7dxc51rm43ewe` (`medicine_id`),
  CONSTRAINT `FK43347339ceqv6rh5l5rysv4co` FOREIGN KEY (`med_presc_id`) REFERENCES `med_presc` (`id`),
  CONSTRAINT `FKr9ais0ge8opy7dxc51rm43ewe` FOREIGN KEY (`medicine_id`) REFERENCES `medicines` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicine_item_qty`
--

LOCK TABLES `medicine_item_qty` WRITE;
/*!40000 ALTER TABLE `medicine_item_qty` DISABLE KEYS */;
INSERT INTO `medicine_item_qty` VALUES (1,2,1,1),(2,5,1,2),(3,10,1,3),(4,2,2,1),(5,5,2,2),(6,3,2,3),(7,NULL,3,1),(8,NULL,3,2),(9,1,3,3),(10,1,4,1),(11,1,4,2);
/*!40000 ALTER TABLE `medicine_item_qty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicines`
--

DROP TABLE IF EXISTS `medicines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicines` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `price_per_tab` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicines`
--

LOCK TABLES `medicines` WRITE;
/*!40000 ALTER TABLE `medicines` DISABLE KEYS */;
INSERT INTO `medicines` VALUES (1,'Dolo',2),(2,'Combifalm',5),(3,'Ozee',5);
/*!40000 ALTER TABLE `medicines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contact` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(20) NOT NULL,
  `age` int NOT NULL,
  `blood_group` varchar(10) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_a370hmxgv0l5c9panryr1ji7d` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1,'78468466','utkarsh@gmail','MALE','Utkarsh','5678',22,'B+','sangli'),(2,'98356725','shubham@gmail.com','MALE','Shubham','5998',23,'A+','Kolhapur'),(3,NULL,'abc@gmail.com','MALE','abc','456',0,NULL,NULL),(4,NULL,'xyz@gmail.com','FEMALE','xyz','1234',0,NULL,NULL),(7,NULL,'vikas@gmail.com','MALE','vikas','1234',0,NULL,NULL);
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `consultation_charges` double NOT NULL,
  `last_pay_date` date DEFAULT NULL,
  `test_charges` double NOT NULL,
  `ward_charges` double NOT NULL,
  `appt_id` int NOT NULL,
  `patient_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKomh1pnxf88vuxajvv58ggvy8u` (`appt_id`),
  KEY `FKlvfcgbin5vh2ivae1l87bmawb` (`patient_id`),
  CONSTRAINT `FKlvfcgbin5vh2ivae1l87bmawb` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`),
  CONSTRAINT `FKomh1pnxf88vuxajvv58ggvy8u` FOREIGN KEY (`appt_id`) REFERENCES `appointments` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (1,300,'2022-09-15',0,0,1,3),(3,300,'2022-09-21',0,0,3,3),(5,300,'2022-09-19',0,0,5,4),(6,300,'2022-09-19',200,100,6,7),(7,300,'2022-09-24',0,0,7,3);
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_presc`
--

DROP TABLE IF EXISTS `test_presc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_presc` (
  `id` int NOT NULL AUTO_INCREMENT,
  `presc_date` date DEFAULT NULL,
  `doctor_id` int DEFAULT NULL,
  `patient_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKmvsrwhawq3by7ucmsj7msp20j` (`doctor_id`),
  KEY `FKoff8eww7kh0wi5viejnhkjn97` (`patient_id`),
  CONSTRAINT `FKmvsrwhawq3by7ucmsj7msp20j` FOREIGN KEY (`doctor_id`) REFERENCES `employees` (`id`),
  CONSTRAINT `FKoff8eww7kh0wi5viejnhkjn97` FOREIGN KEY (`patient_id`) REFERENCES `patients` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_presc`
--

LOCK TABLES `test_presc` WRITE;
/*!40000 ALTER TABLE `test_presc` DISABLE KEYS */;
INSERT INTO `test_presc` VALUES (1,'2022-09-12',2,1),(2,'2022-09-19',2,4),(3,'2022-09-19',2,4),(4,'2022-09-19',10,7),(5,'2022-09-24',2,3);
/*!40000 ALTER TABLE `test_presc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_reports`
--

DROP TABLE IF EXISTS `test_reports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_reports` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content_type` varchar(255) DEFAULT NULL,
  `data` longblob,
  `name` varchar(255) DEFAULT NULL,
  `med_test_id` int DEFAULT NULL,
  `test_presc_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1wsav3cyv3shlkrh8mulhcov8` (`med_test_id`),
  KEY `FK33l7fe4cpuviqtnlinyri68a` (`test_presc_id`),
  CONSTRAINT `FK1wsav3cyv3shlkrh8mulhcov8` FOREIGN KEY (`med_test_id`) REFERENCES `medical_tests` (`id`),
  CONSTRAINT `FK33l7fe4cpuviqtnlinyri68a` FOREIGN KEY (`test_presc_id`) REFERENCES `test_presc` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_reports`
--

LOCK TABLES `test_reports` WRITE;
/*!40000 ALTER TABLE `test_reports` DISABLE KEYS */;
/*!40000 ALTER TABLE `test_reports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests_and_presc`
--

DROP TABLE IF EXISTS `tests_and_presc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tests_and_presc` (
  `presc_id` int NOT NULL,
  `test_id` int NOT NULL,
  PRIMARY KEY (`presc_id`,`test_id`),
  KEY `FKsro724jbsym2f3pv45yraadj5` (`test_id`),
  CONSTRAINT `FKcucibd0ssk44tmioypd8jofb3` FOREIGN KEY (`presc_id`) REFERENCES `test_presc` (`id`),
  CONSTRAINT `FKsro724jbsym2f3pv45yraadj5` FOREIGN KEY (`test_id`) REFERENCES `medical_tests` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests_and_presc`
--

LOCK TABLES `tests_and_presc` WRITE;
/*!40000 ALTER TABLE `tests_and_presc` DISABLE KEYS */;
INSERT INTO `tests_and_presc` VALUES (2,1),(3,1),(4,1),(5,1);
/*!40000 ALTER TABLE `tests_and_presc` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-28  9:48:44
