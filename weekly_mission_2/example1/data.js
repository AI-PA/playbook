const repo= {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numbrerOfCOmmits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10, 
    issues_close: 10,
    getTotalIssues: function(){
        return this.issues_close + this.issues_open
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:"+ repo.name)
console.log("Issues totales: "+ repo.getTotalIssues())
console.log(repo.getGeneralInfo())
console.log(" ")
 //console.log(repo) imprimir info del objeto repo. 

const issue={
     title: "Info Semana 2",
     repositoryNameAssociated: "LaunchX",
     status:"Open",
     numberOfComments: 2,
     labels: "", 
     author:"AI-PA",
     dateCreated:"23/05/22",
     lastUpdated:"23/05/22",
     getTitleAndAuthor:function(){
        return `This issue is ${this.title} was created by ${this.author}`
     },
     getGeneralInfo:function(){
         return `
         This issue is ${this.status}, 
         and data created ${this.dateCreated}, 
         last update ${this.lastUpdated}, \n \t ` 
         +this.getTitleAndAuthor()
     }
}
console.log("Titulo del Issue"+ issue.title)
console.log("Issues name & author: " + issue.getTitleAndAuthor())
console.log("Issues Information: "+issue.getGeneralInfo())
console.log(" ")
//console.log(issue)

const PullRequest={
    title:"Mejoras de LaunchX",
    brnchName: "Main",
    dataCreated: "23/05/22",
    status:"Open",
    repositoryNameAssociated: "LaunchX",
    author: "AI-PA",
    getStatus: function(){
        return this.status
    },
    getTitleAndAuthor: function(){
        return `This PullRequest is ${this.title}, was created by ${this.author}`
    }
}
console.log("Titulo del PullRequest: "+ PullRequest.title)
console.log("Issues name & author: " + PullRequest.getTitleAndAuthor())
console.log("Stutus at PullRequest: " + PullRequest.getStatus())
//console.log(PullRequest)

