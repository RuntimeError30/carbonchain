<script>
	import Blob from '../../images/blob.png';
	import { goto } from '$app/navigation';

	let firstName = '';
	let lastName = '';
	let company = '';
	let industry = '';
	let country = '';
	let countrycode = '';
	let email = '';
	let password = '';
	let confirmPass = '';
	let walletAddress = '';
	let message = '';

	const register = async () => {
		if (password !== confirmPass) {
			message = 'Passwords do not match';
			return;
		}
		try {
			const res = await fetch('/api/auth/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					firstName,
					lastName,
					company,
					industry,
					country,
					countrycode,
					email,
					password,
					confirmPass,
					walletAddress
				})
			});

			const data = await res.json();
			if (res.ok) {
				message = 'Registration successful, please login.';
				console.log('Registration Success:', data);
			} else {
				message = data.error || 'Registration failed.';
				console.log('Registration Error Data:', data);
			}
		} catch (error) {
			message = 'Registration failed due to an error.';
			console.error('Registration Fetch Error:', error);
		}
	};
</script>

<section>
	<div>
		<img src={Blob} class="w-[12%]" alt="" />
	</div>
	<div class="flex w-full justify-center items-center relative -top-7">
		<div class="bg-white shadow-xl items-start p-10 rounded-xl w-[35%]">
			<div class="w-full flex mb-5 justify-center">CARBON CHAIN</div>
			<div class="w-full">
				<h1 class="text-[30px] font-extrabold">Registration</h1>
				<h1 class="text-[12px]">"*" indicates required fields</h1>
			</div>

			<div class="w-full space-y-5 mt-10">
				<div class="flex space-x-5">
					<div class="input w-full flex flex-col static">
						<label
							for="firstname"
							class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white w-fit"
							>First Name</label
						>
						<input
							type="text"
							bind:value={firstName}
							id="firstname"
							name="firstname"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
					</div>

					<div class="input w-full flex flex-col static">
						<label
							for="lastname"
							class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white w-fit"
							>Last Name (Surename)</label
						>
						<input
							type="text"
							bind:value={lastName}
							id="lastname"
							name="lastname"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
					</div>
				</div>

				<div class="input w-full flex flex-col static">
					<label
						for="company"
						class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white w-fit"
						>Company Name</label
					>
					<input
						type="text"
						bind:value={company}
						id="company"
						name="company"
						class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
					/>
				</div>

				<div class="flex space-x-5">
					<div class="input w-full flex flex-col static">
						<label
							for="industry"
							class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white w-fit"
							>Industry</label
						>
						<input
							type="text"
							bind:value={industry}
							id="industry"
							name="industry"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
					</div>
					<div class="input w-full flex flex-col static">
						<label
							for="walletAddress"
							class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white w-fit"
							>Wallet Address</label
						>
						<input
							type="text"
							bind:value={walletAddress}
							id="walletAddress"
							name="walletAddress"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
					</div>
				</div>

				<div class="flex space-x-5">
					<div class="input w-full flex flex-col static">
						<label
							for="country"
							class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white w-fit"
							>Country</label
						>
						<input
							type="text"
							bind:value={country}
							id="country"
							name="country"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
					</div>
					<div class="input w-full flex flex-col static">
						<label
							for="countrycode"
							class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white w-fit"
							>Country Code</label
						>
						<input
							type="text"
							bind:value={countrycode}
							id="countrycode"
							name="countrycode"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
					</div>
				</div>

				<div class="input w-full flex flex-col static">
					<label
						for="email"
						class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white w-fit"
						>Business Email</label
					>
					<input
						type="text"
						bind:value={email}
						id="email"
						name="email"
						class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
					/>
				</div>

				<div class="flex space-x-5">
					<div class="input w-full flex flex-col static">
						<label
							for="password"
							class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white w-fit"
							>Enter New Password</label
						>
						<input
							type="password"
							bind:value={password}
							id="password"
							name="password"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
					</div>
					<div class="input w-full flex flex-col static">
						<label
							for="confirmPass"
							class="text-stone-800 text-xs font-base relative top-2 ml-[7px] px-[3px] bg-white w-fit"
							>Confirm Password</label
						>
						<input
							type="password"
							bind:value={confirmPass}
							id="confirmPass"
							name="confirmPass"
							class="border-stone-800 input px-[10px] py-[11px] text-xs bg-white border-[1px] rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
						/>
					</div>
				</div>

				<div>
					<div class="flex space-x-2">
						<input type="checkbox" name="terms" id="terms" />
						<div class="flex">
							<h1 class="text-sm">I have Read the</h1>
							<h1 class="text-[#8876FB] text-sm font-bold">&nbsp;Terms & Conditions</h1>
						</div>
					</div>
					<div>
						<a class="text-[#8876FB] text-sm">Create a Digital Wallet</a>
					</div>
				</div>
				<button on:click={register} class="flex justify-center w-full">
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
							Registration
						</h1>
					</div>
				</button>
				<p>{message}</p>
				<div class="flex justify-center text-sm w-full">
					<h1>Already Have Device?</h1>
					<a class="text-[#8876FB] font-bold" on:click={() => goto('/loginRoute')}>Login</a>
				</div>
			</div>
		</div>
	</div>
	<footer class="w-full flex justify-center space-x-2 relative -top-1">
		<h1 class="text-sm text-slate-300">All Right Reserved</h1>
		<h1 class="text-sm text-slate-300">|</h1>
		<h1 class="text-sm text-slate-300">Team Chain Crafters</h1>
	</footer>
</section>
