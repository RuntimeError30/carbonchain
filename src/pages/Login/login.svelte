<script>
	import Blob from '../../images/blob.png';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let message = '';

	const login = async () => {
		const res = await fetch('/api/auth/login', {
			
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password })
		});

		const data = await res.json();
		console.log('Response:', res);
		console.log('Data:', data);

		console.log('resprop: ', res);

		if (res.ok) {
			localStorage.setItem('token', data.token);
			goto('/initialSetup');
		} else {
			message = data.error;
		}

		console.log(email);
	};
</script>

<section>
	<div>
		<img src={Blob} class="w-[12%]" alt="" />
	</div>
	<div class="flex w-full justify-center items-center">
		<div class="bg-white shadow-xl items-start p-10 rounded-xl w-[35%]">
			<div class="w-full flex mb-5 justify-center">CARBON CHAIN</div>
			<div class="w-full">
				<h1 class="text-[30px] font-extrabold">Login</h1>
				<h1 class="text-[12px]">"*" indicates required fields</h1>
			</div>

			<div class="w-full space-y-5 mt-10">
				<div class="input w-full flex flex-col static">
					<label
						for="input"
						class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white
                         w-fit">Email</label
					>
					<input
						type="text"
						bind:value={email}
						placeholder=""
						name="input"
						class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
					/>
				</div>

				<div class="input w-full flex flex-col static">
					<label
						for="input"
						class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white
                         w-fit">Password</label
					>
					<input
						type="password"
						bind:value={password}
						placeholder=""
						name="input"
						class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
					/>
				</div>
				<a href="/forgetPass" class="text-[#8876FB] text-xs mt-2">Forgot Password?</a>

				<button id="buttonDiv" class="flex justify-center w-full" on:click={login}>
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
							Login
						</h1>
					</div>
				</button>
				<p>{message}</p>
				<div class="flex justify-center text-sm w-full">
					<h1>New User?</h1>
					<a class="text-[#8876FB] font-bold" on:click={() => goto('/.')}>Register here</a>
				</div>
			</div>
		</div>
	</div>
	<footer class="w-full flex justify-center space-x-2 relative top-5">
		<h1 class="text-sm text-slate-300">All Right Reserved</h1>
		<h1 class="text-sm text-slate-300">|</h1>
		<h1 class="text-sm text-slate-300">Team Chain Crafters</h1>
	</footer>
</section>
