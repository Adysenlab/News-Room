


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