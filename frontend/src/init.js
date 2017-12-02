import HTTP from './http'

const labs = []

HTTP.get('api/labs')
.then(response => {
   response.data.results.forEach(item => {
      labs.push({
        title: item.name,
        path: item.path,
        file: item.file,
        description: "Pending..."
     })
   })
})
.then(() => {
   Promise.all(labs.map(item => {
      return HTTP.get(`api/${item.path}/meta.json`)
   }))
   .then((args) => {
      args.forEach((res, index) => {
        labs[index].description = res.data.description
      })
   })
   .then(() => {
      labs.sort((a, b) => a.file > b.file)
      console.log(labs)
   })
   .catch(err => {
      throw err
   })
})
.catch(err => {
   this.error = err
})

export default labs;
