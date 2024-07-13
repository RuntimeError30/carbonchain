<script>
	import AnalyticsMain from '../../pages/FullDashboard/AnalyticsMain.svelte';

	import Navbar from '../../pages/FullDashboard/navbar.svelte';
	import Sidebar from '../../pages/FullDashboard/sidebar.svelte';
</script>

<main class="grid p-10">
	<div class="">
		<Navbar />
	</div>
	<div class="flex mt-10 space-x-10">
		<Sidebar />
		<slot />
	</div>
</main>
