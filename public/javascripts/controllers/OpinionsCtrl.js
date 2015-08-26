myBlog.controller('OpinionsCtrl',['$scope','postService','post',
                             
function($scope, postService, post){
      $scope.post = post;                        
      
      $scope.addComment  = function(){ 
        if ($scope.body === ''){return;}
          
        postService.addComment(post._id,{body: $scope.body,
                                         author:'user',})
        .success(function(comment){
            $scope.post.comments.push(comment);
        });
                 
        $scope.body = '';
      };
    
      $scope.plusOne = function(comment){
        postService.upvoteComment(post, comment);
      }           
}]);