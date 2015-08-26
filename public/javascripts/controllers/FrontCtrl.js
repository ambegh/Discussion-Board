myBlog.controller('FrontCtrl', ['$scope','postService',

function($scope,postService){
  
    $scope.posts = postService.posts;
    
    $scope.addPost = function(){
      if (!$scope.title || $scope.title === ''){return;}   
      
      /*$scope.posts.push({
          title:$scope.title, 
          link:$scope.link, 
          upvotes:0,
          comments: [
    {author: 'Aman', body: 'Cool post!', upvotes: 0},
    {author: 'Joe', body: 'Great idea but everything is wrong!', upvotes: 0}
]
      }); */
      postService.create({title:$scope.title,
                          link: $scope.link,});
        
      $scope.title = '';
      $scope.link = '';
    
    };
    
    $scope.plusOne = function(post){
      postService.upvote(post);
    }
}]);
