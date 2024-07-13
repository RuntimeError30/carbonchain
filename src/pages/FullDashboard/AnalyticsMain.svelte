<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	let data = [];
	let totalEmission = 0;

	// Fetching from Database
	onMount(async () => {
		const response = await fetch('/api/data');
		data = await response.json();

		// Emission Total Code

		totalEmission = data.reduce((acc, item) => acc + item.Emission, 0);
	});

	// chart.js
	let WeeklyData;

	onMount(() => {
		const magnetometerCtx = WeeklyData.getContext('2d');

		// Data for the magnetometer chart
		const EmissionData = {
			labels: ['6:00', '7:00', '8:00', '9:00', '10:00'],
			datasets: [
				{
					label: 'Bt',
					data: [50, 30, 6, 65, 45],
					borderColor: '#A57AFF',
					borderWidth: 1,
					fill: true,
					backgroundColor: 'rgba(164, 122, 255, 0.21)'
				}
			]
		};

		const chartHeight = 300;
		const commonOptions = {
			maintainAspectRatio: true
		};

		const carbon1Config = {
			type: 'line',
			data: EmissionData,
			options: {
				...commonOptions,
				scales: {
					y: {
						beginAtZero: true,
						title: {
							display: true,
							text: 'Magnetometer Data'
						}
					},
					x: {
						title: {
							display: true,
							text: 'Month'
						}
					}
				}
			}
		};

		const resizeCharts = () => {
			WeeklyData.height = chartHeight;
		};

		new Chart(magnetometerCtx, carbon1Config);
		resizeCharts();
	});

	let monthlyData;

	onMount(() => {
		const monthlyDataChart = monthlyData.getContext('2d');

		// Data for the magnetometer chart
		const EmissionData2 = {
			labels: ['6:00', '7:00', '8:00', '9:00', '10:00'],
			datasets: [
				{
					label: 'Bt',
					data: [50, 30, 6, 65, 45],
					borderColor: '#A57AFF',
					borderWidth: 1,
					fill: true,
					backgroundColor: 'rgba(164, 122, 255, 0.21)'
				}
			]
		};

		const chartHeight = 300;
		const commonOptions = {
			maintainAspectRatio: true
		};

		const carbon2Config = {
			type: 'line',
			data: EmissionData2,
			options: {
				...commonOptions,
				scales: {
					y: {
						beginAtZero: true,
						title: {
							display: true,
							text: 'Magnetometer Data'
						}
					},
					x: {
						title: {
							display: true,
							text: 'Month'
						}
					}
				}
			}
		};

		const resizeCharts = () => {
			monthlyData.height = chartHeight;
		};

		new Chart(monthlyDataChart, carbon2Config);
		resizeCharts();
	});
</script>

<section class="w-full h-[40rem] overflow-scroll">
	<div class="w-full flex items-center spacep-x-5 space-x-10">
		<div class="flex items-center p-5 bg-white rounded-xl shadow-xl w-full space-x-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide text-[#3A4CC6] lucide-atom"
				><circle cx="12" cy="12" r="1" /><path
					d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
				/><path
					d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
				/></svg
			>

			<div>
				<h1 class="text-xl font-bold">Total Emission</h1>

				<h1 id="totalEmission">{totalEmission} kgCo2e</h1>
			</div>
		</div>

		<div class="flex items-center p-5 bg-white rounded-xl shadow-xl w-full space-x-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide text-[#3A4CC6] lucide-atom"
				><circle cx="12" cy="12" r="1" /><path
					d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
				/><path
					d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
				/></svg
			>

			<div>
				<h1 class="text-xl font-bold">Emission Intensity</h1>
				<h1>1,500 kgCo2e/dollar</h1>
			</div>
		</div>

		<div class="flex items-center p-5 bg-white rounded-xl shadow-xl w-full space-x-3">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide text-[#3A4CC6] lucide-atom"
				><circle cx="12" cy="12" r="1" /><path
					d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
				/><path
					d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
				/></svg
			>

			<div>
				<h1 class="text-xl font-bold">Emission Limit</h1>
				<h1>30,000 kgCo2e</h1>
			</div>
		</div>
	</div>

	<section class="flex mt-5 space-x-10">
		<div class="w-full">
			<div class="p-5 bg-white shadow-xl w-full">
				<h1 class="text-sm mb-5">Weekly Emission graph</h1>

				<div class="w-full">
					<canvas bind:this={monthlyData} id="monthlyData"></canvas>
				</div>
			</div>

			<div class="p-5 bg-white shadow-xl w-full">
				<h1 class="text-sm mb-5">monthly Emission graph</h1>

				<div class="w-full">
					<canvas bind:this={WeeklyData} id="WeeklyData"></canvas>
				</div>
			</div>
		</div>

		<div class="bg-white shadow-md rounded-lg p-6 w-full border border-blue-200">
			<div class="flex justify-between w-full items-center mb-4">
				<h2 class="text-lg font-semibold">Real Time Data Table</h2>
				<button class="text-blue-500 flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 mr-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 4v16c0 .74.4 1.373 1 1.732m15-1.732V4c0-.74-.4-1.373-1-1.732M12 12v10m0-10V2m0 10h10m-10 0H2"
						/>
					</svg>
					Export Graph Data
				</button>
			</div>
			<div class="overflow-x-auto w-full">
				<table class="min-w-full border-collapse">
					<thead>
						<tr>
							<th class="border-b text-left py-2 px-4">Date</th>
							<th class="border-b text-left py-2 px-4">Time</th>
							<th class="border-b text-left py-2 px-4">Emitted Carbon</th>
						</tr>
					</thead>

					<tbody>
						{#each data as item (item._id)}
							<tr>
								<td class="py-2 px-4 border-b">{item.Time}</td>
								<td class="py-2 px-4 border-b">{item.Emission}</td>
								<td class="py-2 px-4 border-b">{item.Emission}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</section>
</section>
