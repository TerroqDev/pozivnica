<div class="flex flex-col px-8 pt-8">
	<label for="ime" class="text-gray-700">Ime</label>
	<input
		type="text"
		id="ime"
		name="ime"
		class="border-0 border-b-2 px-0 font-noto text-gray-600 focus:ring-0"
	/>
	<label for="prezime" class="pt-4 text-gray-700">Prezime</label>
	<input
		type="text"
		id="prezime"
		name="prezime"
		class="border-0 border-b-2 px-0 font-noto text-gray-600 focus:ring-0"
	/>
	<label for="dolazak" class="pt-4 text-gray-700">Potvrda dolaska</label>
	<select id="dolazak" class="border-0 border-b-2 px-0 font-noto text-gray-600 focus:ring-0">
		<option selected>Odaberite</option>
		<option value="da">Da</option>
		<option value="ne">Na</option>
	</select>
	<label for="brojgostiju" class="pt-4 text-gray-700">Broj gostiju</label>
	<select id="brojgostiju" class="border-0 border-b-2 px-0 font-noto text-gray-600 focus:ring-0">
		<option selected>Odaberite</option>
		<option value="1">1</option>
		<option value="2">2</option>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5">5</option>
		<option value="6">6</option>
		<option value="7">7</option>
	</select>
	<label for="poruka" class="pt-4 text-gray-700">Poruka</label>
	<textarea
		id="poruka"
		name="poruka"
		rows="3"
		class="border-0 border-b-2 px-0 font-noto text-gray-600 focus:ring-0"
	></textarea>
	<div class="flex justify-center pt-8">
		<button
			class="border-2 border-gray-600 px-4 py-2 text-xl font-semibold uppercase tracking-widest text-gray-700"
			>Posalji</button
		>
	</div>
</div>
