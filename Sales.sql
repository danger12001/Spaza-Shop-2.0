-- tell the script which database to use
-- use can do this before you run the script
use Products;


-- you can create tables in the script;
create table products (
    id int primary key auto_increment,
        description char(100) not null,
    price decimal(10,2),
    category_id int,
    foreign key (category_id) references Categories(id)
);
