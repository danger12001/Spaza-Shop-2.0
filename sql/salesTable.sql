CREATE TABLE IF NOT EXISTS `sales` (`id` int(11) NOT NULL AUTO_INCREMENT,`date` varchar(30) NOT NULL,`product_id` int(11) DEFAULT NULL,`sold` int(11) DEFAULT NULL,`price` decimal(10,2) DEFAULT NULL,PRIMARY KEY (`id`),KEY `product_id` (`product_id`)) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
