# Standard ugo/rwx permissions Linux.
All in linux is a file, each file or directory has security properties and permissions.

### Permissions
- r(read) = 4
- w(write) = 2
- x(execute) = 1

The above permisions are applied to both files and directories.

| d    | rwx         | rwx       | 
|------|-------------|-----------|
| file | User        |group      | others
  type | permissions |permission |


### Examples:
``` ls ``` List file and directory

``` ls -l ``` name directory

``drwxr-xr-x  5 gabriela  staff   160 Jun 18 18:55 src ``
- **drwxr** -> Type directory and permissions
*d* ->directory 
*rwxr-* ->Owner permissions
*xr-* -> Group permission
*x* -> Others
- **5** -> we have the number of subdirectories that the directory contains, taking into account that for files it is 1, directories is 2, if we have a subdirectory that contains another directory, its number will be 3,  2+3 = 5
- **gabriela** -> owner file or directory
- **staff** ->group
- **160** -> Size directory
- **160 Jun 18 18:55** -> Creation date
- **src** -> name directory
### Changing permissions
**chmod**: Change mode
**ugo**
- u=Owner 
- g=group  
- o=others
- a=all
### Examples
```chmod +r gaby``` Gives all users read access to the **gaby** file.

```chmod og-x gaby``` Remove **gaby**'s execute permissions from all users except the owner.

## Help
**man** is the interface used to view the system's reference manuals.






