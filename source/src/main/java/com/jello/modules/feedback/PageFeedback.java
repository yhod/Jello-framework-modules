package com.jello.modules.feedback;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

import jello.annotation.Expose;
import jello.annotation.Required;
import jello.common.Util;
import jello.model.JelloEntity;
import jello.rest.IllegalRequestResource;
import jello.security.Accessible;
import jello.security.Role;

@Accessible(
   create = Role.ALL, 
   delete = Role.ADMIN, 
   query = Role.ADMIN, 
   retrieve = Role.ADMIN, 
   update = Role.ADMIN 
)
public class PageFeedback extends JelloEntity {
	private static final long serialVersionUID = 1L;

	@Expose @Required
   public String page;

   @Expose @Required
   public Integer rating;

   @Expose
   public String user;
   
   @Expose
   public String ip;   

   @Override
   protected JelloEntity beforeSave() throws IllegalRequestResource {
      ip = Util.getCurrentRequestClientID();
      UserService uservice = UserServiceFactory.getUserService();
      if(uservice.isUserLoggedIn()) {
         user = uservice.getCurrentUser().getEmail();
      }   
      return this;
   }
}