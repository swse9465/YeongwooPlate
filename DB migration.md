# DB migration

location : **~/sub2/backend**

1. 디렉토리에 있는 platedb.sql 을 컨테이너로 복사

```bash
$ docker cp platedb.sql maria-db:./
```

2. 컨테이너 bash 열어서 복사되었는지 확인

```bash
#docker exec -it [container name] bash
$ docker exec -it maria-db bash
root@ce872754b700:/# ls
```

3. mysql 에 database만들기

```bash
# mysql -u [DB user] -p [DB password]
root@ce872754b700:/# mysql -u root -p
Enter password:root
MariaDB [(none)]> create database platedb;
```

4. platedb.sql을 이용해 DB복원(import)

```bash
MariaDB [(none)]> exit
Bye
root@ce872754b700:/#

# cat platedb.sql | docker exec -i [container name] mysql -u [DB user] --password=[DB password] platedb
$ cat platedb.sql | docker exec -i maria-db mysql -u root --password=root platedb
```

**과정**

```bash
multicampus@DESKTOP-KVCQHCD MINGW64 /c/Project/second_project/sub2/s03p22a301/sub2/backend (feature/DBmigration)
$ docker cp platedb.sql maria-db:./

multicampus@DESKTOP-KVCQHCD MINGW64 /c/Project/second_project/sub2/s03p22a301/sub2/backend (feature/DBmigration)
$ docker exec -it maria-db bash
root@ce872754b700:/# ls
bin  boot  dev  docker-entrypoint-initdb.d  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  platedb.sql  proc  root  run  sbin  srv  sys  tmp  usr  var
root@ce872754b700:/# mysql -u root -p
Enter password:
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 78
Server version: 10.5.5-MariaDB-1:10.5.5+maria~focal mariadb.org binary distribution

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]> create database platedb;
Query OK, 1 row affected (0.000 sec)

MariaDB [(none)]> exit
Bye
root@ce872754b700:/#
multicampus@DESKTOP-KVCQHCD MINGW64 /c/Project/second_project/sub2/s03p22a301/sub2/backend (feature/DBmigration)
$ cat platedb.sql | docker exec -i maria-db mysql -u root --password=root platedb
```

