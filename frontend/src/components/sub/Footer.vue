<template lang="html">
   <div id="appFooter">
      <div class="footer">
         <hr>
         <div class="contact">
            <div class="contact-item">e. <a href="mailto:a.hinds@unsw.edu.au">Alex Hinds</a></div>
            <div class="contact-item">git. <a target="_blank" href="https://github.com/DarkPurple141/teaching-api">Repository</a></div>
         </div>
         <p><em>Made with vue.js</em></p>
      </div>
   </div>
</template>

<script>
export default {
   name: "appFooter",
}
</script>

<style lang="css">

#appFooter {
   background-color: white;
   position: fixed;
   left: 1%;
   bottom: 0;
   width: 90%;
   padding-top: 0px;
   padding-bottom: 20px;
   padding-left: 3.5%;
   padding-right: 3.5%;
}

hr {
   width: 50%;
}

.contact-item {
   display: inline-block;
   padding: 5px;
}


.footer {
   font-size: 0.9em;
   margin-top: 20px;
   width: 100%;
}
</style>
