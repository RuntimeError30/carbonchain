<script>
	import BodyElements from '../../pages/Initialdashboards/bodyElements.svelte';
	import Navbar from '../../pages/Initialdashboards/navbar.svelte';
	import Sidebar from '../../pages/Initialdashboards/sidebar.svelte';
</script>

<main class="grid p-10">
	<div class="">
		<Navbar />
	</div>
	<div class="flex mt-10 space-x-10">
		<Sidebar />
		<BodyElements />
	</div>
</main>
