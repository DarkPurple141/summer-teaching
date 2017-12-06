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
})
.then(() => {
   Promise.all(labs.map(item => {
      return HTTP.get(`api/${item.path}/meta.json`)
   }))
   .then((args) => {
      args.forEach((res, index) => {
        if (res.data.description != "No content") {
           labs[index].active = true
        }
        labs[index].description = res.data.description
      })
   })
   .then(() => {
      labs.sort((a, b) => a.file > b.file)
      labs.loaded = true
   })
   .catch(err => {
      throw err
   })
})
.catch(err => {
   this.error = err
})

export { labs, weeks };
