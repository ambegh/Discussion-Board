myBlog.factory('postService',['$http',function($http){
   
    /*var data = {posts:[{title:'Angular Tutorial ',
                       link:'https://thinkster.io/mean-stack-tutorial/',
                       upvotes:34,
                       comments:[{body:'awsome tutorial', author:'aman', upvotes:0}]}]};
    */
    var postData = {
    posts: []
    };

    postData.getAll = function(){
        return $http.get('/posts')
        .success(function(posts){
            angular.copy(posts,postData.posts);
        })
        .error(function(err){
            console.log('Error '+err);
        });
    };
    
    
    postData.create = function(data){
        return $http.post('/posts', data)
        .success(function(newpost){
            postData.posts.push(newpost);
        });
    };
    
    postData.upvote = function(post){
        return $http.put('/posts/'+ post._id + '/upvote')
        .success(function(data){
            post.upvotes += 1 ;
    
     });
    };
    
    postData.get = function(id){
        return $http.get('/posts/' + id).then(function(res){
            return res.data;
     });
    };
    
    postData.addComment = function(id, comment){
        return $http.post('/posts/' + id + '/comments', comment);
    };
    
    
    postData.upvoteComment = function(post, comment){
        return $http.put('/posts/'+ post._id +'/comments/'+ comment._id + '/upvote')
        .success(function(data){
            comment.upvotes += 1 ;
        })
        .error(function(err){
            console.log('Comment upvote err' + err) ;
        });
    };
    
    return postData;
    
}]);