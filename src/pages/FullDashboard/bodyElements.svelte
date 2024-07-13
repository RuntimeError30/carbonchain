<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import Chart from 'chart.js/auto';

	// Data Fetch from DB
	let data = [];
	let totalEmission = 0;

	// Fetching from Database
	onMount(async () => {
		const response = await fetch('/api/data');
		data = await response.json();

		// Emission Total Code

		totalEmission = data.reduce((acc, item) => acc + item.Emission, 0);
	});

	export let value = 6 / 24;
	console.log(value);

	let svgContainer;
	let svgContainer2;

	onMount(() => {
		const width = 350;
		const height = 350;
		const thickness = 10;

		const radius = Math.min(width, height) / 2;

		const svg = d3.select(svgContainer).attr('width', width).attr('height', height);

		const g = svg.append('g').attr('transform', `translate(${width / 2}, ${height / 2})`);

		const background = g
			.append('path')
			.datum({ endAngle: 2 * Math.PI })
			.style('fill', '#eee')
			.attr(
				'd',
				d3
					.arc()
					.innerRadius(radius - thickness)
					.outerRadius(radius)
					.startAngle(0)
			);

		const foreground = g
			.append('path')
			.datum({ endAngle: value * 2 * Math.PI })
			.style('fill', 'url(#gradient)')
			.attr(
				'd',
				d3
					.arc()
					.innerRadius(radius - thickness)
					.outerRadius(radius)
					.startAngle(0)
			);

		svg
			.append('defs')
			.append('linearGradient')
			.attr('id', 'gradient')
			.attr('x1', '0%')
			.attr('y1', '0%')
			.attr('x2', '100%')
			.attr('y2', '100%')
			.selectAll('stop')
			.data([
				{ offset: '0%', color: '#A57AFF' },
				{ offset: '100%', color: '#634999' }
			])
			.enter()
			.append('stop')
			.attr('offset', (d) => d.offset)
			.attr('stop-color', (d) => d.color);

		// barchart
	});

	// cchart.js

	let HourlyData;

	onMount(() => {
		const magnetometerCtx = HourlyData.getContext('2d');

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

		const chartHeight = 300; // Set the desired height here

		const commonOptions = {
			maintainAspectRatio: true // Enable aspect ratio
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
			HourlyData.height = chartHeight;
		};

		new Chart(magnetometerCtx, carbon1Config);
		resizeCharts();
	});
</script>

<section class="w-full">
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
				<h1>{totalEmission} kgCo2e</h1>
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
		<div class="bg-white shadow-xl p-10 rounded-xl flex flex-col items-center justify-center">
			<h1 class="text-sm mb-5">Real Time Device Monitoring</h1>
			<svg bind:this={svgContainer}></svg>
			<div class="absolute flex flex-col items-center justify-center">
				<div class="text-lg font-semibold">Emission Rate</div>
				<div class="text-4xl font-bold">{value}</div>
				<div class="text-sm">Tons/hr</div>
			</div>
			<h1 class="text-sm mt-5">Present Emission Rate: {value} Tons/Hour</h1>
			<h1 class="text-sm">Temperature Outside: 39 Degree Celsius</h1>
		</div>

		<div class="w-full">
			<div class="p-5 bg-white shadow-xl w-full">
				<h1 class="text-sm mb-5">Real Time Emission graph</h1>

				<div>
					<canvas bind:this={HourlyData} id="HourlyData"></canvas>
				</div>
			</div>
		</div>
	</section>
</section>
