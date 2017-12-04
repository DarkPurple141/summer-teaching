<!-- template adapted from -->

<template lang="html">
	<ul class="vs-crumbs" v-if="crumbs.length > 1">
		<li class="crumb" v-for="(crumb, i) in crumbs">
			<router-link v-if="i < crumbs.length-1" :to="crumb.path">{{ crumb.name }}</router-link>
			<span class=last v-else style="cursor:default">{{ crumb.name }}</span>
		</li>
   </ul>
</template>

<script>
export default {
   name: "breadCrumbs",
   template: '<crumbs></crumbs>',
   props: ['root'],
   computed: {
		crumbs: function()
		{
			var path = '', title = (this.root || 'home');

			var cs = [ { name: title, path: '/'} ]; if(!this.$route) return [];

			var r = (this.$route.path                        ).split('/');
			var m = (this.$route.matched[0].meta.crumbs || '').split('/');

			for(var i = 1; i < r.length; i++)
			{
				var name = (m[i] || r[i]); if(r[i] == '') continue;

				title += ' : '+ name;
				path  += '/'  + name;

				cs.push({ name: name, path: path });
			}

			window.document.title = title;

			return cs;
		}
    }
}
</script>

<style lang="css" scoped>

a {
   text-decoration: none;
}

.vs-crumbs {
   list-style:none;
   margin:0;
   padding:0;
   display:inline-block;
}

.vs-crumbs a:after {
   padding: 0 12px;
   color: #888;
   content: "/";
   text-decoration-line:none;
}

.crumb {
   display:inline-block;
}

</style>
