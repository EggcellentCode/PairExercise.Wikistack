const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/wikistack', {
    logging: false
});
//const page = require('../routes/wiki');

const Page = db.define('page', {
    title: {type: Sequelize.STRING, 
            allowNull: false,
    },
    
    slug: {type: Sequelize.STRING,
            allowNull: false
    },
    
    content: {type: Sequelize.TEXT,
            allowNull: false
    },
    
    status: {type: Sequelize.ENUM('open', 'closed')}
});

const User = db.define('user', {
    name: {type: Sequelize.STRING,
            allowNull: false
    },
    
    email: {type: Sequelize.STRING,
            allowNull: false
    }
});

function generateSlug (title) {
  // Removes all non-alphanumeric characters from title
  // And make whitespace underscore
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

Page.beforeValidate((Page) => {
//   const page = Page.findAll({
//     where: {title: title}  
//   });   
//   page.slug = title.toString().replace(/\s+/g, '_').replace(/\W/g, '');
  // Removes all non-alphanumeric characters from title
  // And make whitespace underscore
  // return Page.slug;
  Page.slug = generateSlug(Page.title);
});

module.exports = {
  db,
  Page,
  User
};
