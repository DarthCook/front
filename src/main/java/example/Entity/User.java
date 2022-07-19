package example.Entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import org.hibernate.search.engine.backend.types.Sortable;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.FullTextField;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.Indexed;
import org.hibernate.search.mapper.pojo.mapping.definition.annotation.KeywordField;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
//@Indexed

@Table(name = "users")
public class User extends PanacheEntity {
//    @FullTextField(analyzer = "name")
//    @KeywordField(name = "name_sort", sortable = Sortable.YES, normalizer = "sort")
    public String name;
//    @FullTextField(analyzer = "standard")
//    @KeywordField(name = "sex_sort", sortable = Sortable.YES, normalizer = "sort")
    public Sex sex;
//    @FullTextField
//    @KeywordField(name = "age_sort", sortable = Sortable.YES, normalizer = "sort")
    public int age;
//    @FullTextField(analyzer = "standard")
//    @KeywordField(name = "email_sort", sortable = Sortable.YES, normalizer = "sort")
    public String email;
}
