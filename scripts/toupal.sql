-- MySQL dump 10.13  Distrib 5.7.10, for osx10.9 (x86_64)
--
-- Host: localhost    Database: tourpal
-- ------------------------------------------------------
-- Server version	5.7.10

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `guide`
--

DROP TABLE IF EXISTS `guide`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `guide` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar` varchar(255) DEFAULT NULL,
  `gender` varchar(255) NOT NULL,
  `goodFeedbackRate` int(11) NOT NULL,
  `idCard` varchar(255) DEFAULT NULL,
  `introduction` varchar(255) DEFAULT NULL,
  `numOfFinishOrder` int(11) NOT NULL,
  `openId` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `realName` varchar(255) DEFAULT NULL,
  `wechat` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guide`
--

LOCK TABLES `guide` WRITE;
/*!40000 ALTER TABLE `guide` DISABLE KEYS */;
/*!40000 ALTER TABLE `guide` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `guide_favor_spot`
--

DROP TABLE IF EXISTS `guide_favor_spot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `guide_favor_spot` (
  `guideId` int(11) NOT NULL,
  `spotId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guide_favor_spot`
--

LOCK TABLES `guide_favor_spot` WRITE;
/*!40000 ALTER TABLE `guide_favor_spot` DISABLE KEYS */;
/*!40000 ALTER TABLE `guide_favor_spot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `location` (
  `spotId` int(11) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'南京市','江苏省',''),(2,'南京市','江苏省',''),(3,'南京市','江苏省',''),(4,'南京市','江苏省',''),(5,'南京市','江苏省',''),(6,'南京市','江苏省',''),(7,'南京市','江苏省',''),(8,'南京市','江苏省',''),(9,'南京市','江苏省',''),(10,'南京市','江苏省',''),(11,'南京市','江苏省',''),(12,'南京市','江苏省',''),(13,'南京市','江苏省',''),(14,'南京市','江苏省',''),(15,'南京市','江苏省',''),(16,'南京市','江苏省',''),(17,'南京市','江苏省',''),(18,'南京市','江苏省',''),(19,'南京市','江苏省',''),(20,'南京市','江苏省',''),(21,'南京市','江苏省',''),(22,'南京市','江苏省',''),(23,'南京市','江苏省',''),(24,'南京市','江苏省',''),(25,'南京市','江苏省',''),(26,'南京市','江苏省',''),(27,'南京市','江苏省',''),(28,'南京市','江苏省',''),(29,'南京市','江苏省',''),(30,'南京市','江苏省',''),(31,'南京市','江苏省',''),(32,'南京市','江苏省',''),(33,'南京市','江苏省',''),(34,'南京市','江苏省',''),(35,'南京市','江苏省',''),(36,'南京市','江苏省',''),(37,'南京市','江苏省',''),(38,'南京市','江苏省',''),(39,'南京市','江苏省',''),(40,'南京市','江苏省',''),(41,'南京市','江苏省',''),(42,'南京市','江苏省',''),(43,'南京市','江苏省',''),(44,'南京市','江苏省',''),(45,'南京市','江苏省',''),(46,'南京市','江苏省',''),(47,'南京市','江苏省',''),(48,'南京市','江苏省',''),(49,'南京市','江苏省',''),(50,'南京市','江苏省',''),(51,'南京市','江苏省',''),(52,'南京市','江苏省',''),(53,'南京市','江苏省',''),(54,'南京市','江苏省',''),(55,'南京市','江苏省',''),(56,'南京市','江苏省',''),(57,'南京市','江苏省',''),(58,'南京市','江苏省',''),(59,'南京市','江苏省',''),(60,'南京市','江苏省',''),(61,'南京市','江苏省',''),(62,'南京市','江苏省',''),(63,'南京市','江苏省',''),(64,'南京市','江苏省',''),(65,'南京市','江苏省',''),(66,'南京市','江苏省',''),(67,'南京市','江苏省',''),(68,'南京市','江苏省',''),(69,'南京市','江苏省',''),(70,'南京市','江苏省',''),(71,'南京市','江苏省',''),(72,'南京市','江苏省',''),(73,'南京市','江苏省',''),(74,'南京市','江苏省',''),(75,'南京市','江苏省',''),(76,'南京市','江苏省',''),(77,'南京市','江苏省',''),(78,'南京市','江苏省',''),(79,'南京市','江苏省',''),(80,'南京市','江苏省',''),(81,'南京市','江苏省',''),(82,'南京市','江苏省',''),(83,'南京市','江苏省',''),(84,'南京市','江苏省',''),(85,'南京市','江苏省',''),(86,'南京市','江苏省',''),(87,'南京市','江苏省',''),(88,'南京市','江苏省',''),(89,'南京市','江苏省',''),(90,'南京市','江苏省','');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orderId` int(11) NOT NULL,
  `formId` varchar(255) DEFAULT NULL,
  `createDate` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `my_order`
--

DROP TABLE IF EXISTS `my_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `my_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cancelReason` varchar(255) DEFAULT NULL,
  `generatedDate` datetime DEFAULT NULL,
  `guideId` int(11) NOT NULL,
  `message` varchar(255) DEFAULT NULL,
  `spotId` int(11) NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `touristId` int(11) NOT NULL,
  `travelDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `my_order`
--

LOCK TABLES `my_order` WRITE;
/*!40000 ALTER TABLE `my_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `my_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_feedback`
--

DROP TABLE IF EXISTS `order_feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_feedback` (
  `orderId` int(11) NOT NULL,
  `guidePoint` int(11) NOT NULL,
  `spotPoint` int(11) NOT NULL,
  `comment` longtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_feedback`
--

LOCK TABLES `order_feedback` WRITE;
/*!40000 ALTER TABLE `order_feedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `spot`
--

DROP TABLE IF EXISTS `spot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `spot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `introduction` longtext,
  `name` varchar(255) DEFAULT NULL,
  `pictureUrl` varchar(255) DEFAULT NULL,
  `popularity` int(11) NOT NULL,
  `recommendLevel` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `spot`
--

LOCK TABLES `spot` WRITE;
/*!40000 ALTER TABLE `spot` DISABLE KEYS */;
INSERT INTO `spot` VALUES (1,'夫子庙是古建筑与现代化的结合，靠近秦淮河一带的建筑比较古朴。晚上夜色笼罩会更漂亮，坐船夜游秦淮河景色很好。周边的小吃很多，不过都不太正宗，但龙须糖和唐记臭豆腐还是挺不错。','夫子庙','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/50da81cb39dbb6fdb42a24970824ab18972b370a.jpg',0,0),(2,'中山陵位于钟山风景区，建筑大气而庄严，有历史意义。中山陵台阶很多，但路程方便，爬上去后视野很好。门票是免费的，平时人还好但是节假日人太多，总体来说是南京很靠谱的一个景点。','中山陵','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/f7246b600c338744ab001037510fd9f9d62aa0b7.jpg',0,0),(3,'风景和氛围都不错，平时游客不太多。门票相对于面积而言是贵的，但胜在内容比较丰富，保存很完善，能看到精巧的民国风建筑。对历史有兴趣的驴友不能错过，请个导游讲解就更好了。','南京总统府','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/5fdf8db1cb134954762afd2b574e9258d1094a4c.jpg',0,0),(4,'让人印象极其深刻。纪念馆设计得很好，装修得很庄严，让人们牢记悲惨而屈辱的历史。看完之后特别震撼也很压抑，能够感受到那个年代的悲痛。去南京一定要去看看，很有教育意义。','南京大屠杀遇难同胞纪念馆','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/e865a699e48ef7636f068c58.jpg',0,0),(5,'南京最大的帝王陵墓，亦是中国古代最大的帝王陵寝之一。踏上有五百多年历史的石像路，探访朱元璋和皇后马氏的合葬陵墓。','明孝陵','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/c9d4cf43b0536b7873f05da0.jpg',0,0),(6,'南京的母亲河，白天看河水很脏，水面的垃圾甚多，但是晚上灯火通明非常热闹，它的夜景似一副繁华的画卷。秦淮河周边游人众多，河边的小吃也比较丰富，但是商业化气息太严重。','秦淮河','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/4075890afc52f07495ca6bad.jpg',0,0),(7,'一座以自然山林为依托，以红色旅游为主体，融和自然风光和人文景观为一体的全国独具特色的纪念性风景名胜区。','雨花台','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/fd428c4540daf7678794738f.jpg',0,0),(8,'三座长江大桥中最大一座，以“天堑飞虹”的夜景成为现代金陵四十景之一。霸气威武地横跨在宽阔的江面上，站在桥上欣赏壮美的长江，体验契阔山河的大气。','南京长江大桥','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/bf096b63f6246b60514a6c39ebf81a4c510fa233.jpg',0,0),(9,'江南的好风光，环境优美。玄武湖湖面宽阔，可以划划船吹吹湖风。沿湖的绿化非常好，夜景很漂亮，适合饭后散步。周边还有湖南路购物，可以去看看。','玄武湖','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/0bd162d9f2d3572cfc5393768a13632763d0c3e3.jpg',0,0),(10,'南京紫金山上树木茂密，景色很优美，而且空气很好很清新。其实好玩的地方是紫金山天文台，看风景很棒。植被很茂密，空气很好的，而且山顶的景色不错。','紫金山','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/e49cf91130f7a3ada7ef3fa1.jpg',0,0),(11,'江南第一名湖，以“莫愁烟雨”列为“金陵四十八景”之首。\n','莫愁湖','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/4e4a20a4462309f74022f3a7730e0cf3d7cad632.jpg',0,0),(12,'紫金山天文台坐落在南京市东南郊风景优美的紫金山上，这里山势险峻，蜿蜒如龙。环境非常不错，装修的超漂亮。','紫金山天文台','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/4a36acaf2edda3cc1c1e95a801e93901203f92bb.jpg',0,0),(13,'江苏省第一家私营旅游风景区，被誉为“南京九寨沟”。这里曾是宋代牛首山大捷的古战场，八百年前，岳飞将军在这里筑壁垒，设伏兵，大败强敌金兀术，一举收复建康城（南京）。','将军山','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/11794d4366b4037c9313c691.jpg',0,0),(14,'《新白娘子传奇》取景地，江南四大著名园林之一。布局典雅，是目前保存最为完好的一组明代古典园林建筑群。','瞻园','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/f35ea00937fb234f6a60fb21.jpg',0,0),(15,'“金陵第一名秀山”，南朝以来佛教胜地，尤以深秋漫山红叶闻名。深秋的栖霞，枫林如火，漫山红遍，宛如一幅美丽的画卷，如其名字一般浪漫唯美。','栖霞山','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/86d5bac27e0168700ef477af.jpg',0,0),(16,'登高看远，欣赏长江很不错的地方，登楼远眺可见汤汤长江水和雄伟长江大桥。与武汉黄鹤楼、岳阳岳阳楼、南昌滕王阁合称江南四大名楼。','阅江楼','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/b25aae51bd5f3775367abe91.jpg',0,0),(17,'现在的灵谷寺，大部重建于清同治年间，虽规模大不如此前，也物华天宝，自成佳境。很清净的一个地方，上面的风景很好。无梁殿很宏伟，相当肃穆。','灵谷寺','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/b25d9901e4fd3dbd267fb547.jpg',0,0),(18,'世界四大温泉之一，居中国四大温泉疗养区之首，历史悠久，被孙中山赞为\"美善之地\"。','汤山温泉','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/027a45b5a44fc0a537d3ca36.jpg',0,0),(19,'博物院所处的朝天宫为几千年前吴王夫差建立，朝代更迭不减其威武雄伟，是江南现存规模最大、保存最为完好的一组古建筑群，走进其中历史气息扑面而来。','南京博物馆','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/b25aae512b7ea540377abe65.jpg',0,0),(20,'栖霞寺的枫叶比较出名，小推荐下。很有名的地方，环境很幽静，最美的还是寺门前的高大的银杏树。十月的香火旺盛，不错的寺庙。','栖霞寺','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/389aa8fda0e1057d08244d50.jpg',0,0),(21,'“要不是被樱花吸引估计大学期间也不会去了。。。去的时候樱花又没怎么开开，一群人对着垃圾桶旁盛开的一束樱花拍啊拍啊拍，不过鸡鸣寺是求姻缘的地方，尽管我诚心求了，但是作为单身女汉子还是没灵。。。真是对不起佛祖，拉低了他的婚姻介绍成功率。。。。”','鸡鸣寺','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/d8f9d72a6059252d1745a5f9359b033b5ab5b9f9.jpg',0,0),(22,'陵园包括雨花台主峰等5个山岗，以主峰为中心形成南北向中轴线，自南向北有南大门、广场、纪念馆、纪念桥、革命烈士纪念碑、北殉难处烈士大型雕像等。','雨花台烈士陵园','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/d4239b355c115d7a91ef391d.jpg',0,0),(23,'老门东是南京老城南地区的古地名，如今按照传统样式复建传统中式木质建筑、马头墙，集中展示传统文化，再现老城南原貌。','老门东历史街区','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/0e2442a7d933c8955561c976d31373f08202009b.jpg',0,0),(24,'从中华门能看出中国古代的城防建筑特色，整个城门比较壮观，是当今世界上保存最完好、结构最复杂的古代瓮城城堡。','中华门','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/5327ce16fd0e7e73972b43b3.jpg',0,0),(25,'中国第一梅花山，全国梅文化中心。','梅花山','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/1f5694828dc8f0fbf703a612.jpg',0,0),(26,'佛教鼎盛，是佛教牛头禅发祥地，“春牛首，秋栖霞”，牛首山天工造化，自然景色极佳。','牛首山','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/5202e5f2c8874678b17ec527.jpg',0,0),(27,'这个是我极力推荐的地方！南京这么多景点，如果说有200个景点，那么我去了至少150！但是这么多景点，我最推荐的是明孝陵，不仅仅是因为门票最贵70，里面小景点非常多（详细看我对明孝陵的点评）；更因为紫霞湖的存在，湖水三千雨，独爱紫霞湖！夏天下雨去吧，那就是人间的仙境，画里的天堂！我四个季节都去过，春天的浪漫、夏天的唯美、秋天的寂寥、冬雪的清冷。让我难以自拔！明孝陵里面这么多景点，慢慢挖掘吧','紫霞湖','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/8c511fe994789b54b90e2d42.jpg',0,0),(28,'南京明城墙，我去的是从东水关到中华门的那段，门票50元，有半价票，这票是从东水关到集庆门的全段的，中间可以在武定门和中华门下。从东水关到中华门，大概是三公里，城墙保存得很好，一边是秦淮河一边是民居，风景很不错，中华门翁城很好玩。在城墙上出太阳应该会很晒，记得带水做好防晒措施。','明城墙','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/adaf2edda3cc7cd9a14d4d2a3801213fb90e91e4.jpg',0,0),(29,'很坑的景点，里面只剩下几根柱子的底座，害我特意骑单车过去，又要打的去夫子庙~','明故宫遗址公园','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/5bafa40f4bfbfbed50c7f4a579f0f736aec31f4a.jpg',0,0),(30,'环境很不错，空气很清新，视野也挺开阔的，而且湖面宽广，是一个适合休闲散步的地方。','玄武湖公园','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/3bf33a87e950352a426dcaf35243fbf2b2118b39.jpg',0,0),(31,'讲真，去南京之前我不知道乌衣巷在这里，在旅舍里一个伙伴说的，当时听成微巷，反应过来后一定要去这里，因为那首很有名气的诗。','乌衣巷','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/b812c8fcc3cec3fd7273ae88d788d43f869427f9.jpg',0,0),(32,'狮子桥美食街位于南京市鼓楼区湖南路上，也是南京的繁华地带之一。这条美食街十分有特色。在街口有块巨大的牌坊，两旁是反映旧时民俗的青铜雕像。街上设有许多长椅，十分贴心，方便人们走走停停，流连于美食之间。在这里还卧虎藏龙，回味鸭血粉丝，京城葫芦王，章鱼小丸子，尹氏百连鸡汁汤包，价格不贵又令人回味。每年初夏，狮子桥步行街还有热带水果主题展，其实就是叛卖各式各样的热带水果。','狮子桥','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/9f2f070828381f301371a74ca8014c086f06f0ef.jpg',0,0),(33,'自我感觉燕子矶倒是没什么好看的，沿着燕子矶的滨江，步道修的很好，可以亲近长江水，只是离水近时还是要小心哦，毕竟长江水还是蛮急的！安全第一嘛！早起晨练/白天三五成群闲逛/傍晚放松来这里都是不错的！而且交通方便，自驾有足够的停车位，没车的有多条公交线路直达燕子矶！周末没事了就来这里吧！','燕子矶','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/c2cec3fdfc039245b23abcfc8694a4c27c1e25b1.jpg',0,0),(34,'现已建成小红山鸟类区、大红山猛兽区、放牛山食草动物和灵长动物三大展区,39个设计新颖的动物场馆依山营建，错落山间。只是节假日人太多。总体感觉一般般，可是环境也不错。','红山森林动物园','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/902397dda144ad345f16d464d1a20cf430ad85a3.jpg',0,0),(35,'今夜亲身体验了画舫夜游秦淮河，我忍不住要说句实话！为什么大家游完了只评论它的夜景、它的历史情趣，没有人注意到它已经变成一条臭气熏人的臭水河了吗？50分钟内在这样的气味熏陶下，还能觉得魂牵梦绕也真是醉了！个人觉得这个景点真不应该被追捧，更不用说花60、80元自己买票去体验，就是因为总有不明真相的人不断的去送钱，这种烂景点才得以生存下去，大家不要再上当了，客观的评价这个景点吧，这河真的该整治了！给钱都不要去体验啊！！！','秦淮河画舫','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/30adcbef76094b36391ef119a2cc7cd98c109db2.jpg',0,0),(36,'银杏湖生态旅游度假休闲观光区位于南京市江宁。茶花、樱花和牡丹，成片的梅花、桃花，和着绿油油的茶园，散发着沁人心脾的清香。现已建成青龙湖人居森林。九曲十八弯的山路上，高大的雪松随着山势凸显出浓淡相间的层次感，金色的合欢点缀其间，银杏、柳杉等保健植物，棕榈、冬青等蜜源植物，爬山虎、紫荆等鸟嗜植物，百里香、蒲公英等芳香植物，都在这里\"聚会\"，鸟语花香，别有洞天。','银杏湖','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/b94f65eced3384bc2e2e21e7.jpg',0,0),(37,'一定要注意安全！此地有生命危险！浦口车站早已被封，网上流传的照片过时多年真正适合拍摄的地方，是沿着右侧的马路走大约两百米，在尽头拐过弯，确实有个铁路路口，右侧是开放的在右侧是有一些铁轨，还“停”着几节货运列车。但你们想不到吧！那列车是厂里运货的，时不时会移动，恐怖吧？意外吧！所以，当我自拍时，列车突然启动了，我真吓到了！连忙大叫，提醒周围游客注意大家想，谁能料到这几节列车竟是活动的，如果游客靠在车边，或者在两节车厢之间自拍，甚至有胆大的钻到车厢下，而列车突然启动了，躲闪不及，岂不是要闹出人命！！希望能引起更多人的警觉！也希望有关部门赶快拿出应对措施。但愿老天保佑，这里千万别出事！','浦口火车站','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/5fdf8db1cb134954a0af2b9f574e9258d0094a9c.jpg',0,0),(38,'南山湖位于南京江宁区，自驾的话从市区大概开车需要一个小时左右。景区没有门票。湖边有烧烤台，可以租烧烤设备也可以自带。景区外有垂钓和赛马区，人不多，主要鱼种是鲫鱼和回鱼。度假村有自己的酒店，标间均价100左右，也可以选择住湖边的小别墅，五六个人一间别墅，均价1000左右。景区外面再稍微远一点也有一些山庄可以住宿。饮食方面经济实惠，一顿差不多荤素搭配的饭菜人均30左右。食宿性价比非常高。','南山湖','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/6a22e824e95bbd5e8744f98e.jpg',0,0),(39,'江宁织造博物馆会再现江宁织造府的历史，从清代顺治年间设立到光绪年间废止，馆内风景很美。展品丰富，博物馆设计的也非常别致，而且建筑和园林都非常漂亮。','江宁织造博物馆','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/4610b912c8fcc3ce1dd217e19345d688d53f20d6.jpg',0,0),(40,'最爱的地方，环境很不错的哦。挑选想看的书，安安静静的坐上一个下午，喝着下午茶，听着轻音乐，特别的文艺和小资。','先锋书店','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/b90e7bec54e736d195747c3d99504fc2d56269a4.jpg',0,0),(41,'江宁区位于长江三角洲“江南佳丽地”的南京市南部，从东西南三面环抱南京。','江宁','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/b21bb051f8198618f641913a4bed2e738bd4e60e.jpg',0,0),(42,'臭脚来评：石塘村这一带，一是看石塘人家，二是看竹海，竹海在人家的前面，开车还得有一段路程，不远。竹海没有明显的指示牌，车就停在路边，依次摆放，一定程度上还是影响其他车辆的通行。从一片高高的草丛中穿过去，走到一个平台处，就可以看到四周密密的竹林。竹海这一片应该说开发和管理都还有待提高，一是小摊小贩占据了走道，如果游客多，基本上难以通行；二是右侧通道封闭，从右边走只能出去，想往深处走的话，有一个木门会给拦住不让进；左边可以走到一处池塘，但水并不干净，四周也是铁丝围着，禁止游客再往里面走，只能远远看着，另外道路很多是土路，遇上下雨天就变得泥泞不堪。这里的东西都是村民在叫卖，价格比较贵，体验不是很好。','石塘竹海','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/ae51f3deb48f8c543bff13d13b292df5e0fe7f24.jpg',0,0),(43,'重岗叠岚，草木茂盛，风景优美，南京唯一一个到星期天没有太多人的地方，休闲放松的好去处，同时也是南京郊县旅游胜地。','天生桥','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/9864a2313f9c17f05fdf0ef1.jpg',0,0),(44,'位于江苏省南京市江宁区(距南京约四十公里)杨柳村地处外秦淮河平原，全村居民1348人，村庄依山傍水，北靠马场山，前临杨柳湖，富有浓郁的江南水乡特色。杨柳村始建于明万历七年(1579年)，村庄一个个自成体系的独立宅院又名为“堂”，各堂的名称是：翼圣堂、翼经堂、四本堂、树德堂、思承堂、礼和堂、酌雅堂、安雅堂、崇厚堂、序乐堂、居易堂、天乐堂、映雪堂、祖耀堂、文光堂。原来的宅院之间闾巷，全部以青石板铺路，条石为阶。古时有“青石墁地石门楼，走进杨柳不沾泥”说法，是一条洁净的“青石街”。','杨柳村','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/734f12f3690215a10b46e010.jpg',0,0),(45,'桃檐斗拱，木排门板，镂花窗格，马头火墙，蝴蝶小瓦，典型的江南韵味，又揉进了徽派风格。','高淳老街','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/aa59892b7dbf16a2e7cd4035.jpg',0,0),(46,'是明清时期的科举贡院，旁边就是秦淮河，夜景很漂亮，进去有很多小吃，很有特色的景点，交通也很方便。','江南贡院遗址','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/d000baa1cd11728b07383cadc9fcc3cec3fd2c23.jpg',0,0),(47,'可惜没有在秋天来，梧桐路一定非常美。大餐厅中设置的小咖啡馆很心机，还是有一点风雅的','美龄宫','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/11385343fbf2b211abb79babcb8065380dd78ebd.jpg',0,0),(48,'南京水魔方是目前中国最大的水上游乐园，游客都是穿泳衣入园，里面有淋浴间，储物室，需要带手机的童鞋可以再自备防水手机袋，游客项目很是刺激，妞好多项目都不敢玩，唯一一点是玩一个项目都是要爬楼梯，准备好体力哟 嘻嘻\n门票\n（全天票230）（白天场208）（晚场198）\n温馨提示：夏天可以带一把遮阳伞，要不然小心晒蜕皮哦','南京欢乐水魔方','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/78310a55b319ebc41673196a8326cffc1e17163d.jpg',0,0),(49,'是融科普教育、观赏娱乐为一体的大型海洋生物展示窗口，非常适合亲子游。幽雅的海豚与聪明的海狮将为你带来一场生动谐趣、精彩绝伦的海洋动物秀。','南京海底世界','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/aec379310a55b319de4572ff42a98226cefc17ff.jpg',0,0),(50,'在珍珠泉景区里面，动物品种不多，而且基本上都是用来表演的，表演完后又放回笼中供游人观赏，要在南京看动物推荐红山森林动物园','南京野生动物园','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/1c950a7b02087bf4efe65f33f3d3572c10dfcfe6.jpg',0,0),(51,'固城湖是江苏省饮用水水质最好的天然湖泊，特别适宜养殖中华绒螯蟹，这儿也因螃蟹而闻名遐迩。','固城湖','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/d8f9d72a6059252d7d9380b9349b033b5ab5b983.jpg',0,0),(52,'方特一期去过一次，二期去过两次。个人还是更推荐二期，魔法城堡，大摆锤、过山车、秦岭探险、水漫金山真的很不错，各种刺激，荷尔蒙瞬间提升。如果你害怕那些刺激的项目，那么生命之光、魔法城堡、猴王等各种4D、表演绝对也是物超所值。','弘阳欢乐世界','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/4afbfbedab64034f31b35cf2aec379310b551dc3.jpg',0,0),(53,'从去年6月份就看到情侣园大门紧锁，说是整修，原以为很快就能重新开放的，可是等的自己的头发都白了还是没有开放，终于在今年7月份终于收到消息说情侣园全新开放，所以第一时间跑去看看到底有什么翻天覆地的变化。','情侣园','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/eaf81a4c510fd9f91027e6b9242dd42a2834a42a.jpg',0,0),(54,'山碑材景区范围由宁杭公路北侧坟头站入口起，向东沿黄龙山、阳山山脊，北折西环排山，与汤山采石场和钟山水泥厂接壤。内含阳山、黄龙山，北山坡及排山，面积约1．54平方公里。','阳山碑材','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/00a82701967a09637bec2c90.jpg',0,0),(55,'一般般，没什么看头的博物馆。除非对云锦这东东感兴趣。','南京云锦博物馆','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/a2cc7cd98d1001e957282deab90e7bec54e7973a.jpg',0,0),(56,'常玩海底世界，其中给我印象最深刻的就是极地馆。听说很多同类城市都没有这样规模的展馆，感觉生在南京真是幸运。','南京极地馆','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/8b82b9014a90f603d435f49d3812b31bb151ed67.jpg',0,0),(57,'我很喜欢琵琶湖这里的环境，幽深安宁，背枕着厚实城墙低头是芦苇摇曳的一池平波，抬头远望目光穿过前方由低到高的各色秀林，停留在钟山起伏的山峰和天际间让人浮想联翩或者什么都不用想发发呆也是很好的享受...间或有鸟儿闲跳鸣叫，湖面上小野鸭划过涟漪...转身前再望你一眼，不知梦中是否能重现你恬静的容颜...','琵琶湖公园','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/279759ee3d6d55fb3058f1e16c224f4a21a4dd5f.jpg',0,0),(58,'院内植物品种丰富，空气好清新，而且郁金香很好看。春季的植物园尤为美丽，风景很优美，植物园里面绿化很不错。适合来散步。','中山植物园','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/960a304e251f95caeda6dc46c8177f3e660952ea.jpg',0,0),(59,'印象中好多的鸽子，去的时候游人很少，印象很好，后来朋友过去说要收取门票，人也多了。','中山陵音乐台','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/a044ad345982b2b70143911530adcbef77099b07.jpg',0,0),(60,'桠溪镇是中国首个国际慢城，桠溪镇的特色生态旅游以慢节奏的轻松生活使得这个称号名副其实。','桠溪镇','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/21a4462309f7905254c4039a0cf3d7ca7acbd5bf.jpg',0,0),(61,'是以自然景观为主体，融旅游观光、休闲娱乐、度假疗养为一体的好去处。景区人很少，门票很值，娱乐项目非常多，猴子很有趣，表演很精彩，夏季水上项目更多尤其好玩。','珍珠泉','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/00e93901213fb80e7cb1225837d12f2eb83894d8.jpg',0,0),(62,'台城位于玄武湖南侧 鸡鸣寺北侧\n台城是南京古城墙的一部分 东端与明城墙相接 西端为城墙尽头不再向西延伸 台城所在是东晋和南朝时期皇宫所在地\n看到很多点评说台城上的风景一般 从很多其他地方一样能看到玄武湖 但是我相信当你亲自踏上那片承载着千百年历史的砖块上 你会有比眼前美景更为强烈的感受\n其实所谓城墙 风光都是大同小异 跟长城差不多的模式 不同的是墙内墙外的风景 还有那份厚重的历史\n台城上的砖几乎都有铭文 而这些铭文让我相信 这些我触手可及的砖 是实打实的穿越来到我眼前的古物\n想象一下你和千百年前的古人站在同一片天空下 看着同一片湖 抚摸着同样的砖块 古迹就是能这样神奇的把你带回到从前','台城','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/4a36acaf2edda3cc8b5e0dde00e93901203f9292.jpg',0,0),(63,'颐和路是南京市重点打造的民国风情街区，这一片大都是建于30年代的小洋楼，路边都是高大的树木，并且几乎没有公交车（只有一辆公家车经过颐和路），也没有什么商铺，平时都是大门紧闭，所以游客并不多，环境非常幽静，适合徒步和拍照。','颐和路公馆','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/8b82b9014a90f603facad3713b12b31bb051ed8a.jpg',0,0),(64,'出了博物院，往东可以看到中山门和明城墙。明天去中山陵和紫金山，就在  明天去中山陵和紫金山，就在那两个绿色的路牌附近，找到对应的汽车站牌。又在宾馆附近吃了午饭，然后走着找站牌去总统府，还没到明故宫遗址的地方发现一个牌子“原国民政府旧址”，再往西，还有这么一个地方的。 不过呢，现在这地方属于有关部门，不对外开放的。留像一张即可，也没法深入了解。到总统府的公交车有好几路，也记不清那路先到的，反正没几站就到了。外面一位老先生扮演蒋总统，不过拍照合影肯定要交费的。俺尊重人家的职业，没有偷拍。','原国民政府旧址','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/7aec54e736d12f2eaf77f0be4ec2d562843568f9.jpg',0,0),(65,'坐落在将军山里面，很悠闲，感觉特别适合情侣','池林栈道','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/500fd9f9d72a6059a6eb1f2d2a34349b033bba0a.jpg',0,0),(66,'南京有连个科技馆，还有一个在电视塔下的江苏科技馆，尤其是旁边新开的消防安全体验馆，可以带孩子去体验，能学到很多消防知识。','南京科技馆','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/d6ca7bcb0a46f21f6e3e18aef7246b600d33aec1.jpg',0,0),(67,'扼守长江险要，为兵家必争之地。','清凉山石头城','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/b13fd4801b05d9bc9123d98e.jpg',0,0),(68,'玄武门是古城南京的一处古城门,现为玄武湖公园大门。玄武门宏伟大气，久经年月的风吹雨打，更添了几分历史的沧桑和厚重。','南京玄武门','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/a71ea8d3fd1f4134a9e94583241f95cad0c85e74.jpg',0,0),(69,'石塘是我去过的最好的农家乐之一。\n石塘村分前石塘村和后石塘村。前石塘开发较早，也较小，基本就是一条小小的河，一边是公路一边是农家乐，后石塘就大多了，也比较新，水体比较大，沿水设置了木栈桥、甬路，有秋千，可以钓鱼，还可以赏睡莲。村子里农家乐很多，也建了一些旅游设施，像青年旅社、酒吧之类的，不过貌似没什么生意，毕竟这种近郊农家乐来过夜的人应该不多。据说旁边的山上还要修一个游乐场。村子里还有几处古迹，也无非古井、古树、古祠堂，但凡有点年月的村子必有的老三样。\n\n非常适合阖家或是几个好友来休闲踏青。','石塘人家','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/ac6eddc451da81cba2d98b225366d01609243125.jpg',0,0),(70,'不好玩  死了一个人好差差  差评','滑道游乐园','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/5366d0160924ab18872c190237fae6cd7b890bc8.jpg',0,0),(71,'南京的河西是好地方，离闹市近交通便利，景点也是很多。汉中门附近就有莫愁湖公园和清凉山公园，石头城公园。清凉山最美的是秋季，满山的桂花和银杏，闻香看景。最紧要的是免费！春天的时候还有兰花展，买一盆回家养养也很好，是可以当面溢价的临时集市。','清凉山公园','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/bd315c6034a85edfd9ed83c048540923dc5475eb.jpg',0,0),(72,'南京的报纸APP搞活动，门票大优惠，跟朋友们一起去看了一下，全是人造的环境。','金陵大报恩寺遗址','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/bd315c6034a85edfff7ce1fc48540923dc547578.jpg',0,0),(73,'傅家边科技园及其周边风景区是江苏省4a风景区，无需门票，一个以农家乐为特色的高新科技农业种植区，园中有万亩的竹海，茶树和梅花，周边有大面积的草莓大棚，品种丰富，可采摘可现购，为农历年底和新年初一个月性价比最佳，采摘大概18元一斤，现买大概14元一斤左右。二月也是赏梅的最佳时节，植梅规模不亚于南京梅花山。从乘坐溧水县际公交晶桥方向到傅家边科技园下即可，也适合自驾，穿过梅花山到达秋湖林场可观看万亩竹海。周边的住宿基本没有，餐饮的话以农家乐餐厅为主，价格稍高于普通餐馆，但多为家庭自营，比较原汁原味。','傅家边科技园','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/72b19c02737816624afb51e1.jpg',0,0),(74,'甘熙，字实庵，生于1798年，是晚清南京著名文人、金石家、藏书家。早年就读于钟山书院，师从散文家姚鼐。甘熙宅第又称甘熙故居或甘家大院，始建于清嘉庆年间，俗称“九十九间半”，是中国最大的私人民宅，与明孝陵、明城墙并称为南京明清三大景观，具有极高的历史、科学和旅游价值，是南京现有面积最大，保存最完整的私人民宅。甘熙宅第现已开辟为南京民俗博物馆。','甘家大院','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/f7246b600c338744b3b6eb98500fd9f9d62aa0e7.jpg',0,0),(75,'南师大最美的是随园校区，曾经是金陵女子学院，历史悠久，里面的建筑古色古香，还有随园音乐厅，有时会有节目表演。进门后还有几颗很大的银杏树，秋天的时候很美。也可以去教室坐一坐，很多教室的桌椅也挺老的，很有历史的韵味。不忙的时候去里面逛逛挺不错的，可以找到宁静的愉悦。','南京师范大学','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/30adcbef76094b36d25fd811a2cc7cd98c109d79.jpg',0,0),(76,'我已经去过无数次了，不过还想去，因为里面太好玩了，有好多版块，让我们了解了许多从古到今的科技进步，还有好玩的游戏。而且这里不大，从头到尾玩差不多也只要一个多小时。时间不够的话可以分几次去玩，反正是免费的。地址就在南京市鼓楼区石头城118号，很近的。','江苏省科学技术馆','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/a9d3fd1f4134970af1b8d6f194cad1c8a6865d21.jpg',0,0),(77,'这是适合看书的地方，一般很少有人会把图书馆作为旅游必备景点，不过南京图书馆的确够大，很有气势；里面分儿童阅读区，成人阅读区，阅读可以提高一个民族的进步，如果走到图书馆附近了，不妨进来看一看，感受一下读书的氛围。','南京图书馆','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/f9dcd100baa1cd112f0620ddb812c8fcc2ce2d9e.jpg',0,0),(78,'李香君故居又称媚香楼，南京市秦淮区钞库街38号，为三进两院式明清河房建筑，展现了李香君当时生活的场景。李香君是清初戏剧家孔尚任名著《桃花扇》中的秦淮名妓，“秦淮八艳”之一，是家喻户晓的我国古代罕有妇女的形象。门票16元。','媚香楼','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/63d0f703918fa0ecb32622dd279759ee3c6ddb79.jpg',0,0),(79,'目前湖南路正在修地下步行街，期待以后更繁华，现在一半的街道有正常营业的店铺，一半空着，狮子桥紧挨湖南路，各地小吃货可以来扫街了[调皮]','湖南路','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/f11f3a292df5e0fe58e16aff5d6034a85fdf7257.jpg',0,0),(80,'紫金山观光索道单程35，往返60，索道是那种简易索道，恐高的人要小心哟！天气好的时候可以看到玄武湖。索道其实分成了2段，第一段下来靠近天文台，大概走10分钟就到了。第二段下来是钟山的最高峰，是个看南京全景的好地方。买单程票可以在天文台下来，然后玩好了可以继续做索道去顶峰，不用重新买票，往返票也一样。','紫金山观光索道','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/14ce36d3d539b6003a76638aeb50352ac65cb756.jpg',0,0),(81,'位于南京的珍珠泉景区，就是模仿北京长城的一个人造景点，没有什么历史价值，不过这里到可以登高望远，南京的最高点就在这里。','万米长城','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/83025aafa40f4bfb6cf7f18e024f78f0f63618c0.jpg',0,0),(82,'在南京，有许多南京大屠杀的现场，立起了石碑，将历史记载的血腥的一页刻在了石碑上。每到清明节，这些地方都摆满了祭奠者放上的鲜花和花圈。','南京万人坑','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/2fdda3cc7cd98d1063cc2ed4203fb80e7bec903e.jpg',0,0),(83,'南唐二陵位于南京江宁区祖堂山南麓，包括李昪及其皇后的钦陵和李璟及其皇后钟氏的顺陵。于1950-1951年由南京博物院组织发掘，是中国五代十国时期规模最大的帝王陵墓。交通信息：地铁10号线小行站下，换乘155路公交车至祖堂山陵园站下，步行约8分钟至本景区。多说一句：南唐二陵位于祖堂山，附近有将军山和牛首山，可以一起游玩，不然有点远，不是很值得特意去。','南唐二陵','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/c83d70cf3bc79f3d12dd07d9bba1cd11728b291f.jpg',0,0),(84,'燕子矶号称“万里长江第一矶”，实则海拔仅36米。倒并非江南无山，近在咫尺的幕府山也有四百多米，风景也不错。不知为什么古人独厚燕子矶？十几年前我曾来过一次，票价仅两元，里面几乎没有人。','幕府山','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/960a304e251f95ca34b07564c8177f3e6609529f.jpg',0,0),(85,'门票44元，没有学生票。个人感觉有点坑，只是老山的一小部分，爬到老鹰山的山顶，上面有老鹰山眺望塔，需要脱了鞋上去，可以看到连绵的群山。里面还有游乐场，滑草场，鸟园，蛇园等，蛇园的蛇好像大多都是死的。曾经里面还有滑索，现在已经停运了。感觉没有特别值得看的。','老山国家森林公园','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/0dd7912397dda14438a78f5fb3b7d0a20df486b5.jpg',0,0),(86,'江苏舜天的主场，每一个舜天球迷心中的圣地！时刻捍卫，不容侵犯！2012年10月20日，在这里举行的江苏舜天VS广州恒大的比赛，创造了中国各项足球赛事上座率纪录——65769人。而且这个数字很有可能说少了，许多人赛后表示自己的座位上站了两三个人，但奥体的座椅数是约68000个，也就是说这场比赛的实际人数很可能超过了7万。这场比赛过后，亚足联调严了规定，规定每场比赛的上座率不得超过球场总容纳人数的80%。也就是说，65769的纪录基本不可能被打破了——除非有球队拿能容10万人的鸟巢当主场。我们骄傲地说，这一纪录来自南京奥体！','南京奥林匹克体育中心','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/5ab5c9ea15ce36d3aa206fd93bf33a87e950b137.jpg',0,0),(87,'梅园新村纪念馆是中国革命纪念博物馆。1954年筹建，1960年起内部开放。文革期间，原址封闭。1977年11月，重新对外开放。到总统府参观的时候也可以到这里跟历史问个好。【京1645】国共南京谈判期间，周恩来、董必武等人就是乘坐这辆汽车和国民党进行谈判的。这辆轿车已成为革命传统教育的重要教材，它是国共南京谈判的重要历史文物。这座城市经历过磨难，流淌过鲜血，告慰过亡魂，而今天，展现给世人的是包容与大气，理解和热情。就像道路两边的行道树，历经血雨腥风但依然挺立，骄傲地活过每一岁的四季。一面是让人愤慨的峥嵘岁月，一边是充满希望的崭新年代，在南京，我遇见了过去，也结识了现在。','梅园新村纪念馆','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/50da81cb39dbb6fd3b3ca1c90824ab18962b37fd.jpg',0,0),(88,'个人感觉一般般，观光层在72楼，288米，晚上去的，南京的灯光没有那么璀璨，夜景也不是特别美，但还是能看的很远的，门票比较贵，直接买是80元，团购50元，里面的电梯很高档，超快，从1楼到达72楼观光层大概只要半分钟，如果想观光可以去爬紫金山，免费的，还可以领略不同风光，体验爬山的快乐。','紫峰大厦观光层','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/562c11dfa9ec8a13187fcc18f603918fa1ecc0e5.jpg',0,0),(89,'风景优美，温泉舒适，还有“香樟华苹”超六星顶级度假酒店、康体中心、垂钓中心、烧烤场、特色餐饮、户外拓展基地等项目。','南京汤山颐尚温泉','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/2cf5e0fe9925bc31e81fd16c5fdf8db1ca137080.jpg',0,0),(90,'和北京987类似，没有那个做的好。园区有9幢清代建筑、19幢民国建筑，如同一座近代中国工业博物馆，记录着中国民族工业发展的历史轨迹。主打时尚生活休闲、科技创意研发、工艺美术创作、酒店商务、科技创意博览。人太少，名气没打出来，宣传做得不好，看起来还是像工厂。','1865科技创意产业园','https://gss0.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/lvpics/pic/item/a2cc7cd98d1001e925267fc4b90e7bec55e797e6.jpg',0,0);
/*!40000 ALTER TABLE `spot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tourist`
--

DROP TABLE IF EXISTS `tourist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tourist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openId` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tourist`
--

LOCK TABLES `tourist` WRITE;
/*!40000 ALTER TABLE `tourist` DISABLE KEYS */;
/*!40000 ALTER TABLE `tourist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-07 15:12:44
