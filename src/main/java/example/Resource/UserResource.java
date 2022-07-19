package example.Resource;

import example.Entity.User;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import io.quarkus.panache.common.Page;
//import org.hibernate.search.mapper.orm.Search;
//import org.hibernate.search.mapper.orm.session.SearchSession;
import org.jboss.resteasy.reactive.RestQuery;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

//  @Inject
//  EntityManager em;

  @POST
  @Transactional
  public Response createUser(User user) {
    user.persist();
    return Response.created(URI.create("/users/" + user.id)).build();
  }

  @GET
  public List<User> usersList() {
    return User.listAll();
  }


//  @GET
//  public Stream<PanacheEntityBase> usersList() {
//    Stream<PanacheEntityBase> users = User.findAll()
//      .page(Page.ofSize(10)).nextPage().stream();
//    return users;
//  }

  @GET
  @Path("/{id}")
  public User getUserById(Long id) {
    return User.findById(id);
  }

  @PUT
  @Transactional
  @Path("/{id}")
  public User updateUser(Long id, User user) {
    User userDTO = User.findById(id);
    if (id == null) {
      throw new IllegalArgumentException("Invalid user id: " + id);
    }

    userDTO.name = user.name;
    userDTO.sex = user.sex;
    userDTO.age = user.age;
    userDTO.email = user.email;

    return userDTO;
  }

  @DELETE
  @Transactional
  @Path("/{id}")
  public void deleteUser(Long id) {
    User user = User.findById(id);
    if (id == null) {
      throw new IllegalArgumentException("Invalid apartment id: " + id);
    }
    user.delete();
  }

//  @Transactional
//   onStart(@Observes StartupEvent event) throws InterruptedException {
//    return Search.getSearchSession(em)
//      .search(User.class)
//      .predicate(f ->
//        f.simpleQueryString().onFields("title").matching(pattern)
//      )
//      .fetchHits();
//  }

//  @GET
//  @Path("/search")
//  @Transactional
//  public List<User> searchUser(@RestQuery String pattern,
//                               @RestQuery Optional<Integer> size) {
//
//    List<User>
//  }

}
