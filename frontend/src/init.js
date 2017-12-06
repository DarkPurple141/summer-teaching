import HTTP from './http'

const labs = []
labs.loaded = false
const weeks = {}

HTTP.get('api/labs')
.then(response => {
   response.data.results.forEach(item => {
      labs.push({
        title: item.name,
        path: item.path,
        file: item.file,
        description: "Pending...",
        active: false
     })
   })
   return labs
})
.then(labs => {
   labs.sort((a, b) => a.file > b.file)

   return HTTP.get('api/labs/meta/')
})
.then(response => response.data.results)
.then(results => {
   results.forEach((week, index) => {
        if (week.description != "No content") {
           labs[index].active = true
        }
        labs[index].description = week.description
     })
   labs.loaded = true
})
.catch(err => {
   throw err
   this.error = err
})

export { labs, weeks };
