<script>
	import Blob from '../../images/blob.png';
	import Blob2 from '../../images/blob2.png';
	import { goto } from '$app/navigation';
</script>

<section>
	<div>
		<img src={Blob} class="w-[12%]" alt="" />
	</div>
	<div class="flex w-full justify-center items-center">
		<div class="bg-white shadow-xl items-start p-10 rounded-xl w-[35%] relative -top-10">
			<div class="w-full flex justify-center">CARBON CHAIN</div>
			<div class="w-full">
				<h1 class="text-[30px] font-extrabold">Recover Password</h1>
				<h1 class="text-[12px]">Enter your secret masterkey to continue</h1>
			</div>

			<div class="w-full space-y-5 mt-5">
				<div class="w-full space-y-5">
					<div class="flex space-x-10">
						<input
							type="text"
							placeholder="1."
							name="input"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
						<input
							type="text"
							placeholder="2."
							name="input"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
						<input
							type="text"
							placeholder="3."
							name="input"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
					</div>

					<div class="flex space-x-10">
						<input
							type="text"
							placeholder="4."
							name="input"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
						<input
							type="text"
							placeholder="5."
							name="input"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
						<input
							type="text"
							placeholder="6."
							name="input"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
					</div>
					<div class="flex space-x-10">
						<input
							type="text"
							placeholder="7."
							name="input"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
						<input
							type="text"
							placeholder="8."
							name="input"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
						<input
							type="text"
							placeholder="9."
							name="input"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
					</div>
					<div class="flex space-x-10">
						<input
							type="text"
							placeholder="10."
							name="input"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
						<input
							type="text"
							placeholder="11."
							name="input"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
						<input
							type="text"
							placeholder="12"
							name="input"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
					</div>
				</div>
				<div class="pt-3">
					<h1>Enter New Password</h1>
				</div>
				<div class="input w-full flex flex-col static">
					<label
						for="input"
						class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white
                         w-fit">New Password</label
					>
					<input
						type="text"
						placeholder=""
						name="input"
						class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
					/>
				</div>

				<div class="input w-full flex flex-col static">
					<label
						for="input"
						class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white
                         w-fit">Retype New Password</label
					>
					<input
						type="password"
						placeholder=""
						name="input"
						class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
					/>
				</div>

				<button
					id="buttonDiv"
					class="flex justify-center w-full"
					on:click={() => goto('/loginRoute')}
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
							Change Password
						</h1>
					</div>
				</button>
				<div class="flex justify-center text-sm w-full">
					<h1>Already have an Account?</h1>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="text-[#8876FB] font-bold" on:click={() => goto('/loginRoute')}>Login</a>
				</div>
			</div>
		</div>
	</div>
	<footer class="w-full flex justify-center space-x-2 relative">
		<h1 class="text-sm text-slate-300">All Right Reserved</h1>
		<h1 class="text-sm text-slate-300">|</h1>
		<h1 class="text-sm text-slate-300">Team Chain Crafters</h1>
	</footer>
</section>
