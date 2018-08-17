


export function getProjects() {  
    return {
      type: "PROJECTS"    
    };
}

export function getUserLogs(username) {  
    return {
      type: "USER_LOGS_GET",  
      payload : username  
    };
}
export function getFeedDocklets(count) { 
	console.log('get docklets') 
    return {
      type: "USER_GET_FEED_DOCKLETS",  
      payload : count  
    };
}