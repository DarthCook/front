package example.Entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.panache.common.Sort;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "users")
public class User extends PanacheEntity {

    public String name;
    public Sex sex;
    public int age;
    public String email;

    public static List<User> getAll() {
      return User.list("ordered by name");
    }

}
