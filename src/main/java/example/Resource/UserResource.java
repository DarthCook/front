package example.Resource;

import example.Entity.User;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;
import io.quarkus.panache.common.Page;
//import org.hibernate.search.mapper.orm.Search;
//import org.hibernate.search.mapper.orm.session.SearchSession;
import io.quarkus.panache.common.Sort;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.jboss.resteasy.reactive.RestQuery;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@Path("/api/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource {

  @POST
  @Transactional
  public Response createUser(User user) {
    user.persist();
    return Response.created(URI.create("/users/" + user.id)).build();
  }

  @GET
  public List<User> usersList(@QueryParam(value = "sortBy") String sortBy,
                              @QueryParam(value = "page") Integer page) {
    int size = 6;

    if (sortBy == null && page == null) {
      return User.findAll(Sort.by("name"))
        .page(0, size).list();
    } else if (page == null) {
      return User.findAll(Sort.by(sortBy))
        .page(0, size).list();
    } else if (sortBy == null) {
      return User.findAll(Sort.by("name"))
        .page(page-1, size).list();
    } else {
      return User.findAll(Sort.by(sortBy)).page(page-1, size).list();
    }

  }


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

  @GET
  @Path("/search")
  @Transactional
  public List<User> userSearch(@QueryParam(value = "keyword") String keyword) {
    String searchQuery = "from User o where o.name like '%" + keyword +"%' " +
      "or o.email like '%" + keyword +"%' ";
    List<User> users = User.find(searchQuery).list();
     return  users;
  }
}
