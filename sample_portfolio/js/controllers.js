
app.run(function($rootScope){
	
	$rootScope.makeActive = function(currentPage){
		
		if (currentPage == 'bio'){
			$rootScope.BioIsActive = true;
			$rootScope.ResumeIsActive = false;
			$rootScope.ProjectsIsActive = false;
		} else if ( currentPage == 'projects'){
			$rootScope.BioIsActive = false;
			$rootScope.ResumeIsActive = false;
			$rootScope.ProjectsIsActive = true;
		} else {
			$rootScope.BioIsActive = false;
			$rootScope.ResumeIsActive = true;
			$rootScope.ProjectsIsActive = false;
		}
		
	}
})

app.controller("BioController", function($scope){

});

app.controller("ProjectsController", function($scope){
	
});

app.controller("ResumeController", function($scope){
	
});