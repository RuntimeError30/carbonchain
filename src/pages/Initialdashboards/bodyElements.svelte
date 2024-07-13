<script>
	import { goto } from '$app/navigation';
</script>

<section class="w-full flex">
	<div class="p-10 bg-whiten shadow-xl rounded-xl w-1/2 h-fit">
		<h1 class="font-bold text-[20px] mb-3">First Time Setup</h1>
		<h1 class="text-[20px]">Welcome,</h1>
		<h1>Please insert your device ID to access your dashboard</h1>

		<div class="">
			<div class="input w-full flex mt-10 flex-col static">
				<label
					for="input"
					class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white
                         w-fit">Device ID</label
				>
				<input
					type="text"
					placeholder=""
					name="input"
					class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
				/>
			</div>
			<button
				id="buttonDiv"
				class="flex mt-5 justify-center w-full"
				on:click={() => goto('/Dashboard')}
			>
				<div class="flex items-center">
					<div
						class="flex items-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#3A4CC6] to-[#8876FB] z-50"
					>
						<div class="w-full flex justify-center items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#ffffff"
								stroke-width="1"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-move-right"
								><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg
							>
						</div>
					</div>
					<h1 class="border-[1px] relative -left-3 border-stone-400 rounded-md px-3 text-sm py-1">
						Register Device
					</h1>
				</div>
			</button>
		</div>
	</div>
	<div class="bg-whiten shadow-xl rounded-xl w-1/2 h-fit p-5 ml-5">
		<h1 class="text-[20px]">Find the Device ID</h1>
		<h1 class="text-sm">You can find the device ID below on the packet of your device</h1>
	</div>
</section>
